import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { NEIGHBORHOODS, CATEGORIES, getNeighborhood, getCategory, isNeighborhood } from "@/lib/seo-data";

// Skip events and food — those have dedicated static FAQ pages
const STATIC_FAQ_CATEGORIES = ["events", "food"];

export function generateStaticParams() {
  return [
    // All neighborhoods get FAQ pages
    ...NEIGHBORHOODS.map((n) => ({ category: n.slug })),
    // Categories except those with static FAQ pages
    ...CATEGORIES.filter((c) => !STATIC_FAQ_CATEGORIES.includes(c.slug)).map((c) => ({ category: c.slug })),
  ];
}

export async function generateMetadata({ params }: { params: Promise<{ category: string }> }): Promise<Metadata> {
  const { category } = await params;
  const hood = getNeighborhood(category);
  const cat = getCategory(category);

  if (hood) {
    const title = `${hood.name} Atlanta FAQ — Everything You Need to Know | Atlanta Pulse`;
    const description = `Answers to common questions about ${hood.name}, Atlanta. Restaurants, parking, safety, walkability, bars, and things to do.`;
    return {
      title,
      description,
      keywords: [`${hood.name} Atlanta FAQ`, `${hood.name} restaurants`, `things to do ${hood.name}`, "Atlanta Pulse"],
      openGraph: { title, description, type: "website", siteName: "Atlanta Pulse" },
    };
  }

  if (cat) {
    const title = `Atlanta ${cat.name} FAQ — Questions Answered | Atlanta Pulse`;
    const description = `Answers to common questions about ${cat.name.toLowerCase()} in Atlanta. From the team at Atlanta Pulse.`;
    return {
      title,
      description,
      keywords: [`Atlanta ${cat.name.toLowerCase()} FAQ`, `${cat.name} Atlanta`, "Atlanta Pulse"],
      openGraph: { title, description, type: "website", siteName: "Atlanta Pulse" },
    };
  }

  return { title: "Atlanta FAQ | Atlanta Pulse" };
}

function getNeighborhoodFAQs(hoodName: string, hoodSlug: string) {
  const hood = getNeighborhood(hoodSlug);
  const isDowntown = hoodSlug === "downtown";
  return [
    {
      question: `What is ${hoodName} known for?`,
      answer: `${hood ? hood.description + " " : ""}${hoodName} is one of the more distinctive parts of the Atlanta area, with a strong local identity. Atlanta Pulse is a new weekly newsletter, and ${hoodName} is part of the Atlanta guide we are building out.`,
    },
    {
      question: `What are the best restaurants in ${hoodName}?`,
      answer: `${hoodName} has its own mix of restaurants, and tastes vary, so the best way to start is our ${hoodName} food page for a few picks to get going. Check each restaurant's official site for current menus, hours, and reservations. Atlanta Pulse is a free weekly newsletter, and we aim to flag food worth knowing about across the city rather than repeating the same top-10 list everyone else publishes.`,
    },
    {
      question: `Is ${hoodName} safe?`,
      answer: `Like any urban area, conditions in ${hoodName} can vary by block and by time of day. Well-lit commercial corridors tend to be where evening activity is concentrated. Use normal city awareness: keep valuables out of sight in your car, stay aware of your surroundings, and use rideshare if you'd rather not walk late at night. For current local conditions, check neighborhood associations and official city resources.`,
    },
    {
      question: `What are things to do in ${hoodName} this weekend?`,
      answer: `Things to do in ${hoodName} this weekend depend on the season and what's on the local calendar. Check the official calendars of venues and parks in the area, browse our ${hoodName} pages for starting-point picks, and join the Atlanta Pulse newsletter, which goes out every Thursday with ideas for the weekend.`,
    },
    {
      question: `Where should I park in ${hoodName}?`,
      answer: `Parking varies by block and by time of day in ${hoodName}. Many restaurants, bars, and venues have nearby lots or decks, and street parking rules differ from block to block, so read posted signs carefully. On busy weekend evenings or event nights, arrive early, and consider MARTA or rideshare to skip the parking hunt. Check MARTA's official site for routes and schedules.`,
    },
    {
      question: `What are the best bars in ${hoodName}?`,
      answer: `${hoodName} has its own mix of neighborhood bars, cocktail spots, and live music rooms depending on where you are in the area. Start with our ${hoodName} nightlife page for picks, and check each venue's official site or social channels for current hours and what's on.`,
    },
    {
      question: `What events are happening in ${hoodName}?`,
      answer: `Events in ${hoodName} can include neighborhood festivals, markets, pop-ups, and venue programming throughout the year. For specifics, check the official calendars of nearby venues and parks, and subscribe to Atlanta Pulse for a weekly rundown every Thursday.`,
    },
    {
      question: `Is ${hoodName} walkable?`,
      answer: `Walkability depends on which part of ${hoodName} you're in. Commercial corridors and main streets tend to be the most pedestrian-friendly, with restaurants, shops, and cafes close together, while residential side streets are quieter. Atlanta overall is spread out and car-heavy, though many intown neighborhoods have walkable pockets and the BeltLine trails connect several of them. Check a map for the specific blocks you plan to visit.`,
    },
    {
      question: isDowntown ? `How do I get around ${hoodName}?` : `How do I get to ${hoodName} from Downtown Atlanta?`,
      answer: isDowntown
        ? `Downtown is the center of Atlanta's transit network, so MARTA is often the easiest way in, and rideshare and driving are also common. Traffic around games, concerts, and rush hour can be heavy, so leave extra time and check the schedules at Mercedes-Benz Stadium, State Farm Arena, and other venues before you go.`
        : `Most visitors get to ${hoodName} from Downtown Atlanta by car or rideshare, and MARTA rail and bus serve parts of the city. Travel time depends heavily on traffic, which can get tight around rush hour and on game or concert nights, so leave extra time. Check MARTA's official site and your maps app for current routes.`,
    },
    {
      question: `How do I keep up with what's happening in ${hoodName}?`,
      answer: `Neighborhoods change all the time, with venue lineups, restaurant menus, and local events shifting year-round. For the latest on ${hoodName}, check official venue and business sites and social channels. Atlanta Pulse's free weekly newsletter is built to be the shortcut: subscribe to stay on top of what's worth your time in ${hoodName} and the rest of Atlanta.`,
    },
  ];
}

