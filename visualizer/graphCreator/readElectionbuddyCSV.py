""" Class which reads an ElectionBuddy CSV results file """

from . import colors
from . import rcvResult
from .graph import Graph
from .readTabulatedDataBase import TabulatedResultsReaderBase


def read_line_as_str(f):
    """ Read line, and if it's bytes, decode to utf-8 """
    line = f.readline()
    if isinstance(line, bytes):
        return line.decode("utf-8")
    return line


def peek_line(f):
    """ Peeks at the next line without advancing """
    pos = f.tell()
    line = read_line_as_str(f)
    f.seek(pos)
    return line


class RawFileData:
    """ Structure to hold the raw data read from the file,
        parsing it into very simple but still raw bits """

    def __init__(self, fileObj):
        self.title = read_line_as_str(fileObj)
        read_line_as_str(fileObj)  # line break

        self.position = read_line_as_str(fileObj)
        read_line_as_str(fileObj)  # stars
        read_line_as_str(fileObj)  # line break

        self.read_each_round(fileObj)

    def read_each_round(self, fileObj):
        """ Start iterating over the CSV for each round """
        self.rounds = []
        while fileObj:
            roundText = read_line_as_str(fileObj)
            if not roundText.startswith("Round"):
                assert len(self.rounds) > 0
                break

            self.rounds.append(self.read_round(fileObj))

    @classmethod
    def read_round(cls, fileObj):
        """ Reads the CSV data for the next round """
        headers = read_line_as_str(fileObj)
        assert headers.strip() == "Candidate,Votes,Percentage"

        candidates = {}
        while True:
            line = read_line_as_str(fileObj)
            if line.strip() == "":
                break
            candidate, votes, _ = line.split(',')
            candidates[candidate] = float(votes)

        # Eat summary lines (votes tallied, abstentions, newline)
        line = read_line_as_str(fileObj)
        assert line.startswith('Votes tallied')

        # Abstentions line is apparently optional
        line = peek_line(fileObj)
        if line.startswith('Abstentions'):
            read_line_as_str(fileObj)
        else:
            assert line.strip() == ''

        # Check for newline
        line = read_line_as_str(fileObj)
        assert line.strip() == ''

        return candidates


class CSVReader(TabulatedResultsReaderBase):
    """ Reads an electionbuddy-formatted CSV file. Note that this
        usse a generic text file reader, not a CSV reader, because
        it's not really a CSV file - it has parts of it that are,
        but it also has miscellaneous title lines.
        NOTE: this does not yet support multi-winner races.
    """

    isJson = False

    def _create_candidates(self, csvData):
        """ Creates the self.items struct  """
        palette = colors.ColorGenerator(len(csvData.rounds[0]))
        self.items = []
        nameToItemMap = {}
        for name, votes in csvData.rounds[0].items():
            color = colors.Color(next(palette))
            item = rcvResult.Item(name, color)
            self.graph.add_node(item, votes)

            self.items.append(item)
            nameToItemMap[name] = item
        return nameToItemMap

    @classmethod
    def _compute_transfers(cls, csvData, nameToItemMap, round_i):
        """ Returns a dictionarry mapping Items to the number of votes they received
            between round_i and round_i + 1 """
        transfersByItem = {}
        continuingCandidates = csvData.rounds[round_i + 1].keys()
        for name in continuingCandidates:
            voteDiff = csvData.rounds[round_i + 1][name] - csvData.rounds[round_i][name]
            if voteDiff == 0:
                # No votes transferred to this candidate
                continue
            transfersByItem[nameToItemMap[name]] = voteDiff
        return transfersByItem

    # Yes there really are too many args, this is ugly
    # pylint: disable=too-many-arguments
    def _get_eliminated(self, roundData, setsForEachRound, csvData, nameToItemMap, round_i):
        """ Get the list of rcvResult.Eliminations for this round """
        # If any other round, look for eliminated
        eliminated = setsForEachRound[round_i] - setsForEachRound[round_i + 1]
        transfersByItem = self._compute_transfers(csvData, nameToItemMap, round_i)
        totalNumVotesToTransfer = sum(roundData[name] for name in eliminated)

        eliminations = []
        for eliminatedName in eliminated:
            # Weight where the votes went by how many votes each person had
            # before being eliminated
            weight = roundData[eliminatedName] / totalNumVotesToTransfer

            eliminatedItem = nameToItemMap[eliminatedName]
            transfersByItemScaled = {k: v * weight for k, v in transfersByItem.items()}
            elimination = rcvResult.Elimination(eliminatedItem, transfersByItemScaled)
            eliminations.append(elimination)
        return eliminations

    def _create_rounds(self, csvData, nameToItemMap):
        """ Create the self.rounds struct """
        numRounds = len(csvData.rounds)
        setsForEachRound = [set(d.keys()) for d in csvData.rounds]

        self.rounds = []
        for round_i, roundData in enumerate(csvData.rounds):
            rnd = rcvResult.Round()

            if round_i == numRounds - 1:
                # If last round, look for winner(s) just based on who has the most votes
                maxNumVotes = max(roundData.values())
                winnerItems = [nameToItemMap[name]
                               for name in roundData if roundData[name] == maxNumVotes]
                rnd.winners.extend(winnerItems)
            else:
                eliminations = self._get_eliminated(
                    roundData, setsForEachRound, csvData, nameToItemMap, round_i)
                rnd.transfers.extend(eliminations)
            self.rounds.append(rnd)

    def parse_data(self, data):
        """ Parses the not-really-CSV electionbuddy CSV data """
        csvData = RawFileData(data)

        # 1. Create graph
        threshold = sum([v for k, v in csvData.rounds[-1].items()]) / 2.0
        self.graph = Graph(csvData.title, threshold)

        # 2. Create candidates - look at first round
        nameToItemMap = self._create_candidates(csvData)

        # 3. Create rounds
        self._create_rounds(csvData, nameToItemMap)
