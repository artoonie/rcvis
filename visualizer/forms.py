""" Forms enable users to create Models """

import json

from django import forms
from django.core.exceptions import ValidationError
from django.core.files.base import ContentFile

from visualizer.graph import readDataTablesResult
from visualizer.models import JsonConfig


# pylint: disable=too-few-public-methods
class UploadForm(forms.ModelForm):
    """ Used by the upload form """
    colorTheme = forms.IntegerField(required=False)
    eliminationBarColor = forms.IntegerField(required=False)
    textForWinner = forms.IntegerField(required=False)

    class Meta:
        """ Metadata is all we need here """
        model = JsonConfig
        fields = JsonConfig.get_all_non_auto_fields()


class UploadByDataTableForm(UploadForm):
    """ Used by the upload form using the DataTables entry"""
    jsonFile = forms.FileField(required=False)

    class Meta(UploadForm.Meta):
        """ Metadata is all we need here """
        fields = [f for f in UploadForm.Meta.fields if f != 'jsonFile']

    # pylint: disable=invalid-name
    def clean_jsonFile(self):
        """ Converts the datatables json to URCVT json """
        try:
            reader = readDataTablesResult.ReadDataTableJSON(self.data)
            urcvtData = reader.convert_to_urcvt()
        except BaseException as exc:  # pylint:disable-broad-except
            raise ValidationError(str(exc)) from exc

        contentFile = ContentFile(json.dumps(urcvtData).encode('utf-8'))
        return contentFile
