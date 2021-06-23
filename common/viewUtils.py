""" Utility functions shared across views, in either movie or visualizer apps """

import json

from django.shortcuts import render

from rcvis.settings import OFFLINE_MODE
from visualizer.bargraph.graphToD3 import D3Bargraph
from visualizer.descriptors.faq import FAQGenerator
from visualizer.descriptors.roundDescriber import Describer
from visualizer.graph.graphCreator import make_graph_with_file
from visualizer.models import TextForWinner
from visualizer.sankey.graphToD3 import D3Sankey
from visualizer.tabular.tabular import TabulateByRoundInteractive,\
    TabulateByRound,\
    TabulateByCandidate,\
    SingleTableSummary


class DefaultConfig():  # pylint: disable=too-few-public-methods
    """
    A simplified JsonConfig with just the default values.
    Use this to pass to functions that require a config if you do not have
    or need a config (e.g. in validators).
    """

    def __init__(self):
        self.onlyShowWinnersTabular = False
        self.textForWinner = TextForWinner.ELECTED


def get_embed_html(embedUrl, request, vistype, maxwidth, maxheight):
    """ Given the absolute URL to the visualizeEmbedded page, returns the UTF-8 encoded HTML
        needed to embed that page in an iframe. """
    # Force HTTPS because embedly requires it
    if not embedUrl.startswith('https'):
        embedUrl = 'https' + embedUrl[4:]

    renderData = {
        'width': maxwidth,
        'height': maxheight,
        'iframe_url': embedUrl,
        'vistype': vistype
    }

    httpResponse = render(request, 'visualizer/oembed.html', renderData)
    html = httpResponse.content.decode('utf-8')
    return html


def get_data_for_graph(graph, config):
    """
    Helper function for get_data_for_view:
    convert the graph to data to be passed on to JS.
    """
    d3Bargraph = D3Bargraph(graph)
    d3Sankey = D3Sankey(graph)
    tabularByCandidate = TabulateByCandidate(graph, config)
    singleTableSummary = SingleTableSummary(graph)
    tabularByRound = TabulateByRound(graph)
    tabularByRoundInteractive = TabulateByRoundInteractive(graph, config)
    graphData = {
        'title': graph.title,
        'date': graph.dateString,
        'bargraphjs': d3Bargraph.js,
        'sankeyjs': d3Sankey.js,
        'tabularByCandidate': tabularByCandidate,
        'singleTableSummary': singleTableSummary,
        'tabularByRound': tabularByRound,
        'tabularByRoundInteractive': tabularByRoundInteractive,
        'graph': graph
    }
    roundDescriberData = get_data_for_round_describer(graph, config)
    graphData.update(roundDescriberData)
    return graphData


def get_data_for_round_describer(graph, config):
    """
    Helper function for get_data_for_view:
    convert the round describer to data to be passed on to JS
    """
    roundDescriber = Describer(graph, summarizeAsParagraph=False)
    humanFriendlyEventsPerRound = roundDescriber.describe_all_rounds()
    humanFriendlySummary = roundDescriber.describe_initial_summary(isForVideo=False)
    faqsPerRound = json.dumps(FAQGenerator(graph, config).describe_all_rounds())

    return {
        'humanFriendlyEventsPerRound': humanFriendlyEventsPerRound,
        'humanFriendlySummary': humanFriendlySummary,
        'faqsPerRound': faqsPerRound
    }


def get_data_for_view(config):
    """ All data needed to pass on to the visualize or visualizeembedded view """
    graph = make_graph_with_file(config.jsonFile,
                                 config.excludeFinalWinnerAndEliminatedCandidate)
    if config.candidateSidecarFile:
        candidateSidecarDataPyObj = json.load(config.candidateSidecarFile)

        # TODO this doesn't feel good - the graph should load this natively,
        # not have it snuck here.
        orderedItems = graph.get_items_for_names(candidateSidecarDataPyObj['order'])
        graph.set_elimination_order(orderedItems)
    else:
        candidateSidecarDataPyObj = None
    candidateSidecarData = json.dumps(candidateSidecarDataPyObj)

    offlineMode = OFFLINE_MODE

    graphData = get_data_for_graph(graph, config)
    additionalData = {
        'config': config,
        'offlineMode': offlineMode,
        'candidateSidecarDataPyObj': candidateSidecarDataPyObj,
        'candidateSidecarData': candidateSidecarData
    }
    graphData.update(additionalData)
    return graphData


def get_script_to_disable_animations():
    """ Disables transitions on the current page """
    return "var animDisabler = document.createElement('style');\
            animDisabler.textContent = '*{ transition: none !important;\
                                      transition-property: none !important; }';\
            document.head.appendChild(animDisabler);"
