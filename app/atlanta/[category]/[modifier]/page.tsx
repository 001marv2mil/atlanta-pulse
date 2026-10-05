import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  NEIGHBORHOODS,
  CATEGORIES,
  MODIFIERS,
  getNeighborhood,
  getCategory,
  getModifier,
  isNeighborhood,
  isCategory,
  isModifier,
} from "@/lib/seo-data";
import { getPlacesByNeighborhoodAndCategory, getPlacesByCategory, type Place } from "@/lib/places";

export function generateStaticParams() {
  const neighborhoodCategory = NEIGHBORHOODS.flatMap((n) =>
    CATEGORIES.map((c) => ({ category: n.slug, modifier: c.slug }))
  );
  const categoryModifier = CATEGORIES.flatMap((c) =>
    MODIFIERS.map((m) => ({ category: c.slug, modifier: m.slug }))
  );
  return [...neighborhoodCategory, ...categoryModifier];
}

type Params = { category: string; modifier: string };

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { category, modifier } = await params;

  if (isNeighborhood(category) && isCategory(modifier)) {
    const hood = getNeighborhood(category)!;
    const cat = getCategory(modifier)!;
    const title = `Best ${cat.name} in ${hood.name} Atlanta | Atlanta Pulse`;
    const description = `Local picks for the best ${cat.name.toLowerCase()} in ${hood.name}, Atlanta. Curated by Atlanta Pulse, a free weekly Atlanta newsletter.`;
    return { title, description, openGraph: { title, description, type: "website", siteName: "Atlanta Pulse" } };
  }

  if (isCategory(category) && isModifier(modifier)) {
    const cat = getCategory(category)!;
    const mod = getModifier(modifier)!;
    // Only the "best" modifier lists picks; the other modifiers are not filtered yet,
    // so their title and description make no claim about being free, open, tonight, etc.
    const title =
      mod.slug === "best"
        ? `${cat.name} ${mod.name} in Atlanta | Atlanta Pulse`
        : `${cat.name} in Atlanta: ${mod.name} Picks Coming Soon | Atlanta Pulse`;
    const description =
      mod.slug === "best"
        ? `Find the best ${cat.name.toLowerCase()} in Atlanta. Starting-point picks from Atlanta Pulse, with a new newsletter every Thursday.`
        : `${mod.name} ${cat.name.toLowerCase()} picks for Atlanta are coming soon. Join the Atlanta Pulse list for a new free newsletter every Thursday.`;
    return { title, description, openGraph: { title, description, type: "website", siteName: "Atlanta Pulse" } };
  }

  return { title: "Atlanta Pulse" };
}

const TAG_COLORS: Record<string, string> = {
  "Top Pick": "bg-orange-50 text-pulse-orange",
  "Hidden Gem": "bg-emerald-50 text-emerald-600",
  "Must Go": "bg-red-50 text-red-500",
  "Must Try": "bg-red-50 text-red-500",
  "Iconic": "bg-purple-50 text-purple-600",
  "Local Fave": "bg-green-50 text-green-600",
  "Local Institution": "bg-green-50 text-green-600",
  "Rooftop": "bg-sky-50 text-sky-600",
  "Best View": "bg-sky-50 text-sky-600",
  "Only in Atlanta": "bg-orange-50 text-pulse-orange",
  "Coffee": "bg-yellow-50 text-yellow-700",
  "Unique": "bg-teal-50 text-teal-600",
  "Weekly": "bg-blue-50 text-blue-600",
  "Annual": "bg-blue-50 text-blue-600",
  "Must Experience": "bg-red-50 text-red-500",
  "NFL": "bg-red-50 text-red-500",
  "NBA": "bg-blue-50 text-blue-600",
  "MLB": "bg-indigo-50 text-indigo-600",
};

