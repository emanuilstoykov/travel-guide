var countries = {  
    "Bruges": { description: "Bruges, the capital of West Flanders in northwest Belgium, is distinguished by its canals, cobbled streets and medieval buildings. Its port, Zeebrugge, is an important center for fishing and European trade.", name: "1PVHFtFLSzieeRlEmLlFMGVTKBS_NhX5w",},
    "Brussels": { description: "Brussels is the Capital of Belgium and the European Union. A majority of the Brussels metropolitan area's 1.8 million inhabitants speak French, but Brussels is historically Dutch-speaking. Although Brussels dates from the 19th Century, most of Brussels old town was destroyed for new construction between 1880 and 1980, so very little of the old city is preserved. The Grand Place-Grote Markt is the exception, and it's the tourist center of Brussels. But potential tourists should not despair, Brussels has an extraordinary number of interesting museums, restaurants, and galleries to visit.", name: "1O_PhzV70-hCppsjErkjVCsirVwByZ2YG",},
    "Antwerp": { description: "Antwerp, a busy pocket-sized metropolis, has something for everyone. The city is an inspiring source of culture thanks to its impressive architecture and magnificent museums and churches. Fashionistas can explore the stores of Antwerp’s designers, whose stylish creations are revered all over the world. And foodies and people with a passion for life in general will enjoy the warm welcome of Antwerp’s cafes and restaurants. A visit to Antwerp should definitely include the new museum MAS, the Cathedral of Our Lady and the Rubens House.", name: "1H91pg4eSWcq9RwRT-w3z8KqJbFsaSf3O", },
    "Ghent": { description: "Ghent is a port city in northwest Belgium, at the confluence of the Leie and Scheldt rivers. During the Middle Ages it was a prominent city-state. Today it’s a university town and cultural hub. Its pedestrianized center is known for medieval architecture such as 12th-century Gravensteen castle and the Graslei, a row of guildhalls beside the Leie river harbor.", name: "1AMFBKbRpTK3oYfozFSnnEBqmzjHiUs8E",},
   

  }
  var wrapper = $('#wrapper'), container;
  for (var key in countries){
     
   
      container = $('<div id="countries" class="container"></div>');
      wrapper.append(container);
      container.append('<div class="country">' + key +'</div>');
      container.append('<div class="images">' + `<a href="https://drive.google.com/uc?export=view&id=${countries[key].name}"><img src="https://drive.google.com/uc?export=view&id=${countries[key].name}">` + '</a>'  + '</div>');
      container.append('<div class="description">' + '<h2 class="h2">' + 'Description' + '</h2>' + countries[key].description  +'</div>' );

  }

  
  