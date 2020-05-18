import datetime

from . import colors
from . import rcvResult
from . import readJSONBase
from .graph import Graph
from visualizer import common

class JSONMigrateTask():
    def __init__(self, jsonData):
        self.data = jsonData

    def _enumerateTallyResults(self):
        results = self.data['results']
        for result in results:
            for tallyResult in result['tallyResults']:
                yield tallyResult

    def rename(self, fromStr, toStr):
        results = self.data['results']
        for result in results:
            if fromStr in result['tally']:
                result['tally'][toStr] = result['tally'][fromStr]
                del result['tally'][fromStr]

            for tallyResult in result['tallyResults']:
                if fromStr in tallyResult['transfers']:
                    tallyResult['transfers'][toStr] = tallyResult['transfers'][fromStr]
                    del tallyResult['transfers'][fromStr]

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

class FixIgnoreResidualSurplus(JSONMigrateTask):
    def do(self):
        for tallyResult in self._enumerateTallyResults():
            if 'residual surplus' in tallyResult['transfers']:
                self.data['results'][0]['tally']['residual surplus'] = 0

class MakeTalliesANumber(JSONMigrateTask):
    def do(self):
        results = self.data['results']
        for result in results:
            tally = result['tally']
            for name in tally:
                tally[name] = float(tally[name])

        for tallyResult in self._enumerateTallyResults():
            xfers = tallyResult['transfers']
            for name in xfers:
                xfers[name] = float(xfers[name])

class HideDecimalsTask(JSONMigrateTask):
    def do(self):
        results = self.data['results']
        for result in results:
            tally = result['tally']
            for name in tally:
                tally[name] = round(tally[name])

        for tallyResult in self._enumerateTallyResults():
            xfers = tallyResult['transfers']
            for name in xfers:
                xfers[name] = round(xfers[name])

class MakeExhaustedACandidate(JSONMigrateTask):
    def _makeExhaustedACandidate(self):
        numExhausted = 0
        results = self.data['results']
        for result in results:
            result['tally']['exhausted'] = numExhausted
            for tallyResult in result['tallyResults']:
                if 'exhausted' in tallyResult['transfers']:
                    numExhausted += tallyResult['transfers']['exhausted']

    def do(self):
        for tallyResult in self._enumerateTallyResults():
            if 'exhausted' in tallyResult['transfers']:
                self._makeExhaustedACandidate()
                return

class RenameCapitalizeResidualSurplus(JSONMigrateTask):
    def do(self):
        self.rename('residual surplus', common.residualSurplusText)

class RenameExhaustedToInactive(JSONMigrateTask):
    def do(self):
        self.rename('exhausted', common.inactiveText)

class JSONMigration():
    """ Correct data inconsistencies in the JSON upfront,
        rather than intermixing this code throughout the parser. """
    def __init__(self, data):
        self.fixUndeclaredUWI(data)
        self.fixNoTransfers(data)
    
class JSONReader(readJSONBase.JSONReaderBase):
    def parseJsonData(self, data):
        def loadMigrationTasks(data):
            self.tasks.append(FixNoTransfersTask)
            self.tasks.append(FixUndeclaredUWITask)
            self.tasks.append(FixIgnoreResidualSurplus)
            self.tasks.append(MakeTalliesANumber)
            self.tasks.append(MakeExhaustedACandidate)
            self.tasks.append(RenameCapitalizeResidualSurplus)
            self.tasks.append(RenameExhaustedToInactive)

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
            threshold = data['config']['threshold']

            graph = Graph(title, threshold)

            if date is not None:
                graph.setDate(date)

            return graph

        def initializeMembers(data, graph):
            items = {}
            round0 = data['results'][0]
            itemNames = round0['tally'].items()

            palette = colors.ColorGenerator(len(itemNames))

            for name, initialVotes in itemNames:
                color = colors.Color(next(palette))
                item = rcvResult.Item(name, color)
                items[name] = item
                graph.addNode(item, float(initialVotes))
            return items

        def loadTransfer(tallyResults):
            transfersByName = tallyResults['transfers']
            transfersByItem = {}
            for toName,numTransferred in transfersByName.items():
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

        # Apply migrations and configuration adjustments
        self.tasks = []
        loadMigrationTasks(data)
        for task in self.tasks:
            task(data).do()

        graph = loadGraph(data)
        items = initializeMembers(data, graph)
        steps = loadSteps(data)

        self.graph = graph
        self.steps = steps
        self.items = items.values()
