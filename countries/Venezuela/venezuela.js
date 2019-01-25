var countries = {  
    "Caracas": { description: "Caracas, Venezuela's capital, is a commercial and cultural center located in a northern mountain valley. Independence leader Simón Bolívar is buried at the National Pantheon of Venezuela, established in the 19th century in the city's old town. Caracas Cathedral, a landmark of Romanesque architecture, dates to the 17th century. Parque Central's 225m-high twin towers are the signature of the skyline(Google destination info)", name: "1vWvjmhaMVfQW4XJGOmW7dx4REkOr5CHv",},
    "Parque Nacional Canaima": { description: "Expansive protected area split by the Caroni River, including table mountains & high waterfalls(Google destination info)", name: "1HTSsPvHTt8S8XfZXcXDiO6v6lVO1Vdya",},
    "Isla de Margarita": { description: "Isla de Margarita, part of Venezuela, lies in the Caribbean Sea about 40 kilometers north of the mainland. It’s a popular holiday destination, comprising 2 peninsulas linked by the sand and mangroves of the Laguna de la Restinga national park. Most people live, or stay, on the eastern peninsula, home to the cities of Pampatar, Porlamar and La Asuncion(Google destination info)", name: "1AF931IX7jHFni-ul6acInSlI1xAXfboS", },    
    "Los Roques National Park": { description: "Los Roques National Park is a Venezuelan archipelago around 160 kilometers north of the capital Caracas in the Caribbean Sea. The protected area contains more than 300 islands and cays surrounding a 400-sq.-km lagoon. The archipelago’s coral reef is popular with snorkelers and scuba divers. The park is renowned for its isolated, white-sand beaches, windsurfing, fishing and sailing(Google destination info)", name: "1GDwPiMQ-XNTh8E1Dm-C5jgzhtTV5uuNA",},
    
 
  }
  var wrapper = $('#wrapper'), container;
  for (var key in countries){
     
   
      container = $('<div id="countries" class="container"></div>');
      wrapper.append(container);
      container.append('<div class="country">' + key +'</div>');
      container.append('<div class="images">' + `<a href="https://drive.google.com/uc?export=view&id=${countries[key].name}"><img src="https://drive.google.com/uc?export=view&id=${countries[key].name}">` + '</a>'  + '</div>');
      container.append('<div class="description">' + '<h2 class="h2">' + 'Description' + '</h2>' + countries[key].description  +'</div>' );

  }