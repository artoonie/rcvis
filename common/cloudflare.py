""" Cloudflare API connection, used to clear cloudflare cache when a model updates """

import logging
import json
import requests

from django.conf import settings
from django.core.cache import cache
from django.core.exceptions import DisallowedHost
from django.contrib.sites.models import Site
from django.http import HttpRequest
from django.urls import reverse
from django.utils.cache import get_cache_key

from visualizer.middleware import get_current_request

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
            reverse('visualizeBallotpedia', args=(slug,)),
            reverse('visualizeEmbedded', args=(slug,)) + '?vistype=barchart-interactive',
            reverse('visualizeEmbedded', args=(slug,)) + '?vistype=barchart-fixed',
            reverse('visualizeEmbedded', args=(slug,)) + '?vistype=tabular-by-candidate',
            reverse('visualizeEmbedded', args=(slug,)) + '?vistype=tabular-by-round',
            reverse('visualizeEmbedded', args=(slug,)) + '?vistype=tabular-by-round-interactive',
            reverse('visualizeEmbedded', args=(slug,)) + '?vistype=candidate-by-round',
            reverse('visualizeEmbedded', args=(slug,)) + '?vistype=sankey'
        ]
        cls.purge_paths_cache(paths)

    @classmethod
    def _make_cache_request(cls, path: str, domain: str) -> HttpRequest:
        """ Build a synthetic request matching how Django's cache middleware
            would have seen the original request for this path and domain.
            Sets HTTP_HOST so build_absolute_uri() matches the original
            request's cache key (SERVER_NAME alone appends the port). """
        request = HttpRequest()
        request.method = 'GET'
        if '?' in path:
            request.path, request.META['QUERY_STRING'] = path.split('?', 1)
        else:
            request.path = path
            request.META['QUERY_STRING'] = ''
        request.META['HTTP_HOST'] = domain
        request.META['wsgi.url_scheme'] = 'https'
        request.META['SERVER_NAME'] = domain
        request.META['SERVER_PORT'] = '443'
        return request

    @classmethod
    def _get_purge_domains(cls) -> list[dict]:
        """ Return (host, scheme, port) dicts covering the current request's
            host (if available) plus the Site domain for production.
            The current request host handles dev servers (e.g. localhost:8000)
            where the Site domain wouldn't match the cached keys. """
        domains = []

        # Use the real request's host if available (set by CurrentRequestMiddleware).
        # This matches exactly how the cache middleware keyed the response.
        current_request = get_current_request()
        if current_request:
            host = current_request.get_host()  # includes port if non-standard
            scheme = current_request.scheme
            port = current_request.META.get('SERVER_PORT', '443' if scheme == 'https' else '80')
            domains.append({'host': host, 'scheme': scheme, 'port': port})

        # Always also try the Site domain (production).
        site_domain = Site.objects.get_current().domain
        if not any(d['host'] == site_domain for d in domains):
            domains.append({'host': site_domain, 'scheme': 'https', 'port': '443'})
        if not site_domain.startswith("www."):
            www_domain = f"www.{site_domain}"
            if not any(d['host'] == www_domain for d in domains):
                domains.append({'host': www_domain, 'scheme': 'https', 'port': '443'})

        return domains

    @classmethod
    def _purge_django_cache(cls, paths: list[str]) -> None:
        """ Purge matching entries from Django's file-based cache.
            Uses the current request's host (via thread-local) plus the
            Site domain and www. variant to cover dev and production. """
        domains = cls._get_purge_domains()

        for path in paths:
            for d in domains:
                request = cls._make_cache_request(path, d['host'])
                request.META['wsgi.url_scheme'] = d['scheme']
                request.META['SERVER_PORT'] = d['port']
                try:
                    cache_key = get_cache_key(request)
                except DisallowedHost:
                    # Host isn't in ALLOWED_HOSTS, so there can't be
                    # cached responses for it — skip.
                    continue
                if cache_key:
                    cache.delete(cache_key)

    @classmethod
    def purge_paths_cache(cls, paths):
        """ Purges the given paths from both Django's file cache and Cloudflare CDN. """
        cls._purge_django_cache(paths)

        # If we're on local/dev/staging/etc, we're done.
        if not cls._is_api_enabled():
            return

        zoneId = settings.CLOUDFLARE_ZONE_ID
        apiUrl = f"https://api.cloudflare.com/client/v4/zones/{zoneId}/purge_cache"

        # Absolute URLs
        data = {'files': cls.get_absolute_paths_for(paths)}

        # Send it off
        response = requests.post(
            apiUrl,
            headers=cls._get_auth_headers(),
            data=json.dumps(data),
            timeout=8)

        info = f"{len(paths)} starting with {paths[0]}"
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
