var countries = {  
    "Paris": { description: "Paris, France's capital, is a major European city and a global center for art, fashion, gastronomy and culture. Its 19th-century cityscape is crisscrossed by wide boulevards and the River Seine. Beyond such landmarks as the Eiffel Tower and the 12th-century, Gothic Notre-Dame cathedral, the city is known for its cafe culture and designer boutiques along the Rue du Faubourg Saint-Honoré(Google destination info)", name: "1wIEiu2ycPVoRHxRCXm3QH-kjGu_n3xss",},
    "Nice": { description: "Nice, capital of the Alpes-Maritimes department on the French Riviera, sits on the pebbly shores of the Baie des Anges. Founded by the Greeks and later a retreat for 19th-century European elite, the city has also long attracted artists. Former resident Henri Matisse is honored with a career-spanning collection of paintings at Musée Matisse. Musée Marc Chagall features some of its namesake's major religious works(Google destination info)", name: "1jYcDcRtMavbAWCF8tZbKjsPUynJF1N0-",},
    "Marseille": { description: "Marseille, a port city in southern France, has been a crossroads of immigration and trade since its founding by the Greeks circa 600 B.C. At its heart is the Vieux-Port (Old Port), where fishmongers sell their catch along the boat-lined quay. Basilique Notre-Dame-de-la-Garde is a Romanesque-Byzantine church. Modern landmarks include Le Corbusier’s influential Cité Radieuse complex and Zaha Hadid’s CMA CGM Tower(Google destination info)", name: "1ECgCcT6ujDu5PTNc7kZ4h0cpuJCuTtQH", },    
    "Strasbourg": { description: "Strasbourg is the capital city of the Grand Est region, formerly Alsace, in northeastern France. It's also the formal seat of the European Parliament and sits near the German border, with culture and architecture blending German and French influences. Its Gothic Cathédrale Notre-Dame features daily shows from its astronomical clock and sweeping views of the Rhine River from partway up its 142m spire(Google destination info)", name: "1pKpX7bJQ_yTvkLfZz0lyiU4ZeHD9VZTH",},
    
 
  }
  var wrapper = $('#wrapper'), container;
  for (var key in countries){
     
   
      container = $('<div id="countries" class="container"></div>');
      wrapper.append(container);
      container.append('<div class="country">' + key +'</div>');
      container.append('<div class="images">' + `<a href="https://drive.google.com/uc?export=view&id=${countries[key].name}"><img src="https://drive.google.com/uc?export=view&id=${countries[key].name}">` + '</a>'  + '</div>');
      container.append('<div class="description">' + '<h2 class="h2">' + 'Description' + '</h2>' + countries[key].description  +'</div>' );

  }