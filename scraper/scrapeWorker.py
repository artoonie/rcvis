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
import traceback

from django.core.files import File
from django.core.exceptions import ObjectDoesNotExist, PermissionDenied
from django.utils import timezone
from django.utils.text import slugify
from rcvformats.conversions.dominion_multi_converter import DominionMultiConverter as DMC
import requests

from visualizer import validators
from visualizer.models import JsonConfig
from visualizer.serializers import BaseVisualizationSerializer

logger = logging.getLogger(__name__)


class FileTooLargeException(Exception):
    """ We don't present friendly error messages to the user, we just 500 here and die """


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
            raise FileTooLargeException("Headers say it's too large")

        length = 0

        tf = tempfile.NamedTemporaryFile(delete=True)

        for chunk in r.iter_content(1024):
            tf.write(chunk)
            length += len(chunk)
            # In case the headers lied
            if length > maxSizeBytes:
                logger.error("Headers were fine, but we've now pulled %d", length)
                raise FileTooLargeException("Actual data too large")

        tf.seek(0)
        tf.flush()
        return tf

    @classmethod
    def _log_and_rethrow_exception(cls, scraperObject, exc):
        logger.warning("Failed to parse URL: %s", scraperObject.scrapableURL)
        logger.info(traceback.format_exc())
        scraperObject.lastFailedScrape = timezone.now()
        scraperObject.save()
        raise exc

    @classmethod
    def _assert_permissions(cls, user):
        if not user.has_perm('scraper.change_scraper'):
            # Should be impossible to get here, but just in case.
            logger.error("This should not be possible to get here without having permissions!")
            raise PermissionDenied()

    @classmethod
    def _populate_jsonconfig(cls, scraperObject, jsonConfig, graph):
        """ Populates an existing jsonconfig with metadata from scraperObject """
        jsonConfig.dataSourceURL = scraperObject.sourceURL
        jsonConfig.areResultsCertified = scraperObject.areResultsCertified
        BaseVisualizationSerializer.populate_model_with_json_data(jsonConfig, graph)

    @classmethod
    def scrape(cls, scraperObject, user):
        """
        Scrape for a single election
        May throw errors - be ready to handle them.
        """
        cls._assert_permissions(user)

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

            cls._populate_jsonconfig(scraperObject, jsonConfig, graph)
            jsonConfig.save()

            scraperObject.jsonConfig = jsonConfig
            scraperObject.lastSuccessfulScrape = timezone.now()
            scraperObject.save()
        except Exception as exc:  # pylint: disable=broad-except
            cls._log_and_rethrow_exception(scraperObject, exc)

    @classmethod
    def multi_scrape(cls, multiScraperObject, user):
        """
        May throw errors - be ready to handle them.
        Scrapes the source for a list of elections, then updates and creates any visualization
        that doesn't match the list. Will not delete outdated visualizations, in case there's
        a parsing error - we don't want to release those URLs.
        """
        cls._assert_permissions(user)
        try:
            fromUrl = multiScraperObject.scrapableURL
            multiFileObject = cls.download_limited_size(fromUrl, 1024 * 1024 * 5)
            assert multiFileObject is not None

            titlesToNamedTempFiles = DMC.explode_to_files(multiFileObject)

            for title, namedTempFile in titlesToNamedTempFiles.items():
                # boto forces us to open this as rb, and it won't fail local tests
                # since locally we don't use boto :(
                with open(namedTempFile.name, 'rb') as f:
                    graph = validators.try_to_load_jsons(namedTempFile, None)

                    desiredFilename = f'{os.path.basename(fromUrl)}-{slugify(title)}.json'

                    try:
                        # Note: make sure you use graph.title, as it trims, to find in the db
                        jsonConfig = multiScraperObject.listOfElections.get(title=graph.title)
                        jsonConfig.jsonFile = File(f, desiredFilename)
                        wasAdded = False
                    except ObjectDoesNotExist:
                        jsonConfig = JsonConfig(jsonFile=File(f, desiredFilename))
                        jsonConfig.owner = user
                        wasAdded = True

                    jsonConfig.dataSourceURL = multiScraperObject.sourceURL
                    jsonConfig.areResultsCertified = multiScraperObject.areResultsCertified

                    BaseVisualizationSerializer.populate_model_with_json_data(jsonConfig, graph)
                    cls._populate_jsonconfig(multiScraperObject, jsonConfig, graph)
                    jsonConfig.save()

                    if wasAdded:
                        multiScraperObject.listOfElections.add(jsonConfig)

            multiScraperObject.lastSuccessfulScrape = timezone.now()
            multiScraperObject.save()
        except Exception as exc:  # pylint: disable=broad-except
            cls._log_and_rethrow_exception(multiScraperObject, exc)
