function updateWeather(response) {
  let todayTemperature = document.querySelector("#today-temperature");
  todayTemperature.innerHTML = Math.round(response.data.temperature.current);
  let h1 = document.querySelector("h1");
  h1.innerHTML = response.data.city;
  let todayInfo = document.querySelector("#today-info");
  todayInfo.innerHTML = response.data.condition.description;
  let todaywind = document.querySelector("#today-wind");
  todaywind.innerHTML = Math.round(response.data.wind.speed);
  let todayhumidity = document.querySelector("#today-humidity");
  todayhumidity.innerHTML = response.data.temperature.humidity;
  let todaypressure = document.querySelector("#today-pressure");
  todaypressure.innerHTML = response.data.temperature.pressure;
}

function searchCity(city) {
  let apiKey = "fcec8ad3dft937afe4da000c469b9obf";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&unit=metric`;
  axios(apiUrl).then(updateWeather);
}

function handleSearchSubmit(event) {
  event.preventDefault();
  let cityInput = document.querySelector("#city-input");

  searchCity(cityInput.value);
}
let searchFormElement = document.querySelector("#search-city");
searchFormElement.addEventListener("submit", handleSearchSubmit);

searchCity("Warsaw");
