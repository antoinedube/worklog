from django.http import HttpResponse
from django.contrib.auth import authenticate, login
from django.shortcuts import render
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
                # Redirect to a success page.
                return HttpResponse('{"message": "Login successful"}')
            else:
                # Return a 'disabled account' error message
                return HttpResponse('{"message": "Disabled account"}')
        else:
            # Return an 'invalid login' error message.))
            return HttpResponse('{"message": "Invalid login"}')
