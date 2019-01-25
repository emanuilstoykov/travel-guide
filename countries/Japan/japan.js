var countries = {  
    "Tokyo": { description: "Tokyo, Japan’s busy capital, mixes the ultramodern and the traditional, from neon-lit skyscrapers to historic temples. The opulent Meiji Shinto Shrine is known for its towering gate and surrounding woods. The Imperial Palace sits amid large public gardens. The city's many museums offer exhibits ranging from classical art (in the Tokyo National Museum) to a reconstructed kabuki theater (in the Edo-Tokyo Museum)(Google info)", name: "1w5q_lg323pOSxSDeNE5lWFQ6-_YQxCMu",},
    "Kyoto": { description: "Kyoto, once the capital of Japan, is a city on the island of Honshu. It's famous for its numerous classical Buddhist temples, as well as gardens, imperial palaces, Shinto shrines and traditional wooden houses. It’s also known for formal traditions such as kaiseki dining, consisting of multiple courses of precise dishes, and geisha, female entertainers often found in the Gion district.", name: "1KHZt903dWI50I49UfP7TTysdyAwrVPNC",},
    "Fuji": { description: "Japan’s Mt. Fuji is an active volcano about 100 kilometers southwest of Tokyo. Commonly called “Fuji-san,” it’s the country’s tallest peak, at 3,776 meters. A pilgrimage site for centuries, it’s considered one of Japan’s 3 sacred mountains, and summit hikes remain a popular activity. Its iconic profile is the subject of numerous works of art, notably Edo Period prints by Hokusai and Hiroshige(Google info)", name: "1fZqrHxivIgKn7LFHGyIu3KE5sggUh6bg", },
    "Osaka": { description: "Osaka is a large port city and commercial center on the Japanese island of Honshu. It's known for its modern architecture, nightlife and hearty street food. The 16th-century shogunate Osaka Castle, which has undergone several restorations, is its main historical landmark. It's surrounded by a moat and park with plum, peach and cherry-blossom trees. Sumiyoshi-taisha is among Japan’s oldest Shinto shrines(Google info)", name: "1MXDLaMAxE5Cdm-RXnFdAMATz22KpGY8T", },
    "Hakone": { description: "Hakone is a popular day-trip destination from Tokyo, with important art at the Hakone Open-Air Museum, a grassy sculpture park featuring works by Rodin and Picasso, and the Pola Museum of Art, a stark modern building housing Renoir, Matisse and Rodin pieces. Hakone Sekisho, a restored checkpoint on a feudal-era highway, has a museum of weapons and armor. The Hakone Tozan Railway electric tram winds its way up a mountain through forests and ravines, and the Hakone Ropeway aerial gondolas offer sweeping views. The Izu Peninsula to the south offers beaches and therapeutic natural hot springs.", name: "1d9Nr1c-0ROg4xVSXwd_V_kHn7_XzxGeA/", },


  }
  var wrapper = $('#wrapper'), container;
  for (var key in countries){
     
   
      container = $('<div id="countries" class="container"></div>');
      wrapper.append(container);
      container.append('<div class="country">' + key +'</div>');
      container.append('<div class="images">' + `<a href="https://drive.google.com/uc?export=view&id=${countries[key].name}"><img src="https://drive.google.com/uc?export=view&id=${countries[key].name}">` + '</a>'  + '</div>');
      container.append('<div class="description">' + '<h2 class="h2">' + 'Description' + '</h2>' + countries[key].description  +'</div>' );

  }
