"""
Test registration flow - account creation and login.
django-registration has more complete tests, so we only need test the basics here.
"""

import uuid

from django.conf import settings
from django.contrib.auth import get_user_model
from django.core import mail as test_mailbox
from django.test import TestCase
from django.urls import reverse
from mock import patch
from rest_framework import status

from common.testUtils import TestHelpers


class RegistrationTests(TestCase):
    """ User Registration Tests """

    def setUp(self):
        TestHelpers.setup_host_mocks(self)

        # Don't send mailchimp mails here
        self.assertEqual(settings.MAILCHIMP_API_KEY, None)

    def test_registration_pages(self):
        """ Ensures all required django-registration templates render successfully. """
        # Each 0-argument view should return a 200 when viewed.
        # This ensures our templates are named correctly and are without errors.
        views = ['django_registration_register',
                 'django_registration_complete',
                 'django_registration_activation_complete',
                 'django_registration_disallowed']
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
        self.assertEqual(response.url, 'v/city-of-eastpointe-macomb-county-mi')

    def test_invalid_username_and_pass(self):
        """
        Tests that you cannot register the same name as testuser, created in login(),
        and that a bad password causes an error.
        """
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

    @patch('requests.post')
    def test_registration_registers_mailchimp(self, postMock):
        """ Tests that auth successfully subscribes to mailchimp """
        with self.settings(MAILCHIMP_API_KEY="mysecret",
                           MAILCHIMP_DC="dc",
                           MAILCHIMP_LIST_ID="listid"):
            password = uuid.uuid4()
            self.client.post(reverse('django_registration_register'), {
                'username': 'testuser',
                'password1': password,
                'password2': password,
                'email': 'test@example.com'
            })

            # requests.post has not been called yet
            postMock.assert_not_called()

            # and it is called once we click the activation email
            self.client.get(TestHelpers.get_email_reg_link(test_mailbox.outbox))
            postMock.assert_called_once()

            # Check all the arguments
            postMock.assert_called_with('https://dc.api.mailchimp.com/3.0/lists/listid/members',
                                        auth=('apikey', 'mysecret'),
                                        data={'email_address': 'test@example.com',
                                              'FNAME': 'testuser',
                                              'status': 'subscribed',
                                              'ip_signup': '127.0.0.1',
                                              'tags': ['autosignup']})
