from django.views.generic import View
from django.template.response import TemplateResponse

import datetime
import pytz

from user_profile.models import UserProfile


class FrontPageView(View):
    def get(self, request):
        if not request.user.is_authenticated():
            print('User is not logged in')
            return TemplateResponse(request, 'login.html', {})
        else:
            return TemplateResponse(request, 'application.html', {})
