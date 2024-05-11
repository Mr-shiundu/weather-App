function getWeather() {
    const city = document.getElementById('city').value;
    const apiKey = 'YOUR_API_KEY'; // Replace with your API key

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
        .then(response => response.json())
        .then(data => {
            const temperature = Math.round(data.main.temp - 273.15);
            const weatherDescription = data.weather[0].description;
            document.getElementById('weather-info').innerHTML = `It's ${temperature}°C and ${weatherDescription} in ${city}.`;
        })
        .catch(error => {
            console.log('Error fetching weather data:', error);
            document.getElementById('weather-info').innerHTML = 'Failed to fetch weather data. Please try again.';
        });
}