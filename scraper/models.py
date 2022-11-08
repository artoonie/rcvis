"""
Models for a Scraper, which has:
    1. The machine-readable URL, to scrape
    2. The human-readable URL, to display
    3. After the parsing succeeds, jsonConfig will be non-null
"""
from django.db import models
from django.urls import reverse

from sortedm2m.fields import SortedManyToManyField

from visualizer.models import JsonConfig


class BaseScraper(models.Model):
    """
    A model representing URLs that can be scraped to populate
    either a single visualization or an electionpage
    """
    class Meta:
        abstract = True

    # URL to actually scrape (must be machine-readable by rcvformats)
    scrapableURL = models.CharField(max_length=128)

    # URL to put at the data source (may be the same as above, or may
    # be a human-readable version)
    sourceURL = models.CharField(max_length=128)

    # When did we last successfully scrape the data?
    lastSuccessfulScrape = models.DateTimeField(null=True, blank=True)

    # When did the data last fail to scrape?
    lastFailedScrape = models.DateTimeField(null=True, blank=True)

    # Are the results certified at this URL?
    areResultsCertified = models.BooleanField(default=False)

    # This is only optional because it may have failed to generate
    jsonConfig = models.OneToOneField(
        JsonConfig,
        on_delete=models.CASCADE,
        null=True,
        blank=True)

    def get_absolute_url(self):
        """ Used in the admin panel to have a "Visit Site" link """
        return reverse('viewScraper', args=(self.pk,))

    def __str__(self):
        return self.scrapableURL


class Scraper(BaseScraper):
    """ A one-to-one scraper: the source generates a single visualization """

    def get_absolute_url(self):
        """ Used in the admin panel to have a "Visit Site" link """
        return reverse('viewScraper', args=(self.pk,))


class MultiScraper(BaseScraper):
    """ A one-to-many scraper: the source generates several visualizations """
    listOfElections = SortedManyToManyField(JsonConfig, related_name='+', blank=True)

    def get_absolute_url(self):
        """ Used in the admin panel to have a "Visit Site" link """
        return reverse('viewMultiScraper', args=(self.pk,))
