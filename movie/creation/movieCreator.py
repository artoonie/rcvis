"""
Movie generation entry point.
Allows creation of movies from a jsonConfig at various resolutions.
"""

import tempfile
import time

from django.core.files import File
from django.urls import reverse
from moviepy.config import change_settings
from moviepy.editor import AudioFileClip, CompositeVideoClip, ImageClip, TextClip,\
    concatenate_videoclips
import selenium

from rcvis.settings import MOVIE_FONT_NAME
from visualizer.graphCreator.graphCreator import make_graph_with_file
from movie import models
from movie.creation.textToSpeech import TextToSpeechFactory
from movie.creation.describer import Describer


change_settings({"FFMPEG_BINARY": "/usr/bin/ffmpeg"})


class ProbablyFailedToLaunchBrowser(Exception):
    """ A common error when the browser has an issue. """


class SingleMovieCreator():
    """ Class for creation of a single movie at a single resolution. """

    def __init__(self, browser, textToSpeechFactory, jsonconfig, size):
        """ Initialize all class data. """
        self.browser = browser
        self.textToSpeechFactory = textToSpeechFactory
        self.graph = make_graph_with_file(jsonconfig.jsonFile,
                                          jsonconfig.excludeFinalWinnerAndEliminatedCandidate)
        self.slug = jsonconfig.slug
        self.size = size

        self.fontName = MOVIE_FONT_NAME

        self.toDelete = []

    def _text_on_background(self, writtenText, spokenText, backgroundImageFn):
        """
        Writes writtenText on the given background image,
        and creates audio with text-to-speech spokenText.
        writtenText and spokenText should be the same in most cases.
        """
        generatedAudioWrapper = self._spawn_audio_creation_with_caption(spokenText)

        title = TextClip(writtenText,
                         font=self.fontName,
                         fontsize=70,
                         color="black",
                         size=self.size,
                         method="caption",
                         align="center")

        background0 = ImageClip(backgroundImageFn)
        background = background0.resize(self.size)  # pylint: disable=no-member

        audioFile = generatedAudioWrapper.download_synchronously()
        audioClip = AudioFileClip(audioFile.name)
        duration = audioClip.duration

        combined0 = CompositeVideoClip([background, title])
        combined1 = combined0.set_duration(duration)
        combined = combined1.set_audio(audioClip)

        self.toDelete.extend([title, background0, background, audioClip,
                              combined0, combined1, combined])

        return combined

    def _make_title_card(self):
        """ Creates the introduction / title card. """
        text = "Ranked Choice Voting Election Results\n\n\n" + self.graph.title
        backgroundImageFn = "static/movie/bg-horizontal.png"
        return self._text_on_background(text, text, backgroundImageFn)

    def _make_closing_card(self):
        """ Creates the credits / closing card. """
        writtenText = "See more details at rcvis.com"
        spokenText = "See more details at R C Vis dot com"
        backgroundImageFn = "static/movie/bg-horizontal.png"
        primary = self._text_on_background(writtenText, spokenText, backgroundImageFn)

        url = f"rcvis.com/v/{self.slug}\n\n\n"
        urlText0 = TextClip(url,
                            font=self.fontName,
                            fontsize=35,
                            color="black",
                            size=self.size,
                            method="caption",
                            align="South")
        urlText = urlText0.set_duration(primary.duration)

        combined = CompositeVideoClip([primary, urlText])
        self.toDelete.extend([primary, urlText, urlText0, combined])

        return combined

    def _spawn_audio_creation_with_caption(self, caption):
        """ Returns a GeneratedAudioWrapper which you should poll for completion """
        return self.textToSpeechFactory.text_to_speech(caption)

    def _generate_captions_with_duration(self, roundNum, caption, duration):
        roundText0 = TextClip("\nRound " + str(roundNum + 1),
                              font=self.fontName,
                              fontsize=70,
                              color="black",
                              size=(self.size),
                              method="caption",
                              align="North")

        captionText0 = TextClip(caption,
                                font=self.fontName,
                                fontsize=40,
                                color="black",
                                size=(self.size),
                                method="caption",
                                align="South")
        roundText = roundText0.set_duration(duration)
        captionText = captionText0.set_duration(duration)

        self.toDelete.extend([roundText0, roundText, captionText0, captionText])

        return [roundText, captionText]

    def _generate_image_for_round_synchronously(self, roundNum):
        try:
            self.browser.execute_script(f'transitionEachBarForRound({roundNum+1});')
        except selenium.common.exceptions.JavascriptException as exception:
            errorText = "This error commonly occurs with Xvfb issues: "
            errorText += str(exception)
            errorText += "\n\nCurrent browser context:\n"
            errorText += self.browser.page_source
            raise ProbablyFailedToLaunchBrowser(errorText)
        time.sleep(0.1)

        with tempfile.NamedTemporaryFile(suffix=".png") as tf:
            self.browser.save_screenshot(tf.name)
            imageClip = ImageClip(tf.name)

        self.toDelete.append(imageClip)

        return imageClip

    def _generate_clip_for_round(self, roundNum, roundDescriber):
        """ Generates the entire clip describing this round. """
        # Create a caption for the round
        caption = roundDescriber.describe_round(roundNum)

        return self._generate_clip_with_caption(roundNum, caption)

    def _generate_initial_summary(self, roundDescriber):
        """ The first thing we do is show the results. """
        caption = roundDescriber.describe_initial_summary()

        lastRound = self._get_num_rounds() - 1
        return self._generate_clip_with_caption(lastRound, caption)

    def _generate_clip_with_caption(self, roundNum, caption):
        """ Uses the caption to create audio and visual captions for the round """
        # Create audio
        generatedAudioWrapper = self._spawn_audio_creation_with_caption(caption)

        # Create background image
        imageClip0 = self._generate_image_for_round_synchronously(roundNum)

        # Download audio
        audioFile = generatedAudioWrapper.download_synchronously()
        audioClip = AudioFileClip(audioFile.name)
        audioDuration = audioClip.duration

        # Create captions and set durations
        captionClips = self._generate_captions_with_duration(roundNum, caption, audioDuration)
        imageClip = imageClip0.set_duration(audioDuration)

        # Combine everything
        combined0 = CompositeVideoClip([imageClip] + captionClips)
        combined1 = combined0.set_duration(audioDuration)
        combined2 = combined1.set_audio(audioClip)
        combined = combined2.resize(self.size)

        self.toDelete.extend([audioClip,
                              combined0, combined1, combined2, combined,
                              imageClip0, imageClip])
        self.toDelete.extend(captionClips)

        return combined

    def _get_num_rounds(self):
        """ Returns the number of rounds in this jsonconfig """
        return len(self.graph.summarize().rounds)

    def make_static_image(self, outputFilename):
        """ Saves a static title image showing the last round, saving to outputFilename """
        lastRound = self._get_num_rounds() - 1
        imageClip = self._generate_image_for_round_synchronously(lastRound)
        imageClip.save_frame(outputFilename)

    def make_movie(self, outputFilename):
        """ Create a movie at a specific resolution """
        self.browser.set_window_size(self.size[0], self.size[1])
        roundDescriber = Describer(self.graph)

        imageClips = []

        # Title card
        imageClips.append(self._make_title_card())

        # Summarize the election
        clip = self._generate_initial_summary(roundDescriber)
        imageClips.append(clip)

        # Each round
        for i in range(self._get_num_rounds()):
            clip = self._generate_clip_for_round(i, roundDescriber)
            imageClips.append(clip)

        # Final card
        imageClips.append(self._make_closing_card())

        # Save to file
        composite = concatenate_videoclips(imageClips)
        with tempfile.NamedTemporaryFile(suffix=".mp4", delete=False) as tf:
            # Needs this tempfile or elasticbeanstalk will try writing to somewhere it can't
            # delete=False because moviepy will delete the file for us
            composite.write_videofile(
                outputFilename,
                fps=2,
                temp_audiofile=tf.name,
                audio_codec='aac')

        # moviepy is awful at garbage collection. Do it manually.
        self.toDelete.extend(imageClips)
        self.toDelete.append(composite)
        for clip in self.toDelete:
            clip.close()
            del clip
        self.toDelete = []


