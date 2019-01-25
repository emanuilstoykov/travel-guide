var countries = {  
    "Dubrovnik": { description: "Regardless of whether you are visiting Dubrovnik for the first time or the hundredth, the sense of awe never fails to descend when you set eyes on the beauty of the old town. Indeed it’s hard to imagine anyone becoming jaded by the city’s limestone streets, baroque buildings and the endless shimmer of the Adriatic, or failing to be inspired by a walk along the ancient city walls that protected the capital of a sophisticated republic for centuries.", name: "13h6NWUe_8pbnockMrxcQcdqxmxYyZGJ6",},
    "Hvar": { description: "Hvar is a port and resort town on the Croatian island of Hvar. Yachts fill its harbor in summer. Ferries connect the town with the several Pakleni Islands just offshore. These are home to secluded beaches, such as those around Zdrilca Bay, as well as rocky coves and pine forests. Hula Hula Beach in Hvar and Stipanska Beach on Marinkovac Island are known for their nightlife and lively bars.", name: "1l6uMRazoq8ONvhJx2WLIa_zRZockttJZ",},
    "Mljet": { description: "Mljet is the first larger island one come upon while sailing the Croatian Adriatic from the direction from south to north. It is Croatia's greenest island with its Mediterranean vegetation, clear and clean sea, gentle sandy shoreline and a wealth of underwater sea life. The island is conisdered to be one of the most beautiful of the ", name: "1SBNNZ0FikxdEMsspC9wBoqiXmDTmo_0V", },
    "Plitvice Lakes National Park": { description: "Nested in mountainous Lika region, half-way between the coast and the capital Zagreb, Plitvice Lakes National Park is, along with Dubrovnik, the single most visited site in Croatia. Plitvice Lakes became protected national park back in 1949, and since 1979 the place is also listed as UNESCO World Heritage Sit. This wonderful natural phenomenon consists of 16 interconnected lakes and over 90 waterfalls of different size", name: "1NwiMhepnkx-hzCEYpWhurfXRKoBmNSBD",},
   

  }
  var wrapper = $('#wrapper'), container;
  for (var key in countries){
     
   
      container = $('<div id="countries" class="container"></div>');
      wrapper.append(container);
      container.append('<div class="country">' + key +'</div>');
      container.append('<div class="images">' + `<a href="https://drive.google.com/uc?export=view&id=${countries[key].name}"><img src="https://drive.google.com/uc?export=view&id=${countries[key].name}">` + '</a>'  + '</div>');
      container.append('<div class="description">' + '<h2 class="h2">' + 'Description' + '</h2>' + countries[key].description  +'</div>' );

  }