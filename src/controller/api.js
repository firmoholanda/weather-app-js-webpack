const apiKey = '31a4bf410e7c22de98a5243e4df72170';

const getWeatherData = async (latitude, longitude, city, unit) => {
  let responseData = {};
  try {
    let response;
    if (city == null) {
      response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&units=${unit}&APPID=${apiKey}`, { mode: 'cors' });
    } else {
      response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=${unit}&APPID=${config.API_KEY}`, { mode: 'cors' });
    }
    const weatherData = await response.json();
    responseData = {
      city: `${weatherData.city.name}, ${weatherData.city.country}`,
      temperature: (weatherData.list[0].main.temp).toFixed(1),
      weatherDescription: weatherData.list[0].weather[0].description,
      weatherIcon: weatherData.list[0].weather[0].icon,
      pressure: weatherData.list[0].main.pressure,
      humidity: weatherData.list[0].main.humidity,
      wind: weatherData.list[0].wind.speed,
    };
  } catch (err) {
    console.log(err);
  }
  return responseData;
};

export default getWeatherData;
