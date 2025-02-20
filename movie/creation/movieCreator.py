"""
Movie generation entry point.
Allows creation of movies from a jsonConfig at various resolutions.
"""

import os
import tempfile
import time

from django.conf import settings
from django.core.files import File
from django.urls import reverse
from moviepy import AudioFileClip, CompositeVideoClip, ImageClip, TextClip, \
    concatenate_videoclips
from moviepy.video.fx.Resize import Resize
import selenium

from common.viewUtils import get_script_to_disable_animations
from visualizer.descriptors.roundDescriber import Describer
from visualizer.graph.graphCreator import make_graph_with_file
from movie import models
from movie.creation.textToSpeech import TextToSpeechFactory


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

        self.font = "Arial.ttf"

        self.toDelete = []

    def _delete_intermediate_clips(self):
        for clip in self.toDelete:
            clip.close()
        self.toDelete.clear()

    def _text_on_background(self, writtenText, spokenText, backgroundImageFn):
        """
        Writes writtenText on the given background image,
        and creates audio with text-to-speech spokenText.
        writtenText and spokenText should be the same in most cases.
        """
        generatedAudioWrapper = self._spawn_audio_creation_with_caption(spokenText)

        title = TextClip(text=writtenText,
                         font=self.font,
                         font_size=70,
                         color="black",
                         size=self.size,
                         method="caption",
                         text_align="center")

        background0 = ImageClip(backgroundImageFn)
        background = background0.with_effects([Resize(self.size)])

        audioFile = generatedAudioWrapper.download_synchronously()
        audioClip = AudioFileClip(audioFile.name)

        combined = CompositeVideoClip([background, title]).with_audio(audioClip)
        combined.duration = audioClip.duration

        self.toDelete.extend([title, background0, background, audioClip, combined])

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
        urlText = TextClip(text=url,
                            font=self.font,
                            font_size=35,
                            color="black",
                            size=self.size,
                            method="caption",
                            vertical_align="bottom")

        combined = CompositeVideoClip([primary, urlText])
        combined.duration = primary.duration
        self.toDelete.extend([primary, urlText, combined])

        return combined

    def _spawn_audio_creation_with_caption(self, caption):
        """ Returns a GeneratedAudioWrapper which you should poll for completion """
        return self.textToSpeechFactory.text_to_speech(caption)

    def _set_captions_on_page(self, roundNum, caption, showGraphTitleInsteadOfRoundNum):
        if showGraphTitleInsteadOfRoundNum:
            roundText = self.graph.title
        else:
            roundText = "Round " + str(roundNum + 1)
        captionText = caption.replace("'", "\\'")
        roundScript = f"document.getElementById('movieRoundNum').innerHTML = '{roundText}';"
        captionScript = f"document.getElementById('caption').innerHTML = '{captionText}';"
        self.browser.execute_script(roundScript)
        self.browser.execute_script(captionScript)

    def _generate_image_for_round_synchronously(self, roundNum):
        try:
            self.browser.execute_script(f'transitionEachBarForRound({roundNum})')
        except selenium.common.exceptions.JavascriptException as exception:
            errorText = "This error commonly occurs with Xvfb issues: "
            errorText += str(exception)
            errorText += "\n\nCurrent browser context:\n"
            errorText += self.browser.page_source[0:1000]
            raise ProbablyFailedToLaunchBrowser(errorText) from exception

        self.browser.execute_script("flushAllD3Transitions();")
        time.sleep(1.5)  # flushAllD3Transitions doesn't seem to work, so just sleep

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
        self._set_captions_on_page(roundNum, caption, False)

        # Create background image
        imageClip0 = self._generate_image_for_round_synchronously(roundNum)

        # 1s
        imageClip = imageClip0.with_effects([Resize(self.size)])
        imageClip.duration = duration

        self.toDelete.extend([imageClip0, imageClip])

        return imageClip

    def _generate_initial_summary(self, roundDescriber):
        """ The first thing we do is show the results. """
        caption = roundDescriber.describe_initial_summary(isForVideo=True)

        lastRound = self._get_num_rounds() - 1
        return self._generate_clip_with_caption(
            lastRound, caption, showGraphTitleInsteadOfRoundNum=True)

    def _generate_clip_with_caption(self, roundNum, caption, showGraphTitleInsteadOfRoundNum=False):
        """ Uses the caption to create audio and visual captions for the round """
        # First update the HTML to match the caption & round num
        self._set_captions_on_page(roundNum, caption, showGraphTitleInsteadOfRoundNum)

        # Create audio
        generatedAudioWrapper = self._spawn_audio_creation_with_caption(caption)

        # Create background image
        imageClip = self._generate_image_for_round_synchronously(roundNum)

        # Download audio
        audioFile = generatedAudioWrapper.download_synchronously()
        audioClip = AudioFileClip(audioFile.name)

        # Combine everything
        combined = CompositeVideoClip([imageClip]) \
            .with_audio(audioClip) \
            .with_effects([Resize(self.size)])
        combined.duration = audioClip.duration

        self.toDelete.extend([audioClip, combined, imageClip])

        return combined

    def _get_num_rounds(self):
        """ Returns the number of rounds in this jsonconfig """
        return len(self.graph.summarize().rounds)

    def make_movie(self, mp4Filename, staticPngFilename):
        """ Create a movie at a specific resolution """
        roundDescriber = Describer(self.graph, self.config, summarizeAsParagraph=True)

        imageClips = []

        # Title card
        imageClips.append(self._make_title_card())

        # Summarize the election
        clip = self._generate_initial_summary(roundDescriber)
        clip.save_frame(staticPngFilename)  # this is also the static frame
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
        url = f"{domain}{path}"

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
                creator.make_movie(mp4TempFile.name, imageTempFile.name)
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
