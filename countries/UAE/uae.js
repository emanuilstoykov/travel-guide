var countries = {  
    "Dubai": { description: "Dubai is a city and emirate in the United Arab Emirates known for luxury shopping, ultramodern architecture and a lively nightlife scene. Burj Khalifa, an 830m-tall tower, dominates the skyscraper-filled skyline. At its foot lies Dubai Fountain, with jets and lights choreographed to music. On artificial islands just offshore is Atlantis, The Palm, a resort with water and marine-animal parks(Google destination info)", name: "1PVHFtFLSzieeRlEmLlFMGVTKBS_NhX5w",},
    "Abu Dhabi": { description: "Abu Dhabi, the capital of the United Arab Emirates, sits off the mainland on an island in the Persian (Arabian) Gulf. Its focus on oil exports and commerce is reflected by the skyline’s modern towers and shopping megacenters such as Abu Dhabi and Marina malls. Beneath white-marble domes, the vast Sheikh Zayed Grand Mosque features an immense Persian carpet, crystal chandeliers and capacity for 41,000 worshipers(Google destination info)", name: "1Xey3rPQbn-WHdkcUzG2DUH46uNFb2WsU",},
    "Sharjah": { description: "Sharjah is a United Arab Emirates city on the Arabian Gulf. Traditionally more conservative than its southern neighbor, Dubai, Sharjah is widely considered the nation’s cultural capital. Its Heritage Area is on the creek that the city first developed around, with restored homes and museums devoted to Emirati customs. It's also home to Sharjah Fort, a 19th-century royal residence turned local history museum(Google destination info)", name: "11cR0tMmiCSDBwsYoxl_4zy-xRH4JkvoM", },
    
 
  }
  var wrapper = $('#wrapper'), container;
  for (var key in countries){
     
   
      container = $('<div id="countries" class="container"></div>');
      wrapper.append(container);
      container.append('<div class="country">' + key +'</div>');
      container.append('<div class="images">' + `<a href="https://drive.google.com/uc?export=view&id=${countries[key].name}"><img src="https://drive.google.com/uc?export=view&id=${countries[key].name}">` + '</a>'  + '</div>');
      container.append('<div class="description">' + '<h2 class="h2">' + 'Description' + '</h2>' + countries[key].description  +'</div>' );

  }
