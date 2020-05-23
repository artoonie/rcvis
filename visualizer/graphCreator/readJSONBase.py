import json

from visualizer import common
from . import rcvResult


class JSONReaderBase(object):
    def __init__(self, fileObj):
        self.parseJsonData(json.load(fileObj))
        self.setEliminationOrder(self.rounds, self.items)

    """ Override this and set self.graph and self.rounds and self.items:

        self.graph is a Graph object which is partially initialized (TODO how partially?)
        self.rounds is a list of Round objects
        self.items is a list of Item objects
        """

    def readJson(fileObj):
        assert False

    def getGraph(self):
        return self.graph

    def getRounds(self):
        return self.rounds

    def setEliminationOrder(self, rounds, items):
        eliminationOrder = []
        itemsRemaining = set(items)
        for round in rounds:
            for elimination in round.transfers:
                if not isinstance(elimination, rcvResult.Elimination):
                    continue
                eliminationOrder.append(elimination.item)
                itemsRemaining.remove(elimination.item)

        # Winners are added last
        winners = []
        for round in rounds:
            for winner in round.winners:
                winners.append(winner)
                itemsRemaining.remove(winner)
        winners = reversed(winners)

        eliminationOrder.extend(itemsRemaining)
        eliminationOrder.extend(winners)

        # Place "residual surplus" and "inactive ballots" at the end
        def moveToFront(candidateName):
            try:
                moveToFrontIndex = [
                    e.name for e in eliminationOrder].index(candidateName)
                if moveToFrontIndex:
                    eliminationOrder.insert(
                        0, eliminationOrder.pop(moveToFrontIndex))
            except ValueError:
                # not every election has these two
                pass

        moveToFront(common.residualSurplusText)
        moveToFront(common.inactiveText)

        self.eliminationOrder = eliminationOrder

    def getEliminationOrder(self):
        return self.eliminationOrder
