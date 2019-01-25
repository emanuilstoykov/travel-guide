var countries = {  
    "Rejkjavik": { description: "Reykjavik, on the coast of Iceland, is the country's capital and largest city. It's home to the National and Saga museums, tracing Iceland’s Viking history. The striking concrete Hallgrimskirkja church and rotating Perlan glass dome offer sweeping views of the sea and nearby hills. Exemplifying the island’s volcanic activity is the geothermal B", name: "1GQsVI0HxzA0P-mqJg538lZgU4Y58MUaT",},
    "The Westjords": { description: "The Westfjords is where Iceland’s dramatic landscapes come to a riveting climax and where mass tourism disappears – only about 10% of Iceland's visitors ever see the region. Jagged bird cliffs and broad multihued dream beaches flank the south. Rutted dirt roads snake north along jaw-dropping coastal fjords and over immense central mountains, revealing tiny fishing villages embracing traditional ways of life. In the far north, the Hornstrandir hiking reserve crowns the quiet region, and is home to cairn-marked walking paths revealing bird life, Arctic foxes and ocean vistas. The Strandir coast is less visited still, with an end-of-the-line, mystical feel, geothermal springs and minuscule oceanside hamlets", name: "1OInVDT6C0SWI_BX965T660QYgFCjF2h_",},
    "Jokulsarlon": { description: "A host of spectacular, luminous-blue icebergs drift through Jokulsarlon (pronounced yokul-sar-lon) glacier lagoon, right beside the Ring Road between Hofn and Skaftafell. It’s worth spending a couple of hours here, admiring the wondrous ice sculptures (some of them striped with ash layers from volcanic eruptions), scouting for seals, or taking a boat trip", name: "15zAsuTXl64S-P76fhtmj1QJGPLUy85tc",},
   
   
 
  }
  var wrapper = $('#wrapper'), container;
  for (var key in countries){
     
   
      container = $('<div id="countries" class="container"></div>');
      wrapper.append(container);
      container.append('<div class="country">' + key +'</div>');
      container.append('<div class="images">' + `<a href="https://drive.google.com/uc?export=view&id=${countries[key].name}"><img src="https://drive.google.com/uc?export=view&id=${countries[key].name}">` + '</a>'  + '</div>');
      container.append('<div class="description">' + '<h2 class="h2">' + 'Description' + '</h2>' + countries[key].description  +'</div>' );

  }
