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

    def setUp(self):
        TestHelpers.setup_host_mocks(self)

    @classmethod
    def _get_simplified_post_data(cls):
        """ The barebones data sent via POST - no extraneous options included """
        with open(filenames.DATATABLES_OUTPUT, 'r', encoding='utf-8') as f:
            data = json.dumps(json.load(f))
        formOutput = {'dataEntry': data,
                      'configElectionTitle': 'simpletitle',
                      'configElectionDate': '2021-12-05',
                      'configThreshold': 1}
        return formOutput

    @classmethod
    def _get_simplified_post_data_with_modifier(cls, func):
        """
        After a candidate is elected, remaining votes are optional
        """
        with open(filenames.DATATABLES_OUTPUT, 'r', encoding='utf-8') as f:
            data = json.load(f)
        func(data)

        formOutput = cls._get_simplified_post_data()
        formOutput['dataEntry'] = json.dumps(data)

        return formOutput

    @classmethod
    def _assert_starts_with(cls, toTest, startsWith):
        if not toTest.startswith(startsWith):
            print(f"{toTest} does not start with {startsWith}")
            assert False

    def _ajax_starts_with(self, data, message):
        """ What's the AJAX response for the given data? """
        with self.settings(RATE_LIMIT_AJAX=False):
            TestHelpers.login(self.client)
            response = self.client.post(reverse('validateDataEntry'), data)
            self._assert_starts_with(response.json()['message'], message)

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

        TestHelpers.login(self.client)
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

    def test_rate_limit(self):
        """
        Data validation is CPU-intensive. Rate limit to once per 5 seconds.
        """
        TestHelpers.login(self.client)

        # Fail first
        response = self.client.post(reverse('validateDataEntry'))
        self.assertEqual(response.json()['message'], 'Error #20: Unknown error')

        # Then rate limit
        with self.assertLogs("visualizer.views") as logger:
            response = self.client.post(reverse('validateDataEntry'))
            self.assertEqual(response.json()['message'],
                             'Please wait 5 seconds before trying again')
            self.assertListEqual(logger.output,
                                 ["WARNING:visualizer.views:User testuser has been rate limited"])

    def test_login_required(self):
        """
        Login is required to hit the validation endpoint
        """
        response = self.client.post(reverse('validateDataEntry'))
        self.assertEqual(response.status_code, 302)

    def test_bad_threshold(self):
        """
        Threshold cannot be empty
        """
        formOutput = self._get_simplified_post_data()
        formOutput['configThreshold'] = '-1'
        self._ajax_starts_with(formOutput, 'Error #30:')
        formOutput['configThreshold'] = ''
        self._ajax_starts_with(formOutput, 'Error #10:')
        del formOutput['configThreshold']
        self._ajax_starts_with(formOutput, 'Error #20: Unknown error')

    def test_bad_date(self):
        """
        Date must be valid
        """
        formOutput = self._get_simplified_post_data()
        formOutput['configElectionDate'] = '11/11/11/11'
        self._ajax_starts_with(formOutput, 'Error #30:')
        formOutput['configElectionDate'] = ''
        self._ajax_starts_with(formOutput, 'Error #10: Data is not valid: Must give this election')
        del formOutput['configElectionDate']
        self._ajax_starts_with(formOutput, 'Error #20:')

    def test_bad_title(self):
        """
        Title must be a real title
        """
        formOutput = self._get_simplified_post_data()
        formOutput['configElectionTitle'] = ''
        self._ajax_starts_with(formOutput, 'Error #10: Data is not valid: Must give')
        del formOutput['configElectionTitle']
        self._ajax_starts_with(formOutput, 'Error #20:')

    def test_decreasing_votes(self):
        """
        Votes cannot decrease
        """
        def modifier(data):
            data['data'][0][0]['# Votes'] = 2
            data['data'][0][1]['# Votes'] = 1
        formOutput = self._get_simplified_post_data_with_modifier(modifier)

        self._ajax_starts_with(formOutput, 'Error #10: Data is not valid: Could not add transfers')

    def test_invalid_votes(self):
        """
        Votes cannot decrease
        """
        def modifier(data):
            data['data'][0][0]['# Votes'] = 'a'
        formOutput = self._get_simplified_post_data_with_modifier(modifier)
        msg = 'Error #10: Data is not valid: On Round 1, "Blackberry" has an invalid number'
        self._ajax_starts_with(formOutput, msg)

    def test_invalid_status(self):
        """ Status can't be anything silly """
        def modifier(data):
            data['data'][0][0]['Status'] = 'Became a horcrux'
        formOutput = self._get_simplified_post_data_with_modifier(modifier)
        self._ajax_starts_with(formOutput, 'Error #20: Unknown error')

    def test_ignore_data_after_elected(self):
        """
        After a candidate is elected, the next round's votes are accounted for
        but that's it
        """
        def modifier(data):
            data['data'][0][0]['# Votes'] = 10
            data['data'][0][1]['# Votes'] = 1  # For a surplus transfer
            data['data'][0][2]['# Votes'] = 100  # to be ignored
            data['data'][0][0]['Status'] = 'Elected'
        formOutput = self._get_simplified_post_data_with_modifier(modifier)

        reader = readDataTablesResult.ReadDataTableJSON(formOutput)
        urcvtData = reader.convert_to_urcvt()

        self.assertEqual(urcvtData['results'][0]['tally']['Blackberry'], 10)
        self.assertEqual(urcvtData['results'][1]['tally']['Blackberry'], 1)
        self.assertEqual(urcvtData['results'][2]['tally']['Blackberry'], 1)

    def test_ignore_data_after_eliminated(self):
        """
        After a candidate is elected, the next round's votes are accounted for
        but that's it
        """
        def modifier(data):
            data['data'][0][0]['# Votes'] = 10
            data['data'][0][1]['# Votes'] = 1  # to be ignored
            data['data'][0][2]['# Votes'] = 100  # to be ignored
            data['data'][0][0]['Status'] = 'Eliminated'
        formOutput = self._get_simplified_post_data_with_modifier(modifier)

        reader = readDataTablesResult.ReadDataTableJSON(formOutput)
        urcvtData = reader.convert_to_urcvt()

        self.assertEqual(urcvtData['results'][0]['tally']['Blackberry'], 10)
        assert 'Blackberry' not in urcvtData['results'][1]['tally']
        assert 'Blackberry' not in urcvtData['results'][2]['tally']

    def test_fill_rest_of_round_after_elected(self):
        """
        After a candidate is elected, remaining votes are optional
        """
        def modifier(data):
            data['data'][0][0]['# Votes'] = 10
            data['data'][0][1]['# Votes'] = 0  # to be ignored
            data['data'][0][2]['# Votes'] = 0  # to be ignored
            data['data'][0][0]['Status'] = 'Elected'
        formOutput = self._get_simplified_post_data_with_modifier(modifier)

        reader = readDataTablesResult.ReadDataTableJSON(formOutput)
        urcvtData = reader.convert_to_urcvt()

        self.assertEqual(urcvtData['results'][0]['tally']['Blackberry'], 10)
        self.assertEqual(urcvtData['results'][1]['tally']['Blackberry'], 10)
        self.assertEqual(urcvtData['results'][2]['tally']['Blackberry'], 10)

    def test_no_datatables(self):
        """
        This shouldn't happen - no datatables data sent
        """
        formOutput = self._get_simplified_post_data()
        del formOutput['dataEntry']
        msg = "Error #10: Data is not valid: Data Tables isn't even shown. This should never"
        self._ajax_starts_with(formOutput, msg)

    def test_missing_candidate(self):
        """
        After a candidate is elected, remaining votes are optional
        """
        def modifier1(data):
            data['rowNames'][0] = None

        def modifier2(data):
            data['rowNames'][0] = ""
        msg = 'Error #10: Data is not valid: All candidates must have names'

        formOutput = self._get_simplified_post_data_with_modifier(modifier1)
        self._ajax_starts_with(formOutput, msg)

        formOutput = self._get_simplified_post_data_with_modifier(modifier2)
        self._ajax_starts_with(formOutput, msg)

    def test_duplicate_candidate(self):
        """
        After a candidate is elected, remaining votes are optional
        """
        def modifier(data):
            data['rowNames'][0] = 'Voldie'
            data['rowNames'][1] = 'Voldie'
        formOutput = self._get_simplified_post_data_with_modifier(modifier)
        msg = 'Error #10: Data is not valid: All candidate names must be unique'
        self._ajax_starts_with(formOutput, msg)
