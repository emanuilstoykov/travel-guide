var countries = {  
    "Stockholm": { description: "Stockholm, the capital of Sweden, encompasses 14 islands and more than 50 bridges on an extensive Baltic Sea archipelago. The cobblestone streets and ochre-colored buildings of Gamla Stan (the old town) are home to the 13th-century Storkyrkan Cathedral, the Kungliga Slottet Royal Palace and the Nobel Museum, which focuses on the Nobel Prize. Ferries and sightseeing boats shuttle passengers between the islands(Google destination info)", name: "1dmXgG4Vt_1No1J62OYrAkp8uUlsfDRdz",},
    "Gothenburg": { description: "Gothenburg, a major city in Sweden, is situated off the Göta älv river on the country's west coast. An important seaport, it's known for its Dutch-style canals and leafy boulevards like the Avenyn, the city's main thoroughfare, lined with many cafes and shops. Liseberg is a popular amusement park with themed rides, performance venues and a landscaped sculpture garden(Google destination info)", name: "1jcaB3mGwONkhQ4WniSYwworUIMt_uBGM",},
    "Kiruna": { description: "Kiruna is a town in the far north of Swedish Lapland. It’s known for the huge LKAB iron ore mine and its underground visitors center with an exhibit on mining. Hjalmar Lundbohmsgården, the 19th-century former home of LKAB’s first managing director, is now a museum with a courtyard photography exhibit. Kiruna Church is notable for its bell tower and resemblance to the traditional huts of the indigenous Sámi people(Google destination info)", name: "1H50tgqbkE86g_n0Dcd4-Ag-97iKEEUd7", },
    "Abisko": { description: "Abisko is a small village in Sweden, north of the Arctic Circle. Just out of town, extending from the southwestern shore of Torneträsk Lake, is Abisko National Park. Surrounded by mountains, it shelters lemmings and reindeer, plus the Lapp orchid. The King’s Trail begins in the park and leads to Hemavan, in the south. The Aurora Sky Station, on Mount Nuolja, is an observation center for the Northern Lights(Google destination info)", name: "1CiQPPTa4fcvO0S7pRBqiPnllkQFq7BXr", },
 
  }
  var wrapper = $('#wrapper'), container;
  for (var key in countries){
     
   
      container = $('<div id="countries" class="container"></div>');
      wrapper.append(container);
      container.append('<div class="country">' + key +'</div>');
      container.append('<div class="images">' + `<a href="https://drive.google.com/uc?export=view&id=${countries[key].name}"><img src="https://drive.google.com/uc?export=view&id=${countries[key].name}">` + '</a>'  + '</div>');
      container.append('<div class="description">' + '<h2 class="h2">' + 'Description' + '</h2>' + countries[key].description  +'</div>' );

  }
