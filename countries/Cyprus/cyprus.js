var countries = {  
    "Larnaca": { description: "Larnaca (Larnarka) is a port city on the south coast of Cyprus. It's known for Finikoudes Beach, a sandy strip in the city center backed by a palm-lined seaside promenade. Buzzing bars line the waterfront at Mackenzie Beach. Just offshore, the MS Zenobia wreck is a popular dive site. The 9th-century Church of Saint Lazarus contains the tomb of the saint said to have risen from the dead(Google destination info)", name: "1liTBzRfU1snPvfGLnfxSFqzw8OyI3D_h",},
    "Limassol": { description: "Limassol is a city on the southern coast of Cyprus. It’s known for the centuries-old Limassol Castle, home to the Cyprus Medieval Museum and its collection of pottery and tombstones. On the seafront is the Prokymea (Molos) Sculpture Park, with sculptures by Cypriot, Greek and international artists. To the northeast is the Limassol Archaeological Museum, exhibiting artifacts from the Neolithic to the Roman periods(Google destination info)", name: "1HIXK8VPi7Pj4rF0s5m_0CbnB07zYISdF",},
    "Nicosia": { description: "Nicosia, also known as Lefkosia, is the divided capital city of Cyprus. South of the border, on the Greek side, the Cyprus Museum has archaeological finds from the Neolithic to Byzantine periods, including the Aphrodite of Soloi statue. Nearby, the old city’s 16th-century Venetian walls include the Famagusta, Kyrenia and Paphos gates. Inside the walls, a marble mausoleum sits next to 19th-century Faneromeni Church(Google destination info)", name: "1XgOkVejGx5GNqKIJZt63o4o9D3Dlb4e0", },    
    "Paphos": { description: "Paphos is a city on the southwest coast of the Mediterranean island of Cyprus. Inhabited since Neolithic times, it has several sites relating to the cult of goddess Aphrodite, whose mythical birthplace was at Old Paphos (Kouklia). New Paphos is the modern city that incorporates the harbor, and the ancient ruins of tombs, fortresses, theaters and villas at Paphos Archaeological Park(Google destination info)", name: "1-GyCeuAn_WkFz96aq3RBnZRz60yu0paM",},
    
  }
  var wrapper = $('#wrapper'), container;
  for (var key in countries){
     
   
      container = $('<div id="countries" class="container"></div>');
      wrapper.append(container);
      container.append('<div class="country">' + key +'</div>');
      container.append('<div class="images">' + `<a href="https://drive.google.com/uc?export=view&id=${countries[key].name}"><img src="https://drive.google.com/uc?export=view&id=${countries[key].name}">` + '</a>'  + '</div>');
      container.append('<div class="description">' + '<h2 class="h2">' + 'Description' + '</h2>' + countries[key].description  +'</div>' );

  }
