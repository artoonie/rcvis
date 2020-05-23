from visualizer.graphCreator.colors import ColorGenerator, Color
from visualizer.jsUtils import approx_length


class D3Bargraph:
    js: str  # We just...throw all the javascript into here

    def __init__(self, graph):
        numRounds = len(graph.nodesPerRound)

        # Summarize the graph into rounds and candidate sums
        summary = graph.summarize()
        candidates = summary.candidates
        rounds = summary.rounds
        assert (len(rounds) == numRounds)

        # Convert the candidates structure to one for the javascript:
        # A list of dictionaries, each dict mapping a label to a vote count
        candidatesJs = []
        for candidate in candidates.values():
            candidateJs = {'candidate': candidate.name}
            for i, votes in enumerate(candidate.votesAddedPerRound):
                candidateJs[get_label_for(rounds[i])] = votes
            candidatesJs.append(candidateJs)

        # Get the total votes per round
        totalVotesPerRound = [r.totalActiveVotes for r in rounds]

        # Make round labels
        rounds = [get_label_for(rounds[i]) for i in range(numRounds)]

        # Get the winners each round, flip list into dict
        numRoundsTilWin = {}
        for r in summary.rounds:
            for winner in r.winnerNames:
                numRoundsTilWin[winner] = r.round_i

        palette = ColorGenerator(numRounds)
        colors = [Color(next(palette)).as_hex() for i in range(numRounds)]

        longestLabelApxWidth = max([approx_length(n.label)
                                    for n in graph.nodesPerRound[0].values()])

        js = f'var data = {candidatesJs};'
        js += f'\nvar candidatesRange = {list(rounds)};'
        js += f'\nvar threshold = {float(graph.threshold)};'
        js += f'\nvar colors = {str(colors)};'
        js += f'\nvar longestLabelApxWidth = {longestLabelApxWidth};'
        js += f'\nvar totalVotesPerRound = {totalVotesPerRound};'
        js += f'\nvar numRoundsTilWin = {numRoundsTilWin};'
        self.js = js


def get_label_for(roundInfo):
    def getStringFor(nameList):
        if len(nameList) == 0:
            return ''
        elif len(nameList) <= 3:
            return ' & '.join(nameList)
        else:
            return f' ({len(nameList)} candidates)'

    elimStr = getStringFor(roundInfo.eliminatedNames)
    winStr = getStringFor(roundInfo.winnerNames)
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

    return f'Round {roundInfo.round_i + 1}' + extraStr
