from django.http import JsonResponse
from django.contrib.auth import authenticate, login, logout
from django.shortcuts import render
from django.views.generic import View

import json

class UserLogin(View):
    def get(self,request):
        return JsonResponse({'message': 'You should not do a GET at /login'})

    def post(self,request):
        request_content = json.loads(request.body.decode('utf-8'))
        username = request_content['username']
        password = request_content['password']
        user = authenticate(username=username, password=password)
        if user is not None:
            if user.is_active:
                login(request, user)
                return JsonResponse({'message': 'Login successful'})
            else:
                return JsonResponse({'message': 'Disabled account'})
        else:
            return JsonResponse({'message': 'Invalid login'})


class UserLogout(View):
    def get(self,request):
        logout(request)
        return JsonResponse({'message': 'Logout successful'})
