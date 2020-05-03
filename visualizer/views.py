from django.contrib.staticfiles.templatetags.staticfiles import static
from django.shortcuts import render, redirect, get_object_or_404
from django.http import HttpResponseRedirect, HttpResponse
from django.urls import reverse
from django.views.decorators.clickjacking import xframe_options_exempt
from .forms import JsonConfigForm

from bakery.views import BuildableTemplateView, BuildableDetailView
from django.views.generic.edit import CreateView

import json
import urllib.parse

from .models import JsonConfig
from .sankey.graphToD3 import D3Sankey
from .bargraph.graphToD3 import D3Bargraph
from .tabular.tabular import TabulateByRoundInteractive, TabulateByRound, TabulateByCandidate, TabularCandidateByRound
from rcvis.settings import OFFLINE_MODE
from visualizer.graphCreator.graphCreator import makeGraphWithFile, BadJSONError

class Index(BuildableTemplateView):
  template_name = 'visualizer/index.html'
  build_path = 'index.html'

class Upload(CreateView):
  template_name = 'visualizer/uploadFile.html'
  success_url = 'visualize={slug}'
  model = JsonConfig
  form_class = JsonConfigForm

  def form_valid(self, form):
    try:
      graph = makeGraphWithFile(form.cleaned_data['jsonFile'], form.cleaned_data['excludeFinalWinnerAndEliminatedCandidate'])
      graph.summarize()
      d3Sankey = D3Sankey(graph)
    except BadJSONError:
      return self.form_invalid(form)
    except Exception as e:
      # TODO make an error page for this, too
      return redirect(self.request, '/')

    form.save()
    return super().form_valid(form)

  def form_invalid(self, form):
      return render(self.request, 'visualizer/errorBadJson.html')

def _getDataForView(config):
    graph = makeGraphWithFile(config.jsonFile, config.excludeFinalWinnerAndEliminatedCandidate)
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

def _makeCompleteUrl(urlWithoutDomain):
    # For ombed, always assume we're on the production site
    #scheme = request.is_secure() and 'https' or 'http'
    #host = request.META['HTTP_HOST']
    scheme = "https"
    host = "www.rcvis.com"
    return f"{scheme}://{host}{urlWithoutDomain}"


class Visualize(BuildableDetailView):
    model = JsonConfig
    template_name = 'visualizer/visualize.html'
    queryset = JsonConfig.objects.all()

    def get_context_data(self, **kwargs):
        config = super().get_context_data(**kwargs)

        data = _getDataForView(config['jsonconfig'])

        # oembed href
        slug = config['jsonconfig'].slug
        iframe_url = _makeCompleteUrl(reverse("visualizeEmbedded")) + f"?rcvresult={slug}"
        iframe_url_embedded = urllib.parse.quote_plus(iframe_url)
        oembed_url = _makeCompleteUrl(reverse("oembed")) + f"?url={iframe_url_embedded}"
        data['oembed_url'] = oembed_url

        return data

@xframe_options_exempt
def visualizeEmbedded(request):
    rcvresult = request.GET.get('rcvresult')
    config = get_object_or_404(JsonConfig, slug=rcvresult)
    data = _getDataForView(config)
    data['vistype'] = request.GET.get('vistype', 'barchart-interactive')
    return render(request, 'visualizer/visualize-embedded.html', data)

def oembed(request):
    requestData = request.GET
    url = str(requestData.get('url')) # only required field
    maxwidth = int(requestData.get('maxwidth', 1440))
    maxheight = int(requestData.get('maxheight', 1080))
    returnType = str(requestData.get('type', 'json'))
    vistype = str(requestData.get('vistype', 'barchart-interactive'))

    if returnType == 'xml':
        # not implemented
        return HttpResponse(status=501)

    renderData = {'width': maxwidth, 'height': maxheight, 'iframe_url': url, 'vistype': vistype}

    httpResponse = render(request, 'visualizer/oembed.html', renderData)

    jsonData = {
        "version": "1.0",
        "title": "Ranked Choice Voting Visualization",
        "cache_age": "86400", # one day
        "author_name": "rcvis.com",
        "author_url": "http://www.rcvis.com/",
        "provider_name": "rcvis.com",
        "provider_url": "http://www.rcvis.com/",
        "thumbnail":  _makeCompleteUrl(static("visualizer/icon_interactivebar.gif"))
    }
    jsonData['type'] = "rich"
    jsonData['width'] = maxwidth
    jsonData['height'] = maxheight
    jsonData['url'] = url
    jsonData['html'] = httpResponse.content.decode('utf-8')

    return HttpResponse(json.dumps(jsonData), content_type='application/json')
