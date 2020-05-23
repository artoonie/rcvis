from . import colors
from . import rcvResult
from . import readJSONBase
from .graph import Graph


class JSONReader(readJSONBase.JSONReaderBase):
    def parseJsonData(self, data):
        def initializeCandidates(data, graph):
            candidateNames = data['candidates']
            firstRoundVotes = data['rounds'][0]['count']

            palette = colors.ColorGenerator(len(candidateNames))

            candidateItems = []
            for candidate_i, candidateName in enumerate(candidateNames):
                color = colors.Color(next(palette))
                initialVotes = firstRoundVotes[candidate_i]
                item = rcvResult.Item(candidateName, color)
                graph.addNode(item, initialVotes)
                candidateItems.append(item)
            return candidateItems

        def loadRound(roundData, lastRoundData, candidateItems):
            # or we could just store a running tally instead of recreating
            oldLosers = set(lastRoundData['losers'])
            losers = [l for l in roundData['losers'] if l not in oldLosers]
            # Look at previous round to see who won
            winners = lastRoundData['winners']
            round = rcvResult.Round()
            for winner_i in winners:
                round.winners.append(candidateItems[winner_i])
            for loser_i in losers:
                loserItem = candidateItems[loser_i]

                # We don't actually have the data of how the transfers occurred, only the
                # new number of votes and a list of eliminated candidates. Assume that
                # transfers are weighted by the number of votes the eliminated
                # candidates had.
                totalNumberVotesLost = sum(
                    [lastRoundData['count'][i] for i in losers])
                if totalNumberVotesLost == 0:
                    thisLosersWeight = 0  # nothing was transferred anyway
                else:
                    thisLosersWeight = float(
                        lastRoundData['count'][loser_i]) / totalNumberVotesLost

                transfersByItem = {}
                for continuing_i in roundData['continuing'] + \
                                    roundData['winners']:
                    voteDiff = roundData['count'][continuing_i] - \
                               lastRoundData['count'][continuing_i]
                    if voteDiff == 0:
                        # No votes transeferred to this candidate
                        continue
                    voteDiff *= thisLosersWeight
                    transfersByItem[candidateItems[continuing_i]] = voteDiff
                round.transfers.append(
                    rcvResult.Elimination(
                        loserItem, transfersByItem))
            return round

        def loadGraph(data):
            numRounds = len(data['rounds'])
            graph = Graph(data['title'], 0)

            candidateItems = initializeCandidates(data, graph)
            rounds = []
            for round_i in range(1, numRounds):
                round = loadRound(data['rounds'][round_i],
                                  data['rounds'][round_i - 1], candidateItems)
                rounds.append(round)
            # One last "round" to mark winners (since we only check them in prev
            # round)
            round = loadRound(
                data['rounds'][round_i],
                data['rounds'][round_i],
                candidateItems)
            rounds.append(round)

            return graph, rounds, candidateItems

        self.graph, self.rounds, self.items = loadGraph(data)
