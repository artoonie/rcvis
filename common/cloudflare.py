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
            reverse('visualizeBallotpedia', args=(slug,))
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

        zoneId = settings.CLOUDFLARE_ZONE_ID
        apiUrl = f"https://api.cloudflare.com/client/v4/zones/{zoneId}/purge_cache"

        # Absolute URLs
        domain = Site.objects.get_current().domain
        rcvisUrls = [f'https://{domain}{path}' for path in paths]
        data = {'files': rcvisUrls}

        # Send it off
        response = requests.post(apiUrl, headers=cls._get_auth_headers(), data=json.dumps(data))

        info = f"{len(paths)} starting with {paths[0]}"
        if response.status_code == 200:
            logger.info("Cleared cloudflare cache for %s: %s", info, response.json())
        else:
            logger.error("Received bad response from cloudflare for %s: %s", info, response.json())
