// Shared SEO data: neighborhoods, categories, modifiers
// Used across programmatic SEO pages, FAQ pages, and sitemap
// Descriptions are deliberately evergreen: no hours, prices, addresses, or "new" claims.

export const NEIGHBORHOODS = [
  { slug: "midtown", name: "Midtown", description: "Atlanta's arts and culture district. Piedmont Park, the High Museum of Art, the Fox Theatre, and the Atlanta Botanical Garden, plus plenty of restaurants and bars." },
  { slug: "downtown", name: "Downtown", description: "Atlanta's urban core. Centennial Olympic Park, the Georgia Aquarium, Mercedes-Benz Stadium, State Farm Arena, and the Sweet Auburn Curb Market nearby." },
  { slug: "buckhead", name: "Buckhead", description: "Atlanta's upscale northside district, known for shopping, polished restaurants, lounges, and nightlife." },
  { slug: "old-fourth-ward", name: "Old Fourth Ward", description: "A walkable intown neighborhood anchored by Ponce City Market and the BeltLine Eastside Trail, with restaurants, bars, and street art." },
  { slug: "inman-park", name: "Inman Park", description: "One of Atlanta's oldest neighborhoods. Victorian homes, tree-lined streets, Krog Street Market, and quick access to the BeltLine Eastside Trail." },
  { slug: "virginia-highland", name: "Virginia-Highland", description: "A walkable intown neighborhood of bungalows, small shops, restaurants, and patios near Piedmont Park and the BeltLine." },
  { slug: "little-five-points", name: "Little Five Points", description: "Atlanta's eclectic, independent-minded district. Vintage shops, record stores, murals, and live music at Variety Playhouse." },
  { slug: "east-atlanta-village", name: "East Atlanta Village", description: "A lively eastside neighborhood known for small music venues like The Earl, neighborhood bars, and independent restaurants." },
  { slug: "west-midtown", name: "West Midtown", description: "A former industrial area now full of restaurants, design shops, and venues like Terminal West, just northwest of Midtown." },
  { slug: "decatur", name: "Decatur", description: "A walkable city just east of Atlanta, with a historic square, independent restaurants, cafes, and music rooms." },
  { slug: "grant-park", name: "Grant Park", description: "A historic neighborhood of Victorian homes, home to Zoo Atlanta and the park it is named for, with Oakland Cemetery nearby." },
  { slug: "reynoldstown", name: "Reynoldstown", description: "An intown neighborhood east of Downtown along the BeltLine, with murals, local restaurants, and easy trail access." },
  { slug: "cabbagetown", name: "Cabbagetown", description: "A small, historic mill-worker neighborhood just east of Downtown, known for colorful murals and a close-knit feel." },
  { slug: "sweet-auburn", name: "Sweet Auburn", description: "A historic Black business and cultural district downtown, home to the Sweet Auburn Curb Market and landmarks tied to Dr. Martin Luther King Jr.'s legacy." },
  { slug: "poncey-highland", name: "Poncey-Highland", description: "An intown neighborhood along Ponce de Leon Avenue, between Virginia-Highland, Inman Park, and the BeltLine Eastside Trail." },
  { slug: "edgewood", name: "Edgewood", description: "An eastside Atlanta neighborhood known for the Edgewood Avenue corridor of bars, restaurants, and live music, close to the BeltLine." },
  { slug: "kirkwood", name: "Kirkwood", description: "A residential eastside neighborhood with leafy streets, a local business district, and an easygoing community feel." },
  { slug: "westside", name: "Westside", description: "Atlanta's west side, with the BeltLine Westside Trail, converted industrial buildings, and a growing mix of restaurants and shops." },
] as const;

export const CATEGORIES = [
  { slug: "events", name: "Events", emoji: "🎉", description: "Festivals, markets, pop-ups, community gatherings, and everything happening this weekend." },
  { slug: "food", name: "Food & Restaurants", emoji: "🍽️", description: "Hidden gems, food halls, global eats, and the spots locals actually eat at." },
  { slug: "nightlife", name: "Nightlife", emoji: "🌙", description: "Rooftop bars, craft cocktail spots, live music venues, and late nights worth having." },
  { slug: "things-to-do", name: "Things To Do", emoji: "🗺️", description: "Activities, attractions, experiences, and everything worth doing this weekend." },
  { slug: "music", name: "Live Music", emoji: "🎵", description: "Concerts, shows, open mics, and who's playing in Atlanta this week." },
  { slug: "arts", name: "Arts & Culture", emoji: "🎨", description: "Gallery openings, theater, museums, cultural festivals, and the creative scene." },
] as const;

export const MODIFIERS = [
  { slug: "this-weekend", name: "This Weekend", label: "weekend picks" },
  { slug: "tonight", name: "Tonight", label: "tonight's picks" },
  { slug: "free", name: "Free", label: "free options" },
  { slug: "best", name: "Best", label: "top picks" },
  { slug: "near-me", name: "Near Me", label: "nearby" },
  { slug: "open-now", name: "Open Now", label: "open now" },
  { slug: "open-late", name: "Open Late", label: "late night" },
  { slug: "happy-hour", name: "Happy Hour", label: "happy hour deals" },
  { slug: "brunch", name: "Brunch", label: "brunch spots" },
  { slug: "romantic", name: "Romantic", label: "date night picks" },
] as const;

export const FAQ_SLUGS = [
  "things-to-do-in-atlanta-this-weekend",
  "free-things-to-do-in-atlanta",
  "best-restaurants-in-atlanta",
  "atlanta-nightlife-guide",
  "family-friendly-atlanta",
  "atlanta-arts-scene",
  "atlanta-sports-events",
  "atlanta-outdoor-activities",
  "atlanta-music-venues",
  "atlanta-food-scene",
  "best-brunch-atlanta",
  "atlanta-happy-hour",
  "atlanta-date-night-ideas",
  "atlanta-hidden-gems",
  "moving-to-atlanta",
] as const;

export type NeighborhoodSlug = (typeof NEIGHBORHOODS)[number]["slug"];
export type CategorySlug = (typeof CATEGORIES)[number]["slug"];
export type ModifierSlug = (typeof MODIFIERS)[number]["slug"];
export type FaqSlug = (typeof FAQ_SLUGS)[number];

export function getNeighborhood(slug: string) {
  return NEIGHBORHOODS.find((n) => n.slug === slug) ?? null;
}

export function getCategory(slug: string) {
  return CATEGORIES.find((c) => c.slug === slug) ?? null;
}

export function isNeighborhood(slug: string): boolean {
  return NEIGHBORHOODS.some((n) => n.slug === slug);
}

export function isCategory(slug: string): boolean {
  return CATEGORIES.some((c) => c.slug === slug);
}

export function isModifier(slug: string): boolean {
  return MODIFIERS.some((m) => m.slug === slug);
}

export function getModifier(slug: string) {
  return MODIFIERS.find((m) => m.slug === slug) ?? null;
}

export function slugToTitle(slug: string): string {
  return slug
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}
