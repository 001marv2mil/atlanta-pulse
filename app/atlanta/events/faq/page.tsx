import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Atlanta Events FAQ — What's Happening This Weekend | Atlanta Pulse",
  description:
    "Answers to common questions about Atlanta events — how to find what's happening this weekend, free events, annual festivals, concerts, and more.",
  keywords: [
    "Atlanta events FAQ",
    "Atlanta events this weekend",
    "things to do Atlanta",
    "Atlanta festivals",
    "Atlanta concerts",
    "free events Atlanta",
    "Atlanta Pulse",
  ],
  openGraph: {
    title: "Atlanta Events FAQ | Atlanta Pulse",
    description: "What's happening in Atlanta this weekend? We answer common questions about finding and planning for Atlanta events.",
    type: "website",
    siteName: "Atlanta Pulse",
  },
};

const faqs = [
  {
    question: "What events are happening in Atlanta this weekend?",
    answer:
      "Atlanta has something going on most weekends — festivals, markets, concerts, sports, and more. The best way to know what's happening this specific weekend is to check the official calendars for venues and parks, and to subscribe to Atlanta Pulse, a free newsletter that goes out every Thursday with ideas for the weekend. You can also browse the Atlanta Events page on this site for evergreen picks.",
  },
  {
    question: "What are the biggest annual events in Atlanta?",
    answer:
      "A few long-running annual Atlanta events: the Peachtree Road Race, the city's best-known road race, with spectators lining Peachtree Street. Dragon Con, a huge fan convention with a famous parade through Downtown. Atlanta Pride, a festival and parade centered around Piedmont Park and Midtown. And the Atlanta Dogwood Festival, with art, music, and food in Piedmont Park. Always check each event's official site for current dates, tickets, and details.",
  },
  {
    question: "Are there free events in Atlanta?",
    answer:
      "Yes, there are free things to do. Piedmont Park and Centennial Olympic Park host events and gatherings throughout the year, so check their official calendars for what's on and whether tickets are needed. The BeltLine Eastside Trail is free to walk. Many festivals and markets offer free admission, but not all of them do, so check each event's official page. We aim to flag free events in the newsletter because getting out shouldn't always cost money.",
  },
  {
    question: "Where do I find family-friendly events in Atlanta?",
    answer:
      "Atlanta has plenty for families. The Georgia Aquarium, Zoo Atlanta, Fernbank Museum of Natural History, the Center for Puppetry Arts, and the Atlanta Botanical Garden are all good options to explore. Piedmont Park and Centennial Olympic Park are great for letting kids run around. Check each official site for hours, tickets, and special events before you go.",
  },
  {
    question: "What's happening in Midtown this weekend?",
    answer:
      "Midtown is Atlanta's arts and culture district, home to Piedmont Park, the High Museum of Art, the Fox Theatre, and the Atlanta Botanical Garden, plus plenty of restaurants and bars. For specifics this weekend, check the official calendars for those venues and subscribe to the Atlanta Pulse newsletter, which goes out every Thursday.",
  },
  {
    question: "Are there outdoor events and festivals in Atlanta?",
    answer:
      "Yes. Outdoor events in Atlanta tend to cluster around Piedmont Park, Centennial Olympic Park, and Stone Mountain Park, and along the BeltLine. Long-running festivals like the Atlanta Dogwood Festival and Atlanta Pride take place in and around Piedmont Park. Spring and fall are popular times to be outside, while summers get hot and humid, so plan accordingly. Check each park's official calendar for what's on.",
  },
  {
    question: "What are the best music venues in Atlanta for live events?",
    answer:
      "Atlanta has a deep live music scene. The Fox Theatre is a historic movie palace hosting touring concerts and shows. Tabernacle is a mid-sized concert hall Downtown. Variety Playhouse is a long-running room in Little Five Points. The Earl in East Atlanta Village is a small club for indie, rock, and punk. Terminal West in West Midtown is a mid-sized venue in a converted industrial building. State Farm Arena and Mercedes-Benz Stadium handle the big touring shows. Check each venue's official calendar to see who's playing.",
  },
  {
    question: "How far in advance should I plan for Atlanta events?",
    answer:
      "For big festivals, conventions like Dragon Con, and headline concerts, tickets, hotels, and parking can fill up early, so plan ahead and check the official site. For markets, park events, and casual weekend plans, you can usually decide closer to the day. Atlanta Pulse goes out on Thursday with ideas for the coming weekend. Traffic can be heavy on event days, so leave extra time and consider MARTA.",
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

export default function EventsFaqPage() {
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
                href="/atlanta/events"
                className="text-pulse-orange text-xs font-bold tracking-wider uppercase hover:opacity-70 transition-opacity"
              >
                ← Atlanta Events
              </Link>
            </div>
            <div className="text-4xl mb-4">🎉</div>
            <h1 className="font-heading text-5xl sm:text-6xl font-black text-gray-900 leading-tight mb-5">
              Atlanta Events FAQ
            </h1>
            <p className="text-gray-600 text-lg max-w-xl leading-relaxed">
              Everything you need to know about finding and planning for events in Atlanta.
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
              Never Miss an Atlanta Event
            </h2>
            <p className="text-white/90 text-base mb-8">
              Get ideas for the best Atlanta weekend every Thursday morning — curated, not scraped.
              Free weekly newsletter.
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
            href="/atlanta/events"
            className="text-gray-400 hover:text-gray-700 text-sm transition-colors"
          >
            ← Atlanta Events
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
