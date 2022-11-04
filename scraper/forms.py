"""
Form used to create models in the scraper app
"""

from django.forms import ModelForm

from scraper.models import Scraper


class ScraperForm(ModelForm):
    """
    A form for a scraper, which is only used (so far) in a table of all scapers
    that are associated with a ScrapableElectionPage.
    We need only edit the scrapableURL and sourceURL in the form - the rest is gleaned
    when scraping actually happens.
    """
    class Meta:
        model = Scraper
        fields = ['scrapableURL', 'sourceURL']
