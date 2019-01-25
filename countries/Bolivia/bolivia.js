var countries = {  
    "Salar de Uyuni": { description: "An evocative and eerie sight, the world’s largest salt flat (12,106 sq km) sits at 3653m (11,984ft). When the surface is dry, the salar is a pure white expanse of the greatest nothing imaginable – just blue sky, white ground and you. When there’s a little water, the surface perfectly reflects the clouds and the blue altiplano sky, and the horizon disappears. If you’re driving across the surface at such times, the effect is surreal; it’s hard to believe that you’re not flying through the clouds", name: "1C2AEh2uqjdJtvO9kHbXHXwyu8scxdjk-",},
    "Parque Nacional Madidi": { description: "The 1.8 million-hectare Parque Nacional Madidi is one of South America’s most intact ecosystems, taking in a range of habitats from steaming lowland rainforests to 6000m Andean peaks. This little-trodden utopia is home to an astonishing variety of Amazonian wildlife: 44% of all mammals in North and South America, 38% of neotropical amphibian species and more than 1000 species of bird. Some scientists call it the most biodiverse place on earth", name: "1zV-S_DWk-OmEzH0HBkFZMojevW61swf5",},
    "Lake Titicaca": { description: "Everything – and everyone – that sits beside this impressive body of water, from the traditional Aymara villages to the glacier-capped peaks of the Cordillera Real, seems to fall into the background in contrast with the shimmering opal jewel set into the spare altiplano earth. It is not hard to see how Inca legends came to credit Lake Titicaca with the birth of their civilization.", name: "1l3Nh1qgLLG8dMPdC9z2Y4B9ZzPFGgR-L", },
    "Sucre": { description: "Sucre is a city in the southern highlands of Bolivia. The whitewashed Casa de la Libertad, where Bolivia’s Declaration of Independence was signed, houses galleries related to the city's past as the national capital. Also on Plaza 25 de Mayo, the main square, is the Catedral Metropolitana, an ornate colonial church.", name: "162D9LFkCFD4pYgzIWdbJTfD0ioNum9oW",},
   

  }
  var wrapper = $('#wrapper'), container;
  for (var key in countries){
     
   
      container = $('<div id="countries" class="container"></div>');
      wrapper.append(container);
      container.append('<div class="country">' + key +'</div>');
      container.append('<div class="images">' + `<a href="https://drive.google.com/uc?export=view&id=${countries[key].name}"><img src="https://drive.google.com/uc?export=view&id=${countries[key].name}">` + '</a>'  + '</div>');
      container.append('<div class="description">' + '<h2 class="h2">' + 'Description' + '</h2>' + countries[key].description  +'</div>' );

  }

    