class MovieCreationFactory():
    """ Holds expensive-to-create resources necessary to create a movie """

    def __init__(self, browser, domain, jsonconfig):
        """
        Initializes the factory, accessing the movie-generation view for the given jsonconfig
        """
        self.browser = browser
        self.jsonconfig = jsonconfig
        self.textToSpeechFactory = TextToSpeechFactory()

        path = reverse('movieGenerationView', args=(jsonconfig.slug,))
        url = "%s%s" % (domain, path)

        self.browser.get(url)

    @classmethod
    def save_and_upload(cls, movie, slug, videoFileObject, titleImageFileObject):
        """
        Saves data to the given movie object and uploads the video and image
        to the movie model.
        """
        # Note: do not use get_available_name, as .file_overwrite is True
        videoFn = movie.movieFile.storage.get_alternative_name(file_root=slug, file_ext=".mp4")
        imageFn = movie.titleImage.storage.get_alternative_name(file_root=slug, file_ext=".png")
        movie.movieFile.save(videoFn, File(videoFileObject))
        movie.titleImage.save(imageFn, File(titleImageFileObject))
        movie.save()

    def make_one_movie_at_resolution(self, width, height):
        """ Create a movie at a specific resolution """
        self.browser.set_window_size(width, height)

        creator = SingleMovieCreator(
            browser=self.browser,
            textToSpeechFactory=self.textToSpeechFactory,
            jsonconfig=self.jsonconfig,
            size=(width, height))

        movie = models.Movie()
        movie.resolutionWidth = width
        movie.resolutionHeight = height
        movie.generatedOnApplicationVersion = "TODO"

        with tempfile.NamedTemporaryFile(suffix=".mp4") as videoTempFile, \
                tempfile.NamedTemporaryFile(suffix=".png") as imageTempFile:
            try:
                creator.make_movie(videoTempFile.name)
                creator.make_static_image(imageTempFile.name)
                self.save_and_upload(movie, self.jsonconfig.slug, videoTempFile, imageTempFile)
            finally:
                # Force additional garbage collection asap
                del creator

        return movie
