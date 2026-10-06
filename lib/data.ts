export interface Event {
  id: string;
  title: string;
  category: string;
  date: string;
  time?: string;
  location?: string;
  description?: string;
  image: string;
  isPremium?: boolean;
}

export interface DigestItem {
  id: string;
  text: string;
}

export interface HiddenGem {
  id: string;
  name: string;
  tagline: string;
  description: string;
  image: string;
}

export interface LiveMusic {
  id: string;
  artist: string;
  venue: string;
  date: string;
  image: string;
}

export interface NewsletterIssue {
  id: string;
  number: number;
  date: string;
  title: string;
  image: string;
  eventCount: number;
}

export interface Category {
  name: string;
  icon: string;
  description: string;
  count: number;
}

export interface PollOption {
  id: string;
  text: string;
  votes: number;
}

export interface CommunityResponse {
  id: string;
  name: string;
  text: string;
  date: string;
}

export interface CommunityPost {
  id: string;
  type: "poll" | "question" | "announcement" | "community_event";
  title: string;
  content: string;
  date: string;
  author: string;
  pollOptions?: PollOption[];
  responses?: CommunityResponse[];
  interestedCount?: number;
  eventDate?: string;
  eventLocation?: string;
  image?: string;
  pinned?: boolean;
}

export interface Headline {
  id: string;
  category: string;
  text: string;
}

// Evergreen headlines only. No dates, closures, or "new opening" claims.
export const headlines: Headline[] = [
  { id: "h1", category: "NOW", text: "Atlanta Pulse is just getting started. Join the list for one email every Thursday." },
  { id: "h2", category: "TRAFFIC", text: "Crossing town? The Downtown Connector gets tight around games and concerts. Give yourself extra time or look at MARTA." },
  { id: "h3", category: "THIS WEEKEND", text: "Check the Fox Theatre, Variety Playhouse, The Earl, and Terminal West calendars to see who's playing this weekend." },
  { id: "h4", category: "FYI", text: "The BeltLine Eastside Trail connects Piedmont Park, Old Fourth Ward, Inman Park, and Reynoldstown. Great for a weekend walk." },
  { id: "h5", category: "HEADS UP", text: "Game day at Mercedes-Benz Stadium, State Farm Arena, or Truist Park? Check the schedule and plan your parking." },
  { id: "h6", category: "FYI", text: "Buford Highway is one of the best places in the metro for global food. Pick a stretch and start eating." },
  { id: "h7", category: "HEADS UP", text: "Peachtree Road Race, Dragon Con, and Atlanta Pride all have official sites with dates and details. Check them before you plan." },
  { id: "h8", category: "THIS WEEKEND", text: "Piedmont Park and Centennial Olympic Park both share events on their official sites. Worth a look before you head out." },
];

// Launch-stage community feed: no subscriber counts, no reader quotes, no fake votes.
export const communityPosts: CommunityPost[] = [
  {
    id: "cp1",
    type: "announcement",
    title: "Welcome to Atlanta Pulse",
    content: "Atlanta Pulse is a brand-new weekly newsletter: the cheat code to what's worth doing in Atlanta, in one email every Thursday. Events, food, nightlife, and hidden gems, written like a friend who actually goes out. We're just getting started, so tell us what you want to see.",
    date: "Launch week",
    author: "Atlanta Pulse Team",
    pinned: true,
  },
  {
    id: "cp2",
    type: "poll",
    title: "Which neighborhood should we dig into first?",
    content: "We're mapping out Atlanta one neighborhood at a time. Tell us where you want the Pulse to start.",
    date: "Launch week",
    author: "Atlanta Pulse Team",
    pollOptions: [
      { id: "p1", text: "Old Fourth Ward", votes: 0 },
      { id: "p2", text: "Little Five Points", votes: 0 },
      { id: "p3", text: "East Atlanta Village", votes: 0 },
      { id: "p4", text: "West Midtown", votes: 0 },
    ],
  },
  {
    id: "cp3",
    type: "question",
    title: "What should the Pulse cover first?",
    content: "Events, food, nightlife, live music, hidden gems: what do you want more of? Reply to any newsletter and tell us what would make your weekends easier.",
    date: "Launch week",
    author: "Atlanta Pulse Team",
  },
  {
    id: "cp4",
    type: "poll",
    title: "Best way to spend a Saturday in Atlanta?",
    content: "Not the answer that sounds best on a tourism site. The one you'd actually pick on a free Saturday.",
    date: "Launch week",
    author: "Atlanta Pulse Team",
    pollOptions: [
      { id: "p5", text: "Walking the BeltLine Eastside Trail", votes: 0 },
      { id: "p6", text: "Eating along Buford Highway", votes: 0 },
      { id: "p7", text: "Browsing Ponce City Market or Krog Street Market", votes: 0 },
      { id: "p8", text: "A show at the Fox Theatre or Variety Playhouse", votes: 0 },
    ],
  },
  {
    id: "cp5",
    type: "question",
    title: "Where do you take out-of-town friends?",
    content: "Everyone in Atlanta has a go-to spot for visitors. We'd love to hear yours. Reply to any newsletter and your pick might end up in a future issue.",
    date: "Launch week",
    author: "Atlanta Pulse Team",
  },
  {
    id: "cp6",
    type: "announcement",
    title: "Pulse+ is on our radar",
    content: "We're exploring what a paid tier could look like down the road. Nothing is final yet. Check the Pulse+ page for the latest.",
    date: "Launch week",
    author: "Atlanta Pulse Team",
  },
];

