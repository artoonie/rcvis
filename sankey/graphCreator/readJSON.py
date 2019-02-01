import datetime
import math
import json

from . import colors
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

        firstEliminated = []
        firstTally = results[0]['tallyResults']
        for tallyResult in firstTally:
            if 'eliminated' in tallyResult:
                firstEliminated.append(tallyResult['eliminated'])

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

class ColorGenerator():
    def __init__(self, totalToGenerate):
        self.total = totalToGenerate
        self.curr = 0

    def __iter__(self):
        return self

    def __next__(self):
        # c/o https://stackoverflow.com/a/30296361/1057105
        if self.curr >= self.total:
            raise StopIteration
        v = self.curr / self.total # [0, 1]
        r = 100
        a = r * math.sin(2 * math.pi * v)
        b = r * math.cos(2 * math.pi * v)
        lab = [32, a, b]
        self.curr += 1
        return colors.lab2rgb(lab)
    
class JSONReader():
    def __init__(self, fileObj):
        def loadData(fileObj):
            data = json.load(fileObj)
            return data

        def migrateData(data):
            JSONMigration(data)

        def parseDate(date):
            if not date:
                return None
            yr  = int(date[0:4])
            mo  = int(date[5:7])
            day = int(date[8:10])
            return datetime.datetime(yr, mo, day)

        def loadGraph(data):
            title = data['config']['contest']
            date = parseDate(data['config']['date'])

            graph = sankeyGraph.Graph(title)

            if date is not None:
                graph.setDate(date)

            return graph

        def initializeMembers(data, graph):
            items = {}
            round0 = data['results'][0]
            itemNames = round0['tally'].items()

            palette = ColorGenerator(len(itemNames))

            totalVotes = sum([float(i[1]) for i in itemNames])
            for name, initialVotes in itemNames:
                color = rcvResult.Color(next(palette))
                item = rcvResult.Item(name, color)
                items[name] = item
                graph.addNode(item, float(initialVotes), totalVotes)
            return items

        def loadTransfer(tallyResults):
            transfersByName = tallyResults['transfers']
            transfersByItem = {}
            for toName,numTransferred in transfersByName.items():
                if toName == "exhausted":
                    # Ignoring exhausted votes for now
                    continue
                transfersByItem[items[toName]] = float(numTransferred)

            if 'eliminated' in tallyResults:
                nameEliminated = tallyResults['eliminated']
                itemEliminated = items[nameEliminated]
                return rcvResult.Elimination(itemEliminated, transfersByItem)
            else:
                assert 'elected' in tallyResults
                nameEliminated = tallyResults['elected']
                itemEliminated = items[nameEliminated]
                return rcvResult.WinTransfer(itemEliminated, transfersByItem)

        def getEliminationOrder(steps, items):
            eliminationOrder = []
            itemsRemaining = set(items.values())
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
            # Non-winners and non-eliminated go next
            for winner in winners:
                itemsRemaining.remove(winner)
            winners = reversed(winners)

            eliminationOrder.extend(itemsRemaining)
            eliminationOrder.extend(winners)

            return eliminationOrder

        def loadSteps(data):
            steps = []
            for currRound in data['results']:
                step = rcvResult.Step()
                for tallyResults in currRound['tallyResults']:
                    if 'elected' in tallyResults:
                        winnerName = tallyResults['elected']
                        winnerItem = items[winnerName]
                        step.winners.append(winnerItem)
                    step.transfers.append(loadTransfer(tallyResults))
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
