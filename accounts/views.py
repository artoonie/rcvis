""" Views for managing your own account """

from django.contrib.auth.mixins import LoginRequiredMixin
from django.shortcuts import redirect
from django.views import View
from django.views.generic.base import TemplateView

from common.cloudflare import CloudflareAPI


class UserDashboard(LoginRequiredMixin, TemplateView):
    """ Manage your account: privacy, and editing or deleting your uploads """
    login_url = 'login'
    redirect_field_name = 'redirect_to'
    template_name = 'accounts/dashboard.html'

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['uploads'] = self.request.user.this_users_jsons.order_by('-uploadedAt')
        context['isPrivate'] = self.request.user.userprofile.isPrivate
        return context


class TogglePrivacy(LoginRequiredMixin, View):
    """ POST-only: sets UserProfile.isPrivate for the logged-in user """
    login_url = 'login'
    redirect_field_name = 'redirect_to'

    def post(self, request):
        """ Sets the flag from the dashboard's Public/Private control """
        profile = request.user.userprofile
        profile.isPrivate = request.POST.get('visibility') == 'private'
        profile.save()

        # The homepage's recent-uploads list and the sitemap depend on this flag
        CloudflareAPI.purge_paths_cache(['/', '/index.html', '/sitemap.xml'])

        return redirect('userDashboard')
