from . import rcvResult

# Toggle to show percentages instead of absolute votes.
# Gets confusing because the percentages can change as
# undervotes occur, meaning the same number of votes
# will change percentages each round.
USE_PERCENT = False

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

    def markEliminated(self):
        self.label = "❌ " + self.label

    def markWinner(self):
        self.label = "✅ " + self.label

class Graph:
    def __init__(self, title):
        self.title = title
        self.nodes = []
        self.links = []

        self.numRounds = 1
        self.nodesPerRound = [{}]
        self.winnersSoFar = []

    def currStepNodes(self):
        return self.nodesPerRound[self.numRounds-1]

    def lastStepNodes(self):
        return self.nodesPerRound[self.numRounds-2]

    def addConnection(self, sourceNode, targetNode, value):
        white = rcvResult.Color([1]*3)
        if sourceNode.item == targetNode.item:
            alpha = .2
        else:
            alpha = .9
        faded = rcvResult.Color.interpolate(white, sourceNode.item.color, alpha)
        color = faded.asHex()
        link = LinkData(sourceNode, targetNode, value, color)
        self.links.append(link)

    def addNode(self, item, count, totalVotes):
        if USE_PERCENT:
            assert(isinstance(count, int))
            label = item.name + " " + \
                    str(round(count/totalVotes * 100, 2)) + "%"
        elif self.numRounds == 1:
            label = item.name + " ("+str(count)+" votes)"
        else:
            diff = count - self.lastStepNodes()[item].count
            label = "+%d votes (%d votes)" % (diff, count)
        color = item.color.asHex()
        node = NodeData(item, label, color, count, self.numRounds-1)
        self.nodes.append(node)

        self.currStepNodes()[item] = node

        return node

    def markNextStep(self):
        self.nodesPerRound.append({})
        self.numRounds += 1

    def step(self, step):
        if step.eliminations:
            self.markNextStep()
        nodesThisRound = {}
        nodesLastRound = self.lastStepNodes()

        def getLastRoundWinners():
            self.winnersSoFar.extend(step.winners)

        def getPassthroughVotes():
            eliminatedItems = set([e.item for e in step.eliminations])
            allItemVotes = {}
            for item in nodesLastRound:
                if item in eliminatedItems:
                    continue
                votes = nodesLastRound[item].count
                for event in step.eliminations:
                    if item in event.transfers:
                        votes += event.transfers[item]
                allItemVotes[item] = votes
            totalVotes = sum(allItemVotes.values())
            for item, votes in allItemVotes.items():
                nodesThisRound[item] = self.addNode(item, votes, totalVotes)
                if item in self.winnersSoFar:
                    nodesThisRound[item].markWinner()

                self.addConnection(sourceNode = nodesLastRound[item],
                                   targetNode = nodesThisRound[item],
                                   value  = nodesLastRound[item].count)

        def getTransferVotes():
            for event in step.eliminations:
                nodesLastRound[event.item].markEliminated()
                for transferItem, transferNumber in event.transfers.items():
                    sourceNode = nodesLastRound[event.item]
                    targetNode = nodesThisRound[transferItem]
                    self.addConnection(sourceNode = sourceNode,
                                        targetNode = targetNode,
                                        value  = transferNumber)
        getLastRoundWinners()
        if step.eliminations:
            getPassthroughVotes()
            getTransferVotes()
