var countries = {  
    "Athens": { description: "Athens is the capital of Greece. It was also at the heart of Ancient Greece, a powerful civilization and empire. The city is still dominated by 5th-century BC landmarks, including the Acropolis, a hilltop citadel topped with ancient buildings like the colonnaded Parthenon temple. The Acropolis Museum, along with the National Archaeological Museum, preserves sculptures, vases, jewelry and more from Ancient Greece.", name: "1QJNogB6lEIjSgOzwjQ2QFDeb3u1sBnj4",},
    "Ancient Delphi": { description: "Perched high on the southern slopes of Mt. Parnassos, and overlooking the gleaming waters of the Gulf of Corinth, Delphi is without doubt the most spectacular of Greece's ancient sites. Here you can stroll the ruins of the Sanctuary of Apollo, and its great Archaeological Museum next door, where statues and treasures found on the site help bring the ruins to life. And a short walk away are still more ruins — including the Kastalian Spring and the photogenic Sanctuary of Athena, taking you back to Delphi's prehistoric origins.", name: "1AQ2WwPXxpzmS6jNsyLNKgsiHr-7cIqSy",},
    "Thessaloniki": { description: "Thessaloniki is a Greek port city on the Thermaic Gulf of the Aegean Sea. Evidence of Roman, Byzantine and Ottoman history remains, especially around Ano Poli, the upper town. The ruins of Roman Emperor Galerius’ 4th-century palace include the Rotunda that has been both a church and a mosque. Much of the city center was destroyed in the Great Fire of 1917. The rebuilt 20th-century city has a modern European layout.", name: "1b3BmuYfbrPJbJz7ulZfDBfrHpLa75adH", },
    "Samaria Gorge": { description: "Samaria National Park, a UNESCO Biosphere Reserve in the White Mountains of Crete, draws tens of thousands of visitors per year to hike the spectacular gorge at its center. While it's not the only gorge in the area, Samaria Gorge is by far the biggest—in fact, it's Europe's second-largest canyon overall.", name: "15rme_Aeggd4pTcqyHJV4cK8RYpjbiWVt",},
    "Crete": { description: "Crete, Greece's largest island, is known for its varied terrain, which ranges from fine-sand beaches at Elafonisi to the White Mountains. Mt. Ida, the tallest of the range, is home to the Ideon Cave, which was the birthplace of Zeus, according to Greek mythology. The capital, Heraklion, is home to the renowned Heraklion Archaeological Museum, housing Minoan artifacts, and Knossos, a Bronze Age settlement.", name: "1l11i-QiFA2V57pQ52SAGJQZaE74LORzd", },
    "Olympia": { description: "Olympia is a town and UNESCO World Heritage Site in Peloponnese, Greece. This was the site of the original Olympic Games from 776 BCE. The games, held every four years in honor of the Greek god Zeus, lasted through the entire Classical Age until the late 4th century CE. The central sanctuary or Altis included temples, altars, shrines, and public buildings for both religious and profane purposes. The flame for each modern Olympic Games is still lit in the town, by a reflection of sunlight in a parabolic mirror, and carried by torch to the place where the games are to be held.", name: "1S7-Tp3qfCkZV86s-LmHmIt4zdl9CT0uL",},
 
  }
  var wrapper = $('#wrapper'), container;
  for (var key in countries){
     
   
      container = $('<div id="countries" class="container"></div>');
      wrapper.append(container);
      container.append('<div class="country">' + key +'</div>');
      container.append('<div class="images">' + `<a href="https://drive.google.com/uc?export=view&id=${countries[key].name}"><img src="https://drive.google.com/uc?export=view&id=${countries[key].name}">` + '</a>'  + '</div>');
      container.append('<div class="description">' + '<h2 class="h2">' + 'Description' + '</h2>' + countries[key].description  +'</div>' );

  }
