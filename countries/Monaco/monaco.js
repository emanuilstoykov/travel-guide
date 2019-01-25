var countries = {  
    "The French Riviera(or Côte d'Azur)": { description: "The French Riviera (or Côte d'Azur) is the Mediterranean coast of southeastern France. It includes famously glamorous beach resorts such as Saint-Tropez and Cannes, and the independent microstate of Monaco. A health retreat in the 18th century, the area later attracted aristocrats, artists and the 1960s \"jet set.\" Today it’s an established holiday destination, with paths connecting many coastal villages and towns.(Google info)", name: "1vbAtDBjy1USSixYh624DPfdaL8mX8T9l",},
    "The Municipality of Monaco": { description: "The Municipality of Monaco is the only administrative division of the Principality of Monaco, and is coterminous with the state as a whole(Google info)", name: "1Swn3IaSdYCN-l7v6qdtaY_8DzqHE2d2T",},
    "La Condamine": { description: "La Condamine is the central Ward in the Principality of Monaco. Its landmarks include Port Hercules, the Rainier III Nautical Stadium, and the Princess Antoinette Park(Wikipedia)", name: "1-GOdBUgDu9xCWfyYhIu-lrR0tAL62wa2", },
 
  }
  var wrapper = $('#wrapper'), container;
  for (var key in countries){
     
   
      container = $('<div id="countries" class="container"></div>');
      wrapper.append(container);
      container.append('<div class="country">' + key +'</div>');
      container.append('<div class="images">' + `<a href="https://drive.google.com/uc?export=view&id=${countries[key].name}"><img src="https://drive.google.com/uc?export=view&id=${countries[key].name}">` + '</a>'  + '</div>');
      container.append('<div class="description">' + '<h2 class="h2">' + 'Description' + '</h2>' + countries[key].description  +'</div>' );

  }