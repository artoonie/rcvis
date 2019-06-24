from django.urls import path

from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('upload.html', views.upload, name='upload'),
    path('display=<rcvresult>', views.displaySankey, name='display'),
    path('sankey=<rcvresult>', views.displaySankey, name='sankey'),
    path('bar=<rcvresult>', views.displayBargraph, name='bar')
]
