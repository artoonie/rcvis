"""
Integration tests without a server
"""

from io import StringIO
import json
from mock import patch

from django.core.files import File
from django.core.management import call_command
from django.test import TestCase
from django.test.client import RequestFactory
from django.urls import reverse
from rcvformats.schemas.universaltabulator import SchemaV0 as UTSchema

from common.testUtils import TestHelpers
from common.viewUtils import get_data_for_view
from common.cloudflare import CloudflareAPI
from visualizer.graph.graphCreator import BadJSONError
from visualizer.graph.graphCreator import make_graph_with_file
from visualizer.graph.readRCVRCJSON import JSONReader
from visualizer.views import Oembed
from visualizer.models import JsonConfig, HomepageFeaturedElection, HomepageFeaturedElectionColumn
from visualizer.forms import UploadForm
from visualizer.tests import filenames
from visualizer.wikipedia.wikipedia import WikipediaExport


# pylint: disable=too-many-public-methods
class SimpleTests(TestCase):
    """ Simple tests that do not require a live browser """

    def setUp(self):
        TestHelpers.login(self.client)
        TestHelpers.setup_host_mocks(self)

    def tearDown(self):
        TestHelpers.logout(self.client)

    @classmethod
    def _get_data_for_view(cls, fn):
        """ Opens the given file and creates a graph with it """
        with open(fn, 'rb+') as f:
            config = JsonConfig(jsonFile=File(f))
            return get_data_for_view(config)

    def test_opavote_loads(self):
        """ Opens the opavote file """
        self._get_data_for_view(filenames.OPAVOTE)

    def test_electionbuddy_loads(self):
        """ Opens the electionbuddy file """
        self._get_data_for_view(filenames.ELECTIONBUDDY)
        self._get_data_for_view(filenames.ELECTIONBUDDY_NOABSTENTION)
        self._get_data_for_view(filenames.ELECTIONBUDDY_REGRESSION)

    def test_multiwinner_loads(self):
        """ Opens the multiwinner file """
        self._get_data_for_view(filenames.MULTIWINNER)

    def test_dominion_loads(self):
        """ Opens the dominion file """
        self._get_data_for_view(filenames.DOMINION)

    def test_rankit_loads(self):
        """ Opens a rankit.vote file -
            should be the same as Universal Tabulator but has failed in the past """
        # Uses FixRankitMissingTransfers,
        #      FixRankitCombinedTallyResults,
        #      FixRankitNoElimOnLastRound
        self._get_data_for_view(filenames.BROKEN_RANKIT_1)

        # Uses FixRankitMissingWinners
        self._get_data_for_view(filenames.BROKEN_RANKIT_2)

    def test_zero_vote_election_loads(self):
        """ Ensures no divisions by zero in zero-vote elections """
        self._get_data_for_view(filenames.ZERO_VOTE_ELECTION)

    def test_no_threshold_loads(self):
        """ Ensures thresholds are optional in the RCTab format """
        self._get_data_for_view(filenames.NO_THRESHOLD)

    def test_some_transfers_missing_loads(self):
        """ Transfers are always optional """
        # Ensure it's considered valid
        self.assertTrue(UTSchema().validate(filenames.SOME_MISSING_TRANSFERS))

        # And that it loads fine
        self._get_data_for_view(filenames.SOME_MISSING_TRANSFERS)

    def test_bad_json_fails(self):
        """ Opens the invalid file and asserts that it fails """
        with self.assertRaises(BadJSONError) as contextManager:
            self._get_data_for_view(filenames.BAD_DATA)
        message = str(contextManager.exception)
        self.assertIn('There cannot be an elimination on the last round.', message)

    def test_too_long_name_fails(self):
        """ Titles are limited to 256 chars """
        # Write bad data
        tf = TestHelpers.copy_with_new_name(filenames.MULTIWINNER, 'x' * 300)

        # Ensure failure
        response = self.client.post('/upload.html', {'jsonFile': tf})
        self.assertTemplateUsed(response, 'visualizer/errorUploadFailedGeneric.html')

        # Though, note: get_data_for_view won't fail
        self._get_data_for_view(tf.name)

        # Write good data
        tf = TestHelpers.copy_with_new_name(filenames.MULTIWINNER, 'x' * 200)

        # Ensure success
        response = self.client.post('/upload.html', {'jsonFile': tf})
        self.assertEqual(response.status_code, 302)

    def test_too_long_filename_succeed(self):
        """ TODO: Make this test check that a filename with 255 chars gets truncated """
        # Annoyingly this test doesn't work with a filename prefix > 87 chars
        tf = TestHelpers.copy_with_new_name(
            filenames.MULTIWINNER,
            newName='any name',
            newFilenamePrefix='x' * 87)
        response = self.client.post('/upload.html', {'jsonFile': tf})
        self.assertEqual(response.status_code, 302)
        lastUpload = TestHelpers.get_latest_upload()
        self.assertLess(len(lastUpload.slug), 100)

    # pylint: disable=R0201
    def test_various_configs(self):
        """ Tests toggling on/off each config option """
        fieldsToIgnore = ('jsonFile', 'candidateSidecarFile')
        configBoolsToToggle = [t for t in UploadForm.Meta.fields if t not in fieldsToIgnore]
        fn = filenames.MULTIWINNER
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
        self.assertEqual(response['location'], "v/city-of-eastpointe-macomb-county-mi")

    def test_upload_file_failure(self):
        """ Tests that we get an error page if a file fails to upload """
        with open(filenames.BAD_DATA) as f:
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
        self.assertEqual(response['location'], "v/nothing")

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
        """ Check that the oembed converts a visualize URL to a visualizeEmbedly URL """
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
            self.assertEqual(func(allowedUrl), '/vo/fakeslug/barchart-interactive')
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
        assert 'https://fakeurl.com/vo/fakeslug' in responseData['html']

    def test_oembed_keeps_vistype(self):
        """ Ensure vistype is shepharded from visualize to visualizembedded via oembed """
        TestHelpers.get_multiwinner_upload_response(self.client)
        slug = TestHelpers.get_latest_upload().slug
        visualizeUrl = reverse('visualize', args=(slug,)) + "?vistype=sankey"
        response = self.client.get(visualizeUrl)

        assert 'sankey' in response.context_data['oembed_url']

    def test_embedly_translation(self):
        """
        The embedly URLs are are prettier than the ?vistype= URLs.
        Make sure we cleanly translate between the two.
        """
        TestHelpers.get_multiwinner_upload_response(self.client)
        slug = TestHelpers.get_latest_upload().slug

        easyToHardURLTranslation = [
            ('barchart-interactive', 'bar'),
            ('barchart-fixed', 'bar-static'),
            ('tabular-candidate-by-round', 'table'),
            ('tabular-by-round-interactive', 'table-by-round'),
            ('tabular-by-round', 'table-by-round-static'),
            ('tabular-by-candidate', 'table-by-candidate'),
        ]
        expectedBaseURL = '/ve/city-of-eastpointe-macomb-county-mi?vistype='
        for (hardURL, easyURL) in easyToHardURLTranslation:
            visualizeUrl = reverse('visualizeEmbedly', args=(slug, easyURL))
            response = self.client.get(visualizeUrl)
            self.assertRedirects(response, expectedBaseURL + hardURL, status_code=301)

        # Also check the base
        visualizeUrl = reverse('visualizeEmbedlyDefault', args=(slug,))
        response = self.client.get(visualizeUrl)
        self.assertRedirects(response, expectedBaseURL + 'barchart-interactive', status_code=301)

    @patch('visualizer.wikipedia.wikipedia.WikipediaExport._get_todays_date_string')
    def test_wikicode(self, mockGetDateString):
        """ Validate that the wikicode can be generated and hasn't inadvertently changed """
        # First mock out the date so the result is the same
        mockGetDateString.return_value = "Today's Date - mocked out!"

        with open(filenames.MULTIWINNER, 'r+') as f:
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
        with open(filenames.ELECTIONBUDDY, 'r+') as f:
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
        slug0 = "city-of-eastpointe-macomb-county-mi"
        slug1 = "city-of-eastpointe-macomb-county-mi-1"

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
        slug = 'city-of-eastpointe-macomb-county-mi'

        # Load those two via the database
        out = StringIO()
        call_command('checkUploads', 0, 100, stdout=out)
        self.assertIn(f'0: Successfully loaded {slug}-1', out.getvalue())
        self.assertIn(f'1: Successfully loaded {slug}', out.getvalue())
        self.assertIn('Successfully loaded configs', out.getvalue())

        # Load all files in the testData/ directory (one of which raises a TypeError)
        out = StringIO()
        with self.assertRaises(TypeError):
            call_command('checkLocalFiles', 'testData/', stdout=out)

    @patch('requests.post')
    def test_cloudflare_purge(self, requestPostResponse):
        """
        Ensure cloudflare purge calls the API with the expected data
        NOTE: You shouldn't have to modify this test. If you do, manually test the
        API connection with cloudflare to ensure you didn't break anything.
        Also ensures the logging output is what we expect, so it shows up in heroku logs.
        """
        TestHelpers.get_multiwinner_upload_response(self.client)
        slug = TestHelpers.get_latest_upload().slug

        requestPostResponse.side_effect = TestHelpers.create_request_mock({'a': 0}, 200)
        expectedLogString = "INFO:common.cloudflare:Cleared cloudflare cache for "\
                            "city-of-eastpointe-macomb-county-mi: {'a': 0}"

        with self.settings(
                CLOUDFLARE_AUTH_TOKEN='mytoken',
                CLOUDFLARE_ZONE_ID='zoneid'):
            with self.assertLogs("common.cloudflare") as logger:
                CloudflareAPI.purge_vis_cache(slug)
                self.assertListEqual(logger.output, [expectedLogString])

        expectedUrl = 'https://api.cloudflare.com/client/v4/zones/zoneid/purge_cache'
        expectedHeaders = {
            "Content-Type": "application/json",
            "Authorization": "Bearer mytoken"
        }

        expectedData = {
            'files': [
                "https://example.com/v/city-of-eastpointe-macomb-county-mi",
                "https://example.com/ve/city-of-eastpointe-macomb-county-mi",
                "https://example.com/vo/city-of-eastpointe-macomb-county-mi",
                "https://example.com/vo/city-of-eastpointe-macomb-county-mi/bar",
                "https://example.com/vo/city-of-eastpointe-macomb-county-mi/barchart-interactive",
                "https://example.com/vo/city-of-eastpointe-macomb-county-mi/sankey",
                "https://example.com/vo/city-of-eastpointe-macomb-county-mi/table",
                "https://example.com/vb/city-of-eastpointe-macomb-county-mi"]}
        requestPostResponse.assert_called_with(expectedUrl,
                                               headers=expectedHeaders,
                                               data=json.dumps(expectedData))

    def test_homepage_real_world_examples(self):
        """
        Tests the "real-world examples" section on the homepage.
        This emulates creating the objects as we'll do via the admin site.
        """
        TestHelpers.get_multiwinner_upload_response(self.client)

        columnTitle = b"This column title should appear"
        linkTitle = b"This link title should appear"

        column = HomepageFeaturedElectionColumn(title=str(columnTitle), order=0)
        column.save()

        link = HomepageFeaturedElection(
            title=str(linkTitle),
            order=0,
            column=column,
            jsonConfig=TestHelpers.get_latest_upload())
        link.save()

        indexResponse = self.client.get(reverse('index'))
        self.assertIn(columnTitle, indexResponse.content)
        self.assertIn(linkTitle, indexResponse.content)

    def test_slug_generation(self):
        """
        Tests that slug generation increments with each upload
        """
        TestHelpers.get_multiwinner_upload_response(self.client)
        TestHelpers.get_multiwinner_upload_response(self.client)
        slug = TestHelpers.get_latest_upload().slug
        self.assertEqual(slug, 'city-of-eastpointe-macomb-county-mi-1')

    def test_homepage_recent_uploads(self):
        """
        Tests the "most recent uploads" section on the homepage.
        """
        TestHelpers.get_multiwinner_upload_response(self.client)
        latestTitle = TestHelpers.get_latest_upload().title

        indexResponse = self.client.get(reverse('index'))
        self.assertIn(latestTitle, str(indexResponse.content))

    def test_text_for_winner(self):
        """ Integration test: is basic test for TextForWinner shown? """
        def get_response_content_for_enum(textForWinnerVal):
            with open(filenames.MULTIWINNER) as f:
                data = {'jsonFile': f, 'textForWinner': textForWinnerVal}
                response = self.client.post('/upload.html', data)
            response = self.client.get('/' + response['location'])
            return response.content

        content = get_response_content_for_enum(0)
        self.assertIn(b'Harvey Curley and Larry Edwards were elected', content)

        content = get_response_content_for_enum(1)
        self.assertIn(b'Harvey Curley and Larry Edwards won', content)

        content = get_response_content_for_enum(2)
        self.assertIn(b'Harvey Curley and Larry Edwards advanced to the general', content)

    def test_dont_recompute_inactive_ballots_if_already_exists(self):
        """
        If "Inactive Ballots" is listed as a candidate, don't override that data
        with inactive ballot data computed from the transfers.
        """
        with open(filenames.SOME_MISSING_TRANSFERS, 'r') as f:
            data = json.load(f)

        # Baseline: this is directly from the file
        self.assertEqual(data['results'][-1]['tally']['Inactive Ballots'], 117327.0)

        # When "Inactive Ballots" exists as a candidate, don't recompute any of its data.
        # The tallyresults and Inactive Ballots don't add up, so err on the side of the provided
        # candidate.
        # This happens especially when the transfer data is partial, e.g. if it is missing
        # for batch eliminations
        JSONReader(data)  # note: this happens to modify data in-place, but it may not always do so
        self.assertEqual(data['results'][-1]['tally']['Inactive Ballots'], 117327.0)

        # Now remove "Inactive Ballots" as a candidate
        for roundData in data['results']:
            del roundData['tally']['Inactive Ballots']

        # When we re-read the data, it now recomputed inactive ballots from transfer data,
        # so it's smaller
        JSONReader(data)  # note: this happens to modify data in-place, but it may not always do so
        self.assertEqual(data['results'][-1]['tally']['Inactive Ballots'], 99186.0)
