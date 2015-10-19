from django.http import JsonResponse
from django.contrib.auth import authenticate, login, logout
from django.shortcuts import render
from django.views.generic import View

import json

class LoginView(View):
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
                return JsonResponse({'message': 'Login successful', 'user_id': user.id})
            else:
                return JsonResponse({'message': 'Disabled account'}, status=401)
        else:
            return JsonResponse({'message': 'Invalid login'}, status=401)


class LogoutView(View):
    def post(self,request):
        if not request.user.is_authenticated():
            return JsonResponse({'message': 'Unauthorized'}, status=401)

        logout(request)
        return JsonResponse({'message': 'Logout successful'})

    def get(self,request):
        if not request.user.is_authenticated():
            return JsonResponse({'message': 'Unauthorized'}, status=401)

        return JsonResponse({'message': 'Invalid action'})
