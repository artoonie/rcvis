import datetime

from . import rcvResult
from .graphSummary import GraphSummary

# Toggle to show percentages instead of absolute votes.
# Gets confusing because the percentages can change as
# undervotes occur, meaning the same number of votes
# will change percentages each round.
class LinkData:
    def __init__(self, source, target, value, color):
        self.source = source
        self.target = target
        self.value = value
        self.color = color

class NodeData:
    def __init__(self, item, label, color, count, stepNum):
        self.item = item
        self.label = label
        self.color = color
        self.count = count
        self.stepNum = stepNum
        self.isWinner = False
        self.isEliminated = False

    def markEliminated(self):
        self.isEliminated = True

    def markWinner(self):
        self.isWinner = True

class Graph:
    def __init__(self, title):
        self.title = title
        self.nodes = []
        self.links = []
        self.dateString = ""

        self.numRounds = 1
        self.nodesPerRound = [{}]
        self.winnersSoFar = set()

        self.summary = None

    def summarize(self):
        if self.summary is None:
            self.summary = GraphSummary(self)
        return self.summary

    def setDate(self, date):
        assert isinstance(date, datetime.datetime)
        self.dateString = datetime.date.strftime(date, format='%A, %B %-d, %Y')

    def currStepNodes(self):
        return self.nodesPerRound[self.numRounds-1]

    def prevStepNodes(self):
        return self.nodesPerRound[self.numRounds-2]

    def addConnection(self, sourceNode, targetNode, value):
        white = rcvResult.Color([1]*3)
        if sourceNode.item == targetNode.item:
            alpha = .2
        else:
            alpha = .8
        faded = rcvResult.Color.interpolate(white, sourceNode.item.color, alpha)
        color = faded.asHex()
        link = LinkData(sourceNode, targetNode, value, color)
        self.links.append(link)

    def addNode(self, item, count):
        label = str(item.name)
        color = item.color.asHex()
        node = NodeData(item, label, color, count, self.numRounds-1)
        self.nodes.append(node)

        self.currStepNodes()[item] = node

        return node

    def markNextStep(self):
        self.nodesPerRound.append({})
        self.numRounds += 1

    def step(self, step, isLastRound):
        def getPreviousRoundWinners():
            self.winnersSoFar.update(step.winners)

        def getPassthroughVotes():
            eliminatedItems = set([e.item for e in step.transfers
                                if isinstance(e, rcvResult.Elimination)])
            allItemVotes = {}
            for item in nodesPrevRound:
                if item in eliminatedItems:
                    continue
                votes = nodesPrevRound[item].count
                for event in step.transfers:
                    # If votes are being transferred to us:
                    if item in event.transfers:
                        votes += event.transfers[item]
                    # If votes are being transferred away, but we're not eliminated:
                    if event.item == item:
                        votes -= sum(event.transfers.values())
                allItemVotes[item] = votes
            for item, votes in allItemVotes.items():
                nodesThisRound[item] = self.addNode(item, votes)
                if item in self.winnersSoFar:
                    nodesThisRound[item].markWinner()

                # Minimum of: everything we had in the previous round, or the number
                # of votes in the next round that are not transferred away
                votesTransferredToSelf = min(votes, nodesPrevRound[item].count)
                self.addConnection(sourceNode = nodesPrevRound[item],
                                   targetNode = nodesThisRound[item],
                                   value  = votesTransferredToSelf)
        def markWinnersForLastStep():
            nodesLastRound = self.currStepNodes()
            for item in step.winners:
                nodesLastRound[item].markWinner()

        def getTransferVotes():
            for event in step.transfers:
                if isinstance(event, rcvResult.Elimination):
                    nodesPrevRound[event.item].markEliminated()
                for transferItem, transferNumber in event.transfers.items():
                    sourceNode = nodesPrevRound[event.item]
                    targetNode = nodesThisRound[transferItem]
                    self.addConnection(sourceNode = sourceNode,
                                        targetNode = targetNode,
                                        value  = transferNumber)

        getPreviousRoundWinners()

        if not isLastRound:
            self.markNextStep()
            nodesThisRound = {}
            nodesPrevRound = self.prevStepNodes()

            getPassthroughVotes()
            getTransferVotes()
        else:
            # Last round shouldn't create info for extra rounds,
            # it should just mark what happened
            markWinnersForLastStep()
