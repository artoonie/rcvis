""" ElectionPage models """

from django.db import models

from sortedm2m.fields import SortedManyToManyField

from visualizer.models import JsonConfig
from scraper.models import Scraper


class BaseElectionPage(models.Model):
    """ Represents a group of elections all listed on the same page. """
    # This is a base model - don't actually create anything in the database for it.
    class Meta:
        abstract = True

    # Title of the election
    title = models.CharField(max_length=128)

    # Description to put under the title and date
    description = models.TextField(max_length=2048)

    # Manually-created slug (URL)
    slug = models.SlugField(unique=True, max_length=255)

    # Date of the election
    date = models.DateField()

    # The list of all elections in this election page
    listOfElections = SortedManyToManyField(JsonConfig)

    def __str__(self):
        return str(self.title)


class ElectionPage(BaseElectionPage):
    """ An election page consisting of several JsonConfigs """
    # The list of all elections in this election page
    listOfElections = SortedManyToManyField(JsonConfig)


class ScrapableElectionPage(BaseElectionPage):
    """ An election page consisting of several Scrapers """
    # The list of all elections in this election page
    listOfScrapers = SortedManyToManyField(Scraper)

    # Are all of these results certified?
    # If so, we'll overwrite the corresponding field in each Scraper next time
    # we ScrapeAll.
    areResultsCertified = models.BooleanField(default=False)
