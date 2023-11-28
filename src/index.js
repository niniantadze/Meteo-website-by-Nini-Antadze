function updateWeather(response) {
  let todayTemperature = document.querySelector("#today-temperature");
  let h1 = document.querySelector("h1");

  let todayInfo = document.querySelector("#today-info");
  let todaywind = document.querySelector("#today-wind");
  let todayhumidity = document.querySelector("#today-humidity");
  let todaypressure = document.querySelector("#today-pressure");
  let timeElement = document.querySelector("#time");
  let date = new Date(response.data.time * 1000);

  days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  todayTemperature.innerHTML = `${Math.round(
    response.data.temperature.current
  )}°C`;
  h1.innerHTML = response.data.city;

  todayInfo.innerHTML = response.data.condition.description;
  todaywind.innerHTML = `${Math.round(response.data.wind.speed)} km/h`;
  todayhumidity.innerHTML = `${response.data.temperature.humidity} %`;
  todaypressure.innerHTML = response.data.temperature.pressure;
  timeElement.innerHTML = `${
    days[date.getDay()]
  } ${date.getHours()}:${date.getMinutes()}`;
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
