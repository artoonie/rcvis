from visualizer.graphCreator.colors import ColorGenerator, Color
from visualizer.jsUtils import approxLength

class RoundInfo:
    def __init__(self, round_i):
        self.round_i = round_i
        self.eliminatedNames = []
        self.winnerNames = []

    def key(self):
        return self.round_i

    def getStringFor(self, nameList):
        if len(nameList) == 0:
          return ''
        elif len(nameList) <= 3:
          return ' & '.join(nameList)
        else:
          return f' ({len(nameList)} candidates)'

    def label(self):
        elimStr = self.getStringFor(self.eliminatedNames)
        winStr = self.getStringFor(self.winnerNames)
        if elimStr != '':
            elimStr += ' eliminated'
        if winStr != '':
            winStr += ' won'

        if elimStr and winStr:
            extraStr = f' ({elimStr}, {winStr})'
        elif elimStr:
            extraStr = f' ({elimStr})'
        elif winStr:
            extraStr = f' ({winStr})'
        else:
            extraStr = ''

        return f'Round {self.round_i+1}' + extraStr

    def addEliminated(self, name):
        self.eliminatedNames.append(name)

    def addWinner(self, name):
        self.winnerNames.append(name)

class CandidateInfo:
    def __init__(self, name):
        self.name = name
        self.votesAddedPerRound = []
        self.currRoundNumVotes = 0

    def addVotes(self, amount):
        self.votesAddedPerRound.append(amount - self.currRoundNumVotes)
        self.currRoundNumVotes = amount

class D3Bargraph:
    def __init__(self, graph):
        numCandidates = len(graph.nodesPerRound[0])
        numRounds = len(graph.nodesPerRound)

        candidatesToRoundSums = {}
        rounds = [RoundInfo(i) for i in range(numRounds)]

        candidates = {}
        alreadyWonInPreviousRound = []
        for node in graph.nodes:
            item = node.item
            if item not in candidates:
                candidates[item] = CandidateInfo(item.name)

            currRound = len(candidates[item].votesAddedPerRound)
            candidates[item].addVotes(node.count)

            if node.isWinner:
                # Only count winner the first time they win
                if item not in alreadyWonInPreviousRound:
                    rounds[currRound].addWinner(item.name)
                    alreadyWonInPreviousRound.append(item)
            if node.isEliminated:
                rounds[currRound].addEliminated(item.name)

        candidatesJs = []
        for candidate in candidates.values():
            candidateJs = {'candidate': candidate.name}
            for i, votes in enumerate(candidate.votesAddedPerRound):
                candidateJs[rounds[i].label()] = votes
            candidatesJs.append(candidateJs)

        # Make round labels
        rounds = [rounds[i].label() for i in range(numRounds)]

        palette = ColorGenerator(numRounds)
        colors = [Color(next(palette)).asHex() for i in range(numRounds)]

        longestLabelApxWidth = max([approxLength(n.label) for n in graph.nodesPerRound[0].values()])
        print(longestLabelApxWidth)

        js = f'var data = {candidatesJs};'
        js += f'\nvar candidatesRange = {list(rounds)};'
        js += f'\nvar colors = {str(colors)};'
        js += f'\nvar longestLabelApxWidth = {longestLabelApxWidth};'
        self.js = js
