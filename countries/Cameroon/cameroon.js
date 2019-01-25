var countries = {  
    "Waza National Park": { description: "Waza National Park is a national park in the Department of Logone-et-Chari, in Far North Region, Cameroon. It was founded in 1934 as a hunting reserve, and covers a total of 1,700 square kilometres. Waza achieved national park status in 1968, and became a UNESCO biosphere reserve in 1979(wikipedia)", name: "1QFzg9RYqWTCgDIAvR6EtyG43l9zfeExI",},
    "Lobéké National Park": { description: "Lobéké National Park is a national park of southeastern Cameroon within the Moloundou Arrondissement of East Province. Located in the Congo Basin, it is bounded on the east by the Sangha River which serves as Cameroon's international border with Central African Republic and the Republic of the Congo(Wikipedia)", name: "1MXkaQYxaXEN3Sfbzpw1-TNrDK3EPUqaO",},
    "Korup National Park": { description: "Korup National Park is in the Southwest Province of Cameroon and extends over 1,260 km² of mostly undisturbed primary forest. It is reputedly one of Africa’s oldest and richest tropical forests in terms of floral and faunal diversity(Wikipedia)", name: "1I-VKhxyFpHM-PjFoyoqLlyzZseeVWTFr", },    

    
  }
  var wrapper = $('#wrapper'), container;
  for (var key in countries){
     
   
      container = $('<div id="countries" class="container"></div>');
      wrapper.append(container);
      container.append('<div class="country">' + key +'</div>');
      container.append('<div class="images">' + `<a href="https://drive.google.com/uc?export=view&id=${countries[key].name}"><img src="https://drive.google.com/uc?export=view&id=${countries[key].name}">` + '</a>'  + '</div>');
      container.append('<div class="description">' + '<h2 class="h2">' + 'Description' + '</h2>' + countries[key].description  +'</div>' );

  }
