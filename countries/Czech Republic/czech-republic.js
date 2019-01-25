var countries = {  
    "Prague": { description: "Prague, capital city of the Czech Republic, is bisected by the Vltava River. Nicknamed “the City of a Hundred Spires,” it's known for its Old Town Square, the heart of its historic core, with colorful baroque buildings, Gothic churches and the medieval Astronomical Clock, which gives an animated hourly show. Completed in 1402, pedestrian Charles Bridge is lined with statues of Catholic saints(Wikipedia)", name: "1bbUElgFyhDz7u-Ot0N2_SshKHeJR-NjB",},
    "Český Krumlov": { description: "Český Krumlov, in Bohemia’s deep south, is one of the most picturesque towns in Europe. It’s a little like Prague in miniature – a Unesco World Heritage Site with a stunning castle above the Vltava River, an old town square, Renaissance and baroque architecture, and hordes of tourists milling through the streets – but all on a smaller scale; you can walk from one side of town to the other in 20 minutes. There are plenty of lively bars and riverside picnic spots – in summer it’s a popular hang-out for backpackers. It can be a magical place in winter, though, when the crowds are gone and the castle is blanketed in snow.(https://www.lonelyplanet.com/czech-republic/bohemia/cesky-krumlov)", name: "1pVA_04mX28dXTChFUGO84ek5KYL09x5U",},
    "Telč": { description: "The Unesco heritage town of Telč, perched on the border between Bohemia and Moravia, possesses one of the country's prettiest and best-preserved historic squares. The main attraction is the beauty of the square itself, lined by Renaissance and baroque burgers' houses, with their brightly coloured yellow, pink and green facades. Spend part of your visit simply ambling about, taking in the classic Renaissance chateau on the square's northwestern end and the parklands and ponds that surround the square on all sides (https://www.lonelyplanet.com/czech-republic/moravia/telc)", name: "1BVQ6kuNLOMst09R9h0yNv12ZkRfGzzFm", },
    "Plzeň": { description: "Pilsen is a city in the western Czech Republic. It’s known for the Pilsner Urquell Brewery, specializing in bottom-fermented beer since 1842, with brewing cellars and a bottling plant. Ringed by parks, the old center has the 19th-century Great Synagogue, which also hosts concerts. The Cathedral of St. Bartholomew, completed in the 16th century, has Renaissance paintings and a tall spire with a viewing gallery(Wikipedia)", name: "1eHRQqeMw1In3tXre_dNmfXcChVBdomg_", },

  }
  var wrapper = $('#wrapper'), container;
  for (var key in countries){
     
   
      container = $('<div id="countries" class="container"></div>');
      wrapper.append(container);
      container.append('<div class="country">' + key +'</div>');
      container.append('<div class="images">' + `<a href="https://drive.google.com/uc?export=view&id=${countries[key].name}"><img src="https://drive.google.com/uc?export=view&id=${countries[key].name}">` + '</a>'  + '</div>');
      container.append('<div class="description">' + '<h2 class="h2">' + 'Description' + '</h2>' + countries[key].description  +'</div>' );

  }