function getCategoryFAQs(catName: string, catSlug: string) {
  const catLower = catName.toLowerCase();
  return [
    {
      question: `What's the best ${catLower} in Atlanta right now?`,
      answer: `Atlanta's ${catLower} scene is always moving, and the answer depends on your neighborhood and your taste. A good starting point is our ${catLower} pages on this site, and the Atlanta Pulse newsletter goes out every Thursday with local picks. Always check official sites for current details.`,
    },
    {
      question: `Where do locals go for ${catLower} in Atlanta?`,
      answer: `Atlanta is a big, spread-out metro, and a lot of the best ${catLower} lives in specific neighborhoods rather than the obvious tourist zones. Intown spots like Old Fourth Ward, Inman Park, Little Five Points, East Atlanta Village, Decatur, and West Midtown are good places to start exploring, and Buford Highway is a must for global food. Atlanta Pulse is the newsletter for exactly this kind of thing.`,
    },
    {
      question: `Is Atlanta's ${catLower} scene worth it?`,
      answer: `Atlanta is a large, diverse metro, and its ${catLower} scene is spread across many neighborhoods, so there's a lot to explore. The trick is knowing where to start, and that's what Atlanta Pulse is for.`,
    },
    {
      question: `What are the hidden gems for ${catLower} in Atlanta?`,
      answer: `The best hidden gems for ${catLower} in Atlanta are often a little off the main tourist path, tucked into neighborhood corridors, market halls, and strip malls. Atlanta Pulse is on the hunt for these, and our Hidden Gems page is a good place to start.`,
    },
    {
      question: `What neighborhoods in Atlanta have the best ${catLower}?`,
      answer: `For ${catLower}, different Atlanta neighborhoods offer different vibes. Midtown and Downtown have many of the city's big institutions and venues. Old Fourth Ward, Inman Park, and Reynoldstown cluster around the BeltLine Eastside Trail. Little Five Points and East Atlanta Village lean independent and eclectic. Buckhead leans upscale, West Midtown and the Westside feature converted industrial spaces, and Decatur is a walkable city just east of Atlanta. Explore the neighborhood pages on Atlanta Pulse for local breakdowns.`,
    },
    {
      question: `How do I get around Atlanta for ${catLower}?`,
      answer: `Atlanta is spread out and mostly car-oriented, though MARTA rail and bus serve parts of the city and the BeltLine Eastside Trail connects several intown neighborhoods for walking and biking. Rideshare is handy for a night out. Traffic can be heavy around rush hour and on game or concert nights, so leave extra time.`,
    },
    {
      question: `What's coming up for ${catLower} in Atlanta this month?`,
      answer: `The best way to know what's coming up for ${catLower} in Atlanta is to check official venue and event sites for dates, and to join the Thursday Atlanta Pulse newsletter, which rounds up ideas for the weekend. Subscribe free and you'll never wonder what to do this weekend again.`,
    },
    {
      question: `Are there free ${catLower} options in Atlanta?`,
      answer: `Yes, there are free options. Walking the BeltLine Eastside Trail, spending an afternoon at Piedmont Park, or wandering Centennial Olympic Park are all good places to start. Museums and venues sometimes offer free days or free events, so check each official site. We aim to flag free options in the newsletter because getting out shouldn't always cost money.`,
    },
  ];
}

