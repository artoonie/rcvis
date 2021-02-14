"""
Unit and integration tests for the core visualizer app
"""

# pylint: disable=too-many-lines

from enum import Enum
from io import StringIO
import json
import os
import platform
import re
import time
from datetime import datetime
from urllib.parse import urlparse
from mock import patch

from django.core.cache import cache
from django.core.files import File
from django.core.management import call_command
from django.contrib.auth import get_user_model
from django.contrib.staticfiles.testing import StaticLiveServerTestCase
from django.test import TestCase, TransactionTestCase
from django.test.client import RequestFactory
from django.urls import reverse
from rest_framework import status
from rest_framework.test import APITestCase
from rest_framework_tracking.models import APIRequestLog
from selenium import webdriver
from selenium.webdriver.common.action_chains import ActionChains
from selenium.webdriver.common.keys import Keys
from selenium.common.exceptions import NoSuchElementException, WebDriverException
from selenium.webdriver.support.ui import WebDriverWait

from common.testUtils import TestHelpers
from common.viewUtils import get_data_for_view
from visualizer.graph.graphCreator import BadJSONError
from visualizer.graph.graphCreator import make_graph_with_file
from visualizer.views import Oembed
from visualizer.models import JsonConfig
from visualizer.forms import JsonConfigForm
from visualizer.wikipedia.wikipedia import WikipediaExport

FILENAME_MULTIWINNER = 'testData/macomb-multiwinner-surplus.json'
FILENAME_OPAVOTE = 'testData/opavote-fairvote.json'
FILENAME_BROKEN_RANKIT_1 = 'testData/rankit-malformed-1.json'
FILENAME_BROKEN_RANKIT_2 = 'testData/rankit-malformed-2.json'
FILENAME_BAD_DATA = 'testData/test-baddata.json'
FILENAME_ONE_ROUND = 'testData/oneRound.json'
FILENAME_THREE_ROUND = 'testData/medium-rcvis.json'
FILENAME_ELECTIONBUDDY = 'testData/electionbuddy.csv'
FILENAME_ELECTIONBUDDY_NOABSTENTION = 'testData/electionbuddy-without-abstentions.csv'
FILENAME_ELECTIONBUDDY_REGRESSION = 'testData/electionbuddy-regression.csv'
CONTROL_KEY = Keys.COMMAND if platform.system() == "Darwin" else Keys.CONTROL

TestHelpers.silence_logging_spam()


