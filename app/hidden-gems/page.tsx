import Link from "next/link";

export const metadata = {
  title: "Atlanta Spots Worth Knowing | Atlanta Pulse",
  description: "A starter list of Atlanta neighborhoods, landmarks and local-favorite categories worth your weekend. Hidden gems land in the weekly newsletter.",
};

// Evergreen starter list. Places and neighborhoods only, described in general
// terms: no hours, prices, addresses or event dates. Check each official site
// for current details.
const gems = [
  // Neighborhoods Worth Exploring
  { number: 1, name: "Midtown", neighborhood: "Midtown", category: "Explore", note: "Arts and culture central. Piedmont Park, the High Museum and the Fox Theatre are all in the mix. A solid first-time base." },
  { number: 2, name: "Buckhead", neighborhood: "Buckhead", category: "Explore", note: "North Atlanta's big shopping, dining and nightlife district. Dress up a little and make an evening of it." },
  { number: 3, name: "Old Fourth Ward", neighborhood: "Old Fourth Ward", category: "Explore", note: "Home to Ponce City Market and a stretch of the BeltLine. Walkable, with plenty of restaurants and bars within a few blocks." },
  { number: 4, name: "Inman Park", neighborhood: "Inman Park", category: "Explore", note: "One of Atlanta's oldest planned neighborhoods. Victorian-era houses, a strong restaurant scene and easy BeltLine access." },
  { number: 5, name: "Virginia-Highland", neighborhood: "Virginia-Highland", category: "Explore", note: "A walkable village of bungalows, patios and small shops. Good for an unhurried afternoon." },
  { number: 6, name: "Little Five Points", neighborhood: "Little Five Points", category: "Explore", note: "Eclectic and a little rebellious. Known for vintage shops, record stores, street art and live music." },
  { number: 7, name: "East Atlanta Village", neighborhood: "East Atlanta Village", category: "Explore", note: "A compact, quirky strip of bars, restaurants and small music venues on the east side. Bring friends and no agenda." },
  { number: 8, name: "Decatur", neighborhood: "Decatur", category: "Explore", note: "Its own city just east of Atlanta, with a walkable square, local restaurants and a small-town feel." },
  { number: 9, name: "West Midtown", neighborhood: "West Midtown", category: "Explore", note: "Former industrial buildings now home to restaurants, design shops and music venues. Great for a long dinner." },
  { number: 10, name: "Downtown", neighborhood: "Downtown", category: "Explore", note: "Home to the Georgia Aquarium, Centennial Olympic Park and the big sports and concert venues. Easy to build a whole day around." },
  { number: 11, name: "Grant Park", neighborhood: "Grant Park", category: "Explore", note: "A historic neighborhood wrapped around a big, shady park of the same name, and the home of Zoo Atlanta. Great for a weekend stroll." },
  { number: 12, name: "Reynoldstown", neighborhood: "Reynoldstown", category: "Explore", note: "Right on the BeltLine Eastside Trail, with a mix of homes, restaurants and creative spaces. Easy to pair with a walk." },
  { number: 13, name: "Cabbagetown", neighborhood: "Cabbagetown", category: "Explore", note: "A small, historic mill-village neighborhood with colorful cottages and street murals. Walk it slowly." },
  { number: 14, name: "Sweet Auburn", neighborhood: "Sweet Auburn", category: "Explore", note: "A historically significant neighborhood tied to Dr. Martin Luther King Jr.'s legacy. Check official sites for heritage tours and visiting info." },
  { number: 15, name: "Poncey-Highland", neighborhood: "Poncey-Highland", category: "Explore", note: "A leafy neighborhood along Ponce de Leon Avenue with local restaurants, shops and BeltLine access nearby." },
  { number: 16, name: "Edgewood", neighborhood: "Edgewood", category: "Explore", note: "Edgewood Avenue is a go-to strip for bars, restaurants and a lively night out." },
  { number: 17, name: "Kirkwood", neighborhood: "Kirkwood", category: "Explore", note: "A mostly residential east-side neighborhood with tree-lined streets and a friendly little commercial district." },
  { number: 18, name: "Westside", neighborhood: "Westside", category: "Explore", note: "A west-side mix of older homes, converted industrial spaces and newer development, with BeltLine access." },
  // Parks & Outdoors
  { number: 19, name: "Piedmont Park", neighborhood: "Midtown", category: "Outdoor", note: "Atlanta's big central green space. Walk the paths, bring a blanket, people-watch and catch the skyline." },
  { number: 20, name: "Atlanta BeltLine Eastside Trail", neighborhood: "Multiple", category: "Outdoor", note: "A multi-use trail connecting several intown neighborhoods, lined with murals, shops and restaurants. Walk or bike a stretch." },
  { number: 21, name: "Atlanta Botanical Garden", neighborhood: "Midtown", category: "Outdoor", note: "Right next to Piedmont Park. A low-key plan for a slow afternoon. Check the official site for hours, tickets and seasonal exhibits." },
  { number: 22, name: "Centennial Olympic Park", neighborhood: "Downtown", category: "Outdoor", note: "Created for the 1996 Summer Olympics and now a downtown green space surrounded by major attractions." },
  { number: 23, name: "Stone Mountain Park", neighborhood: "Stone Mountain", category: "Outdoor", note: "A huge granite monolith and park east of the city. Check the official site for what's open and current admission info." },
  // Museums & Culture
  { number: 24, name: "Zoo Atlanta", neighborhood: "Grant Park", category: "Culture", note: "A classic family outing in Grant Park. Check the official site for hours and tickets." },
  { number: 25, name: "Georgia Aquarium", neighborhood: "Downtown", category: "Culture", note: "A major downtown attraction right next to Centennial Olympic Park. Check the official site for tickets and hours." },
  { number: 26, name: "Fernbank Museum", neighborhood: "Northeast Atlanta", category: "Culture", note: "A natural history museum next to a preserved forest. Check the official site for current exhibits and hours." },
  { number: 27, name: "High Museum of Art", neighborhood: "Midtown", category: "Culture", note: "A major art museum in the Woodruff Arts Center. Check the official site for current exhibitions." },
  { number: 28, name: "Fox Theatre", neighborhood: "Midtown", category: "Culture", note: "A historic, ornate movie palace that hosts touring shows and concerts. The interior alone is worth seeing. Check the official calendar." },
  { number: 29, name: "Oakland Cemetery", neighborhood: "Near Downtown", category: "Culture", note: "A historic Victorian-era cemetery with notable monuments and quiet grounds. A good slow-paced walk." },
  // Markets & Food Halls
  { number: 30, name: "Sweet Auburn Curb Market", neighborhood: "Sweet Auburn", category: "Markets", note: "A historic indoor market with produce, meat and prepared-food stalls. Go hungry." },
  { number: 31, name: "Krog Street Market", neighborhood: "Inman Park", category: "Food", note: "An indoor food hall near the BeltLine with a mix of local vendors. Pair it with a walk on the Eastside Trail." },
  { number: 32, name: "Ponce City Market", neighborhood: "Old Fourth Ward", category: "Food", note: "A converted historic building with a food hall, shops and a rooftop. A good rainy-day wander too." },
  { number: 33, name: "Buford Highway food corridor", neighborhood: "Northeast Atlanta", category: "Food", note: "A long stretch of strip malls hiding some of Atlanta's most diverse eating: Korean, Vietnamese, Mexican, Chinese and more. Go hungry and be adventurous." },
  // Music Venues
  { number: 34, name: "Variety Playhouse", neighborhood: "Little Five Points", category: "Music", note: "A well-loved music venue in Little Five Points. Check the official calendar for shows." },
  { number: 35, name: "The Earl", neighborhood: "East Atlanta Village", category: "Music", note: "A small, casual live-music room in East Atlanta Village. Check the official calendar for who's playing." },
  { number: 36, name: "Terminal West", neighborhood: "West Midtown", category: "Music", note: "A mid-size concert venue in West Midtown. Check the official calendar for shows." },
  { number: 37, name: "Tabernacle", neighborhood: "Downtown", category: "Music", note: "A former church turned concert hall in downtown Atlanta. Check the official calendar for shows." },
  // Game Day
  { number: 38, name: "State Farm Arena", neighborhood: "Downtown", category: "Sports", note: "Home of the Atlanta Hawks and a big venue for touring concerts. Check the official site for events." },
  { number: 39, name: "Mercedes-Benz Stadium", neighborhood: "Downtown", category: "Sports", note: "Home of the Atlanta Falcons and Atlanta United, and the site of big events all year. Check the official site for what's on." },
  { number: 40, name: "Truist Park", neighborhood: "Cobb County", category: "Sports", note: "Home of the Atlanta Braves, with The Battery Atlanta dining and entertainment district next door. Check the official schedule." },
  // Things to Look For (categories, not specific businesses)
  { number: 41, name: "Neighborhood coffee shops", neighborhood: "Intown", category: "Coffee", note: "Intown Atlanta is full of independent coffee shops. Pick a neighborhood, walk it, and settle in at the one with the best patio." },
  { number: 42, name: "Rooftop bars", neighborhood: "Multiple", category: "Bars", note: "Atlanta has a solid collection of rooftop bars with skyline views. Go early on a weeknight for the best seats." },
  { number: 43, name: "Neighborhood dive bars", neighborhood: "Multiple", category: "Bars", note: "Most intown neighborhoods have at least one low-key local bar. Ask the bartender where they drink on their night off." },
  { number: 44, name: "Small-room live shows", neighborhood: "Multiple", category: "Music", note: "Atlanta's club scene runs from tiny rooms to historic theaters. Check each venue's official calendar and catch a band you've never heard of." },
  { number: 45, name: "Weekend farmers markets", neighborhood: "Multiple", category: "Markets", note: "Many Atlanta neighborhoods host weekend farmers markets. Check local listings for current schedules and go early." },
  { number: 46, name: "Georgia peaches", neighborhood: "Metro Atlanta", category: "Food", note: "Peaches are a Georgia thing. When they're in season, look for them at markets and on dessert menus around town." },
  { number: 47, name: "Southern comfort food", neighborhood: "Multiple", category: "Food", note: "Fried chicken, biscuits, collards and mac and cheese are staples around town. Ask a local where their family goes." },
  { number: 48, name: "Independent record shops and bookstores", neighborhood: "Intown", category: "Shop", note: "Intown Atlanta still has independent bookstores and record shops. Poke around and ask for staff picks." },
  { number: 49, name: "Street art and murals", neighborhood: "Multiple", category: "Culture", note: "The BeltLine and several intown neighborhoods are known for murals and public art. Go on foot with no agenda." },
  { number: 50, name: "Skyline views", neighborhood: "Multiple", category: "Views", note: "Atlanta's skyline looks best from a high spot: a rooftop, a park lawn or a patio. Golden hour doesn't hurt." },
];

