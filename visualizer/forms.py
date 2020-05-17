from django.forms import ModelForm
from .models import JsonConfig

class JsonConfigForm(ModelForm):
    class Meta:
        model = JsonConfig
        fields = ['jsonFile',
                  'hideDecimals',
                  'rotateNames',
                  'horizontalSankey',
                  'onlyShowWinnersTabular',
                  'doHideOverflowAndEliminated',
                  'doUseHorizontalBarGraph',
                  'excludeFinalWinnerAndEliminatedCandidate',
                  'hideSankey',
                  'hideTabular']
