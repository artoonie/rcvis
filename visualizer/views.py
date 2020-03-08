from django.shortcuts import render, redirect, get_object_or_404
from django.http import HttpResponseRedirect, HttpResponse
from django.views.decorators.clickjacking import xframe_options_exempt
from .forms import UploadFileForm

import json

from .models import JsonConfig
from .sankey.graphToD3 import D3Sankey
from .bargraph.graphToD3 import D3Bargraph
from .tabular.tabular import TabulateByRoundInteractive, TabulateByRound, TabulateByCandidate, TabularCandidateByRound
from rcvis.settings import OFFLINE_MODE
from visualizer.graphCreator.graphCreator import makeGraphWithFile, BadJSONError

def index(request):
    return render(request, 'visualizer/index.html', {})

""" leaveDefaultInsteadOfAssumeOff: if set, then data not in requestData is not updated
        in config. Otherwise, data not in requestData is assumed to be OFF. """
def updateConfigWithData(config, requestData):
    def fillOption(optionName):
        config.__dict__[optionName] = requestData.get(optionName, False) == "on"

    fillOption('hideDecimals')
    fillOption('rotateNames')
    fillOption('horizontalSankey')
    fillOption('onlyShowWinnersTabular')
    fillOption('doHideOverflowAndEliminated')
    fillOption('doUseHorizontalBarGraph')
    fillOption('excludeFinalWinnerAndEliminatedCandidate')
    fillOption('hideSankey')
    fillOption('hideTabular')

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
        data = {
          'config': JsonConfig(), # default config to check default boxes
          'form': UploadFileForm()
        }
        return render(request, 'visualizer/uploadFile.html', data)

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

@xframe_options_exempt
def visualize(request, rcvresult):
    config = get_object_or_404(JsonConfig, slug=rcvresult)

    if 'overrideSettings' in request.GET:
        try:
            updateConfigWithData(config, request.GET)
        except:
            # For debugging: display request
            # raise
            # For prod: this should never happen, the data is sanitary...
            return HttpResponseRedirect("index")

    data = getDataForView(config)
    return render(request, 'visualizer/visualize.html', data)

def oembed(request):
    requestData = request.GET
    url = str(requestData.get('url')) # only required field
    maxwidth = int(requestData.get('maxwidth', 1440))
    maxheight = int(requestData.get('maxheight', 1080))
    returnType = str(requestData.get('type', 'json'))

    if returnType == 'xml':
        # not implemented
        return HttpResponse(status=501)

    renderData = { 'width': maxwidth, 'height': maxheight, 'url': url}
    httpResponse = render(request, 'visualizer/oembed.html', renderData)

    jsonData = {
        "version": "1.0",
        "title": "Ranked Choice Voting Visualization",
        "cache_age": "86400", # one day
        "author_name": "rcvis.com",
        "author_url": "http://www.rcvis.com/",
        "provider_name": "rcvis.com",
        "provider_url": "http://www.rcvis.com/"
    }
    jsonData['type'] = "rich"
    jsonData['width'] = maxwidth
    jsonData['height'] = maxheight
    jsonData['url'] = url
    jsonData['html'] = httpResponse.content.decode('utf-8')

    return HttpResponse(json.dumps(jsonData), content_type='application/json')
