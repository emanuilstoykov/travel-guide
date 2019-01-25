var countries = {  
    "Barcelona": { description: "Barcelona, the cosmopolitan capital of Spain’s Catalonia region, is known for its art and architecture. The fantastical Sagrada Família church and other modernist landmarks designed by Antoni Gaudí dot the city. Museu Picasso and Fundació Joan Miró feature modern art by their namesakes. City history museum MUHBA, includes several Roman archaeological sites(Google destination info)", name: "18iher7zQxEMEX2_8_pvP9As6ashzJXjy",},
    "Madrid": { description: "Madrid, Spain's central capital, is a city of elegant boulevards and expansive, manicured parks such as the Buen Retiro. It’s renowned for its rich repositories of European art, including the Prado Museum’s works by Goya, Velázquez and other Spanish masters. The heart of old Hapsburg Madrid is the portico-lined Plaza Mayor, and nearby is the baroque Royal Palace and Armory, displaying historic weaponry(Google destination info)", name: "1n0KV4P7m71JtpeE7M5kwXcJ3PXy50bh5",},
    "Seville": { description: "Seville is the capital of southern Spain’s Andalusia region. It's famous for flamenco dancing, particularly in its Triana neighborhood. Major landmarks include the ornate Alcázar castle complex, built during the Moorish Almohad dynasty, and the 18th-century Plaza de Toros de la Maestranza bullring. The Gothic Seville Cathedral is the site of Christopher Columbus’s tomb and a minaret turned bell tower, the Giralda(Google destination info)", name: "11opfMHR2BPvLDzRGQVm-ctbIL50HxohY", },
    "Granada": { description: "Granada is a city in southern Spain’s Andalusia region, in the foothills of the Sierra Nevada mountains. It's known for grand examples of medieval architecture dating to the Moorish occupation, especially the Alhambra. This sprawling hilltop fortress complex encompasses royal palaces, serene patios, and reflecting pools from the Nasrid dynasty, as well as the fountains and orchards of the Generalife gardens(Google destination info)", name: "1069ZkBRCJg4RgmjAhBtYAEvz-wB-0qOr", },
    "Tenerife": { description: "Tenerife is the largest of Spain’s Canary Islands, off West Africa. It's dominated by Mt. Teide, a dormant volcano that is Spain's tallest peak. Tenerife may be best known for its Carnaval de Santa Cruz, a huge pre-Lent festival with parades, music, dancing and colorful costumes. The island has many beaches (with sands from yellow to black) and resort areas, including Los Cristianos and Playa de las Américas(Google destination info)", name: "1W7bK8IhT4XnHrl-YNC9zGayqHVrxLxdd", },
    "Ibiza": { description: "Ibiza is one of the Balearic islands, an archipelago of Spain in the Mediterranean Sea. It's well known for the lively nightlife in Ibiza Town and Sant Antoni, where major European nightclubs have summer outposts. It’s also home to quiet villages, yoga retreats and beaches, from Platja d'en Bossa, lined with hotels, bars and shops, to quieter sandy coves backed by pine-clad hills found all around the coast(Wikipedia)", name: "1izyg0fZTS4XSB0HvSG0DVo6kyB6Tcc9g", },
 
  }
  var wrapper = $('#wrapper'), container;
  for (var key in countries){
     
   
      container = $('<div id="countries" class="container"></div>');
      wrapper.append(container);
      container.append('<div class="country">' + key +'</div>');
      container.append('<div class="images">' + `<a href="https://drive.google.com/uc?export=view&id=${countries[key].name}"><img src="https://drive.google.com/uc?export=view&id=${countries[key].name}">` + '</a>'  + '</div>');
      container.append('<div class="description">' + '<h2 class="h2">' + 'Description' + '</h2>' + countries[key].description  +'</div>' );

  }