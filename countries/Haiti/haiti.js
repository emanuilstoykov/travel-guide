var countries = {  
    "Furcy": { description: "In the tiny, picturesque village of Furcy, pine trees abound and the whiff of fresh cilantro is in the air. There are stellar views of the Massif de la Selle, and locals rent out horses (around US$5 per hour) to take visitors to a waterfall above the village (it's 1? hours on foot). Whatever your plans, don’t forget some warm clothes – temperatures drop once the sun starts to dip.", name: "1PVHFtFLSzieeRlEmLlFMGVTKBS_NhX5w",},
    "Citadelle Laferriere": { description: "The Citadelle Laferrière is a mountaintop fortress, located on the northern coast of Haiti - on the top of mountain Bonnet a L'Eveque", name: "1Xey3rPQbn-WHdkcUzG2DUH46uNFb2WsU",},
   
 
  }
  var wrapper = $('#wrapper'), container;
  for (var key in countries){
     
   
      container = $('<div id="countries" class="container"></div>');
      wrapper.append(container);
      container.append('<div class="country">' + key +'</div>');
      container.append('<div class="images">' + `<a href="https://drive.google.com/uc?export=view&id=${countries[key].name}"><img src="https://drive.google.com/uc?export=view&id=${countries[key].name}">` + '</a>'  + '</div>');
      container.append('<div class="description">' + '<h2 class="h2">' + 'Description' + '</h2>' + countries[key].description  +'</div>' );

  }

