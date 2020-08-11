from rcvis.settings import OFFLINE_MODE
from visualizer.bargraph.graphToD3 import D3Bargraph
from visualizer.graphCreator.graphCreator import make_graph_with_file
from visualizer.sankey.graphToD3 import D3Sankey
from visualizer.tabular.tabular import TabulateByRoundInteractive,\
    TabulateByRound,\
    TabulateByCandidate,\
    TabularCandidateByRound

def _get_data_for_view(config):
    graph = make_graph_with_file(config.jsonFile,
                                 config.excludeFinalWinnerAndEliminatedCandidate)
    d3Bargraph = D3Bargraph(graph)
    d3Sankey = D3Sankey(graph)
    tabularByCandidate = TabulateByCandidate(graph, config.onlyShowWinnersTabular)
    tabularCandidateByRound = TabularCandidateByRound(graph)
    tabularByRound = TabulateByRound(graph)
    tabularByRoundInteractive = TabulateByRoundInteractive(graph)
    offlineMode = OFFLINE_MODE
    return {
        'title': graph.title,
        'date': graph.dateString,
        'config': config,
        'bargraphjs': d3Bargraph.js,
        'sankeyjs': d3Sankey.js,
        'tabularByCandidate': tabularByCandidate,
        'tabularCandidateByRound': tabularCandidateByRound,
        'tabularByRound': tabularByRound,
        'tabularByRoundInteractive': tabularByRoundInteractive,
        'offlineMode': offlineMode
    }
