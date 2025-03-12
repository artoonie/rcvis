""" Class which reads an RCVRC-formatted JSON file """
import abc
import datetime

from visualizer import common
from . import rcvResult
from .graph import Graph


class MigrationError(Exception):
    """ An error triggered during migration, with a message to be passed on to the user """


class JSONMigrateTask():
    """ An abstract base class to "fix" JSONs. Each migration "task" should override this."""

    def __init__(self, jsonData):
        self.data = jsonData

    def _enumerate_tally_results(self):
        results = self.data['results']
        for result in results:
            for tallyResult in result['tallyResults']:
                yield tallyResult

    def is_rankit_data(self):
        """ Is the jsonData from RankIt? """
        if 'jurisdiction' not in self.data['config']:
            return False
        return self.data['config']['jurisdiction'] == 'RankIt Export'

    def rename(self, fromStr, toStr):
        """
        A helper function to rename a candidate s/fromStr/toStr throughout the JSON
        Returns false if toStr already existed in the results -- will refuse to overwrite
        """
        results = self.data['results']
        for result in results:
            if fromStr in result['tally']:
                if toStr in result['tally']:
                    return False
                result['tally'][toStr] = result['tally'][fromStr]
                del result['tally'][fromStr]

            for tallyResult in result['tallyResults']:
                if fromStr in tallyResult['transfers']:
                    if toStr in tallyResult['transfers']:
                        return False
                    tallyResult['transfers'][toStr] = tallyResult['transfers'][fromStr]
                    del tallyResult['transfers'][fromStr]
        return True

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


class MakeExhaustedAndSurplusACandidate(JSONMigrateTask):
    """ If there are "exhausted" ballots, make them a first-class citizen candidate """

    def _make_it_a_candidate(self, searchText):
        """ Call this if exhausted was found. """
        numExhausted = 0
        results = self.data['results']
        for result in results:
            result['tally'][searchText] = numExhausted
            for tallyResult in result['tallyResults']:
                if searchText in tallyResult['transfers']:
                    numExhausted += tallyResult['transfers'][searchText]

    def _make_it_a_candidate_if_in_transfers(self, searchText):
        """ Looks for searchText in transfers OR in list of names.
            If it exists, makes it a candidate. """
        for result in self.data['results']:
            if searchText in result['tally']:
                self._make_it_a_candidate(searchText)
                return

        for tallyResult in self._enumerate_tally_results():
            if searchText in tallyResult['transfers']:
                self._make_it_a_candidate(searchText)
                return

    def do(self):
        """ Run the migration, ensuring they are not already marked as candidates """
        if common.INACTIVE_TEXT not in self.data['results'][0]['tally']:
            self._make_it_a_candidate_if_in_transfers(common.INACTIVE_TEXT)
        if common.RESIDUAL_SURPLUS_TEXT not in self.data['results'][0]:
            self._make_it_a_candidate_if_in_transfers(common.RESIDUAL_SURPLUS_TEXT)


class NormalizeSpecialNames(JSONMigrateTask):
    """ normalize names to their canonical, indexable names """

    def do(self):
        """ Run the migration """
        for name, normalizedName in common.candidate_renames().items():
            success = self.rename(name, normalizedName)
            if not success:
                raise MigrationError(f"JSON cannot have both \"{name}\" and \"{normalizedName}\"")


class FixRankitMissingTransfers(JSONMigrateTask):
    """ Rankit often forgets to eliminate candidates, they just drop them """

    def _get_eliminations(self, round_i):
        eliminatedNames = set()
        for result in self.data['results'][round_i]['tallyResults']:
            if 'eliminated' in result:
                eliminatedNames.add(result['eliminated'])
        return eliminatedNames

    def do(self):
        """ Run the migration """
        if not self.is_rankit_data():
            return

        results = self.data['results']
        for round_i in range(1, len(results)):
            prevRound = results[round_i - 1]['tally']
            thisRound = results[round_i]['tally']
            eliminations = self._get_eliminations(round_i - 1)

            for name in prevRound:
                if name not in thisRound and name not in eliminations:
                    newElimination = {'eliminated': name, 'transfers': {}}
                    results[round_i - 1]['tallyResults'].append(newElimination)


class FixRankitNoElimOnLastRound(JSONMigrateTask):
    """ Rankit incorrectly eliminates on the last round """

    def do(self):
        """ Run the migration """
        if not self.is_rankit_data():
            return

        results = self.data['results']
        lastRoundTally = results[-1]['tallyResults']
        lastRoundTally = [r for r in lastRoundTally if 'eliminated' not in r]
        results[-1]['tallyResults'] = lastRoundTally


class FixRankitCombinedTallyResults(JSONMigrateTask):
    """ Rankit includes eliminations and elected on the same tallyResult """

    def do(self):
        """ Run the migration """
        if not self.is_rankit_data():
            return

        results = self.data['results']
        for result in results:
            toAppendAtEnd = []
            for tallyResult in result['tallyResults']:
                if 'elected' not in tallyResult or 'eliminated' not in tallyResult:
                    continue
                toSplit = tallyResult['elected']
                del tallyResult['elected']
                toAppendAtEnd.append({'elected': toSplit, 'transfers': {}})
            result['tallyResults'].extend(toAppendAtEnd)


