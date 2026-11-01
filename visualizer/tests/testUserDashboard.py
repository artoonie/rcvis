"""
Tests for the account-management dashboard: privacy toggle,
and editing/deleting your own uploads.
"""

import uuid

from django.contrib.auth import get_user_model
from django.test import TestCase
from django.urls import reverse
from mock import patch
from rest_framework import status

from common.testUtils import TestHelpers
from visualizer.models import JsonConfig
from visualizer.tests import filenames


class UserDashboardTests(TestCase):
    """ Tests for the dashboard, privacy toggle, edit, and delete """

    def setUp(self):
        TestHelpers.setup_host_mocks(self)

    def _upload_and_get_config(self):
        """ Logs in, uploads the multiwinner file, returns the JsonConfig """
        TestHelpers.login(self.client)
        TestHelpers.get_multiwinner_upload_response(self.client)
        return TestHelpers.get_latest_upload()

    def _login_as_other_user(self):
        """ Logs in as a different, second user """
        otherUser = get_user_model().objects.create_user(
            username='otheruser',
            email='other@example.com',
            password=str(uuid.uuid4()))
        self.client.force_login(otherUser)
        return otherUser

    def test_logged_out_redirects_to_login(self):
        """ All account-management pages require login """
        config = self._upload_and_get_config()
        TestHelpers.logout(self.client)

        urls = [reverse('userDashboard'),
                reverse('editUpload', args=(config.slug,)),
                reverse('deleteUpload', args=(config.slug,))]
        for url in urls:
            response = self.client.get(url)
            self.assertEqual(response.url, f'/accounts/login/?redirect_to={url}')

    def test_dashboard_lists_own_uploads_only(self):
        """ The dashboard shows your uploads, and not anyone else's """
        config = self._upload_and_get_config()

        response = self.client.get(reverse('userDashboard'))
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertIn(config, response.context['uploads'])

        self._login_as_other_user()
        response = self.client.get(reverse('userDashboard'))
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertNotIn(config, response.context['uploads'])

    def test_non_owner_gets_404(self):
        """ Only the owner can access edit and delete """
        config = self._upload_and_get_config()
        self._login_as_other_user()

        for urlName in ('editUpload', 'deleteUpload'):
            url = reverse(urlName, args=(config.slug,))
            self.assertEqual(self.client.get(url).status_code, status.HTTP_404_NOT_FOUND)
            self.assertEqual(self.client.post(url).status_code, status.HTTP_404_NOT_FOUND)

        # And the object was not deleted
        self.assertTrue(JsonConfig.objects.filter(pk=config.pk).exists())

    def test_privacy_toggle(self):
        """ Toggling privacy flips isPrivate and removes uploads from the public list """
        config = self._upload_and_get_config()
        user = config.owner
        self.assertFalse(user.userprofile.isPrivate)
        self.assertIn(config, JsonConfig.get_all_public())

        self.client.post(reverse('togglePrivacy'), {'visibility': 'private'})
        user.refresh_from_db()
        self.assertTrue(user.userprofile.isPrivate)
        self.assertNotIn(config, JsonConfig.get_all_public())

        # Still reachable by direct link
        response = self.client.get(reverse('visualize', args=(config.slug,)))
        self.assertEqual(response.status_code, status.HTTP_200_OK)

        # Choosing public makes it public again
        self.client.post(reverse('togglePrivacy'), {'visibility': 'public'})
        user.refresh_from_db()
        self.assertFalse(user.userprofile.isPrivate)
        self.assertIn(config, JsonConfig.get_all_public())

    def test_edit_without_new_file(self):
        """ Editing settings without a new file keeps the file, slug, and title """
        config = self._upload_and_get_config()
        self.assertFalse(config.hideSankey)

        url = reverse('editUpload', args=(config.slug,))
        response = self.client.get(url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)

        response = self.client.post(url, {'hideSankey': 'on'})
        self.assertEqual(response.url, f'/v/{config.slug}')

        updatedConfig = JsonConfig.objects.get(pk=config.pk)
        self.assertTrue(updatedConfig.hideSankey)
        self.assertEqual(updatedConfig.slug, config.slug)
        self.assertEqual(updatedConfig.title, config.title)
        self.assertEqual(updatedConfig.jsonFile.name, config.jsonFile.name)

    def test_edit_with_new_file(self):
        """ Replacing the file updates the data but keeps the slug """
        config = self._upload_and_get_config()

        url = reverse('editUpload', args=(config.slug,))
        with open(filenames.ONE_ROUND, 'r', encoding='utf-8') as f:
            response = self.client.post(url, {'jsonFile': f})
        self.assertEqual(response.url, f'/v/{config.slug}')

        updatedConfig = JsonConfig.objects.get(pk=config.pk)
        self.assertEqual(updatedConfig.slug, config.slug)
        self.assertNotEqual(updatedConfig.title, config.title)
        self.assertNotEqual(updatedConfig.numRounds, config.numRounds)

    def test_delete(self):
        """ Deleting removes the object and purges the cloudflare cache """
        config = self._upload_and_get_config()

        url = reverse('deleteUpload', args=(config.slug,))
        response = self.client.get(url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)

        with patch('visualizer.views.CloudflareAPI') as mockCloudflare:
            response = self.client.post(url)
        self.assertEqual(response.url, reverse('userDashboard'))
        self.assertFalse(JsonConfig.objects.filter(pk=config.pk).exists())
        mockCloudflare.purge_vis_cache.assert_called_once_with(config.slug)
