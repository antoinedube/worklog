from django.http import HttpResponse
from django.contrib.auth import authenticate, login
from django.views.generic import View

class UserLogin(View):
    def get(self,request):
        return HttpResponse('{"message": "You should not do a GET at /login"}')

    def post(self,request):
        username = request.POST['username']
        password = request.POST['password']

        user = authenticate(username=username, password=password)
        if user is not None:
            if user.is_active:
                login(request, user)
                return HttpResponse('{"message": "Login successful"}')
            else:
                return HttpResponse('{"message": "Disabled account"}')
        else:
            return HttpResponse('{"message": "Invalid login"}')


