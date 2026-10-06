import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Atlanta FAQ — Events, Food & Things To Do | Atlanta Pulse",
  description:
    "Answers to common questions about Atlanta — events, restaurants, nightlife, neighborhoods, and things to do this weekend. From the Atlanta Pulse team.",
  keywords: [
    "Atlanta FAQ",
    "things to do in Atlanta",
    "Atlanta events this weekend",
    "best restaurants Atlanta",
    "Atlanta nightlife",
    "Atlanta guide",
    "Atlanta Pulse",
  ],
  openGraph: {
    title: "Atlanta FAQ — Events, Food & Things To Do | Atlanta Pulse",
    description:
      "Answers to common questions about Atlanta — events, restaurants, nightlife, neighborhoods, and hidden gems.",
    type: "website",
    siteName: "Atlanta Pulse",
  },
};

const faqs = [
  {
    question: "What's happening in Atlanta this weekend?",
    answer:
      "Atlanta is a big city, so there's usually something going on. Depending on the season you'll find outdoor events at Piedmont Park, live music at venues like the Fox Theatre, Variety Playhouse, The Earl, Terminal West, and Tabernacle, food and shopping at Ponce City Market and Krog Street Market, and home games at Mercedes-Benz Stadium, State Farm Arena, and Truist Park. Atlanta Pulse sends its picks every Thursday — subscribe free to get them straight to your inbox. You can also browse our Atlanta Events page, and check each venue's official site for current listings and dates.",
  },
  {
    question: "Where are the best restaurants in Atlanta?",
    answer:
      "Atlanta's food scene is spread across the whole city rather than packed into one strip. Ponce City Market and Krog Street Market put a lot of food vendors under one roof near the BeltLine Eastside Trail. Sweet Auburn Curb Market is a historic market downtown. The Buford Highway corridor is well known for its range of international restaurants. Neighborhoods like Midtown, Virginia-Highland, Inman Park, Old Fourth Ward, West Midtown, and Decatur all have plenty of places to eat. For the spots locals actually go to, keep an eye on our weekly newsletter.",
  },
  {
    question: "What are the best things to do in Atlanta?",
    answer:
      "Atlanta has serious range. Downtown you'll find the Georgia Aquarium and Centennial Olympic Park. Midtown has the High Museum of Art, Piedmont Park, and the Atlanta Botanical Garden. Zoo Atlanta, the Fernbank Museum, and Oakland Cemetery are long-standing favorites, and Stone Mountain Park is a popular outing just east of the city. The BeltLine Eastside Trail is great for walking and biking between neighborhoods like Old Fourth Ward and Inman Park. Every neighborhood has its own personality — Little Five Points, Decatur, and Grant Park are all worth exploring. Summers are hot and humid, so outdoor plans are usually best in the morning or evening.",
  },
  {
    question: "How do I find Atlanta events this week?",
    answer:
      "The easiest way is to subscribe to Atlanta Pulse — a free newsletter every Thursday with the week's picks. We also have an Atlanta Events page. For specific venues, the Fox Theatre, Mercedes-Benz Stadium, State Farm Arena, Variety Playhouse, and others publish their own event calendars on their official websites. Long-running annual events like Atlanta Pride, Dragon Con, the Peachtree Road Race, and the Atlanta Dogwood Festival each have official sites with current dates.",
  },
  {
    question: "What is Atlanta Pulse?",
    answer:
      "Atlanta Pulse is a free weekly newsletter for people who live in and around Atlanta. Every Thursday, we send out events, food spots, live music picks, and things to do that week — no fluff, just a casual, local cheat code for your weekend. We cover events, food, nightlife, arts, and the lowkey spots most people haven't found yet.",
  },
  {
    question: "What's the best neighborhood to go out in Atlanta?",
    answer:
      "Depends on what you're after. Midtown is home to the Fox Theatre, the High Museum of Art, and Piedmont Park. Buckhead is known for upscale shopping and dining. Old Fourth Ward and Inman Park, along the BeltLine Eastside Trail, are popular for walkable restaurants and bars. Virginia-Highland is a walkable neighborhood of shops and restaurants. Little Five Points is the quirky, indie pick, and East Atlanta Village is known for dive bars and live music. West Midtown has a mix of restaurants, shops, and music venues. Decatur is technically its own city just east of Atlanta, with a walkable square and a lively dining scene.",
  },
  {
    question: "Are there free things to do in Atlanta?",
    answer:
      "Yes, Atlanta has plenty of free options. Piedmont Park is free to enter, walking or biking the BeltLine Eastside Trail is free, and Centennial Olympic Park downtown is a public park you can stroll through. Public art along the BeltLine is free to look at. Many museums and attractions have occasional free or discounted offers, so check each venue's official site for current details. When we include free events in the newsletter, we flag them, because not everything needs to cost money.",
  },
  {
    question: "What's the best area to stay in Atlanta for tourists?",
    answer:
      "For first-time visitors, Downtown puts you near Centennial Olympic Park, the Georgia Aquarium, Mercedes-Benz Stadium, and State Farm Arena. Midtown is close to Piedmont Park, the High Museum of Art, and the Fox Theatre. Buckhead is a good fit if you want upscale shopping and dining. Atlanta is spread out and traffic and parking can be a real factor, so staying near a MARTA station can help — MARTA rail also connects to Hartsfield-Jackson Atlanta International Airport. Check MARTA's official site for current routes and schedules.",
  },
  {
    question: "What are the major annual events in Atlanta?",
    answer:
      "Atlanta hosts a number of long-running annual events. The Peachtree Road Race, Dragon Con, Atlanta Pride, and the Atlanta Dogwood Festival in Piedmont Park are some of the best known. The Fox Theatre hosts touring Broadway shows and concerts, and the city's major sports venues — Mercedes-Benz Stadium, State Farm Arena, and Truist Park — fill the calendar with games and concerts. Neighborhood festivals and markets round out the year. Check each event's official site for current dates and details.",
  },
  {
    question: "How do I subscribe to Atlanta Pulse?",
    answer:
      "Atlanta Pulse is completely free. Just enter your email on the homepage at myatlantapulse.com and you'll get the next issue straight to your inbox on Thursday morning. No spam — just a weekly look at what's worth doing in Atlanta.",
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

export default function FaqPage() {
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
            <div className="inline-flex items-center gap-2 bg-white border border-orange-200 rounded-full px-4 py-2 mb-6 shadow-sm">
              <span className="text-pulse-orange text-xs font-bold tracking-wider uppercase">
                Atlanta Guide
              </span>
            </div>
            <h1 className="font-heading text-5xl sm:text-6xl font-black text-gray-900 leading-tight mb-5">
              Atlanta FAQ
            </h1>
            <p className="text-gray-600 text-lg max-w-xl leading-relaxed">
              Straight answers to common questions about Atlanta — events, food,
              nightlife, and things to do.
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

        {/* Category FAQ links */}
        <section className="py-10 px-6 bg-white border-t border-b border-gray-100">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-heading font-black text-gray-900 text-xl mb-6">
              More Atlanta Answers
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Link
                href="/atlanta/events/faq"
                className="flex items-center gap-3 bg-gray-50 rounded-xl p-4 hover:bg-orange-50 hover:border-pulse-orange border border-transparent transition-all"
              >
                <span className="text-2xl">🎉</span>
                <div>
                  <div className="font-bold text-gray-900 text-sm">Atlanta Events FAQ</div>
                  <div className="text-gray-500 text-xs">Common questions about Atlanta events</div>
                </div>
              </Link>
              <Link
                href="/atlanta/food/faq"
                className="flex items-center gap-3 bg-gray-50 rounded-xl p-4 hover:bg-orange-50 hover:border-pulse-orange border border-transparent transition-all"
              >
                <span className="text-2xl">🍽️</span>
                <div>
                  <div className="font-bold text-gray-900 text-sm">Atlanta Food FAQ</div>
                  <div className="text-xs text-gray-500">Common questions about Atlanta restaurants</div>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-6 bg-pulse-orange">
          <div className="max-w-xl mx-auto text-center">
            <h2 className="font-heading text-3xl sm:text-4xl font-black text-white mb-4">
              Get Atlanta Delivered Weekly
            </h2>
            <p className="text-white/90 text-base mb-8 max-w-md mx-auto">
              Stop Googling. Subscribe to Atlanta Pulse and get the best events, food, and
              things to do every Thursday. Free.
            </p>
            <Link
              href="/"
              className="inline-block bg-white text-pulse-orange font-black px-8 py-4 rounded-xl text-sm hover:bg-gray-50 transition-all hover:scale-[1.02] shadow-lg"
            >
              Subscribe Free at myatlantapulse.com →
            </Link>
          </div>
        </section>

        <div className="py-8 px-6 bg-[#FAF8F7] border-t border-gray-100 text-center space-x-6">
          <Link href="/atlanta" className="text-gray-400 hover:text-gray-700 text-sm transition-colors">
            Atlanta Guide
          </Link>
          <Link href="/" className="text-gray-400 hover:text-gray-700 text-sm transition-colors">
            Home
          </Link>
        </div>
      </div>
    </>
  );
}
