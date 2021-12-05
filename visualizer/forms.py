""" Forms enable users to create Models """

import json
import tempfile

from django import forms
from django.core.exceptions import ValidationError
from django.core.files.base import ContentFile

from visualizer.graph import readDataTablesResult
from visualizer.models import JsonConfig


#pylint: disable=too-few-public-methods
class UploadForm(forms.ModelForm):
    """ Used by the upload form """
    colorTheme = forms.IntegerField(required=False)
    eliminationBarColor = forms.IntegerField(required=False)
    textForWinner = forms.IntegerField(required=False)

    class Meta:
        """ Metadata is all we need here """
        model = JsonConfig
        fields = JsonConfig.get_all_non_auto_fields()

#pylint: disable=too-few-public-methods


class UploadByDataTableForm(UploadForm):
    """ Used by the upload form using the DataTables entry"""
    jsonFile = forms.FileField(required=False)

    class Meta(UploadForm.Meta):
        """ Metadata is all we need here """
        fields = [f for f in UploadForm.Meta.fields if f != 'jsonFile']

    def clean_jsonFile(self):
        try:
            urcvtData = readDataTablesResult.convert_to_urcvt(self.data)
        except BaseException as e:  # pylint:disable-broad-except
            raise ValidationError(str(e)) from e

        contentFile = ContentFile(json.dumps(urcvtData).encode('utf-8'))
        return contentFile
