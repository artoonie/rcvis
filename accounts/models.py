""" Auth user models """

from django.contrib.auth import get_user_model
from django.db import models
from visualizer.models import JsonConfig

User = get_user_model()


class UserProfile(models.Model):
    """ A Json file representing a single election, and its configuration """
    user = models.OneToOneField(User, on_delete=models.CASCADE)

    # Is the user allowed to use the API?
    canUseApi = models.BooleanField(default=False)

    # Which raw data has this user downloaded?
    downloadedRawData = models.ManyToManyField(
        JsonConfig, related_name="rawDownloadedBy", blank=True)
