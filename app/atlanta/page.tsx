import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Atlanta Guide — Events, Food, Nightlife & More | Atlanta Pulse",
  description:
    "Your local guide to Atlanta. Find events, restaurants, nightlife, live music, arts, and things to do in Atlanta this weekend.",
  keywords: [
    "Atlanta",
    "Atlanta guide",
    "things to do Atlanta",
    "Atlanta events",
    "Atlanta restaurants",
    "Atlanta nightlife",
    "Atlanta Pulse",
  ],
  openGraph: {
    title: "Atlanta Guide — Events, Food, Nightlife & More | Atlanta Pulse",
    description:
      "Your local guide to Atlanta. Events, food, nightlife, and things to do — with a new newsletter every Thursday.",
    type: "website",
    siteName: "Atlanta Pulse",
  },
};

const categories = [
  {
    slug: "events",
    emoji: "🎉",
    label: "Events",
    description: "Festivals, landmarks, and long-running Atlanta favorites worth planning a weekend around.",
    tag: "Plan Ahead",
  },
  {
    slug: "food",
    emoji: "🍽️",
    label: "Food & Restaurants",
    description: "Food halls, hidden gems, and the kinds of spots locals actually go to — not the ones on every Yelp list.",
    tag: "Local Picks",
  },
  {
    slug: "nightlife",
    emoji: "🌙",
    label: "Nightlife",
    description: "Rooftop bars, neighborhood bars, live music rooms, and late nights worth having in Atlanta.",
    tag: "After Dark",
  },
  {
    slug: "things-to-do",
    emoji: "🗺️",
    label: "Things To Do",
    description: "A casual local's guide to what's worth doing in Atlanta — this weekend and beyond.",
    tag: "Weekend Guide",
  },
  {
    slug: "music",
    emoji: "🎵",
    label: "Live Music",
    description: "Venues worth knowing in Atlanta, from historic theaters to small-club nights.",
    tag: "Live Venues",
  },
  {
    slug: "arts",
    emoji: "🎨",
    label: "Arts & Culture",
    description: "Museums, theater, murals, and creative spots across Atlanta.",
    tag: "Cultural",
  },
];

export default function AtlantaHubPage() {
  return (
    <div className="min-h-screen bg-[#FAF8F7]">
      {/* Hero */}
      <section
        className="pt-32 pb-20 px-6"
        style={{ background: "linear-gradient(170deg, #FBEAEE 0%, #FAF8F7 60%)" }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white border border-orange-200 rounded-full px-4 py-2 mb-6 shadow-sm">
            <span className="w-2 h-2 bg-pulse-orange rounded-full animate-pulse" />
            <span className="text-pulse-orange text-xs font-bold tracking-wider uppercase">
              Local Guide
            </span>
          </div>
          <h1 className="font-heading text-6xl sm:text-7xl md:text-8xl font-black text-gray-900 leading-[0.9] mb-6">
            Atlanta
            <br />
            <span className="text-pulse-orange">Guide</span>
          </h1>
          <p className="text-gray-600 text-lg md:text-xl max-w-xl mx-auto mb-4 leading-relaxed">
            Everything worth doing in Atlanta — your weekly cheat code, new every Thursday.
          </p>
          <p className="text-gray-400 text-sm max-w-md mx-auto">
            No recycled lists. Just the real stuff.
          </p>
        </div>
      </section>

      {/* Category grid */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {categories.map((cat) => (
              <Link
                key={cat.slug}
                href={`/atlanta/${cat.slug}`}
                className="group bg-white rounded-2xl p-6 border border-gray-100 hover:border-pulse-orange/40 hover:shadow-lg transition-all duration-200"
              >
                <div className="flex items-start justify-between mb-4">
                  <span className="text-3xl">{cat.emoji}</span>
                  <span className="text-[10px] font-bold tracking-wider uppercase text-pulse-orange bg-orange-50 px-2.5 py-1 rounded-full">
                    {cat.tag}
                  </span>
                </div>
                <h2 className="font-heading font-black text-gray-900 text-xl mb-2 group-hover:text-pulse-orange transition-colors">
                  {cat.label}
                </h2>
                <p className="text-gray-500 text-sm leading-relaxed">{cat.description}</p>
                <div className="mt-4 text-pulse-orange text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                  Explore →
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ links */}
      <section className="py-10 px-6 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto flex flex-wrap items-center justify-between gap-4">
          <div>
            <h3 className="font-heading font-black text-gray-900 text-lg mb-1">
              Got questions about Atlanta?
            </h3>
            <p className="text-gray-500 text-sm">
              We&apos;ve got answers — events, restaurants, what to do, where to go.
            </p>
          </div>
          <div className="flex gap-3">
            <Link
              href="/faq"
              className="bg-gray-900 text-white font-bold text-sm px-5 py-3 rounded-xl hover:bg-gray-800 transition-colors"
            >
              Atlanta FAQ →
            </Link>
            <Link
              href="/atlanta/events/faq"
              className="bg-white border border-gray-200 text-gray-700 font-bold text-sm px-5 py-3 rounded-xl hover:border-gray-400 transition-colors"
            >
              Events FAQ
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 px-6 bg-pulse-orange">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="font-heading text-3xl sm:text-4xl font-black text-white mb-4">
            Get Atlanta in Your Inbox
          </h2>
          <p className="text-white/90 text-base mb-8">
            The best of Atlanta every Thursday — events, food, nightlife, hidden gems. Free.
          </p>
          <Link
            href="/#subscribe"
            className="inline-block bg-white text-pulse-orange font-black px-8 py-4 rounded-xl text-sm hover:bg-gray-50 transition-all hover:scale-[1.02] shadow-lg"
          >
            Subscribe Free →
          </Link>
        </div>
      </section>

      <div className="py-8 px-6 bg-[#FAF8F7] border-t border-gray-100 text-center">
        <Link href="/" className="text-gray-400 hover:text-gray-700 text-sm transition-colors">
          ← Back to Home
        </Link>
      </div>
    </div>
  );
}
