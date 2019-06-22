from django.shortcuts import render, redirect, get_object_or_404
from .forms import UploadFileForm

from .models import JsonConfig
from .graphCreator.sankeyCreator import makeGraphWithFile
from .graphCreator.graphToD3 import D3Sankey

def index(request):
    form = UploadFileForm()
    return render(request, 'sankey/uploadFile.html', {'form': form})

def upload(request):
    if request.method == 'POST' and request.FILES.get('sankeyJson'):
        sankeyJson = request.FILES['sankeyJson']

        config = JsonConfig(jsonFile=sankeyJson)
        config.hideDecimals = request.POST.get('hideDecimals', False) == "on"
        config.hideTransferlessRounds = request.POST.get('combineWinner', False) == "on"
        config.rotateNames = request.POST.get('rotateNames', False) == "on"
        graph = makeGraphWithFile(config)
        d3Sankey = D3Sankey(graph)

        # if it successfully created a graph, save it
        config.save()

        context = {
            'rcvresult': config.slug
        }
        return redirect('display', rcvresult=config.slug);
    else:
        return redirect('index')

def display(request, rcvresult):
    config = get_object_or_404(JsonConfig, slug=rcvresult)

    graph = makeGraphWithFile(config)
    d3Sankey = D3Sankey(graph)
    return render(request, 'sankey/sankey.html', {
        'title': graph.title,
        'date': graph.dateString,
        'config': config,
        'sankeyjs': d3Sankey.js
    })
