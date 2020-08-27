""" Data serializers - used for the REST API """

import traceback

from django.contrib.auth import get_user_model
from django.urls import reverse
from rest_framework import serializers

from visualizer.graphCreator.graphCreator import BadJSONError
from .models import JsonConfig
from .validators import try_to_load_json

#pylint: disable=too-few-public-methods


class JsonConfigSerializer(serializers.HyperlinkedModelSerializer):
    """ The rest_framework serializer for a JsonConfig Model """

    class Meta:
        """ The meta class to simplify construction of the serializer """
        model = JsonConfig
        exclude = ['movieHorizontal', 'movieVertical']
        owner = serializers.ReadOnlyField(source='owner.username')
        read_only_fields = ['slug']

    def to_representation(self, instance):
        data = super(JsonConfigSerializer, self).to_representation(instance)
        request = self.context['request']

        visRelativeUrl = reverse('visualize', args=(instance.slug,))
        visAbsoluteUrl = request.build_absolute_uri(visRelativeUrl)

        oembedRelativeUrl = reverse('oembed') + "?url=" + visAbsoluteUrl
        oembedAbsoluteUrl = request.build_absolute_uri(oembedRelativeUrl)

        data['visualizeUrl'] = visAbsoluteUrl
        data['oembedEndpointUrl'] = oembedAbsoluteUrl
        return data

    #pylint: disable=invalid-name
    @classmethod
    def validate_jsonFile(cls, value):
        """ Validate that the upload JSON is successfully parsable """
        try:
            try_to_load_json(value)
        except BadJSONError as exception:
            errorMessage = traceback.format_exc()
            raise serializers.ValidationError("JSON is not valid: " + errorMessage)
        except Exception as exception:
            # Don't print full traceback here - we don't control this message as closely,
            # and it might (?) contain keys.
            raise serializers.ValidationError("Unknown error: " + str(exception))
        return value


class UserSerializer(serializers.ModelSerializer):
    """ The rest_framework serializer for a User Model """
    this_users_jsons = serializers.PrimaryKeyRelatedField(
        many=True, queryset=JsonConfig.objects.all())

    class Meta:
        """ The meta class to simplify construction of the serializer """
        model = get_user_model()
        fields = ['id', 'username', 'this_users_jsons']
        ordering = ['-id']