class SimpleTests(TestCase):
    """ Simple tests that do not require a live browser """

    def setUp(self):
        TestHelpers.setup_host_mocks(self)

    @classmethod
    def _get_data_for_view(cls, fn):
        """ Opens the given file and creates a graph with it """
        with open(fn, 'r+') as f:
            config = JsonConfig(jsonFile=File(f))
            return get_data_for_view(config)

    def test_opavote_loads(self):
        """ Opens the opavote file """
        self._get_data_for_view(FILENAME_OPAVOTE)

    def test_electionbuddy_loads(self):
        """ Opens the electionbuddy file """
        self._get_data_for_view(FILENAME_ELECTIONBUDDY)
        self._get_data_for_view(FILENAME_ELECTIONBUDDY_NOABSTENTION)
        self._get_data_for_view(FILENAME_ELECTIONBUDDY_REGRESSION)

    def test_multiwinner_loads(self):
        """ Opens the multiwinner file """
        self._get_data_for_view(FILENAME_MULTIWINNER)

    def test_rankit_loads(self):
        """ Opens a rankit.vote file -
            should be the same as Universal Tabulator but has failed in the past """
        # Uses FixRankitMissingTransfers,
        #      FixRankitCombinedTallyResults,
        #      FixRankitNoElimOnLastRound
        self._get_data_for_view(FILENAME_BROKEN_RANKIT_1)

        # Uses FixRankitMissingWinners
        self._get_data_for_view(FILENAME_BROKEN_RANKIT_2)

    def test_bad_json_fails(self):
        """ Opens the invalid file and asserts that it fails """
        with self.assertRaises(BadJSONError):
            self._get_data_for_view(FILENAME_BAD_DATA)

    def test_too_long_name_fails(self):
        """ Titles are limited to 256 chars """
        # Write bad data
        tf = TestHelpers.copy_with_new_name(FILENAME_MULTIWINNER, 'x' * 300)

        # Ensure failure
        response = self.client.post('/upload.html', {'jsonFile': tf})
        self.assertTemplateUsed(response, 'visualizer/errorUploadFailedGeneric.html')

        # Though, note: get_data_for_view won't fail
        self._get_data_for_view(tf.name)

        # Write good data
        tf = TestHelpers.copy_with_new_name(FILENAME_MULTIWINNER, 'x' * 200)

        # Ensure success
        response = self.client.post('/upload.html', {'jsonFile': tf})
        self.assertEqual(response.status_code, 302)

    def test_too_long_filename_succeed(self):
        """ TODO: Make this test check that a filename with 255 chars gets truncated """
        # Annoyingly this test doesn't work with a filename prefix > 87 chars
        tf = TestHelpers.copy_with_new_name(
            FILENAME_MULTIWINNER,
            newName='any name',
            newFilenamePrefix='x' * 87)
        response = self.client.post('/upload.html', {'jsonFile': tf})
        self.assertEqual(response.status_code, 302)
        lastUpload = JsonConfig.objects.all().order_by('id')[0]  # pylint: disable=no-member
        self.assertLess(len(lastUpload.slug), 100)

    # pylint: disable=R0201
    def test_various_configs(self):
        """ Tests toggling on/off each config option """
        configBoolsToToggle = [t for t in JsonConfigForm.Meta.fields if t != 'jsonFile']
        fn = FILENAME_MULTIWINNER
        for configBoolToToggle in configBoolsToToggle:
            with open(fn, 'r+') as f:
                config = JsonConfig(jsonFile=File(f))
                config.__dict__[configBoolToToggle] = not config.__dict__[configBoolToToggle]
                get_data_for_view(config)

    def test_home_page(self):
        """ Tests that the home page loads """
        response = self.client.get('/')
        self.assertEqual(response.status_code, 200)

    def test_upload_file(self):
        """ Tests uploading a random file """
        response = TestHelpers.get_multiwinner_upload_response(self.client)
        self.assertEqual(response.status_code, 302)
        self.assertEqual(response['location'], "v/macomb-multiwinner-surplus")

    def test_upload_file_failure(self):
        """ Tests that we get an error page if a file fails to upload """
        with open(FILENAME_BAD_DATA) as f:
            response = self.client.post('/upload.html', {'jsonFile': f})
        self.assertEqual(response.status_code, 200)
        self.assertTemplateUsed(response, 'visualizer/errorBadJson.html')

    def test_large_file_failure(self):
        """ Tests that we get an error page if a the file is too large """
        # First test it succeeds when it's an okay filesize
        # Caution, don't try to make this file huge or close to the limits, it'll slow
        # down the tests trying to load ~2mb of data...
        acceptableSizeJson = TestHelpers.generate_random_valid_json_of_size(
            1024 * 1024 * 0.1)  # 0.1 MB
        with open(acceptableSizeJson) as f:
            response = self.client.post('/upload.html', {'jsonFile': f})
        self.assertEqual(response.status_code, 302)
        self.assertEqual(response['location'], "v/randomfile")

        # Then verify it fails with a too-large filesize
        tooLargeJson = TestHelpers.generate_random_valid_json_of_size(1024 * 1024 * 3)  # 3 MB
        with open(tooLargeJson) as f:
            response = self.client.post('/upload.html', {'jsonFile': f})
        self.assertEqual(response.status_code, 200)
        self.assertTemplateUsed(response, 'visualizer/errorUploadFailedGeneric.html')

    def test_old_style_urls(self):
        """ Ensure both /v/slug and /visualize=slug work """
        def ensure_url_uses_template(url, template):
            """ Helper function to ensure the given URL matches the template """
            response = self.client.get("/" + url)
            self.assertTemplateUsed(response, f'visualizer/{template}.html')

        response = TestHelpers.get_multiwinner_upload_response(self.client)
        uploadedUrl = response['location']

        # New style - visualize
        ensure_url_uses_template(uploadedUrl, 'visualize')

        # Old style - visualize
        oldStyleUrl = uploadedUrl.replace('v/', 'visualize=')
        ensure_url_uses_template(oldStyleUrl, 'visualize')

        # New style - embedded
        embedUrl = uploadedUrl.replace('v/', 've/')
        ensure_url_uses_template(embedUrl, 'visualize-embedded')

        # Old style - embedded
        oldStyleEmbedUrl = uploadedUrl.replace('v/', 'visualizeEmbedded=')
        ensure_url_uses_template(oldStyleEmbedUrl, 'visualize-embedded')

    def test_oembed_converts_url(self):
        """ Check that the oembed converts a visualize URL to a visualizeEmbedded URL """
        # First unit tests
        view = Oembed()
        func = view._get_visualize_embedded_url_from  # pylint:disable=protected-access
        allowedUrls = ['https://fakeurl.com/visualize=fakeslug',
                       'https://fakeurl.com/visualizeEmbedded=fakeslug',
                       'https://fakeurl.com/v/fakeslug',
                       'https://fakeurl.com/v/fakeslug?a=b',
                       'https://fakeurl.com/ve/fakeslug',
                       'https://fakeurl.com/visualizeMovie=fakeslug']
        for allowedUrl in allowedUrls:
            self.assertEqual(func(allowedUrl), '/ve/fakeslug')
        disallowedUrls = ['https://fakeurl.com/oembed=fakeslug',
                          'https://fakeurl.com/visualize=',
                          'https://fakeurl.com/ve/']
        for disallowedUrl in disallowedUrls:
            self.assertEqual(func(disallowedUrl), None)

        # Then integration tests for the View.
        # Create a fake request
        visualizeUrl = reverse('visualize', args=('fakeslug',))
        requestData = {'url': 'https://fakeurl.com' + visualizeUrl}
        request = RequestFactory().get(reverse('oembed'), requestData, HTTP_HOST='example.com')

        # Get the response
        jsonResponse = Oembed().get(request)
        responseData = json.loads(jsonResponse.content)

        # Validate the response - this time the complete URL is needed
        assert 'https://fakeurl.com/ve/fakeslug' in responseData['html']

    def test_oembed_keeps_vistype(self):
        """ Ensure vistype is shepharded from visualize to visualizembedded via oembed """
        TestHelpers.get_multiwinner_upload_response(self.client)
        slug = JsonConfig.objects.latest('-id').slug
        visualizeUrl = reverse('visualize', args=(slug,)) + "?vistype=sankey"
        response = self.client.get(visualizeUrl)

        assert 'sankey' in response.context_data['oembed_url']

    @patch('visualizer.wikipedia.wikipedia.WikipediaExport._get_todays_date_string')
    def test_wikicode(self, mockGetDateString):
        """ Validate that the wikicode can be generated and hasn't inadvertently changed """
        # First mock out the date so the result is the same
        mockGetDateString.return_value = "Today's Date - mocked out!"

        with open(FILENAME_MULTIWINNER, 'r+') as f:
            graph = make_graph_with_file(f, excludeFinalWinnerAndEliminatedCandidate=False)

        text = WikipediaExport(graph, "http://example.com/v/slug").create_wikicode()

        # TODO - how can I test this? I tried mwparserfromhell but that doesn't have a way to
        # validate syntax. For now, just validate it doesn't throw an exception, and that the
        # length is the same magic number I expect, so I don't inadvertently change anything
        magicKnownTextLength = 4094
        self.assertEqual(len(text), magicKnownTextLength)
        with open('testData/wikiOutput.txt', 'r') as f:
            self.maxDiff = None
            # Note: add \n to end of text because the file should be saved with \n
            self.assertEqual(text + '\n', f.read())

        # Ensure at least the text closes correctly
        assert text[-2:] == "|}"

    def test_electionbuddy_data_is_sane(self):
        """ Validates some data about the electionbuddy file """
        with open(FILENAME_ELECTIONBUDDY, 'r+') as f:
            graph = make_graph_with_file(f, excludeFinalWinnerAndEliminatedCandidate=False)
        summary = graph.summarize()
        assert len(summary.rounds) == 3
        assert len(summary.candidates) == 4
        assert len(summary.rounds[0].eliminatedNames) == 0
        assert len(summary.rounds[0].winnerNames) == 1
        assert summary.rounds[1].eliminatedNames[0] == 'Nobody'
        assert summary.rounds[2].eliminatedNames[0] == 'Chocolate'
        assert summary.rounds[0].winnerNames[0] == 'Strawberry'
        assert summary.rounds[2].winnerNames[0] == 'Vanilla'

    def test_uniqueness(self):
        """ Ensures filenames are not overwritten """
        slug0 = "macomb-multiwinner-surplus"
        slug1 = "macomb-multiwinner-surplus-1"

        response = TestHelpers.get_multiwinner_upload_response(self.client)
        self.assertEqual(response.status_code, 302)
        self.assertEqual(response['location'], f"v/{slug0}")

        response = TestHelpers.get_multiwinner_upload_response(self.client)
        self.assertEqual(response.status_code, 302)
        self.assertEqual(response['location'], f"v/{slug1}")

        model0 = JsonConfig.objects.get(slug=slug0)
        model1 = JsonConfig.objects.get(slug=slug1)

        assert model0.jsonFile.name != model1.jsonFile.name

    def test_management_commands(self):
        """ Test that the management tests work """
        # Upload two files
        TestHelpers.get_multiwinner_upload_response(self.client)
        TestHelpers.get_multiwinner_upload_response(self.client)

        # Load those two via the database
        out = StringIO()
        call_command('checkUploads', 0, 100, stdout=out)
        self.assertIn('0: Successfully loaded macomb-multiwinner-surplus-1', out.getvalue())
        self.assertIn('1: Successfully loaded macomb-multiwinner-surplus', out.getvalue())
        self.assertIn('Successfully loaded configs', out.getvalue())

        # Load all files in the testData/ directory (one of which raises a TypeError)
        out = StringIO()
        with self.assertRaises(TypeError):
            call_command('checkLocalFiles', 'testData/', stdout=out)


