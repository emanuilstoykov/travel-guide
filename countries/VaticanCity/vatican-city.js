var countries = {  
    "The Papal Basilica of St. Peter": { description: "The Papal Basilica of St. Peter in the Vatican, or simply St. Peter's Basilica, is an Italian Renaissance church in Vatican City, the papal enclave within the city of Rome(Wikipedia)", name: "1wCfG3q0xDZqL5xHB12VWzu1owO8O0vP8",},
    "Sistine Chapel": { description: "The Sistine Chapel is a chapel in the Apostolic Palace, the official residence of the Pope, in Vatican City. Originally known as the Cappella Magna, the chapel takes its name from Pope Sixtus IV, who restored it between 1477 and 1480(Wikipedia)", name: "1dwlx5D5FTbEJgf-0TL4r_Nmam5x0T_FN",},
    "Mausoleum": { description: "The Mausoleum of Hadrian, usually known as Castel Sant'Angelo, is a towering cylindrical building in Parco Adriano, Rome, Italy. It was initially commissioned by the Roman Emperor Hadrian as a mausoleum for himself and his family. The building was later used by the popes as a fortress and castle, and is now a museum(Wikipedia)", name: "1yA6rfRE0d_AcFdHUsmEXp-zJSv10xli8", },    
      
 
  }
  var wrapper = $('#wrapper'), container;
  for (var key in countries){
     
   
      container = $('<div id="countries" class="container"></div>');
      wrapper.append(container);
      container.append('<div class="country">' + key +'</div>');
      container.append('<div class="images">' + `<a href="https://drive.google.com/uc?export=view&id=${countries[key].name}"><img src="https://drive.google.com/uc?export=view&id=${countries[key].name}">` + '</a>'  + '</div>');
      container.append('<div class="description">' + '<h2 class="h2">' + 'Description' + '</h2>' + countries[key].description  +'</div>' );

  }