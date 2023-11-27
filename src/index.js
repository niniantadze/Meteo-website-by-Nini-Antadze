let searchFormElement = document.querySelector("#search-city");

function searchCity(city) {
  let apiKey = "fcec8ad3dft937afe4da000c469b9obf";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&unit=metric`;
  axios(apiUrl).then(updateWeather);
}

function updateWeather(response) {}

function handleSearchSubmit(event) {
  event.preventDefault();
  let cityInput = document.querySelector("#city-input");
  let h1 = document.querySelector("h1");
  h1.innerHTML = cityInput.value;
  searchCity(cityInput.value);
}

searchFormElement.addEventListener("submit", handleSearchSubmit);
