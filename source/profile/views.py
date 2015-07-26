from django.http import JsonResponse
from django.contrib.auth import authenticate, login
from django.views.generic import View

class ProfileView(View):
    def get(self,request):
        if not request.user.is_authenticated():
            return JsonResponse({'message': 'Unauthorized'},status=401)

        return JsonResponse({'message': 'Will fix later'},status=200)
