var countries = {  
    "Berlin": { description: "Berlin, Germany’s capital, dates to the 13th century. Reminders of the city's turbulent 20th-century history include its Holocaust memorial and the Berlin Wall's graffitied remains. Divided during the Cold War, its 18th-century Brandenburg Gate has become a symbol of reunification. The city's also known for its art scene and modern landmarks like the gold-colored, swoop-roofed Berliner Philharmonie, built in 1963(Google destination info)", name: "1N5LFVsqd1sq4fzuGowN3kFAPYp0qIE8a",},
    "Munich": { description: "Munich, Bavaria’s capital, is home to centuries-old buildings and numerous museums. The city is known for its annual Oktoberfest celebration and its beer halls, including the famed Hofbrauhaus, founded in 1589. In the Altstadt (Old Town), central Marienplatz square contains landmarks such as Neo-Gothic Neues Rathaus (town hall), with a popular glockenspiel sho(Google destination info)", name: "140xlSuUn09FGYuXG0FTG9pa3BDV1P8lB",},
    "Octoberfest Munich": { description: "The Munich Oktoberfest justly lays claim to being the world’s largest folk festival (yes, it’s not just about drinking beer). Over the past decade it has attracted an average of around six million visitors a year, who between them consume almost seven million litres of beer and munch their way through thousands of grilled sausages, chickens, giant pretzels and – for those really wanting to soak it all up – wild oxen(Google destination info)", name: "17DvOhLJu35VO6mOJfDJx7KxHu6cTb78e", },
    "Black Forest": { description: "The Black Forest is a mountainous region in southwest Germany, bordering France. Known for its dense, evergreen forests and picturesque villages, it is often associated with the Brothers Grimm fairy tales. It's renowned for its spas and the cuckoo clocks produced in the region since the 1700s. The region’s largest town, Freiburg, is filled with Gothic buildings and surrounded by vineyards(Google destination info)", name: "1J95cFvay2lii9KXX43UlQ1Z_jm98HeyR",},
    "Dresden": { description: "Dresden, capital of the eastern German state of Saxony, is distinguished by the celebrated art museums and classic architecture of its reconstructed old town. Completed in 1743 and rebuilt after WWII, the baroque church Frauenkirche is famed for its grand dome. The Versailles-inspired Zwinger palace houses museums including Gemaldegalerie Alte Meister, exhibiting masterpieces of art like Raphael’s “Sistine Madonna”(Google destination info)", name: "1lDg6PTUCRRc2k8S0CUzkvYrf4LcUbxm6", },
    "Cologne": { description: "Cologne, a 2,000-year-old city spanning the Rhine River in western Germany, is the region’s cultural hub. A landmark of High Gothic architecture set amid reconstructed old town, the twin-spired Cologne Cathedral is also known for its gilded medieval reliquary and sweeping river views. The adjacent Museum Ludwig showcases 20th-century art, including many masterpieces by Picasso, and the Romano-Germanic Museum houses Roman antiquities(Google destination info)", name: "1hy2KMgnUBsIEQh2pbqmQj2PIsmPCYiTm",},
    "Nuremberg": { description: "Nuremberg, a city in northern Bavaria, is distinguished by medieval architecture such as the fortifications and stone towers of its Altstadt (Old Town). At the northern edge of the Altstadt, surrounded by red-roofed buildings, stands Kaiserburg Castle. The Hauptmarkt (central square) contains the Schoner Brunnen, the gilded “beautiful fountain” with tiers of figures, and Frauenkirche, a 14th-century Gothic church(Google destination info)", name: "1rNohJh48ehiaZy6chfRKzBuKK9D-X_iq", },
      

  }
  var wrapper = $('#wrapper'), container;
  for (var key in countries){
     
   
      container = $('<div id="countries" class="container"></div>');
      wrapper.append(container);
      container.append('<div class="country">' + key +'</div>');
      container.append('<div class="images">' + `<a href="https://drive.google.com/uc?export=view&id=${countries[key].name}"><img src="https://drive.google.com/uc?export=view&id=${countries[key].name}">` + '</a>'  + '</div>');
      container.append('<div class="description">' + '<h2 class="h2">' + 'Description' + '</h2>' + countries[key].description  +'</div>' );

  }
