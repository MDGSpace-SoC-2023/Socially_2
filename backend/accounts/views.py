from django.shortcuts import render
from urllib.request import Request
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from django.http import Http404, JsonResponse
from rest_framework.decorators import api_view
from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login, logout
from rest_framework.parsers import JSONParser
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth import authenticate, login
from django.contrib.auth import authenticate, login, logout
from django.http import JsonResponse
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

from django.shortcuts import render, get_object_or_404
from django.shortcuts import redirect
from django.utils import timezone
from django.contrib.auth.models import User
from .models import User
from .serializers import UserSerializer
# Create your views here.




class UsernameView(APIView):
    @csrf_exempt
    def get(self, request, id):
        post = User.objects.get(id=id)
        data = UserSerializer(post).data
        return Response(data)
    
    
class UserEmailView(APIView):
    @csrf_exempt
    def get(self, request, id):
        post = User.objects.get(id=id)
        data = UserSerializer(post).data

        return Response(data)



class RegisterUserView(APIView):
    
    def get(self, request, id):
        post = User.objects.get(id=id)
        data = UserSerializer(post).data
        return Response(data)
    @csrf_exempt
    def post(self, request):
        data = JSONParser().parse(request)
        serializer = UserSerializer(data=data)
        if(serializer.is_valid()): 
            serializer.save()
            return JsonResponse(serializer.data, status=201)
        return JsonResponse(serializer.errors, status=400)
    @csrf_exempt
    def patch(self, request, id, format=None):
        post = User.objects.get(id=id)
        serializer = UserSerializer(post, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=400)
    @csrf_exempt
    def delete(self, request, id, format=None):
        post = User.objects.get(id=id)
        post.delete()
        return Response(status=204)
    
class RegisterUsersView(APIView):
    @csrf_exempt
    def get(self, request):
        post = User.objects.all()
        serializer = UserSerializer(post, many=True)
        return Response(serializer.data)