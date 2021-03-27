const apiURL = "http://api.openweathermap.org/data/2.5/weather?id=2172797&appid=732b57481f8f22a4ed96a8fcb2b926b8&units=imperial";

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);

    const weather = document.querySelector("#weather")
    weather.textContent = jsObject.weather[0].description;

    const temperature = document.querySelector("#temperature");
    temperature.textContent = jsObject.main.temp;

    const humidity = document.querySelector("#humidity");
    humidity.textContent = jsObject.main.humidity;

    const speed = document.querySelector("#speed");
    speed.textContent = jsObject.wind.speed;
});
    