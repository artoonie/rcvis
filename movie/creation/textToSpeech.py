"""
Text-to-speech via Amazon Polly.
"""

import boto3
import os
import tempfile
import time


class AudioGenerationFailedException(Exception):
    """ AWS Polly returned an audio generation failure. """
    pass


class AudioGenerationTimedOutException(Exception):
    """ Waited too long without a response """
    pass


class GeneratedAudioWrapper():
    """ To facilitate asynchronous waiting for Polly audio generation.
        Initializaton spawns the AWS job, and there are various methods to poll for the result. """
    prefix = 'generated_speech'
    bucketName = 'speech-synth'

    def __init__(self, pollyClient, s3Client, text):
        """ Initializes the object and calls _spawn_task """
        self.pollyClient = pollyClient
        self.s3Client = s3Client

        response = self._spawn_task(text)

        self.taskId = response['SynthesisTask']['TaskId']

        self.alreadyDownloaded = False

    def _spawn_task(self, text):
        """ Spawns the AWS job """
        return self.pollyClient.start_speech_synthesis_task(
            VoiceId='Joanna',
            OutputS3BucketName=self.bucketName,
            OutputS3KeyPrefix=self.prefix,
            OutputFormat='mp3',
            Text=text)

    def _get_task_status(self):
        """ Poll Polly for the task status """
        return self.pollyClient.get_speech_synthesis_task(TaskId=self.taskId)

    def _download_then_delete(self, uri, toFilename):
        """ Downloads the file at the S3 URI, then deletes the file from S3 """
        key = self.prefix + uri.split(self.prefix)[1]

        self.s3Client.download_file(Key=key, Bucket=self.bucketName, Filename=toFilename)
        self.s3Client.delete_object(Key=key, Bucket=self.bucketName)

    def download_if_ready(self, toFilename):
        """ Download the result if it's ready. Can only be called once, then deletes the result from S3 """
        assert not self.alreadyDownloaded

        taskStatus = self._get_task_status()

        if taskStatus['SynthesisTask']['TaskStatus'] == 'failed':
            raise AudioGenerationFailedException()

        if taskStatus['SynthesisTask']['TaskStatus'] != 'completed':
            return False

        uri = taskStatus['SynthesisTask']['OutputUri']
        self._download_then_delete(uri, toFilename)
        self.alreadyDownloaded = True

        return True

    def download_synchronously(self, timeoutSeconds=20):
        """ Wait up to timeoutSeconds, waiting for the task to complete.
            @return a tempfile object: the file will be deleted once the object is destructed. """
        pollIntervalSeconds = 1
        numPolls = int(timeoutSeconds / pollIntervalSeconds + 0.5)

        tf = tempfile.NamedTemporaryFile(suffix=".mp3")

        for i in range(numPolls):
            time.sleep(pollIntervalSeconds)
            wasDownloaded = self.download_if_ready(tf.name)
            if wasDownloaded:
                return tf
        raise AudioGenerationTimedOutException()


class TextToSpeechFactory():
    """ Holds on to boto clients, initializing an AWS session once and allowing reuses
        of that session for text-to-speech. """

    def __init__(self):
        self.pollyClient = boto3.Session(
            region_name=os.environ['AWS_S3_REGION_NAME']).client('polly')
        self.s3Client = boto3.client('s3')

    def text_to_speech(self, text):
        """ Returns a GeneratedAudioWrapper which you can poll for the result. """
        return GeneratedAudioWrapper(self.pollyClient, self.s3Client, text)
