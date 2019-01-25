var countries = {  
    "Havana": { description: "Havana is Cuba’s capital city. Spanish colonial architecture in its 16th-century Old Havana core includes the Castillo de la Real Fuerza, a fort and maritime museum. The National Capitol Building is an iconic 1920s landmark. Also in Old Havana is the baroque Catedral de San Cristóbal and Plaza Vieja, whose buildings reflect the city’s vibrant architectural mix(Wikipedia)", name: "1FXxXubZOL4GC8UVxy5eMz-SkU4u-ya71",},
    "Varadero": { description: "Varadero, covering Cuba’s narrow Hicacos Peninsula, is a popular beach resort town. Along its 20km of Atlantic Ocean coastline is a string of all-inclusive hotel and spa complexes, and a golf course. Near the peninsula’s eastern tip is Reserva Ecológica Varahicacos, a preserve with trails and an ancient burial cave. Parque Josone is a park with a pond and gardens(Wikipedia)", name: "13u0ukSJ4qM7egBWCWQn0-GC7PlFcnKwD",},
    "Trinidad": { description: "Trinidad is a town in central Cuba, known for its colonial old town and cobblestone streets. Its neo-baroque main square, Plaza Mayor, is surrounded by grand colonial buildings. Museo Romántico, in the restored Palacio Brunet mansion, and Museo de Arquitectura Colonial display relics from the town’s sugar-producing era. Iglesia de la Santísima is a 19th-century cathedral with a vaulted ceiling and carved altars(Wikipedia)", name: "1hdHKnfTK5iT53TKZtHFnGPFiSBEUsXN5", },
    "Viñales": { description: "Viñales is a town in western Cuba. Its main street is lined with colorful colonial-era wooden houses, including the Municipal Museum, which explores the region’s history. Orchids and palms fill the sprawling Casa de Caridad Botanical Gardens. Viñales serves as a gateway to the Sierra de los Organos mountains and the Viñales Valley. The valley's tall, steep-sided limestone hills, known as mogotes, draw rock climbers(Wikipedia)", name: "1XYv9179Z61iYXqLdtv3YPPUuwNFZFJep", },

  }
  var wrapper = $('#wrapper'), container;
  for (var key in countries){
     
   
      container = $('<div id="countries" class="container"></div>');
      wrapper.append(container);
      container.append('<div class="country">' + key +'</div>');
      container.append('<div class="images">' + `<a href="https://drive.google.com/uc?export=view&id=${countries[key].name}"><img src="https://drive.google.com/uc?export=view&id=${countries[key].name}">` + '</a>'  + '</div>');
      container.append('<div class="description">' + '<h2 class="h2">' + 'Description' + '</h2>' + countries[key].description  +'</div>' );

  }
