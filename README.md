## Simple Weather App

This is a simple weather application that fetches and displays weather data for a specified city using the OpenWeather API.

### Setup

1. Clone the repository:
    ```
    git clone https://github.com/Traciehc/CurrentWeather.git
    ```

2. Navigate to the project directory:
    ```
    cd CurrentWeather
    ```
3.  Obtain API KEY and vertify your email at https://home.openweathermap.org/ . Note your email must be verified before the API Key will function.

4. Open `app.js` and replace `'YOUR_API_KEY'` with your actual API key from OpenWeather:
    ```javascript
    const apiKey = 'YOUR_ACTUAL_API_KEY';
    ```

5. Open `index.html` in your browser to run the application.

### Usage

- Enter a city name (only) in the input field and click "Get Weather" to fetch and display the current weather data for that city.