// Sample data
export const categories: Category[] = [
  { name: "Events", icon: "01", description: "Curated events worth leaving the house for", count: 3 },
  { name: "Nightlife", icon: "02", description: "Rooftop bars, neighborhood dives, and the best after-dark spots", count: 2 },
  { name: "Food Spots", icon: "03", description: "The restaurants, food halls, and hidden kitchens locals swear by", count: 1 },
  { name: "Hidden Gems", icon: "04", description: "Secret spots and lowkey-fire finds only insiders know", count: 4 },
];

// Evergreen "at a glance" ideas, not dated events.
export const weekAtAGlance = [
  "Walk the BeltLine Eastside Trail through Old Fourth Ward and Inman Park",
  "Grab a bite at Ponce City Market or Krog Street Market",
  "Catch a show at the Fox Theatre, Variety Playhouse, or The Earl. Check each venue's calendar",
  "Wander Oakland Cemetery for history, gardens, and skyline views",
  "Hit the Sweet Auburn Curb Market for lunch downtown",
  "Take on Buford Highway. Pick a cuisine and start eating",
  "Spend an afternoon at the High Museum of Art or the Atlanta Botanical Garden. Check official sites for hours",
];

// Evergreen digest items. The food page picks out items containing the food emoji below,
// and builds its title from words 2-5, so keep each food item starting with a short title phrase.
export const digest: DigestItem[] = [
  { id: "d1", text: "🍑 Atlanta Pulse is just getting started. One email every Thursday with the best events, food, nightlife, and hidden gems in town" },
  { id: "d2", text: "🍽️ Ponce City Market eats. A food hall and shops in Old Fourth Ward, right on the BeltLine Eastside Trail" },
  { id: "d3", text: "🥪 Sweet Auburn Curb Market lunch. A long-running market hall downtown with food stalls and produce vendors" },
  { id: "d4", text: "🌮 Buford Highway taco crawl. Strip-mall taquerias and global kitchens line the corridor. Pick a stretch and keep going" },
  { id: "d5", text: "🎵 Live music at the Fox Theatre, Variety Playhouse, The Earl, Terminal West, and Tabernacle. Check each venue's calendar for what's on" },
  { id: "d6", text: "🎨 High Museum of Art in Midtown. Rotating exhibitions and a permanent collection. Check the official site for what's showing" },
  { id: "d7", text: "🎪 Peachtree Road Race, Dragon Con, Atlanta Pride, and the Dogwood Festival are long-running annual Atlanta events. Check each official site for dates" },
];

// Self-contained brand-color gradient (Atlanta red + navy) as an inline SVG data URI.
// Used where we don't have a verified, licensed Atlanta photo for a card yet, so we
// never show a mismatched or reused stock photo. Same approach as the archive
// cards in newsletter-parser.ts. Swap in a real Atlanta photo URL once we have one.
function brandGradient(from: string, to: string, angle: number): string {
  const svg =
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice">` +
    `<defs><linearGradient id="g" gradientTransform="rotate(${angle} .5 .5)">` +
    `<stop offset="0" stop-color="${from}"/><stop offset="1" stop-color="${to}"/>` +
    `</linearGradient></defs>` +
    `<rect width="800" height="600" fill="url(#g)"/>` +
    `<circle cx="650" cy="110" r="190" fill="#ffffff" fill-opacity="0.06"/>` +
    `<circle cx="110" cy="520" r="150" fill="#ffffff" fill-opacity="0.05"/>` +
    `</svg>`;
  // Escape parentheses too so the value is safe inside an unquoted CSS url().
  const encoded = encodeURIComponent(svg).replace(/\(/g, "%28").replace(/\)/g, "%29");
  return `data:image/svg+xml,${encoded}`;
}

