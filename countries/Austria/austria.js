

var countries = {  
    "Danube Valley": { description: "The Danube, which enters Lower Austria from the west near Ybbs and exits in the east near Bratislava, Slovakia’s capital, carves a picturesque path through the province’s hills and fields. Austria’s most spectacular section of the Danube is the dramatic stretch of river between Krems an der Donau and Melk, known as the Wachau. Here the landscape is characterised by vineyards, forested slopes, wine-producing villages and imposing fortresses at nearly every bend. The Wachau is today a Unesco World Heritage site, due to its harmonious blend of natural and cultural beauty.", name: "1PVHFtFLSzieeRlEmLlFMGVTKBS_NhX5w",},
    "Hallstatt": { description: "Lovable Hallstatt is a tiny town bullied onto a ledge between a selfish mountain and a swan-ruled lake, with a waterfall ripping furiously through its middle. The big draws of Hallstatt are its village and its lakeside setting. Come here to relax, nibble, wander, and paddle. Beyond lies the Salzkammergut region, a gentle land of lakes, forested mountains, and storybook villages.", name: "1Xey3rPQbn-WHdkcUzG2DUH46uNFb2WsU",},
    "Salzburg": { description: "Salzburg is in a celebratory mood. Not only does next year mark the 200th anniversary of the city becoming part of Austria, but it's also 50 years since Julie Andrews famously skipped across that meadow in The Sound of Music – a film that put Salzburg on the map. But as the birthplace of Mozart, its streets have always been alive with the sound of music. Mozart Week (mozart eum.at) – a citywide celebration of his work – takes place from 22 to 31 January. And getting to the city is set to become easier: to coincide with the start of the ski season, British Airways launches two new routes this month.", name: "11cR0tMmiCSDBwsYoxl_4zy-xRH4JkvoM", },
    "Tirol": { description: "Outdoor enthusiasts are spoilt for choice in Tirol, both in summer and winter. Hiking and rock climbing are popular activities in the warm summer months, while in winter many people come to Tirol for alpine skiing, cross-country skiing and tobogganing in the enchanting snowy landscape. From the Ötztal, Paznauntal, Pitztal, Zillertal and Stubaital Valleys to East Tirol, Lake Achensee, the regional capital Innsbruck and the legendary ski resort of Kitzbühel: Tirol’s villages, towns and regions are famous for traditional customs and celebrations as well as for being their museums and other cultural attractions of the highest quality. Local guesthouses and inns are the ideal place to sample some of the delicious local specialties and relax after a long day out and about in the fresh air. And when things hot up in summer, there are plenty of crystal clear lakes to cool off, let your thoughts wander and simply lose yourself in the moment.",  name: "17XnozK31ZrBhEgnpjiF5KeKCJvok-aL3", },
    "Vienna": { description: "Baroque streetscapes and imperial palaces set the stage for Vienna's artistic and musical masterpieces alongside its coffee-house culture and vibrant epicurean and design scenes.",  name: "10b-DG2AnZTLzKW0VeMqyNTixv7uVH692", },

  }
  var wrapper = $('#wrapper'), container;
  for (var key in countries){
     
   
      container = $('<div id="countries" class="container"></div>');
      wrapper.append(container);
      container.append('<div class="country">' + key +'</div>');
      container.append('<div class="images">' + `<a href="https://drive.google.com/uc?export=view&id=${countries[key].name}"><img src="https://drive.google.com/uc?export=view&id=${countries[key].name}">` + '</a>'  + '</div>');
      container.append('<div class="description">' + '<h2 class="h2">' + 'Description' + '</h2>' + countries[key].description  +'</div>' );

  }

