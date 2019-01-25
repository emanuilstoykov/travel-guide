

var countries = {  
    "Rila monastery": { description: "No matter where we travel, whether the place is close or far, known or unknown, its history always leaves a trace inside us. But there are places that keep not only their own history, but the history of a whole country and its people. One of these is Rila Monastery -(Rilski Manastir) – one of the holiest places in Bulgaria, established by the heavenly protector of the Bulgarians Saint John of Rila in the 10th century. It is precious not only with its beauty, it still keeps a large part of Bulgarian history and culture.", name: "1oiPhzjbFHwOlvDHKZw3ZMtJLYFRyt3hg",},
    "Sunny beach": { description: "One of the most popular resorts in Bulgaria, Sunny Beach is an award-winning location famous for its excellent climatic and environmental conditions. The nature here is truly unique and beautiful architectural buildings are the perfect complement. In this city are opened more than a hundred of hotels and hotel complexes. There is a well-equipped beach on the territory of each one. Many hotels are open in historic buildings, but there are also completely new constructions that offer not only comfortable rest, but also all needed facilities for business meetings.", name: "1Ay__W-js3yf6lw8cXMGcIWULI-H90ppa",},
    "Plovdiv ": { description: "Plovdiv is the second-largest city in Bulgaria and is located in the middle of the country. It’s famous for its Roman ruins and historical churches. I found the city a peaceful oasis with wonderful parks and ruins that lacked the large tourist crowds Sofia, Velinko Tranvovo, and the coast get. Since the city is in the middle of the country, it’s easy to stopover and visit. It’s a must for any historic buff and someone looking to see the quieter side of the country.", name: "1DPjzMPK-aaNlKW_uQNDCjo0TCWM-g94z", },
    "Sofia": { description: "Sofia is no grand metropolis, but it's a modern, youthful city, with a scattering of onion-domed churches, Ottoman mosques and stubborn Red Army monuments that lend an eclectic, exotic feel. Excavation work carried out during construction of the metro unveiled a treasure trove of Roman ruins from nearly 2000 years ago, when the city was called 'Serdica'. Away from the buildings and boulevards, vast parks and manicured gardens offer a welcome respite, and the ski slopes and hiking trails of mighty Mt Vitosha are just a short bus ride from the centre. Home to many of Bulgaria's finest museums, galleries, restaurants and clubs, Sofia may persuade you to stick around and explore further.",  name: "1lPnjXVzRIXt73CTYhbvv4c6m7U_54bs5", },
    "Belogradchick rocks": { description: "The crisp mountain air and the weird and wonderful rock formations that rise from a lonely horizon of hills are what draw visitors to little Belogradchik, on the eastern edge of the Stara Planina mountain range. Although rather remote, Belogradchik’s charms are starting to attract more visitors.",  name: "1YizLKQHMQftM7La32pYirQYur4sR3kGw", },

  }
  var wrapper = $('#wrapper'), container;
  for (var key in countries){
     
   
      container = $('<div id="countries" class="container"></div>');
      wrapper.append(container);
      container.append('<div class="country">' + key +'</div>');
      container.append('<div class="images">' + `<a href="https://drive.google.com/uc?export=view&id=${countries[key].name}"><img src="https://drive.google.com/uc?export=view&id=${countries[key].name}">` + '</a>'  + '</div>');
      container.append('<div class="description">' + '<h2 class="h2">' + 'Description' + '</h2>' + countries[key].description  +'</div>' );

  }

