from django.shortcuts import render, redirect
from django.http import HttpResponse
from .forms import CreateUserForm, LoginForm, ChoicesForm
from .models import UserChoices
from django.contrib.auth import authenticate, login, logout
from django.contrib import auth
from django.contrib.auth.decorators import login_required
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
from .serializers import UserPostSerializer
from django.shortcuts import render, get_object_or_404
from django.shortcuts import redirect
from django.utils import timezone
from django.contrib.auth.models import User

from .models import Messages



@login_required(login_url="login")
def homepage(request):
    return render(request, 'index.html', {'username': request.user.username})


def register(request):
    if request.user.is_authenticated:
         return render(request, 'index.html', {'username': request.user.username})
    else:
        form = CreateUserForm()
        if request.method == "POST":
            form = CreateUserForm(request.POST)
            if form.is_valid():
              form.save()
              return redirect("currentdata")
    context = {'registerform':form}

    
    return render(request, 'register.html', context = context)
    



def my_login(request):
    form = LoginForm()
    if request.method == 'POST':
        form = LoginForm(request, data = request.POST)
        if form.is_valid():
              username = request.POST.get('username')
              password = request.POST.get('password')
              user = authenticate(request, username=username, password=password)
              if user is not None:
                  auth.login(request, user)
                 
                  
                  
                  queryset = UserChoices.objects.filter(user = user)
                  if queryset.count():
                    return redirect("currentdata")
                  else:
                    return redirect("userinfo")
                  
                  
                  
              
    context = {'loginform': form}
    return render(request, 'login.html', context = context)
def logout(request):   
    auth.logout(request)
    return redirect("login")
    
  



    context = {'loginform':form}
    return render(request, "login.html", context=context)



def sample(request):
    username = ''
    email = ''
    id = 0
    context = {}

    if request.user.is_authenticated:
        # Access user information
        username = request.user.username
        email = request.user.email
        password = request.user.password
        id = request.user.id
        # Customizations or additional logic based on user information
        # ...
        context =  {'username': username, 'email': email, 'password': password, 'id':id}
       

    return render(request, 'sample.html', context=context)
        # Render the template with the user information

# @login_required(login_url="login")       
# def basic_info(request):
@login_required(login_url="login")
def userinfo(request):
    context = {}
    form = ChoicesForm()
    if request.method == 'POST':
        form = ChoicesForm(request.POST)
        
        if form.is_valid():
            form.user = request.user 

            form.save()
            return redirect("sample")
    context = {'userinfo':form}

    return render(request, 'user_info.html', context = context)
            
@login_required(login_url="login")             
def inbox(request):     
    return render(request, 'inbox.html')


@login_required(login_url="login")  
def load_current_user_info(request):
    username = ''
    email = ''
    id=0
    context = {}

    if request.user.is_authenticated:
        # Access user information
        id = request.user.id
        email = request.user.email
        password = request.user.password
        # Customizations or additional logic based on user information
        # ...
        context =  {'username': username, 'email': email, 'password': password}
    userinfo = UserChoices.objects.filter(user = id)
    
    context = {'userData':userinfo[0]}
    print(userinfo[0].userphoto)
    return render(request, 'userInfo.html', context = context)

@login_required(login_url="login")  
def patch_user_info(request):
    username = ''
    email = ''
   

    if request.user.is_authenticated:
        # Access user information
        username = request.user.username
        email = request.user.email
        password = request.user.password
        # Customizations or additional logic based on user information
        # ...
        context =  {'username': username, 'email': email, 'password': password}
    user = UserChoices.objects.filter(user= request.user.id)
    userinfo = user[0]
    if request.method == 'POST':
        form = ChoicesForm(request.POST,request.FILES, instance=userinfo)
        if form.is_valid():
            form.save()
            return redirect("currentdata")
           
            
        else:
            return JsonResponse({'errors': form.errors}, status=400)
    else:
        form = ChoicesForm(instance=userinfo)

    return render(request, 'patch_template.html', {'form': form})


@login_required(login_url="login")  
def discover_page(request):
    users = UserChoices.objects.all()
    return render(request, 'discover.html', {'users':users})

@login_required(login_url="login") 
def discover_single(request):
    users = UserChoices.objects.filter(status = "Single")
    return render(request, 'discover.html', {'users':users})
@login_required(login_url="login") 
def discover_long_distance(request):
    users = UserChoices.objects.filter(status = "Long Distance")
    return render(request, 'discover.html', {'users':users})
@login_required(login_url="login") 
def discover_dating(request):
    users = UserChoices.objects.filter(status = "Dating")
    return render(request, 'discover.html', {'users':users})



@login_required(login_url="login") 
def logic(request):
    usera = UserChoices.objects.filter(user = request.user.id)[0]
    users2 = UserChoices.objects.all()
    desperate_users = []
    for userb in users2:
       
        if userb.user == usera.user:
            
            continue
        else:
          
            if userb.user1 == usera.user or userb.user2 == usera.user or userb.user2 == usera.user:
                
                if usera.user1 == userb.user or usera.user2 == userb.user or usera.user3 == userb.user:
                    # make a new object 
                    try: 
                        data = {
                        'user': usera.user,
                        'from_user': userb.user,

       
                        }
                        desperate_users.append(userb)
                        Messages.objects.create(**data)
                    
                        print(userb.user)
                    except:
                        print("Error handled")
                        continue
                    


                    pass
                else:
                    continue
            else:
                continue
    
    print(desperate_users)
    desperate_users_profiles = []
    context = {'users': desperate_users}
    print(desperate_users_profiles)
    return render(request, 'inbox.html', context = context )


    

        
       
        
        
        
        

        




