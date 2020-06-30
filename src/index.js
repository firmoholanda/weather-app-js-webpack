// import stylesheets
import './view/css/style.css';

// import app api
import { getWeatherData } from './controller/api';

// import html modules
import jumbotron from './view/jumbotron';
import search from './view/search';
import weatherCard from './view/weatherCard';
import footer from './view/footer';
import { functionsIn } from 'lodash';

// assemble index
const main = document.querySelector('#content');
main.insertAdjacentHTML('beforeEnd', jumbotron);
main.insertAdjacentHTML('beforeEnd', search);
main.insertAdjacentHTML('beforeEnd', weatherCard);
main.insertAdjacentHTML('beforeEnd', footer);

// get html elements
const searchImput = document.getElementById('searchImput');
const searchBtn = document.getElementById('searchBtn');
const cityElement = document.getElementById('city');
const temperatureElement = document.getElementById('temperature');
const weatherIconElement = document.getElementById('weatherIcon');
const weatherDescriptionElement = document.getElementById('weatherDescription');
const pressureElement = document.getElementById('pressure');
const humidityElement = document.getElementById('humidity');
const windElement = document.getElementById('wind');
const updatedAtElement = document.getElementById('updatedAt');
const switchMetricElement = document.getElementById('switchMetric');


// weatherData promise
function loadDataToPage(latitude, longitude, city) {
  var selectedMetric, tempMetric, windMetric;

  if (switchMetricElement.checked) {
    selectedMetric = 'imperial';
    tempMetric = " °F";
    windMetric = " mi/h";
  } else {
    selectedMetric = 'metric';
    tempMetric = " °C";
    windMetric = " m/s";
  }

  const myWeatherData = getWeatherData(latitude, longitude, city, selectedMetric);

  myWeatherData.then(response => {
    cityElement.innerHTML = response.city.toLowerCase();
    temperatureElement.innerHTML = response.temperature + tempMetric
    weatherIconElement.src = "http://openweathermap.org/img/wn/" + response.weatherIcon + "@2x.png"
    weatherDescriptionElement.innerHTML = response.weatherDescription
    pressureElement.innerHTML = response.pressure + " hpa"
    humidityElement.innerHTML = response.humidity + "%"
    windElement.innerHTML = response.wind + windMetric
    updatedAtElement.innerHTML = new Date().toString().toLowerCase();
  });
};

// get information from current city
function loadDataFromCurrentCity() {
  navigator.geolocation.getCurrentPosition(position => {
    loadDataToPage(position.coords.latitude, position.coords.longitude, undefined);
  });
}

// loadDataToPage by default
loadDataFromCurrentCity();

// loadDataToPage when searched
searchBtn.onclick = () => {
  loadDataToPage(undefined, undefined, searchImput.value);
};

// loadDataToPage when metric switch is clicked
switchMetricElement.onclick = () => {
  searchImput.value ? loadDataToPage(undefined, undefined, searchImput.value) : loadDataFromCurrentCity();
}
