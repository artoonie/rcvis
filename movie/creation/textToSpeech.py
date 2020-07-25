"""
Text-to-speech via Amazon Polly.
"""

import os
import tempfile
import time

from django.db.utils import DataError
from django.core.exceptions import ValidationError

import boto3
from botocore.exceptions import ClientError
from movie.models import TextToSpeechCachedFile
from movie.models import SPEECH_SYNTH_BUCKET_NAME as bucketName


class AudioGenerationFailedException(Exception):
    """ AWS Polly returned an audio generation failure. """


class AudioGenerationTimedOutException(Exception):
    """ Waited too long without a response """


class GeneratedAudioWrapper():  # pylint: disable=too-few-public-methods
    """
    To facilitate asynchronous waiting for Polly audio generation.
    Initializaton spawns the AWS job, and there are various methods to poll for the result.
    Always checks TextToSpeechCachedFile first.
    """
    prefix = 'generated_speech'
    region = os.environ['AWS_S3_REGION_NAME']

    def __init__(self, pollyClient, s3Client, text):
        """
        Either spawns an AWS task to generate the audio,
        or reaches into the database for cached audio.
        """
        self.pollyClient = pollyClient
        self.s3Client = s3Client
        self.text = text

        try:
            cachedObject = TextToSpeechCachedFile.objects.get(text=text)
            self.isCached = True
            self.uri = cachedObject.audioFile.name
            cachedObject.save()  # Update lastUsed
        except TextToSpeechCachedFile.DoesNotExist:
            self.isCached = False
            response = self._spawn_task(text)
            self.taskId = response['SynthesisTask']['TaskId']

        self.alreadyDownloaded = False

    def _spawn_task(self, text):
        """ Spawns the AWS job """
        return self.pollyClient.start_speech_synthesis_task(
            VoiceId='Joanna',
            OutputS3BucketName=bucketName,
            OutputS3KeyPrefix=self.prefix,
            OutputFormat='mp3',
            Text=text)

    def _get_task_status(self):
        """ Poll Polly for the task status """
        assert not self.isCached
        return self.pollyClient.get_speech_synthesis_task(TaskId=self.taskId)

    def _key_from_uri(self, uri):
        return self.prefix + uri.split(self.prefix)[1]

    def _download(self, uri, toFilename):
        """ Downloads the file at the S3 URI """
        key = self._key_from_uri(uri)

        try:
            self.s3Client.download_file(Key=key, Bucket=bucketName, Filename=toFilename)
        except ClientError as exception:
            text = f"Failed to download file {uri}, bucket={bucketName}, key={key}"
            if self.isCached:
                text += "\nNote, this was a cached file being loaded from the database."
            print(text)
            raise exception

    def _cache_file(self, uri):
        cached = TextToSpeechCachedFile()
        cached.text = self.text
        cached.audioFile.name = self._key_from_uri(uri)

        try:
            cached.full_clean()  # for some reason this isn't automatic...
        except ValidationError as exception:
            # Will happen if the names are too long or a ton of stuff happened this round,
            # reaching max_length.
            print("Failed to validate TextToSpeechCachedFile. Error: ", exception)
            return

        try:
            cached.save()
        except DataError as exception:
            # I think this happens when the filename is too long?
            print("Failed to cache file. Error: ", exception)

    def download_if_ready(self, toFilename):
        """
        Download the result if it's ready.
        Can only be called once, then deletes the result from S3.
        """
        assert not self.alreadyDownloaded
        if self.isCached:
            uri = self.uri
        else:
            taskStatus = self._get_task_status()

            if taskStatus['SynthesisTask']['TaskStatus'] == 'failed':
                raise AudioGenerationFailedException()

            if taskStatus['SynthesisTask']['TaskStatus'] != 'completed':
                return False

            uri = taskStatus['SynthesisTask']['OutputUri']
            self._cache_file(uri)

        self._download(uri, toFilename)
        self.alreadyDownloaded = True

        return True

    def download_synchronously(self, timeoutSeconds=20):
        """ Wait up to timeoutSeconds, waiting for the task to complete.
            @return a tempfile object: the file will be deleted once the object is destructed. """
        pollIntervalSeconds = 1
        numPolls = int(timeoutSeconds / pollIntervalSeconds + 0.5)

        tf = tempfile.NamedTemporaryFile(suffix=".mp3")

        for _ in range(numPolls):
            wasDownloaded = self.download_if_ready(tf.name)
            if wasDownloaded:
                return tf
            time.sleep(pollIntervalSeconds)
        raise AudioGenerationTimedOutException()


class TextToSpeechFactory():  # pylint: disable=too-few-public-methods
    """ Holds on to boto clients, initializing an AWS session once and allowing reuses
        of that session for text-to-speech. """

    def __init__(self):
        self.pollyClient = boto3.Session(
            region_name=os.environ['AWS_S3_REGION_NAME']).client('polly')
        self.s3Client = boto3.client('s3')

    def text_to_speech(self, text):
        """ Returns a GeneratedAudioWrapper which you can poll for the result. """
        return GeneratedAudioWrapper(self.pollyClient, self.s3Client, text)
