var countries = {  
    "Mexico City": { description: "Mexico City is the densely populated, high-altitude capital of Mexico. It's known for its Templo Mayor (a 13th-century Aztec temple), the baroque Catedral Metropolitana de México of the Spanish conquistadors and the Palacio Nacional, which houses historic murals by Diego Rivera. All of these are situated in and around the Plaza de la Constitución, the massive main square also known as the Zócalo(Google destination info)", name: "1-WHckRxq2R6j1_LSmdkH6uebM6fhLwlK",},
    "Cancún": { description: "Cancún, a Mexican city on the Yucatán Peninsula bordering the Caribbean Sea, is known for its beaches, numerous resorts and nightlife. It’s composed of 2 distinct areas: the more traditional downtown area, El Centro, and Zona Hotelera, a long, beachfront strip of high-rise hotels, nightclubs, shops and restaurants. Cancun is also a famed destination for students during universities’ spring break period(Google destination info)", name: "1Hs0SNeIngHNbBJt58QkGmheHPtFz5GFL",},
    "Tulum": { description: "Tulum is a town on the Caribbean coastline of Mexico’s Yucatán Peninsula. It’s known for its beaches and well-preserved ruins of an ancient Mayan port city. The main building is a large stone structure called El Castillo (castle), perched on a rocky cliff above the white sand beach and turquoise sea. Near the ruins is the Parque Nacional Tulum, a coastal area with mangroves and cenotes (natural limestone sinkholes)(Google destination info)", name: "11N4iVriW5H43_eanS5_0LPryEWn3rf3A", },
    "Chichén Itzá": { description: "Archaeological site with excavated ruins of the large Maya city, including an iconic step pyramid", name: "1AMtbwjrM5zIwjaKotOGl2iVDQhuJacE0", },
    
  }
  var wrapper = $('#wrapper'), container;
  for (var key in countries){
     
   
      container = $('<div id="countries" class="container"></div>');
      wrapper.append(container);
      container.append('<div class="country">' + key +'</div>');
      container.append('<div class="images">' + `<a href="https://drive.google.com/uc?export=view&id=${countries[key].name}"><img src="https://drive.google.com/uc?export=view&id=${countries[key].name}">` + '</a>'  + '</div>');
      container.append('<div class="description">' + '<h2 class="h2">' + 'Description' + '</h2>' + countries[key].description  +'</div>' );

  }