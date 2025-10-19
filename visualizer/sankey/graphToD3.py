import json

from visualizer.jsUtils import approx_length


class D3Sankey:
    def __init__(self, graph):
        longestLabelApxWidth = max([approx_length(n.label)
                                    for n in graph.nodesPerRound[0].values()])
        totalVotesPerRound = [r.totalActiveVotes for r in graph.summary.rounds]
        js = ''
        js += f'numRounds = {graph.numRounds};\n'
        js += f'numCandidates = {len(graph.nodesPerRound[0])} ;\n'
        js += f'numWinners = {graph.summarize().numWinners} ;\n'
        js += f'longestLabelApxWidth = {longestLabelApxWidth};\n'
        js += f'totalVotesPerRound = {totalVotesPerRound};\n'
        js += 'graph = {"nodes" : [], "links" : []};\n'

        # Maps Candidates to a unique index. Used for color indexing.
        indices = {candidate: i for i, candidate in enumerate(graph.eliminationOrder)}

        nodeIndices = {}
        for i, node in enumerate(graph.nodes):
            # Skip inactive (exhausted) nodes
            if not node.candidate.isActive:
                continue

            nodeIndices[node] = i
            js += f'graph.nodes.push({{ "name": {json.dumps(node.label)},\n'
            js += f'                    "round": {node.roundNum},\n'
            js += f'                    "value": {node.count},\n'
            js += f'                    "isWinner": {int(node.isWinner)},\n'
            js += f'                    "isEliminated": {int(node.isEliminated)},\n'
            js += f'                    "index": "{indices[node.candidate]}"}});\n'
        for link in graph.links:
            # Skip inactive (exhausted) nodes
            if not link.source.candidate.isActive:
                continue
            if not link.target.candidate.isActive:
                continue

            sourceIndex = nodeIndices[link.source]
            targetIndex = nodeIndices[link.target]
            js += f'graph.links.push({{ "source": {sourceIndex},\n'
            js += f'                    "target": {targetIndex},\n'
            js += f'            "candidateIndex": {indices[link.source.candidate]},\n'
            js += f'                     "value": {link.value:0.3f} }});\n'
        self.js = js
