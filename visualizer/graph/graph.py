""" Data that holds the entire Graph, as well as utilities for parsers to interactively
    build the graph. You probably don't want to use this directly, but instead,
    want to use the GraphSummary which is more user-friendly.
    To get the summary, use graph.summarize(). """

import datetime

from . import rcvResult
from .graphSummary import GraphSummary


#pylint: disable=too-few-public-methods
class LinkData:
    """ Data about a single "link": a transfer from the source to target """

    def __init__(self, source, target, value, color):
        self.source = source
        self.target = target
        self.value = value
        self.color = color


class NodeData:
    """ Data about a single "node": a candidate in a single round """
    #pylint: disable=too-many-arguments

    def __init__(self, item, label, color, count, roundNum):
        self.item = item
        self.label = label
        self.color = color
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


#pylint: disable=too-many-instance-attributes
class Graph:
    """ Data about the entire graph, including nodes and links between thhem """

    def __init__(self, title, threshold):
        self.title = title.strip()
        self.threshold = threshold
        self.nodes = []
        self.links = []
        self.dateString = ""

        self.numRounds = 1
        self.nodesPerRound = [{}]
        self.winnersSoFar = set()

        self.summary = None

    def summarize(self):
        """ Returns the graph summary - or creates it if it hasn't been requested yet """
        if self.summary is None:
            self.summary = GraphSummary(self)
        return self.summary

    def set_date(self, date):
        """ Sets the date of this election """
        assert isinstance(date, datetime.datetime)
        self.dateString = datetime.date.strftime(date, format='%A, %B %-d, %Y')

    def _curr_round_nodes(self):
        """ Returns how many nodes are in the "current round".
            Only meaningful while graph creation is in progress. """
        return self.nodesPerRound[self.numRounds - 1]

    def _prev_round_nodes(self):
        """ Returns how many nodes are in the "previous round".
            Only meaningful while graph creation is in progress. """
        return self.nodesPerRound[self.numRounds - 2]

    def _add_connection(self, sourceNode, targetNode, value):
        """ Adds a Link between the source and target.
            Only meaningful while graph creation is in progress. """
        white = rcvResult.Color([1] * 3)
        if sourceNode.item == targetNode.item:
            alpha = .2
        else:
            alpha = .8
        faded = rcvResult.Color.interpolate(
            white, sourceNode.item.color, alpha)
        color = faded.as_hex()
        link = LinkData(sourceNode, targetNode, value, color)
        self.links.append(link)

    def add_node(self, item, count):
        """ Creates a node with the given count.
            Only meaningful while graph creation is in progress. """
        label = str(item.name)
        color = item.color.as_hex()
        node = NodeData(item, label, color, count, self.numRounds - 1)
        self.nodes.append(node)

        self._curr_round_nodes()[item] = node

        return node

    def mark_next_round(self):
        """ Marks the start of a new round.
            Only meaningful while graph creation is in progress. """
        self.nodesPerRound.append({})
        self.numRounds += 1

    def add_round(self, rnd, isLastRound):
        """ Adds and buildds info about theh next round.
            Only meaningful while graph creation is in progress. """
        def get_previous_round_winners():
            self.winnersSoFar.update(rnd.winners)

        def get_passthrough_votes():
            eliminatedItemsSet = {e.item for e in rnd.transfers
                                  if isinstance(e, rcvResult.Elimination)}
            allItemVotes = {}
            for item in nodesPrevRound:
                if item in eliminatedItemsSet:
                    continue
                votes = nodesPrevRound[item].count
                for event in rnd.transfers:
                    # If votes are being transferred to us:
                    if item in event.transfers:
                        votes += event.transfers[item]
                    # If votes are being transferred away, but we're not
                    # eliminated:
                    if event.item == item:
                        votes -= sum(event.transfers.values())
                allItemVotes[item] = votes
            for item, votes in allItemVotes.items():
                nodesThisRound[item] = self.add_node(item, votes)
                if item in self.winnersSoFar:
                    nodesThisRound[item].mark_winner()

                # Minimum of: everything we had in the previous round, or the number
                # of votes in the next round that are not transferred away
                votesTransferredToSelf = min(votes, nodesPrevRound[item].count)
                self._add_connection(sourceNode=nodesPrevRound[item],
                                     targetNode=nodesThisRound[item],
                                     value=votesTransferredToSelf)

        def mark_winners_for_last_round():
            nodesLastRound = self._curr_round_nodes()
            for item in rnd.winners:
                nodesLastRound[item].mark_winner()

        def get_transfer_votes():
            for event in rnd.transfers:
                if isinstance(event, rcvResult.Elimination):
                    nodesPrevRound[event.item].mark_eliminated()
                for transferItem, transferNumber in event.transfers.items():
                    sourceNode = nodesPrevRound[event.item]
                    targetNode = nodesThisRound[transferItem]
                    self._add_connection(sourceNode=sourceNode,
                                         targetNode=targetNode,
                                         value=transferNumber)

        get_previous_round_winners()

        if not isLastRound:
            self.mark_next_round()
            nodesThisRound = {}
            nodesPrevRound = self._prev_round_nodes()

            get_passthrough_votes()
            get_transfer_votes()
        else:
            # Last round shouldn't create info for extra rounds,
            # it should just mark what happened
            mark_winners_for_last_round()
