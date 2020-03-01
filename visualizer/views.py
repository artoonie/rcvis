from django.shortcuts import render, redirect, get_object_or_404
from django.http import HttpResponseRedirect
from .forms import UploadFileForm

from .models import JsonConfig
from .sankey.graphToD3 import D3Sankey
from .bargraph.graphToD3 import D3Bargraph
from .tabular.tabular import TabulateByRoundInteractive, TabulateByRound, TabulateByCandidate, TabularCandidateByRound
from rcvis.settings import OFFLINE_MODE
from visualizer.graphCreator.graphCreator import makeGraphWithFile, BadJSONError

def index(request):
    return render(request, 'visualizer/index.html', {})

def updateConfigWithData(config, requestData):
    config.hideDecimals = requestData.get('hideDecimals', False) == "on"
    config.rotateNames = requestData.get('rotateNames', False) == "on"
    config.horizontalSankey = requestData.get('horizontalSankey', False) == "on"
    config.onlyShowWinnersTabular = requestData.get('onlyShowWinnersTabular', True) == "on"
    config.doHideOverflowAndEliminated = requestData.get('doHideOverflowAndEliminated', True) == "on"
    config.doUseHorizontalBarGraph = requestData.get('doUseHorizontalBarGraph', True) == "on"
    config.excludeFinalWinnerAndEliminatedCandidate = requestData.get('excludeFinalWinnerAndEliminatedCandidate', False) == "on"
    config.hideSankey = requestData.get('hideSankey', False) == "on"
    config.hideTabular = requestData.get('hideTabular', False) == "on"

def upload(request):
    if request.method == 'POST' and request.FILES.get('rcvJson'):
        visualizerJson = request.FILES['rcvJson']
        config = JsonConfig(jsonFile=visualizerJson)
        updateConfigWithData(config, request.POST)

        try:
          graph = makeGraphWithFile(config)
          graph.summarize()
          d3Sankey = D3Sankey(graph)
        except BadJSONError:
          return render(request, 'visualizer/errorBadJson.html')
        except:
          # TODO make an error page for this, too
          return redirect(request, '/')

        # if it successfully created a graph, save it
        config.save()

        return redirect('visualize', rcvresult=config.slug);
    else:
        form = UploadFileForm()
        return render(request, 'visualizer/uploadFile.html', {'form': form})

def getDataForView(config):
    graph = makeGraphWithFile(config)
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

def visualize(request, rcvresult):
    config = get_object_or_404(JsonConfig, slug=rcvresult)

    if request.method == 'GET':
        try:
            updateConfigWithData(config, request.GET)
        except:
            # For debugging: display request
            # raise
            # For prod: this should never happen, the data is sanitary...
            return HttpResponseRedirect("index")

    data = getDataForView(config)
    return render(request, 'visualizer/visualize.html', data)
