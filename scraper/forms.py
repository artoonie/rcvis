from django.forms import ModelForm

from scraper.models import Scraper


class ScraperForm(ModelForm):
    class Meta:
        model = Scraper
        fields = ['scrapableURL', 'sourceURL']
