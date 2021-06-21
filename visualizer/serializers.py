""" Data serializers - used for the REST API """

import traceback

from django.contrib.auth import get_user_model
from django.urls import reverse
from rest_framework import serializers
from rest_framework.settings import api_settings

from visualizer.graph.graphCreator import BadJSONError
from visualizer.sidecar.reader import BadSidecarError
from .models import JsonConfig
from .validators import try_to_load_jsons


class BaseVisualizationSerializer(serializers.HyperlinkedModelSerializer):
    """
    The rest_framework serializer for a JsonConfig Model.
    DRF expects a fixed set of options, so this uses the model defaults
    and nothing more.
    """

    class Meta:
        """ The meta class to simplify construction of the serializer """
        model = JsonConfig

        owner = serializers.ReadOnlyField(source='owner.username')
        read_only_fields = (
            'slug',
            'id',
            'movieHorizontal',
            'movieVertical',
            'movieGenerationStatus')
        read_only_but_validate_fields = ('numRounds', 'numCandidates', 'title')
        fields = read_only_fields + read_only_but_validate_fields

    def to_representation(self, instance):
        data = super(BaseVisualizationSerializer, self).to_representation(instance)
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

        # Validate data, checking for errors but not raising exceptions.
        if self.instance:
            # Updating: if the field is not provided, grab it from self.instance.
            jsonFile = data.get('jsonFile', self.instance.jsonFile)

            # Annoyingly, django sets an empty empty FileField to empty string
            # instead of None, so we can't just use
            # $ data.get('candidateSidecarFile', self.instead.candidateSidecarFile)
            if 'candidateSidecarFile' in data:
                candidateSidecarFile = data['candidateSidecarFile']
            elif self.instance.candidateSidecarFile:
                candidateSidecarFile = self.instance.candidateSidecarFile
            else:
                candidateSidecarFile = None
        else:
            # Creating: if the field is not provided, it does not exist. Treat it as None.
            jsonFile = data.get('jsonFile')
            candidateSidecarFile = data.get('candidateSidecarFile')
        graph = self.load_graph_or_errors(jsonFile, candidateSidecarFile)

        if 'jsonFile' in data:
            # Only update these fields if the jsonFile changed
            self.populate_model_with_json_data(data, graph)

        # Now run all other validations
        data = super(BaseVisualizationSerializer, self).to_internal_value(data)

        return data

        # validations happen after this point...

    @classmethod
    def load_graph_or_errors(cls, jsonFile, candidateSidecarFile):
        """ Returns the graph, or raises an error if it cannot. """
        try:
            return try_to_load_jsons(jsonFile, candidateSidecarFile)
        except BadJSONError as exception:
            errorMessage = traceback.format_exc()
            raise serializers.ValidationError({'jsonFile': ["JSON is not valid: " + errorMessage]})
        except BadSidecarError as exception:
            errorMessage = traceback.format_exc()
            raise serializers.ValidationError(
                {'candidateSidecarFile': ["Sidecar JSON is not valid: " + errorMessage]})
        except Exception as exception:
            # Don't print full traceback here - we don't control this message as closely,
            # and it might (?) contain keys.
            raise serializers.ValidationError({'jsonFile': ["Unknown error: " + str(exception)]})

    def check_for_superfluous_fields_before_modification(self, data):
        """ Raises a ValidationError if the data does not have superfluous fields. """
        allFields = self.fields
        writeableFieldKeys = [key for key in allFields if
                              not allFields[key].read_only and
                              key not in self.Meta.read_only_but_validate_fields]
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


class JsonOnlySerializer(BaseVisualizationSerializer):
    """
    A serializer for specifying just the JSON file.
    All other settings are set to their default values.
    """
    class Meta(BaseVisualizationSerializer.Meta):
        writeable_fields = ('jsonFile', 'owner')
        fields = BaseVisualizationSerializer.Meta.fields + writeable_fields


class BallotpediaSerializer(BaseVisualizationSerializer):
    """
    A serializer for specifying the Ballotpedia data.
    Instead of specifying jsonFile (which is confusing because the sidecar is also JSON),
    this serializer uses "resultsSummaryFile" and "candidateSidecarFile", along with
    the other two options bp wants: dataSourceURL and areResultsCertified.
    """
    class Meta(BaseVisualizationSerializer.Meta):
        resultsSummaryFile = serializers.SerializerMethodField()
        bp_fields = ('jsonFile',  # Note: should not be passed directly
                     'candidateSidecarFile',
                     'dataSourceURL',
                     'areResultsCertified',
                     'owner')
        fields = BaseVisualizationSerializer.Meta.fields + bp_fields

    def to_internal_value(self, data):
        """
        Instead of jsonFile, this endpoint uses the more-descriptive "resultsSummaryFile".
        Rename resultsSummaryFile to jsonFile here.
        """
        if 'jsonFile' in data:
            raise serializers.ValidationError({'jsonFile':
                                               ["Pass resultsSummaryFile instead of jsonFile"]})

        if 'resultsSummaryFile' in data:
            data['jsonFile'] = data['resultsSummaryFile']
            del data['resultsSummaryFile']

        return super(BallotpediaSerializer, self).to_internal_value(data)


class UserSerializer(serializers.ModelSerializer):
    """ The rest_framework serializer for a User Model """
    this_users_jsons = serializers.PrimaryKeyRelatedField(
        many=True, queryset=JsonConfig.objects.all())

    class Meta:
        """ The meta class to simplify construction of the serializer """
        model = get_user_model()
        fields = ['id', 'username', 'this_users_jsons']
        ordering = ['-id']
