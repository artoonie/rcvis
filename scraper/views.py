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

logger = logging.getLogger(__name__)


class ViewScraper(LoginRequiredMixin, DetailView):
    """ Visualizing a single JsonConfig """
    model = Scraper
    template_name = 'scraper/scrape.html'


class ScrapeNow(LoginRequiredMixin, DetailView):
    """ Visualizing a single JsonConfig """
    model = Scraper
    template_name = 'scraper/scrapeNow.html'

    """
    Downloads URL, limited to maxSizeBytes, and returns a tempfile
    file object of the resulting data
    """
    @classmethod
    def downloadLimitedSize(cls, url, maxSizeBytes):
        r = requests.get(url, stream=True)

        # Safety: check the headers
        contentLengthFromHeader = int(r.headers.get('Content-Length', 0))
        if contentLengthFromHeader > maxSizeBytes:
            logger.error("Content length was too large: %d", contentLengthFromHeader)
            return None

        length = 0

        tf = tempfile.NamedTemporaryFile(delete=True)

        for chunk in r.iter_content(1024):
            tf.write(chunk)
            length += len(chunk)
            # In case the headers lied
            if length > maxSizeBytes:
                logger.error("Headers were fine, but we've now pulled %d", length)
                return None

        tf.seek(0)
        tf.flush()
        return tf

    def get(self, *args, **kwargs):
        try:
            scraperObject = self.get_object()
            fromUrl = scraperObject.scrapableURL

            fileObject = self.downloadLimitedSize(fromUrl, 1024 * 1024)
            assert fileObject is not None

            graph = validators.try_to_load_jsons(fileObject, None)

            fileObject.seek(0)
            desiredFilename = os.path.basename(fromUrl)
            if scraperObject.jsonConfig is None:
                jsonConfig = JsonConfig(jsonFile=File(fileObject, desiredFilename))
                jsonConfig.owner = self.request.user
            else:
                jsonConfig = scraperObject.jsonConfig
                jsonConfig.jsonFile = File(fileObject, desiredFilename)

            jsonConfig.dataSourceURL = scraperObject.sourceURL
            jsonConfig.areResultsCertified = scraperObject.areResultsCertified

            jsonConfig.title = graph.title
            jsonConfig.numRounds = len(graph.summarize().rounds)
            jsonConfig.numCandidates = len(graph.summarize().candidates)
            jsonConfig.save()

            scraperObject.jsonConfig = jsonConfig
            scraperObject.lastSuccessfulScrape = timezone.now()
            scraperObject.save()

            return redirect(reverse('viewScraper', kwargs=kwargs))
        except Exception as exc:
            logger.exception(exc)
            scraperObject.lastFailedScrape = timezone.now()
            scraperObject.save()
            return redirect(reverse('viewScraper', kwargs=kwargs))
