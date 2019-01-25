var countries = {  
    "Atacama Deser": { description: "The Atacama Desert is a desert plateau in South America covering a 1000-km strip of land on the Pacific coast, west of the Andes mountains. The Atacama desert is one of the driest places in the world, as well as the only true desert to receive less precipitation than the polar deserts.", name: "13wEfec_ITHp6x_BcRpObKBl7myfE4Jzps",},
    "Chiloé Island": { description: "Chiloé Island, the main island in the archipelago of the same name, is in southern Chile. It’s home to pastoral landscapes and known for its iconic wooden churches built by Jesuit missionaries in the 17th and 18th centuries, such as the Church of Chonchi. The northwest coast, where blue whales gather, also has the 3 islets Islotes de Puñihuil, Natural Heritage Site, a Magellanic and Humboldt penguin breeding ground.", name: "1y6i6fOQErBPlZVPGDUYGN98cpsDEunp8",},
    "Valle de la Luna": { description: "Valle de la Luna is a valley in Los Flamencos National Reserve, in northern Chile’s Atacama Desert. It’s known for its moonlike landscape of dunes, rugged mountains and distinctive rock formations. Bike trails lead to the valley from the nearby town of San Pedro de Atacama. To the southeast, the turquoise water of Laguna Cejar sinkhole has an extremely high salt concentration.", name: "1IXbGXaOcaPTev_msv1vm5OK-Boe-xaP-",},
    "Anakena": { description: "Anakena is a white coral sand beach in Rapa Nui National Park on Rapa Nui, a Chilean island in the Pacific Ocean. Anakena has two ahus; Ahu-Ature has a single moai and Ahu Nao-Nao has seven, two of which have deteriorated. It also has a palm grove and a car park", name: "1y3zBrmWdIFnVZvhQhIDlcnnLt9NFXTT8",},
    "Lake Pehoé": { description: "Lake Pehoé is a surface water body located in Torres del Paine National Park, in the Magallanes Region of southern Chile. The lake is fed mainly by Paine River through the Nordenskjöld Lake, but it also receives the waters of the outlet of Skottsberg Lake", name: "1IDM4K0RReCcUGkKEoL_zYL2JNfi2GW_k",},
    
   
 
  }
  var wrapper = $('#wrapper'), container;
  for (var key in countries){
     
   
      container = $('<div id="countries" class="container"></div>');
      wrapper.append(container);
      container.append('<div class="country">' + key +'</div>');
      container.append('<div class="images">' + `<a href="https://drive.google.com/uc?export=view&id=${countries[key].name}"><img src="https://drive.google.com/uc?export=view&id=${countries[key].name}">` + '</a>'  + '</div>');
      container.append('<div class="description">' + '<h2 class="h2">' + 'Description' + '</h2>' + countries[key].description  +'</div>' );

  }