class ModelDeletionTests(TransactionTestCase):
    """ Testing model deletion requires a different base class:
        docs.djangoproject.com/en/3.0/topics/db/transactions/#use-in-tests
    """

    def setUp(self):
        TestHelpers.setup_host_mocks(self)

    def test_file_deletion_on_model_deletion(self):
        """ Verify that when a model is deleted, the associated file is too """
        # Upload
        with open(FILENAME_MULTIWINNER) as f:
            self.client.post('/upload.html', {'jsonFile': f})
        uploadedObject = TestHelpers.get_latest_json_config()

        # Ensure it exists
        path = uploadedObject.jsonFile.path
        assert os.path.exists(path)

        # Delete it
        uploadedObject.delete()

        # Ensure the file was also deleted
        assert not os.path.exists(path)


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
                with open(FILENAME_MULTIWINNER) as f:
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

        with open(FILENAME_MULTIWINNER) as f:
            response = self.client.post('/api/visualizations/', data={'jsonFizzile': f})
            self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)

    def test_superfluous_fields(self):
        """ Checks that no extra fields are allowed """
        self._authenticate_as('admin')

        with open(FILENAME_MULTIWINNER) as f:
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
        response = self._upload_file_for_api(FILENAME_ONE_ROUND)
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)

        # Bad data
        response = self._upload_file_for_api(FILENAME_BAD_DATA)
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)

        # More bad data - too long filename
        tf = TestHelpers.copy_with_new_name(FILENAME_MULTIWINNER, 'x' * 300)
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
        with open(FILENAME_MULTIWINNER) as f:
            response = self.client.patch(url, data={'jsonFile': f})
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        response = self.client.get(url, format='json')
        filenameBasename = os.path.splitext(os.path.basename(FILENAME_MULTIWINNER))[0]
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
        response = self._upload_file_for_api(FILENAME_ONE_ROUND)
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
        response = self._upload_file_for_api(FILENAME_BAD_DATA)
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)
        assert 'JSON is not valid' in response.data['jsonFile'][0]

        # No errors
        response = self._upload_file_for_api(FILENAME_ONE_ROUND)
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        assert 'JSON is not valid' not in response.data['jsonFile'][0]

    def test_analytics(self):
        """ Ensure analytics are created """
        self._authenticate_as('notadmin')
        self.assertEqual(APIRequestLog.objects.all().count(), 0)
        self._upload_file_for_api(FILENAME_ONE_ROUND)
        self.assertEqual(APIRequestLog.objects.all().count(), 1)
        self.client.get('/api/users/', format='json')
        self.assertEqual(APIRequestLog.objects.all().count(), 2)

        logs = APIRequestLog.objects.all()
        self.assertEqual(logs[0].method, 'POST')
        self.assertEqual(logs[1].method, 'GET')

    def test_defaults(self):
        """ Ensure the correct defaults are used on upload """
        self._authenticate_as('notadmin')
        response = self._upload_file_for_api(FILENAME_ONE_ROUND)
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        oneRoundObject = JsonConfig.objects.all().order_by('id')[0]  # pylint: disable=no-member
        self.assertEqual(oneRoundObject.hideSankey, False)
        self.assertEqual(oneRoundObject.doUseHorizontalBarGraph, True)


