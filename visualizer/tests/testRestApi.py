"""
Rest API Test Cases
"""

from enum import Enum
import os
import re

from django.contrib.auth import get_user_model
from django.core.cache import cache
from django.urls import reverse
from rest_framework import status
from rest_framework.test import APITestCase
from rest_framework_tracking.models import APIRequestLog

from common.testUtils import TestHelpers
from visualizer.models import JsonConfig
from visualizer.tests import filenames


class RestAPITests(APITestCase):
    """ Tests for the REST API """

    def setUp(self):
        # Create an admin user programmatically
        admin = get_user_model().objects.create_user('admin', 'admin@example.com', 'password')
        admin.is_staff = True
        admin.save()

        # Create a regular user programmatically
        admin = get_user_model().objects.create_user('notadmin', 'notadmin@example.com', 'password')
        admin.is_staff = False
        admin.save()

        TestHelpers.setup_host_mocks(self)

    def _authenticate_as(self, username):
        cache.clear()
        if not username:
            self.client.force_authenticate()  # pylint: disable=no-member
        else:
            user = get_user_model().objects.get(username=username)
            self.client.force_authenticate(user=user)   # pylint: disable=no-member

    def _upload_file_for_api(self, filename):
        with open(filename) as f:
            return self.client.post('/api/visualizations/', data={'jsonFile': f})

    # This test has a lot of helper functions, allow it to be longer
    # pylint: disable=too-many-statements
    def test_permissions(self):
        """ Test the permissions of several API calls on logged in, logged out, and admin users """
        class Users(Enum):
            """ What the users permission levels are """
            ADMIN = 0
            NOT_ADMIN = 1
            LOGGED_OUT = 2

        class Models(Enum):
            """ What models to act upon """
            USERS = 0
            JSONS = 1

        class Actions(Enum):
            """ What actions to take, here corresponding to GET and POST """
            LIST = 0
            MAKE = 1

        def authenticate_as(user):
            if user == Users.ADMIN:
                self._authenticate_as('admin')
            elif user == Users.NOT_ADMIN:
                self._authenticate_as('notadmin')
            else:
                self._authenticate_as(None)

        def initialize_permission_matrix():
            # Initialize with a loop to ensure nothing falls through the cracks
            permissionMatrix = {}
            for user in Users:
                permissionMatrix[user] = {}
                for model in Models:
                    permissionMatrix[user][model] = {}
                    for action in Actions:
                        permissionMatrix[user][model][action] = None

            adminUser = permissionMatrix[Users.ADMIN]
            adminUser[Models.JSONS][Actions.LIST] = status.HTTP_200_OK
            adminUser[Models.USERS][Actions.LIST] = status.HTTP_200_OK
            adminUser[Models.JSONS][Actions.MAKE] = status.HTTP_201_CREATED
            adminUser[Models.USERS][Actions.MAKE] = status.HTTP_405_METHOD_NOT_ALLOWED

            notAdminUser = permissionMatrix[Users.NOT_ADMIN]
            notAdminUser[Models.JSONS][Actions.LIST] = status.HTTP_200_OK
            notAdminUser[Models.USERS][Actions.LIST] = status.HTTP_403_FORBIDDEN
            notAdminUser[Models.JSONS][Actions.MAKE] = status.HTTP_201_CREATED
            notAdminUser[Models.USERS][Actions.MAKE] = status.HTTP_403_FORBIDDEN

            loggedOutUser = permissionMatrix[Users.LOGGED_OUT]
            loggedOutUser[Models.JSONS][Actions.LIST] = status.HTTP_401_UNAUTHORIZED
            loggedOutUser[Models.USERS][Actions.LIST] = status.HTTP_401_UNAUTHORIZED
            loggedOutUser[Models.JSONS][Actions.MAKE] = status.HTTP_401_UNAUTHORIZED
            loggedOutUser[Models.USERS][Actions.MAKE] = status.HTTP_401_UNAUTHORIZED

            return permissionMatrix

        def run_command(model, action):
            # Get URL
            modelToUrl = {Models.USERS: '/api/users/',
                          Models.JSONS: '/api/visualizations/'}
            actionToCommand = {Actions.LIST: self.client.get,
                               Actions.MAKE: self.client.post}

            # Get the URL and function call (command)
            url = modelToUrl[model]
            command = actionToCommand[action]

            # Get the data
            if action == Actions.LIST:
                # No data needed to GET
                data = {}
            elif model == Models.USERS:
                # Username/Pass to create a USER (thought this will never succeed)
                data = {"username": "user", "password": "pass"}
            else:
                # Special case: Upload a JSON here
                # (because we want to contain the file pointer within the with statement)
                with open(filenames.MULTIWINNER) as f:
                    return command(url, data={'jsonFile': f})

            return command(url, data=data, format="json")

        permissionMatrix = initialize_permission_matrix()
        for user in permissionMatrix:
            authenticate_as(user)
            for model in permissionMatrix[user]:
                for action in permissionMatrix[user][model]:
                    response = run_command(model, action)
                    expectedStatus = permissionMatrix[user][model][action]

                    # If it's not, print out a more helpful message
                    try:
                        self.assertEqual(response.status_code, expectedStatus)
                    except Exception:
                        print(f"Permissions are incorrect for {user}, {model}, {action}")
                        print(response.content)
                        raise

    def test_list_models(self):
        """ Honestly, just a weaker version of test_permissions with perhaps more clarity
            and therefore a less bug-prone test """

        # Log out / unauthenticate
        self._authenticate_as(None)

        # Not allowed to list users
        response = self.client.get('/api/users/', format='json')
        self.assertEqual(response.status_code, status.HTTP_401_UNAUTHORIZED)

        # Not allowed to list jsons
        response = self.client.get('/api/visualizations/', format='json')
        self.assertEqual(response.status_code, status.HTTP_401_UNAUTHORIZED)

        # Admins can see all pages
        self._authenticate_as('admin')
        response = self.client.get('/api/visualizations/', format='json')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        response = self.client.get('/api/users/', format='json')
        self.assertEqual(response.status_code, status.HTTP_200_OK)

        # Notadmins can see and upload visualizations
        self._authenticate_as('notadmin')
        response = self.client.get('/api/visualizations/', format='json')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        response = self.client.get('/api/users/', format='json')
        self.assertEqual(response.status_code, status.HTTP_403_FORBIDDEN)

    def test_put_with_no_file(self):
        """ Checks that you can't try to create something without a jsonFile """
        self._authenticate_as('admin')

        with open(filenames.MULTIWINNER) as f:
            response = self.client.post('/api/visualizations/', data={'jsonFizzile': f})
            self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)

    def test_superfluous_fields(self):
        """ Checks that no extra fields are allowed """
        self._authenticate_as('admin')

        with open(filenames.MULTIWINNER) as f:
            # The regular way
            response = self.client.post('/api/visualizations/', data={'jsonFile': f})
            self.assertEqual(response.status_code, status.HTTP_201_CREATED)

            # Sanity check seeking to start of file
            f.seek(0)
            response = self.client.post('/api/visualizations/', data={'jsonFile': f})
            self.assertEqual(response.status_code, status.HTTP_201_CREATED)

            # Nonexistent field
            f.seek(0)
            response = self.client.post('/api/visualizations/', data={'jsonFile': f, 'tt': 0})
            self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)

            # Read-only field (generated by Model)
            f.seek(0)
            response = self.client.post('/api/visualizations/', data={'jsonFile': f, 'slug': 'hi'})
            self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)

            # Read-only field (generated by Serializer)
            f.seek(0)
            response = self.client.post(
                '/api/visualizations/',
                data={
                    'jsonFile': f,
                    'numRounds': 2})
            self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)

    def test_uploads_and_edits(self):
        """ Upload and edit a json in various ways """
        self._authenticate_as('notadmin')

        # Working data
        response = self._upload_file_for_api(filenames.ONE_ROUND)
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)

        # Bad data
        response = self._upload_file_for_api(filenames.BAD_DATA)
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)

        # More bad data - too long filename
        tf = TestHelpers.copy_with_new_name(filenames.MULTIWINNER, 'x' * 300)
        response = self._upload_file_for_api(tf.name)
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)

        # Get the working data we just uploaded
        oneRoundObject = JsonConfig.objects.all().order_by('id')[0]  # pylint: disable=no-member
        self.assertEqual(oneRoundObject.owner.username, 'notadmin')
        self.assertEqual(oneRoundObject.hideSankey, False)

        # Get the URL and data on which to modify this
        url = f'/api/visualizations/{oneRoundObject.id}/'
        editedData = {'hideSankey': True}

        # Put should fail with the incomplete data
        response = self.client.put(url, format='json', data=editedData)
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)

        # Patch should fail with config changes
        # TODO eventually allow this again - should be allowed to change config
        response = self.client.patch(url, format='json', data=editedData)
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)

        # Patch should also succeed with a JSON change
        with open(filenames.MULTIWINNER) as f:
            response = self.client.patch(url, data={'jsonFile': f})
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        response = self.client.get(url, format='json')
        filenameBasename = os.path.splitext(os.path.basename(filenames.MULTIWINNER))[0]
        assert filenameBasename in response.data['jsonFile']
        self.assertEqual(response.data['title'], "City of Eastpointe, Macomb County, MI")

        # But changing the owner is not allowed
        notadminId = get_user_model().objects.all().filter(username='notadmin')[0].id
        response = self.client.patch(url, data={'owner': notadminId - 1})
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)
        response = self.client.get(url, format='json')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        reResult = re.match('.*/api/users/([0-9]*)', response.data['owner'])
        ownerId = reResult.groups()[0]
        self.assertEqual(ownerId, str(notadminId))

        # Changing the slug is an error
        originalSlug = response.data['slug']
        response = self.client.patch(url, data={'slug': 'notthis'})
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)
        response = self.client.get(url)
        assert response.data['slug'] == originalSlug

        # And not even an admin can edit someone else's data
        self._authenticate_as('admin')
        response = self.client.patch(url, format='json', data=editedData)
        self.assertEqual(response.status_code, status.HTTP_403_FORBIDDEN)

    def test_large_file_fails(self):
        """ Ensure that large files fail via the API as well """
        self._authenticate_as('notadmin')
        response = self._upload_file_for_api(
            TestHelpers.generate_random_valid_json_of_size(1024 * 1024 * 3))  # 3mb
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)

    def test_oembed_returns(self):
        """ Ensure that the oembed data works """
        self._authenticate_as('notadmin')
        response = self._upload_file_for_api(filenames.ONE_ROUND)
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)

        slug = response.data['slug']
        expectedUrl = reverse('visualize', args=(slug,))
        assert response.data['visualizeUrl'].endswith(expectedUrl)

        oembedUrl = response.data['oembedEndpointUrl']
        response = self.client.get(oembedUrl)
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def test_errors_returned(self):
        """ Ensure that a stack trace is part of the returned error message """
        self._authenticate_as('notadmin')

        # Yes errors
        response = self._upload_file_for_api(filenames.BAD_DATA)
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)
        assert 'JSON is not valid' in response.data['jsonFile'][0]

        # No errors
        response = self._upload_file_for_api(filenames.ONE_ROUND)
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        assert 'JSON is not valid' not in response.data['jsonFile'][0]

    def test_analytics(self):
        """ Ensure analytics are created """
        self._authenticate_as('notadmin')
        self.assertEqual(APIRequestLog.objects.all().count(), 0)
        self._upload_file_for_api(filenames.ONE_ROUND)
        self.assertEqual(APIRequestLog.objects.all().count(), 1)
        self.client.get('/api/users/', format='json')
        self.assertEqual(APIRequestLog.objects.all().count(), 2)

        logs = APIRequestLog.objects.all()
        self.assertEqual(logs[0].method, 'POST')
        self.assertEqual(logs[1].method, 'GET')

    def test_defaults(self):
        """ Ensure the correct defaults are used on upload """
        self._authenticate_as('notadmin')
        response = self._upload_file_for_api(filenames.ONE_ROUND)
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        oneRoundObject = JsonConfig.objects.all().order_by('id')[0]  # pylint: disable=no-member
        self.assertEqual(oneRoundObject.hideSankey, False)
        self.assertEqual(oneRoundObject.doUseHorizontalBarGraph, True)
