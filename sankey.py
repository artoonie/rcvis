import json
import seaborn as sns

import plotly.offline as py
# Use this instead to render to the web
# import plotly.plotly as py

class Item:
    def __init__(self, name, color):
        assert(isinstance(color, Color))
        self.name = name
        self.color = color

class Color:
    def __init__(self, rgbAsFloat):
        assert(all([x<=1 and x>=0 for x in rgbAsFloat]))
        self.rgb = rgbAsFloat

    def asHex(self):
        rgbInt = [int(c*255) for c in self.rgb]
        # c/o https://stackoverflow.com/a/3380739
        return '#%02x%02x%02x' % (rgbInt[0], rgbInt[1], rgbInt[2])

    @classmethod
    def interpolate(cls, color0, color1, alpha):
        rgb = []
        for i in range(len(color0.rgb)):
            rgb.append((1-alpha)*color0.rgb[i] + alpha*color1.rgb[i])
        return Color(rgb)

class Elimination:
    def __init__(self, item, transfers):
        """ Transfers is a mapping from Item objects
            to a number of transferred votes. """
        self.item = item
        self.transfers = transfers

class Step:
    def __init__(self, eliminations):
        self.eliminations = eliminations

class ItemNode:
    def __init__(self, item, numVotes, index):
        self.item = item
        self.numVotes = numVotes
        self.index = index

class Graph:
    def __init__(self, title):
        self.title = title
        self.sources = []
        self.target = []
        self.value = []
        self.label = []
        self.linkColor = []
        self.nodeColor = []
        self.currIndex = 0

        self.currStepNodes, self.lastStepNodes = {}, {}

    def addConnection(self, sourceNode, targetNode, value):
        self.sources.append(sourceNode.index)
        self.target.append(targetNode.index)
        self.value.append(value)

        white = Color([1]*3)
        faded = Color.interpolate(white, sourceNode.item.color, .3)
        self.linkColor.append(faded.asHex())

    def addNode(self, item, numVotes):
        self.label.append(item.name + " " + str(numVotes))
        self.nodeColor.append(item.color.asHex())
        itemNode = ItemNode(item, numVotes, self.currIndex)
        self.currIndex += 1
        self.currStepNodes[item] = itemNode
        return itemNode

    def markNextStep(self):
        self.lastStepNodes = self.currStepNodes
        self.currStepNodes = {}

    def createPlotlyFigure(self):
        data_trace = dict(
            type='sankey',
            domain = dict(
              x =  [0,1],
              y =  [0,1]
            ),
            orientation = "v",
            valueformat = ".0f",
            node = dict(
              pad = 10,
              thickness = 30,
              line = dict(
                width = 0
              ),
              label = self.label,
              color = self.nodeColor
            ),
            link = dict(
              source = self.sources,
              target = self.target,
              value = self.value,
              color = self.linkColor
          )
        )

        layout =  dict(
            title = self.title,
            height = 772,
            font = dict(
              size = 10
            ),    
        )

        fig = dict(data=[data_trace], layout=layout)

        return fig

def runStep(step, graph):
    graph.markNextStep()
    nodesThisRound = {}
    nodesLastRound = graph.lastStepNodes

    def getPassthroughVotes():
        eliminatedItems = set([elimination.item for elimination in step])
        for item in nodesLastRound:
            if item in eliminatedItems:
                continue
            votes = nodesLastRound[item].numVotes
            for elimination in step:
                if item in elimination.transfers:
                    votes += elimination.transfers[item]
            nodesThisRound[item] = graph.addNode(item, votes)

            graph.addConnection(sourceNode = nodesLastRound[item],
                                targetNode = nodesThisRound[item],
                                value  = nodesLastRound[item].numVotes)

    def getTransferVotes():
        for elimination in step:
            for transferItem, transferNumber in elimination.transfers.items():
                sourceNode = nodesLastRound[elimination.item]
                targetNode = nodesThisRound[transferItem]
                graph.addConnection(sourceNode = sourceNode,
                                    targetNode = targetNode,
                                    value  = transferNumber)

    getPassthroughVotes()
    getTransferVotes()
    return nodesThisRound

def readJson(fn):
    def loadData(fn):
        with open(fn) as f:
            data = json.load(f)
        return data

    def loadGraph(data):
        title = data['config']['contest']
        graph = Graph(title)
        return graph

    def initializeMembers(data, graph):
        items = {}
        round0 = data['results'][0]
        itemNames = round0['tally'].items()

        palette = sns.color_palette("Set1", len(itemNames), desat=0.8)
        rgbColors = palette
        colorIndex = 0

        for name, initialVotes in itemNames:
            item = Item(name, Color(rgbColors[colorIndex]))
            items[name] = item
            graph.addNode(item, int(initialVotes))
            colorIndex += 1
        return items

    def initializeUndeclaredNode(data, graph, items):
        # The number of undeclared votes must be computed by looking
        # through how many undeclared votes were transferred elsewhere
        tallyResults = data['results'][0]['tallyResults']
        eliminated = [m['eliminated'] for m in tallyResults]
        if "Undeclared" not in eliminated:
            return
        undeclaredResults = tallyResults[eliminated.index('Undeclared')]

        count = sum(map(int, undeclaredResults['transfers'].values()))
        name = "Undeclared"
        item = Item(name, Color((.5, .5, .5)))
        items[name] = item
        graph.addNode(item, count)

    def loadEliminated(tallyResults):
        nameEliminated = tallyResults['eliminated']
        itemEliminated = items[nameEliminated]

        transfersByName = tallyResults['transfers']
        transfersByItem = {}
        for toName,numTransferred in transfersByName.items():
            if toName == "exhausted":
                # Ignoring exhausted votes for now
                continue
            transfersByItem[items[toName]] = int(float(numTransferred))

        return Elimination(itemEliminated, transfersByItem)

    def loadSteps(data):
        steps = []
        for currRound in data['results']:
            step = [] # List of Elimination objects
            for tallyResults in currRound['tallyResults']:
                if 'transfers' not in tallyResults:
                    # Can only happen on a zero-vote eliminated person
                    continue
                if 'elected' in tallyResults:
                    # Will happen on final round, or during intermediate rounds
                    # in multi-winner races
                    continue
                step.append(loadEliminated(tallyResults))
            steps.append(step)
        return steps

    data = loadData(fn)
    graph = loadGraph(data)
    items = initializeMembers(data, graph)
    initializeUndeclaredNode(data, graph, items)
    steps = loadSteps(data)

    return graph, steps

fn = '2017_minneapolis_mayor.json'
graph, steps = readJson(fn)

for step in steps:
    runStep(step, graph)

fig = graph.createPlotlyFigure()
py.plot(fig, validate=True)
