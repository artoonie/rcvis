from django.contrib.auth.mixins import LoginRequiredMixin
from django.core.files import File
from django.shortcuts import redirect
from django.urls import reverse
from django.utils import timezone
from django.views.generic.detail import DetailView
import logging
import os
import requests
import tempfile

from visualizer import validators
from visualizer.models import JsonConfig

from scraper.models import Scraper
from scraper.scrapeWorker import ScrapeWorker

logger = logging.getLogger(__name__)


class ViewScraper(LoginRequiredMixin, DetailView):
    """ Visualizing a single JsonConfig """
    model = Scraper
    template_name = 'scraper/scrape.html'


class ScrapeNow(LoginRequiredMixin, DetailView):
    """ Visualizing a single JsonConfig """
    model = Scraper
    template_name = 'scraper/scrapeNow.html'

    def get(self, *args, **kwargs):
        try:
            scraperObject = self.get_object()
            user = self.request.user
            ScrapeWorker.scrape(scraperObject, user)
            return redirect(reverse('viewScraper', kwargs=kwargs))
        except BaseException:
            return redirect(reverse('viewScraper', kwargs=kwargs))
