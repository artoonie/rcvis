"""
TransactionTestCases - tests on the model specifically
"""

import os

from django.test import TransactionTestCase

from common.testUtils import TestHelpers
from visualizer.tests import filenames


class ModelDeletionTests(TransactionTestCase):
    """ Testing model deletion requires a different base class:
        docs.djangoproject.com/en/3.0/topics/db/transactions/#use-in-tests
    """

    def setUp(self):
        TestHelpers.setup_host_mocks(self)
        TestHelpers.login(self.client)

    def test_file_deletion_on_model_deletion(self):
        """ Verify that when a model is deleted, the associated file is too """
        # Upload
        with open(filenames.MULTIWINNER) as f:
            self.client.post('/upload.html', {'jsonFile': f})
        uploadedObject = TestHelpers.get_latest_upload()

        # Ensure it exists
        path = uploadedObject.jsonFile.path
        assert os.path.exists(path)

        # Delete it
        uploadedObject.delete()

        # Ensure the file was also deleted
        assert not os.path.exists(path)
