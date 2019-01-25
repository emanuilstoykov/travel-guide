var countries = {  
    "Lucerne": { description: "Lucerne, a compact city in Switzerland known for its preserved medieval architecture, sits amid snowcapped mountains on Lake Lucerne. Its colorful Altstadt (Old Town) is bordered on the north by 870m Museggmauer (Musegg Wall), a 14-century rampart. The covered Kapellbrücke (Chapel Bridge), built in 1333, links the Aldstadt to the Reuss River's right bank(Google destination info)", name: "1flIdhPE4hqcuVO4c0atalf9dX5rvqzQ_",},
    "Zurich": { description: "The city of Zurich, a global center for banking and finance, lies at the north end of Lake Zurich in northern Switzerland. The picturesque lanes of the central Altstadt (Old Town), on either side of the Limmat River, reflect its pre-medieval history. Waterfront promenades like the Limmatquai follow the river toward the 17th-century Rathaus (town hall)(Google destination info)", name: "16ttft4XXdX4yVujE_Q3bggmxZbGW76lo",},
    "Interlaken": { description: "Interlaken is a traditional resort town in the mountainous Bernese Oberland region of central Switzerland. Built on a narrow stretch of valley, between the emerald-colored waters of Lake Thun and Lake Brienz, it has old timber houses and parkland on either side of the Aare River. Its surrounding mountains, with dense forests, alpine meadows and glaciers, has numerous hiking and skiing trails(Google destination info)", name: "1xAki0JJLa4iu0f-8EW8hvFBHRWIgl7Jt", },
    "Geneva": { description: "Geneva is a city in Switzerland that lies at the southern tip of expansive Lac Léman (Lake Geneva). Surrounded by the Alps and Jura mountains, the city has views of dramatic Mont Blanc. Headquarters of Europe’s United Nations and the Red Cross, it’s a global hub for diplomacy and banking. French influence is widespread, from the language to gastronomy and bohemian districts like Carouge(Google destination info)", name: "1ZelohXhbfTzfA4Fs6wiHimsjbuH86dti", },
 
  }
  var wrapper = $('#wrapper'), container;
  for (var key in countries){
     
   
      container = $('<div id="countries" class="container"></div>');
      wrapper.append(container);
      container.append('<div class="country">' + key +'</div>');
      container.append('<div class="images">' + `<a href="https://drive.google.com/uc?export=view&id=${countries[key].name}"><img src="https://drive.google.com/uc?export=view&id=${countries[key].name}">` + '</a>'  + '</div>');
      container.append('<div class="description">' + '<h2 class="h2">' + 'Description' + '</h2>' + countries[key].description  +'</div>' );

  }