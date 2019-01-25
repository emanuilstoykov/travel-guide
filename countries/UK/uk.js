var countries = {  
    "London": { description: "London, the capital of England and the United Kingdom, is a 21st-century city with history stretching back to Roman times. At its centre stand the imposing Houses of Parliament, the iconic ‘Big Ben’ clock tower and Westminster Abbey, site of British monarch coronations. Across the Thames River, the London Eye observation wheel provides panoramic views of the South Bank cultural complex, and the entire city(Google destination info)", name: "1bb7ze33A6NvjRBQIRn9mfdGMArG5FArA",},
    "Edinburgh": { description: "Edinburgh is Scotland's compact, hilly capital. It has a medieval Old Town and elegant Georgian New Town with gardens and neoclassical buildings. Looming over the city is Edinburgh Castle, home to Scotland’s crown jewels and the Stone of Destiny, used in the coronation of Scottish rulers. Arthur’s Seat is an imposing peak in Holyrood Park with sweeping views, and Calton Hill is topped with monuments and memorials(Google destination info)", name: "1oRKXI0U1S_RNVGWqXg051DwtIsKO_k0N",},
    "Glasgow": { description: "Glasgow is a port city on the River Clyde in Scotland's western Lowlands. It's famed for its Victorian and art nouveau architecture, a rich legacy of the city's 18th–20th-century prosperity due to trade and shipbuilding. Today it's a national cultural hub, home to institutions including the Scottish Opera, Scottish Ballet and National Theatre of Scotland, as well as acclaimed museums and a thriving music scene(Google destination info)", name: "1eB2jiC3GAP79LNbOM7NLr_l-WNarng1l", },
    "Liverpool": { description: "Liverpool is a maritime city in northwest England, where the River Mersey meets the Irish Sea. A key trade and migration port from the 18th to the early 20th centuries, it's also, famously, the hometown of The Beatles. Ferries cruise the waterfront, where the iconic mercantile buildings known as the \"Three Graces\" – Royal Liver Building, Cunard Building and Port of Liverpool Building – stand on the Pier Head(Google destination info)", name: "1x3_IgxW0tN7hpg5FbdQIdXxe49QmFHbJ", },
    "Oxford": { description: "Oxford, a city in central southern England, revolves around its prestigious university, established in the 12th century. The architecture of its 38 colleges in the city’s medieval center led poet Matthew Arnold to nickname it the 'City of Dreaming Spires'. University College and Magdalen College are off the High Street, which runs from Carfax Tower (with city views) to the Botanic Garden on the River Cherwell(Google destination info)", name: "1133ee2zqlybaAgqp04w1-uBdvqNyI4qi", },
    "Cambridge": { description: "Cambridge is a city on the River Cam in eastern England, home to the prestigious University of Cambridge, dating to 1209. University colleges include King’s, famed for its choir and towering Gothic chapel, as well as Trinity, founded by Henry VIII, and St John’s, with its 16th-century Great Gate. University museums have exhibits on archaeology and anthropology, polar exploration, the history of science and zoology(Google destination info)", name: "1JqsfYsujYPRpBpdqCS6JSD5Tt2qyusUb", },
 
  }
  var wrapper = $('#wrapper'), container;
  for (var key in countries){
     
   
      container = $('<div id="countries" class="container"></div>');
      wrapper.append(container);
      container.append('<div class="country">' + key +'</div>');
      container.append('<div class="images">' + `<a href="https://drive.google.com/uc?export=view&id=${countries[key].name}"><img src="https://drive.google.com/uc?export=view&id=${countries[key].name}">` + '</a>'  + '</div>');
      container.append('<div class="description">' + '<h2 class="h2">' + 'Description' + '</h2>' + countries[key].description  +'</div>' );

  }

