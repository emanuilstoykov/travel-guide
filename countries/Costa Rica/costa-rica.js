var countries = {  
    "San Jose": { description: "San Jose, Costa Rica’s capital, sits in the Central Valley region with the Talamanca Mountains to the south and volcanoes to the north. The city is distinguished by its Spanish colonial buildings, like the ornate, neoclassical National Theatre of Costa Rica overlooking downtown’s Plaza de la Cultura, a popular gathering spot. Below the plaza, the Pre-Columbian Gold Museum displays hundreds of gleaming artifacts(Google destination info)", name: "1Pns1v9S3S4Qmy2-5v-WGppWT6fVx65rx",},
    "Parque Nacional Manuel Antonio": { description: "Expansive, coastal rainforest nature reserve sustaining rich wildlife & multiple marine species(Google destination info)", name: "1ZbRuJF1eaZfVtETOs1tBuXFXVy6ljadE",},
    "La Fortuna, San Carlos": { description: "La Fortuna is a small town in Costa Rica, northwest of the capital, San José. It’s known as a gateway to Arenal Volcano National Park, comprising 2 volcanoes. Active Arenal Volcano is still laced with lava flows. Hot springs dot the foot of the volcano, on the thermal Tabacón River. Dormant Chato Volcano has a crater lake and rainforest trails leading to La Fortuna Waterfall, with its natural pool(Google destination info)", name: "11OxGNk7sxVKRTaEiNsq-jXmwtA4sf74A", },    
    "Monteverde": { description: "Monteverde is a town in mountainous northwestern Costa Rica. It’s renowned for its biodiverse forests in the clouds. The famous Monteverde Cloud Forest Reserve shelters countless wildlife species, including jaguars, ocelots and the colorfully plumed resplendent quetzal. The reserve’s marked trails cut through ferns and orchids, and way overhead, suspended bridges allow walks above the forest canopy(Google destination info)", name: "10zHKm5snbzPB1YQYuPTafO7jWSa9OCOf",},
    
  }
  var wrapper = $('#wrapper'), container;
  for (var key in countries){
     
   
      container = $('<div id="countries" class="container"></div>');
      wrapper.append(container);
      container.append('<div class="country">' + key +'</div>');
      container.append('<div class="images">' + `<a href="https://drive.google.com/uc?export=view&id=${countries[key].name}"><img src="https://drive.google.com/uc?export=view&id=${countries[key].name}">` + '</a>'  + '</div>');
      container.append('<div class="description">' + '<h2 class="h2">' + 'Description' + '</h2>' + countries[key].description  +'</div>' );

  }
