from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
import requests
import os
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

class PhoneNumberLocation(APIView):
    def get(self, request):
        phone_number = request.GET.get('phone')
        if not phone_number:
            return Response({'error': 'Phone number is required'}, status=status.HTTP_400_BAD_REQUEST)

        # Retrieve API key from environment variable
        api_key = os.getenv('API_LAYER_KEY')
        if not api_key:
            return Response({'error': 'API key is missing'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

        # Construct the API URL
        api_url = f'https://apilayer.net/api/validate?access_key={api_key}&number={phone_number}'
        response = requests.get(api_url)
        data = response.json()

        if 'error' in data:
            return Response({'error': 'Invalid phone number or API error'}, status=status.HTTP_400_BAD_REQUEST)

        # Enhanced location data
        location_data = {
            'country': data.get('country_name', 'Unknown'),
            'location': data.get('location', 'Unknown'),
            'carrier': data.get('carrier', 'Unknown'),
            'country_code': data.get('country_code', 'Unknown'),
            'line_type': data.get('line_type', 'Unknown'),
            'valid': data.get('valid', False),
            'international_format': data.get('international_format', 'Unknown'),
            'local_format': data.get('local_format', 'Unknown'),
        }

        return Response(location_data)
