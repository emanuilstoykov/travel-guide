

var countries = {  
    "Sydney": { description: "Sydney is a cosmopolitan city surrounded by iconic beaches, world heritage sites, and acclaimed wine regions. Besides being Australia’s largest city, Sydney is also its’ most visited. (And, contrary to popular belief, not the country’s capital!) With an incredible variety of attractions and sights to see, including the very famous Bondi and Manly beaches, it’s easy to see why people come here and stay a while—try to stay at least a week if you can. As you will see from this travel guide, there is a lot to do in Sydney. It’s worth a long stay.", name: "1zX4VNXWYvcjRjOnWngOjTOZl7bkPcscQ",},
    "Uluru": { description: "The massive, rust-red rock rising from the dry ground in the middle of Australia is a sight that leaves most people in awe. Indeed, it's such a unique structure that the Anangu tribe, an Aboriginal people of Australia, have considered it a sacred site for 10,000 years or more. Uluru goes by two names. The common name is Ayers Rock, named after Sir Henry Ayers by William Gosse in 1873. However, the Aboriginal name for the rock, Uluru, is its official name. But no matter what you call it, it's clear this vividly red monolith is a popular destination for travelers.", name: "14pJlpQV8qDi62ZEh6hJ3iCvHR9_pz30d",},
    "Melbourne": { description: "Its charms may be more subtle than those of its flashy northern sister, Sydney, but Melbourne is a city that rewards inquisitive travelers. With streets built around a grid system, the coastal capital of Victoria is both easy to navigate and full of surprises. The city is known for being both scenic and cosmopolitan, with a thriving arts scene and diverse, dynamic inhabitants. Its tiny alleys and laneways (charming, narrow passageways open only to pedestrians) hide numerous treasures, from small bars and award-winning restaurants to striking street art and unique shops. Melbourne has the most European vibe of any Australian city, and that’s not just thanks to the Eiffel Tower–style structure lording over the Arts Centre. A huge number of theaters, art galleries boasting impressive international and local collections, and plenty of innovative architecture offer cultural digressions, particularly when the fickle weather turns.", name: "1JvC4R9Ypz8IZYx3FW9dp6w53Gq00yTsd", },
    "The Great Barrier Reef": { description: "Each year, more than 1.5 million visitors come to experience this World Heritage–listed area that stretches across 2000km of coastline. Diving and snorkelling are just some of the ways of experiencing this wonderfully rich ecosystem. There's also sailing, scenic flights and a world of DIY options for exploring the reef’s gateway towns and stunning islands.",  name: "1sxvPw09ShRJxUAoTA_BxJpeoVFQaF-zu", },
    "Whitsundays": { description: "The Whitsundays are made up of 74 Island Wonders, on the beautiful tropical coast of Queensland, Australia. Right in the heart of the Great Barrier Reef, a visit to the Whitsundays is a feast for the senses. The stunning natural landscapes of coast and islands are dotted with secluded beaches and friendly towns. Whether you choose to base yourself on the coast or on the islands, there's so much to do, you'll have to work out how to fit it all in!",  name: "16Y5N-S46EutYGGmOx03npFiePx1ssG8a", },

  }
  var wrapper = $('#wrapper'), container;
  for (var key in countries){
     
   
      container = $('<div id="countries" class="container"></div>');
      wrapper.append(container);
      container.append('<div class="country">' + key +'</div>');
      container.append('<div class="images">' + `<a href="https://drive.google.com/uc?export=view&id=${countries[key].name}"><img src="https://drive.google.com/uc?export=view&id=${countries[key].name}">` + '</a>'  + '</div>');
      container.append('<div class="description">' + '<h2 class="h2">' + 'Description' + '</h2>' + countries[key].description  +'</div>' );

  }

