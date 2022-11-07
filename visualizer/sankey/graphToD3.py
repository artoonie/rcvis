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
        js += f'longestLabelApxWidth = {longestLabelApxWidth};\n'
        js += f'totalVotesPerRound = {totalVotesPerRound};\n'
        js += 'graph = {"nodes" : [], "links" : []};\n'

        # Maps Items to a unique index. Used for color indexing.
        indices = {item: i for i, item in enumerate(graph.eliminationOrder)}

        nodeIndices = {}
        for i, node in enumerate(graph.nodes):
            # Skip inactive (exhausted) nodes
            if not node.item.isActive:
                continue

            nodeIndices[node] = i
            js += f'graph.nodes.push({{ "name": {json.dumps(node.label)},\n'
            js += f'                    "round": {node.roundNum},\n'
            js += f'                    "value": {node.count},\n'
            js += f'                    "isWinner": {node.isWinner},\n'
            js += f'                    "isEliminated": {node.isEliminated},\n'
            js += f'                    "index": "{indices[node.item]}"}});\n'
        for link in graph.links:
            # Skip inactive (exhausted) nodes
            if not link.source.item.isActive:
                continue
            if not link.target.item.isActive:
                continue

            sourceIndex = nodeIndices[link.source]
            targetIndex = nodeIndices[link.target]
            js += f'graph.links.push({{ "source": {sourceIndex},\n'
            js += f'                    "target": {targetIndex},\n'
            js += f'            "candidateIndex": {indices[link.source.item]},\n'
            js += f'                     "value": {link.value:0.3f} }});\n'
        self.js = js
