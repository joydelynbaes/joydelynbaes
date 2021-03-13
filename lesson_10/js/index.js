const requestURL = "https://byui-cit230.github.io/weather/data/towndata.json";

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    //console.table(jsonObject);  // temporary checking for valid response and data parsing
    const towns = jsonObject['towns'];
    for (let i = 0; i < towns.length; i++) {
      if ((i == 1) || (i == 5) || (i == 6)) {
        let card = document.createElement('section');
        let city = document.createElement('h2');
        let motto = document.createElement('h3');
        let year = document.createElement('p');
        let population = document.createElement('p');
        let rain = document.createElement('p');
        let image = document.createElement('img');
        
        city.textContent = towns[i].name;
        motto.textContent = towns[i].motto;
        year.textContent = 'Year Founded: ' + towns[i].yearFounded;
        population.textContent = 'Population: ' + towns[i].currentPopulation;
        rain.textContent = 'Rain: ' + towns[i].averageRainfall;
        if (i == 1) {
        image.setAttribute("src", "../lesson_9/img/fish.jpg");
        image.setAttribute("alt", towns[i].name);
        } else if (i == 5){
          image.setAttribute("src", "../lesson_9/img/preston.jpg");
          image.setAttribute("alt", towns[i].name);
        } else if (i == 6){
          image.setAttribute("src", "../lesson_9/img/soda.jpg");
          image.setAttribute("alt", towns[i].name);
        }

    
        card.appendChild(city);
        card.appendChild(motto);
        card.appendChild(year);
        card.appendChild(population);
        card.appendChild(rain);
        card.appendChild(image);

        document.querySelector('div.cards').appendChild(card);
      }
    }

  });