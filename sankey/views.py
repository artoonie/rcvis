from django.http import HttpResponse
from django.template import loader
from django.shortcuts import render
from .forms import UploadFileForm

def index(request):
    if request.method == 'POST':
        form = UploadFileForm(request.POST, request.FILES)
        if form.is_valid():
            return HttpResponse("you have uploaded" + request.FILES['file'])
    else:
        form = UploadFileForm()
    return render(request, 'sankey/uploadFile.html', {'form': form})
