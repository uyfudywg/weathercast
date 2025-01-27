# Weather Forecast

An innovative and user-friendly **Weather Forecast** application built with **HTML**, **CSS**, and **JavaScript**. This project fetches real-time weather data using the WeatherAPI and displays current conditions and forecasts for any city or location.

## Features

### Current Weather
- Displays temperature, humidity, wind speed, and other weather details.
- Uses the **WeatherAPI** to fetch reliable weather data.

### Forecast Information
- Search for any city to view its weather details.
- Provides weather predictions for 3 days.
- Includes a 24-hour forecast for detailed hourly weather updates.

### Responsive Design
- Fully optimized for both desktop and mobile devices.
- Intuitive and visually appealing interface.

## Technologies Used

- **HTML5**: For structuring the application.
- **CSS3**: For styling and layout.
- **JavaScript**: For API calls and interactivity.

![HTML5 Badge](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3 Badge](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript Badge](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)

## How It Works

### Current Weather Workflow
1. Users enter the name of a city.
2. The app fetches and displays the weather details:
   - Temperature
   - Humidity
   - Wind speed
   - Weather description

### 24-Hour Forecast Workflow
1. Users can view detailed hourly updates for the next 24 hours.
2. The app displays the temperature, weather condition, and precipitation probability for each hour.

### Forecast Workflow
1. After viewing current weather conditions, users can navigate to see the forecast.
2. The app displays predictions for the next few days, including high and low temperatures and weather descriptions.

**Add API Key**
   - Sign up at [WeatherAPI](https://www.weatherapi.com/).
   - Obtain your API key.
   - Replace the placeholder in the JavaScript file with your API key:
     ```javascript
     const keyAPI = "YOUR_API_KEY_HERE";
     ```

## Usage

1. Open the application in your browser.
2. Enter the name of a city in the search bar and click "Search."
3. View current weather details and forecasts, including the 24-hour forecast.
