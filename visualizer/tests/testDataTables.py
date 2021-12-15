"""
DataTables tests without a browser.
"""

import json

from django.test import TestCase
from django.urls import reverse
from rcvformats.schemas import universaltabulator

from common.testUtils import TestHelpers
from visualizer.models import JsonConfig
from visualizer.tests import filenames
from visualizer.graph import readDataTablesResult


class DataTablesTests(TestCase):
    """ Tests for the DataTables library """

    @classmethod
    def _get_simplified_post_data(cls):
        """ The barebones data sent via POST - no extraneous options included """
        with open(filenames.DATATABLES_OUTPUT, 'r') as f:
            data = json.dumps(json.load(f))
        formOutput = {'dataEntry': data,
                      'configElectionTitle': 'simpletitle',
                      'configElectionDate': '2021-12-05',
                      'configThreshold': 1}
        return formOutput

    def test_data_conversion(self):
        """
        Test DataTables conversion directly

        Tests the data conversion from the DataTables JSON format to the
        Universal Tabulator format. No selenium functionality is used.

        This is a simpler test than the next one in that it circumvents
        all django functionality - specifically, actually creating the
        JSON FieldFile
        """
        TestHelpers.login(self.client)
        formOutput = self._get_simplified_post_data()
        reader = readDataTablesResult.ReadDataTableJSON(formOutput)
        urcvtData = reader.convert_to_urcvt()
        schema = universaltabulator.SchemaV0()
        self.assertTrue(schema.validate(urcvtData))

    def test_data_conversion_and_post(self):
        """
        Test DataTables conversion via POST

        Similar to `test_data_conversion`, with the added complexity of running
        it through all necessary django functionality

        This uses the built-in client, but not the browser
        """

        with self.assertRaises(JsonConfig.DoesNotExist):
            TestHelpers.get_latest_upload()

        # First make sure we fail correctly - posting nothing should fail, but return 200
        response = self.client.post('/uploadByDataTable.html', {})
        self.assertEqual(response.status_code, 200)
        with self.assertRaises(JsonConfig.DoesNotExist):
            TestHelpers.get_latest_upload()

        # Then check a success, which should have created a new vis and redirect with 302
        formOutput = self._get_simplified_post_data()
        response = self.client.post('/uploadByDataTable.html', formOutput)
        self.assertEqual(response.status_code, 302)
        self.assertEqual(TestHelpers.get_latest_upload().slug, 'simpletitle')

        # And finally, ensure that the visualization actually works
        # Since we did funny things in the file creation, it may do tricky things
        # and not work for us here
        url = reverse('visualize', args=(TestHelpers.get_latest_upload().slug,))
        response = self.client.get(url)
        self.assertEqual(response.status_code, 200)
