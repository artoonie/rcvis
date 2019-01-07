import json
# TODO this import takes a crazy long time! Replace with
# something sensible.
import seaborn as sns

from . import sankeyGraph
from . import rcvResult

class JSONMigration():
    """ Correct data inconsistencies in the JSON upfront,
        rather than intermixing this code throughout the parser. """
    def __init__(self, data):
        self.fixUndeclaredUWI(data)
        self.fixNoTransfers(data)

    def fixUndeclaredUWI(self, data):
        """ Undeclared votes are sometimes marked as 'UWI' instead 
            of 'Undeclared' """
        results = data['results']
        firstEliminated = [x['eliminated'] for x in results[0]['tallyResults']]
        firstTally = results[0]['tally']
        if 'UWI' in firstTally and \
           'Undeclared' not in firstTally and \
           'Undeclared' in firstEliminated:
            firstTally['Undeclared'] = firstTally['UWI']
            del firstTally['UWI']

    def fixNoTransfers(self, data):
        results = data['results']
        for result in results:
            for tallyResult in result['tallyResults']:
                if 'transfers' not in tallyResult:
                    tallyResult['transfers'] = {}
    
class JSONReader():
    def __init__(self, fileObj):
        def loadData(fileObj):
            data = json.load(fileObj)
            return data

        def migrateData(data):
            JSONMigration(data)

        def loadGraph(data):
            title = data['config']['contest']
            graph = sankeyGraph.Graph(title)
            return graph

        def initializeMembers(data, graph):
            items = {}
            round0 = data['results'][0]
            itemNames = round0['tally'].items()

            palette = sns.color_palette("Set3", len(itemNames), desat=0.8)
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
                    if 'elected' in tallyResults:
                        winnerName = tallyResults['elected']
                        winnerItem = items[winnerName]
                        # Apply the winner to the previous step
                        steps[-1].winners.append(winnerItem)
                    else:
                        step.eliminations.append(loadEliminated(tallyResults))
                steps.append(step)
            return steps

        data = loadData(fileObj)
        migrateData(data)
        graph = loadGraph(data)
        items = initializeMembers(data, graph)
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
