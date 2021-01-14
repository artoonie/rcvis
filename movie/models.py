""" Models for storing data about a movie """
from django.conf import settings
from django.contrib import admin
from django.core.cache import cache
from django.core.files.storage import get_storage_class
from django.core.validators import MaxValueValidator, MinValueValidator
from django.db import models


# pylint:disable=abstract-method,too-few-public-methods
class SpeechSynthStorage(get_storage_class()):
    """ Speech synth is stored in a separate bucket. No-op when using offline mode."""

    def __init__(self, *args, **kwargs):
        kwargs['bucket'] = settings.AWS_POLLY_STORAGE_BUCKET_NAME
        try:
            super(SpeechSynthStorage, self).__init__(*args, **kwargs)
        except TypeError:
            assert settings.OFFLINE_MODE
            del kwargs['bucket']
            super(SpeechSynthStorage, self).__init__(*args, **kwargs)


class Movie(models.Model):
    """ An automatically-generated Movie showing the interaction. """
    generatedOnApplicationVersion = models.CharField(max_length=30)
    movieFile = models.FileField(max_length=512, upload_to='movies')
    titleImage = models.ImageField(upload_to='movieTitleImages', null=True)

    resolutionWidth = models.PositiveIntegerField(
        validators=[MinValueValidator(1), MaxValueValidator(1920)])
    resolutionHeight = models.PositiveIntegerField(
        validators=[MinValueValidator(1), MaxValueValidator(1920)])

    #pylint: disable=signature-differs
    def save(self, *args, **kwargs):
        super().save(*args, **kwargs)

        # Clear the cache. Otherwise, you'll continue to get the cached result
        # of the old model.
        cache.clear()


class TextToSpeechCachedFile(models.Model):
    """ A mapping from a text to an audio file of the text-to-speech mp3 """
    text = models.CharField(max_length=2048, unique=True, primary_key=True)
    audioFile = models.FileField(
        max_length=512,
        upload_to='speech-synth',
        storage=SpeechSynthStorage())
    lastUsed = models.DateTimeField(auto_now=True)


@admin.register(Movie)
class JsonAdmin(admin.ModelAdmin):
    """ The admin page to modify JsonConfig """
    list_display = ('generatedOnApplicationVersion',
                    'movieFile',
                    'resolutionWidth',
                    'resolutionHeight')


@admin.register(TextToSpeechCachedFile)
class TextToSpeechCachedFileAdmin(admin.ModelAdmin):
    """ The admin page to modify JsonConfig """
    list_display = ('text', 'audioFile', 'lastUsed')
