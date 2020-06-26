// import stylesheets
import './view/css/style.css';

// import app api
import { getWeatherData } from './controller/api';

// import html modules
import jumbotron from './view/jumbotron';
import weatherCard from './view/weatherCard';
import footer from './view/footer';


// assemble index
const main = document.querySelector('#content');
main.insertAdjacentHTML('beforeEnd', jumbotron);
main.insertAdjacentHTML('beforeEnd', weatherCard);
main.insertAdjacentHTML('beforeEnd', footer);

// weatherData promise
const myWeatherData = getWeatherData('sao paulo', 'metric');

myWeatherData.then(response => {
  // city
  const cityElement = document.getElementById('city');
  cityElement.innerHTML = response.city

  // temperature
  const temperatureElement = document.getElementById('temperature');
  temperatureElement.innerHTML = response.temperature

  // weatherDescription
  const weatherDescriptionElement = document.getElementById('weatherDescription');
  weatherDescriptionElement.innerHTML = response.weatherDescription

  // humidity
  const humidityElement = document.getElementById('humidity');
  humidityElement.innerHTML = response.humidity + "%"

  // wind
  const windElement = document.getElementById('wind');
  windElement.innerHTML = response.wind + " m/s"
  
  // updatedAt
  const updatedAtElement = document.getElementById('updatedAt');
  updatedAtElement.innerHTML = new Date().toString().toLowerCase();
  

});




//console.log(myWeatherData)
