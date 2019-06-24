import datetime
import math
import json

from . import colors
from . import sankeyGraph
from . import rcvResult

class JSONMigrateTask():
    def __init__(self, jsonData):
        self.data = jsonData

    def _enumerateTallyResults(self):
        results = self.data['results']
        for result in results:
            for tallyResult in result['tallyResults']:
                yield tallyResult

    def do(self):
        assert False

class FixUndeclaredUWITask(JSONMigrateTask):
    def do(self):
        """ Undeclared votes are sometimes marked as 'UWI' instead 
            of 'Undeclared' """
        results = self.data['results']

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

class FixNoTransfersTask(JSONMigrateTask):
    def do(self):
        for tallyResult in self._enumerateTallyResults():
            if 'transfers' not in tallyResult:
                tallyResult['transfers'] = {}

class HideDecimalsTask(JSONMigrateTask):
    def do(self):
        results = self.data['results']
        for result in results:
            tally = result['tally']
            for name in tally:
                tally[name] = round(float(tally[name]))

        for tallyResult in self._enumerateTallyResults():
            xfers = tallyResult['transfers']
            for name in xfers:
                xfers[name] = round(float(xfers[name]))

class HideTransferlessRoundsTask(JSONMigrateTask):
    def _isTransferlessRound(self, tallyResults):
        for tallyResult in tallyResults:
            if tallyResult['transfers']:
                return False
        return True

    def do(self):
        i = 0
        rounds = self.data['results']
        while i < len(rounds):
            result = rounds[i]
            currRoundResults = result['tallyResults']
            if self._isTransferlessRound(currRoundResults):
                if i == 0:
                    rounds[i+1]['tallyResults'].extend(currRoundResults)
                else:
                    rounds[i-1]['tallyResults'].extend(currRoundResults)
                rounds = rounds[:i] + rounds[i+1:]
            else:
                i += 1
        self.data['results'] = rounds
        # fix round #
        for i in range(len(rounds)):
            rounds[i]['round'] = i+1
        print(json.dumps(self.data, indent=4, sort_keys=True))

class JSONMigration():
    """ Correct data inconsistencies in the JSON upfront,
        rather than intermixing this code throughout the parser. """
    def __init__(self, data):
        self.fixUndeclaredUWI(data)
        self.fixNoTransfers(data)
    
class JSONReader():
    def __init__(self, fileObj, config):
        def loadData(fileObj):
            data = json.load(fileObj)
            return data

        def loadMigrationTasks(data):
            self.tasks.append(FixNoTransfersTask)
            self.tasks.append(FixUndeclaredUWITask)

        def loadConfigurationTasks(data, config):
            if config.hideTransferlessRounds:
                self.tasks.append(HideTransferlessRoundsTask)
            if config.hideDecimals:
                self.tasks.append(HideDecimalsTask)

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

            palette = colors.ColorGenerator(len(itemNames))

            totalVotes = sum([float(i[1]) for i in itemNames])
            for name, initialVotes in itemNames:
                color = colors.Color(next(palette))
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

        # Apply migrations and configuration adjustments
        self.tasks = []
        loadMigrationTasks(data)
        loadConfigurationTasks(data, config)
        for task in self.tasks:
            task(data).do()

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
