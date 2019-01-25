var countries = {  
    "Dublin": { description: "Dublin, capital of the Republic of Ireland, is on Ireland’s east coast at the mouth of the River Liffey. Its historic buildings include Dublin Castle, dating to the 13th century, and imposing St Patrick’s Cathedral, founded in 1191. City parks include landscaped St Stephen’s Green and huge Phoenix Park, containing Dublin Zoo. The National Museum of Ireland explores Irish heritage and culture", name: "15o8q3nQKiyL-2yHejEc0Is8lTE8rOTDw",},
    "Galway": { description: "Galway, a harbour city on Ireland’s west coast, sits where the River Corrib meets the Atlantic Ocean. The city’s hub is 18th-century Eyre Square, a popular meeting spot surrounded by shops and traditional pubs that often offer live Irish folk music. Nearby, stone-clad cafes, boutiques and art galleries line the winding lanes of the Latin Quarter, which retains portions of the medieval city walls", name: "1Jelb_XpUM1-aUcikfGPaYRGTzfzRGSIb",},
    "Connemara": { description: "The name Connemara (Conamara) translates as 'Inlets of the Sea' and the roads along the peninsula's filigreed coast bear this out as they wind around the small bays and coves of this breathtaking stretch of the Wild Atlantic Way", name: "1-c-3Chc2nMkUv0gipEozSvJwNHuwOWOW",},
    "Glendalough": { description: "If you've come to Wicklow, the chances are that a visit to Glendalough (Gleann da Loch, meaning 'Valley of the Two Lakes') is one of your main reasons. And you're not wrong, for this is one of the most beautiful corners of the whole country and the epitome of the kind of rugged, romantic Ireland that probably drew you to the island in the first place", name: "1w4AxC0eVedEEbV8PdMwS4whYba1fwSaY",},
    "Cork": { description: "Cork, just inland from Ireland’s southwest coast, is a university city with its centre on an island in the River Lee, connected to the sea by Cork Harbour. The castlelike 1824 Cork City Gaol once held prisoners bound for Australia, and exhibitions relay the building’s history. The hilltop steeple of 18th-century Shandon Church (officially the Church of Saint Anne) is a symbol of the city.", name: "10I5a7-1d7fvetI8vayAK_CrQaAioSMVs",},
    "Derry(Londonderry)": { description: "Derry, also known as Londonderry, is a city on the River Foyle in Northern Ireland. It’s known for the intact 17th-century Derry’s Walls with 7 gates. Within the walls, spired St. Columb’s Cathedral displays artefacts from the 1688–9 Siege of Derry. Near the Peace Bridge, the Tower Museum has city views and historical exhibits. Huge stained-glass windows adorn the neo-Gothic red sandstone Guildhall", name: "1JjKZkLcZH02dfBIQGKGXLAYWswVswobG",},
   
 
  }
  var wrapper = $('#wrapper'), container;
  for (var key in countries){
     
   
      container = $('<div id="countries" class="container"></div>');
      wrapper.append(container);
      container.append('<div class="country">' + key +'</div>');
      container.append('<div class="images">' + `<a href="https://drive.google.com/uc?export=view&id=${countries[key].name}"><img src="https://drive.google.com/uc?export=view&id=${countries[key].name}">` + '</a>'  + '</div>');
      container.append('<div class="description">' + '<h2 class="h2">' + 'Description' + '</h2>' + countries[key].description  +'</div>' );

  }
