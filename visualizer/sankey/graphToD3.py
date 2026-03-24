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
        # Maps Candidates to a single char key (a-z) ordered by elimination order.
        # Position in charMap doubles as the color index. Supports up to 26 candidates.
        elimination_order = list(graph.eliminationOrder)
        candidate_to_char = {c: chr(ord('a') + i) for i, c in enumerate(elimination_order)}
        char_map = {chr(ord('a') + i): c.name for i, c in enumerate(elimination_order)}

        nodeIndices = {}
        nodes = []
        for node in graph.nodes:
            # Skip inactive (exhausted) nodes
            if not node.candidate.isActive:
                continue

            nodeIndices[node] = len(nodes)
            nodes.append([
                candidate_to_char[node.candidate],
                node.roundNum,
                node.count,
                int(node.isWinner),
                int(node.isEliminated),
            ])

        links = []
        for link in graph.links:
            # Skip inactive (exhausted) nodes
            if not link.source.candidate.isActive:
                continue
            if not link.target.candidate.isActive:
                continue

            links.append([
                nodeIndices[link.source],
                nodeIndices[link.target],
                round(link.value, 3),
            ])

        js += f'charMap = {json.dumps(char_map)};\n'
        js += f'graphCompressed = {json.dumps({"nodes": nodes, "links": links})};\n'
        self.js = js
