"""
A helper class that takes a Scraper model and actually scrapes the files
to create or update a JsonConfig.

Be warned: only admins or highly trusted users should be able to access this.
There are both security issues (we can't trust the external source), and
DOS issues (this could take a while to run, and we haven't made this async.)

TODO - make it async.
"""
import logging
import os
import tempfile

from django.core.files import File
from django.core.exceptions import PermissionDenied
from django.utils import timezone
import requests

from visualizer import validators
from visualizer.models import JsonConfig
from visualizer.serializers import BaseVisualizationSerializer

logger = logging.getLogger(__name__)


class ScrapeWorker():
    """
    Helper class which takes a Scraper model and downloads the file,
    then uploads the scraped data if it's valid and updates the jsonConfig appropriately.
    """
    @classmethod
    def download_limited_size(cls, url, maxSizeBytes):
        """
        Downloads URL, limited to maxSizeBytes, and returns a tempfile
        file object of the resulting data
        """
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

    @classmethod
    def scrape(cls, scraperObject, user):
        """
        May throw errors - be ready to handle them.
        """
        if not user.request.has_perm('scraper.change_scraper'):
            # Should be impossible to get here, but just in case.
            logger.logError("This should not be possible to get here without having permissions!")
            raise PermissionDenied()

        try:
            fromUrl = scraperObject.scrapableURL

            fileObject = cls.download_limited_size(fromUrl, 1024 * 1024)
            assert fileObject is not None

            graph = validators.try_to_load_jsons(fileObject, None)

            fileObject.seek(0)
            desiredFilename = os.path.basename(fromUrl)
            if scraperObject.jsonConfig is None:
                jsonConfig = JsonConfig(jsonFile=File(fileObject, desiredFilename))
                jsonConfig.owner = user
            else:
                jsonConfig = scraperObject.jsonConfig
                jsonConfig.jsonFile = File(fileObject, desiredFilename)

            jsonConfig.dataSourceURL = scraperObject.sourceURL
            jsonConfig.areResultsCertified = scraperObject.areResultsCertified

            BaseVisualizationSerializer.populate_model_with_json_data(jsonConfig, graph)
            jsonConfig.save()

            scraperObject.jsonConfig = jsonConfig
            scraperObject.lastSuccessfulScrape = timezone.now()
            scraperObject.save()
        except Exception as exc:  # pylint: disable=broad-except
            logger.exception(exc)
            scraperObject.lastFailedScrape = timezone.now()
            scraperObject.save()
            raise exc
