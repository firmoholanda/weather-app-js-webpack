// import stylesheets
import './view/css/style.css';

// import app api
import { getWeatherData } from './controller/api';

// import html modules
import jumbotron from './view/jumbotron';
import search from './view/search';
import weatherCard from './view/weatherCard';
import footer from './view/footer';

// assemble index
const main = document.querySelector('#content');
main.insertAdjacentHTML('beforeEnd', jumbotron);
main.insertAdjacentHTML('beforeEnd', search);
main.insertAdjacentHTML('beforeEnd', weatherCard);
main.insertAdjacentHTML('beforeEnd', footer);

// get html elements
const cityElement = document.getElementById('city');
const temperatureElement = document.getElementById('temperature');
const weatherIconElement = document.getElementById('weatherIcon');
const weatherDescriptionElement = document.getElementById('weatherDescription');
const pressureElement = document.getElementById('pressure');
const humidityElement = document.getElementById('humidity');
const windElement = document.getElementById('wind');
const updatedAtElement = document.getElementById('updatedAt');


// weatherData promise
const myWeatherData = getWeatherData('sao paulo', 'metric');

myWeatherData.then(response => {
  cityElement.innerHTML = response.city.toLowerCase();
  temperatureElement.innerHTML = response.temperature + " °C"
  weatherIconElement.src = "http://openweathermap.org/img/wn/" + response.weatherIcon + "@2x.png"
  weatherDescriptionElement.innerHTML = response.weatherDescription
  pressureElement.innerHTML = response.pressure
  humidityElement.innerHTML = response.humidity + "%"
  windElement.innerHTML = response.wind + " m/s"
  updatedAtElement.innerHTML = new Date().toString().toLowerCase();
});



const searchImput = document.getElementById('searchImput');
const searchBtn = document.getElementById('searchBtn');

searchBtn.onclick = () => {

  //alert("test")

  const myWeatherData = getWeatherData(searchImput.value, 'metric');

  myWeatherData.then(response => {
    cityElement.innerHTML = response.city.toLowerCase();
    temperatureElement.innerHTML = response.temperature + " °C"
    weatherIconElement.src = "http://openweathermap.org/img/wn/" + response.weatherIcon + "@2x.png"
    weatherDescriptionElement.innerHTML = response.weatherDescription
    pressureElement.innerHTML = response.pressure
    humidityElement.innerHTML = response.humidity + "%"
    windElement.innerHTML = response.wind + " m/s"
    updatedAtElement.innerHTML = new Date().toString().toLowerCase();
  });

};