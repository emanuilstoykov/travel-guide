var countries = {  
    "Oslo": { description: "Oslo, the capital of Norway, sits on the country’s southern coast at the head of the Oslofjord. It’s known for its green spaces and museums. Many of these are on the Bygdøy Peninsula, including the waterside Norwegian Maritime Museum and the Viking Ship Museum, with Viking ships from the 9th century. The Holmenkollbakken is a ski-jumping hill with panoramic views of the fjord. It also has a ski museum.(Google destination info)", name: "1v97keBFAhd5qUtgwpltnXInVywQ1DFsk",},
    "Bergen": { description: "Bergen is a city on Norway’s southwestern coast. It's surrounded by mountains and fjords, including Sognefjord, the country’s longest and deepest. Bryggen features colorful wooden houses on the old wharf, once a center of the Hanseatic League's trading empire. The Fløibanen Funicular goes up Fløyen Mountain for panoramic views and hiking trails. The Edvard Grieg House is where the renowned composer once lived(Google destination info)", name: "1pyUeFx3UTqRIIiHGl5Kc2WNOSYgMTtcl",},
    "Tromsø": { description: "Tromsø, a city in northern Norway, is a major cultural hub above the Arctic Circle. It’s famed as a viewing point for colorful Northern Lights that sometime light up the nighttime sky. The city’s historic center, on the island of Tromsø, is distinguished by its centuries-old wooden houses. The 1965 Arctic Cathedral, with its distinctive peaked roof and soaring stained-glass windows, dominates the skyline(Google destination info)", name: "1ergNmGTeFmLT6Yuv7LvXi5JDknGP2d-h", },
    "Lofoten": { description: "Lofoten is an archipelago in Norway. Its known for its dramatic scenery, with peaks like the Svolværgeita pinnacle jutting up into the sky. Himmeltindan Mountain sits on Vestvågøya Island. The nearby Lofotr Viking Museum features a Viking longhouse reconstruction. Cycle routes cover the islands, passing through fishing villages like Henningsvær, which has colorful buildings lining its waterways(Google destionation info)", name: "1pPFmtm1G2UZglhltUk0UoV8vbIZLRbF2", },
 
  }
  var wrapper = $('#wrapper'), container;
  for (var key in countries){
     
   
      container = $('<div id="countries" class="container"></div>');
      wrapper.append(container);
      container.append('<div class="country">' + key +'</div>');
      container.append('<div class="images">' + `<a href="https://drive.google.com/uc?export=view&id=${countries[key].name}"><img src="https://drive.google.com/uc?export=view&id=${countries[key].name}">` + '</a>'  + '</div>');
      container.append('<div class="description">' + '<h2 class="h2">' + 'Description' + '</h2>' + countries[key].description  +'</div>' );

  }
