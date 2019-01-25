var countries = {  
    "Valleta": { description: "Valletta (or Il-Belt) is the tiny capital of the Mediterranean island nation of Malta. The walled city was established in the 1500s on a peninsula by the Knights of St. John, a Roman Catholic order. It’s known for museums, palaces and grand churches. Baroque landmarks include St. John’s Co-Cathedral, whose opulent interior is home to the Caravaggio masterpiece \"The Beheading of Saint John.\"(Google destination info)", name: "1S4MdkZTg2h6LYbi0XQ6E7sBt-6XiGE7L",},
    "Gozo": { description: "Gozo is an island in the Mediterranean Sea, one of 21 that make up the Maltese archipelago. Inhabited for thousands of years, it shows evidence of historic immigration and rule by the Phoenicians, Romans, Arabs, Sicilians, French and British, among others. It’s known for its Neolithic Ġgantija Temple ruins, rural hiking paths, beaches and scuba-diving sites.", name: "13J2ruIdd0IfeuvS2EJCVU8q2CWU8c0VW",},
    "Mdina": { description: "Mdina, also known by its titles Città Vecchia or Città Notabile, is a fortified city in the Northern Region of Malta, which served as the island's capital from antiquity to the medieval period. The city is still confined within its walls, and has a population of just under 300, but it is contiguous with the town of Rabat, which takes its name from the Arabic word for suburb, and has a population of over 11,000. The city was founded as Maleth in around the 8th century BC by Phoenician settlers, and was later renamed Melite by the Romans. Ancient Melite was larger than present-day Mdina, and it was reduced to its present size during the Byzantine or Arab occupation of Malta. ", name: "1RCI-OtuVb4BOxEAVz_Ho6wR3TJsysMi2", },


  }
  var wrapper = $('#wrapper'), container;
  for (var key in countries){
     
   
      container = $('<div id="countries" class="container"></div>');
      wrapper.append(container);
      container.append('<div class="country">' + key +'</div>');
      container.append('<div class="images">' + `<a href="https://drive.google.com/uc?export=view&id=${countries[key].name}"><img src="https://drive.google.com/uc?export=view&id=${countries[key].name}">` + '</a>'  + '</div>');
      container.append('<div class="description">' + '<h2 class="h2">' + 'Description' + '</h2>' + countries[key].description  +'</div>' );

  }