var countries = {  
    "Moscow": { description: "Moscow, on the Moskva River in western Russia, is the nation’s cosmopolitan capital. In its historic core is the Kremlin, a complex that’s home to the president and tsarist treasures in the Armoury. Outside its walls is Red Square, Russia's symbolic center. It's home to Lenin’s Mausoleum, the State Historical Museum's comprehensive collection and St. Basil’s Cathedral, known for its colorful, onion-shaped domes.(Google destination info)", name: "1Ht4rndkhrnEZ5Zmt17E9t-rkySVWH8YR",},
    "Saint Petersburg": { description: "St. Petersburg is a Russian port city on the Baltic Sea. It was the imperial capital for 2 centuries, having been founded in 1703 by Peter the Great, subject of the city's iconic “Bronze Horseman” statue. It remains Russia's cultural center, with venues such as the Mariinsky Theatre hosting opera and ballet, and the State Russian Museum showcasing Russian art, from Orthodox icon paintings to Kandinsky works(Google destination info)", name: "1IZh4dom6llDLIaRPbBEyBY-3qJ5HCDeN",},
    "Sochi": { description: "Sochi, a Russian city on the Black Sea, is known as a summer beach resort, and was host of the 2014 Winter Olympics. Its parks include the palm-filled Arboretum. It's also notable for 20th-century neoclassical buildings such as the columned Winter Theatre. Forested Sochi National Park is a 1,937-sq.-km protected area in the nearby Caucasus Mountains. Some 70 km inland, Krasnaya Polyana is a prominent ski resort.(Google destination info)", name: "1DNWenj-9_rlytvjblU80f_xAE51WRa3I", },
    "Lake Baikal": { description: "Lake Baikal is an ancient, massive lake in the mountainous Russian region of Siberia, north of the Mongolian border. Considered the deepest lake in the world, it’s circled by a network of hiking paths called the Great Baikal Trail. The village of Listvyanka, on its western shoreline, is a popular starting point for summertime wildlife-spotting tours, plus wintertime ice-skating and dog sledding(Wikipedia)", name: "1OclIg-ppU9anO6tKmiuS8PflmrNR33zt", },
    "Lake Ladoga": { description: "Lake Ladoga is a freshwater lake located in the Republic of Karelia and Leningrad Oblast in northwestern Russia, in the vicinity of Saint Petersburg. It is the largest lake entirely in Europe, and the 14th largest freshwater lake by area in the world(Wikipedia)", name: "1oWup7I4tmFS8cO7HB1NsfU1H98FzbUMn", },
    "Siberia": { description: "Siberia is a vast Russian province encompassing most of Northern Asia, with terrain spanning tundra, coniferous forest and mountain ranges including the Ural, Altai and Verkhoyansk. Lake Baikal, in its south, is the world’s deepest lake, circled by a network of hiking paths called the Great Baikal Trail. The Trans-Siberian Railway passes Baikal on its route between Moscow and the Sea of Japan.(Wikipedia)", name: "1bl066OrEBmLTG8uAK1mZ9h0kitooyrD_", },
  }
  var wrapper = $('#wrapper'), container;
  for (var key in countries){
     
   
      container = $('<div id="countries" class="container"></div>');
      wrapper.append(container);
      container.append('<div class="country">' + key +'</div>');
      container.append('<div class="images">' + `<a href="https://drive.google.com/uc?export=view&id=${countries[key].name}"><img src="https://drive.google.com/uc?export=view&id=${countries[key].name}">` + '</a>'  + '</div>');
      container.append('<div class="description">' + '<h2 class="h2">' + 'Description' + '</h2>' + countries[key].description  +'</div>' );

  }
