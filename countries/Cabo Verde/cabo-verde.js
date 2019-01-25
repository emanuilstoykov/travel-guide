var countries = {  
    "Santo Antão": { description: "For many people the main reason for visiting Cabo Verde is the spectacular island of Santo Antão. This dizzyingly vertical isle, ruptured with canyons, gorges and valleys, offers some of the most amazing hiking in West Africa. The second-largest island in the archipelago, it is the only one that puts the verde in Cabo Verde. As you approach from São Vicente by ferry, you wouldn't guess how green it is, as the south side looks barren and harsh. But the northeast of the island, the most populated corner and the most popular with hikers, receives enough regular moisture for forests of pine trees to dominate the hilltops and tropical plants to flourish in the steamy valleys. See the northeast first, before heading for the untravelled western reaches of Santo Antão, with its mighty mountains and a nascent tourism industry.(from https://www.lonelyplanet.com/cabo-verde/santo-antao)", name: "1PJR_u2XrdilaFAF61zVjK8UVhynuSdKM",},
    "São Vicente": { description: "Small, stark and undulating, the island of São Vicente would be fairly forgettable were it not for the beautiful Mediterranean town of Mindelo, Cabo Verde's prettiest city and home to one of Africa's most raucous festivals.(from https://www.lonelyplanet.com/cabo-verde/sao-vicente)", name: "1f_DN4c5iJSStA7Hi8xUwRiz3ZkiqKI73",},
    "Boa Vista": { description: "Boa Vista is an island in Cape Verde, off the coast of West Africa. It's known for the sand dunes and moonlike volcanic landscapes of the Viana Desert. White-sand beaches include Tortuga and the sprawling Santa Monica. Sea turtles are known to nest on the shore, while the coastal waters are a route for migrating humpback whales. The remains of a 19th-century fort sit on an islet across from the town of Sal Rei.", name: "1OJyIFn6biboDa8eStEKTfFkizFPHj2VM",},
      
 
  }
  var wrapper = $('#wrapper'), container;
  for (var key in countries){
     
   
      container = $('<div id="countries" class="container"></div>');
      wrapper.append(container);
      container.append('<div class="country">' + key +'</div>');
      container.append('<div class="images">' + `<a href="https://drive.google.com/uc?export=view&id=${countries[key].name}"><img src="https://drive.google.com/uc?export=view&id=${countries[key].name}">` + '</a>'  + '</div>');
      container.append('<div class="description">' + '<h2 class="h2">' + 'Description' + '</h2>' + countries[key].description  +'</div>' );

  }
