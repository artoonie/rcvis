"""
Integration tests without a server
"""

from django.test import TestCase
from django.urls import reverse
from rest_framework import status

from common.testUtils import TestHelpers


class RegistrationTests(TestCase):
    """ User Registration Tests """

    def setUp(self):
        TestHelpers.setup_host_mocks(self)

    def test_registration_pages(self):
        """ Ensures all required django-registration templates render successfully. """
        views = ['django_registration_register',
                 'django_registration_complete',
                 'django_registration_activation_complete',
                 'django_registration_disallowed'
                 ]

        # No-argument views
        for viewName in views:
            response = self.client.get(reverse(viewName))
            self.assertEqual(response.status_code, status.HTTP_200_OK)

        # Activation view requiring a valid token (which should be invalid)
        response = self.client.get(reverse('django_registration_activate', args=('testtoken',)))
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        assert b'Activation Failed' in response.content
