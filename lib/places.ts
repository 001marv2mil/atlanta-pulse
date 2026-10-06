// Atlanta spots organized by category and neighborhood
// Used to populate programmatic SEO pages with evergreen content.
// Descriptions are intentionally generic: no hours, prices, addresses, or ratings.
// Check each official site for current details. Places outside the listed
// neighborhoods use the catch-all slug "metro-atlanta".

export interface Place {
  name: string;
  description: string;
  vibe: string;
  neighborhood: string;
  category: string;
  tag?: string;
}

export const PLACES: Place[] = [
  // FOOD - Old Fourth Ward
  { name: "Ponce City Market", description: "Food hall and shops in a huge historic building on the BeltLine Eastside Trail. Come hungry, wander, and sample from a few different stalls.", vibe: "Food Hall", neighborhood: "old-fourth-ward", category: "food", tag: "Iconic" },
  { name: "Coffee Along the Eastside Trail", description: "Cafes and coffee bars sit along and near the BeltLine Eastside Trail. Grab a cup for the walk.", vibe: "Coffee Stop", neighborhood: "old-fourth-ward", category: "food", tag: "Coffee" },

  // FOOD - Inman Park
  { name: "Krog Street Market", description: "A food hall in a converted industrial building, steps from the BeltLine in Inman Park. Walk the trail, then eat.", vibe: "Market Hall", neighborhood: "inman-park", category: "food", tag: "Unique" },

  // FOOD - Sweet Auburn
  { name: "Sweet Auburn Curb Market", description: "A long-running indoor market with food stalls and produce vendors. A good lunch stop when you're exploring downtown.", vibe: "Historic Market", neighborhood: "sweet-auburn", category: "food", tag: "Local Institution" },

  // FOOD - Midtown
  { name: "The Varsity", description: "A classic Atlanta drive-in known for chili dogs, onion rings, and frosted orange shakes. A rite of passage for visitors and locals alike.", vibe: "Drive-In Classic", neighborhood: "midtown", category: "food", tag: "Iconic" },
  { name: "Mary Mac's Tea Room", description: "Southern comfort food in a traditional dining-room setting. A longtime Atlanta stop for fried chicken, collards, and sweet tea.", vibe: "Southern Classic", neighborhood: "midtown", category: "food", tag: "Local Institution" },

  // FOOD - Buford Highway
  { name: "Buford Highway Food Corridor", description: "A long stretch of strip-mall restaurants serving cuisines from all over the world. Pick a stretch, bring friends, and order a little of everything.", vibe: "Global Eats", neighborhood: "metro-atlanta", category: "food", tag: "Hidden Gem" },

  // FOOD - Decatur
  { name: "Decatur Square", description: "A walkable square ringed with independent restaurants, cafes, and bars. Easy to spend an afternoon wandering.", vibe: "Walkable", neighborhood: "decatur", category: "food" },
  { name: "Decatur Coffee Stops", description: "Independent cafes around the square. Good for a laptop morning or a slow weekend wander.", vibe: "Local Cafes", neighborhood: "decatur", category: "food", tag: "Coffee" },

  // FOOD - Virginia-Highland
  { name: "Virginia-Highland Neighborhood Dining", description: "Cozy neighborhood restaurants and patios clustered around the main intersections. Good for a casual dinner followed by a walk.", vibe: "Neighborhood", neighborhood: "virginia-highland", category: "food" },

  // FOOD - Little Five Points
  { name: "Little Five Points Eats", description: "Casual, independent-minded eateries and late-night bites around the main intersection.", vibe: "Casual", neighborhood: "little-five-points", category: "food" },

  // FOOD - East Atlanta Village
  { name: "East Atlanta Village Eats", description: "Casual restaurants and neighborhood joints along the main drag, an easy pairing with a night out.", vibe: "Neighborhood", neighborhood: "east-atlanta-village", category: "food" },

  // FOOD - West Midtown
  { name: "West Midtown Restaurants", description: "Restaurants in repurposed warehouses and industrial buildings, with shops and design stores nearby.", vibe: "Industrial Chic", neighborhood: "west-midtown", category: "food" },

  // FOOD - Westside
  { name: "Westside BeltLine Eats", description: "Restaurants and shops in repurposed industrial space near the BeltLine Westside Trail.", vibe: "Trail-Adjacent", neighborhood: "westside", category: "food" },

  // FOOD - Buckhead
  { name: "Buckhead Dining", description: "Upscale restaurants, steakhouses, and a polished dining scene close to major shopping.", vibe: "Upscale", neighborhood: "buckhead", category: "food" },

  // FOOD - Grant Park
  { name: "Grant Park Eats", description: "Casual neighborhood restaurants and cafes near Zoo Atlanta, the park, and Oakland Cemetery.", vibe: "Neighborhood", neighborhood: "grant-park", category: "food" },

  // FOOD - Edgewood
  { name: "Edgewood Avenue Eats", description: "Casual restaurants mixed in with the bars along Edgewood Avenue. Eat first, then bar hop.", vibe: "Casual", neighborhood: "edgewood", category: "food" },

  // FOOD - Cabbagetown / Kirkwood
  { name: "Cabbagetown Cafes", description: "Cafes and casual spots in a small historic neighborhood, plus murals worth wandering past.", vibe: "Lowkey", neighborhood: "cabbagetown", category: "food" },
  { name: "Kirkwood Neighborhood Eats", description: "Neighborhood restaurants and coffee shops in a leafy residential area.", vibe: "Neighborhood", neighborhood: "kirkwood", category: "food" },

  // NIGHTLIFE - Edgewood
  { name: "Edgewood Avenue Bars", description: "A stretch of bars and clubs known for bar hopping. Dive bars, cocktail bars, and live music in one walkable strip.", vibe: "Bar Hopping", neighborhood: "edgewood", category: "nightlife", tag: "Local Institution" },

  // NIGHTLIFE - East Atlanta Village
  { name: "East Atlanta Village Nights", description: "Dive bars, neighborhood pubs, and small venues, including The Earl, make this a good eastside night out.", vibe: "Neighborhood Bars", neighborhood: "east-atlanta-village", category: "nightlife" },

  // NIGHTLIFE - Little Five Points
  { name: "Little Five Points After Dark", description: "Dive bars, live music, and people-watching at one of Atlanta's most independent-minded intersections.", vibe: "Eclectic", neighborhood: "little-five-points", category: "nightlife", tag: "Unique" },

  // NIGHTLIFE - Virginia-Highland
  { name: "Virginia-Highland Patios", description: "Patio bars and neighborhood pubs. A relaxed night out with plenty of walkable options.", vibe: "Patio", neighborhood: "virginia-highland", category: "nightlife" },

  // NIGHTLIFE - Midtown
  { name: "Midtown Rooftops and Lounges", description: "Rooftop bars and cocktail lounges with skyline views. Dress up a little and go after sunset.", vibe: "Rooftop", neighborhood: "midtown", category: "nightlife", tag: "Rooftop" },

  // NIGHTLIFE - Buckhead
  { name: "Buckhead Nightlife", description: "Lounges, clubs, and upscale bars. Dress codes and cover policies vary, so check ahead.", vibe: "Upscale Nightlife", neighborhood: "buckhead", category: "nightlife" },

  // NIGHTLIFE - West Midtown
  { name: "West Midtown Breweries and Cocktail Bars", description: "Craft breweries and cocktail bars in converted industrial buildings.", vibe: "Craft Beer", neighborhood: "west-midtown", category: "nightlife" },

  // NIGHTLIFE - Decatur
  { name: "Decatur Square Bars", description: "Cozy bars and pubs within walking distance of the square, plus a few music rooms.", vibe: "Neighborhood", neighborhood: "decatur", category: "nightlife" },

  // NIGHTLIFE - Downtown
  { name: "Downtown Game-Day Bars", description: "Bars and lounges close to Mercedes-Benz Stadium and State Farm Arena, busy before and after events.", vibe: "Pre-Game", neighborhood: "downtown", category: "nightlife" },

  // NIGHTLIFE - Old Fourth Ward
  { name: "Old Fourth Ward Late Night", description: "Bars and late-night spots near Ponce City Market and the BeltLine. Walk the trail first.", vibe: "Lowkey", neighborhood: "old-fourth-ward", category: "nightlife" },

  // NIGHTLIFE - Poncey-Highland
  { name: "Poncey-Highland Pubs and Cocktail Bars", description: "Neighborhood pubs and cocktail bars along Ponce de Leon Avenue.", vibe: "Neighborhood", neighborhood: "poncey-highland", category: "nightlife" },

  // EVENTS - Annual and recurring (check official sites for dates)
  { name: "Atlanta Dogwood Festival", description: "A long-running festival with art, music, and food in Piedmont Park. Check the official site for dates.", vibe: "Festival", neighborhood: "midtown", category: "events", tag: "Annual" },
  { name: "Peachtree Road Race", description: "Atlanta's best-known annual road race, with spectators lining Peachtree Street. Check the official site for dates and registration.", vibe: "Road Race", neighborhood: "buckhead", category: "events", tag: "Annual" },
  { name: "Dragon Con", description: "A huge annual fan convention with a famous parade through Downtown. Check the official site for dates and details.", vibe: "Convention", neighborhood: "downtown", category: "events", tag: "Only in Atlanta" },
  { name: "Atlanta Pride", description: "An annual pride festival and parade centered around Piedmont Park and Midtown. Check the official site for dates.", vibe: "Festival", neighborhood: "midtown", category: "events", tag: "Annual" },
  { name: "Piedmont Park Events", description: "Festivals, markets, and community gatherings take place at Piedmont Park throughout the year. Check the park's official calendar.", vibe: "Outdoor", neighborhood: "midtown", category: "events" },
  { name: "Centennial Olympic Park Events", description: "Seasonal events and gatherings at the downtown park. Check the park's official calendar for what's on.", vibe: "Outdoor", neighborhood: "downtown", category: "events" },
  { name: "Stone Mountain Park Events", description: "Seasonal events and attractions east of the city. Check the park's official site for what's scheduled.", vibe: "Outdoor", neighborhood: "metro-atlanta", category: "events" },

  // THINGS TO DO - Parks, attractions, and game days
  { name: "Atlanta BeltLine Eastside Trail", description: "A paved trail linking Piedmont Park, Old Fourth Ward, Inman Park, and Reynoldstown, with murals, restaurants, and city views along the way. Walk, run, or bike it.", vibe: "Urban Trail", neighborhood: "old-fourth-ward", category: "things-to-do", tag: "Iconic" },
  { name: "Piedmont Park", description: "Atlanta's best-known park, with open lawns, trails, a dog park, and skyline views.", vibe: "Green Space", neighborhood: "midtown", category: "things-to-do", tag: "Iconic" },
  { name: "Atlanta Botanical Garden", description: "Gardens and conservatories next to Piedmont Park, with seasonal displays and a canopy walk.", vibe: "Gardens", neighborhood: "midtown", category: "things-to-do" },
  { name: "Georgia Aquarium", description: "A huge aquarium known for its whale sharks and manta rays. Great for families and out-of-town guests.", vibe: "Attraction", neighborhood: "downtown", category: "things-to-do" },
  { name: "Centennial Olympic Park", description: "Downtown green space built for the 1996 Olympic Games, with a fountain and views of nearby attractions.", vibe: "Downtown Park", neighborhood: "downtown", category: "things-to-do" },
  { name: "World of Coca-Cola", description: "A museum-style attraction about the Coca-Cola brand, with a tasting area. Fun for visitors.", vibe: "Attraction", neighborhood: "downtown", category: "things-to-do" },
  { name: "Zoo Atlanta", description: "A family-friendly zoo in Grant Park with animals from around the world.", vibe: "Family", neighborhood: "grant-park", category: "things-to-do" },
  { name: "Oakland Cemetery", description: "A historic Victorian-era cemetery with gardens, sculpture, and skyline views. A calm place to wander.", vibe: "Historic", neighborhood: "grant-park", category: "things-to-do", tag: "Hidden Gem" },
  { name: "Fernbank Museum of Natural History", description: "A natural history museum in the Druid Hills area with dinosaur skeletons and a woodland setting. A good rainy-day option.", vibe: "Museum", neighborhood: "metro-atlanta", category: "things-to-do" },
  { name: "Stone Mountain Park", description: "A huge granite monolith east of the city with hiking trails and wide views. Check the park's official site for entry details.", vibe: "Outdoors", neighborhood: "metro-atlanta", category: "things-to-do" },
  { name: "Chattahoochee River National Recreation Area", description: "River access, trails, and paddling spots along the Chattahoochee, a short drive from the city.", vibe: "River", neighborhood: "metro-atlanta", category: "things-to-do" },
  { name: "Martin Luther King Jr. National Historical Park", description: "A national park site honoring Dr. Martin Luther King Jr., including his birth home and Ebenezer Baptist Church. Check the official site for visiting details.", vibe: "History", neighborhood: "sweet-auburn", category: "things-to-do", tag: "Must Experience" },
  { name: "Mercedes-Benz Stadium", description: "Home of the Atlanta Falcons and Atlanta United, plus major concerts and events.", vibe: "Stadium", neighborhood: "downtown", category: "things-to-do", tag: "NFL" },
  { name: "State Farm Arena", description: "Home of the Atlanta Hawks, and a stop for big touring concerts and shows.", vibe: "Arena", neighborhood: "downtown", category: "things-to-do", tag: "NBA" },
  { name: "Truist Park", description: "Home of the Atlanta Braves, with The Battery Atlanta restaurant and entertainment district right next door.", vibe: "Ballpark", neighborhood: "metro-atlanta", category: "things-to-do", tag: "MLB" },
  { name: "Lenox Square", description: "A major Buckhead shopping destination with department stores and national brands.", vibe: "Shopping", neighborhood: "buckhead", category: "things-to-do" },

  // MUSIC - Venues (check each venue's calendar for what's on)
  { name: "Fox Theatre", description: "A historic 1920s movie palace with an ornate interior, now hosting touring concerts and Broadway-style shows.", vibe: "Historic Theater", neighborhood: "midtown", category: "music", tag: "Iconic" },
  { name: "Tabernacle", description: "A former church turned mid-sized concert hall in Downtown Atlanta.", vibe: "Concert Hall", neighborhood: "downtown", category: "music" },
  { name: "Variety Playhouse", description: "A long-running music venue in the heart of Little Five Points.", vibe: "Music Venue", neighborhood: "little-five-points", category: "music" },
  { name: "The Earl", description: "A small club for indie, rock, and punk shows, with a casual neighborhood-bar feel.", vibe: "Indie Club", neighborhood: "east-atlanta-village", category: "music", tag: "Hidden Gem" },
  { name: "Terminal West", description: "A mid-sized concert venue in a converted industrial building in West Midtown.", vibe: "Music Venue", neighborhood: "west-midtown", category: "music" },
  { name: "Eddie's Attic", description: "A listening room in Decatur known for singer-songwriters.", vibe: "Listening Room", neighborhood: "decatur", category: "music" },
  { name: "Buckhead Theatre", description: "A historic theater turned concert venue in Buckhead.", vibe: "Historic Theater", neighborhood: "buckhead", category: "music" },
  { name: "Atlanta Symphony Orchestra", description: "Atlanta's symphony, performing at Symphony Hall at the Woodruff Arts Center in Midtown. Check the official site for the season.", vibe: "Orchestra", neighborhood: "midtown", category: "music" },

  // ARTS - Museums, theater, and murals
  { name: "High Museum of Art", description: "A major art museum at the Woodruff Arts Center in Midtown, with rotating exhibitions and a permanent collection.", vibe: "Museum", neighborhood: "midtown", category: "arts", tag: "Iconic" },
  { name: "Alliance Theatre", description: "Professional theater at the Woodruff Arts Center in Midtown, with a mix of new and classic productions.", vibe: "Theater", neighborhood: "midtown", category: "arts" },
  { name: "Center for Puppetry Arts", description: "A museum and theater dedicated to puppetry, popular with families.", vibe: "Puppetry", neighborhood: "midtown", category: "arts", tag: "Unique" },
  { name: "Atlanta History Center", description: "A museum and grounds in Buckhead covering the story of Atlanta and the South. Check the official site for exhibits and gardens.", vibe: "History Museum", neighborhood: "buckhead", category: "arts" },
  { name: "National Center for Civil and Human Rights", description: "A museum next to Centennial Olympic Park focused on the American civil rights movement and global human rights.", vibe: "Museum", neighborhood: "downtown", category: "arts" },
  { name: "Little Five Points Murals and Shops", description: "Murals, vintage stores, record shops, and indie boutiques around the main intersection.", vibe: "Street Art", neighborhood: "little-five-points", category: "arts" },
  { name: "Cabbagetown Murals", description: "A small historic neighborhood known for colorful murals and a close-knit feel.", vibe: "Street Art", neighborhood: "cabbagetown", category: "arts", tag: "Hidden Gem" },
];

export function getPlacesByNeighborhoodAndCategory(neighborhood: string, category: string): Place[] {
  const direct = PLACES.filter(p => p.neighborhood === neighborhood && p.category === category);
  if (direct.length >= 3) return direct;
  // Fall back to category-wide picks if neighborhood has fewer than 3
  const categoryWide = PLACES.filter(p => p.category === category && !direct.find(d => d.name === p.name));
  return [...direct, ...categoryWide].slice(0, 6);
}

export function getPlacesByCategory(category: string): Place[] {
  return PLACES.filter(p => p.category === category);
}
