from django.contrib.auth.models import User
from django.http import JsonResponse
from django.contrib.auth import authenticate, login
from django.views.generic import View

import datetime
import pytz

from profile.models import Profile

class ProfileView(View):
    def get(self,request):
        if not request.user.is_authenticated():
            return JsonResponse({'message': 'Unauthorized'},status=401)

        user = User.objects.get(username=request.user)
        item_set = {
            'first_name': user.first_name,
            'last_name': user.last_name,
            'language': user.profile.language,
            'timezone': user.profile.timezone,
            'UTC-offset': datetime.datetime.now(pytz.timezone(user.profile.timezone)).strftime('%z')
        }
        return JsonResponse(item_set)

