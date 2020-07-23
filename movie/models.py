""" Models for storing data about a movie """
from django.contrib import admin
from django.core.cache import cache
from django.core.validators import MaxValueValidator, MinValueValidator
from django.db import models


class Movie(models.Model):
    """ An automatically-generated Movie showing the interaction. """
    generatedOnApplicationVersion = models.CharField(max_length=30)
    movieFile = models.FileField(upload_to='movies')

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
    text = models.CharField(max_length=512, unique=True, primary_key=True)
    audioFile = models.FileField(upload_to='speech-synth')
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
