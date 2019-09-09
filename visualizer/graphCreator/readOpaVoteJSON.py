from . import colors
from . import rcvResult
from . import readJSONBase
from .graph import Graph

class JSONReader(readJSONBase.JSONReaderBase):
    def parseJsonData(self, data, config):
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

        def loadStep(stepData, lastStepData, candidateItems):
            oldLosers = set(lastStepData['losers']) # or we could just store a running tally instead of recreating
            losers = [l for l in stepData['losers'] if l not in oldLosers]
            winners = lastStepData['winners'] # Look at previous step to see who won
            step = rcvResult.Step()
            for winner_i in winners:
                step.winners.append(candidateItems[winner_i])
            for loser_i in losers:
                loserItem = candidateItems[loser_i]

                # We don't actually have the data of how the transfers occurred, only the
                # new number of votes and a list of eliminated candidates. Assume that
                # transfers are weighted by the number of votes the eliminated candidates had.
                totalNumberVotesLost = sum([lastStepData['count'][i] for i in losers])
                if totalNumberVotesLost == 0:
                    thisLosersWeight = 0 # nothing was transferred anyway
                else:
                    thisLosersWeight = float(lastStepData['count'][loser_i]) / totalNumberVotesLost

                transfersByItem = {}
                for continuing_i in stepData['continuing'] + stepData['winners']:
                    voteDiff = stepData['count'][continuing_i] - lastStepData['count'][continuing_i]
                    if voteDiff == 0:
                        # No votes transeferred to this candidate
                        continue
                    voteDiff *= thisLosersWeight
                    transfersByItem[candidateItems[continuing_i]] = voteDiff
                step.transfers.append(rcvResult.Elimination(loserItem, transfersByItem))
            return step

        def loadGraph(data):
            numRounds = len(data['rounds'])
            graph = Graph(data['title'], 0)

            candidateItems = initializeCandidates(data, graph)
            steps = []
            for step_i in range(1, numRounds):
                step = loadStep(data['rounds'][step_i], data['rounds'][step_i-1], candidateItems)
                steps.append(step)
            # One last "step" to mark winners (since we only check them in prev round)
            step = loadStep(data['rounds'][step_i], data['rounds'][step_i], candidateItems)
            steps.append(step)

            return graph, steps, candidateItems

        self.graph, self.steps, self.items = loadGraph(data)
