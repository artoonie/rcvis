import json

# TODO this import takes a crazy long time! Replace with
# something sensible.
import seaborn as sns

# import plotly.offline as py
# Use this instead to render to the web
# import plotly.plotly as py

# Toggle to show percentages instead of absolute votes.
# Gets confusing because the percentages can change as
# undervotes occur, meaning the same number of votes
# will change percentages each round.
USE_PERCENT = False

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
    def __init__(self):
        self.winners = []
        self.eliminations = []

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
        white = Color([1]*3)
        faded = Color.interpolate(white, sourceNode.item.color, .9)
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
              label = [n.label for n in self.nodes],
              color = [n.color for n in self.nodes]
            ),
            link = dict(
              source = [self.nodes.index(l.source) for l in self.links],
              target = [self.nodes.index(l.target) for l in self.links],
              value = [l.value for l in self.links],
              color = [l.color for l in self.links]
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

    def createD3JS(self):
        js = ''
        js += 'numRounds = %d;\n' % self.numRounds
        js += 'graph = {"nodes" : [], "links" : []};\n'

        nodeIndices = {}
        for i, node in enumerate(self.nodes):
            nodeIndices[node] = i
            js += 'graph.nodes.push({ "name": "%s",\n' % node.label
            js += '                   "color": "%s"});\n' % node.color
        for link in self.links:
            sourceIndex = nodeIndices[link.source]
            targetIndex = nodeIndices[link.target]
            js += 'graph.links.push({ "source": %d,\n'    % sourceIndex
            js += '                   "target": %d,\n'    % targetIndex
            js += '                   "color": "%s",\n'   % link.color
            js += '                   "value":  %d });\n' % link.value
        return js


def runStep(step, graph):
    if step.eliminations:
        graph.markNextStep()
    nodesThisRound = {}
    nodesLastRound = graph.lastStepNodes

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
            nodesThisRound[item] = graph.addNode(item, votes, totalVotes)

            graph.addConnection(sourceNode = nodesLastRound[item],
                                targetNode = nodesThisRound[item],
                                value  = nodesLastRound[item].count)

    def getTransferVotes():
        for event in step.eliminations:
            nodesLastRound[event.item].label += " ❌"
            for transferItem, transferNumber in event.transfers.items():
                sourceNode = nodesLastRound[event.item]
                targetNode = nodesThisRound[transferItem]
                graph.addConnection(sourceNode = sourceNode,
                                    targetNode = targetNode,
                                    value  = transferNumber)
    getLastRoundWinners()
    if step.eliminations:
        getPassthroughVotes()
        getTransferVotes()

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

        totalVotes = sum([int(i[1]) for i in itemNames])
        for name, initialVotes in itemNames:
            item = Item(name, Color(rgbColors[colorIndex]))
            items[name] = item
            graph.addNode(item, int(initialVotes), totalVotes)
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
        totalVotes = 1e12 # TODO get the real value here
        graph.addNode(item, count, totalVotes)

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

    def getEliminationOrder(steps, items):
        eliminationOrder = []
        itemsRemaining = set(items.values())
        for step in steps:
            for elimination in step.eliminations:
                eliminationOrder.append(elimination.item)
                itemsRemaining.remove(elimination.item)
        for item in itemsRemaining:
            eliminationOrder.append(item)
        return eliminationOrder

    def loadSteps(data):
        steps = []
        for currRound in data['results']:
            step = Step()
            for tallyResults in currRound['tallyResults']:
                if 'transfers' not in tallyResults:
                    # Can only happen on a zero-vote eliminated person
                    continue
                elif 'elected' in tallyResults:
                    winnerName = tallyResults['elected']
                    winnerItem = items[winnerName]
                    step.winners.append(winnerItem)
                else:
                    step.eliminations.append(loadEliminated(tallyResults))
            steps.append(step)
        return steps

    data = loadData(fn)
    graph = loadGraph(data)
    items = initializeMembers(data, graph)
    initializeUndeclaredNode(data, graph, items)
    steps = loadSteps(data)
    eliminationOrder = getEliminationOrder(steps, items)

    return graph, steps, eliminationOrder

#fn = '2017_minneapolis_mayor.json'
fn = '2013_minneapolis_park.json'
graph, steps, eliminationOrder = readJson(fn)

for step in steps:
    runStep(step, graph)

graph.nodes = sorted(graph.nodes, key=lambda x:-eliminationOrder.index(x.item))

#fig = graph.createPlotlyFigure()
#py.plot(fig, validate=True)
js = graph.createD3JS()
print(js)
