document.getElementById('getWeather').addEventListener('click', function() {
    const city = document.getElementById('city').value;
    const apiKey = 'YOUR_ACTUAL_API_KEY'; // Replace with your actual API key

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
        .then(response => response.json())
        .then(data => {
            document.getElementById('cityName').textContent = data.name;
            document.getElementById('temperature').textContent = `Temperature: ${data.main.temp}°C`;
            document.getElementById('description').textContent = `Description: ${data.weather[0].description}`;
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
        });
});

