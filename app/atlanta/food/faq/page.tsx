import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Atlanta Restaurants & Food FAQ — Where to Eat in Atlanta | Atlanta Pulse",
  description:
    "Answers to common questions about Atlanta food — where to start, food halls, neighborhoods for dining, Southern classics, Buford Highway, and brunch.",
  keywords: [
    "Atlanta restaurants FAQ",
    "best restaurants Atlanta",
    "Atlanta food guide",
    "where to eat Atlanta",
    "Atlanta hidden gems food",
    "Atlanta food halls",
    "Buford Highway food",
    "Atlanta Pulse",
  ],
  openGraph: {
    title: "Atlanta Restaurants & Food FAQ | Atlanta Pulse",
    description:
      "Where to eat in Atlanta — food halls, Southern classics, Buford Highway, and neighborhood dining guides.",
    type: "website",
    siteName: "Atlanta Pulse",
  },
};

const faqs = [
  {
    question: "What are the best restaurants in Atlanta?",
    answer:
      "Atlanta has a huge range of dining, so the best choice depends on your craving. For Southern comfort food, Mary Mac's Tea Room is a longtime Atlanta stop for fried chicken, collards, and sweet tea. For a classic, The Varsity is a drive-in known for chili dogs, onion rings, and frosted orange shakes. Ponce City Market and Krog Street Market are food halls where you can sample a bit of everything, and Buford Highway is the corridor for global food. Check each restaurant's official site for current menus and hours.",
  },
  {
    question: "What neighborhood has the best food in Atlanta?",
    answer:
      "There's no single answer, because the best food depends on what you're after. Old Fourth Ward and Inman Park are home to Ponce City Market and Krog Street Market, right along the BeltLine Eastside Trail. Midtown has Atlanta classics. West Midtown has restaurants in converted warehouses and industrial buildings. Decatur has a walkable square ringed with independent restaurants and cafes. East Atlanta Village and Little Five Points lean casual and independent, and Buckhead leans upscale. And the Buford Highway corridor is where to go for global food.",
  },
  {
    question: "Where are the best hidden gem restaurants in Atlanta?",
    answer:
      "Hidden gems in Atlanta are often tucked into strip malls on Buford Highway, market-hall stalls like those at the Sweet Auburn Curb Market, and neighborhood joints in places like Kirkwood, Cabbagetown, and Grant Park. Atlanta Pulse is on the hunt for these, and our Hidden Gems page is a good place to start. Subscribe to the newsletter and we'll point you toward more as we grow.",
  },
  {
    question: "What's the best Southern food in Atlanta?",
    answer:
      "Atlanta has deep Southern food roots, from traditional dining rooms to casual plates. Mary Mac's Tea Room is a longtime Atlanta stop for fried chicken, collards, and sweet tea, and The Varsity is a classic drive-in for chili dogs and frosted orange shakes. For a casual lunch, the Sweet Auburn Curb Market is a long-running market hall downtown with food stalls and produce vendors. Check each spot's official site for current details.",
  },
  {
    question: "Where can I try a lot of different food in one stop?",
    answer:
      "Atlanta's food halls and market halls are made for this. Ponce City Market in Old Fourth Ward and Krog Street Market in Inman Park are both close to the BeltLine Eastside Trail, so you can walk the trail and then eat. The Sweet Auburn Curb Market is a long-running market hall downtown. Each has its own mix of vendors, so check the official sites for current listings and hours.",
  },
  {
    question: "How do I find new restaurant openings in Atlanta?",
    answer:
      "Atlanta's restaurant scene changes often, and we'd rather not guess about what's open or new. The best sources are each restaurant's official site and social channels. Atlanta Pulse is a new weekly newsletter, and we'll point you to spots worth knowing about as we grow. Subscribe free to follow along.",
  },
  {
    question: "Where should I eat in Atlanta if I'm a first-time visitor?",
    answer:
      "Three starting points for a first-timer: 1) A Southern classic: Mary Mac's Tea Room for fried chicken, collards, and sweet tea, or The Varsity for chili dogs and frosted orange shakes. 2) A market hall: Ponce City Market or Krog Street Market, followed by a walk on the BeltLine Eastside Trail. 3) A Buford Highway food crawl: pick a cuisine and start eating. If you want to go beyond the tourist trail, subscribe to Atlanta Pulse before your trip.",
  },
  {
    question: "What are the best brunch spots in Atlanta?",
    answer:
      "Brunch is a big deal in Atlanta, and intown neighborhoods like Virginia-Highland, Inman Park, Old Fourth Ward, Midtown, and Decatur have lots of patio-friendly options. Weekend brunch can mean a wait, so arrive early or check whether a restaurant takes reservations. Check each restaurant's official site for brunch hours and menus.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function FoodFaqPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="min-h-screen bg-[#FAF8F7]">
        {/* Hero */}
        <section
          className="pt-32 pb-16 px-6"
          style={{ background: "linear-gradient(170deg, #FBEAEE 0%, #FAF8F7 60%)" }}
        >
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <Link
                href="/atlanta/food"
                className="text-pulse-orange text-xs font-bold tracking-wider uppercase hover:opacity-70 transition-opacity"
              >
                ← Atlanta Food
              </Link>
            </div>
            <div className="text-4xl mb-4">🍽️</div>
            <h1 className="font-heading text-5xl sm:text-6xl font-black text-gray-900 leading-tight mb-5">
              Atlanta Food FAQ
            </h1>
            <p className="text-gray-600 text-lg max-w-xl leading-relaxed">
              Where to eat in Atlanta — food halls, Southern classics, and local
              favorites answered honestly.
            </p>
          </div>
        </section>

        {/* FAQ list */}
        <section className="py-16 px-6">
          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              {faqs.map((faq, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl border border-gray-100 p-7 hover:border-orange-200 hover:shadow-sm transition-all"
                >
                  <h2 className="font-heading font-black text-gray-900 text-lg mb-3 leading-tight">
                    {faq.question}
                  </h2>
                  <p className="text-gray-600 text-sm leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-6 bg-pulse-orange">
          <div className="max-w-xl mx-auto text-center">
            <h2 className="font-heading text-3xl sm:text-4xl font-black text-white mb-4">
              Find Hidden Gems Every Week
            </h2>
            <p className="text-white/90 text-base mb-8">
              Atlanta Pulse rounds up food worth knowing about and under-the-radar spots
              every Thursday. Free weekly newsletter for people who love eating out.
            </p>
            <Link
              href="/#subscribe"
              className="inline-block bg-white text-pulse-orange font-black px-8 py-4 rounded-xl text-sm hover:bg-gray-50 transition-all hover:scale-[1.02] shadow-lg"
            >
              Subscribe Free →
            </Link>
          </div>
        </section>

        <div className="py-8 px-6 bg-[#FAF8F7] border-t border-gray-100 text-center space-x-6">
          <Link
            href="/atlanta/food"
            className="text-gray-400 hover:text-gray-700 text-sm transition-colors"
          >
            ← Atlanta Food
          </Link>
          <Link href="/faq" className="text-gray-400 hover:text-gray-700 text-sm transition-colors">
            All FAQs
          </Link>
          <Link href="/" className="text-gray-400 hover:text-gray-700 text-sm transition-colors">
            Home
          </Link>
        </div>
      </div>
    </>
  );
}
