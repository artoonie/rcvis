"""
Tests for the graphToRCtab converter that builds RCTab-compatible JSON
from processed Graph objects for the pie chart component.
"""

from django.test import TestCase

from visualizer import common
from visualizer.graph.graphCreator import make_graph_with_file
from visualizer.pie.graphToRCtab import graph_to_rctab_json, _stringify
from visualizer.tests import filenames


class StringifyTests(TestCase):
    """ Tests for the _stringify helper """

    def test_integer_unchanged(self):
        self.assertEqual(_stringify(42), "42")

    def test_integer_float_drops_decimal(self):
        self.assertEqual(_stringify(42.0), "42")

    def test_actual_float_kept(self):
        self.assertEqual(_stringify(42.5), "42.5")

    def test_zero(self):
        self.assertEqual(_stringify(0), "0")

    def test_zero_float(self):
        self.assertEqual(_stringify(0.0), "0")

    def test_string_passthrough(self):
        """ RCTab JSON sometimes has string values already """
        self.assertEqual(_stringify("100"), "100")


class OneRoundTests(TestCase):
    """ Tests with a single-round election """

    def setUp(self):
        with open(filenames.ONE_ROUND, 'r', encoding='utf-8') as f:
            self.graph = make_graph_with_file(f, excludeFinalWinnerAndEliminatedCandidate=False)
        self.result = graph_to_rctab_json(self.graph)

    def test_top_level_structure(self):
        self.assertIn('config', self.result)
        self.assertIn('results', self.result)
        self.assertIn('summary', self.result)
        self.assertIn('jsonFormatVersion', self.result)

    def test_single_round(self):
        self.assertEqual(len(self.result['results']), 1)

    def test_round_has_required_fields(self):
        rnd = self.result['results'][0]
        self.assertIn('round', rnd)
        self.assertIn('tally', rnd)
        self.assertIn('tallyResults', rnd)
        self.assertIn('inactiveBallots', rnd)
        self.assertIn('threshold', rnd)
        self.assertEqual(rnd['round'], 1)

    def test_tally_has_candidates(self):
        tally = self.result['results'][0]['tally']
        self.assertGreater(len(tally), 0)
        # All tally values should be strings (RCTab convention)
        for val in tally.values():
            self.assertIsInstance(val, str)

    def test_winner_elected(self):
        """ The single-round election should have an elected candidate """
        tally_results = self.result['results'][0]['tallyResults']
        elected = [tr for tr in tally_results if 'elected' in tr]
        self.assertGreater(len(elected), 0)

    def test_config_has_contest(self):
        self.assertIn('contest', self.result['config'])
        self.assertIsInstance(self.result['config']['contest'], str)
        self.assertGreater(len(self.result['config']['contest']), 0)


class ThreeRoundTests(TestCase):
    """ Tests with a three-round single-winner election (medium-rcvis.json) """

    def setUp(self):
        with open(filenames.THREE_ROUND, 'r', encoding='utf-8') as f:
            self.graph = make_graph_with_file(f, excludeFinalWinnerAndEliminatedCandidate=False)
        self.result = graph_to_rctab_json(self.graph)

    def test_round_count(self):
        self.assertEqual(len(self.result['results']), 3)

    def test_rounds_numbered_sequentially(self):
        for i, rnd in enumerate(self.result['results']):
            self.assertEqual(rnd['round'], i + 1)

    def test_first_round_has_all_candidates(self):
        """ The first round's tally should include all candidates from the graph """
        graph_candidates = {c.name for c in self.graph.candidates}
        first_tally = set(self.result['results'][0]['tally'].keys())
        self.assertTrue(graph_candidates.issubset(first_tally),
                        f"Missing candidates: {graph_candidates - first_tally}")

    def test_eliminated_candidates_removed_in_later_rounds(self):
        """ Eliminated candidates should not appear in subsequent rounds' tallies """
        # Banana is eliminated in round 1, so it should not be in round 2 or 3
        round_2_tally = set(self.result['results'][1]['tally'].keys())
        round_3_tally = set(self.result['results'][2]['tally'].keys())
        self.assertNotIn('Banana', round_2_tally)
        self.assertNotIn('Banana', round_3_tally)

    def test_eliminations_present(self):
        """ Earlier rounds should have eliminations """
        all_eliminated = []
        for rnd in self.result['results']:
            for tr in rnd['tallyResults']:
                if 'eliminated' in tr:
                    all_eliminated.append(tr['eliminated'])
        self.assertGreater(len(all_eliminated), 0)

    def test_final_round_has_winner(self):
        last_round = self.result['results'][-1]
        elected = [tr for tr in last_round['tallyResults'] if 'elected' in tr]
        self.assertEqual(len(elected), 1)

    def test_transfers_have_string_values(self):
        """ All transfer values should be strings (RCTab convention) """
        for rnd in self.result['results']:
            for tr in rnd['tallyResults']:
                if 'transfers' in tr:
                    for val in tr['transfers'].values():
                        self.assertIsInstance(val, str)

    def test_threshold_is_string(self):
        for rnd in self.result['results']:
            self.assertIsInstance(rnd['threshold'], str)

    def test_summary_fields(self):
        summary = self.result['summary']
        self.assertIn('numCandidates', summary)
        self.assertIn('numWinners', summary)
        self.assertIn('totalNumBallots', summary)
        self.assertIn('finalThreshold', summary)


