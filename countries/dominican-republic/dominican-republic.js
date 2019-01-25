  //Dominican Republic
  //The Dominican Republic is a Caribbean nation that shares the island of Hispaniola with Haiti to the west. It's known for its beaches, resorts and golfing. Its terrain comprises rainforest, savannah and highlands, including Pico Duarte, the Caribbean’s tallest mountain. Capital city Santo Domingo has Spanish landmarks like the Gothic Catedral Primada de America dating back 5 centuries in its Zona Colonial district.(Wikipedia)

  var countries = {  
    "Santo Domingo": { description: "Santo Domingo is the capital of the Dominican Republic and one of the Caribbean's oldest cities. Its walled, cobblestoned historic core, the Zona Colonial, has buildings that date to the 1500s, including the cathedral, which was the first built in the New World. On the cafe-lined Plaza de España is the Alcázar de Colón palace. It’s now one of the city’s many museums, displaying notable medieval and Renaissance art(Google destination info)", name: "1ipw-dheLSGwGmlTfc1U3eEGeVcCjh-LA",},
    "Punta Cana": { description: "Punta Cana, the easternmost tip of the Dominican Republic, abuts the Caribbean Sea and the Atlantic Ocean. It's a region known for its 32km stretch of beaches and clear waters. The Bávaro area and Punta Cana combine to form what's known as La Costa del Coco, or the Coconut Coast, an area of lavish, all-inclusive resorts. It's popular for zip-lining, windsurfing, kayaking and sailing(Google destination info)", name: "1OeiZK57n4_NmD4DGlxIuffNdkpvyTS5v",},
    "Puerto Plata": { description: "San Felipe de Puerto Plata is the capital of the Puerto Plata province on the Dominican Republic’s Atlantic north coast. The city is best known for its beaches. Playa Dorada’s lengthy beachfront is backed by resorts and an 18-hole golf course. The city’s old colonial-era center is dominated by the 16th-century Fortaleza San Felipe, a Spanish fortress that now houses historical and military artifacts(Google destination info)", name: "1SjzPkPzxMRV97plHAgow7UmmO6mWbnya", },
    "Saona Island": { description: "Saona Island lies off the southeastern tip of the Dominican Republic. Part of the East National Park, it's known for mangroves and coral reefs and palm-fringed beaches like Palmilla Beach. The island’s shallow waters are home to starfish. Mano Juan is a laid-back fishing village near Flamingo Lagoon, with colorful shacks and a turtle sanctuary. To the west, the Cave of Cotubanamá has pre-Columbian rock art(Google destination info)", name: "1fU2gTACKj-ugG2HUfUQOso1fm31OEO7e", },

  }
  var wrapper = $('#wrapper'), container;
  for (var key in countries){
     
   
      container = $('<div id="countries" class="container"></div>');
      wrapper.append(container);
      container.append('<div class="country">' + key +'</div>');
      container.append('<div class="images">' + `<a href="https://drive.google.com/uc?export=view&id=${countries[key].name}"><img src="https://drive.google.com/uc?export=view&id=${countries[key].name}">` + '</a>'  + '</div>');
      container.append('<div class="description">' + '<h2 class="h2">' + 'Description' + '</h2>' + countries[key].description  +'</div>' );

  }