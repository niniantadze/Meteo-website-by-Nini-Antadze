function updateWeather(response) {
  let todayTemperature = document.querySelector("#today-temperature");
  let h1 = document.querySelector("h1");

  let todayInfo = document.querySelector("#today-info");
  let todaywind = document.querySelector("#today-wind");
  let todayhumidity = document.querySelector("#today-humidity");
  let todaypressure = document.querySelector("#today-pressure");
  let timeElement = document.querySelector("#time");
  let date = new Date(response.data.time * 1000);

  let icon = document.querySelector("#icon");
  icon.innerHTML = `<img src="${response.data.condition.icon_url}" class=weather-app-icon/>`;
  days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
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
  let monthDate = document.querySelector("#month-date");
  monthDate.innerHTML = `${date.getDate()} ${months[date.getMonth()]} `;
  getForecast(response.data.city);
}

function searchCity(city) {
  let apiKey = "fbef01f4et1b02o0d25c27210a43ef3f";
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

function formatDay(timestamp) {
  let date = new Date(timestamp * 1000);
  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  return days[date.getDay()];
}

function getForecast(city) {
  let apiKey = "fbef01f4et1b02o0d25c27210a43ef3f";
  let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&units=metric`;
  axios(apiUrl).then(displayForecast);
}

function displayForecast(response) {
  let forecast = document.querySelector("#forecast");

  let forecastHtml = "";

  response.data.daily.forEach(function (day, index) {
    if (index < 5) {
      forecastHtml =
        forecastHtml +
        `
        <div class="row">
        <div class="forecast-weekday">${formatDay(day.time)}</div>
        <hr>
          <img
            src=${day.condition.icon_url}
            alt="weather icon" class="forecast-icon"
          />
        <div class="forecast-celsius">
            <span class="max-weather">${Math.round(
              day.temperature.maximum
            )}°</span>
    <span class="min-weather">${Math.round(day.temperature.minimum)}°</span>
        </div>
      </div>`;
    }
  });

  let forecastElement = document.querySelector("#forecast");
  forecastElement.innerHTML = forecastHtml;
}

searchCity("Warsaw");
