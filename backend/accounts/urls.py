from django.contrib import admin
from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns
from . import views



urlpatterns = [
    
    path("email/<int:id>/", views.UserEmailView.as_view()),
    path("username/<int:id>/", views.UsernameView.as_view()),
    path("all/", views.RegisterUsersView.as_view()),
    path("<int:id>/", views.RegisterUserView.as_view()),
    path("new/", views.RegisterUserView.as_view())
]
