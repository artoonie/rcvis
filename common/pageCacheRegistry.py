"""
Surgical purge of Django's page cache, one visualization at a time.

Django's page cache keys are derived from the full request URL (scheme, host,
path, query string) plus the headers the response varies on. Reconstructing
them later from a slug is guesswork, so instead the real keys are recorded at
the moment Django stores a page: PageCacheRegistryMiddleware runs after
UpdateCacheMiddleware has stored the response and appends the key to a
per-slug registry kept in the same cache. Saving a JsonConfig then deletes
exactly those keys and leaves every other visualization cached.

Every doubtful situation falls back to cache.clear(), the previous behavior,
so a purge may be wasteful but never leaves a stale page behind:
  * no registry for the slug (evicted, or the cache was cleared or restarted
    and nobody has viewed the slug since): clear everything
  * the registry overflowed (too many distinct URLs for one slug): clear everything
  * the registry lock could not be taken: clear everything

Hot-path cost is zero. Cache hits never run the view, so the request carries
no slug and the middleware returns immediately.
"""

import fcntl
import logging
import os
import time
from contextlib import contextmanager

from django.conf import settings
from django.core.cache import caches
from django.core.cache.backends.filebased import FileBasedCache
from django.utils.cache import get_cache_key
from django.utils.deprecation import MiddlewareMixin

logger = logging.getLogger(__name__)

# Attribute set on the request by views that render a visualization
REQUEST_ATTRIBUTE = 'pageCacheSlug'

# A slug with more distinct cached URLs than this (query-string spam, say)
# gives up on surgical purging and falls back to clearing everything
MAX_KEYS_PER_SLUG = 500

# Registry value meaning "too many keys, clear everything on the next purge"
OVERFLOW = 'overflow'

# How long to wait for the registry lock before falling back to clearing everything
LOCK_TIMEOUT_SECONDS = 2.0


class RegistryLockTimeout(Exception):
    """ The registry lock could not be acquired in time """


def _cache():
    """ The cache that the page cache middleware stores pages in """
    return caches[settings.CACHE_MIDDLEWARE_ALIAS]


def registry_key(slug):
    """ Cache key of the registry listing every page cache key stored for slug """
    return f'rcvis.pagecache.registry.{slug}'


def tag_request(request, slug):
    """
    Mark a request as rendering the visualization with the given slug, so that
    PageCacheRegistryMiddleware records the page cache key of its response.
    """
    setattr(request, REQUEST_ATTRIBUTE, slug)


@contextmanager
def _registry_lock():
    """
    Serialize registry updates across gunicorn workers. Right after a purge,
    the cache misses for the different URLs of one slug arrive together, and a
    lost read-modify-write would leave one of those pages unpurged forever.

    The file-based cache has no atomic operations, so a lock file next to the
    cache files is used. It has no .djcache suffix, so cache.clear() and
    culling leave it alone. Other backends use their atomic add().
    """
    cache = _cache()
    deadline = time.monotonic() + LOCK_TIMEOUT_SECONDS
    if isinstance(cache, FileBasedCache):
        lockDir = settings.CACHES[settings.CACHE_MIDDLEWARE_ALIAS]['LOCATION']
        os.makedirs(lockDir, 0o700, exist_ok=True)
        with open(os.path.join(lockDir, 'rcvis-registry.lock'), 'w', encoding='utf-8') as lockFile:
            while True:
                try:
                    fcntl.flock(lockFile, fcntl.LOCK_EX | fcntl.LOCK_NB)
                    break
                except BlockingIOError as exc:
                    if time.monotonic() > deadline:
                        raise RegistryLockTimeout() from exc
                    time.sleep(0.005)
            try:
                yield
            finally:
                fcntl.flock(lockFile, fcntl.LOCK_UN)
    else:
        lockKey = 'rcvis.pagecache.registry.lock'
        while not cache.add(lockKey, 1, timeout=int(LOCK_TIMEOUT_SECONDS) + 1):
            if time.monotonic() > deadline:
                raise RegistryLockTimeout()
            time.sleep(0.005)
        try:
            yield
        finally:
            cache.delete(lockKey)


def register_key(slug, cacheKey):
    """ Record that cacheKey holds a page of the visualization slug """
    cache = _cache()
    key = registry_key(slug)
    try:
        with _registry_lock():
            keys = cache.get(key)
            if keys == OVERFLOW or (keys is not None and cacheKey in keys):
                return
            keys = keys or []
            if len(keys) >= MAX_KEYS_PER_SLUG:
                logger.warning(
                    "Too many cached URLs for %s; its next purge clears everything", slug)
                cache.set(key, OVERFLOW, None)
            else:
                cache.set(key, keys + [cacheKey], None)
    except RegistryLockTimeout:
        logger.warning("Could not lock the page cache registry; clearing everything")
        cache.clear()


def purge_slug(slug):
    """
    Delete every cached page recorded for slug. Clears the whole cache instead
    whenever the registry cannot be trusted, so nothing stale is ever left.
    """
    cache = _cache()
    key = registry_key(slug)
    try:
        with _registry_lock():
            keys = cache.get(key)
            if keys is None or keys == OVERFLOW:
                logger.info("No usable page cache registry for %s; clearing everything", slug)
                cache.clear()
            else:
                cache.delete_many(keys)
                logger.info("Purged %d cached pages for %s", len(keys), slug)
            # Leave an empty registry so that saves with no views in between purge nothing
            cache.set(key, [], None)
    except RegistryLockTimeout:
        logger.warning("Could not lock the page cache registry; clearing everything")
        cache.clear()


class PageCacheRegistryMiddleware(MiddlewareMixin):  # pylint: disable=too-few-public-methods
    """
    Records the page cache key of every visualization page that Django stores.

    Must be listed above UpdateCacheMiddleware in MIDDLEWARE, so that this
    process_response runs after the page has been stored.
    """

    def process_response(self, request, response):
        """ Register the page cache key of a stored visualization page """
        slug = getattr(request, REQUEST_ATTRIBUTE, None)
        if slug is None or response.status_code != 200 or response.streaming:
            return response

        # The same function FetchFromCacheMiddleware uses on the next request,
        # so this is exactly the key a later viewer will hit. It returns None
        # when UpdateCacheMiddleware did not store the page.
        cacheKey = get_cache_key(request, method='GET', cache=_cache())
        if cacheKey is not None:
            register_key(slug, cacheKey)
        return response
