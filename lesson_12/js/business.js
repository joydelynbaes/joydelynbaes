const requestURL = "../lesson_12/js/business.json";

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    //console.table(jsonObject);  // temporary checking for valid response and data parsing
    const business = jsonObject['card'];
    for (let i = 0; i < business.length; i++) {
      
        let card = document.createElement('section');
        let name = document.createElement('p');
        let address = document.createElement('h2');
        let phone = document.createElement('h3');
        let qoute = document.createElement('p');
        let website = document.createElement('p');
        let image = document.createElement('img');
        
        name.textContent = 'Name: ' +business[i].name;
        address.textContent ='Address: ' + business[i].address;
        phone.textContent = 'Phone: ' + business[i].phone;
        qoute.textContent = 'Qoute: ' + business[i].qoute;
        website.textContent = 'Website: ' + business[i].website;
        if (i == 1) {
            image.setAttribute('src', business[i].imageurl);
        image.setAttribute("alt", business[i].name);
        } else if (i == 5){
            image.setAttribute('src', business[i].imageurl);
          image.setAttribute("alt", business[i].name);
        } else if (i == 6){
            image.setAttribute('src', business[i].imageurl);
          image.setAttribute("alt", business[i].name);
        }

    
        card.appendChild(name);
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(qoute);
        card.appendChild(website);
        card.appendChild(image);

        document.querySelector('div.cards').appendChild(card);
      }
    

  });