from django.http import HttpResponse
from django.contrib.auth import authenticate, login
from django.shortcuts import render
from django.views.generic import View

import json

class UserLogin(View):
    def get(self,request):
        return HttpResponse('{"message": "You should not do a GET at /login"}')

    def post(self,request):
        request_content = json.loads(request.body.decode('utf-8'))
        username = request_content['username']
        password = request_content['password']
        user = authenticate(username=username, password=password)
        if user is not None:
            if user.is_active:
                login(request, user)
                return HttpResponse(json.dumps({'message': 'Login successful'}))
            else:
                return HttpResponse(json.dumps({'message': 'Disabled account'}))
        else:
            return HttpResponse(json.dumps({'message': 'Invalid login'}))


