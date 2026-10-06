import Link from "next/link";

const categories = [
  { label: "Atlanta Events", href: "/atlanta/events", emoji: "🗓️" },
  { label: "Things To Do", href: "/atlanta/things-to-do", emoji: "🌿" },
  { label: "Food & Restaurants", href: "/atlanta/food", emoji: "🍽️" },
  { label: "Nightlife", href: "/atlanta/nightlife", emoji: "🌙" },
  { label: "Live Music", href: "/atlanta/music", emoji: "🎶" },
  { label: "Arts & Culture", href: "/atlanta/arts", emoji: "🎨" },
  { label: "Events FAQ", href: "/atlanta/events/faq", emoji: "❓" },
  { label: "Food FAQ", href: "/atlanta/food/faq", emoji: "🍑" },
];

export default function BrowseByCategory() {
  return (
    <section className="py-20 px-6 bg-white border-t border-gray-100">
      <div className="max-w-5xl mx-auto">
        <div className="mb-10">
          <p className="text-pulse-orange text-xs font-bold tracking-[0.3em] uppercase mb-3">
            Quick Links
          </p>
          <h2 className="font-heading text-4xl sm:text-5xl font-black text-gray-900 tracking-tight">
            Browse by Category
          </h2>
          <p className="text-gray-500 text-base mt-3 max-w-lg">
            Looking for something specific? Jump straight to what you need.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {categories.map((cat) => (
            <Link
              key={cat.href}
              href={cat.href}
              className="group bg-[#FAF8F7] rounded-2xl p-5 border border-gray-100 hover:border-pulse-orange/40 hover:shadow-lg transition-all duration-200"
            >
              <span className="text-2xl mb-3 block">{cat.emoji}</span>
              <span className="font-heading font-black text-gray-900 text-sm leading-snug group-hover:text-pulse-orange transition-colors block">
                {cat.label}
              </span>
              <span className="mt-2 text-pulse-orange text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity block">
                Explore →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
