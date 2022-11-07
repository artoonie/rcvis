""" ElectionPage models """

from django.db import models
from django.urls import reverse

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

    def __str__(self):
        return str(self.title)


class ElectionPage(BaseElectionPage):
    """ An election page consisting of several JsonConfigs """
    # The list of all elections in this election page
    listOfElections = SortedManyToManyField(JsonConfig)

    def get_absolute_url(self):
        """ Used in the admin panel to have a "Visit Site" link """
        return reverse('electionPage', args=(self.slug,))


class ScrapableElectionPage(BaseElectionPage):
    """
    An election page consisting of several Scrapers.
    Unlike an ElectionPage, the scrapers might NOT have an actual
    visualization associated with them - these can be used as placeholders
    leading up to an election.
    """
    # The list of all elections in this election page
    listOfScrapers = SortedManyToManyField(Scraper)

    # Are all of these results certified?
    # If so, we'll overwrite the corresponding field in each Scraper next time
    # we ScrapeAll.
    areResultsCertified = models.BooleanField(default=False)

    def get_absolute_url(self):
        """ Used in the admin panel to have a "Visit Site" link """
        return reverse('scrapableElectionPage', args=(self.slug,))

    def save(self, *args, **kwargs):
        if self.id:
            # Updating - and when we update, we need to propagate this to all scrapers
            for scraper in self.listOfScrapers.all():
                if self.areResultsCertified != scraper.areResultsCertified:
                    scraper.areResultsCertified = self.areResultsCertified
                    scraper.save()
        super().save(*args, **kwargs)
