var countries = {  
    "Jemaa el-Fnaa": { description: "Jemaa el-Fnaa is a square and market place in Marrakesh's medina quarter. It remains the main square of Marrakesh, used by locals and tourists(Wikipedia)", name: "1v1kBUUo7Suvwwpa-yzz88G4vxO2yPQd1",},
    "The Todgha Gorges": { description: "The Todgha Gorges are a series of limestone river canyons, or wadi, in the eastern part of the High Atlas Mountains in Morocco, near the town of Tinerhir. Both the Todgha and neighbouring Dades Rivers are responsible for carving out these deep cliff-sided canyons, on their final 40 kilometres through the mountain(Wikipedia)", name: "1uyOY3RLkkGnWZpMiDg5PqwTlL-gOs203",},
    "Marrakesh": { description: "Marrakesh, a former imperial city in western Morocco, is a major economic center and home to mosques, palaces and gardens. The medina is a densely packed, walled medieval city dating to the Berber Empire, with mazelike alleys where thriving souks (marketplaces) sell traditional textiles, pottery and jewelry. A symbol of the city, and visible for miles, is the Moorish minaret of 12th-century Koutoubia Mosque(Wikipedia)", name: "1gw_GiJlJCn0Q0vSFUA3FsqeoEzNxRSKi", },
    "Casablanca": { description: "Casablanca is a port city and commercial hub in western Morocco, fronting the Atlantic Ocean. The city's French colonial legacy is seen in its downtown Mauresque architecture, a blend of Moorish style and European art deco. Standing partly over the water, the enormous Hassan II Mosque, completed in 1993, has a 210m minaret topped with lasers directed toward Mecca.(Google destionation info)", name: "11dDFP1dFYqRVLB66CDCMyQUm3ioevEwv", },
 
  }
  var wrapper = $('#wrapper'), container;
  for (var key in countries){
     
   
      container = $('<div id="countries" class="container"></div>');
      wrapper.append(container);
      container.append('<div class="country">' + key +'</div>');
      container.append('<div class="images">' + `<a href="https://drive.google.com/uc?export=view&id=${countries[key].name}"><img src="https://drive.google.com/uc?export=view&id=${countries[key].name}">` + '</a>'  + '</div>');
      container.append('<div class="description">' + '<h2 class="h2">' + 'Description' + '</h2>' + countries[key].description  +'</div>' );

  }
