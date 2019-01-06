from django.core.files.storage import FileSystemStorage
from django.http import HttpResponse
from django.template import loader
from django.shortcuts import render
from .forms import UploadFileForm

from .graphCreator.sankeyCreator import makeGraphWithFile

def index(request):
    if request.method == 'POST' and request.FILES['myfile']:
        myfile = request.FILES['myfile']
        fs = FileSystemStorage()
        d3Sankey = makeGraphWithFile(myfile.name)
        return render(request, 'sankey/sankey-example.html', {
            'sankeyjs': d3Sankey.js
        })
    else:
        form = UploadFileForm()
    return render(request, 'sankey/uploadFile.html', {'form': form})
