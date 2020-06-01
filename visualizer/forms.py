""" Forms enable users to create Models """

from django.forms import ModelForm

from .models import JsonConfig


#pylint: disable=too-few-public-methods
class JsonConfigForm(ModelForm):
    """ Used by the upload form """
    class Meta:
        """ Metadata is all we need here """
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
                  'hideTabular',
                  'doDimPrevRoundColors']
