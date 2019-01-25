var countries = {  
    "Pyramids of Giza": { description: "Egypt's most famed and feted structures, these ancient tombs of kings guarded by the serene Sphinx have wowed spectators for centuries. Today, they continue to work their magic on all who visit(Wikipedia)", name: "17dXs_1dMfgzunJLstwV7Ry9ozuqMXFij",},
    "Luxor": { description: "Luxor is a city on the east bank of the Nile River in southern Egypt. It's on the site of ancient Thebes, the pharaohs’ capital at the height of their power, during the 16th–11th centuries B.C. Today's city surrounds 2 huge, surviving ancient monuments: graceful Luxor Temple and Karnak Temple, a mile north. The royal tombs of the Valley of the Kings and the Valley of the Queens are on the river’s west bank(Wikipedia)", name: "1kVVmDQvZ0Fk-bajKBjy1RB6kn5oIu8Qx",},
    "Cairo": { description: "Cairo, Egypt’s sprawling capital, is set on the Nile River. At its heart is Tahrir Square and the vast Egyptian Museum, a trove of antiquities including royal mummies and gilded King Tutankhamun artifacts. Nearby, Giza is the site of the iconic pyramids and Great Sphinx, dating to the 26th century BC. In Gezira Island’s leafy Zamalek district, 187m Cairo Tower affords panoramic city views(Wikipedia)", name: "1n4fPp9n7jnGTUjqJrwnSj1s8johNwYYS", },
    "Red Sea": { description: "The ‘Red Sea Riviera’ is a place of many different attractions. On the one hand, it is famous (or infamous, depending on your view) for cheap package holidays – overdevelopment has pockmarked the coastline deeply, leaving a trail of megaresorts and half-finished hotels in its wake. Alongside these are some exceptional exclusive resorts secluded from the hustle of the packages. Dig deeper and you will find other, more surprising sides to the region(Wikipedia)", name: "1Ei5830tlHLWL0h55qStA9wp916DX2LqP",},
    "Abu Simbel": { description: "Abu Simbel is a village in the Egyptian part of Nubia, about 240 kilometers southwest of Aswan and near the border with Sudan. As of 2012, it has about 2600 inhabitants. It is best known as the site of the Abu Simbel temples(Wikipedia)", name: "1_1vaKxdehhsqd-BKLZzZr37lZ1iTxObF", },

     
  }
  var wrapper = $('#wrapper'), container;
  for (var key in countries){
     
   
      container = $('<div id="countries" class="container"></div>');
      wrapper.append(container);
      container.append('<div class="country">' + key +'</div>');
      container.append('<div class="images">' + `<a href="https://drive.google.com/uc?export=view&id=${countries[key].name}"><img src="https://drive.google.com/uc?export=view&id=${countries[key].name}">` + '</a>'  + '</div>');
      container.append('<div class="description">' + '<h2 class="h2">' + 'Description' + '</h2>' + countries[key].description  +'</div>' );

  }