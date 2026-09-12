"""
Tests for the surgical purge of Django's page cache (common/pageCacheRegistry.py)
"""

from mock import patch

from django.core.cache import cache
from django.test import TestCase, Client
from django.urls import reverse
from django.utils.cache import get_cache_key

from common import pageCacheRegistry
from common.testUtils import TestHelpers
from visualizer.tests import filenames


class PageCachePurgeTests(TestCase):
    """ Saving a visualization evicts exactly its own cached pages """

    def setUp(self):
        TestHelpers.login(self.client)
        TestHelpers.setup_host_mocks(self)
        # The page cache outlives tests; start each one from an empty cache
        cache.clear()

    def tearDown(self):
        TestHelpers.logout(self.client)

    # This code runs at several live URLs, and the page cache key includes the
    # scheme and host a viewer used. The purge must not care which one it was,
    # so these tests view pages through two arbitrary hosts and schemes.
    VIEWER_HOSTS = [('www.some-deployment.test', 'https'), ('other-deployment.test', 'http')]

    def _upload_two_visualizations(self):
        """ Uploads two visualizations and returns their JsonConfigs """
        with open(filenames.ONE_ROUND, 'r', encoding='utf-8') as f:
            self.client.post('/upload.html', {'jsonFile': f})
        first = TestHelpers.get_latest_upload()
        with open(filenames.THREE_ROUND, 'r', encoding='utf-8') as f:
            self.client.post('/upload.html', {'jsonFile': f})
        second = TestHelpers.get_latest_upload()
        self.assertNotEqual(first.slug, second.slug)
        return first, second

    def _viewer_settings(self):
        """ Settings override allowing requests from every host in VIEWER_HOSTS """
        return self.settings(ALLOWED_HOSTS=[host for host, _ in self.VIEWER_HOSTS] + ['testserver'])

    def _view_as_new_viewer(self, path, hostAndScheme=None):
        """
        Fetches path as a fresh anonymous viewer through the given (host, scheme),
        defaulting to the first of VIEWER_HOSTS. Returns the page cache key the
        response was stored under.
        """
        host, scheme = hostAndScheme or self.VIEWER_HOSTS[0]
        response = Client().get(path, HTTP_HOST=host, **{'wsgi.url_scheme': scheme})
        self.assertEqual(response.status_code, 200, path)
        cacheKey = get_cache_key(response.wsgi_request)
        self.assertIsNotNone(cacheKey, path)
        self.assertIsNotNone(cache.get(cacheKey), f"{path} was not stored in the page cache")
        return cacheKey

    def test_saving_a_visualization_purges_only_its_own_pages(self):
        """
        Saving a JsonConfig must evict every cached page of that visualization,
        whatever URL it was viewed at, and leave other visualizations cached
        so their viewers keep being served without touching the database.
        """
        with self._viewer_settings():
            updated, untouched = self._upload_two_visualizations()

            updatedPaths = [
                reverse('visualize', args=(updated.slug,)),
                reverse('visualizeEmbedded', args=(updated.slug,)),
                reverse('visualizeBallotpedia', args=(updated.slug,)),
                reverse('visualizeEmbedded', args=(updated.slug,)) + '?vistype=sankey',
                reverse('visualize', args=(updated.slug,)) + '?utm_source=not-a-known-url',
            ]
            # Every URL is viewed through every host and scheme: each is a distinct cache entry
            updatedViews = [(path, hostAndScheme)
                            for path in updatedPaths for hostAndScheme in self.VIEWER_HOSTS]
            updatedKeys = [self._view_as_new_viewer(path, hostAndScheme)
                           for path, hostAndScheme in updatedViews]
            self.assertEqual(len(set(updatedKeys)), len(updatedViews))
            untouchedPath = reverse('visualize', args=(untouched.slug,))
            untouchedKey = self._view_as_new_viewer(untouchedPath)

            # A second view of the same URL is a cache hit and registers nothing new
            self._view_as_new_viewer(updatedPaths[0])
            registry = cache.get(pageCacheRegistry.registry_key(updated.slug))
            self.assertEqual(sorted(registry), sorted(updatedKeys))

            updated.save()

            for (path, hostAndScheme), cacheKey in zip(updatedViews, updatedKeys):
                self.assertIsNone(cache.get(cacheKey),
                                  f"{path} via {hostAndScheme} is still cached after save")
            self.assertIsNotNone(cache.get(untouchedKey), "the other visualization was evicted")
            self.assertEqual(cache.get(pageCacheRegistry.registry_key(updated.slug)), [])

            host, scheme = self.VIEWER_HOSTS[0]
            with self.assertNumQueries(0):
                response = Client().get(untouchedPath, HTTP_HOST=host,
                                        **{'wsgi.url_scheme': scheme})
            self.assertEqual(response.status_code, 200)

    def test_purge_clears_everything_when_the_registry_is_missing(self):
        """
        If the registry for a slug is gone (evicted from the cache), the purge
        cannot know which pages to delete and must clear everything rather
        than risk leaving a stale page behind.
        """
        with self._viewer_settings():
            updated, other = self._upload_two_visualizations()
            updatedKey = self._view_as_new_viewer(reverse('visualize', args=(updated.slug,)))
            otherKey = self._view_as_new_viewer(reverse('visualize', args=(other.slug,)))

            cache.delete(pageCacheRegistry.registry_key(updated.slug))
            updated.save()

            self.assertIsNone(cache.get(updatedKey))
            self.assertIsNone(cache.get(otherKey))

    def test_purge_clears_everything_when_the_registry_overflows(self):
        """
        A slug viewed at more distinct URLs than the registry will track
        (query-string spam, say) falls back to clearing everything on save.
        """
        with self._viewer_settings(), patch.object(pageCacheRegistry, 'MAX_KEYS_PER_SLUG', 2):
            updated, other = self._upload_two_visualizations()
            base = reverse('visualize', args=(updated.slug,))
            updatedKeys = [self._view_as_new_viewer(f"{base}?n={n}") for n in range(3)]
            otherKey = self._view_as_new_viewer(reverse('visualize', args=(other.slug,)))
            self.assertEqual(cache.get(pageCacheRegistry.registry_key(updated.slug)),
                             pageCacheRegistry.OVERFLOW)

            updated.save()

            for cacheKey in updatedKeys:
                self.assertIsNone(cache.get(cacheKey))
            self.assertIsNone(cache.get(otherKey))
