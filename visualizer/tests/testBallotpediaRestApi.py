"""
Ballotpedia-specific Rest API Test Cases
"""

from django.contrib.auth import get_user_model
from rest_framework import status
from rest_framework.test import APITestCase

from common.testUtils import TestHelpers
from visualizer.tests import filenames

TestHelpers.silence_logging_spam()


class BallotpediaRestAPITests(APITestCase):
    """ Tests for the Ballotpedia REST API """

    def setUp(self):
        admin = get_user_model().objects.create_user('notadmin', 'notadmin@example.com', 'password')
        admin.is_staff = False
        admin.save()

        TestHelpers.setup_host_mocks(self)

        user = get_user_model().objects.get(username='notadmin')
        self.client.force_authenticate(user=user)   # pylint: disable=no-member

    def test_ballotpedia_simple(self):
        """ Ensure you can include candidateSidecarFile """
        with open(filenames.THREE_ROUND) as jsonFile:
            with open(filenames.THREE_ROUND_SIDECAR) as sidecarFile:
                data = {'resultsSummaryFile': jsonFile,
                        'candidateSidecarFile': sidecarFile}
                response = self.client.post('/api/bp/', data=data)
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)

    def test_ballotpedia_sidecar_optional(self):
        """ Sidecar is optional """
        with open(filenames.THREE_ROUND) as jsonFile:
            data = {'resultsSummaryFile': jsonFile}
            response = self.client.post('/api/bp/', data=data)

        self.assertEqual(response.status_code, status.HTTP_201_CREATED)

    def test_ballotpedia_requires_renamed_field(self):
        """
        BP uses resultsSummaryFile instead of jsonFile.
        Do not allow jsonFile.
        """
        with open(filenames.THREE_ROUND) as jsonFile:
            with open(filenames.THREE_ROUND_SIDECAR) as sidecarFile:
                data = {'jsonFile': jsonFile,
                        'candidateSidecarFile': sidecarFile}
                response = self.client.post('/api/bp/', data=data)

        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)
        assert b'Pass resultsSummaryFile instead of jsonFile' in response.content

    def test_ballotpedia_data_error(self):
        """ Ensure bp errors are in the returned message """
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
        """ Ensure all additional ballotpedia options work """
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
        """ Ensure http:// is required in the data source URL """
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
        """ Ensure bp data can be edited with PUT - which requires all old fields """
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

        # PUT requires data
        response = self.client.put(f'/api/bp/{obj.id}/', data={})
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)

    def test_ballotpedia_edits_patch(self):
        """ Ensure bp data can be edited with PATCH - old fields are optional """
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

        # areResultsCertified is updated because it was not provided
        self.assertTrue(TestHelpers.get_latest_upload().areResultsCertified)

        # PATCH does not require even required data
        response = self.client.patch(f'/api/bp/{obj.id}/', data={})
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertTrue(TestHelpers.get_latest_upload().areResultsCertified)
