from django.shortcuts import render, redirect, get_object_or_404
from .forms import UploadFileForm

from .models import JsonConfig
from .sankey.graphToD3 import D3Sankey
from .bargraph.graphToD3 import D3Bargraph
from .tabular.tabular import TabulateByRoundInteractive, TabulateByRound, TabulateByCandidate
from rcvis.settings import OFFLINE_MODE
from visualizer.graphCreator.graphCreator import makeGraphWithFile, BadJSONError

def index(request):
    return render(request, 'visualizer/index.html', {})

def upload(request):
    if request.method == 'POST' and request.FILES.get('rcvJson'):
        visualizerJson = request.FILES['rcvJson']

        config = JsonConfig(jsonFile=visualizerJson)
        config.hideDecimals = request.POST.get('hideDecimals', False) == "on"
        config.rotateNames = request.POST.get('rotateNames', False) == "on"
        config.horizontalSankey = request.POST.get('horizontalSankey', False) == "on"
        config.onlyShowWinnersTabular = request.POST.get('onlyShowWinnersTabular', True) == "on"
        config.doHideOverflowAndEliminated = request.POST.get('doHideOverflowAndEliminated', True) == "on"
        config.doUseHorizontalBarGraph = request.POST.get('doUseHorizontalBarGraph', True) == "on"
        config.excludeFinalWinnerAndEliminatedCandidate = request.POST.get('excludeFinalWinnerAndEliminatedCandidate', False) == "on"
        config.hideSankey = request.POST.get('hideSankey', False) == "on"
        config.hideTabular = request.POST.get('hideTabular', False) == "on"
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

        context = {
            'rcvresult': config.slug
        }
        return redirect('visualize', rcvresult=config.slug);
    else:
        form = UploadFileForm()
        return render(request, 'visualizer/uploadFile.html', {'form': form})

def getDataForView(config):
    graph = makeGraphWithFile(config)
    d3Bargraph = D3Bargraph(graph)
    d3Sankey = D3Sankey(graph)
    tabularByCandidate = TabulateByCandidate(graph, config.onlyShowWinnersTabular)
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
        'tabularByRound': tabularByRound,
        'tabularByRoundInteractive': tabularByRoundInteractive,
        'offlineMode': offlineMode
    }

def visualize(request, rcvresult):
    config = get_object_or_404(JsonConfig, slug=rcvresult)
    data = getDataForView(config)
    return render(request, 'visualizer/visualize.html', data)
