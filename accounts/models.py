""" Auth user models """

from django.contrib.auth import get_user_model
from django.db import models

User = get_user_model()


class UserProfile(models.Model):
    """ A Json file representing a single election, and its configuration """
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    canUseApi = models.BooleanField(default=False)
