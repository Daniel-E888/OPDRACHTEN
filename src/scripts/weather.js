const API_KEY = 'a128a955518080c02bdbe06d0dfa2db9';

const COORDINATES = {
    lat: 52.078663,
    lon: 4.288788
}

function getWeatherContainer() {
    return document.querySelector('.weather');
}

function createWeatherHeader() {
    const header = document.createElement('h2');
    header.textContent = 'Weather';
    return header;
}

function showLoadingText(container) {
    container.textContent = 'Loading weather information...';
}

function showErrorText(container, message) {
    container.textContent = message;
}

function renderWeather(container, data) {
    container.innerHTML = '';

    const header = createWeatherHeader();

    const location = document.createElement('h3');
    location.textContent = `Location: ${data.name}`;

    const temperature = document.createElement('p');
    temperature.textContent = `Temperature: ${Math.round(data.main.temp)} °C`;

    const description = document.createElement('p');
    description.textContent = `Weather: ${data.weather[0].description}`;

    container.append(header, location, temperature, description);
}

async function getWeather() {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${COORDINATES.lat}&lon=${COORDINATES.lon}&appid=${API_KEY}&units=metric`);
        if(!response.ok) {
            throw new Error(`API gaf een foutcode terug: ${response.status}`);
        }
        const data = await response.json();
        renderWeather(getWeatherContainer(), data);
    } catch (error) {
        console.error('Error fetching weather data:', error);
        showErrorText(getWeatherContainer(), 'Failed to load weather information.');
    }
}

showLoadingText(getWeatherContainer());
const timeout = setTimeout(getWeather, 2000);