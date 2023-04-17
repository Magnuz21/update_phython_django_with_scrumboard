from django.urls import path
from .views import board_details 

urlpatterns = [
    path('details/', board_details),
    path('details/<int:pk>', board_details),
    
]