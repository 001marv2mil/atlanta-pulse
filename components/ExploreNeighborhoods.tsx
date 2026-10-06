import Link from "next/link";

const neighborhoods = [
  { slug: "midtown", label: "Midtown", emoji: "🎭" },
  { slug: "downtown", label: "Downtown", emoji: "🏙️" },
  { slug: "buckhead", label: "Buckhead", emoji: "🛍️" },
  { slug: "old-fourth-ward", label: "Old Fourth Ward", emoji: "🚲" },
  { slug: "inman-park", label: "Inman Park", emoji: "🌳" },
  { slug: "virginia-highland", label: "Virginia-Highland", emoji: "🏡" },
  { slug: "little-five-points", label: "Little Five Points", emoji: "🎸" },
  { slug: "east-atlanta-village", label: "East Atlanta Village", emoji: "🍺" },
  { slug: "west-midtown", label: "West Midtown", emoji: "🏭" },
  { slug: "decatur", label: "Decatur", emoji: "🏘️" },
  { slug: "grant-park", label: "Grant Park", emoji: "🦒" },
  { slug: "reynoldstown", label: "Reynoldstown", emoji: "🎨" },
  { slug: "cabbagetown", label: "Cabbagetown", emoji: "🖌️" },
  { slug: "sweet-auburn", label: "Sweet Auburn", emoji: "🏛️" },
  { slug: "poncey-highland", label: "Poncey-Highland", emoji: "🌇" },
  { slug: "edgewood", label: "Edgewood", emoji: "🍸" },
  { slug: "kirkwood", label: "Kirkwood", emoji: "🌿" },
  { slug: "westside", label: "Westside", emoji: "🛤️" },
];

export default function ExploreNeighborhoods() {
  return (
    <section className="py-20 px-6 bg-[#FAF8F7] border-t border-gray-100">
      <div className="max-w-5xl mx-auto">
        <div className="mb-10">
          <p className="text-pulse-orange text-xs font-bold tracking-[0.3em] uppercase mb-3">
            Metro Atlanta
          </p>
          <h2 className="font-heading text-4xl sm:text-5xl font-black text-gray-900 tracking-tight">
            Explore Neighborhoods
          </h2>
          <p className="text-gray-500 text-base mt-3 max-w-lg">
            From Midtown to Decatur — find the best things to do in every corner of Atlanta.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
          {neighborhoods.map((n) => (
            <Link
              key={n.slug}
              href={`/atlanta/${n.slug}`}
              className="group flex items-center gap-2.5 bg-white rounded-xl px-4 py-3 border border-gray-100 hover:border-pulse-orange/40 hover:shadow-md transition-all duration-200"
            >
              <span className="text-lg leading-none">{n.emoji}</span>
              <span className="font-semibold text-gray-800 text-sm group-hover:text-pulse-orange transition-colors leading-tight">
                {n.label}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
