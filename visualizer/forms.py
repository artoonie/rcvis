""" Forms enable users to create Models """

from django.forms import ModelForm

from .models import JsonConfig


#pylint: disable=too-few-public-methods
class JsonConfigForm(ModelForm):
    """ Used by the upload form """
    class Meta:
        """ Metadata is all we need here """
        model = JsonConfig
        fields = JsonConfig.get_all_non_auto_fields()
