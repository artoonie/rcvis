"""
Tests the /raw/ raw data download
"""

from django.test import TestCase
from django.urls import reverse

from common.testUtils import TestHelpers
from visualizer.models import JsonConfig


class RawDataTests(TestCase):
    """
    Raw Data tests: we want to be pretty careful here, since cloudflare won't protect
    our AWS data.
    """

    def setUp(self):
        TestHelpers.login(self.client)
        TestHelpers.setup_host_mocks(self)
        TestHelpers.get_multiwinner_upload_response(self.client)
        self.slug = TestHelpers.get_latest_upload().slug
        self.uploadedObject = TestHelpers.get_latest_upload()

    def tearDown(self):
        TestHelpers.logout(self.client)

    def test_needs_login(self):
        """ Viewing the URL requires a login """
        TestHelpers.logout(self.client)
        rawDataUrl = reverse('downloadRawData', args=(self.slug,))
        response = self.client.get(rawDataUrl)
        expectedUrl = "/accounts/login/?redirect_to=/raw/city-of-eastpointe-macomb-county-mi"
        self.assertEqual(response.status_code, 302)
        self.assertEqual(response['location'], expectedUrl)

    def test_works_when_logged_in(self):
        """ When logged in, goes to correct URL """
        rawDataUrl = reverse('downloadRawData', args=(self.slug,))
        response = self.client.get(rawDataUrl)
        self.assertEqual(response.status_code, 200)

    def test_download_url_works(self):
        """ Find the download URL in the html """
        rawDataUrl = reverse('downloadRawData', args=(self.slug,))
        response = self.client.get(rawDataUrl)
        self.assertIn(b'<a href="/media/macomb-multiwinner-surplus', response.content)

    def test_tracking_works(self):
        """ Test that the downloadedRawData tracking works """
        visualizeUrl = reverse('visualize', args=(self.slug,))
        response = self.client.get(visualizeUrl)
        user = response.wsgi_request.user
        pk = self.uploadedObject.pk

        # Should not exist
        with self.assertRaises(JsonConfig.DoesNotExist):
            user.userprofile.downloadedRawData.get(pk=pk)

        rawDataUrl = reverse('downloadRawData', args=(self.slug,))
        self.client.get(rawDataUrl)

        # Now it should
        hasDownloadedSlug = user.userprofile.downloadedRawData.get(pk=pk)
        assert hasDownloadedSlug
