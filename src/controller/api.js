const apiKey = '31a4bf410e7c22de98a5243e4df72170';

const getWeatherData = async (location, unit) => {
  let weatherData = {};
  try {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${location}&units=${unit}&APPID=${apiKey}`,
      { mode: 'cors' });
    const weatherData = await response.json();
    weatherData = {
      city: `${weatherData.city.name}, ${weatherData.city.country}`,
      temp: Math.round(weatherData.list[0].main.temp),
      weather: weatherData.list[0].weather[0].main,
      humidity: weatherData.list[0].main.humidity,
      wind: weatherData.list[0].wind.speed,
      iconId: weatherData.list[0].weather[0].icon,
    };
  } catch (err) {
    error('city not found. check your spelling.');
  }
  return weatherData;
};

export { getWeatherData };
