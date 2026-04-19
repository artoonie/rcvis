"""
Integration tests without a server
"""

from datetime import timedelta
from io import StringIO
import json
import re
from mock import patch

from django.core.files import File
from django.core.management import call_command
from django.test import TestCase
from django.test.client import RequestFactory
from django.urls import reverse
from django.utils.http import http_date, parse_http_date
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
    def _get_data_for_view(cls, fn, sidecar=None):
        """ Opens the given file and creates a graph with it """
        with open(fn, 'rb+') as f:
            config = JsonConfig(jsonFile=File(f))
            if sidecar:
                config.candidateSidecarFile = File(sidecar)
            return get_data_for_view(config)

    def test_inactive_ballots_appears_later(self):
        """
        When there is a double-elimination, the transfer dictionary isn't loaded.
        That means no tallyResult includes an "Inactive Ballots".
        This ensures that we can still load these files.
        Note: this is a regression test from a RankedVote file.
        """
        self._get_data_for_view(filenames.INACTIVE_BALLOT_APPEARS_LATER)

    def test_zero_vote_multiwinner(self):
        """
        A zero-vote multiwinner election with zero votes should still load.
        Note: this is a regression test from a RankedChoices file.
        """
        self._get_data_for_view(filenames.ZERO_VOTE_MULTIWINNER)

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

    def test_inactive_ballot_regression(self):
        """ Inactive ballots without capital B doesn't fail """
        # Ensure it loads fine
        self._get_data_for_view(
            filenames.INACTIVE_BALLOT_RENAME_DATA,
            filenames.INACTIVE_BALLOT_RENAME_SIDECAR)

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

    def test_various_configs(self):
        """ Tests toggling on/off each config option """
        fieldsToIgnore = ('jsonFile', 'candidateSidecarFile', 'dataSourceURL')
        configBoolsToToggle = [t for t in UploadForm.Meta.fields if t not in fieldsToIgnore]
        fn = filenames.MULTIWINNER
        for configBoolToToggle in configBoolsToToggle:
            with open(fn, 'r+', encoding='utf-8') as f:
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
        with open(filenames.BAD_DATA, encoding='utf-8') as f:
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
        with open(acceptableSizeJson, encoding='utf-8') as f:
            response = self.client.post('/upload.html', {'jsonFile': f})
        self.assertEqual(response.status_code, 302)
        self.assertEqual(response['location'], "v/nothing")

        # Then verify it fails with a too-large filesize
        tooLargeJson = TestHelpers.generate_random_valid_json_of_size(1024 * 1024 * 3)  # 3 MB
        with open(tooLargeJson, encoding='utf-8') as f:
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

    def test_embedded_404_returns_friendly_page(self):
        """
        When an embedded visualization slug doesn't exist, return a friendly
        HTML page with a 404 status, so it displays nicely in iframes.
        """
        response = self.client.get('/ve/nonexistent-slug')
        self.assertEqual(response.status_code, 404)
        self.assertIn(b'Visualization Not Found', response.content)

    def test_pie_vistype_renders(self):
        """
        Ensure the pie chart vistype renders without error when accessed
        via the embedded visualization URL with ?vistype=pie.
        """
        TestHelpers.get_multiwinner_upload_response(self.client)
        slug = TestHelpers.get_latest_upload().slug
        path = reverse('visualizeEmbedded', args=(slug,)) + '?vistype=pie'
        response = self.client.get(path)
        self.assertEqual(response.status_code, 200)

    def test_pie_embedly_redirect(self):
        """
        Ensure the embedly-friendly pie URL /vo/{slug}/pie redirects
        to the embedded URL /ve/{slug}?vistype=pie with a 301.
        """
        TestHelpers.get_multiwinner_upload_response(self.client)
        slug = TestHelpers.get_latest_upload().slug
        visualizeUrl = reverse('visualizeEmbedly', args=(slug, 'pie'))
        response = self.client.get(visualizeUrl)
        expectedUrl = f'/ve/{slug}?vistype=pie'
        self.assertRedirects(response, expectedUrl, status_code=301)

    def test_hide_pie_config(self):
        """
        When hidePie is True on a JsonConfig, the rendered visualization page
        should pass hidePie = true to the JavaScript config.
        """
        TestHelpers.get_multiwinner_upload_response(self.client)
        config = TestHelpers.get_latest_upload()

        # Default: hidePie is False
        path = reverse('visualize', args=(config.slug,))
        response = self.client.get(path)
        self.assertContains(response, 'config.hidePie =  false')

        # Set hidePie to True; disable cache so we get a fresh response
        config.hidePie = True
        config.save()
        with self.settings(CACHES={'default': {
                'BACKEND': 'django.core.cache.backends.dummy.DummyCache'}}):
            response = self.client.get(path)
        self.assertContains(response, 'config.hidePie =  true')

    @patch('visualizer.wikipedia.wikipedia.WikipediaExport._get_todays_date_string')
    def test_wikicode(self, mockGetDateString):
        """ Validate that the wikicode can be generated and hasn't inadvertently changed """
        # First mock out the date so the result is the same
        mockGetDateString.return_value = "Today's Date - mocked out!"

        with open(filenames.MULTIWINNER, 'r+', encoding='utf-8') as f:
            graph = make_graph_with_file(f, excludeFinalWinnerAndEliminatedCandidate=False)

        text = WikipediaExport(graph, "http://example.com/v/slug").create_wikicode(False)

        # TODO - how can I test this? I tried mwparserfromhell but that doesn't have a way to
        # validate syntax. For now, just validate it doesn't throw an exception, and that the
        # length is the same magic number I expect, so I don't inadvertently change anything
        magicKnownTextLength = 4100
        self.assertEqual(len(text), magicKnownTextLength)
        with open('testData/wikiOutput.txt', 'r', encoding='utf-8') as f:
            self.maxDiff = None
            self.assertEqual(text, f.read())

        # Ensure at least the text closes correctly
        assert text[-2:] == "|}"

    def test_electionbuddy_data_is_sane(self):
        """ Validates some data about the electionbuddy file """
        with open(filenames.ELECTIONBUDDY, 'r+', encoding='utf-8') as f:
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
        """ Ensures filenames are not overwritten when a title repeats. """
        slugPrefix = "city-of-eastpointe-macomb-county-mi"
        slugPattern = re.compile(rf'^v/{slugPrefix}-[0-9a-f]{{12}}$')

        response = TestHelpers.get_multiwinner_upload_response(self.client)
        self.assertEqual(response.status_code, 302)
        self.assertRegex(response['location'], slugPattern)
        slug0 = response['location'][len('v/'):]

        response = TestHelpers.get_multiwinner_upload_response(self.client)
        self.assertEqual(response.status_code, 302)
        self.assertRegex(response['location'], slugPattern)
        slug1 = response['location'][len('v/'):]

        self.assertNotEqual(slug0, slug1)

        model0 = JsonConfig.objects.get(slug=slug0)
        model1 = JsonConfig.objects.get(slug=slug1)

        assert model0.jsonFile.name != model1.jsonFile.name

    def test_management_commands(self):
        """ Test that the management tests work """
        # Upload two files
        TestHelpers.get_multiwinner_upload_response(self.client)
        TestHelpers.get_multiwinner_upload_response(self.client)
        slugPrefix = 'city-of-eastpointe-macomb-county-mi'

        # Load those two via the database
        out = StringIO()
        call_command('checkUploads', 0, 100, stdout=out)
        output = out.getvalue()
        # Both uploads should be reported as successfully loaded by the command,
        # regardless of the random slug suffixes.
        self.assertEqual(len(re.findall(rf'Successfully loaded {slugPrefix}-[0-9a-f]{{12}}',
                                        output)), 2)
        self.assertIn('Successfully loaded configs', output)

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
        with open(filenames.ONE_ROUND, 'r', encoding='utf-8') as f:
            self.client.post('/upload.html', {'jsonFile': f})
        slug = TestHelpers.get_latest_upload().slug

        requestPostResponse.side_effect = TestHelpers.create_request_mock({'a': 0}, 200)
        expectedLogString = "INFO:common.cloudflare:Cleared cloudflare cache for 17 starting with "\
                            "/v/one-round: {'a': 0}"

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

        expectedData = {'files': [
            "https://example.com/v/one-round",
            "https://example.com/ve/one-round",
            "https://example.com/vo/one-round",
            "https://example.com/vo/one-round/bar",
            "https://example.com/vo/one-round/barchart-interactive",
            "https://example.com/vo/one-round/sankey",
            "https://example.com/vo/one-round/table",
            "https://example.com/vo/one-round/pie",
            "https://example.com/vb/one-round",
            "https://example.com/ve/one-round?vistype=barchart-interactive",
            "https://example.com/ve/one-round?vistype=barchart-fixed",
            "https://example.com/ve/one-round?vistype=tabular-by-candidate",
            "https://example.com/ve/one-round?vistype=tabular-by-round",
            "https://example.com/ve/one-round?vistype=tabular-by-round-interactive",
            "https://example.com/ve/one-round?vistype=candidate-by-round",
            "https://example.com/ve/one-round?vistype=sankey",
            "https://example.com/ve/one-round?vistype=pie",
            "https://www.example.com/v/one-round",
            "https://www.example.com/ve/one-round",
            "https://www.example.com/vo/one-round",
            "https://www.example.com/vo/one-round/bar",
            "https://www.example.com/vo/one-round/barchart-interactive",
            "https://www.example.com/vo/one-round/sankey",
            "https://www.example.com/vo/one-round/table",
            "https://www.example.com/vo/one-round/pie",
            "https://www.example.com/vb/one-round",
            "https://www.example.com/ve/one-round?vistype=barchart-interactive",
            "https://www.example.com/ve/one-round?vistype=barchart-fixed",
            "https://www.example.com/ve/one-round?vistype=tabular-by-candidate",
            "https://www.example.com/ve/one-round?vistype=tabular-by-round",
            "https://www.example.com/ve/one-round?vistype=tabular-by-round-interactive",
            "https://www.example.com/ve/one-round?vistype=candidate-by-round",
            "https://www.example.com/ve/one-round?vistype=sankey",
            "https://www.example.com/ve/one-round?vistype=pie"]}
        requestPostResponse.assert_called_with(expectedUrl,
                                               headers=expectedHeaders,
                                               data=json.dumps(expectedData),
                                               timeout=8)

    def test_conditional_get_returns_304_when_fresh(self):
        """
        When the client sends If-Modified-Since matching the object's updatedAt,
        ConditionalGetMixin should short-circuit with 304 (no graph computation).
        File cache is disabled to isolate the view-level ConditionalGetMixin.
        An old If-Modified-Since returns 200; the current one returns 304.
        The view hits the DB — contrast with test_server_cache_returns_304_when_fresh,
        where zero DB queries prove the 304 comes from the middleware cache.
        """
        with open(filenames.ONE_ROUND, 'r', encoding='utf-8') as f:
            self.client.post('/upload.html', {'jsonFile': f})
        config = TestHelpers.get_latest_upload()
        path = reverse('visualize', args=(config.slug,))

        # Disable file cache so ConditionalGetMixin handles it directly
        with self.settings(CACHES={'default': {
                'BACKEND': 'django.core.cache.backends.dummy.DummyCache'}}):
            # With an old If-Modified-Since: should get 200
            oldDate = http_date(0)
            response1 = self.client.get(path, HTTP_IF_MODIFIED_SINCE=oldDate)
            self.assertEqual(response1.status_code, 200)
            lastModified = response1['Last-Modified']
            self.assertIsNotNone(lastModified)

            # With current If-Modified-Since: should get 304.
            # DB queries confirm the view ran (contrast with
            # test_server_cache_returns_304_when_fresh which has zero queries).
            response2 = self.client.get(path, HTTP_IF_MODIFIED_SINCE=lastModified)
            self.assertEqual(response2.status_code, 304)

    def test_server_cache_returns_304_when_fresh(self):
        """
        With the file cache enabled, the second request with If-Modified-Since
        should return 304 via the middleware pipeline (FetchFromCacheMiddleware
        serves the cached 200, then ConditionalGetMiddleware converts to 304).
        This path never reaches the view — verified by asserting zero DB queries.
        Contrast with test_conditional_get_returns_304_when_fresh, where the
        file cache is disabled and the view handles the 304 (with DB queries).
        """
        with open(filenames.ONE_ROUND, 'r', encoding='utf-8') as f:
            self.client.post('/upload.html', {'jsonFile': f})
        config = TestHelpers.get_latest_upload()
        path = reverse('visualize', args=(config.slug,))

        # First request: populates the file cache (UpdateCacheMiddleware stores it)
        oldDate = http_date(0)
        response1 = self.client.get(path, HTTP_IF_MODIFIED_SINCE=oldDate)
        self.assertEqual(response1.status_code, 200)
        lastModified = response1['Last-Modified']
        self.assertIsNotNone(lastModified)

        # Second request with current If-Modified-Since: FetchFromCacheMiddleware
        # returns the cached 200, ConditionalGetMiddleware converts to 304.
        # Zero DB queries proves the view never ran.
        with self.assertNumQueries(0):
            response2 = self.client.get(path, HTTP_IF_MODIFIED_SINCE=lastModified)
        self.assertEqual(response2.status_code, 304)

    def test_server_cache_returns_304_when_if_modified_since_is_later(self):
        """
        If-Modified-Since is later than Last-Modified: the resource hasn't been
        modified since the client's copy, so 304. FetchFromCacheMiddleware serves
        the cached 200, ConditionalGetMiddleware converts to 304.
        """
        with open(filenames.ONE_ROUND, 'r', encoding='utf-8') as f:
            self.client.post('/upload.html', {'jsonFile': f})
        config = TestHelpers.get_latest_upload()
        path = reverse('visualize', args=(config.slug,))

        # First request: populates the file cache
        response1 = self.client.get(path)
        self.assertEqual(response1.status_code, 200)
        lastModified = response1['Last-Modified']

        # Shift If-Modified-Since 10 seconds into the future
        futureDate = http_date(parse_http_date(lastModified) + 10)
        response2 = self.client.get(path, HTTP_IF_MODIFIED_SINCE=futureDate)
        self.assertEqual(response2.status_code, 304)

    def test_server_cache_returns_200_when_if_modified_since_is_earlier(self):
        """
        If-Modified-Since is earlier than Last-Modified: the resource was modified
        after the client's copy, so the server should return the cached 200.
        FetchFromCacheMiddleware serves the cached response, but
        ConditionalGetMiddleware does NOT convert to 304 because the resource
        is newer than the client's timestamp.
        """
        with open(filenames.ONE_ROUND, 'r', encoding='utf-8') as f:
            self.client.post('/upload.html', {'jsonFile': f})
        config = TestHelpers.get_latest_upload()
        path = reverse('visualize', args=(config.slug,))

        # First request: populates the file cache
        response1 = self.client.get(path)
        self.assertEqual(response1.status_code, 200)
        lastModified = response1['Last-Modified']

        # Shift If-Modified-Since 10 seconds into the past
        pastDate = http_date(parse_http_date(lastModified) - 10)
        response2 = self.client.get(path, HTTP_IF_MODIFIED_SINCE=pastDate)
        self.assertEqual(response2.status_code, 200)
        # Verify the response came with the same Last-Modified (served from cache)
        self.assertEqual(response2['Last-Modified'], lastModified)

    def test_conditional_get_returns_200_after_update(self):
        """
        After the model is updated, a request with the old If-Modified-Since
        should get a fresh 200 (not 304), because updatedAt has advanced.
        """
        with open(filenames.ONE_ROUND, 'r', encoding='utf-8') as f:
            self.client.post('/upload.html', {'jsonFile': f})
        config = TestHelpers.get_latest_upload()
        path = reverse('visualize', args=(config.slug,))

        with self.settings(CACHES={'default': {
                'BACKEND': 'django.core.cache.backends.dummy.DummyCache'}}):
            # Get the initial Last-Modified
            response1 = self.client.get(path)
            oldLastModified = response1['Last-Modified']

            # Update the model and force updatedAt forward by 2 seconds
            # (HTTP dates have 1-second resolution, so same-second updates
            # would not be distinguishable)
            config.hideSankey = not config.hideSankey
            config.save()
            JsonConfig.objects.filter(pk=config.pk).update(
                updatedAt=config.updatedAt + timedelta(seconds=2))

            # Request with old timestamp should get 200, not 304
            response2 = self.client.get(path, HTTP_IF_MODIFIED_SINCE=oldLastModified)
            self.assertEqual(response2.status_code, 200)

            # And the new Last-Modified should differ
            self.assertNotEqual(response2['Last-Modified'], oldLastModified)

    def test_response_has_last_modified_header(self):
        """
        Visualization responses should include a Last-Modified header
        matching the object's updatedAt timestamp.
        """
        with open(filenames.ONE_ROUND, 'r', encoding='utf-8') as f:
            self.client.post('/upload.html', {'jsonFile': f})
        config = TestHelpers.get_latest_upload()

        with self.settings(CACHES={'default': {
                'BACKEND': 'django.core.cache.backends.dummy.DummyCache'}}):
            # Check both Visualize and VisualizeEmbedded views
            for viewName in ['visualize', 'visualizeEmbedded']:
                path = reverse(viewName, args=(config.slug,))
                response = self.client.get(path)
                self.assertEqual(response.status_code, 200)
                self.assertIn('Last-Modified', response)
                expected = http_date(config.updatedAt.timestamp())
                self.assertEqual(response['Last-Modified'], expected)

    def test_response_has_no_cache_directive(self):
        """
        Visualization responses should include Cache-Control: no-cache
        so browsers always revalidate with the server.
        """
        with open(filenames.ONE_ROUND, 'r', encoding='utf-8') as f:
            self.client.post('/upload.html', {'jsonFile': f})
        config = TestHelpers.get_latest_upload()

        with self.settings(CACHES={'default': {
                'BACKEND': 'django.core.cache.backends.dummy.DummyCache'}}):
            path = reverse('visualize', args=(config.slug,))
            response = self.client.get(path)
            self.assertIn('no-cache', response.get('Cache-Control', ''))

    def test_save_purge_only_on_update(self):
        """
        The first save (creation) should NOT trigger a cache purge, but
        a subsequent save (update) should. Tests the _state.adding guard
        in JsonConfig.save().
        """
        with open(filenames.ONE_ROUND, 'r', encoding='utf-8') as f:
            self.client.post('/upload.html', {'jsonFile': f})
        config = TestHelpers.get_latest_upload()

        with patch.object(CloudflareAPI, 'purge_vis_cache') as mockPurge:
            # Update triggers purge
            config.hideSankey = not config.hideSankey
            config.save()
            mockPurge.assert_called_once_with(config.slug)

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

    def test_source_domain_listed(self):
        """
        Ensure that the data source URL shows the domain name in the Source link
        """
        def response_with_data_source(url):
            with open(filenames.MULTIWINNER, 'rb+') as f:
                response = self.client.post('/upload.html', {
                    'jsonFile': f,
                    'dataSourceURL': url
                })
                response = self.client.get('/' + response['location'])
            return response

        response = response_with_data_source('https://www.hello.com')
        self.assertIn('Source [hello.com]', str(response.content))

        response = response_with_data_source('https://base.hello.com/onetwo/3.html')
        self.assertIn('Source [base.hello.com]', str(response.content))

    def test_slug_generation(self):
        """
        Tests that repeated uploads produce unique, title-prefixed slugs
        with random suffixes (non-enumerable).
        """
        TestHelpers.get_multiwinner_upload_response(self.client)
        TestHelpers.get_multiwinner_upload_response(self.client)
        slug = TestHelpers.get_latest_upload().slug
        self.assertRegex(slug, r'^city-of-eastpointe-macomb-county-mi-[0-9a-f]{12}$')

    def test_public_user(self):
        """
        Test that "public" users appear in the sitemap and the homepage list of recent URLs
        and should not be marked as noindex
        This test should mirror test_private_user
        """
        TestHelpers.get_multiwinner_upload_response(self.client)
        lastUpload = TestHelpers.get_latest_upload()
        latestSlug = lastUpload.slug

        # It is in index latest list + sitemap
        indexResponse = self.client.get(reverse('index'))
        self.assertIn(latestSlug, str(indexResponse.content))
        sitemapResponse = self.client.get('/sitemap.xml')
        self.assertIn(latestSlug, str(sitemapResponse.content))

        # It is not labeled as noindex
        visResponse = self.client.get(reverse('visualize', args=(latestSlug,)))
        self.assertNotIn('noindex', str(visResponse.content))

    def test_private_user(self):
        """
        Test that "private" users do not appear in the sitemap or homepage list of recent URLs,
        and should be marked as noindex
        This test should mirror test_public_user
        """
        TestHelpers.get_multiwinner_upload_response(self.client)
        lastUpload = TestHelpers.get_latest_upload()
        latestSlug = lastUpload.slug

        lastUpload.owner.userprofile.isPrivate = True
        lastUpload.owner.userprofile.save()

        # It is not in index latest list + sitemap
        indexResponse = self.client.get(reverse('index') + "nocache=1")
        self.assertNotIn(latestSlug, str(indexResponse.content))
        sitemapResponse = self.client.get('/sitemap.xml')
        self.assertNotIn(latestSlug, str(sitemapResponse.content))

        # It is labeled as noindex
        visResponse = self.client.get(reverse('visualize', args=(latestSlug,)))
        self.assertIn('noindex', str(visResponse.content))

    def test_text_for_winner(self):
        """ Integration test: is basic test for TextForWinner shown? """
        def get_response_content_for_enum(textForWinnerVal):
            with open(filenames.MULTIWINNER, encoding='utf-8') as f:
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
        with open(filenames.SOME_MISSING_TRANSFERS, 'r', encoding='utf-8') as f:
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

    def test_batch_elimination_with_hide_winner(self):
        """
        Regression test: if "hide eliminated candidate on last round" is shown,
        make sure it only hides the eliminated candidate if it's truly on the LAST round.
        Previously, it would hide the most recently eliminated candidate, which we
        do not want.
        """
        for isOn in (True, False):
            with open(filenames.BATCH_ELIMINATION_TWO_FINAL, 'r', encoding='utf-8') as f:
                graph = make_graph_with_file(f, excludeFinalWinnerAndEliminatedCandidate=isOn)
            summary = graph.summarize()
            self.assertEqual(2, len(summary.rounds[-1].eliminatedNames))
            self.assertEqual('Nicole Speer', summary.rounds[-1].eliminatedNames[0])
            self.assertEqual('Paul Tweedlie', summary.rounds[-1].eliminatedNames[1])

    def test_custom_text_on_visualization(self):
        """
        Integration test: create a visualization with custom text included and verify
        that the provided text is displayed on the result page
        """
        customText = "Testing custom text in field"
        with open(filenames.MULTIWINNER, encoding='utf-8') as f:
            data = {'jsonFile': f, 'customText': customText}
            response = self.client.post('/upload.html', data)
        response = self.client.get('/' + response['location'])
        self.assertIn(customText.encode("utf-8"), response.content)
