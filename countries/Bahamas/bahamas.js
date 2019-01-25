

var countries = {  
    "Diving in The Bahamas": { description: "The Bahamas are an archipelago of 700 islands situated where the Western Atlantic Ocean meets the Caribbean Sea. These amazingly clear waters feature more dive environments than you’re likely to see in one trip. The third largest barrier reef is found offshore. There’s also deep walls, fascinating wrecks, blue holes, tunnels, caverns and some of the best shark diving in the world. Plus, he subtropical climate provides approximately 340 sunny days each year and the dive conditions are impressive year-round. Each island dive destination has its signature experiences. The waters off New Providence, where Nassau is the main city, provide drop-offs that are close to shore, blue holes, caves, historical wrecks and thrilling shark diving. Diving off Grand Bahama Island gives you the chance to see dolphins and visit several shallow wrecks. On Long Island, you can dive the world’s deepest blue hole, find great reefs, visit wrecks and look over walls that drop into the deep blue. }", name: "10A5B1CQQ62FNUW_PZlxokuYxo0NdkeiU",},
    "Fish Fry": { description: "Across The Bahamas, locals and visitors alike gather for a lively down-home experience at the local Fish Fry. And, apart from enjoying the fried fish, you can see chefs showing off their knife-handling skills with the live preparation of fresh conch salad, best enjoyed with a cold local brew.", name: "1vmDiUkGIWC37PaoULd8jKB51LF4TJStn",},
    "Bimini Road": { description: "The Bimini Road, sometimes called the Bimini Wall, is an underwater rock formation near North Bimini island in the Bahamas. The Road consists of a 0.8 km (0.5 mile) long northeast-southwest linear feature composed of rou", name: "1LQONo3U8MHrrrCPrkwGy8hySAcZFXtMH", },
 

  }
  var wrapper = $('#wrapper'), container;
  for (var key in countries){
     
   
      container = $('<div id="countries" class="container"></div>');
      wrapper.append(container);
      container.append('<div class="country">' + key +'</div>');
      container.append('<div class="images">' + `<a href="https://drive.google.com/uc?export=view&id=${countries[key].name}"><img src="https://drive.google.com/uc?export=view&id=${countries[key].name}">` + '</a>'  + '</div>');
      container.append('<div class="description">' + '<h2 class="h2">' + 'Description' + '</h2>' + countries[key].description  +'</div>' );

  }

