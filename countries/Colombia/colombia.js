var countries = {  
    "Parque Nacional Natural Tayrona": { description: "ayrona National Park, in northern Colombia, is a large protected area covering the foothills of the Sierra Nevada de Santa Marta as they meet the Caribbean coast. It’s known for its palm-shaded coves, coastal lagoons, rainforest and rich biodiversity. At its heart, the Pueblito ruins are an archaeological site accessed via forest trails, with terraces and structures built by the Tayrona civilization", name: "1lS37jSrrZqJmSjCn_A1RIWHGumoh_kpt",},
    "San Andrés": { description: "San Andrés is a Colombian island in the Caribbean Sea, off the coast of Nicaragua. It’s known for its coral reefs and reggae music. Lively Spratt Bight Beach features a palm-lined promenade. Offshore is Johnny Cay Park, a small island with coconut groves and white-sand beaches. Old Point Regional Mangrove Park is a wildlife sanctuary, with crabs, iguanas and birds", name: "19uTd67R46NGUOYxavKnpQTxOh2IFIqiL",},
    "Ciudad Perdida": { description: "Ciudad Perdida is the archaeological site of an ancient city in Colombia's Sierra Nevada. It is believed to have been founded about 800 CE, some 650 years earlier than Machu Picchu. This location is also known as Teyuna and Buritaca", name: "1VnpRL837AZkmGDpqus-d5b6FHg1Hgj1u",},
    "Catedral de Sal": { description: "The Salt Cathedral of Zipaquirá is an underground Roman Catholic church built within the tunnels of a salt mine 200 metres underground in a halite mountain near the town of Zipaquirá, in Cundinamarca, Colombia. It is a tourist destination and place of pilgrimage in the country", name: "1YlMkz8EHsKk-dQg7IO4qJhI3zKAitkk5",},

   
 
  }
  var wrapper = $('#wrapper'), container;
  for (var key in countries){
     
   
      container = $('<div id="countries" class="container"></div>');
      wrapper.append(container);
      container.append('<div class="country">' + key +'</div>');
      container.append('<div class="images">' + `<a href="https://drive.google.com/uc?export=view&id=${countries[key].name}"><img src="https://drive.google.com/uc?export=view&id=${countries[key].name}">` + '</a>'  + '</div>');
      container.append('<div class="description">' + '<h2 class="h2">' + 'Description' + '</h2>' + countries[key].description  +'</div>' );

  }