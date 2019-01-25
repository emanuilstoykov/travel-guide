

var countries = {  
    "Rio de Janeiro": { description: "There is an understandable fascination with Rio de Janeiro the world over. Steamy, tropical and sexy, everything seems to move with a casual samba swing and hardly anything, except for football and the traffic, is taken too seriously. The jaw-dropping beauty of the landscape encompasses Atlantic rainforest-covered mountains, postcard-perfect lakes, occasionally stunning architecture and, of course, those golden beaches. It's not surprising that residents are fiercely protective of it all, and visitors invariably fall in love with the place.", name: "1uzhHpj041US8_stQ51U7ZeAwJyq5dinU",},
    "Iguazo falls": { description: "With spectacular waterfalls amongst a backdrop of dense rainforest, Iguazu falls national park is not only one of the most iconic travel destinations in South America, but one of the most beautiful too. Spanning the border between Argentina and Brazil, the Iguazu falls national park is truly remarkable. When visiting the Brazilian side of the falls, you’re best to stay in the nearby city of Foz de Iguacu. Offering amazing panoramas of the falls, the Brazilian side gives a scenic perspective of this natural wonder from a distance. It’s truly astounding to witness the sheer scale of the thunderous waterfalls, which in total amount to roughly three times the size of the famed Niagara falls. Whilst the Brazilian side is better known for panoramic views of the falls, you do still have the chance to stand close enough to the roaring falls to get completely drenched. For more opportunities to see the falls up close, the Argentinian side of the falls offers a number of trails throughout this stunning national park.", name: "1yFIKomRelbNcoyEqOInYE2XloCczdtnL",},
    "Salvador": { description: "Salvador da Bahia has an energy and unadorned beauty that few cities can match. Once the magnificent capital of Portugal’s New World colony, today Salvador is the pulsating heart of the country’s Afro-Brazilian community. Its brilliantly hued center is a living museum of 17th- and 18th-century architecture and gold-laden churches. Wild festivals happen frequently, with drum corps pounding out rhythms against the backdrop of colonial buildings almost daily. Elsewhere in town, a different spirit flows as crowds of religious adherents celebrate and reconnect with African gods at Candomble ceremonies. In fact, there’s no other place in the world where the culture of those brought as slaves from Africa has been preserved as it has been in Salvador – from music and religion to food, dance and martial-arts traditions. Aside from the many attractions within Salvador, a gorgeous coastline lies right outside the city – a suitable introduction to the tropical splendor of Bahia.", name: "1YLQM63maJ_fOpK1d09LzPddITrP-yaYk", },
    "Ilha Grande": { description: "Ilha Grande is a beautiful Brazilian island, about 150 km from Rio de Janeiro and 450 km from Sao Paulo. The largest settlement on the island is called Vila do Abraao",  name: "14NN0jAUf8Xf-PIJG7w6-fISViy23y6Ix", },

  }
  var wrapper = $('#wrapper'), container;
  for (var key in countries){
     
   
      container = $('<div id="countries" class="container"></div>');
      wrapper.append(container);
      container.append('<div class="country">' + key +'</div>');
      container.append('<div class="images">' + `<a href="https://drive.google.com/uc?export=view&id=${countries[key].name}"><img src="https://drive.google.com/uc?export=view&id=${countries[key].name}">` + '</a>'  + '</div>');
      container.append('<div class="description">' + '<h2 class="h2">' + 'Description' + '</h2>' + countries[key].description  +'</div>' );

  }

