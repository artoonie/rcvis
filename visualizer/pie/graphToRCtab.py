"""
Convert a Graph object into an RCTab-compatible JSON dict for the pie chart.

Other rcvis visualizations (bar chart, sankey, tabular) consume GraphSummary,
which respects config options like excludeFinalWinnerAndEliminatedCandidate.
The pie chart component expects RCTab's JSON format (results/tally/tallyResults).

This module bridges the two: it reads from the processed Graph (which already
has config filters applied) and produces the JSON structure the pie chart needs.
"""

from visualizer import common
from visualizer.graph.rcvResult import Elimination, WinTransfer


def _stringify(value):
    """ Convert a number to string, matching RCTab JSON convention.
        Integers are formatted without decimals. """
    if isinstance(value, float) and value == int(value):
        return str(int(value))
    return str(value)


def graph_to_rctab_json(graph):
    """
    Build an RCTab-compatible JSON dict from a processed Graph.

    The Graph has already been through config filters (e.g.
    excludeFinalWinnerAndEliminatedCandidate) and migrations,
    so the output respects those settings.

    All candidates present in the Graph are included in the tally,
    including "Inactive Ballots" and "Residual Surplus" pseudo-candidates
    (the pie chart handles these by name).

    Returns a dict matching the RCtabSummary TypeScript interface.
    """
    summary = graph.summarize()
    num_rounds = graph.numRounds

    # Count active (real) candidates for the summary
    inactive_names = {common.INACTIVE_TEXT, common.RESIDUAL_SURPLUS_TEXT}
    num_active_candidates = sum(1 for c in graph.candidates if c.name not in inactive_names)

    results = []
    for round_i in range(num_rounds):
        nodes_this_round = graph.nodesPerRound[round_i]

        # Build tally: candidate name -> vote count (as string)
        # Include all candidates present this round (including Inactive Ballots)
        tally = {}
        for candidate, node in nodes_this_round.items():
            tally[candidate.name] = _stringify(node.count)

        # Build tallyResults from transfersPerRound
        tally_results = []
        for transfer in graph.transfersPerRound[round_i]:
            tally_result = {}

            if isinstance(transfer, Elimination):
                tally_result['eliminated'] = transfer.candidate.name
            elif isinstance(transfer, WinTransfer):
                tally_result['elected'] = transfer.candidate.name
            else:
                # Plain Transfer with no election/elimination action — skip
                continue

            # Build transfers dict: target candidate name -> vote count
            transfers = {}
            for target_candidate, count in transfer.transfersByCandidate.items():
                if count != 0:
                    transfers[target_candidate.name] = _stringify(count)
            tally_result['transfers'] = transfers

            tally_results.append(tally_result)

        # Compute inactive ballots (exhausted choices) for the inactiveBallots field
        inactive_ballots = {}
        for candidate in graph.candidates:
            if candidate.name == common.INACTIVE_TEXT and candidate in nodes_this_round:
                exhausted = nodes_this_round[candidate].count
                if exhausted > 0:
                    inactive_ballots['exhaustedChoices'] = _stringify(exhausted)
                break

        # Threshold: RCTab has per-round threshold, rcvis stores a single value
        threshold = _stringify(graph.threshold) if graph.threshold is not None else "0"

        results.append({
            'round': round_i + 1,
            'tally': tally,
            'tallyResults': tally_results,
            'inactiveBallots': inactive_ballots,
            'threshold': threshold,
        })

    # Build summary
    first_round_total = summary.rounds[0].totalActiveVotes if summary.rounds else 0

    rctab_json = {
        'config': {
            'contest': graph.title,
        },
        'jsonFormatVersion': '1',
        'results': results,
        'summary': {
            'finalThreshold': _stringify(graph.threshold) if graph.threshold is not None else "0",
            'numCandidates': num_active_candidates,
            'numWinners': summary.numWinners,
            'totalNumBallots': _stringify(first_round_total),
        },
    }

    if graph.dateString:
        rctab_json['config']['date'] = graph.dateString

    return rctab_json
