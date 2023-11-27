alert("hello world");
let searchFormElement = document.querySelector("#search-city");

function handleSearchSubmit(event) {
  event.preventDefault();
  let cityInput = document.querySelector("#city-input");
  let h1 = document.querySelector("h1");
  h1.innerHTML = cityInput.value;
}

searchFormElement.addEventListener("submit", handleSearchSubmit);
