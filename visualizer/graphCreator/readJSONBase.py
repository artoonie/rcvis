import json

from . import rcvResult

class JSONReaderBase(object):
    def __init__(self, fileObj, config):
        self.parseJsonData(json.load(fileObj), config)
        self.setEliminationOrder(self.steps, self.items)

    """ Override this and set self.graph and self.steps and self.items:
        
        self.graph is a Graph object which is partially initialized (TODO how partially?)
        self.steps is a list of Step objects
        self.items is a list of Item objects
        """
    def readJson(fileObj, config):
        assert False

    def getGraph(self):
        return self.graph

    def getSteps(self):
        return self.steps

    def setEliminationOrder(self, steps, items):
        eliminationOrder = []
        itemsRemaining = set(items)
        for step in steps:
            for elimination in step.transfers:
                if not isinstance(elimination, rcvResult.Elimination):
                    continue
                eliminationOrder.append(elimination.item)
                itemsRemaining.remove(elimination.item)

        # Winners are added last
        winners = []
        for step in steps:
            for winner in step.winners:
                winners.append(winner)
                itemsRemaining.remove(winner)
        winners = reversed(winners)

        eliminationOrder.extend(itemsRemaining)
        eliminationOrder.extend(winners)

        # Handle "residual surplus" and "exhausted" which should always be at the end
        def moveToFront(candidateName):
            try:
                moveToFrontIndex = [e.name for e in eliminationOrder].index(candidateName)
                if moveToFrontIndex:
                    eliminationOrder.insert(0, eliminationOrder.pop(moveToFrontIndex))
            except ValueError:
                # not every election has these two
                pass
        moveToFront('residual surplus')
        moveToFront('exhausted')

        self.eliminationOrder = eliminationOrder

    def getEliminationOrder(self):
        return self.eliminationOrder
