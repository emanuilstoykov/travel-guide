var countries = {  
    "Bali": { description: "Bali is an Indonesian island known for its forested volcanic mountains, iconic rice paddies, beaches and coral reefs. The island is home to religious sites such as cliffside Uluwatu Temple. To the south, the beachside city of Kuta has lively bars, while Seminyak, Sanur and Nusa Dua are popular resort towns. The island is also known for its yoga and meditation retreats(Google destination info)", name: "1rpilBPQ9RPAio3YZjsv66cC3s6_8SSRH",},
    "Ubud": { description: "The town of Ubud, in the uplands of Bali, Indonesia, is known as a center for traditional crafts and dance. The surrounding Ubud District’s rainforest and terraced rice paddies, dotted with Hindu temples and shrines, are among Bali’s most famous landscapes. Ancient holy sites include the intricately carved Goa Gajah (“Elephant Cave”) and Gunung Kawi, with its rock-cut shrines(Google destination info)", name: "1rADZkTHxUSxVozXzYJZrbTezyuBvdLOF",},
    "Kuta": { description: "Kuta is a beach and resort area in the south of the island of Bali, Indonesia. One of Bali's first tourist developments, it's best known for its party-centric atmosphere and surfing in the Indian Ocean. Kuta's long, consistent waves make it a popular surf spot, particularly for beginners, with plenty of outfitters offering board rentals and surf lessons(Google destination info)", name: "1GH_aFbkeekOnxeJTPVAWQ5gHH-DLc7ce", },    
    "Jakarta": { description: "Jakarta, Indonesia's massive capital, sits on the northwest coast of the island of Java. A historic mix of cultures – Javanese, Malay, Chinese, Arab, Indian and European – has influenced its architecture, language and cuisine. The old town, Kota Tua, is home to Dutch colonial buildings, Glodok (Jakarta’s Chinatown) and the old port of Sunda Kelapa, where traditional wooden schooners dock(Google destination info)", name: "1Ax9smYI1QRaiOAoFuIONpkoekFfE4aYL", },    
 
  }
  var wrapper = $('#wrapper'), container;
  for (var key in countries){
     
   
      container = $('<div id="countries" class="container"></div>');
      wrapper.append(container);
      container.append('<div class="country">' + key +'</div>');
      container.append('<div class="images">' + `<a href="https://drive.google.com/uc?export=view&id=${countries[key].name}"><img src="https://drive.google.com/uc?export=view&id=${countries[key].name}">` + '</a>'  + '</div>');
      container.append('<div class="description">' + '<h2 class="h2">' + 'Description' + '</h2>' + countries[key].description  +'</div>' );

  }
