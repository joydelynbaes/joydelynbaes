const eventsAPI = 'https://byui-cit230.github.io/weather/data/towndata.json';
  fetch(eventsAPI)
  .then(function (response) {
    return response.json();
})
.then(function (jsonObject) {
    //console.table(jsonObject); // temporary checking for valid response and data parsing
    const towns = jsonObject['towns'];

    // select output location
    const events = document.querySelector('.upcomingEvents');
    // filter the towns
    const town = towns.filter(towns => towns.name == "Fish Haven");
    // create element
    town.forEach(townselect => {
        let card    = document.createElement('div');
        let p1      = document.createElement('p');
        let p2      = document.createElement('p');
        let p3      = document.createElement('p');

        p1.textContent    = `${townselect.events[0]}`;
        p2.textContent    = `${townselect.events[1]}`;
        p3.textContent    = `${townselect.events[2]}`;

        events.append(card);
        card.append(p1);
        card.append(p2);
        card.append(p3);
    });
});

// .events h3, 
// .article h3 { 
//     color: #fff;
//     text-shadow: 2px 2px 2px #000;
//     font-weight: lighter;
//     font-size: larger;
//     font-family: 'Merriweather Sans';
// }
// .events h3, 
// .fiveDayForecast h3 {
//     text-align: center;
//     border-bottom: #05366e solid 3px;
//     padding-bottom: 10px;
//     margin-bottom: 5px;
//     max-width: 50%;
//     margin: auto;
// }

// .events {
//     padding: 1rem;
//     font-family: 'Merriweather Sans';
//     border-radius: 10px;
//     margin-top: 1rem;
//     background-color: rgba(0, 0, 0, 0.263);
//     max-width: 50%;
//     margin: 1rem auto;
// }


// .upcomingEvents {
//     text-align: center;
//     padding: .5rem;
//     border-radius: 10px;
// }