const categoryColors: Record<string, string> = {
  Food: "bg-orange-100 text-orange-700",
  Bars: "bg-purple-100 text-purple-700",
  Music: "bg-blue-100 text-blue-700",
  Explore: "bg-green-100 text-green-700",
  Markets: "bg-slate-100 text-slate-700",
  Outdoor: "bg-teal-100 text-teal-700",
  Coffee: "bg-stone-200 text-stone-700",
  Culture: "bg-pink-100 text-pink-700",
  Views: "bg-sky-100 text-sky-700",
  Shop: "bg-indigo-100 text-indigo-700",
  Sports: "bg-blue-100 text-blue-900",
};

export default function HiddenGemsPage() {
  return (
    <div className="min-h-screen bg-[#FAF8F7] pt-24 pb-20">
      <div className="max-w-3xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-14">
          <span className="text-pulse-orange text-xs font-semibold tracking-[0.3em] uppercase mb-4 block">
            Starter List
          </span>
          <h1 className="font-heading text-4xl sm:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            Atlanta Spots Worth Knowing
          </h1>
          <p className="text-gray-500 text-base max-w-xl mx-auto mb-2">
            A starter list of long-loved Atlanta neighborhoods, landmarks and local-favorite categories. Check each official site for current hours, tickets and dates.
          </p>
          <p className="text-gray-400 text-sm">
            The real hidden gems get their own spot in the weekly newsletter. Share this page, or keep it to yourself. Either way.
          </p>
        </div>

        <hr className="border-gray-200 mb-12" />

        {/* Gems list */}
        <div className="space-y-5">
          {gems.map((gem) => (
            <div key={gem.number} className="flex gap-5 items-start py-4 border-b border-gray-100">
              <div className="text-pulse-orange font-heading font-bold text-lg w-8 shrink-0 pt-0.5">
                {gem.number}.
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 flex-wrap mb-1">
                  <h3 className="font-heading font-bold text-gray-900 text-base">{gem.name}</h3>
                  <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${categoryColors[gem.category] || "bg-gray-100 text-gray-600"}`}>
                    {gem.category}
                  </span>
                  <span className="text-gray-400 text-xs">{gem.neighborhood}</span>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">{gem.note}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Footer CTA */}
        <div className="mt-16 text-center bg-gray-900 rounded-3xl p-10">
          <p className="text-white font-heading font-bold text-xl mb-2">
            Want the weekly cheat code to Atlanta?
          </p>
          <p className="text-white/50 text-sm mb-6">
            New every Thursday in Atlanta Pulse. Free.
          </p>
          <Link
            href="/#subscribe"
            className="inline-block bg-pulse-orange hover:bg-pulse-orange/90 text-white font-semibold px-8 py-3.5 rounded-xl transition-colors"
          >
            Subscribe Free →
          </Link>
        </div>

      </div>
    </div>
  );
}
