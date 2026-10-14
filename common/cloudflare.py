""" Cloudflare API connection, used to clear cloudflare cache when a model updates """

import logging
import json
import requests

from django.conf import settings
from django.core.cache import cache
from django.contrib.sites.models import Site
from django.urls import reverse

logger = logging.getLogger(__name__)


# pylint: disable=too-few-public-methods
class CloudflareAPI():
    """ Static functions to connect to the cloudflare API """
    @classmethod
    def _is_api_enabled(cls):
        return settings.CLOUDFLARE_AUTH_TOKEN is not None and\
            settings.CLOUDFLARE_ZONE_ID is not None

    @classmethod
    def _get_auth_headers(cls):
        """ Gets cloudflare auth headers for API calls """
        authToken = settings.CLOUDFLARE_AUTH_TOKEN
        return {
            "Content-Type": "application/json",
            "Authorization": f"Bearer {authToken}"
        }

    @classmethod
    def purge_vis_cache(cls, slug):
        """ Purges most canonical URLs for the visualization with the given slug. """
        paths = [
            reverse('visualize', args=(slug,)),
            reverse('visualizeEmbedded', args=(slug,)),
            reverse('visualizeEmbedlyDefault', args=(slug,)),
            reverse('visualizeEmbedly', args=(slug, 'bar')),
            reverse('visualizeEmbedly', args=(slug, 'barchart-interactive')),
            reverse('visualizeEmbedly', args=(slug, 'sankey')),
            reverse('visualizeEmbedly', args=(slug, 'table')),
            reverse('visualizeEmbedly', args=(slug, 'pie')),
            reverse('visualizeBallotpedia', args=(slug,)),
            reverse('visualizeEmbedded', args=(slug,)) + '?vistype=barchart-interactive',
            reverse('visualizeEmbedded', args=(slug,)) + '?vistype=barchart-fixed',
            reverse('visualizeEmbedded', args=(slug,)) + '?vistype=tabular-by-candidate',
            reverse('visualizeEmbedded', args=(slug,)) + '?vistype=tabular-by-round',
            reverse('visualizeEmbedded', args=(slug,)) + '?vistype=tabular-by-round-interactive',
            reverse('visualizeEmbedded', args=(slug,)) + '?vistype=candidate-by-round',
            reverse('visualizeEmbedded', args=(slug,)) + '?vistype=sankey',
            reverse('visualizeEmbedded', args=(slug,)) + '?vistype=pie'

        ]
        cls.purge_paths_cache(paths)

    @classmethod
    def purge_paths_cache(cls, paths):
        """ Purges the URLs (paths, not URLs) """
        # We also want to purge the file-based cache, but unfortunately
        # we don't have a way of doing this per-URL.
        # It's overkill, but here we purge everything.
        cache.clear()

        # If we're on local/dev/staging/etc, we're done.
        if not cls._is_api_enabled():
            return

        info = f"{len(paths)} starting with {paths[0]}"
        cls._send_purge_request({'files': cls.get_absolute_paths_for(paths)}, info)

    @classmethod
    def purge_entire_cache(cls):
        """
        Purges everything: every page and every static file, on every domain.
        Run on each deploy (see the Procfile release phase): rendered HTML
        references hashed static files that change on deploy, and an edge copy
        cached before the deploy would keep satisfying browsers' revalidation
        requests with 304s, pinning HTML that points at deleted assets.
        """
        cache.clear()

        if not cls._is_api_enabled():
            return

        cls._send_purge_request({'purge_everything': True}, 'purge_everything')

    @classmethod
    def _send_purge_request(cls, data, info):
        """ POSTs a purge request to the cloudflare API and logs the outcome """
        zoneId = settings.CLOUDFLARE_ZONE_ID
        apiUrl = f"https://api.cloudflare.com/client/v4/zones/{zoneId}/purge_cache"

        response = requests.post(
            apiUrl,
            headers=cls._get_auth_headers(),
            data=json.dumps(data),
            timeout=8)

        if response.status_code == 200:
            logger.info("Cleared cloudflare cache for %s: %s", info, response.json())
        else:
            logger.error("Received bad response from cloudflare for %s: %s", info, response.json())

    @classmethod
    def get_absolute_paths_for(cls, paths):
        """ Get the absolute urls for these paths, both with and without "www." """
        domain = Site.objects.get_current().domain
        rcvisUrls = [f'https://{domain}{path}' for path in paths]
        if not domain.startswith("www"):
            rcvisUrls.extend([f'https://www.{domain}{path}' for path in paths])
        return rcvisUrls