class MultwinnerTests(TestCase):
    """ Tests with a multi-winner surplus election (macomb-multiwinner-surplus.json) """

    def setUp(self):
        with open(filenames.MULTIWINNER, 'r', encoding='utf-8') as f:
            self.graph = make_graph_with_file(f, excludeFinalWinnerAndEliminatedCandidate=False)
        self.result = graph_to_rctab_json(self.graph)

    def test_round_count(self):
        self.assertEqual(len(self.result['results']), 5)

    def test_multiple_winners(self):
        """ Multi-winner election should have multiple elected candidates """
        all_elected = []
        for rnd in self.result['results']:
            for tr in rnd['tallyResults']:
                if 'elected' in tr:
                    all_elected.append(tr['elected'])
        self.assertGreater(len(all_elected), 1)

    def test_elected_have_transfers(self):
        """ Elected candidates with surplus should have transfer entries """
        for rnd in self.result['results']:
            for tr in rnd['tallyResults']:
                if 'elected' in tr:
                    self.assertIn('transfers', tr)

    def test_num_candidates_excludes_pseudocandidates(self):
        """ numCandidates in summary should not count Inactive Ballots or Residual Surplus """
        num = self.result['summary']['numCandidates']
        inactive_names = {common.INACTIVE_TEXT, common.RESIDUAL_SURPLUS_TEXT}
        real_count = sum(1 for c in self.graph.candidates if c.name not in inactive_names)
        self.assertEqual(num, real_count)


class InactiveBallotTests(TestCase):
    """ Tests with a multiwinner election that has nonzero exhausted votes """

    def setUp(self):
        # Multiwinner election has Inactive Ballots count > 0 in round 5
        with open(filenames.MULTIWINNER, 'r', encoding='utf-8') as f:
            self.graph = make_graph_with_file(f, excludeFinalWinnerAndEliminatedCandidate=False)
        self.result = graph_to_rctab_json(self.graph)

    def test_inactive_ballots_absent_when_zero(self):
        """ Early rounds with zero exhausted votes should have empty inactiveBallots """
        first_round = self.result['results'][0]
        inactive = first_round['inactiveBallots']
        self.assertNotIn('exhaustedChoices', inactive)

    def test_inactive_ballots_present_when_nonzero(self):
        """ Round 5 has nonzero exhausted votes and should populate exhaustedChoices """
        last_round = self.result['results'][-1]
        inactive = last_round['inactiveBallots']
        self.assertIn('exhaustedChoices', inactive)
        self.assertGreater(float(inactive['exhaustedChoices']), 0)


class NoThresholdTests(TestCase):
    """ Tests with an election that has no threshold in its config """

    def setUp(self):
        with open(filenames.NO_THRESHOLD, 'r', encoding='utf-8') as f:
            self.graph = make_graph_with_file(f, excludeFinalWinnerAndEliminatedCandidate=False)
        self.result = graph_to_rctab_json(self.graph)

    def test_threshold_defaults_to_zero(self):
        """ When no threshold, converter should output "0" rather than crash """
        for rnd in self.result['results']:
            self.assertIsInstance(rnd['threshold'], str)

    def test_final_threshold_in_summary(self):
        self.assertIn('finalThreshold', self.result['summary'])


class ExcludeFinalWinnerTests(TestCase):
    """ Tests that excludeFinalWinnerAndEliminatedCandidate affects the output.

        The flag removes isWinner/isEliminated flags from the Graph's nodes,
        but the WinTransfer/Elimination objects remain in transfersPerRound.
        The converter still produces tallyResults entries — the flag's effect
        is on visual markers (gold rings, etc.), not on transfer data.
        The pie chart component handles suppression separately via its own
        excludeFinalWinnerAndEliminatedCandidate prop. """

    def test_with_exclude_flag_nodes_not_marked(self):
        """ With the flag, the final round's nodes should have no winner/eliminated flags """
        with open(filenames.THREE_ROUND, 'r', encoding='utf-8') as f:
            graph = make_graph_with_file(f, excludeFinalWinnerAndEliminatedCandidate=True)

        last_round_nodes = graph.nodesPerRound[-1]
        for candidate, node in last_round_nodes.items():
            self.assertFalse(node.isWinner,
                             f"{candidate.name} should not be marked as winner")
            self.assertFalse(node.isEliminated,
                             f"{candidate.name} should not be marked as eliminated")

    def test_with_exclude_flag_transfers_preserved(self):
        """ The converter still outputs tallyResults even with the flag,
            because transfersPerRound is not affected by the flag """
        with open(filenames.THREE_ROUND, 'r', encoding='utf-8') as f:
            graph = make_graph_with_file(f, excludeFinalWinnerAndEliminatedCandidate=True)
        result = graph_to_rctab_json(graph)

        last_round = result['results'][-1]
        # WinTransfer is still present, so elected entry still appears
        elected = [tr for tr in last_round['tallyResults'] if 'elected' in tr]
        self.assertEqual(len(elected), 1)

    def test_without_exclude_flag(self):
        """ Without the flag, the final round should have an elected candidate """
        with open(filenames.THREE_ROUND, 'r', encoding='utf-8') as f:
            graph = make_graph_with_file(f, excludeFinalWinnerAndEliminatedCandidate=False)
        result = graph_to_rctab_json(graph)

        last_round = result['results'][-1]
        elected = [tr for tr in last_round['tallyResults'] if 'elected' in tr]
        self.assertEqual(len(elected), 1)