export default async function TwoLevelPage({ params }: { params: Promise<Params> }) {
  const { category, modifier } = await params;

  const isNeighCat = isNeighborhood(category) && isCategory(modifier);
  const isCatMod = isCategory(category) && isModifier(modifier);

  if (!isNeighCat && !isCatMod) notFound();

  const hood = isNeighCat ? getNeighborhood(category)! : null;
  const cat = isNeighCat ? getCategory(modifier)! : getCategory(category)!;
  const mod = isCatMod ? getModifier(modifier)! : null;

  // Category x modifier pages only list picks for "best". The other modifiers
  // (free, open now, tonight, ...) are not verified, so they show the coming-soon card.
  const places: Place[] = isNeighCat
    ? getPlacesByNeighborhoodAndCategory(category, modifier)
    : mod!.slug === "best"
      ? getPlacesByCategory(category).slice(0, 8)
      : [];

  // Neighborhoods with few direct picks are topped up with citywide favorites
  const hasCitywidePicks = isNeighCat && places.some((p) => p.neighborhood !== category);

  const heading = isNeighCat
    ? `Best ${cat.name} in ${hood!.name}`
    : `${cat.name} ${mod!.name} in Atlanta`;

  const subheading = isNeighCat
    ? `Local picks for ${cat.name.toLowerCase()} in ${hood!.name}, Atlanta. Always confirm hours and details on each official site.`
    : mod!.slug === "best"
      ? `Starting-point picks for ${cat.name.toLowerCase()} in Atlanta. Always confirm hours, prices, and availability on each official site before you go.`
      : `We're still building our ${mod!.name.toLowerCase()} ${cat.name.toLowerCase()} list for Atlanta. Join the list and new picks land every Thursday.`;

  const breadcrumb = isNeighCat
    ? [
        { label: "Atlanta", href: "/atlanta" },
        { label: hood!.name, href: `/atlanta/${hood!.slug}` },
        { label: cat.name, href: `/atlanta/${hood!.slug}/${cat.slug}` },
      ]
    : [
        { label: "Atlanta", href: "/atlanta" },
        { label: cat.name, href: `/atlanta/${cat.slug}` },
        { label: mod!.name, href: `/atlanta/${cat.slug}/${mod!.slug}` },
      ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: heading,
    description: subheading,
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: breadcrumb.map((b, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: b.label,
        item: `https://myatlantapulse.com${b.href}`,
      })),
    },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="min-h-screen bg-[#FAF8F7]">
        {/* Hero */}
        <section className="pt-32 pb-16 px-6" style={{ background: "linear-gradient(170deg, #FBEAEE 0%, #FAF8F7 60%)" }}>
          <div className="max-w-3xl mx-auto">
            <nav className="flex items-center gap-1.5 text-xs text-gray-400 mb-6 flex-wrap">
              {breadcrumb.map((b, i) => (
                <span key={b.href} className="flex items-center gap-1.5">
                  {i > 0 && <span>/</span>}
                  <Link href={b.href} className="hover:text-pulse-orange transition-colors">{b.label}</Link>
                </span>
              ))}
            </nav>
            <div className="text-4xl mb-4">{cat.emoji}</div>
            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-black text-gray-900 leading-tight mb-5">
              {heading}
            </h1>
            <p className="text-gray-600 text-lg max-w-xl leading-relaxed">{subheading}</p>
          </div>
        </section>

        {/* Places */}
        <section className="py-16 px-6">
          <div className="max-w-3xl mx-auto">

            {places.length > 0 ? (
              <>
                <p className="text-gray-400 text-xs font-bold uppercase tracking-wider mb-6">
                  {places.length} picks · Curated by Atlanta Pulse{hasCitywidePicks ? " · Includes citywide favorites" : ""}
                </p>
                <div className="space-y-4 mb-12">
                  {places.map((place, i) => (
                    <div key={i} className="bg-white rounded-2xl border border-gray-100 hover:border-orange-200 hover:shadow-md hover:shadow-orange-50 p-6 transition-all duration-200">
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-2 flex-wrap">
                            {place.tag && (
                              <span className={`text-[10px] font-black tracking-wider uppercase px-2.5 py-1 rounded-full ${TAG_COLORS[place.tag] ?? "bg-gray-100 text-gray-500"}`}>
                                {place.tag}
                              </span>
                            )}
                            <span className="text-[10px] text-gray-400 font-medium uppercase tracking-wider">{place.vibe}</span>
                          </div>
                          <h3 className="font-heading font-black text-gray-900 text-lg mb-2">{place.name}</h3>
                          <p className="text-gray-500 text-sm leading-relaxed">{place.description}</p>
                        </div>
                        <span className="text-gray-200 font-heading font-black text-2xl shrink-0 mt-1">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            ) : (
              <div className="bg-white rounded-2xl border border-gray-100 p-8 text-center mb-8">
                <div className="text-3xl mb-3">{cat.emoji}</div>
                <p className="text-gray-700 font-semibold mb-1">More picks dropping every Thursday.</p>
                <p className="text-gray-500 text-sm">Subscribe and get the best {cat.name.toLowerCase()} picks delivered free.</p>
              </div>
            )}

            {/* Newsletter inline CTA */}
            <div className="bg-orange-50 border border-orange-100 rounded-2xl p-6 text-center mb-10">
              <p className="text-gray-800 font-bold mb-1">Get fresh {cat.name.toLowerCase()} picks every Thursday.</p>
              <p className="text-gray-500 text-sm mb-4">Free weekly newsletter for people who like getting out in Atlanta.</p>
              <Link href="/#subscribe"
                className="inline-block bg-pulse-orange text-white font-black px-7 py-3 rounded-xl text-sm hover:opacity-90 transition-all hover:scale-[1.02]">
                Subscribe Free →
              </Link>
            </div>

            {/* Filter / Related */}
            {isNeighCat && (
              <div className="mb-6">
                <p className="text-gray-400 text-xs font-bold uppercase tracking-wider mb-3">Filter {cat.name} in {hood!.name}</p>
                <div className="flex flex-wrap gap-2">
                  {MODIFIERS.map((m) => (
                    <Link key={m.slug} href={`/atlanta/${category}/${modifier}/${m.slug}`}
                      className="text-xs bg-white border border-gray-200 hover:border-pulse-orange hover:text-pulse-orange text-gray-600 px-3 py-1.5 rounded-full transition-all">
                      {m.name}
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {isNeighCat && (
              <div>
                <p className="text-gray-400 text-xs font-bold uppercase tracking-wider mb-3">More in {hood!.name}</p>
                <div className="flex flex-wrap gap-2">
                  {CATEGORIES.filter(c => c.slug !== modifier).map((c) => (
                    <Link key={c.slug} href={`/atlanta/${category}/${c.slug}`}
                      className="text-xs bg-white border border-gray-200 hover:border-pulse-orange hover:text-pulse-orange text-gray-600 px-3 py-1.5 rounded-full transition-all">
                      {c.emoji} {c.name}
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {isCatMod && (
              <div>
                <p className="text-gray-400 text-xs font-bold uppercase tracking-wider mb-3">By Neighborhood</p>
                <div className="flex flex-wrap gap-2">
                  {NEIGHBORHOODS.slice(0, 10).map((n) => (
                    <Link key={n.slug} href={`/atlanta/${n.slug}/${category}`}
                      className="text-xs bg-white border border-gray-200 hover:border-pulse-orange hover:text-pulse-orange text-gray-600 px-3 py-1.5 rounded-full transition-all">
                      {n.name}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="py-16 px-6 bg-gray-900">
          <div className="max-w-xl mx-auto text-center">
            <h2 className="font-heading text-3xl sm:text-4xl font-black text-white mb-4">
              Atlanta&apos;s insider guide. Free, every Thursday.
            </h2>
            <p className="text-gray-400 text-base mb-8">
              Join the list for one free email every Thursday. No spam. No fluff.
            </p>
            <Link href="/#subscribe"
              className="inline-block bg-pulse-orange text-white font-black px-8 py-4 rounded-xl text-sm hover:opacity-90 transition-all hover:scale-[1.02] shadow-lg">
              Get the Free Newsletter →
            </Link>
          </div>
        </section>

        <div className="py-8 px-6 bg-[#FAF8F7] border-t border-gray-100 text-center">
          <Link href={isNeighCat ? `/atlanta/${hood!.slug}` : `/atlanta/${cat.slug}`}
            className="text-gray-400 hover:text-gray-700 text-sm transition-colors">
            {isNeighCat ? `← ${hood!.name}` : `← ${cat.name}`}
          </Link>
        </div>
      </div>
    </>
  );
}
