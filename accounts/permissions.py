""" Permissions - used for the REST API """

from django.contrib.auth import get_user_model
from rest_framework import permissions
from rest_framework.authtoken.views import ObtainAuthToken


class IsOwnerOrReadOnly(permissions.BasePermission):
    """ Read only unless you're an owner. Consider combining this with IsAuthenticated. """

    message = "Must be authenticated - you can only view objects you own (or be an admin)"

    def has_permission(self, request, view):
        # TODO - eventually, check if this user has API credentials
        return True

    def has_object_permission(self, request, view, obj):
        # Read permissions are allowed by the owner or admin
        if request.method in permissions.SAFE_METHODS:
            return request.user.is_staff or obj.owner == request.user

        # Write permissions are only allowed to the owner of the snippet.
        return obj.owner == request.user

class CanCreateToken(permissions.BasePermission):
    """ If requesting a token with a username/pass, make sure that username has API access. """
    def has_permission(self, request, view):
        username = request.data.get('username')
        if not username:
            return False

        user = get_user_model().objects.get(username=username)
        if user and user.userprofile:
            return user.userprofile.canUseApi
        return False

class HasAPIAccess(permissions.BasePermission):
    """ Only allow users that have canUseApi set on their profile """
    def has_permission(self, request, view):
        user = request.user
        if user and user.is_authenticated:
            return user.userprofile.canUseApi
        return False

class ObtainAuthTokenIfEnabled(ObtainAuthToken):
    """ Auth Token only if HasAPIAccess """
    permission_classes = (CanCreateToken,)
