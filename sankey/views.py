from django.core.files.storage import FileSystemStorage
from django.http import HttpResponse
from django.template import loader
from django.shortcuts import render
from .forms import UploadFileForm

from .graphCreator.sankeyCreator import makeGraphWithFile
from .graphCreator.graphToD3 import D3Sankey

def index(request):
    if request.method == 'POST' and request.FILES['myfile']:
        myfile = request.FILES['myfile']
        fs = FileSystemStorage()
        graph = makeGraphWithFile(myfile.file)
        d3Sankey = D3Sankey(graph)
        return render(request, 'sankey/sankey-example.html', {
            'title': graph.title,
            'date': graph.dateString,
            'sankeyjs': d3Sankey.js
        })
    else:
        form = UploadFileForm()
    return render(request, 'sankey/uploadFile.html', {'form': form})
