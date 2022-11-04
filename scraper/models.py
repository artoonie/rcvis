from django.db import models

from visualizer.models import JsonConfig


class Scraper(models.Model):
    """
    A model representing URLs that can be scraped to populate
    either a single visualization or an electionpage
    """
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
    jsonConfig = models.ForeignKey(
        JsonConfig,
        on_delete=models.CASCADE,
        null=True,
        blank=True)
