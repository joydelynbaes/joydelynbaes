const apiURL = "https://api.openweathermap.org/data/2.5/weather?lat=36.0308&lon=139.2441&appid=732b57481f8f22a4ed96a8fcb2b926b8&units=imperial";
fetch(aapiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    const alert = document.querySelector('#alert');
    alert.textContent = jsObject.main.alert.event;

    const weather = document.querySelector("#others");
    weather.textContent = jsObject.main.alert.description;

    document.getElementById("others").style.display="block";
  });