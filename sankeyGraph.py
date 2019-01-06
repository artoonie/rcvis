import rcvResult

USE_PERCENT = False

class LinkData:
    def __init__(self, source, target, value, color):
        self.source = source
        self.target = target
        self.value = value
        self.color = color

class NodeData:
    def __init__(self, item, label, color, count):
        self.item = item
        self.label = label
        self.color = color
        self.count = count

class Graph:
    def __init__(self, title):
        self.title = title
        self.nodes = []
        self.links = []

        self.numRounds = 1
        self.currStepNodes, self.lastStepNodes = {}, {}

    def addConnection(self, sourceNode, targetNode, value):
        white = rcvResult.Color([1]*3)
        faded = rcvResult.Color.interpolate(white, sourceNode.item.color, .9)
        color = faded.asHex()
        link = LinkData(sourceNode, targetNode, value, color)
        self.links.append(link)

    def addNode(self, item, count, totalVotes):
        if USE_PERCENT:
            assert(isinstance(count, int))
            label = item.name + " " + \
                    str(round(count/totalVotes * 100, 2)) + "%"
        else:
            label = item.name + " ("+str(count)+")"
        color = item.color.asHex()
        node = NodeData(item, label, color, count)
        self.nodes.append(node)

        self.currStepNodes[item] = node

        return node

    def markNextStep(self):
        self.lastStepNodes = self.currStepNodes
        self.currStepNodes = {}
        self.numRounds += 1

    def step(self, step):
        if step.eliminations:
            self.markNextStep()
        nodesThisRound = {}
        nodesLastRound = self.lastStepNodes

        def getLastRoundWinners():
            for winner in step.winners:
                nodesLastRound[winner].label += " ✅"

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

                self.addConnection(sourceNode = nodesLastRound[item],
                                   targetNode = nodesThisRound[item],
                                   value  = nodesLastRound[item].count)

        def getTransferVotes():
            for event in step.eliminations:
                nodesLastRound[event.item].label += " ❌"
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
