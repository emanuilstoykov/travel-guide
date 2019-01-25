var countries = {  
    "Amsterdam": { description: "Amsterdam is the Netherlands’ capital, known for its artistic heritage, elaborate canal system and narrow houses with gabled facades, legacies of the city’s 17th-century Golden Age. Its Museum District houses the Van Gogh Museum, works by Rembrandt and Vermeer at the Rijksmuseum, and modern art at the Stedelijk. Cycling is key to the city’s character, and there are numerous bike paths(Google destination info)", name: "18cEnI5bfYC2830EW8LgHZvQMmqvbRImq",},
    "The Hague": { description: "The Hague is a city on the North Sea coast of the western Netherlands. Its Gothic-style Binnenhof (or Inner Court) complex is the seat of the Dutch parliament, and 16th-century Noordeinde Palace is the king’s workplace. The city is also home to the U.N.’s International Court of Justice, headquartered in the Peace Palace, and the International Criminal Court(Google destination info)", name: "1wxf7zv8m-OwXxPTrr19MCYkWNZns-x8Y",},
    "Rotterdam": { description: "Rotterdam is a major port city in the Dutch province of South Holland. The Maritime Museum's vintage ships and exhibits trace the city's seafaring history. The 17th-century Delfshaven neighborhood is home to canalside shopping and Pilgrim Fathers Church, where pilgrims worshiped before sailing to America. After being almost completely reconstructed following WWII, the city is now known for bold, modern architecture(Google destination info)", name: "1M8m1Et8x2V0IAmGoQqKWzNz7c32P4v9z", },
    "Zaanse Schans": { description: "Zaanse Schans is a neighborhood in the Dutch town of Zaandam, near Amsterdam. Historic windmills and distinctive green wooden houses were relocated here to recreate the look of an 18th/19th-century village. The Zaans Museum has regional costumes, model windmills and interactive exhibits on chocolate making. Artisan workshops demonstrate rare handicrafts such as wooden clog carving, barrel making and pewter casting.(Google destionation info)", name: "1hOXDPC_VM8TpiZyWBCsphl9wtQHRhFXH", },
 
  }
  var wrapper = $('#wrapper'), container;
  for (var key in countries){
     
   
      container = $('<div id="countries" class="container"></div>');
      wrapper.append(container);
      container.append('<div class="country">' + key +'</div>');
      container.append('<div class="images">' + `<a href="https://drive.google.com/uc?export=view&id=${countries[key].name}"><img src="https://drive.google.com/uc?export=view&id=${countries[key].name}">` + '</a>'  + '</div>');
      container.append('<div class="description">' + '<h2 class="h2">' + 'Description' + '</h2>' + countries[key].description  +'</div>' );

  }