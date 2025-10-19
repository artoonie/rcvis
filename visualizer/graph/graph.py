""" Data that holds the entire Graph, as well as utilities for parsers to interactively
    build the graph. You probably don't want to use this directly, but instead,
    want to use the GraphSummary which is more user-friendly.
    To get the summary, use graph.summarize(). """

import datetime

from visualizer.graph import rcvResult
from visualizer.graph.graphSummary import GraphSummary


# pylint: disable=too-few-public-methods
class LinkData:
    """ Data about a single "link": a transfer from the source to target """

    def __init__(self, source, target, value):
        self.source = source
        self.target = target
        self.value = value


class NodeData:
    """ Data about a single "node": a candidate in a single round """
    # pylint: disable=too-many-arguments

    def __init__(self, candidate, label, count, roundNum):
        self.candidate = candidate
        self.label = label
        self.count = count
        self.roundNum = roundNum
        self.isWinner = False
        self.isEliminated = False

    def mark_eliminated(self):
        """ Marks the given node as the node in which this candidate was eliminated """
        self.isEliminated = True

    def mark_winner(self):
        """ Marks the given node as the node in which this candidate won """
        self.isWinner = True


# pylint: disable=too-many-instance-attributes
class Graph:
    """ Data about the entire graph, including nodes and links between thhem """

    def __init__(self, title):
        self.title = title.strip()
        self.nodes = []
        self.links = []

        # optional
        self.dateString = ""
        self.threshold = None

        # This must be set manually by calling set_elimination_order
        self.eliminationOrder = None

        # Used while building the graph only
        self.nodesPerRound = []
        self.transfersPerRound = []
        self.winnersSoFar = set()

        # This is reset if set_elimination_order is changed
        self.summary = None

    @property
    def numRounds(self):
        """ Returns the number of rounds """
        return len(self.nodesPerRound)

    @property
    def candidates(self):
        """ Returns all candidates present in this graph """
        return self.nodesPerRound[0].keys()

    def summarize(self):
        """ Returns the graph summary - or creates it if it hasn't been requested yet """
        if self.summary is None:
            self.summary = GraphSummary(self)
        return self.summary

    def get_candidates_for_names(self, listOfNames):
        """ Given a list of all names, returns the corresponding Candidate for each name """
        allCandidates = list(set(n.candidate for n in self.nodes))
        return sorted(allCandidates, key=lambda candidate: -listOfNames.index(candidate.name))

    def set_elimination_order(self, orderedCandidates):
        """
        Given a list of Candidates, sets the elimination erder.
        Does no validation that the given order is complete, but will likely throw
        several errors here or elsewhere if you pass bad data.
        """
        self.eliminationOrder = orderedCandidates
        self.nodes = sorted(self.nodes, key=lambda x: -orderedCandidates.index(x.candidate))

        # Reset summary: it's no longer accurate
        self.summary = None

    def set_date(self, date):
        """ Sets the date of this election """
        assert isinstance(date, datetime.datetime)
        self.dateString = datetime.date.strftime(date, format='%A, %B %-d, %Y')

    def set_threshold(self, threshold):
        """ Sets the threshold for this election """
        if isinstance(threshold, str):
            threshold = float(threshold)

        self.threshold = threshold

    def _add_connection(self, sourceNode, targetNode, value):
        """ Adds a Link between the source and target.
            Only meaningful while graph creation is in progress. """
        link = LinkData(sourceNode, targetNode, value)
        self.links.append(link)

    def create_node(self, candidate, count, round_i):
        """ Creates a node with the given count.
            Only meaningful while graph creation is in progress. """
        label = str(candidate.name)
        node = NodeData(candidate, label, count, round_i)
        self.nodes.append(node)

        return node

    def _ensure_no_last_round_transfers(self):
        for transfer in self.transfersPerRound[-1]:
            assert len(transfer.transfersByCandidate) == 0

    def _compute_transfers(self):
        """ Second pass: after all nodes are created, compute the edges """
        # No transfers allowed on last round
        self._ensure_no_last_round_transfers()

        # For every other round:
        for i in range(self.numRounds - 1):
            nodesThisRound = self.nodesPerRound[i]
            nodesNextRound = self.nodesPerRound[i + 1]
            transfers = self.transfersPerRound[i]

            # Compute transfers to other candidates on each round
            totalVotesTransferredFrom = {}
            for transfer in transfers:
                sourceNode = nodesThisRound[transfer.candidate]
                totalVotesTransferredFrom[transfer.candidate] = 0

                # All of the transfers from sourceNode to other nodes
                for targetCandidate, count in transfer.transfersByCandidate.items():
                    assert targetCandidate in nodesNextRound
                    targetNode = nodesNextRound[targetCandidate]
                    self._add_connection(sourceNode=sourceNode,
                                         targetNode=targetNode,
                                         value=count)
                    totalVotesTransferredFrom[transfer.candidate] += count

            # Compute transfers to same candidate by computing untransferred votes
            for candidate, node in nodesThisRound.items():
                if candidate not in nodesNextRound:
                    continue
                votesTransferredToOthers = totalVotesTransferredFrom.get(candidate, 0)
                votesTransferredToSelf = node.count - votesTransferredToOthers
                self._add_connection(sourceNode=node,
                                     targetNode=nodesNextRound[candidate],
                                     value=votesTransferredToSelf)

    def create_graph_from_rounds(self, rounds):
        """ Generates a graph with nodes and edges, where the nodes are
            a single Candidate at a specific Round, and the edges are Transfers """
        for round_i, rnd in enumerate(rounds):
            self.winnersSoFar.update(rnd.winners)

            eliminatedThisRound = {e.candidate for e in rnd.transfers
                                   if isinstance(e, rcvResult.Elimination)}

            nodesThisRound = {}
            for candidate, votes in rnd.candidatesToVotes.items():
                node = self.create_node(candidate, votes, round_i)
                if candidate in self.winnersSoFar:
                    node.mark_winner()
                if candidate in eliminatedThisRound:
                    node.mark_eliminated()
                nodesThisRound[candidate] = node

            self.nodesPerRound.append(nodesThisRound)
            self.transfersPerRound.append(rnd.transfers)

        self._compute_transfers()
