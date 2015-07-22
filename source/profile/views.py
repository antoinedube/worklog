from django.http import HttpResponse
from django.contrib.auth import authenticate, login
from django.views.generic import View


class ProfileView(View):
    def get(self,request):
        if not request.user.is_authenticated():
            return HttpResponse('Unauthorized',status=401)
        user = User.objects.get(username=request.user)
        profile = user.profile
