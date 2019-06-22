from django.shortcuts import render, redirect
from .forms import UploadFileForm

from .graphCreator.sankeyCreator import SankeyConfig, makeGraphWithFile
from .graphCreator.graphToD3 import D3Sankey

def index(request):
    form = UploadFileForm()
    return render(request, 'sankey/uploadFile.html', {'form': form})

def display(request):
    if request.method == 'POST' and request.FILES.get('sankeyJson'):
        sankeyJson = request.FILES['sankeyJson']

        config = SankeyConfig();
        config.hideDecimals = request.POST.get('hideDecimals', False)
        config.hideTransferlessRounds = request.POST.get('combineWinner', False)
        config.rotateNames = request.POST.get('rotateNames', False)
        graph = makeGraphWithFile(sankeyJson.file, config)
        d3Sankey = D3Sankey(graph)

        return render(request, 'sankey/sankey.html', {
            'title': graph.title,
            'date': graph.dateString,
            'config': config,
            'sankeyjs': d3Sankey.js
        })
        return render(request, 'sankey/uploadFile.html', {'form': form})
    else:
        return redirect('index')
