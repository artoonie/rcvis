""" Movie generation entry point. Allows creation of movies from a jsonConfig at various resolutions. """

import tempfile
import time

from django.core.files import File
from django.urls import reverse
from moviepy.editor import CompositeVideoClip, ImageClip, TextClip, concatenate_videoclips, AudioFileClip

from rcvis.settings import MOVIE_FONT_NAME
from visualizer.graphCreator.graphCreator import make_graph_with_file
from visualizer.models import AutoMovie
from visualizer.movie.textToSpeech import TextToSpeechFactory
from visualizer.movie.describer import Describer


class SingleMovieCreator():
    """ Class for creation of a single movie at a single resolution. """

    def __init__(self, browser, textToSpeechFactory, jsonconfig, width, height):
        """ Initialize all class data. """
        self.browser = browser
        self.textToSpeechFactory = textToSpeechFactory
        self.graph = make_graph_with_file(jsonconfig.jsonFile,
                                          jsonconfig.excludeFinalWinnerAndEliminatedCandidate)
        self.slug = jsonconfig.slug
        self.width = width
        self.height = height

        self.fontName = MOVIE_FONT_NAME

        self._all_clips_for_gc = []

    def _text_on_background(self, writtenText, spokenText, backgroundImageFn):
        """ Writes the given text on the given background image, plus adds audio as described by spokenText. writtenText and spokenText should be the same in most cases. """
        generatedAudioWrapper = self._spawn_audio_creation_with_caption(spokenText)

        title = TextClip(writtenText,
                         font=self.fontName,
                         fontsize=70,
                         color="black",
                         size=(self.width, self.height))

        background_0 = ImageClip(backgroundImageFn)
        background = background_0.resize((self.width, self.height))

        audioFile = generatedAudioWrapper.download_synchronously()
        audioClip = AudioFileClip(audioFile.name)
        duration = audioClip.duration

        combined_0 = CompositeVideoClip([background, title])
        combined_1 = combined_0.set_duration(duration)
        combined = combined_1.set_audio(audioClip)

        self._all_clips_for_gc.extend([title, background_0, background, audioClip,
                                       combined_0, combined_1, combined])

        return combined

    def _make_title_card(self):
        """ Creates the introduction / title card. """
        text = "Ranked Choice Voting Election Results\n\n\n" + self.graph.title
        backgroundImageFn = "static/movie/bg-horizontal.png"
        return self._text_on_background(text, text, backgroundImageFn)

    def _make_closing_card(self):
        """ Creates the credits / closing card. """
        writtenText = f"See more details at rcvis.com/visualize={self.slug}"
        spokenText = f"See more details at R C Vis dot com"
        backgroundImageFn = "static/movie/bg-horizontal.png"
        return self._text_on_background(writtenText, spokenText, backgroundImageFn)

    def _spawn_audio_creation_with_caption(self, caption):
        """ Returns a GeneratedAudioWrapper which you should poll for completion """
        return self.textToSpeechFactory.text_to_speech(caption)

    def _generate_clip_for_round(self, roundNum, roundDescriber):
        """ Generates the entire clip describing this round. """
        caption = roundDescriber.describe_round(roundNum)
        generatedAudioWrapper = self._spawn_audio_creation_with_caption(caption)

        self.browser.execute_script(f'transitionEachBarForRound({roundNum+1});')
        time.sleep(0.1)

        roundText_0 = TextClip("\nRound " + str(roundNum + 1),
                               font=self.fontName,
                               fontsize=70,
                               color="black",
                               size=(self.width, self.height),
                               method="caption",
                               align="North")

        captionText_0 = TextClip(caption,
                                 font=self.fontName,
                                 fontsize=40,
                                 color="black",
                                 size=(self.width, self.height),
                                 method="caption",
                                 align="South")

        with tempfile.NamedTemporaryFile(suffix=".png") as tf:
            self.browser.save_screenshot(tf.name)
            imageClip_0 = ImageClip(tf.name)

        audioFile = generatedAudioWrapper.download_synchronously()
        audioClip = AudioFileClip(audioFile.name)
        audioDuration = audioClip.duration
        roundText = roundText_0.set_duration(audioDuration)
        captionText = captionText_0.set_duration(audioDuration)
        imageClip = imageClip_0.set_duration(audioDuration)

        combined_0 = CompositeVideoClip([imageClip, roundText, captionText])
        combined_1 = combined_0.set_duration(audioDuration)
        combined_2 = combined_1.set_audio(audioClip)
        combined = combined_2.resize((self.width, self.height))

        self._all_clips_for_gc.extend([audioClip,
                                       combined_0, combined_1, combined_2, combined,
                                       roundText_0, roundText,
                                       imageClip_0, imageClip,
                                       captionText_0, captionText
                                       ])

        return combined

    def _getNumRounds(self):
        """ Returns the number of rounds in this jsonconfig """
        return len(self.graph.summarize().rounds)

    def makeMovie(self, outputFilename):
        """ Create a movie at a specific resolution """
        self.browser.set_window_size(self.width, self.height)
        roundDescriber = Describer(self.graph)

        imageClips = []

        # Title card
        imageClips.append(self._make_title_card())

        # Each round
        for i in range(self._getNumRounds()):
            clip = self._generate_clip_for_round(i, roundDescriber)
            imageClips.append(clip)

        # Final card
        imageClips.append(self._make_closing_card())

        # Save to file
        composite = concatenate_videoclips(imageClips)
        with tempfile.NamedTemporaryFile(suffix=".mp3", delete=False) as tf:
            # Needs this tempfile or elasticbeanstalk will try writing to somewhere it can't
            # delete=False because moviepy will delete the file for us
            composite.write_videofile(outputFilename, fps=12, temp_audiofile=tf.name)

        # moviepy is awful at garbage collection. Do it manually.
        self._all_clips_for_gc.extend(imageClips)
        self._all_clips_for_gc.append(composite)
        for clip in self._all_clips_for_gc:
            clip.close()
            del clip
        self._all_clips_for_gc = []


class MovieCreationFactory():
    """ Holds all the data necessary to creat a movie at """

    def __init__(self, browser, domain, jsonconfig):
        """ Initializes the factory, accessing the movie-generation view for the given jsonconfig """
        self.browser = browser
        self.jsonconfig = jsonconfig
        self.textToSpeechFactory = TextToSpeechFactory()

        path = reverse('movieGenerationView', args=(jsonconfig.slug,))
        url = "%s%s" % (domain, path)

        self.browser.get(url)

    def make_one_movie_at_resolution(self, width, height):
        """ Create a movie at a specific resolution """
        self.browser.set_window_size(width, height)

        creator = SingleMovieCreator(
            browser=self.browser,
            textToSpeechFactory=self.textToSpeechFactory,
            jsonconfig=self.jsonconfig,
            width=width,
            height=height)
        with tempfile.NamedTemporaryFile(suffix=".mp4") as tempFile:
            creator.makeMovie(tempFile.name)

            recommendedFilename = self.jsonconfig.slug + ".mp4"
            movie = AutoMovie()
            movie.resolutionWidth = width
            movie.resolutionHeight = height
            movie.generatedOnApplicationVersion = "TODO"
            movie.movieFile.save(recommendedFilename, File(tempFile))
            movie.save()

        # Force additional garbage collection asap
        del creator

        return movie
