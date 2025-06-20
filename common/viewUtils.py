""" Utility functions shared across views, in either movie or visualizer apps """

import json
from urllib.parse import urlparse

from django.conf import settings
from visualizer.bargraph.graphToD3 import D3Bargraph
from visualizer.descriptors.faq import FAQGenerator
from visualizer.descriptors.roundDescriber import Describer
from visualizer.descriptors.textForWinnerUtils import as_caption
from visualizer.graph.graphCreator import make_graph_with_file
from visualizer.models import TextForWinner
from visualizer.sankey.graphToD3 import D3Sankey
from visualizer.sidecar.reader import SidecarReader
from visualizer.tabular.tabular import TabulateByRoundInteractive, \
    TabulateByRound, \
    TabulateByCandidate, \
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
        self.isPreferentialBlock = False
        self.excludeFinalWinnerAndEliminatedCandidate = False


def get_embed_html(embedlyUrl, maxwidth, maxheight):
    """ Given the absolute URL to the visualizeEmbedly page, returns the UTF-8 encoded HTML
        needed to embed that page in an iframe. """
    # Force HTTPS because embedly requires it
    if not embedlyUrl.startswith('https'):
        embedlyUrl = 'https' + embedlyUrl[4:]

    html = f'<iframe width="{maxwidth}" height="{maxheight}" src="{embedlyUrl}" '\
        'frameborder="0" allowfullscreen="allowfullscreen"></iframe>'
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
        'graph': graph,
        'textForWinner': as_caption(config).lower(),
    }
    roundDescriberData = get_data_for_round_describer(graph, config)
    graphData.update(roundDescriberData)
    return graphData


def get_data_for_round_describer(graph, config):
    """
    Helper function for get_data_for_view:
    convert the round describer to data to be passed on to JS
    """
    roundDescriber = Describer(graph, config, summarizeAsParagraph=False)
    humanFriendlyEventsPerRound = roundDescriber.describe_all_rounds()
    humanFriendlySummary = roundDescriber.describe_initial_summary(isForVideo=False)
    faqsPerRound = json.dumps(FAQGenerator(graph, config).describe_all_rounds())

    return {
        'humanFriendlyEventsPerRound': json.dumps(humanFriendlyEventsPerRound),
        'humanFriendlySummary': json.dumps(humanFriendlySummary),
        'faqsPerRound': faqsPerRound
    }


def get_data_for_view(config):
    """ All data needed to pass on to the visualize or visualizeembedded view """
    graph = make_graph_with_file(config.jsonFile,
                                 config.excludeFinalWinnerAndEliminatedCandidate)
    if config.candidateSidecarFile:
        candidateSidecarDataPyObj = SidecarReader(config.candidateSidecarFile)

        # TODO this doesn't feel good - the graph should load this natively,
        # not have it snuck here.
        orderedItems = graph.get_items_for_names(candidateSidecarDataPyObj.data['order'])
        graph.set_elimination_order(orderedItems)
        candidateSidecarData = json.dumps(candidateSidecarDataPyObj.data)
    else:
        candidateSidecarDataPyObj = None
        candidateSidecarData = json.dumps(None)

    offlineMode = settings.OFFLINE_MODE

    graphData = get_data_for_graph(graph, config)
    sourceDomain = None
    if config.dataSourceURL:
        sourceDomain = urlparse(config.dataSourceURL).netloc
        if sourceDomain.startswith('www.'):
            sourceDomain = sourceDomain[4:]
    additionalData = {
        'config': config,
        'sourceDomain': sourceDomain,
        'offlineMode': offlineMode,
        'candidateSidecarData': candidateSidecarData
    }
    graphData.update(additionalData)
    return graphData


def get_script_to_disable_animations():
    """ Disables transitions on the current page """
    return "var animDisabler = document.createElement('style');\
            animDisabler.textContent = '*{ transition: none !important;\
                                      transition-property: none !important; }';\
            document.head.appendChild(animDisabler);\
            \
            let fakeTime = 0;\
            window.requestAnimationFrame = function(f) { fakeTime += 300; f(fakeTime); }"


def request_to_domain(request):
    """ Gets the domain name from the request """
    relativeUrl = request.get_full_path()
    absoluteUrl = request.build_absolute_uri(relativeUrl)
    return absoluteUrl[:absoluteUrl.find(relativeUrl)]
