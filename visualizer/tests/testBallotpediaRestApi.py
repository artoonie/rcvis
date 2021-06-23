"""
Ballotpedia-specific Rest API Test Cases
"""

from django.contrib.auth import get_user_model
from rest_framework import status
from rest_framework.test import APITestCase

from common.testUtils import TestHelpers
from visualizer.models import TextForWinner
from visualizer.tests import filenames

TestHelpers.silence_logging_spam()


class BallotpediaRestAPITests(APITestCase):
    """ Tests for the Ballotpedia REST API """

    def setUp(self):
        user = get_user_model().objects.create_user('notadmin', 'notadmin@example.com', 'password')
        user.is_staff = False
        user.save()
        user.userprofile.canUseApi = True
        user.userprofile.save()

        TestHelpers.setup_host_mocks(self)

        user = get_user_model().objects.get(username='notadmin')
        self.client.force_authenticate(user=user)   # pylint: disable=no-member

    def test_ballotpedia_simple(self):
        """
        Basic test: ensure that resultsSummaryFile and candidateSidecarFile are uploaded.
        """
        with open(filenames.THREE_ROUND) as jsonFile:
            with open(filenames.THREE_ROUND_SIDECAR) as sidecarFile:
                data = {'resultsSummaryFile': jsonFile,
                        'candidateSidecarFile': sidecarFile}
                response = self.client.post('/api/bp/', data=data)
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)

    def test_ballotpedia_sidecar_optional(self):
        """ Ensure candidateSidecarFile is optional """
        with open(filenames.THREE_ROUND) as jsonFile:
            data = {'resultsSummaryFile': jsonFile}
            response = self.client.post('/api/bp/', data=data)

        self.assertEqual(response.status_code, status.HTTP_201_CREATED)

    def test_ballotpedia_requires_renamed_field(self):
        """
        BP uses resultsSummaryFile instead of jsonFile.
        Ensure jsonFile may not be specified.
        """
        with open(filenames.THREE_ROUND) as jsonFile:
            with open(filenames.THREE_ROUND_SIDECAR) as sidecarFile:
                data = {'jsonFile': jsonFile,
                        'candidateSidecarFile': sidecarFile}
                response = self.client.post('/api/bp/', data=data)

        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)
        assert b'Pass resultsSummaryFile instead of jsonFile' in response.content

    def test_ballotpedia_data_error(self):
        """ Ensure bp error messages are in the returned message """
        tf = TestHelpers.modify_json_with(filenames.THREE_ROUND_SIDECAR,
                                          lambda d: d['order'].remove('Banana'))
        with open(filenames.THREE_ROUND) as jsonFile:
            with open(tf.name) as sidecarFile:
                data = {'resultsSummaryFile': jsonFile,
                        'candidateSidecarFile': sidecarFile}
                response = self.client.post('/api/bp/', data=data)

        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)
        assert b'order must include all' in response.content

    def test_ballotpedia_defaults(self):
        """ Ensure all ballotpedia options are optional and set correct defaults """
        with open(filenames.THREE_ROUND) as jsonFile:
            with open(filenames.THREE_ROUND_SIDECAR) as sidecarFile:
                data = {'resultsSummaryFile': jsonFile,
                        'candidateSidecarFile': sidecarFile}
                response = self.client.post('/api/bp/', data=data)

        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        obj = TestHelpers.get_latest_upload()
        self.assertEqual(obj.dataSourceURL, None)
        self.assertEqual(obj.areResultsCertified, False)

    def test_ballotpedia_options(self):
        """ Ensure all additional ballotpedia options can be specified and are respected """
        with open(filenames.THREE_ROUND) as jsonFile:
            with open(filenames.THREE_ROUND_SIDECAR) as sidecarFile:
                data = {'resultsSummaryFile': jsonFile,
                        'candidateSidecarFile': sidecarFile,
                        'dataSourceURL': 'http://example.com/test',
                        'areResultsCertified': True}
                response = self.client.post('/api/bp/', data=data)

        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        obj = TestHelpers.get_latest_upload()
        self.assertEqual(obj.dataSourceURL, 'http://example.com/test')
        self.assertEqual(obj.areResultsCertified, True)

    def test_ballotpedia_validates_url(self):
        """ Ensure a valid URL is required """
        with open(filenames.THREE_ROUND) as jsonFile:
            with open(filenames.THREE_ROUND_SIDECAR) as sidecarFile:
                data = {'resultsSummaryFile': jsonFile,
                        'candidateSidecarFile': sidecarFile,
                        'dataSourceURL': 'example.com/test'}
                response = self.client.post('/api/bp/', data=data)

        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)
        errMsg = b'{"dataSourceURL":["Enter a valid URL."]}'
        assert errMsg in response.content

    def test_ballotpedia_edits_put(self):
        """
        Ensure bp data can be edited with PUT - which requires all fields.
        Any field not specified will be set to its default value.
        """
        # Upload initial
        with open(filenames.THREE_ROUND) as jsonFile:
            with open(filenames.THREE_ROUND_SIDECAR) as sidecarFile:
                data = {'resultsSummaryFile': jsonFile,
                        'candidateSidecarFile': sidecarFile,
                        'areResultsCertified': True}
                response = self.client.post('/api/bp/', data=data)

        # Everything succeeded
        obj = TestHelpers.get_latest_upload()
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertTrue(obj.areResultsCertified)

        # Modify both sidecar and areResultsCertified.
        # areResultsCertified is omitted, which sets it to the default: False
        tf = TestHelpers.modify_json_with(filenames.THREE_ROUND_SIDECAR,
                                          lambda d: d['order'].reverse())
        with open(filenames.THREE_ROUND) as jsonFile:
            with open(tf.name) as sidecarFile:
                data = {'resultsSummaryFile': jsonFile,
                        'candidateSidecarFile': sidecarFile}
                response = self.client.put(f'/api/bp/{obj.id}/', data=data)
        self.assertEqual(response.status_code, status.HTTP_200_OK)

        # areResultsCertified is updated because it was not provided
        obj = TestHelpers.get_latest_upload()
        self.assertFalse(obj.areResultsCertified)

        # PUT requires every field to be specified
        response = self.client.put(f'/api/bp/{obj.id}/', data={})
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)

    def test_ballotpedia_edits_patch(self):
        """ Ensure bp data can be edited with PATCH - all fields are optional """
        # Upload initial
        with open(filenames.THREE_ROUND) as jsonFile:
            with open(filenames.THREE_ROUND_SIDECAR) as sidecarFile:
                data = {'resultsSummaryFile': jsonFile,
                        'candidateSidecarFile': sidecarFile,
                        'areResultsCertified': True}
                response = self.client.post('/api/bp/', data=data)

        # Everything succeeded
        obj = TestHelpers.get_latest_upload()
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertTrue(obj.areResultsCertified)

        # Modify both sidecar and areResultsCertified.
        # areResultsCertified is omitted, which leaves it unchanged
        tf = TestHelpers.modify_json_with(filenames.THREE_ROUND_SIDECAR,
                                          lambda d: d['order'].reverse())
        with open(filenames.THREE_ROUND) as jsonFile:
            with open(tf.name) as sidecarFile:
                data = {'resultsSummaryFile': jsonFile,
                        'candidateSidecarFile': sidecarFile}
                response = self.client.patch(f'/api/bp/{obj.id}/', data=data)
        self.assertEqual(response.status_code, status.HTTP_200_OK)

        # areResultsCertified is not updated because it was not provided -
        # the default is not set, but it keeps its original value
        self.assertTrue(TestHelpers.get_latest_upload().areResultsCertified)

        # PATCH does not require any field to be specified - check that even the
        # required fields can be omitted, and that the other fields keep their value
        # and are not reverted to the default.
        response = self.client.patch(f'/api/bp/{obj.id}/', data={})
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertTrue(TestHelpers.get_latest_upload().areResultsCertified)

    def test_patch_json_invalidates_sidecar(self):
        """
        When using PATCH, it is possible to update the summary JSON without
        updating the sidecar file. This is a regression test which ensures that
        the sidecar file is checked for consistency with the summary file every time
        either file changes.

        Without this, it would be possible to create invalid visualizations by creating
        a valid vis, then updating one file to be incompatible with the other.
        """
        # Upload initial
        with open(filenames.THREE_ROUND) as jsonFile:
            with open(filenames.THREE_ROUND_SIDECAR) as sidecarFile:
                data = {'resultsSummaryFile': jsonFile,
                        'candidateSidecarFile': sidecarFile,
                        'areResultsCertified': True}
                response = self.client.post('/api/bp/', data=data)
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)

        # Change just the jsonfile, leaving the sidecar invalid
        obj = TestHelpers.get_latest_upload()
        with open(filenames.ONE_ROUND) as jsonFile:
            data = {'resultsSummaryFile': jsonFile}
            response = self.client.patch(f'/api/bp/{obj.id}/', data=data)
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)

    def test_is_primary_optional_post_and_patch(self):
        """
        Ensure that isPrimary is always optional, and that PATCHs that don't specify it
        will not reset the data.
        """
        # Upload initial
        with open(filenames.THREE_ROUND) as jsonFile:
            with open(filenames.THREE_ROUND_SIDECAR) as sidecarFile:
                data = {'resultsSummaryFile': jsonFile,
                        'candidateSidecarFile': sidecarFile,
                        'areResultsCertified': True,
                        'isPrimary': True}
                response = self.client.post('/api/bp/', data=data)
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        objId = TestHelpers.get_latest_upload().id

        # Uploaded file sets PRIMARY correctly
        self.assertEqual(TestHelpers.get_latest_upload().textForWinner, TextForWinner.PRIMARY)

        # PATCH the data. Should not change textForWinner
        response = self.client.patch(f'/api/bp/{objId}/', data={})
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(TestHelpers.get_latest_upload().textForWinner, TextForWinner.PRIMARY)

        # Now change it. Note: format=json is required.
        response = self.client.patch(f'/api/bp/{objId}/', data={'isPrimary': False}, format='json')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(TestHelpers.get_latest_upload().textForWinner, TextForWinner.ELECTED)

    def test_is_primary_optional_put(self):
        """
        Ensure that isPrimary is always optional, and that PUTs that don't specify it
        will not reset the data.
        """
        # Upload initial
        with open(filenames.THREE_ROUND) as jsonFile:
            with open(filenames.THREE_ROUND_SIDECAR) as sidecarFile:
                data = {'resultsSummaryFile': jsonFile,
                        'candidateSidecarFile': sidecarFile,
                        'isPrimary': True}
                response = self.client.post('/api/bp/', data=data)
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        objId = TestHelpers.get_latest_upload().id

        # Put, without isPrimary
        with open(filenames.THREE_ROUND) as jsonFile:
            with open(filenames.THREE_ROUND_SIDECAR) as sidecarFile:
                data = {'resultsSummaryFile': jsonFile,
                        'candidateSidecarFile': sidecarFile}
                response = self.client.put(f'/api/bp/{objId}/', data=data)
                self.assertEqual(response.status_code, status.HTTP_200_OK)

                # Ensure that isPrimary did not reset to the default
                obj = TestHelpers.get_latest_upload()
                self.assertEqual(obj.textForWinner, TextForWinner.PRIMARY)
