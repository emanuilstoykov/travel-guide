var countries = {  
    "Lisbon": { description: "Lisbon is Portugal’s hilly, coastal capital city. From imposing São Jorge Castle, the view encompasses the old city’s pastel-colored buildings, Tagus Estuary and Ponte 25 de Abril suspension bridge. Nearby, the National Azulejo Museum displays 5 centuries of decorative ceramic tiles. Just outside Lisbon is a string of Atlantic beaches, from Cascais to Estoril(Google destination info)", name: "1dMAQ7EmpQAMRGGHCJXMzQTNz7A3UXgOi",},
    "Porto": { description: "Porto is a coastal city in northwest Portugal known for its stately bridges and port wine production. In the medieval Ribeira (riverside) district, narrow cobbled streets wind past merchants’ houses and cafes. São Francisco Church is known for its lavish baroque interior with ornate gilded carvings. The palatial 19th-century Palácio de Bolsa, formerly a stock market, was built to impress potential European investors(Google destination info)", name: "1oz48ErFaWUshJk2iu1bLq04NFvIoqpGl",},
    "The Algarve": { description: "The Algarve, Portugal’s southernmost region, is known for its Atlantic beaches and golf resorts. Whitewashed fishing villages on low cliffs overlooking sandy coves were transformed in the 1960s, and now its central coast between Lagos and Faro is lined with villas, hotels, bars and restaurants. The region's western Atlantic coast and rugged interior are less developed(Google destination info)", name: "1SvBkmIO4RTZ0Vm2bHqv9zZYCmPesRnlM", },
    "Sintra": { description: "Sintra is a resort town in the foothills of Portugal’s Sintra Mountains, near the capital, Lisbon. A longtime royal sanctuary, its forested terrain is studded with pastel-colored villas and palaces. The Moorish- and Manueline-style Sintra National Palace is distinguished by dramatic twin chimneys and elaborate tilework. The hilltop 19th-century Pena National Palace is known for a whimsical design and sweeping views(Google destination info)", name: "18YaekvTaeSmJrwvvsDDuJJhyuj46p7CJ", },
 
  }
  var wrapper = $('#wrapper'), container;
  for (var key in countries){
     
   
      container = $('<div id="countries" class="container"></div>');
      wrapper.append(container);
      container.append('<div class="country">' + key +'</div>');
      container.append('<div class="images">' + `<a href="https://drive.google.com/uc?export=view&id=${countries[key].name}"><img src="https://drive.google.com/uc?export=view&id=${countries[key].name}">` + '</a>'  + '</div>');
      container.append('<div class="description">' + '<h2 class="h2">' + 'Description' + '</h2>' + countries[key].description  +'</div>' );

  }