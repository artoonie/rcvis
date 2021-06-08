"""
Integration tests without a server
"""

import uuid

from django.contrib.auth import get_user_model
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

    def test_logged_out_cannot_get_upload_page(self):
        """ Tests that upload page redirects when logged out """
        response = self.client.get(reverse('upload'))
        self.assertEqual(response.url, '/accounts/login/?redirect_to=/upload.html')

    def test_logged_out_cannot_post_upload(self):
        """ Tests that upload fails when not authenticated """
        response = TestHelpers.get_multiwinner_upload_response(self.client)
        self.assertEqual(response.url, '/accounts/login/?redirect_to=/upload.html')

    def test_logged_in_can_post_upload(self):
        """ Tests that upload succeeds when authenticated """
        TestHelpers.login(self.client)
        response = TestHelpers.get_multiwinner_upload_response(self.client)
        self.assertEqual(response.url, 'v/macomb-multiwinner-surplus')

    def test_invalid_username_and_pass(self):
        """ Tests that you cannot register the same name (as testuser, creating in login) """
        TestHelpers.login(self.client)
        response = self.client.post(reverse('django_registration_register'), {
            'username': 'testuser',
            'password1': 'testpass',
            'password2': 'testpass'
        })
        self.assertIn(b'A user with that username already exists', response.content)
        self.assertIn(b'This password is too common', response.content)

    def test_all_fields_required(self):
        """
        Tests that you must include all fields.
        Here, we need three more fields: pass1, pass2, email
        """
        response = self.client.post(reverse('django_registration_register'), {
            'username': 'testuser'
        })
        self.assertEqual(response.content.count(b'This field is required.'), 3)

    def test_succesful_auth(self):
        """ All fields provided """
        self.assertEqual(len(get_user_model().objects.filter(username='testuser')), 0)
        password = uuid.uuid4()
        self.client.post(reverse('django_registration_register'), {
            'username': 'testuser',
            'password1': password,
            'password2': password,
            'email': 'test@example.com'
        })
        self.assertEqual(len(get_user_model().objects.filter(username='testuser')), 1)
