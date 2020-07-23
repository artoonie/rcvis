""" Models for storing data about a movie """
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
