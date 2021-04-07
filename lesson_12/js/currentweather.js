const apiURL = "https://api.openweathermap.org/data/2.5/weather?lat=36.0308&lon=139.2441&appid=732b57481f8f22a4ed96a8fcb2b926b8&units=imperial";
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
   // console.log(jsObject);
    const tempreture = document.querySelector('#temp');
    tempreture.textContent = jsObject.main.temp;

    const weather = document.querySelector("#weather");
    weather.textContent = jsObject.weather[0].description;

    const humidity = document.querySelector("#humidity");
    humidity.textContent = jsObject.main.humidity;
});