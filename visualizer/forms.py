""" Forms enable users to create Models """

from django import forms

from .models import JsonConfig


#pylint: disable=too-few-public-methods
class JsonConfigForm(forms.ModelForm):
    """ Used by the upload form """
    colorTheme = forms.IntegerField(required=False)
    eliminationBarColor = forms.IntegerField(required=False)
    textForWinner = forms.IntegerField(required=False)

    class Meta:
        """ Metadata is all we need here """
        model = JsonConfig
        fields = JsonConfig.get_all_non_auto_fields()
