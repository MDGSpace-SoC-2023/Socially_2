from django.shortcuts import render

# Create your views here.
from django.contrib import admin
from django.urls import path, include
from . import views

urlpatterns = [
    
    path('', views.homepage, name="homepage"),
    path('register/', views.register, name="register"),
    path('login/', views.my_login, name="login"),
    path('logout/', views.logout, name="logout"),
    path('aboutus/', views.sample,name="knowaboutus"),
    path('userinfo/', views.userinfo, name="userinfo"),
    path('inbox/', views.inbox, name="inbox"),
    path('info/', views.load_current_user_info, name="currentdata"),
    path('edit/', views.patch_user_info, name="patch"),
    path('discover/', views.discover_page, name="discover"),
    path('discover/single/', views.discover_single, name="single"),
    path('discover/longdistance/', views.discover_long_distance, name="longdistance"),
    path('discover/taken/', views.discover_dating, name="dating"),
    path('check/', views.logic, name = "logic"),
    

]
