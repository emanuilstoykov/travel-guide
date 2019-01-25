

var countries = {  
    "Buenos Aires": { description: "Buenos Aires, Argentina is known as the “Paris of South America” and lives up to its nickname with an overwhelming café culture to rival its European counterpart. The city is the second largest in South America (after Rio de Janeiro) and is a hot spot for those who love music, food, dancing, and just all-around beautiful people. The nightlife is fantastic, particularly if you like clubs that open at 2am (I don’t, so I can’t comment on their quality!). Buenos Aires has a very distinct European feel to it and a growing international expat community in the Palermo district. The quality of life is very high here and during my stay, I just floated from cafe to cafe, park to park, and wine bar to wine bar! Explore the markets, the many bookshops and cafes, and just relax!", name: "185bdN10AFPxWcAVRU8IiDU_Xlvty_z8c",},
    "Glaciar Perito Moreno": { description: "Perito Moreno has a good range of services for a town on RN 40. However, don’t confuse this dull town with the jaw-dropping national park of the same name or the glacier near El Calafate – the only tourist attraction here is cruising the strip on Saturday night. It's a brief stopover en route to the more inviting Andean oasis of Los Antiguos, though area mining means hotels are often booked. Attractions Cueva de las Manos and Parque Nacional Perito Moreno are not far away. A dedicated archaeological museum, Museo Gradin, exhibiting discoveries from the Río de las Pinturas, was in the works at the time of research and promises to be a useful companion stop", name: "1AaBimmPNLsRDoEaakrrp05ae4YcuyIWz",},
    "Iguazu Falls": { description: "One of the most compelling reasons to travel is to experience the sheer power of nature, to be completely overwhelmed by it. When it comes to nature’s might, Iguazú Falls delivers in bucketloads – around 1,500 cubic metres per second, to be exact. There are in fact over 270 falls here, stretching out over 2.7km, and plunging twice the height of Niagara. As you approach, you’ll hear the roar long before you set sight on the falls. That roar, deep from within the Devil’s Throat is a warning; Iguazú Falls aren’t just there to be looked at – they’ll soak you to your core.", name: "1jUkr_dtegCFjeyHaTGELEZzbYYEjCPnU", },
    "Mendoza": { description: "Mendoza is located at the base of the Andes in western Argentina and is just a stone's throw from the nearby Chilean border, and capital, Santiago. Mendoza is home to over 100 wineries and vineyards. Famous for the rich Malbec and sublime Cabernet, Mendoza wine tours and tastings are the perfect way to discover the next best South American wine, and with many international gourmet restaurants. Besides the viniculture, Mendoza is home to incredibly scenic mountains, including Aconcagua Mountain, the western hemisphere's tallest at 6962 meters (22841 feet). And with a plethora of adventurous activities that are available nearby (including horseback riding, mountain biking, hiking, rock climbing and white water rafting), Mendoza is an outdoor lover´s paradise.",  name: "1vnu8za59-1CrbSUCmVahtXHqiFhWfsR7", },

  }
  var wrapper = $('#wrapper'), container;
  for (var key in countries){
     
   
      container = $('<div id="countries" class="container"></div>');
      wrapper.append(container);
      container.append('<div class="country">' + key +'</div>');
      container.append('<div class="images">' + `<a href="https://drive.google.com/uc?export=view&id=${countries[key].name}"><img src="https://drive.google.com/uc?export=view&id=${countries[key].name}">` + '</a>'  + '</div>');
      container.append('<div class="description">' + '<h2 class="h2">' + 'Description' + '</h2>' + countries[key].description  +'</div>' );

  }

