"""
Tests for the accessibility features: the plain-English narration,
and the screenreader markup of the visualizations.
"""

from django.test import TestCase
from django.urls import reverse
from mock import Mock

from common.testUtils import TestHelpers
from common.viewUtils import DefaultConfig
from visualizer.descriptors.roundDescriber import Describer
from visualizer.graph.graphCreator import make_graph_with_file
from visualizer.templatetags.tableHelpers import get_round_cell_info
from visualizer.tests import filenames


class NarrationTests(TestCase):
    """ Tests the narration produced by the Describer """

    def setUp(self):
        TestHelpers.setup_host_mocks(self)
        self.config = DefaultConfig()

    def test_narration_has_summary_and_one_paragraph_per_round(self):
        """ The narration is a summary plus a paragraph per round, in order """
        with open(filenames.THREE_ROUND, 'r', encoding='utf-8') as f:
            graph = make_graph_with_file(f, False)
        narration = Describer(graph, self.config, summarizeAsParagraph=False).describe_narration()

        self.assertIn('there were 3 rounds', narration['summary'])
        self.assertIn("Here's what happened in each round.", narration['summary'])
        self.assertEqual(len(narration['rounds']), 3)
        self.assertTrue(narration['rounds'][0].startswith('In the first round, '))
        self.assertTrue(narration['rounds'][1].startswith('In the second round, '))
        self.assertTrue(narration['rounds'][2].startswith('In the third round, '))
        self.assertIn('was elected', narration['rounds'][2])

    def test_narration_does_not_change_describer_mode(self):
        """ describe_narration always uses paragraphs, but leaves the describer as it found it """
        with open(filenames.ONE_ROUND, 'r', encoding='utf-8') as f:
            graph = make_graph_with_file(f, False)
        describer = Describer(graph, self.config, summarizeAsParagraph=False)
        narration = describer.describe_narration()

        self.assertIsInstance(narration['rounds'][0], str)
        self.assertFalse(describer.summarizeAsParagraph)
        # The list-of-events form still works afterwards
        self.assertIsInstance(describer.describe_round(0), list)


class TableHelpersTests(TestCase):
    """ Tests the single-table-summary cell helper """

    @classmethod
    def _statuses(cls, roundsForCandidate):
        """ Runs the helper over each round, in order, with a fresh template context """
        context = {}
        return [get_round_cell_info(context, 'Candidate', roundData)['status']
                for roundData in roundsForCandidate]

    def test_winner_is_marked_once_then_previously(self):
        """ The color-only "elected" status has text: Elected, then Previously elected """
        active = Mock(isWinner=False)
        winner = Mock(isWinner=True)
        self.assertEqual(self._statuses([active, winner, winner]),
                         ['', 'Elected', 'Previously elected'])

    def test_eliminated_is_marked_once_then_previously(self):
        """ Eliminated candidates have no data for the round: Eliminated, then Previously """
        active = Mock(isWinner=False)
        self.assertEqual(self._statuses([active, None, None]),
                         ['', 'Eliminated', 'Previously eliminated'])


class VisualizationMarkupTests(TestCase):
    """ Tests the screenreader-facing markup of the rendered pages """

    def setUp(self):
        TestHelpers.login(self.client)
        TestHelpers.setup_host_mocks(self)
        TestHelpers.get_multiwinner_upload_response(self.client)
        self.slug = TestHelpers.get_latest_upload().slug

    def tearDown(self):
        TestHelpers.logout(self.client)

    def _get(self, url):
        response = self.client.get(url)
        self.assertEqual(response.status_code, 200)
        return response.content.decode('utf-8')

    def test_visualize_page_landmarks_and_tabs(self):
        """ Skip link, main landmark, and the ARIA tabs pattern """
        content = self._get(reverse('visualize', args=(self.slug,)))

        self.assertIn('class="skip-link" href="#maincontent"', content)
        self.assertIn('<main id="maincontent" tabindex="-1">', content)

        self.assertIn('role="tablist"', content)
        self.assertEqual(content.count('role="presentation"'), 8)
        self.assertEqual(content.count('role="tab"'), 8)
        self.assertEqual(content.count('role="tabpanel"'), 8)
        self.assertIn('aria-controls="id-barchart"', content)
        self.assertIn('aria-labelledby="barchart-tab"', content)
        # The typo that used to break the label association
        self.assertNotIn('aria-labeledby', content)
        self.assertNotIn('aria-controls==', content)

    def test_narration_is_passed_to_the_charts(self):
        """ The narration is passed to JS for the charts' screenreader descriptions """
        content = self._get(reverse('visualize', args=(self.slug,)))
        self.assertNotIn('id="summary-tab"', content)
        self.assertIn('var narration = {"summary": "In this Multi-Winner Ranked Choice Voting '
                      'election, there were', content)

    def test_round_description_is_a_polite_live_region(self):
        """ The bar chart's description announces round changes without interrupting """
        content = self._get(reverse('visualize', args=(self.slug,)))
        self.assertIn('id="round-description-wrapper" class="round-description-wrapper" '
                      'role="status" aria-live="polite" aria-atomic="true"', content)
        self.assertIn('<button type="button" class="btn btn-link faq-link" onclick="showFaqs()">',
                      content)

    def test_tables_have_captions_and_status_text(self):
        """ Every table has a caption, and color-only statuses have hidden text """
        content = self._get(reverse('visualize', args=(self.slug,)))

        self.assertIn('<caption class="sr-only">Candidates eliminated and elected in each round',
                      content)
        self.assertIn('<caption class="sr-only">Round 1: what changed for each candidate',
                      content)
        self.assertIn("<caption class=\"sr-only\">Each candidate's votes in each round.", content)
        self.assertIn('<span class="sr-only">Elected</span>', content)
        self.assertIn('<span class="sr-only">Eliminated</span>', content)
        # The big number in each cell is no longer a heading
        self.assertNotIn('<h3 class="primaryLabel">', content)
        self.assertIn('<span class="primaryLabel">', content)

    def test_embedded_pages_have_alt_text_and_descriptions(self):
        """ The embedded views get the same treatment as the full page """
        base = reverse('visualizeEmbedded', args=(self.slug,))

        content = self._get(base + '?vistype=barchart-interactive')
        self.assertIn('alt="RCVis"', content)
        self.assertIn('aria-label="Open the full visualization in a new tab"', content)
        self.assertIn('var narration = ', content)

        content = self._get(base + '?vistype=pie')
        self.assertIn('id="pie-description" class="sr-only"', content)
        self.assertIn('aria-describedby="pie-description"', content)

        content = self._get(base + '?vistype=tabular-candidate-by-round')
        self.assertIn('<span class="sr-only">Elected</span>', content)

    def test_homepage_roadmap_reflects_accessibility_work(self):
        """ The roadmap no longer claims RCVis is not screenreader-friendly """
        content = self._get('/')
        self.assertNotIn('RCVis is not screenreader-friendly', content)
        self.assertIn('described for screenreaders', content)
