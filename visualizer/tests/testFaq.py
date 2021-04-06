"""
Testing the FAQ Generator
"""

import json

from django.test import TestCase
from mock import Mock

from common.testUtils import TestHelpers
from visualizer.descriptors import faq
from visualizer.graph.graphCreator import make_graph_with_file
from visualizer.tests import filenames


class SimpleTests(TestCase):
    """ Tests faq.py """

    def setUp(self):
        TestHelpers.setup_host_mocks(self)

    def test_single_round(self):
        """ Basic single-round test ensuring the right classes are active each round """
        with open(filenames.ONE_ROUND, 'r') as f:
            graph = make_graph_with_file(f, False)
        self.assertTrue(faq.WhatHappeningSingleWinner(graph).is_active(0))
        self.assertFalse(faq.WhatHappeningMultiWinner(graph).is_active(0))
        self.assertFalse(faq.WhyEliminated(graph).is_active(0))
        self.assertFalse(faq.WhyBatchEliminated(graph).is_active(0))
        self.assertTrue(faq.WhySingleWinner(graph).is_active(0))
        self.assertFalse(faq.WhyMultiWinner(graph).is_active(0))
        self.assertFalse(faq.WhyThreshold(graph).is_active(0))
        self.assertFalse(faq.WhySurplusTransfer(graph).is_active(0))

        # There is one round, with two FAQs
        allDescriptions = faq.FAQGenerator(graph).describe_all_rounds()
        assert len(allDescriptions[0]) == 2

    def test_multiwinner(self):
        with open(filenames.MULTIWINNER, 'r') as f:
            graph = make_graph_with_file(f, False)

        self.assertFalse(faq.WhatHappeningSingleWinner(graph).is_active(0))
        self.assertTrue(faq.WhatHappeningMultiWinner(graph).is_active(0))

        self.assertFalse(faq.WhyEliminated(graph).is_active(0))
        self.assertTrue(faq.WhyEliminated(graph).is_active(1))

        self.assertFalse(faq.WhyBatchEliminated(graph).is_active(0))

        # Multi-winner on rounds 2 and 4
        self.assertFalse(faq.WhySingleWinner(graph).is_active(0))
        self.assertFalse(faq.WhyMultiWinner(graph).is_active(0))
        self.assertTrue(faq.WhyMultiWinner(graph).is_active(1))
        self.assertTrue(faq.WhyMultiWinner(graph).is_active(3))

        # Threshold on rounds 2 and 4
        self.assertTrue(faq.WhyThreshold(graph).is_active(1))
        self.assertTrue(faq.WhyThreshold(graph).is_active(3))

        # Surplus on rounds 3 and 5
        self.assertFalse(faq.WhySurplusTransfer(graph).is_active(0))
        self.assertTrue(faq.WhySurplusTransfer(graph).is_active(2))
        self.assertTrue(faq.WhySurplusTransfer(graph).is_active(4))

        # Final check: make sure text matches
        allDescriptions = faq.FAQGenerator(graph).describe_all_rounds()
        with open('testData/expected-multiwinner-faqs.json', 'r') as f:
            expectedData = json.load(f)
        self.assertEqual(allDescriptions, expectedData)

    def test_no_winners(self):
        """ Ensure the right thing is printed if there are no winners """
        mockGraph = Mock()
        summary = Mock()
        summary.numWinners = 0
        summary.numEliminated = 14
        mockGraph.summarize = lambda: summary

        self.assertFalse(faq.WhatHappeningMultiWinner(mockGraph).is_active(0))

        singleWinner = faq.WhatHappeningSingleWinner(mockGraph)
        self.assertTrue(singleWinner.is_active(0))
        assert singleWinner.get_answer(0).endswith(
            "The 14 lowest-performing candidates were eliminated in succession.")

    def test_excluded_winner(self):
        """ Ensure all descriptors work without crashing with no winner """
        with open(filenames.THREE_ROUND, 'r') as f:
            graph = make_graph_with_file(f, excludeFinalWinnerAndEliminatedCandidate=True)
        self.assertEqual(graph.summarize().numWinners, 0)
        allDescriptions = faq.FAQGenerator(graph).describe_all_rounds()
        assert len(allDescriptions) == 3
        assert len(allDescriptions[0]) == 1

    def test_batch_elim(self):
        """ Test batch elimination works """
        with open(filenames.BATCH_ELIMINATION, 'r') as f:
            graph = make_graph_with_file(f, False)
        self.assertTrue(faq.WhyBatchEliminated(graph).is_active(1))