""" ElectionPage models """

from django.db import models

from sortedm2m.fields import SortedManyToManyField

from visualizer.models import JsonConfig


class ElectionPage(models.Model):
    """ Represents a group of elections all listed on the same page. """
    # Title of the election
    title = models.CharField(max_length=128)

    # Description to put under the title and date
    description = models.CharField(max_length=2048)

    # Manually-created slug (URL)
    slug = models.SlugField(unique=True, max_length=255)

    # Date of the election
    date = models.DateField()

    # The list of all elections in this election page
    listOfElections = SortedManyToManyField(JsonConfig)

    def __str__(self):
        return str(self.title)
