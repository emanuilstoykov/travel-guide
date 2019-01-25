var countries = {  
    "Rockley beach": { description: "A bustling area on the lively south coast of Barbados, Rockley is a hub of activity with many restaurants and shops. It is also home to one of the best beaches on the island - Accra Beach. You can hop aboard the boardwalk at Accra for a lovely stroll or jog. Public transport runs right through Rockley so getting to the area is very easy. Rockley is nestled between St.Lawrence Gap to the east and Hastings to the west.", name: "107NFSZVfo9zD0oufSwkf0hA3XapEaEVk",},
    "West Coast": { description: "The golden, pink and white beaches on the West Coast of Barbados are sheltered from the Atlantic Ocean's swells by the island itself, and the Caribbean Sea's gently lapping waters on this side of Barbados are mostly calm and therefore perfect for safe swimming and snorkelling.", name: "1v2HgxQuowkxfKY7Xh_Pc4jAVXXwU-LWQ",},
    "Paynes bay": { description: "Elegance and opulence blend seamlessly with casual local living in Paynes Bay. The area is home to some of the island's finest resorts and its most stunning restaurant (The Cliff) but you'll also find reasonably priced vacation rentals and laid-back eating spots. The beaches here are stunning, with calm turquoise waters gently lapping golden shores. Locals living nearby enjoy morning and evening seabaths at the fabulous Paynes Bay and Mahogany Bay", name: "1IhSjjZzra0pnBDlkm2PS6KQ-QkAprTsp", },
    

  }
  var wrapper = $('#wrapper'), container;
  for (var key in countries){
     
   
      container = $('<div id="countries" class="container"></div>');
      wrapper.append(container);
      container.append('<div class="country">' + key +'</div>');
      container.append('<div class="images">' + `<a href="https://drive.google.com/uc?export=view&id=${countries[key].name}"><img src="https://drive.google.com/uc?export=view&id=${countries[key].name}">` + '</a>'  + '</div>');
      container.append('<div class="description">' + '<h2 class="h2">' + 'Description' + '</h2>' + countries[key].description  +'</div>' );

  }