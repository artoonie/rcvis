"""
Unit and integration tests for automatic movie creation
"""

import os
import shutil
import tempfile

from django.contrib.auth import get_user_model
from django.contrib.staticfiles.testing import StaticLiveServerTestCase
from mock import patch
import mock
import moviepy

from common.testUtils import TestHelpers
from movie.creation.movieCreator import MovieCreationFactory, SingleMovieCreator
from movie.creation.textToSpeech import GeneratedAudioWrapper, TextToSpeechFactory
from movie.models import Movie, TextToSpeechCachedFile
from movie.tasks import create_movie_task
from visualizer.models import MovieGenerationStatuses

FILENAME_AUDIO = 'testData/audio.mp3'
FILENAME_SCRIPT = 'testData/expected-video-script.txt'
FILENAME_ARBITRARY_IMAGE = 'static/visualizer/logo-white.png'

TestHelpers.silence_logging_spam()

# Mock helpers
ORIG_FUNC_FOR_SPAWN_AUDIO = SingleMovieCreator._spawn_audio_creation_with_caption  # pylint: disable=protected-access
MOVIE_PATCH_PREFIX = 'movie.creation.movieCreator.SingleMovieCreator.'


class MovieCreationTestsMocked(StaticLiveServerTestCase):
    """ Tests for the Movie Creation module. Currently, these do not test the celery connection. """

    def setUp(self):
        prefix = 'movie.creation.textToSpeech.GeneratedAudioWrapper.'
        patcherGenerateAudioGetTaskStatus = patch(prefix + '_get_task_status', autospec=True)
        patcherGenerateAudioSpawn = patch(prefix + '_spawn_task', autospec=True)
        patcherDownload = patch(prefix + '_download', autospec=True)

        self.addCleanup(patcherGenerateAudioGetTaskStatus.stop)
        self.addCleanup(patcherGenerateAudioSpawn.stop)
        self.addCleanup(patcherDownload.stop)

        self.mockGenerateAudioGetTaskStatus = patcherGenerateAudioGetTaskStatus.start()
        self.mockGenerateAudioSpawn = patcherGenerateAudioSpawn.start()
        self.mockDownload = patcherDownload.start()

        self.mockGenerateAudioGetTaskStatus.return_value = {
            'SynthesisTask': {
                'TaskStatus': 'completed',
                'OutputUri': 'https://bucket.s3-region.amazonaws.com/generated_speech.fakefile.mp3'
            }
        }
        self.mockGenerateAudioSpawn.return_value = {
            'SynthesisTask': {
                'TaskId': 0
            }
        }
        self.mockDownload.side_effect = lambda self, uri, toFilename: {
            shutil.copy(FILENAME_AUDIO, toFilename)
        }

        TestHelpers.setup_host_mocks(self)
        TestHelpers.login(self.client)

    def tearDown(self):
        TestHelpers.logout(self.client)

    @classmethod
    def _num_movies(cls):
        return Movie.objects.count()

    @classmethod
    def _num_caches(cls):
        return TextToSpeechCachedFile.objects.count()

    @patch('movie.creation.movieCreator.SingleMovieCreator._get_num_rounds')
    def test_movie_task_without_celery(self, mockGetNumRounds):
        """ Test that the movie gets created when calling create_movie_task() directly """
        mockGetNumRounds.return_value = 1

        # Upload a file
        TestHelpers.get_multiwinner_upload_response(self.client)

        # Make sure nothing is cached
        assert TextToSpeechCachedFile.objects.count() == 0

        # Create the movie
        jsonConfig = TestHelpers.get_latest_upload()
        create_movie_task(jsonConfig.pk, self.live_server_url)

        # Make sure some things are cached
        assert TextToSpeechCachedFile.objects.count() == 4

        # TODO - why does this not work with .delay()? With celery running,
        # and the correct live_server_url, it accesses my localhost database
        # instead of the test database, so the pk doesn't align - why?

        # Ensure it's completed
        jsonConfig = TestHelpers.get_latest_upload()
        assert os.path.exists(jsonConfig.movieHorizontal.movieFile.path)
        assert os.path.exists(jsonConfig.movieHorizontal.gifFile.path)
        assert os.path.exists(jsonConfig.movieHorizontal.titleImage.path)
        assert jsonConfig.movieGenerationStatus == MovieGenerationStatuses.COMPLETE

        # Vertical movies are disabled now
        assert jsonConfig.movieVertical is None
        # assert os.path.exists(jsonConfig.movieVertical.movieFile.path)
        # assert os.path.exists(jsonConfig.movieVertical.gifFile.path)
        # assert os.path.exists(jsonConfig.movieVertical.titleImage.path)

        # Ensure it's loaded in the View
        response = self.client.get('/visualizeMovie=city-of-eastpointe-macomb-county-mi')
        self.assertEqual(response.status_code, 200)
        self.assertTemplateUsed(response, 'movie/only-movie.html')

    @patch('movie.tasks.create_movie_task.delay')
    def test_movie_task_by_url(self, mockCreateMovie):
        """ Test create_movie_task() is called with .delay() when accessing /createMovie """
        mockCreateMovie.return_value = None
        mockCreateMovie.assert_not_called()

        # Create admin user
        admin = get_user_model().objects.create_user('admin', 'admin@example.com', 'password')
        admin.is_staff = True
        admin.save()

        # Upload
        response = TestHelpers.get_multiwinner_upload_response(self.client)
        self.assertEqual(response['location'], "v/city-of-eastpointe-macomb-county-mi")

        # Create movie logged out, it should fail
        TestHelpers.logout(self.client)
        response = self.client.get('/createMovie=city-of-eastpointe-macomb-county-mi')
        self.assertEqual(response.status_code, 302)
        self.assertEqual(response['location'],
                         '/admin/login/?next=/createMovie%253Dcity-of-eastpointe-macomb-county-mi')
        mockCreateMovie.assert_not_called()

        # Log in and try again
        jsonConfig = TestHelpers.get_latest_upload()
        assert jsonConfig.movieGenerationStatus == MovieGenerationStatuses.NOT_REQUESTED
        self.client.post('/admin/login/', {'username': 'admin', 'password': 'password'})
        response = self.client.get('/createMovie=city-of-eastpointe-macomb-county-mi')

        # Make sure we see it requested - note, we mock out all future MovieGenerationStatuses
        jsonConfig = TestHelpers.get_latest_upload()
        assert jsonConfig.movieGenerationStatus == MovieGenerationStatuses.NOT_STARTED

        # Assert it redirects to a waiting page
        self.assertEqual(response.status_code, 302)
        self.assertEqual(response['location'],
                         "/visualizeMovie=city-of-eastpointe-macomb-county-mi")

        # Ensure progress has begun
        mockCreateMovie.assert_called_once()

        # Note - I wanted to test this without mocking, to watch the full
        # celery cycle, but the live browser uses the localhost database
        # not the test database and I haven't figured out how to resolve that

    def test_long_text_doesnt_fail(self):
        """ Make sure that very long text requests don't crash, but don't save a cache either. """

        def try_text_to_speech_with_strlen(size):
            """ Generate a long text size and download it. """
            veryLongText = 'x' * size
            generatedAudioWrapper = GeneratedAudioWrapper(None, None, veryLongText)

            with tempfile.NamedTemporaryFile(suffix='.mp3') as tf:
                wasReady = generatedAudioWrapper.download_if_ready(tf.name)
            assert wasReady

        assert self._num_caches() == 0
        try_text_to_speech_with_strlen(2048)
        assert self._num_caches() == 1
        try_text_to_speech_with_strlen(2049)
        assert self._num_caches() == 1

    def test_avoid_upload_collision(self):
        """ Ensure that a unique filename is created for each upload. Regression for the
            vertical upload immediately overriding the horizontal. """
        slug = "slug"
        assert self._num_movies() == 0

        with tempfile.NamedTemporaryFile(suffix=".mp4") as mp4Tf,\
                tempfile.NamedTemporaryFile(suffix=".gif") as gifTf,\
                tempfile.NamedTemporaryFile(suffix=".png") as imageTf:
            movie = Movie()
            movie.resolutionWidth = 1
            movie.resolutionHeight = 1
            movie.generatedOnApplicationVersion = "N/A"
            MovieCreationFactory.save_and_upload(movie, slug, mp4Tf, gifTf, imageTf)
            actualVideoFn = movie.movieFile.url
            actualGifFn = movie.gifFile.url
        assert actualVideoFn != slug
        assert slug in actualVideoFn
        assert '.mp4' in actualVideoFn  # might not be at the end - AWS adds keys to URL GET
        assert '.gif' in actualGifFn  # might not be at the end - AWS adds keys to URL GET
        assert self._num_movies() == 1

    @mock.patch('moviepy.video.VideoClip.VideoClip.write_videofile')
    @mock.patch(MOVIE_PATCH_PREFIX + '_generate_image_for_round_synchronously', autospec=True)
    @mock.patch(MOVIE_PATCH_PREFIX + '_spawn_audio_creation_with_caption', autospec=True)
    def test_captions_all_as_expected(
            self,
            mockSpawnAudio,
            mockGenerateImage,
            mockWriteVideoFile):
        """ Integration test to verify the end-to-end script """

        # Mock the audio generation to inspect captions
        mockSpawnAudio.side_effect = ORIG_FUNC_FOR_SPAWN_AUDIO
        TestHelpers.get_multiwinner_upload_response(self.client)
        jsonConfig = TestHelpers.get_latest_upload()

        # Mock the video generation to make it faster
        mockWriteVideoFile.return_value = None
        mockGenerateImage.return_value = moviepy.editor.ImageClip(FILENAME_ARBITRARY_IMAGE)

        create_movie_task(jsonConfig.pk, self.live_server_url)

        # Read the script and get each line
        with open(FILENAME_SCRIPT, 'r', encoding='utf-8') as f:
            lines = f.read().splitlines()
        # Allow \n to indicate multiline captions
        lines = [line.replace('\\n', '\n') for line in lines]
        # Create the mock calls
        callsForOneVideo = [mock.call(mock.ANY, caption=line) for line in lines]
        # Ensure each line is called twice, once horizontal once vertical
        isVerticalEnabled = False
        multiplier = 2 if isVerticalEnabled else 1
        mockSpawnAudio.assert_has_calls(callsForOneVideo * multiplier)

    @mock.patch('traceback.print_exc')
    def test_failure_status(self, mockTraceback):
        """ Test that the failure status is accurately set """
        mockTraceback.return_value = None  # Don't care to see the traceback - we know it fails

        TestHelpers.get_multiwinner_upload_response(self.client)
        jsonConfig = TestHelpers.get_latest_upload()
        create_movie_task(jsonConfig.pk, '/incorrect/url')

        jsonConfig = TestHelpers.get_latest_upload()
        assert jsonConfig.movieGenerationStatus == MovieGenerationStatuses.FAILED


class MovieCreationTestsIntegration(StaticLiveServerTestCase):
    """ Integration tests - no mocking here to test everything above
        that was mocked, but with short text """

    def test_caching_polly(self):
        """ Make sure that TextToSpeechCachedFile reads and writes properly """
        text = "a"
        textToSpeech = TextToSpeechFactory()

        # Not cached - must raise
        with self.assertRaises(TextToSpeechCachedFile.DoesNotExist):
            TextToSpeechCachedFile.objects.get(text=text)

        # This should create and cache the text
        tts = textToSpeech.text_to_speech(text)
        tts.download_synchronously()

        # Now it must not raise
        TextToSpeechCachedFile.objects.get(text=text)

        # And this time it should happen faster and without error
        tts = textToSpeech.text_to_speech(text)
        tts.download_synchronously()
