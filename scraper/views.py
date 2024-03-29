"""
Scraper views:
    both the worker to scrape now,
    and the page with all info about the scraper.
All of these are limited to authorized users.
"""
from django.contrib.auth.mixins import PermissionRequiredMixin
from django.shortcuts import redirect
from django.urls import reverse
from django.views.generic.detail import DetailView

from scraper.models import MultiScraper, Scraper
from scraper.scrapeWorker import ScrapeWorker


class ViewScraper(PermissionRequiredMixin, DetailView):
    """ Visualizing a single scraper """
    model = Scraper
    template_name = 'scraper/scrape.html'
    permission_required = 'scraper.view_scraper'


class ViewMultiScraper(PermissionRequiredMixin, DetailView):
    """ Visualizing a multi scraper """
    model = MultiScraper
    template_name = 'scraper/multiscrape.html'
    permission_required = 'scraper.view_scraper'


class ScrapeNow(PermissionRequiredMixin, DetailView):
    """ Runs the single scraper """
    model = Scraper
    template_name = 'scraper/scrapeNow.html'
    permission_required = ['scraper.add_scraper', 'scraper.change_scraper']

    def get(self, *args, **kwargs):
        scraperObject = self.get_object()
        user = self.request.user

        # This may fail - that's okay, we want to hear all the errors
        # in our logging. Eventually, come up with nicer error handling.
        ScrapeWorker.scrape(scraperObject, user)

        return redirect(reverse('viewScraper', kwargs=kwargs))


class MultiScrapeNow(PermissionRequiredMixin, DetailView):
    """ Runs the single scraper """
    model = MultiScraper
    template_name = 'scraper/scrapeNow.html'
    permission_required = ['scraper.add_scraper', 'scraper.change_scraper']

    def get(self, *args, **kwargs):
        scraperObject = self.get_object()
        user = self.request.user

        # This may fail - that's okay, we want to hear all the errors
        # in our logging. Eventually, come up with nicer error handling.
        ScrapeWorker.multi_scrape(scraperObject, user)

        return redirect(reverse('viewMultiScraper', kwargs=kwargs))
