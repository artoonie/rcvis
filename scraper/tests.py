"""
Test that the scraper can scrape, that the viewer page works, and that the permissions
are set up correctly - only those with permissions (and admins) can call ScrapeNow,
and if somehow ScrapeWorker.scrape is called without hitting a permission check,
an error is raised (to future-proof that dangerous function).
"""

from django.contrib.auth import get_user_model
from django.contrib.auth.models import Permission
from django.core.exceptions import PermissionDenied
from django.test import TestCase
from django.urls import reverse
from requests_mock import Mocker
from rest_framework import status

from common.testUtils import TestHelpers
from scraper.models import Scraper
from scraper.scrapeWorker import ScrapeWorker, FileTooLargeException
from visualizer.graph.graphCreator import BadJSONError
from visualizer.tests import filenames

TestHelpers.silence_logging_spam()


class ScraperTests(TestCase):
    """ Tests for the scraper app """

    def setUp(self):
        TestHelpers.setup_host_mocks(self)

    @classmethod
    def _make_scraper(cls):
        """ Creates a scraper object. You must mock out requests.get if you plan to scrape. """
        return Scraper.objects.create(scrapableURL="mock://scrape", sourceURL="mock://source")

    @classmethod
    def _mock_request_with_file(cls, requestMock, filename=filenames.ONE_ROUND):
        """ Creates a valid response from the server """
        with open(filename, 'r') as f:
            data = f.read()
        requestMock.get('mock://scrape', text=data)

    def _login_with_scrape_permissions(self):
        user = TestHelpers.login(self.client)
        TestHelpers.give_auth(user, 'add_scraper')
        TestHelpers.give_auth(user, 'change_scraper')

    def test_bad_url_not_logged_in(self):
        """ When grabbing a nonexistent scraper, should get a 302 if not logged in """
        response = self.client.get(reverse('viewScraper', args=(0,)))
        self.assertEqual(response.status_code, status.HTTP_302_FOUND)
        expectedRedirect = '/accounts/login/?next=/viewScraper/0'
        self.assertEqual(response['location'], expectedRedirect)

    def test_bad_url_not_authed(self):
        """ When grabbing a nonexistent scraper, should get a 403 if not authorized """
        TestHelpers.login(self.client)
        response = self.client.get(reverse('viewScraper', args=(0,)))
        self.assertEqual(response.status_code, status.HTTP_403_FORBIDDEN)

    def test_bad_url_authed(self):
        """ When grabbing a nonexistent scraper, should get a 404 - it doesn't exist """
        user = TestHelpers.login(self.client)
        TestHelpers.give_auth(user, 'view_scraper')
        response = self.client.get(reverse('viewScraper', args=(0,)))
        self.assertEqual(response.status_code, status.HTTP_404_NOT_FOUND)

    def test_good_url_authed(self):
        """ When grabbing a nonexistent scraper, should get a 404 - it doesn't exist """
        user = TestHelpers.login(self.client)
        TestHelpers.give_auth(user, 'view_scraper')
        response = self.client.get(reverse('viewScraper', args=(0,)))
        self.assertEqual(response.status_code, status.HTTP_404_NOT_FOUND)

    def test_scrapenow_not_authed_to_scrape(self):
        """ Test 403 if no permissions to scrape """
        user = TestHelpers.login(self.client)
        TestHelpers.give_auth(user, 'view_scraper')
        scraper = self._make_scraper()
        response = self.client.get(reverse('scrapeNow', args=(scraper.pk,)))
        self.assertEqual(response.status_code, status.HTTP_403_FORBIDDEN)

    @Mocker()
    def test_scrapenow_is_authed_to_scrape(self, requestMock):
        """ Test scraping succeeds when authed, and jsonConfig is updated """
        # Set up the mock and log in
        self._mock_request_with_file(requestMock)
        self._login_with_scrape_permissions()
        scraper = self._make_scraper()

        # jsonConfig is None at first
        self.assertIsNone(scraper.jsonConfig)

        # We make the request. Assert it's called.
        response = self.client.get(reverse('scrapeNow', args=(scraper.pk,)))
        self.assertEqual(1, len(requestMock.request_history))

        # The status must redirect us to the sucess page.
        self.assertEqual(response.status_code, status.HTTP_302_FOUND)
        expectedRedirect = '/viewScraper/%d' % (scraper.pk,)
        self.assertEqual(response['location'], expectedRedirect)

        # And the jsonconfig is filled out now
        scraper = Scraper.objects.get(pk=scraper.pk)  # refresh
        self.assertIsNotNone(scraper.jsonConfig)

    @Mocker()
    def test_scrapenow_bad_json(self, requestMock):
        """ Scrape succeeds, but the data is bad """
        requestMock.get('mock://scrape', text='{"baddata"}')
        self._login_with_scrape_permissions()
        scraper = self._make_scraper()

        # We make the request. Assert it's called, and that lastFailedScrape is updated
        self.assertIsNone(scraper.lastFailedScrape)
        with self.assertRaises(BadJSONError):
            self.client.get(reverse('scrapeNow', args=(scraper.pk,)))

        scraper = Scraper.objects.get(pk=scraper.pk)
        self.assertIsNotNone(scraper.lastFailedScrape)

    @Mocker()
    def test_circumvented_scrapenow(self, requestMock):
        """ Should not be possible, but to futureproof, auth is rechecked just before scraping """
        self._mock_request_with_file(requestMock)

        # These aren't enough permissions.
        user = TestHelpers.login(self.client)
        TestHelpers.give_auth(user, 'view_scraper')

        scraper = self._make_scraper()
        with self.assertRaises(PermissionDenied):
            ScrapeWorker.scrape(scraper, user)

    @Mocker()
    def test_update_on_second_scrape(self, requestMock):
        """ When scraping twice, the jsonFile is updated, not recreated. """
        # Set up the mock and log in
        self._login_with_scrape_permissions()
        scraper = self._make_scraper()

        # On the first call, collect all the data
        self._mock_request_with_file(requestMock, filenames.ONE_ROUND)
        self.client.get(reverse('scrapeNow', args=(scraper.pk,)))
        scraper = Scraper.objects.get(pk=scraper.pk)
        jsonSlug = scraper.jsonConfig.slug
        lastSuccessfulScrape = scraper.lastSuccessfulScrape
        self.assertEqual(1, scraper.jsonConfig.numRounds)

        # On the second call, assert that the URL is the same, but the data is updated
        self._mock_request_with_file(requestMock, filenames.THREE_ROUND)
        self.client.get(reverse('scrapeNow', args=(scraper.pk,)))
        scraper = Scraper.objects.get(pk=scraper.pk)
        self.assertEqual(jsonSlug, scraper.jsonConfig.slug)
        self.assertNotEqual(lastSuccessfulScrape, scraper.lastSuccessfulScrape)
        self.assertEqual(3, scraper.jsonConfig.numRounds)

    @Mocker()
    def test_fails_when_file_too_large(self, requestMock):
        """ Don't allow streaming giant files """
        self._login_with_scrape_permissions()
        scraper = self._make_scraper()

        tooLargeJson = TestHelpers.generate_random_valid_json_of_size(1024 * 1024 * 2)  # 2 MB
        self._mock_request_with_file(requestMock, tooLargeJson)

        # We should have better handling than just exceptions, but this is
        # limited to admins, so...it's fine for now.
        # (Let's be real, it'll probably be "fine" forever. Sorry, future traveler.)
        with self.assertRaises(FileTooLargeException):
            self.client.get(reverse('scrapeNow', args=(scraper.pk,)))
