var countries = {  
    "Auckland": { description: "Auckland, based around 2 large harbours, is a major city in the north of New Zealand’s North Island. In the centre, the iconic Sky Tower has views of Viaduct Harbour, which is full of superyachts and lined with bars and cafes. Auckland Domain, the city’s oldest park, is based around an extinct volcano and home to the formal Wintergardens. Near Downtown, Mission Bay Beach has a seaside promenade.(Google destination info)", name: "1yXCeG6Qtysp8kzMsEnaUrDsHiZi2Y6Zz",},
    "Queenstown": { description: "Queenstown, New Zealand, sits on the shores of the South Island’s Lake Wakatipu, set against the dramatic Southern Alps. Renowned for adventure sports, it’s also a base for exploring the region’s vineyards and historic mining towns. There's bungee jumping off Kawarau Gorge Suspension Bridge and jet-boating on the Shotover and Dart rivers. In winter, there's skiing on the slopes of The Remarkables and Coronet Peak(Google destination info)", name: "1YDwVVhnEbfY7AZfA6Zaljlz5H9GBkMSG/",},
    "Christchurch": { description: "Christchurch, known for its English heritage, is located on the east coast of New Zealand’s South Island. Flat-bottomed punts glide on the Avon River, which meanders through the city centre. On its banks are cycling paths, the green expanse of Hagley Park and Christchurch Botanic Gardens. In 2010 and 2011, earthquakes destroyed many of the historic centre's stone-built buildings(Google destination info)", name: "1imyD_-rLpL9MgMYjo7Avs3yHZYt8UA91", },
    "Rotorua": { description: "Rotorua, a town set on its namesake lake on New Zealand's North Island, is renowned for its geothermal activity and Maori culture. In Te Puia’s Whakarewarewa Valley, there are bubbling mud pools and the 30m-tall Pohutu Geyser, which erupts many times daily. It’s also home to a living Maori village and the New Zealand Maori Arts and Crafts Institute, with traditional wood carving and weaving schools(Google destionation info)", name: "1m3OITA1WSAhxEEy4OAToYLJ2ICQWbm52", },
 
  }
  var wrapper = $('#wrapper'), container;
  for (var key in countries){
     
   
      container = $('<div id="countries" class="container"></div>');
      wrapper.append(container);
      container.append('<div class="country">' + key +'</div>');
      container.append('<div class="images">' + `<a href="https://drive.google.com/uc?export=view&id=${countries[key].name}"><img src="https://drive.google.com/uc?export=view&id=${countries[key].name}">` + '</a>'  + '</div>');
      container.append('<div class="description">' + '<h2 class="h2">' + 'Description' + '</h2>' + countries[key].description  +'</div>' );

  }