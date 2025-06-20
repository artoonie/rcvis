"""
Testing the FAQ Generator
"""

import json
import re

from collections import Counter
from django.test import TestCase
from mock import Mock

from common.testUtils import TestHelpers
from common.viewUtils import DefaultConfig
from visualizer.descriptors import faq
from visualizer.descriptors.roundDescriber import Describer
from visualizer.graph.graphCreator import make_graph_with_file
from visualizer.graph.graphSummary import RoundInfo
from visualizer.models import TextForWinner
from visualizer.tests import filenames


class FAQTests(TestCase):
    """ Tests faq.py """

    def setUp(self):
        TestHelpers.setup_host_mocks(self)
        self.config = DefaultConfig()

    def test_single_round(self):
        """ Basic single-round test ensuring the right classes are active each round """
        with open(filenames.ONE_ROUND, 'r', encoding='utf-8') as f:
            graph = make_graph_with_file(f, False)
        args = (graph, self.config)
        self.assertTrue(faq.WhatHappeningSingleWinner(*args).is_active(0))
        self.assertFalse(faq.WhatHappeningMultiWinner(*args).is_active(0))
        self.assertFalse(faq.WhatHappeningPreferentialBlockWinner(*args).is_active(0))

        self.assertFalse(faq.WhyEliminated(*args).is_active(0))
        self.assertFalse(faq.WhyBatchEliminated(*args).is_active(0))
        self.assertTrue(faq.WhySingleWinner(*args).is_active(0))
        self.assertFalse(faq.WhyMultiWinner(*args).is_active(0))
        self.assertFalse(faq.WhyThreshold(*args).is_active(0))
        self.assertFalse(faq.WhySurplusTransfer(*args).is_active(0))

        # There is one round, with two FAQs
        allDescriptions = faq.FAQGenerator(*args).describe_all_rounds()
        assert len(allDescriptions[0]) == 2

    def test_multiwinner(self):
        """ More extensive tests with the multiwinner FAQs, checking word-for-word accuracy """
        with open(filenames.MULTIWINNER, 'r', encoding='utf-8') as f:
            graph = make_graph_with_file(f, False)
        args = (graph, self.config)

        self.assertFalse(faq.WhatHappeningSingleWinner(*args).is_active(0))
        self.assertTrue(faq.WhatHappeningMultiWinner(*args).is_active(0))
        self.assertFalse(faq.WhatHappeningPreferentialBlockWinner(*args).is_active(0))

        self.assertFalse(faq.WhyEliminated(*args).is_active(0))
        self.assertTrue(faq.WhyEliminated(*args).is_active(1))

        self.assertFalse(faq.WhyBatchEliminated(*args).is_active(0))

        # Multi-winner on rounds 2 and 4
        self.assertFalse(faq.WhySingleWinner(*args).is_active(0))
        self.assertFalse(faq.WhyMultiWinner(*args).is_active(0))
        self.assertTrue(faq.WhyMultiWinner(*args).is_active(1))
        self.assertTrue(faq.WhyMultiWinner(*args).is_active(3))

        # Threshold on rounds 2 and 4
        self.assertTrue(faq.WhyThreshold(*args).is_active(1))
        self.assertTrue(faq.WhyThreshold(*args).is_active(3))

        # Surplus on rounds 3 and 5
        self.assertFalse(faq.WhySurplusTransfer(*args).is_active(0))
        self.assertTrue(faq.WhySurplusTransfer(*args).is_active(2))
        self.assertTrue(faq.WhySurplusTransfer(*args).is_active(4))

        # Final check: make sure text matches
        allDescriptions = faq.FAQGenerator(*args).describe_all_rounds()
        with open('testData/expected-multiwinner-faqs.json', 'r', encoding='utf-8') as f:
            expectedData = json.load(f)
        self.assertEqual(allDescriptions, expectedData)

    def test_preferential_block(self):
        """ Basic single-round test ensuring the right classes are active each round """
        with open(filenames.ONE_ROUND, 'r', encoding='utf-8') as f:
            graph = make_graph_with_file(f, False)
        self.config.isPreferentialBlock = True
        args = (graph, self.config)
        self.assertFalse(faq.WhatHappeningSingleWinner(*args).is_active(0))
        self.assertFalse(faq.WhatHappeningMultiWinner(*args).is_active(0))
        self.assertTrue(faq.WhatHappeningPreferentialBlockWinner(*args).is_active(0))

        # There is one round, with two FAQs
        allDescriptions = faq.FAQGenerator(*args).describe_all_rounds()
        assert len(allDescriptions[0]) == 2

    def test_no_winners(self):
        """ Ensure the right thing is printed if there are no winners """
        def _make_mock_graph():
            mockGraph = Mock()
            summary = Mock()
            summary.numWinners = 0
            summary.numEliminated = 14

            # mock the round info - make sure to have active votes, otherwise SingleWinner
            # would not be shown because of it.
            roundInfo = RoundInfo(0)
            roundInfo.totalActiveVotes = 100
            summary.rounds = [roundInfo]

            mockGraph.summarize = lambda: summary
            return mockGraph

        mockGraph = _make_mock_graph()
        args = (mockGraph, self.config)

        self.assertFalse(faq.WhatHappeningMultiWinner(*args).is_active(0))

        singleWinner = faq.WhatHappeningSingleWinner(*args)
        self.assertTrue(singleWinner.is_active(0))
        assert singleWinner.get_answer(0).endswith(
            "The rounds continue until one candidate wins by earning more than "
            "50% of the votes.")

    def test_excluded_winner(self):
        """ Ensure all descriptors work without crashing with no winner """
        with open(filenames.THREE_ROUND, 'r', encoding='utf-8') as f:
            graph = make_graph_with_file(f, excludeFinalWinnerAndEliminatedCandidate=True)
        self.assertEqual(graph.summarize().numWinners, 0)
        allDescriptions = faq.FAQGenerator(graph, self.config).describe_all_rounds()
        assert len(allDescriptions) == 3
        assert len(allDescriptions[0]) == 1

    def test_batch_elim(self):
        """ Test batch elimination works """
        with open(filenames.BATCH_ELIMINATION, 'r', encoding='utf-8') as f:
            graph = make_graph_with_file(f, False)
        self.assertTrue(faq.WhyBatchEliminated(graph, self.config).is_active(1))

    def test_zero_votes(self):
        """ Test zero-vote elections work """
        with open(filenames.ZERO_VOTE_ELECTION, 'r', encoding='utf-8') as f:
            graph = make_graph_with_file(f, False)

        # The basic summary is confusing. Skip it.
        self.assertFalse(faq.WhatHappeningSingleWinner(graph, self.config).is_active(0))

        # Only the No Votes FAQ shows up.
        self.assertTrue(faq.WhyNoVotes(graph, self.config).is_active(0))

    def test_no_threshold(self):
        """
        Ensure that no-threshold elections never print anything related to thresholds.
        This is quite aggressive - ensure "None" never appears in any text.
        """
        with open(filenames.NO_THRESHOLD, 'r', encoding='utf-8') as f:
            graph = make_graph_with_file(f, False)

        allRoundsQA = faq.FAQGenerator(graph, self.config).describe_all_rounds()
        for roundList in allRoundsQA:
            for desc in roundList:
                self.assertNotIn('None', desc['question'])
                self.assertNotIn('None', desc['answer'])

        describer = Describer(graph, self.config, False)

        # check initial summary
        initialSummary = describer.describe_initial_summary(False)
        self.assertNotIn('None', initialSummary)

        # check each round
        allRoundsDesc = describer.describe_all_rounds()
        for descList in allRoundsDesc:
            for desc in descList:
                assert isinstance(desc['description'], str)
                self.assertNotIn('None', desc['description'])

        # explicitly validate last round description
        self.assertEqual(
            allRoundsDesc[-1][2]['description'],
            "Vanilla and Blackberry were elected. ")

    def test_text_for_winner_has_no_elected(self):
        """
        Test that the word "elected" never appears when the TextForWinner is not set to ELECTED
        """
        with open(filenames.MULTIWINNER, 'r', encoding='utf-8') as f:
            graph = make_graph_with_file(f, False)

        searchFor = r'Elected| elected'  # match both elected and Elected

        # Find all uses of "elected" or "Elected". Store them to look at later.
        allRoundsQA = faq.FAQGenerator(graph, self.config).describe_all_rounds()
        indicesWhereElectedFound = []
        for round_i, roundList in enumerate(allRoundsQA):
            for desc_i, desc in enumerate(roundList):
                if 'lected' in desc['question']:
                    indicesWhereElectedFound.append((round_i, desc_i, 'question'))
                if 'lected' in desc['answer']:
                    indicesWhereElectedFound.append((round_i, desc_i, 'answer'))
        # Make sure we didn't accidentally change anything - update this value as needed.
        self.assertEqual(len(indicesWhereElectedFound), 9)

        # Change from TextForWinner.ELECTED to TextForWinner.WON
        self.config.textForWinner = TextForWinner.WON
        allRoundsQA = faq.FAQGenerator(graph, self.config).describe_all_rounds()

        # Look at the same indices. They must now NOT use the word.
        for round_i, desc_i, qOrA in indicesWhereElectedFound:
            self.assertIsNone(re.search(searchFor, allRoundsQA[round_i][desc_i][qOrA]))

    def test_text_for_winner_multiwinner_text(self):
        """
        Simple checks when TextForWinner set to WON
        """
        with open(filenames.MULTIWINNER, 'r', encoding='utf-8') as f:
            graph = make_graph_with_file(f, False)

        # Set to TextForWinner.WON
        self.config.textForWinner = TextForWinner.WON
        answer = faq.WhatHappeningMultiWinner(graph, self.config).get_answer(0)
        self.assertIn("2 candidates have won", answer)

        # Set to TextForWinner.PRIMARY
        self.config.textForWinner = TextForWinner.PRIMARY
        answer = faq.WhatHappeningMultiWinner(graph, self.config).get_answer(0)
        self.assertIn("2 candidates have advanced to the general", answer)

        # Set to TextForWinner.LEAD
        self.config.textForWinner = TextForWinner.LEAD
        answer = faq.WhatHappeningMultiWinner(graph, self.config).get_answer(0)
        self.assertIn("2 candidates are in the lead", answer)

    def test_text_for_winner_in_summaries(self):
        """
        Check TextForWinner in the round summaries and overall summary
        """
        with open(filenames.NO_THRESHOLD, 'r', encoding='utf-8') as f:
            graph = make_graph_with_file(f, False)

        self.config.textForWinner = TextForWinner.WON
        describer = Describer(graph, self.config, False)

        searchFor = 'lected'  # match both elected and Elected

        # check initial summary
        initialSummary = describer.describe_initial_summary(False)
        self.assertNotIn(searchFor, initialSummary)

        # check each round
        allRoundsDesc = describer.describe_all_rounds()
        for descList in allRoundsDesc:
            for desc in descList:
                assert isinstance(desc['description'], str)
                self.assertNotIn(searchFor, desc['description'])

        # final round shouldn't have any threshold logic
        desc = allRoundsDesc[-1][-1]
        self.assertNotIn("is among the top vote-getters", desc['description'])
        self.assertNotIn("reached the threshold", desc['description'])

    def test_winner_didnt_meet_threshold(self):
        """
        If a winner doesn't meet the threshold, don't claim they did
        """
        tf = TestHelpers.modify_json_with(filenames.THREE_ROUND,
                                          lambda d: d['config'].update({'threshold': 9999}))
        with open(tf.name, 'r', encoding='utf-8') as f:
            graph = make_graph_with_file(f, False)

        describer = Describer(graph, self.config, False)
        allRoundsDesc = describer.describe_all_rounds()

        # final round shouldn't just say they were elected, not that they reached the threshold
        desc = allRoundsDesc[-1][-1]
        self.assertIn("is among the top vote-getters", desc['description'])
        self.assertNotIn("reached the threshold", desc['description'])

    def test_describer_consolidates_events(self):
        """Describer should always consolidate events, no more than 1 record per verb"""
        with open(filenames.RESIDUAL_SURPLUS_MAIN, 'r', encoding='utf-8') as f:
            graph = make_graph_with_file(f, False)
        allRounds = Describer(graph, self.config, False).describe_all_rounds()
        for electionRound in allRounds:
            verbCounter = Counter([r['verb'] for r in electionRound])
            self.assertTrue([verb <= 1 for verb in verbCounter.values()])
