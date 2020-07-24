"""
Unit and integration tests for automatic movie creation
"""

import os
import shutil
import tempfile

from django.contrib.auth.models import User
from django.contrib.staticfiles.testing import StaticLiveServerTestCase
from mock import patch

from common.testUtils import TestHelpers
from movie.creation.textToSpeech import GeneratedAudioWrapper
from movie.models import TextToSpeechCachedFile
from movie.tasks import create_movie
from visualizer.models import MovieGenerationStatuses

FILENAME_AUDIO = 'testData/audio.mp3'


class MovieCreationTests(StaticLiveServerTestCase):
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

    @classmethod
    def _num_caches(cls):
        return len(TextToSpeechCachedFile.objects.all())  # pylint:disable=no-member

    @patch('movie.creation.movieCreator.SingleMovieCreator._get_num_rounds')
    def test_movie_task_without_celery(self, mockGetNumRounds):
        """ Test that the movie gets created when calling create_movie() directly """
        mockGetNumRounds.return_value = 1

        # Upload a file
        TestHelpers.get_multiwinner_upload_response(self.client)

        # Make sure nothing is cached
        assert len(TextToSpeechCachedFile.objects.all()) == 0  # pylint:disable=no-member

        # Create the movie
        jsonConfig = TestHelpers.get_latest_json_config()
        create_movie(jsonConfig.pk, self.live_server_url)

        # Make sure some things are cached
        assert len(TextToSpeechCachedFile.objects.all()) == 3  # pylint:disable=no-member

        # TODO - why does this not work with .delay()? With celery running,
        # and the correct live_server_url, it accesses my localhost database
        # instead of the test database, so the pk doesn't align - why?

        # Ensure it's completed
        jsonConfig = TestHelpers.get_latest_json_config()
        assert os.path.exists(jsonConfig.movieHorizontal.movieFile.path)
        assert os.path.exists(jsonConfig.movieVertical.movieFile.path)
        assert jsonConfig.movieGenerationStatus == MovieGenerationStatuses.COMPLETE

        # Ensure it's loaded in the View
        response = self.client.get('/visualizeMovie=macomb-multiwinner-surplusjson')
        self.assertEqual(response.status_code, 200)
        self.assertTemplateUsed(response, 'movie/only-movie.html')

    @patch('movie.tasks.create_movie.delay')
    def test_movie_task_by_url(self, mockCreateMovie):
        """ Test create_movie() is called with .delay() when accessing /createMovie as an admin """
        mockCreateMovie.return_value = None
        mockCreateMovie.assert_not_called()

        # Create admin user
        admin = User.objects.create_user('admin', 'admin@example.com', 'password')
        admin.is_staff = True
        admin.save()

        # Upload
        response = TestHelpers.get_multiwinner_upload_response(self.client)
        self.assertEqual(response['location'], "visualize=macomb-multiwinner-surplusjson")

        # Create movie logged out, it should fail
        response = self.client.get('/createMovie=macomb-multiwinner-surplusjson')
        self.assertEqual(response.status_code, 302)
        self.assertEqual(response['location'],
                         '/admin/login/?next=/createMovie%253Dmacomb-multiwinner-surplusjson')
        mockCreateMovie.assert_not_called()

        # Log in and try again
        jsonConfig = TestHelpers.get_latest_json_config()
        assert jsonConfig.movieGenerationStatus == MovieGenerationStatuses.NOT_REQUESTED
        self.client.post('/admin/login/', {'username': 'admin', 'password': 'password'})
        response = self.client.get('/createMovie=macomb-multiwinner-surplusjson')

        # Make sure we see it requested - note, we mock out all future MovieGenerationStatuses
        jsonConfig = TestHelpers.get_latest_json_config()
        assert jsonConfig.movieGenerationStatus == MovieGenerationStatuses.NOT_STARTED

        # Assert it redirects to a waiting page
        self.assertEqual(response.status_code, 302)
        self.assertEqual(response['location'],
                         "/visualizeMovie=macomb-multiwinner-surplusjson")

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
