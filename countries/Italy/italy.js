var countries = {  
    "Rome": { description: "Rome, Italy’s capital, is a sprawling, cosmopolitan city with nearly 3,000 years of globally influential art, architecture and culture on display. Ancient ruins such as the Forum and the Colosseum evoke the power of the former Roman Empire. Vatican City, headquarters of the Roman Catholic Church, has St. Peter’s Basilica and the Vatican Museums, which house masterpieces such as Michelangelo’s Sistine Chapel frescoes.", name: "1QRPbdaM8ooZ6eId60yPbngoUqs1f5Wlr",},
    "Venice": { description: "Venice, the capital of northern Italy’s Veneto region, is built on more than 100 small islands in a lagoon in the Adriatic Sea. It has no roads, just canals – including the Grand Canal thoroughfare – lined with Renaissance and Gothic palaces. The central square, Piazza San Marco, contains St. Mark’s Basilica, which is tiled with Byzantine mosaics, and the Campanile bell tower offering views of the city’s red roofs.", name: "1UtMCIdV9WdtlTv7NlHBkQ0-sQdSwpseG",},
    "Naples": { description: "Naples, a city in southern Italy, sits on the Bay of Naples. Nearby is Mount Vesuvius, the still-active volcano that destroyed nearby Roman town Pompeii. Dating to the 2nd millennium B.C., Naples has centuries of important art and architecture. The city's cathedral, the Duomo di San Gennaro, is filled with frescoes. Other major landmarks include the lavish Royal Palace and Castel Nuovo, a 13th-century castle.", name: "1vJlGGiBnIbcJMsOek0XeO4GjMR3ARfKC",},
    "Sicily": { description: "Sicily, the largest Mediterranean island, is just off the \"toe\" of Italy's \"boot.\" Its rich history is reflected in sites like the Valley of the Temples, the well-preserved ruins of 7 monumental, Doric-style Greek temples, and in the Byzantine mosaics at the Cappella Palatina, a former royal chapel in capital city Palermo. On Sicily’s eastern edge is Mount Etna, one of Europe’s highest active volcanoes.", name: "1MHic-9uVPuKAbPvfQODOhp1UeOYxVqdZ",},
    "Cinque Terre": { description: "Set amid some of the most dramatic coastal scenery on the planet, these five ingeniously constructed fishing villages can bolster the most jaded of spirits. A Unesco World Heritage Site since 1997, Cinque Terre isn't the undiscovered Eden it once was but, frankly, who cares? Sinuous paths traverse seemingly impregnable cliffsides, while a 19th-century railway line cut through a series of coastal tunnels ferries the footsore from village to village. Thankfully cars were banned over a decade ago.", name: "1NOoUUHgdlbEVL2Mx_55cVgsFdJpoMnZB",},
    "Lecce": { description: "Lecce is a city in Italy’s southern Apulia region. It's known for its baroque buildings. In the central Piazza del Duomo, the Cattedrale di Lecce has a double facade and a bell tower. The Basilica di Santa Croce features sculptures and a rose window. Nearby are the Sant’Oronzo Column, a Roman column topped with a bronze statue of the city’s patron saint, and the sunken Roman amphitheater", name: "15wLS_PKN4AbroNRWQpE8SMHrfXfn63Ho",},
   
 
  }
  var wrapper = $('#wrapper'), container;
  for (var key in countries){
     
   
      container = $('<div id="countries" class="container"></div>');
      wrapper.append(container);
      container.append('<div class="country">' + key +'</div>');
      container.append('<div class="images">' + `<a href="https://drive.google.com/uc?export=view&id=${countries[key].name}"><img src="https://drive.google.com/uc?export=view&id=${countries[key].name}">` + '</a>'  + '</div>');
      container.append('<div class="description">' + '<h2 class="h2">' + 'Description' + '</h2>' + countries[key].description  +'</div>' );

  }
