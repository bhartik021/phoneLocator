# Overview

The Phone Locator Application is a full-stack project that allows users to find information about a phone number, including its country, location, carrier, and more. The project is built with a React.js frontend, a Django backend, and uses an external API for phone number validation and data retrieval.

<img width="1470" alt="Screenshot 2024-11-17 at 7 23 13 PM" src="https://github.com/user-attachments/assets/ff12caf5-5cda-48fa-879c-df06ef4c886d">

## Features
- **Phone Number Validation**: Accepts and validates phone numbers, including international formats.
- **Detailed Location Information**: Provides comprehensive details about the phone number:
  - **Country**: The country associated with the phone number.
  - **Location**: The specific location or region.
  - **Carrier**: The telecom carrier associated with the number.
  - **Country Code**: The country code for international dialing.
  - **Line Type**: Indicates whether the number is for mobile or landline.
- **International and Local Formats**: Displays the phone number in both international and local formats.
- **Validation Status**: Indicates whether the phone number is valid.
- **User-Friendly Interface**: A clean and interactive UI to easily fetch and display the phone number details.

## Technology Stack

### Frontend
- **React.js**: For creating the user interface.
- **CSS**: Custom styling for responsiveness and aesthetics.
- **Font Awesome Icons**: To enhance visual representation.

### Backend
- **Django**: For building the RESTful API.
- **Django REST Framework (DRF)**: To streamline backend development.
- **Requests Library**: To interact with the external API.

### External API
- **Numverify API**: Provides validation and detailed information for phone numbers.

## Project Structure 
```bash
phoneLocator/
├── backend/                # Backend (Django REST Framework)
│   ├── location/           # Main Django app for API handling
│   │   ├── __init__.py
│   │   ├── admin.py
│   │   ├── apps.py
│   │   ├── models.py
│   │   ├── serializers.py  # Serialization logic
│   │   ├── tests.py
│   │   ├── urls.py         # App-specific URL routing
│   │   ├── views.py        # API Views (PhoneNumberLocation API)
│   │   └── migrations/     # Django migrations
│   ├── phone_locator/      # Django project settings
│   │   ├── __init__.py
│   │   ├── asgi.py
│   │   ├── settings.py     # Django settings (configured for .env)
│   │   ├── urls.py         # Project-wide URL routing
│   │   └── wsgi.py
│   ├── manage.py           # Django management script
│   ├── requirements.txt    # Backend dependencies
│   └── .env                # API keys and secrets
│
├── frontend/               # Frontend (React.js)
│   ├── public/             # Static files
│   │   ├── index.html      # Main HTML template
│   │   └── manifest.json
│   ├── src/                # Source files
│   │   ├── App.css         # Stylesheet for the application
│   │   ├── App.js          # Main React component
│   │   ├── index.js        # Entry point
│   ├── package.json        # Frontend dependencies
│
└── README.md               # Documentation
```

## Installation Steps

Follow these steps to set up the **Phone Locator Application** on your local machine:

### Prerequisites
- Python 3.x
- Node.js and npm
- Virtual Environment (venv)

#### Step 1: Clone the Repository
```bash
git clone https://github.com/bhartik021/phoneLocator.git
```

```bash
cd phoneLocator
```

#### Step 2: Backend Setup

1. Navigate to the backend directory:
```bash
cd backend
```

2. Create a virtual environment and activate it:
```bash
python3 -m venv venv
```

```bash
source venv/bin/activate
```

3. Install the required dependencies:
```bash
pip install -r requirements.txt
```

4. Create a .env file in the backend directory:
```bash
touch .env
```

5. Add your NumVerify API key to the .env file:
```bash
API_LAYER_KEY=your_api_key_here
```

6. Run the Django development server:
```bash
python manage.py runserver
```

#### Step 3: Frontend Setup

1. Navigate to the frontend directory:
```bash
cd ../frontend
```

2. Install frontend dependencies:
```bash
npm install
```

3. Start the React development server:
```bash
npm start
```

#### Step 4: Access the Application

1. Open your browser and navigate to:
```bash
http://localhost:3000
```

## API Details

1. Endpoint: ```/get-location/```

2. Method: `GET`

3. Parameters:
`phone`: The phone number to validate and fetch details for.

4. Response:
```json
{
  "country": "United States of America",
  "location": "Novato",
  "carrier": "AT&T Mobility LLC",
  "country_code": "US",
  "line_type": "mobile",
  "valid": "Yes",
  "international_format": "+14158586273",
  "local_format": "4158586273"
}
```

## License
This project is licensed under the MIT License. See the LICENSE file for more details.

## Contributing
Contributions are welcome! Follow these steps:

### Fork the repository.
1. Create a feature branch:
```bash
git checkout -b feature-name
```

2. Commit changes:
```bash
git commit -m "Add feature-name"
```

3. Push to branch:
```bash
git push origin feature-name
```

4. Open a pull request.

## Contact
- Developer: Bharti Kumari
- Email: bhartik021@gmail.com
- GitHub: Bharti Kumari
- LinkedIn: Bharti Kumari

