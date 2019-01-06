import json
# TODO this import takes a crazy long time! Replace with
# something sensible.
import seaborn as sns

import sankeyGraph
import rcvResult

class JSONReader():
    def __init__(self, fn):
        def loadData(fn):
            with open(fn) as f:
                data = json.load(f)
            return data

        def loadGraph(data):
            title = data['config']['contest']
            graph = sankeyGraph.Graph(title)
            return graph

        def initializeMembers(data, graph):
            items = {}
            round0 = data['results'][0]
            itemNames = round0['tally'].items()

            palette = sns.color_palette("Set2", len(itemNames), desat=0.8)
            rgbColors = palette
            colorIndex = 0

            totalVotes = sum([int(i[1]) for i in itemNames])
            for name, initialVotes in itemNames:
                color = rcvResult.Color(rgbColors[colorIndex])
                item = rcvResult.Item(name, color)
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
            item = rcvResult.Item(name, rcvResult.Color((.5, .5, .5)))
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

            return rcvResult.Elimination(itemEliminated, transfersByItem)

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
                step = rcvResult.Step()
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

        self.graph = graph
        self.steps = steps
        self.eliminationOrder = eliminationOrder

    def getGraph(self):
        return self.graph

    def getSteps(self):
        return self.steps

    def getEliminationOrder(self):
        return self.eliminationOrder
