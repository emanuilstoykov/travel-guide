var countries = {  
    "Luxembourg city": { description: "Luxembourg is the capital of the small European nation of the same name. Built amid deep gorges cut by the Alzette and Pétrusse rivers, it’s famed for its ruins of medieval fortifications. The vast Bock Casemates tunnel network encompasses a dungeon, prison and the Archaeological Crypt, considered the city’s birthplace. Along ramparts above, the Chemin de la Corniche promenade offers dramatic viewpoints.", name: "1R4XaHy8WZ3QZPttLxAvShzOcUdjlNGnk",},
    
  }
  var wrapper = $('#wrapper'), container;
  for (var key in countries){
     
   
      container = $('<div id="countries" class="container"></div>');
      wrapper.append(container);
      container.append('<div class="country">' + key +'</div>');
      container.append('<div class="images">' + `<a href="https://drive.google.com/uc?export=view&id=${countries[key].name}"><img src="https://drive.google.com/uc?export=view&id=${countries[key].name}">` + '</a>'  + '</div>');
      container.append('<div class="description">' + '<h2 class="h2">' + 'Description' + '</h2>' + countries[key].description  +'</div>' );

  }
