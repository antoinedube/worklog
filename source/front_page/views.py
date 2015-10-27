from django.views.generic import View
from django.template.response import TemplateResponse

import datetime
import pytz

from user_profile.models import UserProfile


class FrontPageView(View):
    def get(self, request):
        return TemplateResponse(request, 'application.html', {})
