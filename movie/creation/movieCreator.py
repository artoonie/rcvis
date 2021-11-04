"""
Movie generation entry point.
Allows creation of movies from a jsonConfig at various resolutions.
"""

import os
import tempfile
import time

from django.core.files import File
from django.urls import reverse
from moviepy.config import change_settings
from moviepy.editor import AudioFileClip, CompositeVideoClip, ImageClip, TextClip,\
    concatenate_videoclips
import selenium

from common.viewUtils import get_script_to_disable_animations
from rcvis.settings import MOVIE_FONT_NAME
from visualizer.descriptors.roundDescriber import Describer
from visualizer.graph.graphCreator import make_graph_with_file
from movie import models
from movie.creation.textToSpeech import TextToSpeechFactory


change_settings({"FFMPEG_BINARY": os.environ.get("IMAGEIO_FFMPEG_EXE", "/usr/bin/ffmpeg")})


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
        self.config = jsonconfig
        self.size = size

        self.fontName = MOVIE_FONT_NAME

        self.toDelete = []

    def _delete_intermediate_clips(self):
        for clip in self.toDelete:
            clip.close()
            del clip
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

        url = f"rcvis.com/v/{self.config.slug}\n\n\n"
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

    def _set_captions_on_page(self, roundNum, caption):
        roundText = "Round " + str(roundNum + 1)
        captionText = caption.replace("'", "\\'")
        roundScript = f"document.getElementById('movieRoundNum').innerHTML = '{roundText}';"
        captionScript = f"document.getElementById('caption').innerHTML = '{captionText}';"
        self.browser.execute_script(roundScript)
        self.browser.execute_script(captionScript)

    def _generate_image_for_round_synchronously(self, roundNum):
        try:
            self.browser.execute_script(f'transitionEachBarForRound({roundNum});')
            time.sleep(0.3)  # flushAllD3Transitions doesn't seem to work...
            self.browser.execute_script("flushAllD3Transitions();")
        except selenium.common.exceptions.JavascriptException as exception:
            errorText = "This error commonly occurs with Xvfb issues: "
            errorText += str(exception)
            errorText += "\n\nCurrent browser context:\n"
            errorText += self.browser.page_source
            raise ProbablyFailedToLaunchBrowser(errorText) from exception

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

    def _generate_gif_for_round(self, caption, duration, roundNum):
        # First update the HTML to match the caption & round num
        self._set_captions_on_page(roundNum, caption)

        # Create background image
        imageClip0 = self._generate_image_for_round_synchronously(roundNum)

        # 1s
        imageClip1 = imageClip0.set_duration(duration)
        imageClip = imageClip1.resize(self.size)

        self.toDelete.extend([imageClip0, imageClip1, imageClip])

        return imageClip

    def _generate_initial_summary(self, roundDescriber):
        """ The first thing we do is show the results. """
        caption = roundDescriber.describe_initial_summary(isForVideo=True)

        lastRound = self._get_num_rounds() - 1
        return self._generate_clip_with_caption(lastRound, caption)

    def _generate_clip_with_caption(self, roundNum, caption):
        """ Uses the caption to create audio and visual captions for the round """
        # First update the HTML to match the caption & round num
        self._set_captions_on_page(roundNum, caption)

        # Create audio
        generatedAudioWrapper = self._spawn_audio_creation_with_caption(caption)

        # Create background image
        imageClip0 = self._generate_image_for_round_synchronously(roundNum)

        # Download audio
        audioFile = generatedAudioWrapper.download_synchronously()
        audioClip = AudioFileClip(audioFile.name)
        audioDuration = audioClip.duration

        # Set audio durations
        imageClip = imageClip0.set_duration(audioDuration)

        # Combine everything
        combined0 = CompositeVideoClip([imageClip])
        combined1 = combined0.set_duration(audioDuration)
        combined2 = combined1.set_audio(audioClip)
        combined = combined2.resize(self.size)

        self.toDelete.extend([audioClip,
                              combined0, combined1, combined2, combined,
                              imageClip0, imageClip])

        return combined

    def _get_num_rounds(self):
        """ Returns the number of rounds in this jsonconfig """
        return len(self.graph.summarize().rounds)

    def make_static_image(self, outputFilename):
        """ Saves a static title image showing the last round, saving to outputFilename """
        lastRound = self._get_num_rounds() - 1
        imageClip = self._generate_image_for_round_synchronously(lastRound)
        imageClip.save_frame(outputFilename)

    def make_movie(self, mp4Filename):
        """ Create a movie at a specific resolution """
        roundDescriber = Describer(self.graph, self.config, summarizeAsParagraph=True)

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
                mp4Filename,
                fps=2,
                temp_audiofile=tf.name,
                audio_codec='aac')

        # moviepy is awful at garbage collection. Do it manually.
        self.toDelete.extend(imageClips)
        self.toDelete.append(composite)
        self._delete_intermediate_clips()

    def make_gif(self, gifFilename):
        """ Creates a gif without titles or captions, just the rounds """
        imageClips = []

        showLogoScript = "document.getElementById('logo').style.display = 'block';"
        self.browser.execute_script(showLogoScript)

        # Each round
        for i in range(self._get_num_rounds()):
            duration = 1 if i != self._get_num_rounds() - 1 else 5
            clip = self._generate_gif_for_round(
                f"Ranked-Choice Voting results for<br/>{self.graph.title}", duration, i)
            imageClips.append(clip)

        composite = concatenate_videoclips(imageClips)
        composite.write_gif(gifFilename, fps=1)

        hideLogoScript = "document.getElementById('logo').style.display = 'none';"
        self.browser.execute_script(hideLogoScript)

        self.toDelete.extend(imageClips)
        self.toDelete.append(composite)
        self._delete_intermediate_clips()


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
        self.browser.execute_script(get_script_to_disable_animations())

    # pylint: disable=too-many-arguments
    @classmethod
    def save_and_upload(cls, movie, slug, mp4FileObject, gifFileObject, titleImageFileObject):
        """
        Saves data to the given movie object and uploads the video and image
        to the movie model.
        """
        # Note: do not use get_available_name, as .file_overwrite is True
        mp4Fn = movie.movieFile.storage.get_alternative_name(file_root=slug, file_ext=".mp4")
        gifFn = movie.gifFile.storage.get_alternative_name(file_root=slug, file_ext=".gif")
        imageFn = movie.titleImage.storage.get_alternative_name(file_root=slug, file_ext=".png")
        movie.movieFile.save(mp4Fn, File(mp4FileObject))
        movie.gifFile.save(gifFn, File(gifFileObject))
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

        with tempfile.NamedTemporaryFile(suffix=".mp4") as mp4TempFile, \
                tempfile.NamedTemporaryFile(suffix=".gif") as gifTempFile, \
                tempfile.NamedTemporaryFile(suffix=".png") as imageTempFile:
            try:
                creator.make_movie(mp4TempFile.name)
                creator.make_static_image(imageTempFile.name)
                creator.make_gif(gifTempFile.name)
                self.save_and_upload(
                    movie,
                    self.jsonconfig.slug,
                    mp4TempFile,
                    gifTempFile,
                    imageTempFile)
            finally:
                # Force additional garbage collection asap
                del creator

        return movie
