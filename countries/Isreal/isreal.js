
  var countries = {  
    "Jerusalem": { description: "Jerusalem is a city in the Middle East, located on a plateau in the Judaean Mountains between the Mediterranean and the Dead Sea. It is one of the oldest cities in the world, and is considered holy to the three major Abrahamic religions—Judaism, Christianity, and Islam. Both Israel and the Palestinian Authority claim Jerusalem as their capital, as Israel maintains its primary governmental institutions there and the State of Palestine ultimately foresees it as its seat of power; however, neither claim is widely recognized internationally. During its long history, Jerusalem has been destroyed at least twice, besieged 23 times, attacked 52 times, and captured and recaptured 44 times. The part of Jerusalem called the City of David was settled in the 4th millennium BCE. Jerusalem was named as \"Urusalim\" on ancient Egyptian tablets, probably meaning \"City of Shalem\" after a Canaanite deity, during the Canaanite period. During the Israelite period, significant construction activity in Jerusalem began in the 9th century BCE, and in the 8th century the city developed into the religious and administrative center of the Kingdom of Judah", name: "1IIsOpBjAffouJvA7IaEPf9Klh_tkcNpR",},
    "Dead Sea": { description: "Lowest point on Earth, a salt-rich lake surrounded by desert beaches, mineral spas & oases.(Google info)", name: "1BLgrBcqk-GHUoxQ9KX1Bo4JzbEq0xdKe",},
    "Tel Aviv": { description: "The Tel Aviv Museum of Art highlights Israeli and European modernism, with notable works by French impressionists and Pablo Picasso. The city is also known for its accessible beaches and vibrant nightlife ranging from Lilienblum Street’s lounges to Dizengoff Street’s open-air cafes. Tel Aviv Port’s waterfront promenade is lined with shops and restaurants, and the chic Neve Tzedek neighborhood has high-end fashion boutiques. The metropolitan area includes the once-separate town of Jaffa, whose Old City is a maze of galleries, Crusader ruins, flea markets and minarets", name: "1ps4yWlD2aYB4YpCeFOFqrzADyt8xfRS5", },


  }
  var wrapper = $('#wrapper'), container;
  for (var key in countries){
     
   
      container = $('<div id="countries" class="container"></div>');
      wrapper.append(container);
      container.append('<div class="country">' + key +'</div>');
      container.append('<div class="images">' + `<a href="https://drive.google.com/uc?export=view&id=${countries[key].name}"><img src="https://drive.google.com/uc?export=view&id=${countries[key].name}">` + '</a>'  + '</div>');
      container.append('<div class="description">' + '<h2 class="h2">' + 'Description' + '</h2>' + countries[key].description  +'</div>' );

  }