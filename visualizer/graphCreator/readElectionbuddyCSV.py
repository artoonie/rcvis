""" Class which reads an ElectionBuddy CSV results file """

from . import colors
from .graph import Graph
from . import rcvResult
from . import readTabulatedDataBase

def readLineAsStr(f):
    line = f.readline()
    if isinstance(line, bytes):
        return line.decode("utf-8")
    return line

class RawFileData:
    """ Structure to hold the raw data read from the file, 
        parsing it into very simple but still raw bits """
    def __init__(self, fileObj):
        self.title = readLineAsStr(fileObj)
        readLineAsStr(fileObj) # line break

        self.position = readLineAsStr(fileObj)
        readLineAsStr(fileObj) # stars
        readLineAsStr(fileObj) # line break

        # Each round now
        self.rounds = []
        while fileObj:
            roundText = readLineAsStr(fileObj)
            if not roundText.startswith("Round"):
                assert len(self.rounds) > 0
                break

            self.rounds.append(self._read_round(fileObj))
            
    def _read_round(self, fileObj):
        headers = readLineAsStr(fileObj)
        assert headers == "Candidate,Votes,Percentage\n"

        candidates = {}
        while True:
            line = readLineAsStr(fileObj)
            if line == "\n":
                break
            candidate, votes, percentage = line.split(',')
            candidates[candidate] = float(votes)

        # Eat summary lines (votes tallied, abstentions, newline)
        readLineAsStr(fileObj)
        readLineAsStr(fileObj)
        readLineAsStr(fileObj)

        return candidates
            

class CSVReader(readTabulatedDataBase.TextFileReaderBase):
    """ Reads an electionbuddy-formatted CSV file. Note that this
        usse a generic text file reader, not a CSV reader, because
        it's not really a CSV file - it has parts of it that are,
        but it also has miscellaneous title lines.
        NOTE: this does not yet support multi-winner races.
    """

    def _create_candidates(self, csvData):
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
        continuingCandidates = csvData.rounds[round_i+1].keys()
        for name in continuingCandidates:
            voteDiff = csvData.rounds[round_i+1][name] - csvData.rounds[round_i][name]
            if voteDiff == 0:
                # No votes transferred to this candidate
                continue
            transfersByItem[nameToItemMap[name]] = voteDiff
        return transfersByItem

    def _create_rounds(self, csvData, nameToItemMap):
        numRounds = len(csvData.rounds)
        setsForEachRound = [set(d.keys()) for d in csvData.rounds]

        self.rounds = []
        for round_i, roundData in enumerate(csvData.rounds):
            rnd = rcvResult.Round()

            if round_i == numRounds-1:
                # If last round, look for winner(s) just based on who has the most votes
                maxNumVotes = max(roundData.values())
                winnerItems = [nameToItemMap[name] for name in roundData if roundData[name] == maxNumVotes]
                rnd.winners.extend(winnerItems)
            else:
                # If any other round, look for eliminated
                eliminated = setsForEachRound[round_i] - setsForEachRound[round_i + 1]
                transfersByItem = self._compute_transfers(csvData, nameToItemMap, round_i)
                totalNumVotesToTransfer = sum(roundData[name] for name in eliminated)

                for eliminatedName in eliminated:
                    # Weight where the votes went by how many votes each person had
                    # before being eliminated
                    weight = roundData[eliminatedName] / totalNumVotesToTransfer

                    eliminatedItem = nameToItemMap[eliminatedName]
                    transfersByItemScaled = {k: v * weight for k, v in transfersByItem.items()}
                    elimination = rcvResult.Elimination(eliminatedItem, transfersByItemScaled)
                    rnd.transfers.append(elimination)
            self.rounds.append(rnd)

    def parse_json_data(self, fileObj):
        csvData = RawFileData(fileObj)

        # 1. Create graph
        threshold = sum([v for k, v in csvData.rounds[-1].items()]) / 2.0
        self.graph = Graph(csvData.title, threshold)

        # 2. Create candidates - look at first round
        nameToItemMap = self._create_candidates(csvData)

        # 3. Create rounds
        self._create_rounds(csvData, nameToItemMap)

if __name__ == "__main__":
    with open('testData/electionBuddy.csv') as f:
        ElectionBuddyCSVReader(f)
