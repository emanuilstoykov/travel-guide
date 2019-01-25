var countries = {  
    "Copenhagen": { description: "Copenhagen, Denmark’s capital, sits on the coastal islands of Zealand and Amager. It’s linked to Malmo in southern Sweden by the Öresund Bridge. Indre By, the city's historic center, contains Frederiksstaden, an 18th-century rococo district, home to the royal family’s Amalienborg Palace. Nearby is Christiansborg Palace and the Renaissance-era Rosenborg Castle, surrounded by gardens and home to the crown jewels(Wikipedia)", name: "1fnmZGtZq_Ok2JfhAPe9keec8GKdXKgp_",},
    "Aarhus": { description: "Aarhus is a city in Denmark on the Jutland peninsula’s east coast. Den Gamle By is its old town open-air museum, with centuries-old timbered houses. Nearby are the greenhouses of the Aarhus Botanical Garden. In the center, the multistory ARoS art museum shows global contemporary works. The underground Viking Museum explores early local history. Nearby, Aarhus Cathedral has restored 14th- to 16th-century frescoes(Wikipedia)", name: "1PACofGnRoSrMPdxCDdXEGtu6QheE5unY",},
    "Helsingør": { description: "Helsingør, also known as Elsinore, is a port city in eastern Denmark. Overlooking the Øresund strait, the 15th-century Kronborg Castle provided the setting for Shakespeare’s “Hamlet.” Nearby, the M/S Maritime Museum of Denmark illustrates 600 years of Danish seafaring history. The glass-walled Culture Yard in the old shipyard organizes cultural events. On the pier is “Han,” a polished steel sculpture of a man(Wikipedia)", name: "1T_0du9dh4Kzear-sCBeyc87t0lvht-dH", },
    "Odense": { description: "Odense is the third-largest city in Denmark. It has a population of 178,210 as of January 2016, and is the main city of the island of Funen. By road, Odense is located 45 kilometres north of Svendborg, 144 kilometres to the south of Aarhus and 167 kilometres to the southwest of Copenhagen. The city is the seat of Odense Municipality and was the seat of Odense County until 1970, and Funen County from 1970 until 1 January 2007, when Funen County became part of the Region of Southern Denmark. Odense has close associations with Hans Christian Andersen who is remembered above all for his fairy tales. He was born in the city in 1805 and spent his childhood years there. There has been human settlement in the Odense area for over 4,000 years, although the name was not mentioned in writing until 988, and by 1070, it had already grown into a thriving city. Canute IV of Denmark, generally considered to be the last Viking king, was murdered by unruly peasants in Odense's St Alban's Priory on 10 July 1086. Although the city was burned in 1249 following a royal rivalry, it quickly recovered and flourished as a centre of commerce in the Middle Ages(Wikipedia)", name: "198H53jLC6dRyFQFDzCtna6eVIGlfZqj", },

  }
  var wrapper = $('#wrapper'), container;
  for (var key in countries){
     
   
      container = $('<div id="countries" class="container"></div>');
      wrapper.append(container);
      container.append('<div class="country">' + key +'</div>');
      container.append('<div class="images">' + `<a href="https://drive.google.com/uc?export=view&id=${countries[key].name}"><img src="https://drive.google.com/uc?export=view&id=${countries[key].name}">` + '</a>'  + '</div>');
      container.append('<div class="description">' + '<h2 class="h2">' + 'Description' + '</h2>' + countries[key].description  +'</div>' );

  }