export default async function DynamicFaqPage({ params }: { params: Promise<{ category: string }> }) {
  const { category } = await params;
  const hood = getNeighborhood(category);
  const cat = getCategory(category);

  if (!hood && !cat) notFound();
  if (STATIC_FAQ_CATEGORIES.includes(category)) notFound(); // defer to static pages

  const isHood = !!hood;
  const displayName = hood?.name ?? cat?.name ?? "";
  const emoji = cat?.emoji ?? "📍";
  const faqs = isHood
    ? getNeighborhoodFAQs(hood!.name, hood!.slug)
    : getCategoryFAQs(cat!.name, cat!.slug);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  const backHref = isHood ? `/atlanta/${hood!.slug}` : `/atlanta/${cat!.slug}`;
  const backLabel = isHood ? `← ${hood!.name}` : `← ${cat!.name}`;

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="min-h-screen bg-[#FAF8F7]">
        <section className="pt-32 pb-16 px-6" style={{ background: "linear-gradient(170deg, #FBEAEE 0%, #FAF8F7 60%)" }}>
          <div className="max-w-3xl mx-auto">
            <Link href={backHref} className="text-pulse-orange text-xs font-bold tracking-wider uppercase hover:opacity-70 transition-opacity mb-6 inline-block">
              {backLabel}
            </Link>
            <div className="text-4xl mb-4">{emoji}</div>
            <h1 className="font-heading text-5xl sm:text-6xl font-black text-gray-900 leading-tight mb-5">
              {isHood ? `${displayName} FAQ` : `Atlanta ${displayName} FAQ`}
            </h1>
            <p className="text-gray-600 text-lg max-w-xl leading-relaxed">
              {isHood
                ? `Everything you need to know about ${displayName} in Atlanta — answered.`
                : `The most common questions about ${displayName.toLowerCase()} in Atlanta — answered.`}
            </p>
            <p className="text-gray-400 text-sm mt-3">
              Starter answers. Always check official sites for current details.
            </p>
          </div>
        </section>

        <section className="py-16 px-6">
          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              {faqs.map((faq, i) => (
                <div key={i} className="bg-white rounded-2xl border border-gray-100 p-7 hover:border-orange-200 hover:shadow-sm transition-all">
                  <h2 className="font-heading font-black text-gray-900 text-lg mb-3 leading-tight">{faq.question}</h2>
                  <p className="text-gray-600 text-sm leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 px-6 bg-pulse-orange">
          <div className="max-w-xl mx-auto text-center">
            <h2 className="font-heading text-3xl sm:text-4xl font-black text-white mb-4">
              {isHood ? `Never Miss ${displayName} Picks` : `Never Miss Atlanta ${displayName}`}
            </h2>
            <p className="text-white/90 text-base mb-8">
              {isHood
                ? `Get the best events, food, and nightlife in ${displayName} and all of Atlanta every Thursday.`
                : `Get the best ${displayName.toLowerCase()} picks in Atlanta every Thursday morning. Free weekly newsletter.`}
            </p>
            <Link href="/#subscribe" className="inline-block bg-white text-pulse-orange font-black px-8 py-4 rounded-xl text-sm hover:bg-gray-50 transition-all hover:scale-[1.02] shadow-lg">
              Subscribe Free →
            </Link>
          </div>
        </section>

        <div className="py-8 px-6 bg-[#FAF8F7] border-t border-gray-100 text-center space-x-6">
          <Link href={backHref} className="text-gray-400 hover:text-gray-700 text-sm transition-colors">{backLabel}</Link>
          <Link href="/faq" className="text-gray-400 hover:text-gray-700 text-sm transition-colors">All FAQs</Link>
          <Link href="/" className="text-gray-400 hover:text-gray-700 text-sm transition-colors">Home</Link>
        </div>
      </div>
    </>
  );
}