class LiveBrowserTests(StaticLiveServerTestCase):
    """ Tests that launch a selenium browser """

    def setUp(self):
        """ Creates the selenium browser. If on CI, connects to SauceLabs """
        super(LiveBrowserTests, self).setUp()
        self.isUsingSauceLabs = "HEROKU_TEST_RUN_BRANCH" in os.environ
        if self.isUsingSauceLabs:
            username = os.environ["SAUCE_USERNAME"]
            accessKey = os.environ["SAUCE_ACCESS_KEY"]
            capabilities = {}
            capabilities["platform"] = "Windows 10"
            capabilities["browserName"] = "chrome"
            capabilities["version"] = "70.0"
            capabilities["build"] = os.environ["HEROKU_TEST_RUN_ID"]
            capabilities["tags"] = ["CI"]
            capabilities["tunnelIdentifier"] = "sc-proxy-tunnel-" + os.environ["HEROKU_TEST_RUN_ID"]
            capabilities["name"] = self._testMethodName + ":" + os.environ["HEROKU_TEST_RUN_BRANCH"]
            capabilities["commandTimeout"] = 100
            capabilities["maxDuration"] = 1200
            capabilities["screenResolution"] = "1280x1024"
            capabilities["sauceSeleniumAddress"] = "ondemand.saucelabs.com:443/wd/hub"
            capabilities["captureHtml"] = True
            capabilities["webdriverRemoteQuietExceptions"] = False
            seleniumEndpoint = "https://{}:{}@ondemand.saucelabs.com:443/wd/hub".format(
                username, accessKey)

            self.browser = webdriver.Remote(
                desired_capabilities=capabilities,
                command_executor=seleniumEndpoint)
        else:
            self.browser = TestHelpers.get_headless_browser()

        self.browser.implicitly_wait(10)
        self._screenshotCount = 0

    def tearDown(self):
        """ Destroys the selenium browser """
        if self.isUsingSauceLabs:
            sauceResult = "passed" if not self._has_test_failed() else "failed"
            self.browser.execute_script("sauce:job-result={}".format(sauceResult))
        self.browser.quit()
        super(LiveBrowserTests, self).tearDown()

    def _has_test_failed(self):
        """ helper for tearDown to check if the test has failed """
        for _, error in self._outcome.errors:
            if error:
                return True
        return False

    def _get_log(self):
        """ Returns and clears the console log """
        return self.browser.get_log('browser')

    def _assert_log_len(self, num):
        """ Asserts the log contains num elements, or prints out what's in the log.
            Then Clears the log. """
        try:
            log = self._get_log()
        except WebDriverException:
            print("Cannot read log - for somme reason, this only works on travis.")
            if not os.environ['RCVIS_HOST'] == 'localhost':
                raise

            # Always succeeds on localhost :(
            return

        # For now, remove the fullpage.js messages
        log = [l for l in log if 'This website was made using fullPage.js' not in l['message']]
        log = [l for l in log if 'https://alvarotrigo' not in l['message']]

        if len(log) != num:
            print("Log information: ", log)

        assert len(log) == num

    def _num_log_errors_for_missing_favicon(self):
        if isinstance(self.browser, webdriver.Chrome):
            return 0
        if isinstance(self.browser, webdriver.Firefox):
            return 0
        if isinstance(self.browser, webdriver.Remote):
            return 1
        raise Exception("Unknown browser type")

    def _make_url(self, url):
        """ Creates an absolute url using the current server URL """
        return "%s%s" % (self.live_server_url, url)

    def _disable_all_animations(self):
        """ Disables transitions on the current page """
        script = "var animDisabler = document.createElement('style');\
                  animDisabler.textContent = '*{ transition: none !important;\
                                            transition-property: none !important; }';\
                  document.head.appendChild(animDisabler);"
        self.browser.execute_script(script)

    @classmethod
    def _ensure_eventually_asserts(cls, assertion):
        """ Waits up to waitTimeSeconds for the assertion to be true """
        sleepInterval = 0.1
        maxWaitTimeSeconds = 2.0
        tic = datetime.now()
        while True:
            try:
                assertion()
                return True
            except AssertionError:
                toc = datetime.now()
                if (toc - tic).seconds > maxWaitTimeSeconds:
                    raise

                time.sleep(sleepInterval)
                sleepInterval *= 1.5

    def open(self, url, prependServer=True):
        """ Opens the given file. If prepend_server is true, turns it into an absolute URL """
        if prependServer:
            url = self._make_url(url)
        self.browser.get(url)
        self._assert_log_len(0)

    def _upload(self, fn):
        """ Uploads the given local file """
        self.open('/upload.html')
        fileUpload = self.browser.find_element_by_id("jsonFile")
        fileUpload.send_keys(os.path.join(os.getcwd(), fn))
        uploadButton = self.browser.find_element_by_id("uploadButton")
        uploadButton.click()
        self._assert_log_len(0)

    def _upload_something_if_needed(self):
        """
        If nothing is uploaded, uploads a file.
        Otherwise, just loads the visualization of the last-uploaded object.
        """
        try:
            objects = JsonConfig.objects.latest('-id')
        except JsonConfig.DoesNotExist:
            self._upload(FILENAME_MULTIWINNER)
            return

        self.open(reverse('visualize', args=(objects[0].slug,)))
        self._assert_log_len(0)

    def _get_width(self, elementId):
        """ Gets the width of the element """
        elem = self.browser.find_elements_by_id(elementId)[0]
        try:
            ActionChains(self.browser).move_to_element(elem).perform()
        except WebDriverException:
            return 0  # cannot be scrolled into view
        return elem.size['width']

    def _get_height(self, elementId):
        """ Gets the height of the element """
        return self.browser.find_elements_by_id(elementId)[0].size['height']

    def _is_visible(self, elementId):
        """ Is the element ID visible? """
        elem = self.browser.find_elements_by_id(elementId)[0]
        return self._is_elem_visible(elem)

    def _is_elem_visible(self, elem):
        """ Is the element visible? """
        if not elem.is_displayed():
            return False

        # This is useful for fullpage.js slides, where everything returns is_displayed but
        # some things are way over to the right
        elemX = elem.location['x']
        pageWidth = self.browser.execute_script('return $(window).width();')
        return 0 <= elemX < pageWidth

    def _go_to_tab(self, tabId):
        self.browser.find_elements_by_id(tabId)[0].click()

    def _debug_screenshot(self):
        """ Saves a screenshot in the current directory for debugging """
        # First, ensure we're not on Travis. This is only for local debugging.
        assert not self.isUsingSauceLabs

        # Save a screenshot
        filename = f'screenshot_{self._screenshotCount}.png'
        self.browser.save_screenshot(filename)
        self._screenshotCount += 1

    def test_render(self):
        """ Tests the resizing of the window and verifies that things fit """
        def fits_inside(elementWidth, pageWidth):
            # Checks that the element takes up at least 75% of the page
            roomForMarginsPct = 0.25

            minWidth = pageWidth * (1 - roomForMarginsPct)
            return minWidth < elementWidth <= pageWidth

        def test_sane_resizing_of(elementId, tightlyFitWidths, widthsWithExtraRoom):
            """
                NOTE: the sizes used here may have a different devicePixelRatio than your machine.
                tightlyFitWidths is a list of widths to test which must fill the window
                widthsWithExtraRoom is a size that's too large and will leave whitespace
            """
            self._disable_all_animations()
            height = 600
            tooSmallWidth = 250
            self.browser.set_window_size(tooSmallWidth, height)

            # With the smallest width, ensure it doesn't get too small
            self._ensure_eventually_asserts(
                lambda: self.assertGreater(self._get_width(elementId), tooSmallWidth))

            # With the rest, ensure it fills the width until maxSize
            for width in tightlyFitWidths:
                self.browser.set_window_size(width, height)
                self._ensure_eventually_asserts(
                    lambda w=width: self.assertTrue(fits_inside(self._get_width(elementId), w)))

            self.browser.set_window_size(widthsWithExtraRoom, height)
            self._ensure_eventually_asserts(
                lambda: self.assertLessEqual(self._get_width(elementId), widthsWithExtraRoom))

        def change_barchart_orientation():
            self._go_to_tab("settings-tab")
            self.browser.find_elements_by_id("bargraphOptions")[0].click()  # Open the dropdown
            # Check the box (the second one, which isn't hidden)
            self.browser.find_elements_by_name("doUseHorizontalBarGraph")[1].click()
            self.browser.find_elements_by_id("updateSettings")[0].click()  # Hit submit
            self._go_to_tab("barchart-tab")

        # Test the smallest supported width we can
        minimumResizeableWidth = 400 if self.isUsingSauceLabs else 300

        # Multiwinner maxes out at 500px
        self._upload(FILENAME_MULTIWINNER)
        test_sane_resizing_of("bargraph-interactive-body", [minimumResizeableWidth, 450], 550)

        self._ensure_eventually_asserts(
            lambda: self.assertFalse(self._is_visible("sankey-body")))
        self._go_to_tab("sankey-tab")
        self.assertTrue(self._is_visible("sankey-svg"))
        test_sane_resizing_of("sankey-svg", [minimumResizeableWidth, 600], 1000)

        # Opavote is originally tall but not too wide
        self._upload(FILENAME_OPAVOTE)
        test_sane_resizing_of("bargraph-interactive-body", [minimumResizeableWidth, 600], 800)
        # Sankey no longer gets huge - it caps out at 960px wide
        self._go_to_tab("sankey-tab")
        test_sane_resizing_of("sankey-svg", [minimumResizeableWidth, 800], 1200)
        # Make the barchart vertical
        change_barchart_orientation()
        # Should have the same max width here...:( (TODO: set the device pixel ratio
        # such that this can get bigger...?)
        test_sane_resizing_of("bargraph-interactive-body", [minimumResizeableWidth, 600], 800)

        # Now let's look at sankey and the tables
        self._upload(FILENAME_THREE_ROUND)
        self._go_to_tab("sankey-tab")
        test_sane_resizing_of("sankey-svg", [minimumResizeableWidth, 600], 900)

        # This one sidescrolls on mobile, it's a fixed size
        self._go_to_tab("single-table-summary-tab")
        test_sane_resizing_of("single-table-summary-table", [800], 1300)

    def test_oneround(self):
        """ Tests we do something sane in a single-round election """
        # Regression test
        self.browser.set_window_size(800, 800)
        self._upload(FILENAME_ONE_ROUND)
        assert self._get_height("bargraph-interactive-body") < 800

    def test_settings_tab(self):
        """ Tests the functionality of the settings tab """
        self._disable_all_animations()

        # Upload with non-default setting: hiding sankey tab.
        self.open('/upload.html')
        fileUpload = self.browser.find_element_by_id("jsonFile")
        fileUpload.send_keys(os.path.join(os.getcwd(), FILENAME_ONE_ROUND))
        self.browser.find_elements_by_id("sankeyOptions")[0].click()  # Open the dropdown
        # Check the box (the second one, which isn't hidden)
        self.browser.find_elements_by_name("hideSankey")[1].click()
        self.browser.find_element_by_id("uploadButton").click()  # Hit upload
        assert not self._is_visible("sankey-body")

        # Go to the settings tab
        self._go_to_tab("settings-tab")

        # Then, toggle on the sankey tab from the settings page
        self.browser.find_elements_by_id("sankeyOptions")[0].click()  # Open the dropdown
        # Check the box (the second one, which isn't hidden)
        self.browser.find_elements_by_name("hideSankey")[1].click()
        self.browser.find_elements_by_id("updateSettings")[0].click()  # Hit submit
        assert self._is_visible("sankey-tab")

        # Finally, toggle it back off
        self._go_to_tab("settings-tab")
        self.browser.find_elements_by_id("sankeyOptions")[0].click()  # Open the dropdown
        # Check the box (the second one, which isn't hidden)
        self.browser.find_elements_by_name("hideSankey")[1].click()
        self.browser.find_elements_by_id("updateSettings")[0].click()  # Hit submit
        assert not self._is_visible("sankey-tab")

        self._assert_log_len(0)

    def test_oembed(self):
        """ Tests the functionality of the oembed feature"""
        self._upload_something_if_needed()

        # Sanity check that a json exists
        uploadedPath = urlparse(self.browser.current_url).path
        oembedJsonUrl = self.browser.find_element_by_id("oembed").get_attribute('href')
        embeddedUrl = uploadedPath.replace('v/', 've/')

        # Sanity check
        self.open(uploadedPath)

        # Verify discoverability.
        # The response is a JSON, which means on the first load without cache, there is
        # an error about missing favicons. Hard-refresh without cache to ensure we get
        # this error; without this, re-runs of the same TravisCI run will not have
        # this error.
        self.browser.get(oembedJsonUrl)
        self.browser.execute_script("location.reload(true);")
        time.sleep(0.2)  # some breathing room after the refresh
        self._assert_log_len(self._num_log_errors_for_missing_favicon())

        # Verify the JSON is sane and has all required fields
        responseText = self.browser.find_element_by_xpath("//pre").text

        responseData = json.loads(responseText)
        assert responseData['version'] == "1.0"
        assert responseData['type'] == "rich"
        assert responseData['width']
        assert responseData['height']

        # Note: ensure it ends with ?vistype not &vistype
        url = responseData['url']
        html = responseData['html']

        # Embedly requires the iframe URL is secure
        assert url.startswith('http')
        assert 'https' in html
        urlWithHttps = url.replace('http', 'https')
        assert html[html.find(urlWithHttps) + len(urlWithHttps)] == "?"

        # Verify base URL for embedded visualization does not have errors
        self.open(embeddedUrl)

        validVistypes = ["sankey",
                         "barchart-fixed",
                         "barchart-interactive",
                         "tabular-by-candidate",
                         "tabular-by-round",
                         "tabular-by-round-interactive",
                         "tabular-candidate-by-round"]

        # None of the valid vistypes have errors
        for vistype in validVistypes:
            embeddedUrlWithVistype = embeddedUrl + "?vistype=" + vistype
            self.open(embeddedUrlWithVistype)
            # Try to avoid looking for elements that don't exist
            # assert len(self.browser.find_elements_by_id("no-such-vistype-message")) == 0
            # Will throw exception if does not exist
            self.browser.find_element_by_id("embedded_body")

        # And even an invalid URL does not have errors - but it does show the error message
        errorUrl = embeddedUrl + "?vistype=no_such_vistype"
        self.open(errorUrl)
        # Will throw exception if does not exist
        self.browser.find_element_by_id("no-such-vistype-message")

        try:
            # Final sanity check - does getElementById do what we want? It
            # should throw an exception here.
            self.browser.find_element_by_id("sankey")
            assert False
        except NoSuchElementException:
            pass

    def test_cache(self):
        """ Tests that caching works and that second loads are faster,
            even without browser cache """

        # Verify that the django.core.cache middleware works as expected
        def measure_load_time(url):
            # Use a fresh browser - we never want to hit the cache,
            # and there doesn't seem to be an easy way to skip the cache every time:
            # https://stackoverflow.com/a/9563341/1057105
            localBrowser = TestHelpers.get_headless_browser()

            # First, navigate to a random URL to cache the static files
            localBrowser.get(self._make_url("/upload.html"))

            # Then, go to the URL we care about
            localBrowser.get(self._make_url(url))

            WebDriverWait(localBrowser, timeout=5, poll_frequency=0.05).until(
                lambda d: d.find_element_by_id("page-top"))

            tic = localBrowser.execute_script('return performance.timing.fetchStart')
            toc = localBrowser.execute_script('return performance.timing.domLoading')
            return toc - tic

        def is_cache_much_faster():
            loadWithoutCache = measure_load_time(f"{fn1}?doHideOverflowAndEliminated=on")
            loadWithCache = measure_load_time(f"{fn1}?doHideOverflowAndEliminated=on")
            # Verify that it's at least 2x faster with cache (closer to 5x on
            # selenium, 200x in real life)
            return loadWithoutCache > loadWithCache * 2

        # Upload a file, check cache
        self._upload(FILENAME_OPAVOTE)
        fn1 = "/v/opavote-fairvote"
        assert is_cache_much_faster()

        # Uploading should clear all cache
        self._upload(FILENAME_ONE_ROUND)
        assert is_cache_much_faster()

        # But just visiting the upload page and returning should not clear cache
        self.open("/upload.html")
        assert not is_cache_much_faster()

    def test_sharetab_copy_paste(self):
        """ Check that the share tab can be copy/paste wiki & html successfully. """
        self._upload_something_if_needed()
        self._go_to_tab("share-tab")

        # Check the wikicode
        textAreaValues = []
        for elementId in ("wikicode", "htmlembedexport"):
            self.browser.execute_script(f"document.getElementById('{elementId}').scrollIntoView();")

            # Grab the element and read its value
            textarea = self.browser.find_element_by_id(elementId)
            initialText = textarea.get_attribute('value')
            textAreaValues.append(initialText)

            # Ensure clicking copies to keyboard
            textarea.click()
            textarea.send_keys(Keys.BACKSPACE)
            textarea.send_keys("Different text")

            # Make sure it's different
            assert initialText != textarea.get_attribute('value')

            # Select all, delete, paste
            ActionChains(self.browser).key_down(CONTROL_KEY)\
                                      .key_down('a')\
                                      .key_up('a')\
                                      .key_up(CONTROL_KEY) \
                                      .perform()
            ActionChains(self.browser).key_down(Keys.BACKSPACE)\
                                      .key_up(Keys.BACKSPACE)\
                                      .perform()
            # Note: don't keyup or `v` or saucelabs may double-paste
            ActionChains(self.browser).key_down(CONTROL_KEY)\
                                      .key_down('v')\
                                      .perform()

            # Assert we have the original text back
            self._ensure_eventually_asserts(
                lambda text=initialText, textarea=textarea: self.assertEqual(
                    text, textarea.get_attribute('value')))

        # Verify the values are sane...somewhat
        wiki = textAreaValues[0]
        assert 'wikitable' in wiki
        assert 'Macomb' in wiki
        html = textAreaValues[1]
        assert html.startswith('<iframe')

    def test_sharetab_sane_links(self):
        """ Check that the share tab has sane links for all buttons """
        self._upload_something_if_needed()
        self._go_to_tab("share-tab")

        # Now sanity check that each of the buttons have URLs
        allLinks = self.browser.find_elements_by_css_selector('#sharecontainer a')
        allImages = self.browser.find_elements_by_css_selector('#sharecontainer img')
        self.assertEqual(len(allLinks), 6)

        # Make sure links are sane enough

        # Make sure all links are sane enough and align with images
        for link, image in zip(allLinks, allImages):
            # Read the filename from the image path, which magically corresponds to URLs
            imageSource = image.get_attribute('src')
            imageFilename = os.path.basename(urlparse(imageSource).path)
            imagePathWithoutSuffix = imageFilename[:-4]

            # Read the link href
            href = link.get_attribute('href')

            # Validate the hrefs
            if imagePathWithoutSuffix == 'email':
                assert href.startswith('mailto:?')
            else:
                assert href.startswith('https://')
                if imagePathWithoutSuffix != 'telegram':
                    assert imagePathWithoutSuffix in href
                else:
                    assert 't.me' in href

    def test_slider_animates_and_summary_shown(self):
        """ Check that the share tab has sane links for all buttons """
        # Upload something with few rounds so the animation doesn't take too long
        self._upload(FILENAME_THREE_ROUND)

        # Ensure the animation started
        WebDriverWait(self.browser, timeout=0.5, poll_frequency=0.1).until(
            lambda d: self.browser.execute_script("return hasAnimatedSlider;"))

        # Ensure description is inital summary
        desc = self.browser.find_element_by_id('bargraph-interactive-round-description')
        self._ensure_eventually_asserts(
            lambda: self.assertIn('what happened in each round', desc.text))

        # Wait for animation to complete
        WebDriverWait(self.browser, timeout=1.5, poll_frequency=0.1).until(
            lambda d: self.browser.execute_script("return !isBargraphAnimationInProgress;"))

        # Check that the text hasn't changed
        self._ensure_eventually_asserts(
            lambda: self.assertIn('what happened in each round', desc.text))

        # Now move the slider
        self.browser.execute_script("trs_moveSliderTo('bargraph-slider-container', 0)")

        # Check that the text updates now
        self._ensure_eventually_asserts(
            lambda: self.assertNotIn('what happened in each round', desc.text))

    def test_timeline_and_longform_desc(self):
        """ Ensures the timeline show correct data, and that it can be toggled to show
            the longform description instead """
        self._disable_all_animations()
        self._upload(FILENAME_MULTIWINNER)

        # The expand button is hidden
        expandButton = self.browser.find_element_by_class_name('expand-collapse-button')
        self.assertEqual(self._is_elem_visible(expandButton), False)

        # And longform description is visible
        desc = self.browser.find_element_by_id('bargraph-interactive-round-description')
        self._ensure_eventually_asserts(
            lambda: self.assertEqual(self._is_elem_visible(desc), True))

        # Cancel animation by clicking on first element
        # Note: trs_moveSliderTo does not cancel animation, only clicking does
        container = self.browser.find_element_by_id('bargraph-slider-container')
        firstTick = container.find_elements_by_class_name('slider-item')[0]
        # Note - need an action chain because the first tick isn't actually receiving the click,
        # the slider itself handles it, and selenium throws ElementClickInterceptedException
        ActionChains(self.browser).move_to_element(firstTick)\
            .click(firstTick)\
            .perform()

        # Move animation to end
        self.browser.execute_script("trs_moveSliderTo('bargraph-slider-container', 4)")

        # Give JS a second to catch up with the animation
        self._ensure_eventually_asserts(
            lambda: self.assertIn('Larry Edwards had more than enough', desc.text))
        self.assertNotIn('Larry Edwards reached the threshold of 134', desc.text)

        # Go to the settings tab
        self._go_to_tab("settings-tab")

        # Then, toggle on the sankey tab from the settings page
        self.browser.find_element_by_id("bargraphOptions").click()  # Open the dropdown
        # Check the box (the second one, which isn't hidden)
        self.browser.find_elements_by_name("doUseDescriptionInsteadOfTimeline")[1].click()
        self.browser.find_element_by_id("updateSettings").click()  # Hit submit

        # Go to the bargraph
        self._go_to_tab("barchart-tab")

        # Now the the expand/collapse button is visible
        expandButton = self.browser.find_element_by_class_name('expand-collapse-button')
        self.assertEqual(self._is_elem_visible(expandButton), True)
        expandButton.click()

        # And longform description is hidden
        desc = self.browser.find_element_by_id('bargraph-interactive-round-description')
        self.assertEqual(self._is_elem_visible(desc), False)

        # Ensure the timeline has all expected data
        elems = self.browser.find_elements_by_class_name('timeline-info-good')
        self.assertEqual(len(elems), 2 * 2)  # two elected, x2 graphs

        elems = self.browser.find_elements_by_class_name('timeline-info-bad')
        self.assertEqual(len(elems), 2 * 2)  # two eliminated, x2 graphs

        elems = self.browser.find_elements_by_class_name('timeline-info')
        # 2 * 9: win/loss from above + three infos: initial, redistributed x2, transfer x2
        self.assertEqual(len(elems), 2 * 9)
