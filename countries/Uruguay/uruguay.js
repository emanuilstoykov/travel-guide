

var countries = {  
    "Accursed Moutains": { description: "Extending across vistas liberally scattered with deep river valleys, alpine lakes and national parks, the towering limestone gorges of the Accursed Mountains, or Albanian Alps, provide the perfect backdrop to one of Europe’s last great adventures. After soaking up the past in the historic town of Shkodër, the gateway to the north, our journey takes us from the breath-taking expanse of Lake Koman deep into the heart of the Valbonë Valley, also known as the ‘Miracle of the Alps’. From here we follow remote highland trails which take us through quaint mountain villages and over the imposing Bori and Valbonë passes, passing through some of the country’s most precious and unspoilt landscapes, including Theth National Park. This is an incredible adventure encompassing epic scenery, stunning walks and an insight into traditional but dying way of life", name: "10A5B1CQQ62FNUW_PZlxokuYxo0NdkeiU",},
    "Albania Riviera": { description: "The Albanian Riviera, also popularly known as Bregu, is a coastline along the Northeastern Ionian Sea in the Mediterranean Sea encompassing the districts of Sarandë and Vlorë in Southwestern Albania", name: "1vmDiUkGIWC37PaoULd8jKB51LF4TJStn",},
    "Berat": { description: "Berat weaves its own very special magic, and is easily a highlight of visiting Albania. Its most striking feature is the collection of white Ottoman houses climbing up the hill to its castle, earning it the title of 'town of a thousand windows' and helping it join Gjirokastra on the list of Unesco World Heritage sites in 2008. Its rugged mountain setting is particularly evocative when the clouds swirl around the tops of the minarets, or break up to show the icy peak of Mt Tomorri. Despite now being a big centre for tourism in Albania, Berat has managed to retain its easy-going charm and friendly atmosphere.", name: "1LQONo3U8MHrrrCPrkwGy8hySAcZFXtMH", },
    "Tirana": { description: "Lively, colourful Tirana is where this tiny nation's hopes and dreams coalesce into a vibrant whirl of traffic, brash consumerism and unfettered fun. Having undergone a transformation of extraordinary proportions since awaking from its communist slumber in the early 1990s, Tirana's centre is now unrecognisable from those grey days, with buildings painted in primary colours, and public squares and pedestrianised streets that are a pleasure to wander.",  name: "10Sbt33miCpyAWqh0Z57z6nEoQAN07w3z", },

  }
  var wrapper = $('#wrapper'), container;
  for (var key in countries){
     
   
      container = $('<div id="countries" class="container"></div>');
      wrapper.append(container);
      container.append('<div class="country">' + key +'</div>');
      container.append('<div class="images">' + `<a href="https://drive.google.com/uc?export=view&id=${countries[key].name}"><img src="https://drive.google.com/uc?export=view&id=${countries[key].name}">` + '</a>'  + '</div>');
      container.append('<div class="description">' + '<h2 class="h2">' + 'Description' + '</h2>' + countries[key].description  +'</div>' );

  }

