
        //Ecuador
  //Ecuador is a country straddling the equator on South America’s west coast. Its diverse landscape encompasses Amazon jungle, Andean highlands and the wildlife-rich Galápagos Islands. In the Andean foothills at an elevation of 2,850m, Quito, the capital, is known for its largely intact Spanish colonial center, with decorated 16th- and 17th-century palaces and religious sites, like the ornate Compañía de Jesús Church.(Wikipedia)

  var countries = {  
    "Cotopaxi": { description: "Cotopaxi is an active stratovolcano in the Andes Mountains, located in the Latacunga canton of Cotopaxi Province, about 50 km south of Quito, and 33 km northeast of the city of Latacunga, Ecuador, in South America. It is the second highest summit in Ecuador, reaching a height of 5,897 m(Google destination info)", name: "1xAVwOc3EXVb9mR99xvdsNey_iBnAvJMn",},
    "Baltra Island": { description: "Baltra Island, or Isla Baltra, is a small island of the Galápagos Islands. Also known as South Seymour, Baltra is a small flat island located near the center of the Galápagos. It was created by geological uplift. The island is very arid and vegetation consists of salt bushes, prickly pear cactus and palo santo trees(Google destination info)", name: "1woY_19xbGQo7xt_mwgz4vVqK69Jt3zcE",},
    "Floreana Island": { description: "Floreana Island is an island of the Galápagos Islands. It was named after Juan José Flores, the first president of Ecuador, during whose administration the government of Ecuador took possession of the archipelago. It was previously called Charles Island, and Santa Maria after one of the caravels of Columbus(Google destination info)", name: "1e1HlTOD_EDLs5OicjbHNcNfAg83rIcAH", },
    "Cajas National Park": { description: "Cajas National Park is a high-altitude area west of Cuenca, Ecuador. It’s known for trails through evergreen cloud forests and hundreds of lakes, such as Laguna Toreadora. It’s also home to rich wildlife including Andean condors, giant hummingbirds and raccoon-like coatis. Just outside the park, the Santuario de la Vírgen del Cajas is an outdoor pilgrimage site where the Virgin Mary is said to have appeared(Google destination info)", name: "1t8z0r6bgbjjAsirtzdLEhmnL44WLdlV", },

  }
  var wrapper = $('#wrapper'), container;
  for (var key in countries){
     
   
      container = $('<div id="countries" class="container"></div>');
      wrapper.append(container);
      container.append('<div class="country">' + key +'</div>');
      container.append('<div class="images">' + `<a href="https://drive.google.com/uc?export=view&id=${countries[key].name}"><img src="https://drive.google.com/uc?export=view&id=${countries[key].name}">` + '</a>'  + '</div>');
      container.append('<div class="description">' + '<h2 class="h2">' + 'Description' + '</h2>' + countries[key].description  +'</div>' );

  }

