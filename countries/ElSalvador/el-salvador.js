var countries = {  
  "Playa El Tunco": { description: "Playa El Tunco is a little surf village in El Salvador. It's 8km from Puerto La Libertad, 35km from the airport and 35km from the capital San Salvador. Only a few years ago this place was unknown and quiet. It is now the most visited town of El Salvador by backpackers and surfers all year long and by Salvadorians on the week ends for the nightlife. There are now around 20 hostels, bars, restaurants and everything needed to practice surfing. Playa El Tunco is actually the gateway to the surf spot El Sunzal, and is a few kilometers away from El Zonte and Punta Roca, two other famous surf spots.", name: "1z_43L9x40sELxM3bx5BVwVXqut8Es7mr",},
  "Coatepeque Caldera": { description: "Lago de Coatepeque, an almost perfectly round crater-lake that is 740m (2,428 ft.) above sea level, is one of El Salvador's most beautiful and enjoyable getaways. The deep blue lake is a short drive from Santa Ana, which means it's an easy day trip from that town -- but it's really worth staying a couple of days here to enjoy all its attractions; the 23-sq.-km (9-sq.-mile) pristine lake is ideal for swimming, fishing, riding watercraft, and simply soaking in beautiful views.", name: "1CcMzqEGkId09LGoTIHLvisI0jGX1WThF",},
  "Santa Ana Volcano": { description: "Santa Ana volcano is the tallest and most emblematic volcano in El Salvador because of its beautiful turquoise lake and great 360 degree views from the top. From the rim you have a vantage point over the two other volcanoes in the Parque de los Volcanes, Idalco and Cerro Verde, the ocean on the horizon and the Coatepeque Lake on the other side of the volcano. Hiking Santa Ana is one of the best activities in El Salvador and you should not miss the chance to make it to the top and hear all about El Salvador’s volcanic past and history", name: "1jnprBrqSbrAVcOLM7Wl3qp79OoZsjF49", },

 

}
var wrapper = $('#wrapper'), container;
for (var key in countries){
   
 
    container = $('<div id="countries" class="container"></div>');
    wrapper.append(container);
    container.append('<div class="country">' + key +'</div>');
    container.append('<div class="images">' + `<a href="https://drive.google.com/uc?export=view&id=${countries[key].name}"><img src="https://drive.google.com/uc?export=view&id=${countries[key].name}">` + '</a>'  + '</div>');
    container.append('<div class="description">' + '<h2 class="h2">' + 'Description' + '</h2>' + countries[key].description  +'</div>' );

}
