var countries = {  
    "Machu Picchu": { description: "Machu Picchu is an Incan citadel set high in the Andes Mountains in Peru, above the Urubamba River valley. Built in the 15th century and later abandoned, it’s renowned for its sophisticated dry-stone walls that fuse huge blocks without the use of mortar, intriguing buildings that play on astronomical alignments and panoramic views. Its exact former use remains a mystery(Wikipedia)", name: "1A0IUxKfwj0FmdIabXtbQ7TxCc6q5zVKE",},
    "The Sacred Valley": { description: "The Sacred Valley is a region in Peru's Andean highlands. Along with the nearby town of Cusco and the ancient city of Machu Picchu, it formed the heart of the Inca Empire. Stretching roughly 60 kilometers, it’s an area of fertile farmland and Spanish colonial villages like Pisac and Ollantaytambo. Pisac is known for its Sunday handicraft market and hilltop Incan citadel(Wikipedia)", name: "1weQBpYeSaLWFqlzEaBzdadGdGD0drp3m",},
    "Huayna Picchu": { description: "Huayna Picchu, Quechua: Wayna Pikchu, is a mountain in Peru around which the Urubamba River bends. It is located in the Cusco Region, Urubamba Province, Machupicchu District. It rises over Machu Picchu, the so-called lost city of the Incas(Wikipedia)", name: "1x_HlFfn0l6GR_ioT617bAVcZ0U_m70sH", },
    "Moray": { description: "Moray is an archaeological site in Peru approximately 50 kilometres northwest of Cuzco on a high plateau at about 3,500 metres and just west of the village of Maras. The site contains unusual Inca ruins, mostly consisting of several terraced circular depressions, the largest of which is approximately 30 m deep(Wikipedia)", name: "1Voyh8sXrjzosD5XUHGLHsVE4B5iSQ25W/", },
 
  }
  var wrapper = $('#wrapper'), container;
  for (var key in countries){
     
   
      container = $('<div id="countries" class="container"></div>');
      wrapper.append(container);
      container.append('<div class="country">' + key +'</div>');
      container.append('<div class="images">' + `<a href="https://drive.google.com/uc?export=view&id=${countries[key].name}"><img src="https://drive.google.com/uc?export=view&id=${countries[key].name}">` + '</a>'  + '</div>');
      container.append('<div class="description">' + '<h2 class="h2">' + 'Description' + '</h2>' + countries[key].description  +'</div>' );

  }