// Evergreen picks, not dated listings. Check official sites for current schedules.
export const events: Event[] = [
  {
    id: "e1",
    title: "Atlanta Dogwood Festival",
    category: "Events",
    date: "Annual",
    location: "Piedmont Park, Midtown",
    description: "Long-running festival with art, music, and food in Piedmont Park. Check the official site for dates.",
    image: "https://images.unsplash.com/photo-1543372953-6bcc0b0c5d1f?w=800&q=80",
  },
  {
    id: "e2",
    title: "Buford Highway Food Crawl",
    category: "Food Spots",
    date: "Anytime",
    location: "Buford Highway corridor",
    description: "Global food, strip-mall style. Pick a stretch, bring friends, and order a little of everything.",
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&q=80",
  },
  {
    id: "e3",
    title: "Oakland Cemetery",
    category: "Events",
    date: "Year-round",
    location: "Near Grant Park",
    description: "Historic grounds with gardens, sculpture, and skyline views. Check the official site for tours and special events.",
    image: brandGradient("#A80E36", "#13274F", 20),
  },
  {
    id: "e4",
    title: "A Night at the Fox Theatre",
    category: "Nightlife",
    date: "Check calendar",
    location: "Fox Theatre, Midtown",
    description: "Historic movie palace turned concert and touring-show venue. Check the Fox's official calendar to see what's on.",
    image: brandGradient("#13274F", "#CE1141", 135),
  },
  {
    id: "e5",
    title: "High Museum of Art",
    category: "Events",
    date: "Year-round",
    location: "Midtown",
    description: "Rotating exhibitions and a permanent collection in the heart of Midtown. Check the museum's official site for current shows.",
    image: brandGradient("#0B1630", "#CE1141", 120),
  },
  {
    id: "e6",
    title: "East Atlanta Village Night Out",
    category: "Nightlife",
    date: "Check calendars",
    location: "East Atlanta Village",
    description: "Neighborhood bars and small venues, including The Earl, a long-running live music room. Check venue calendars for what's on.",
    image: "https://images.unsplash.com/photo-1470093851219-69951fcbb533?w=800&q=80",
  },
];

// Venue-based picks, not artist listings. Check each venue's calendar for what's on.
export const liveMusic: LiveMusic[] = [
  { id: "m1", artist: "Fox Theatre", venue: "Midtown", date: "See calendar", image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&q=80" },
  { id: "m2", artist: "Variety Playhouse", venue: "Little Five Points", date: "See calendar", image: "https://images.unsplash.com/photo-1571266028243-e4733b0f0bb0?w=800&q=80" },
  { id: "m3", artist: "The Earl", venue: "East Atlanta Village", date: "See calendar", image: "https://images.unsplash.com/photo-1511192336575-5a79af67a629?w=800&q=80" },
  { id: "m4", artist: "Terminal West", venue: "West Midtown", date: "See calendar", image: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=800&q=80" },
  { id: "m5", artist: "Tabernacle", venue: "Downtown", date: "See calendar", image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800&q=80" },
];

export const hiddenGems: HiddenGem[] = [
  {
    id: "g1",
    name: "Sweet Auburn Curb Market",
    tagline: "Historic market hall",
    description: "A long-running indoor market in Sweet Auburn with food stalls and produce vendors. Check the official site for current vendors and hours.",
    image: "https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=800&q=80",
  },
  {
    id: "g2",
    name: "Buford Highway",
    tagline: "The global food corridor",
    description: "A long stretch of strip-mall restaurants serving cuisines from all over the world. Bring friends, order a lot, and try something new.",
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&q=80",
  },
  {
    id: "g3",
    name: "Oakland Cemetery",
    tagline: "Historic Victorian grounds",
    description: "A historic cemetery near Grant Park with gardens, sculpture, and skyline views. A calm place to wander.",
    image: "https://images.unsplash.com/photo-1602607360790-93a67a3e4e2b?w=800&q=80",
  },
  {
    id: "g4",
    name: "Krog Street Market",
    tagline: "Food hall on the BeltLine",
    description: "A food hall in a converted industrial building along the Eastside Trail in Inman Park. Walk the trail, then eat.",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&q=80",
  },
];

// No past issues yet. Atlanta Pulse is just getting started, so the archive starts empty.
export const archiveIssues: NewsletterIssue[] = [];
