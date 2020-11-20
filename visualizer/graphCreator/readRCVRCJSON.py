""" Class which reads an RCVRC-formatted JSON file """
import abc
import datetime

from visualizer import common
from . import colors
from . import rcvResult
from .graph import Graph
from .readTabulatedDataBase import TabulatedResultsReaderBase


class JSONMigrateTask():
    """ An abstract base class to "fix" JSONs. Each migration "task" should override this."""

    def __init__(self, jsonData):
        self.data = jsonData

    def _enumerate_tally_results(self):
        results = self.data['results']
        for result in results:
            for tallyResult in result['tallyResults']:
                yield tallyResult

    def rename(self, fromStr, toStr):
        """ A helper function to rename a candidate s/fromStr/toStr throughout the JSON """
        results = self.data['results']
        for result in results:
            if fromStr in result['tally']:
                result['tally'][toStr] = result['tally'][fromStr]
                del result['tally'][fromStr]

            for tallyResult in result['tallyResults']:
                if fromStr in tallyResult['transfers']:
                    tallyResult['transfers'][toStr] = tallyResult['transfers'][fromStr]
                    del tallyResult['transfers'][fromStr]

    @abc.abstractmethod
    def do(self):
        """ Run the migration. Put your subclass' logic here. """


class FixUndeclaredUWITask(JSONMigrateTask):
    """ Undeclared votes are sometimes marked as 'UWI' instead of 'Undeclared' """

    def do(self):
        """ Run the migration """
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
    """ The JSON prefers no key named "transfers" instead of an empty list. We do not. """

    def do(self):
        """ Run the migration """
        for tallyResult in self._enumerate_tally_results():
            if 'transfers' not in tallyResult:
                tallyResult['transfers'] = {}


class FixIgnoreResidualSurplus(JSONMigrateTask):
    """ Creates a "residual surplus" candidate in the first round if we find it in other rounds,
        since we look to the first round for all candidates (or places votes can be transferred) """

    def do(self):
        """ Run the migration """
        for tallyResult in self._enumerate_tally_results():
            if 'residual surplus' in tallyResult['transfers']:
                self.data['results'][0]['tally']['residual surplus'] = 0


class MakeTalliesANumber(JSONMigrateTask):
    """ Converts tally strings to numbers """

    def do(self):
        """ Run the migration """
        results = self.data['results']
        for result in results:
            tally = result['tally']
            for name in tally:
                tally[name] = float(tally[name])

        for tallyResult in self._enumerate_tally_results():
            xfers = tallyResult['transfers']
            for name in xfers:
                xfers[name] = float(xfers[name])


class HideDecimalsTask(JSONMigrateTask):
    """ If the config desired it - remove all decimal places """

    def do(self):
        """ Run the migration """
        results = self.data['results']
        for result in results:
            tally = result['tally']
            for name in tally:
                tally[name] = round(tally[name])

        for tallyResult in self._enumerate_tally_results():
            xfers = tallyResult['transfers']
            for name in xfers:
                xfers[name] = round(xfers[name])


class MakeExhaustedACandidate(JSONMigrateTask):
    """ If there are "exhausted" ballots, make them a first-class citizen candidate """

    def _make_exhausted_a_candidate(self):
        """ Call this if exhausted was found. """
        numExhausted = 0
        results = self.data['results']
        for result in results:
            result['tally']['exhausted'] = numExhausted
            for tallyResult in result['tallyResults']:
                if 'exhausted' in tallyResult['transfers']:
                    numExhausted += tallyResult['transfers']['exhausted']

    def do(self):
        """ Run the migration """
        for tallyResult in self._enumerate_tally_results():
            if 'exhausted' in tallyResult['transfers']:
                self._make_exhausted_a_candidate()
                return


class RenameCapitalizeResidualSurplus(JSONMigrateTask):
    """ s/residual surplus/Residual Surplus """

    def do(self):
        """ Run the migration """
        self.rename('residual surplus', common.RESIDUAL_SURPLUS_TEXT)


class RenameExhaustedToInactive(JSONMigrateTask):
    """ s/exhausted/Inactive Ballots """

    def do(self):
        """ Run the migration """
        self.rename('exhausted', common.INACTIVE_TEXT)


class JSONReader(TabulatedResultsReaderBase):
    """ The class which reads the JSON and performs migrations """
    isJson = True

    def parse_data(self, data):
        def get_migration_tasks():
            return [FixNoTransfersTask,
                    FixUndeclaredUWITask,
                    FixIgnoreResidualSurplus,
                    MakeTalliesANumber,
                    MakeExhaustedACandidate,
                    RenameCapitalizeResidualSurplus,
                    RenameExhaustedToInactive]

        def parse_date(date):
            if not date:
                return None
            year = int(date[0:4])
            month = int(date[5:7])
            day = int(date[8:10])
            return datetime.datetime(year, month, day)

        def load_graph(data):
            title = data['config']['contest']
            date = parse_date(data['config']['date'])
            threshold = data['config']['threshold']

            graph = Graph(title, threshold)

            if date is not None:
                graph.set_date(date)

            return graph

        def initialize_members(data, graph):
            items = {}
            round0 = data['results'][0]
            itemNames = round0['tally'].items()

            palette = colors.ColorGenerator(len(itemNames))

            for name, initialVotes in itemNames:
                color = colors.Color(next(palette))
                item = rcvResult.Item(name, color)
                items[name] = item
                graph.add_node(item, float(initialVotes))
            return items

        def load_transfer(tallyResults):
            transfersByName = tallyResults['transfers']
            transfersByItem = {}
            for toName, numTransferred in transfersByName.items():
                transfersByItem[items[toName]] = float(numTransferred)

            if 'eliminated' in tallyResults:
                nameEliminated = tallyResults['eliminated']
                itemEliminated = items[nameEliminated]
                return rcvResult.Elimination(itemEliminated, transfersByItem)

            assert 'elected' in tallyResults
            nameEliminated = tallyResults['elected']
            itemEliminated = items[nameEliminated]
            return rcvResult.WinTransfer(itemEliminated, transfersByItem)

        def load_rounds(data):
            rounds = []
            for currRound in data['results']:
                rnd = rcvResult.Round()
                for tallyResults in currRound['tallyResults']:
                    if 'elected' in tallyResults:
                        winnerName = tallyResults['elected']
                        winnerItem = items[winnerName]
                        rnd.winners.append(winnerItem)
                    rnd.transfers.append(load_transfer(tallyResults))
                rounds.append(rnd)
            return rounds

        # Apply migrations and configuration adjustments
        self.tasks = get_migration_tasks()
        for task in self.tasks:
            task(data).do()

        graph = load_graph(data)
        items = initialize_members(data, graph)
        rounds = load_rounds(data)

        self.graph = graph
        self.rounds = rounds
        self.items = items.values()
