var countries = {  
    "Budapest": { description: "Budapest, Hungary’s capital, is bisected by the River Danube. Its 19th-century Chain Bridge connects the hilly Buda district with flat Pest. A funicular runs up Castle Hill to Buda’s Old Town, where the Budapest History Museum traces city life from Roman times onward. Trinity Square is home to 13th-century Matthias Church and the turrets of the Fishermen’s Bastion, which offer sweeping views.", name: "1PVHFtFLSzieeRlEmLlFMGVTKBS_NhX5w",},
    "Eger": { description: "Eger is a city in northern Hungary. At its heart is elegant, tree-lined Kossuth Lajos Street. Buildings along this stretch include County Hall, with its fine wrought-iron gate, and Eszterhazy Karoly College, crowned by the Astronomical Tower. Across the Eger River, medieval Eger Castle overlooks the city. On its grounds, the Istvan Dobo Castle Museum has a picture gallery and exhibits on the castle’s history.", name: "1Xey3rPQbn-WHdkcUzG2DUH46uNFb2WsU",},
    "Pecs": { description: "Pecs is the fifth largest city of Hungary situated in the south-west of the country, close to its border with Croatia. It is the administrative and economical centre of Baranya County. Pecs is also the seat of the Roman Catholic Diocese of Pecs.The city Sopianae was founded by Romans at the beginning of the 2nd century. By the 4th century, it became a significant early Christian center.Its episcopate was founded in 1009 by Steven I, and the first university in Hungary was founded in Pecs in 1367 by Louis I the Great.", name: "1PVHFtFLSzieeRlEmLlFMGVTKBS_NhX5w",},
    "Szeged": { description: "Szeged is the third largest city of Hungary, the largest city and regional centre of the Southern Great Plain and the county seat of Csongrad county. The University of Szeged is one of the most distinguished universities in Hungary", name: "1Xey3rPQbn-WHdkcUzG2DUH46uNFb2WsU",},
   
 
  }
  var wrapper = $('#wrapper'), container;
  for (var key in countries){
     
   
      container = $('<div id="countries" class="container"></div>');
      wrapper.append(container);
      container.append('<div class="country">' + key +'</div>');
      container.append('<div class="images">' + `<a href="https://drive.google.com/uc?export=view&id=${countries[key].name}"><img src="https://drive.google.com/uc?export=view&id=${countries[key].name}">` + '</a>'  + '</div>');
      container.append('<div class="description">' + '<h2 class="h2">' + 'Description' + '</h2>' + countries[key].description  +'</div>' );

  }