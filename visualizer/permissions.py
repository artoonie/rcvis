""" Permissions - used for the REST API """

from rest_framework import permissions


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
