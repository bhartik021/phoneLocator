# Phone Number Location Finder

## Overview

The Phone Locator Application is a full-stack project that allows users to find information about a phone number, including its country, location, carrier, and more. The project is built with a React.js frontend, a Django backend, and uses an external API for phone number validation and data retrieval.

## Features

- **Validation**: Accepts phone numbers with country codes.
- **Data Fetching**: Provides:
  - Country and location.
  - Carrier and line type.
  - International and local formats.
- **User Interface**: A responsive and interactive UI with colorful icons for each piece of data.


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
│   │   └── components/     # Reusable React components
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

Navigate to the backend directory:
```bash
cd backend
```

Create a virtual environment and activate it:
```bash
python3 -m venv venv
```

```bash
source venv/bin/activate
```

Install the required dependencies:
```bash
pip install -r requirements.txt
```

Create a .env file in the backend directory:
```bash
touch .env
```

Add your NumVerify API key to the .env file:
```bash
API_LAYER_KEY=your_api_key_here
```

Run the Django development server:
```bash
python manage.py runserver
```

#### Step 3: Frontend Setup

Navigate to the frontend directory:
```bash
cd ../frontend
```

Install frontend dependencies:
```bash
npm install
```

Start the React development server:
```bash
npm start
```

#### Step 4: Access the Application

Open your browser and navigate to:
```bash
http://localhost:3000
```

## API Details

Endpoint: ```/get-location/```

Method: `GET`

Parameters:
`phone`: The phone number to validate and fetch details for.

Response:
```json
{
  "country": "United States",
  "location": "California",
  "carrier": "Verizon",
  "country_code": "US",
  "line_type": "Mobile",
  "valid": true,
  "international_format": "+1 1234567890",
  "local_format": "1234567890"
}
```

## Screenshots

## License
This project is licensed under the MIT License. See the LICENSE file for more details.

## Contributing
Contributions are welcome! Follow these steps:

### Fork the repository.
#### Create a feature branch:
```bash
git checkout -b feature-name
```

#### Commit changes:
```bash
git commit -m "Add feature-name"
```

#### Push to branch:
```bash
git push origin feature-name
```

#### Open a pull request.

## Contact
- Developer: Bharti Kumari
- Email: bhartik021@gmail.com
- GitHub: Bharti Kumari
- LinkedIn: Bharti Kumari

