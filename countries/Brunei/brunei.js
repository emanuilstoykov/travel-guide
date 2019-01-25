var countries = {  
    "Omar Ali Saifuddien Mosque": { description: "Omar Ali Saifuddien Mosque is an Islamic mosque in Bandar Seri Begawan, the capital of Brunei. It is often considered as one of the most beautiful mosques in the Asia Pacific. It is a place of worship for the Muslim community, a major historical site, and a famous tourist attraction of Brunei. It is named after Omar Ali Saifuddien III, the 28th Sultan of Brunei, who initiated its construction. The mosque serves as a symbol of the Islamic faith in Brunei and dominates the skyline of Bandar Seri Begawan. The building was completed in 1958 and is an example of modern Islamic architecture", name: "1CrXjfHJhBHRM7pUJnFS5i8nWpAsIiUhH",},
    "Kampong Ayer": { description: "Home to around 30,000 people, Kampong Ayer consists of 42 contiguous stilt villages built along the banks of the Sungai Brunei (Brunei River). A century ago, half of Brunei's Malay population lived here, and even today many Bruneians still prefer the lifestyle of the water village to residency on dry land. The village has its own schools, mosques, police stations and fire brigade. To get across the river, flag down a water taxi (B$1).", name: "1xryWygr7DeyigsmV-YhUYJAIFM0n-nZW",},
    "Kg Kianggeh Open Air Market": { description: "This market, especially busy during the early morning hours, is a great way to see and photograph local life in the city. It also has many food stalls that prepare ready-cooked local food.", name: "1qnR6drInSoh0aVSvdeS2dYjq-uXTYxcL", },
    

  }
  var wrapper = $('#wrapper'), container;
  for (var key in countries){
     
   
      container = $('<div id="countries" class="container"></div>');
      wrapper.append(container);
      container.append('<div class="country">' + key +'</div>');
      container.append('<div class="images">' + `<a href="https://drive.google.com/uc?export=view&id=${countries[key].name}"><img src="https://drive.google.com/uc?export=view&id=${countries[key].name}">` + '</a>'  + '</div>');
      container.append('<div class="description">' + '<h2 class="h2">' + 'Description' + '</h2>' + countries[key].description  +'</div>' );

  }