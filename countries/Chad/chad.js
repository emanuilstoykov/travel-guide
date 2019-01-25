var countries = {  
    "N’Djamena": { description: "N’Djamena is the capital and largest city of Chad. A port on the Chari River, near the confluence with the Logone River, it directly faces the Cameroonian town of Kousséri, to which the city is connected by a bridge. It is also a special statute region, divided into 10 districts or arrondissements. It is a regional market for livestock, salt, dates, and grains. Meat, fish and cotton processing are the chief industries, and the city continues to serve as the center of economic activity in Chad(Wikipedia)", name: "1dQg67nVxnhQegc3xK7H8gmFrXdBK4J9k",},
    "Zakouma National Park": { description: "This vast national park, the first in Chad, is home to lions & elephants, among other animals(Google destination info)", name: "1zSc6Ge-fmMtmcj3cXKlmo9PuAJ04CRA2",},
    "Ounianga Kébir": { description: "Ounianga Kébir is a town in the Sahara Desert in the Ennedi Region of northern Chad. Located within the Ennedi Department, Ounianga also makes up a sub-prefecture(Wikipedia)", name: "10pSlBjucNXPv676aawM6XRMxQxkqlGln", },    

  }
  var wrapper = $('#wrapper'), container;
  for (var key in countries){
     
   
      container = $('<div id="countries" class="container"></div>');
      wrapper.append(container);
      container.append('<div class="country">' + key +'</div>');
      container.append('<div class="images">' + `<a href="https://drive.google.com/uc?export=view&id=${countries[key].name}"><img src="https://drive.google.com/uc?export=view&id=${countries[key].name}">` + '</a>'  + '</div>');
      container.append('<div class="description">' + '<h2 class="h2">' + 'Description' + '</h2>' + countries[key].description  +'</div>' );

  }