""" Utility functions shared across views, in either movie or visualizer apps """

import json

from django.shortcuts import render

from rcvis.settings import OFFLINE_MODE
from visualizer.bargraph.graphToD3 import D3Bargraph
from visualizer.descriptors.faq import FAQGenerator
from visualizer.descriptors.roundDescriber import Describer
from visualizer.graph.graphCreator import make_graph_with_file
from visualizer.sankey.graphToD3 import D3Sankey
from visualizer.tabular.tabular import TabulateByRoundInteractive,\
    TabulateByRound,\
    TabulateByCandidate,\
    SingleTableSummary


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


def get_data_for_view(config):
    """ All data needed to pass on to the visualize or visualizeembedded view """
    graph = make_graph_with_file(config.jsonFile,
                                 config.excludeFinalWinnerAndEliminatedCandidate)

    roundDescriber = Describer(graph, summarizeAsParagraph=False)
    humanFriendlyEventsPerRound = roundDescriber.describe_all_rounds()
    humanFriendlySummary = roundDescriber.describe_initial_summary(isForVideo=False)
    faqsPerRound = json.dumps(FAQGenerator(graph).describe_all_rounds())

    d3Bargraph = D3Bargraph(graph)
    d3Sankey = D3Sankey(graph)
    tabularByCandidate = TabulateByCandidate(graph, config.onlyShowWinnersTabular)
    singleTableSummary = SingleTableSummary(graph)
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
        'singleTableSummary': singleTableSummary,
        'tabularByRound': tabularByRound,
        'tabularByRoundInteractive': tabularByRoundInteractive,
        'humanFriendlyEventsPerRound': humanFriendlyEventsPerRound,
        'humanFriendlySummary': humanFriendlySummary,
        'faqsPerRound': faqsPerRound,
        'offlineMode': offlineMode,
        'graph': graph
    }

def get_script_to_disable_animations():
    """ Disables transitions on the current page """
    return "var animDisabler = document.createElement('style');\
            animDisabler.textContent = '*{ transition: none !important;\
                                      transition-property: none !important; }';\
            document.head.appendChild(animDisabler);"
