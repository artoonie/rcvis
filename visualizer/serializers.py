""" Data serializers - used for the REST API """

import traceback

from django.contrib.auth import get_user_model
from django.urls import reverse
from rest_framework import serializers
from rest_framework.settings import api_settings

from visualizer.graphCreator.graphCreator import BadJSONError
from .models import JsonConfig
from .validators import try_to_load_json


class JsonConfigSerializer(serializers.HyperlinkedModelSerializer):
    """ The rest_framework serializer for a JsonConfig Model """

    class Meta:
        """ The meta class to simplify construction of the serializer """
        model = JsonConfig

        owner = serializers.ReadOnlyField(source='owner.username')
        read_only_fields = ('slug', 'movieHorizontal', 'movieVertical', 'movieGenerationStatus')
        read_only_but_validate_fields = ('numRounds', 'numCandidates', 'title')
        fields = ('jsonFile', 'owner') + read_only_fields + read_only_but_validate_fields


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

    def to_internal_value(self, data):
        """ Before saving from the REST API, populates all required data """
        # Sanity check: no superfluous fields
        self.check_for_superfluous_fields_before_modification(data)

        # Validate data - again, checking for errors but not raising.
        # Note that patch doesn't include jsonFile, just the object ID
        if 'jsonFile' in data:
            graph = self.load_graph_or_errors(data['jsonFile'])

            # Update data
            self.populate_model_with_json_data(data, graph)

        # Now run all other validations
        data = super(JsonConfigSerializer, self).to_internal_value(data)

        return data

        # validations happen after this point...

    @classmethod
    def load_graph_or_errors(cls, jsonFile):
        """ Returns the graph, or raises an error if it cannot. """
        try:
            return try_to_load_json(jsonFile)
        except BadJSONError as exception:
            errorMessage = traceback.format_exc()
            raise serializers.ValidationError({'jsonFile': ["JSON is not valid: " + errorMessage]})
        except Exception as exception:
            # Don't print full traceback here - we don't control this message as closely,
            # and it might (?) contain keys.
            raise serializers.ValidationError({'jsonFile': ["Unknown error: " + str(exception)]})
        return None

    def check_for_superfluous_fields_before_modification(self, data):
        """ Raises a ValidationError if the data does not have superfluous fields. """
        allFields = self.fields
        writeableFieldKeys = [key for key in allFields if not allFields[key]
                              .read_only and key not in self.Meta.read_only_but_validate_fields]
        superfluousFields = set(data.keys()) - set(writeableFieldKeys)

        if not superfluousFields:
            return

        superfluousString = 'You included superfluous fields: ' + ', '.join(superfluousFields)
        raise serializers.ValidationError({api_settings.NON_FIELD_ERRORS_KEY: [superfluousString]})

    @classmethod
    def populate_model_with_json_data(cls, model, graph):
        """ Adds title, num rounds, num candidates to the model. Does not save the model. """
        model['title'] = graph.title
        model['numRounds'] = len(graph.summarize().rounds)
        model['numCandidates'] = len(graph.summarize().candidates)
        return model


class UserSerializer(serializers.ModelSerializer):
    """ The rest_framework serializer for a User Model """
    this_users_jsons = serializers.PrimaryKeyRelatedField(
        many=True, queryset=JsonConfig.objects.all())

    class Meta:
        """ The meta class to simplify construction of the serializer """
        model = get_user_model()
        fields = ['id', 'username', 'this_users_jsons']
        ordering = ['-id']