class FixRankitMissingWinners(JSONMigrateTask):
    """ Rankit stops including Winner in tally after they win """

    def do(self):
        """ Run the migration """
        if not self.is_rankit_data():
            return

        winnerNamesToLastNumVotes = {}
        for result in self.data['results']:
            for tallyResult in result['tallyResults']:
                if 'elected' not in tallyResult:
                    continue
                name = tallyResult['elected']
                winnerNamesToLastNumVotes[name] = result['tally'][name]

            for name, lastNumVotes in winnerNamesToLastNumVotes.items():
                if name not in result['tally']:
                    result['tally'][name] = lastNumVotes


class JSONReader:
    """
    The class which reads the JSON and performs migrations

    self.graph is a Graph object which is partially initialized (TODO how partially?)
    self.rounds is a list of Round objects
    self.items is a list of Item objects
    """
    graph: object
    rounds: list
    items: list
    eliminationOrder: list

    def __init__(self, data):
        self.parse_data(data)
        self.graph.create_graph_from_rounds(self.rounds)
        self.set_elimination_order(self.rounds, self.graph.items)
        self.graph._debug_temporary_raw_JSON = data

    def parse_data(self, data):
        """ Parses the JSON data, or raises an exception on failure """
        def get_migration_tasks():
            return [FixNoTransfersTask,
                    FixUndeclaredUWITask,
                    FixIgnoreResidualSurplus,
                    MakeTalliesANumber,
                    FixRankitMissingWinners,  # Must come before FixRankitMissingTransfers
                    FixRankitMissingTransfers,  # must come after MakeTalliesANumber
                    FixRankitCombinedTallyResults,
                    FixRankitNoElimOnLastRound,  # must come after FixRankitCombinedTallyResults
                    NormalizeSpecialNames,
                    MakeExhaustedAndSurplusACandidate]

        def parse_date(date):
            if not date:
                return None
            year = int(date[0:4])
            month = int(date[5:7])
            day = int(date[8:10])
            return datetime.datetime(year, month, day)

        def load_graph(data):
            # required
            title = data['config']['contest']

            # optional
            date = parse_date(data['config'].get('date'))
            threshold = data['config'].get('threshold')

            graph = Graph(title)

            if date is not None:
                graph.set_date(date)
            if threshold is not None:
                graph.set_threshold(threshold)

            return graph

        def initialize_items(data):
            round0 = data['results'][0]
            return {name: rcvResult.Item(name) for name in round0['tally']}

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
                for name, count in currRound['tally'].items():
                    rnd.itemsToVotes[items[name]] = count

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
        items = initialize_items(data)
        rounds = load_rounds(data)

        self.graph = graph
        self.rounds = rounds

    def get_graph(self):
        """ Returns the Graph object """
        return self.graph

    def get_rounds(self):
        """ Returns the list of rounds """
        return self.rounds

    def set_elimination_order(self, rounds, items):
        """ Sets the elimination order given each round and a list of Items """
        eliminationOrder = []
        itemsRemaining = set(items)
        for rnd in rounds:
            itemsEliminatedThisRound = [
                e.item for e in rnd.transfers if isinstance(e, rcvResult.Elimination)]
            itemsEliminatedThisRound = sorted(
                itemsEliminatedThisRound, key=lambda item, rnd=rnd: rnd.itemsToVotes[item])
            for item in itemsEliminatedThisRound:
                eliminationOrder.append(item)
                itemsRemaining.remove(item)

        # Winners are added last
        winners = []
        for rnd in rounds:
            for winner in rnd.winners:
                winners.append(winner)
                itemsRemaining.remove(winner)
        winners = reversed(winners)

        # Remaining items: survived til last round, neither eliminated nor elected
        # Then sort by the number of votes they received first, and then alphabetically.
        # This mitigates nondeterministic tests and ensures a consistent order between loads.
        # We compute the names in reverse order so we can sort backwards-alphabetically
        # because our goal is an alphabetical candidate list, which is the reverse of
        # the elimination order
        reverseOrder = sorted(itemsRemaining, key=lambda x:
                              (-self.graph.nodesPerRound[-1][x].count, x.name))
        itemsRemaining = reversed(reverseOrder)
        eliminationOrder.extend(itemsRemaining)
        eliminationOrder.extend(winners)

        # Place "residual surplus" and "inactive ballots" at the end
        def move_to_front(candidateName):
            try:
                moveToFrontIndex = [
                    e.name for e in eliminationOrder].index(candidateName)
                if moveToFrontIndex:
                    eliminationOrder.insert(
                        0, eliminationOrder.pop(moveToFrontIndex))
            except ValueError:
                # not every election has these two
                pass

        move_to_front(common.RESIDUAL_SURPLUS_TEXT)
        move_to_front(common.INACTIVE_TEXT)

        self.eliminationOrder = eliminationOrder

    def get_elimination_order(self):
        """ Returns the elimination order:
            a list of names in the order in which they were eliminated """
        return self.eliminationOrder
