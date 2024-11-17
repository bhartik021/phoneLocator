from django.urls import path
from .views import PhoneNumberLocation

urlpatterns = [
    path('get-location/', PhoneNumberLocation.as_view(), name='get_location'),
]
