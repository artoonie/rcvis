import urllib.parse

from django.contrib.staticfiles.templatetags.staticfiles import static
from django.http import JsonResponse
from django.shortcuts import render, redirect
from django.urls import reverse
from django.utils.decorators import method_decorator
from django.views import View
from django.views.decorators.clickjacking import xframe_options_exempt
from django.views.generic.base import TemplateView
from django.views.generic.detail import DetailView
from django.views.generic.edit import CreateView

from rcvis.settings import OFFLINE_MODE
from visualizer.graphCreator.graphCreator import makeGraphWithFile, BadJSONError
from .bargraph.graphToD3 import D3Bargraph
from .forms import JsonConfigForm
from .models import JsonConfig
from .sankey.graphToD3 import D3Sankey
from .tabular.tabular import TabulateByRoundInteractive, TabulateByRound, TabulateByCandidate, TabularCandidateByRound


class Index(TemplateView):
    template_name = 'visualizer/index.html'
    build_path = 'index.html'


class Upload(CreateView):
    template_name = 'visualizer/uploadFile.html'
    success_url = 'visualize={slug}'
    model = JsonConfig
    form_class = JsonConfigForm
    build_path = "upload.html"

    def form_valid(self, form):
        try:
            graph = makeGraphWithFile(
                form.cleaned_data['jsonFile'],
                form.cleaned_data['excludeFinalWinnerAndEliminatedCandidate'])
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
    graph = makeGraphWithFile(config.jsonFile,
                              config.excludeFinalWinnerAndEliminatedCandidate)
    d3Bargraph = D3Bargraph(graph)
    d3Sankey = D3Sankey(graph)
    tabularByCandidate = TabulateByCandidate(
        graph, config.onlyShowWinnersTabular)
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


def _makeCompleteUrl(request, urlWithoutDomain):
    scheme = request.is_secure() and 'https' or 'http'
    host = request.META['HTTP_HOST']
    return f"{scheme}://{host}{urlWithoutDomain}"


class Visualize(DetailView):
    model = JsonConfig
    template_name = 'visualizer/visualize.html'

    def get_context_data(self, **kwargs):
        config = super().get_context_data(**kwargs)

        data = _getDataForView(config['jsonconfig'])

        # oembed href
        slug = config['jsonconfig'].slug
        iframe_url = _makeCompleteUrl(
            self.request, reverse(
                "visualizeEmbedded", args=(
                    slug,)))
        iframe_url_embedded = urllib.parse.quote_plus(iframe_url)
        oembed_url = _makeCompleteUrl(self.request, reverse(
            "oembed")) + f"?url={iframe_url_embedded}"
        data['oembed_url'] = oembed_url

        return data


@method_decorator(xframe_options_exempt, name='dispatch')
class VisualizeEmbedded(DetailView):
    model = JsonConfig
    template_name = 'visualizer/visualize-embedded.html'

    def get_context_data(self, **kwargs):
        config = super().get_context_data(**kwargs)

        data = _getDataForView(config['jsonconfig'])

        # oembed href
        data['vistype'] = self.request.GET.get(
            'vistype', 'barchart-interactive')

        return data


@method_decorator(xframe_options_exempt, name='dispatch')
class Oembed(View):
    def get(self, request):
        requestData = request.GET
        url = str(requestData.get('url'))  # only required field
        maxwidth = int(requestData.get('maxwidth', 1440))
        maxheight = int(requestData.get('maxheight', 1080))
        returnType = str(requestData.get('type', 'json'))
        vistype = str(requestData.get('vistype', 'barchart-interactive'))

        # TODO - handle 501 error on requesting XML:
        # if returnType == 'xml':
        #     # not implemented
        #     return HttpResponse(status=501)

        renderData = {
            'width': maxwidth,
            'height': maxheight,
            'iframe_url': url,
            'vistype': vistype}

        httpResponse = render(request, 'visualizer/oembed.html', renderData)

        jsonData = {
            "version": "1.0",
            "title": "Ranked Choice Voting Visualization",
            "cache_age": "86400",  # one day
            "author_name": "rcvis.com",
            "author_url": "http://www.rcvis.com/",
            "provider_name": "rcvis.com",
            "provider_url": "http://www.rcvis.com/",
            "thumbnail": _makeCompleteUrl(request, static("visualizer/icon_interactivebar.gif"))
        }
        jsonData['type'] = "rich"
        jsonData['width'] = maxwidth
        jsonData['height'] = maxheight
        jsonData['url'] = url
        jsonData['html'] = httpResponse.content.decode('utf-8')

        return JsonResponse({'data': jsonData})
