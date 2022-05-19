"""
Tests related to the sidecar file
Because the ballotpedia page is looked at less frequently, but its
standardization is highly important, this should be tested more thoroughly.
"""

from django.core.files import File
from django.test import TestCase
from django.urls import reverse

from common.testUtils import TestHelpers
from visualizer.sidecar.reader import BadSidecarError
from visualizer.tests import filenames
from visualizer.validators import try_to_load_jsons

TestHelpers.silence_logging_spam()


class SidecarTests(TestCase):
    """ Tests validating sidecar file functionality """

    def setUp(self):
        TestHelpers.setup_host_mocks(self)

    @classmethod
    def _assert_sidecar_valid(cls, sidecarFileObj):
        """ Opens the given file and creates a graph with it """
        jsonFilename = filenames.THREE_ROUND
        with open(jsonFilename, 'r+') as jsonFileObj:
            try_to_load_jsons(File(jsonFileObj), File(sidecarFileObj))

    def test_data_loads(self):
        """ Test the happy path: correct data loads """
        with open(filenames.THREE_ROUND_SIDECAR, 'r+') as sidecarFileObj:
            self._assert_sidecar_valid(sidecarFileObj)

    @classmethod
    def test_regression_residual_surplus(cls):
        """
        Test residual surplus in main, not in sidecar
        regression: c28d6a7 (fix-inactive-after-double-elim)
        """
        with open(filenames.RESIDUAL_SURPLUS_MAIN, 'r+') as jsonFileObj:
            with open(filenames.RESIDUAL_SURPLUS_SIDECAR, 'r+') as sidecarFileObj:
                try_to_load_jsons(File(jsonFileObj), File(sidecarFileObj))

    def test_error_on_version(self):
        """ Ensure the version number is checked """
        tf = TestHelpers.modify_json_with(filenames.THREE_ROUND_SIDECAR,
                                          lambda d: d.update({'version': '0.0'}))
        with self.assertRaisesRegex(BadSidecarError, 'Version must be 1.0'):
            self._assert_sidecar_valid(tf)

    def test_error_on_candidate_order(self):
        """ All candidates must be in the order, and not more """
        tf = TestHelpers.modify_json_with(filenames.THREE_ROUND_SIDECAR,
                                          lambda d: d['order'].remove('Banana'))
        with self.assertRaisesRegex(BadSidecarError, 'order must include all'):
            self._assert_sidecar_valid(tf)

        tf = TestHelpers.modify_json_with(filenames.THREE_ROUND_SIDECAR,
                                          lambda d: d['order'].append('Cherry'))
        with self.assertRaisesRegex(BadSidecarError, 'order must include all'):
            self._assert_sidecar_valid(tf)

    def test_infos_must_be_actual_candidates(self):
        """ Make sure Info dosen't include any extra candidates """
        tf = TestHelpers.modify_json_with(
            filenames.THREE_ROUND_SIDECAR,
            lambda d: d['info'].update({'Cherry': d['info']['Banana']}))
        with self.assertRaisesRegex(BadSidecarError, 'Cherry is missing from the actual'):
            self._assert_sidecar_valid(tf)

    def _upload_and_go_to_ballotpedia(self, uploadConfig):
        """ POSTS uploadConfig to /upload.html, goes to /vb/, then returns that response """
        TestHelpers.login(self.client)
        redirectResponse = self.client.post('/upload.html', uploadConfig)
        slug = TestHelpers.get_latest_upload().slug
        vbUrl = reverse('visualizeBallotpedia', args=(slug,))
        assert vbUrl.endswith(slug)
        assert redirectResponse.url.endswith(slug)

        return self.client.get(vbUrl)

    def _get_bp_body(self, visResponse):
        """ Get the main body of /vb/, just to make the search string a little smaller """
        bodyStart = visResponse.content.find(b'<body')
        bodyEnd = visResponse.content.find(b'<div id="embedded-footer">')
        self.assertNotEqual(bodyStart, -1)
        self.assertNotEqual(bodyEnd, -1)
        staticHtml = visResponse.content[bodyStart:bodyEnd]
        return staticHtml

    def _test_ballotpedia_text_with_config(self, uploadConfig, testConfigFuncs):
        """
        Helper function to test ballotpedia text.
        :param uploadConfig: What to send as POST to /upload.html
        :param testConfigFuncs: For each text we're searching for, what assertion function
                                should we use: assertIn or assertNotIn?
                                See this function's usage to see what fields are required.
        """
        visResponse = self._upload_and_go_to_ballotpedia(uploadConfig)
        staticHtml = self._get_bp_body(visResponse)

        texts = {
            'title': b'<div id="bp-header">Favorite ice cream flavors',
            'totalVotes': b'Total Votes: 1,200',
            'certified': b'The results have been certified',
            'incumbentsBolded': b'Incumbents are <span class="dataLabelIncumbent">'
                                b'bolded and underlined</span>',
            'noIncumbents': b'There were no incumbents in this race',
            'source': b'<a href="http://test.com">Source</a>'
        }

        # Look through the test config to see if the text should be in or not in the HTML
        for key in texts:
            assertFunc = testConfigFuncs[key]
            textToSearchFor = texts[key]
            assertFunc(textToSearchFor, staticHtml)

        # Banan should be somewhere, though not in the main body
        self.assertIn(b'Banana', visResponse.content)

    def test_ballotpedia_text(self):
        """ Test that the ballotpedia visualization has the required bp-specific text """
        # Test with no ballotpedia-specific data
        with open(filenames.THREE_ROUND) as jsonFile:
            self._test_ballotpedia_text_with_config({
                'jsonFile': jsonFile
            }, {
                'title': self.assertIn,
                'totalVotes': self.assertIn,
                'certified': self.assertNotIn,
                'incumbentsBolded': self.assertNotIn,
                'noIncumbents': self.assertIn,
                'source': self.assertNotIn
            })

        # Add the sidecar but nothing else
        with open(filenames.THREE_ROUND) as jsonFile:
            with open(filenames.THREE_ROUND_SIDECAR) as sidecarFile:
                self._test_ballotpedia_text_with_config({
                    'jsonFile': jsonFile,
                    'candidateSidecarFile': sidecarFile
                }, {
                    'title': self.assertIn,
                    'totalVotes': self.assertIn,
                    'certified': self.assertNotIn,
                    'incumbentsBolded': self.assertIn,
                    'noIncumbents': self.assertNotIn,
                    'source': self.assertNotIn
                })

        # Test the sidecar with no incumbents
        tf = TestHelpers.modify_json_with(
            filenames.THREE_ROUND_SIDECAR,
            lambda d: d['info']['Blackberry'].update({'incumbent': False}))
        with open(filenames.THREE_ROUND) as jsonFile:
            with open(tf.name) as sidecarFile:
                self._test_ballotpedia_text_with_config({
                    'jsonFile': jsonFile,
                    'candidateSidecarFile': sidecarFile
                }, {
                    'title': self.assertIn,
                    'totalVotes': self.assertIn,
                    'certified': self.assertNotIn,
                    'incumbentsBolded': self.assertNotIn,
                    'noIncumbents': self.assertIn,
                    'source': self.assertNotIn
                })

        # Test with additional data
        with open(filenames.THREE_ROUND) as jsonFile:
            with open(filenames.THREE_ROUND_SIDECAR) as sidecarFile:
                self._test_ballotpedia_text_with_config({
                    'jsonFile': jsonFile,
                    'candidateSidecarFile': sidecarFile,
                    'dataSourceURL': 'test.com',  # note: http:// is auto-added
                    'areResultsCertified': True
                }, {
                    'title': self.assertIn,
                    'totalVotes': self.assertIn,
                    'certified': self.assertIn,
                    'incumbentsBolded': self.assertIn,
                    'noIncumbents': self.assertNotIn,
                    'source': self.assertIn
                })
