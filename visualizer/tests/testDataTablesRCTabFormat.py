"""
DataTables tests without a browser - split from testDataTables to avoid too many methods.
"""

from django.test import TestCase

from common.testUtils import TestHelpers
from visualizer.tests import filenames


class RCTabFormatDataTablesTests(TestCase):
    """ Tests for the DataTables library """

    def setUp(self):
        TestHelpers.setup_host_mocks(self)

    def _upload_file_to_convert(self, filename, rateLimit=False):
        with open(filename, encoding='utf-8') as f:
            with self.settings(RATE_LIMIT_AJAX=rateLimit):
                return self.client.post(
                    '/convertToRCTabFormat', {'dataEntry': {},
                                              'configElectionTitle': '',
                                              'configElectionDate': '',
                                              'configThreshold': '',
                                              'jsonFile': f.read()})

    def test_output_rctab_conversion(self):
        """ Ensures the output of a generic json is standardized """
        TestHelpers.login(self.client)
        response = self._upload_file_to_convert(filenames.ONE_ROUND)
        universalFormatJson = response.json()
        self.assertEqual(response.status_code, 200)
        self.assertEqual(universalFormatJson['config']['contest'], "One round")
        self.assertEqual(len(universalFormatJson['results']), 1)

    def test_output_rctab_conversion_bad_json(self):
        """ Ensures the output of a generic json is standardized """
        TestHelpers.login(self.client)
        response = self._upload_file_to_convert(filenames.BAD_DATA)
        self.assertEqual(response.json()['message'], "Error #40: Unknown error")
        response = self._upload_file_to_convert(filenames.INVALID_JSON)
        self.assertEqual(response.json()['message'], "Error #40: Unknown error")

    def test_output_rctab_conversion_bad_input(self):
        """ Ensures the output of a generic json is standardized """
        TestHelpers.login(self.client)
        with open(filenames.ONE_ROUND, encoding='utf-8') as f:
            with self.settings(RATE_LIMIT_AJAX=False):
                response = self.client.post(
                    '/convertToRCTabFormat', {'jsonFie': f.read()})
                self.assertEqual(response.json()['message'], "Error #20: Unknown error")

    def test_rate_limit_convert_to_rctab(self):
        """
        Data validation is CPU-intensive. Rate limit to once per 5 seconds.
        """
        TestHelpers.login(self.client)

        # Fail first
        self._upload_file_to_convert(filenames.ONE_ROUND, rateLimit=True)

        # Then rate limit
        with self.assertLogs("visualizer.views") as logger:
            response = self._upload_file_to_convert(filenames.ONE_ROUND, rateLimit=True).json()
            self.assertTrue(response['message'].startswith('Please wait'))
            self.assertTrue(response['message'].endswith('seconds before trying again'))
            self.assertListEqual(logger.output,
                                 ["WARNING:visualizer.views:User testuser has been rate limited"])
