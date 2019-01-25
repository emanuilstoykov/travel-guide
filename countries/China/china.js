var countries = {  
    "Hong Kong": { description: "Hong Kong is an autonomous territory, and former British colony, in southeastern China. Its vibrant, densely populated urban centre is a major port and global financial hub with a skyscraper-studded skyline. Central (the business district) features architectural landmarks like I.M. Pei’s Bank of China Tower. Hong Kong is also a major shopping destination, famed for bespoke tailors and Temple Street Night Market(Google destination info)", name: "16pNSdCRoBIpoxs7krkKZ9OgMIkzdgF9h",},
    "Beijing": { description: "Beijing, China’s sprawling capital, has history stretching back 3 millennia. Yet it’s known as much for modern architecture as its ancient sites such as the grand Forbidden City complex, the imperial palace during the Ming and Qing dynasties. Nearby, the massive Tiananmen Square pedestrian plaza is the site of Mao Zedong’s mausoleum and the National Museum of China, displaying a vast collection of cultural relics", name: "1otqGIae5A3LYNWpNtGneQCYiz0TvTXbh",},
    "Shanghai": { description: "Shanghai, on China’s central coast, is the country's biggest city and a global financial hub. Its heart is the Bund, a famed waterfront promenade lined with colonial-era buildings. Across the Huangpu River rises the Pudong district’s futuristic skyline, including 632m Shanghai Tower and the Oriental Pearl TV Tower, with distinctive pink spheres. Sprawling Yu Garden has traditional pavilions, towers and ponds", name: "1MEDdVKHGN7s3YBAyyvb3qHrNq-09PKXp",},
    "Xi An": { description: "Xi’an is a large city and capital of Shaanxi Province in central China. Once known as Chang’an (Eternal Peace), it marks the Silk Road’s eastern end and was home to the Zhou, Qin, Han and Tang dynasties' ruling houses. At archaeological sites in Xi’an’s surrounding plains are the famed Bingmayong (Terra Cotta Army), thousands of life-size, hand-molded figures buried with China’s first emperor, Qin Shi Huang.", name: "1kf_WGZocl2S2YOcxuJhgoPjgtgPwD6sc",},

   
 
  }
  var wrapper = $('#wrapper'), container;
  for (var key in countries){
     
   
      container = $('<div id="countries" class="container"></div>');
      wrapper.append(container);
      container.append('<div class="country">' + key +'</div>');
      container.append('<div class="images">' + `<a href="https://drive.google.com/uc?export=view&id=${countries[key].name}"><img src="https://drive.google.com/uc?export=view&id=${countries[key].name}">` + '</a>'  + '</div>');
      container.append('<div class="description">' + '<h2 class="h2">' + 'Description' + '</h2>' + countries[key].description  +'</div>' );

  }