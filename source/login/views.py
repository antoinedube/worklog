from django.http import HttpResponse
from django.contrib.auth import authenticate, login
from django.views.generic import View

import json

class UserLogin(View):
    def get(self,request):
        return HttpResponse('{"message": "You should not do a GET at /login"}')

    def post(self,request):
        request_content = request.body.decode('utf-8')
        print(request_content)
        username = request_content['username']
        password = request_content['password']
        print(username,password)

        user = authenticate(username=username, password=password)
        if user is not None:
            if user.is_active:
                login(request, user)
                return HttpResponse('{"message": "Login successful"}')
            else:
                return HttpResponse('{"message": "Disabled account"}')
        else:
            return HttpResponse('{"message": "Invalid login"}')


