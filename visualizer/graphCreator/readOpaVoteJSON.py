""" Class which reads an opavote-formatted JSON file """
from . import colors
from . import rcvResult
from .graph import Graph
from .readTabulatedDataBase import TabulatedResultsReaderBase


class JSONReader(TabulatedResultsReaderBase):
    """ Reads an opavote-formatted JSON file """
    isJson = True

    def parse_data(self, data):
        def initialize_candidates(data, graph):
            candidateNames = data['candidates']
            firstRoundVotes = data['rounds'][0]['count']

            palette = colors.ColorGenerator(len(candidateNames))

            candidateItems = []
            for candidate_i, candidateName in enumerate(candidateNames):
                color = colors.Color(next(palette))
                initialVotes = firstRoundVotes[candidate_i]
                item = rcvResult.Item(candidateName, color)
                graph.add_node(item, initialVotes)
                candidateItems.append(item)
            return candidateItems

        def load_round(roundData, lastRoundData, candidateItems):
            # or we could just store a running tally instead of recreating
            oldLosers = set(lastRoundData['losers'])
            losers = [l for l in roundData['losers'] if l not in oldLosers]
            # Look at previous round to see who won
            winners = lastRoundData['winners']
            rnd = rcvResult.Round()
            for winner_i in winners:
                rnd.winners.append(candidateItems[winner_i])
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
                rnd.transfers.append(
                    rcvResult.Elimination(
                        loserItem, transfersByItem))
            return rnd

        def load_graph(data):
            numRounds = len(data['rounds'])
            threshold = sum(data['rounds'][-1]['count']) / (data['n_seats'] + 1)
            graph = Graph(data['title'], threshold)

            candidateItems = initialize_candidates(data, graph)
            rounds = []
            for round_i in range(1, numRounds):
                rnd = load_round(data['rounds'][round_i],
                                 data['rounds'][round_i - 1], candidateItems)
                rounds.append(rnd)
            # One last "round" to mark winners (since we only check them in prev round)
            rnd = load_round(
                data['rounds'][round_i],
                data['rounds'][round_i],
                candidateItems)
            rounds.append(rnd)

            return graph, rounds, candidateItems

        self.graph, self.rounds, self.items = load_graph(data)
