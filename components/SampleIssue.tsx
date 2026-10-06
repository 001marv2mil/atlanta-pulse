"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const PICKS = [
  { icon: "🌳", category: "OUTDOORS", title: "Piedmont Park", detail: "Midtown · Big lawns, skyline views, and an easy weekend reset" },
  { icon: "🍽️", category: "FOOD", title: "Krog Street Market", detail: "Inman Park · Food-hall energy right off the BeltLine" },
  { icon: "💎", category: "HIDDEN GEM", title: "Oakland Cemetery", detail: "Grant Park area · A peaceful, historic stroll most people skip" },
  { icon: "🎵", category: "NIGHTLIFE", title: "Variety Playhouse", detail: "Little Five Points · Long-running live music room. Check the official calendar." },
  { icon: "🌅", category: "DATE NIGHT", title: "BeltLine Eastside Trail", detail: "Old Fourth Ward to Inman Park · A golden-hour walk with plenty of stops along the way" },
];

export default function SampleIssue({ latestIssueNumber }: { latestIssueNumber?: number }) {
  return (
    <section className="py-20 px-6 bg-[#FAF8F7]">
      <div className="max-w-5xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-start">

          {/* Left copy */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="lg:sticky lg:top-28">
            <p className="text-pulse-orange text-xs font-bold tracking-[0.3em] uppercase mb-3">Sample Issue</p>
            <h2 className="font-heading text-4xl sm:text-5xl font-black text-gray-900 tracking-tight mb-5 leading-tight">
              This is what lands in your inbox.
            </h2>
            <p className="text-gray-500 text-base leading-relaxed mb-8">
              Not a blog. Not a press release. Just the best picks in Atlanta, written like a friend who actually lives here. This is a sample of the format.
            </p>

            <div className="space-y-3 mb-8">
              {["Zero filler. Every pick earns its spot.", "Written in plain English, not marketing copy.", "Covers Metro Atlanta: Midtown, Old Fourth Ward, Decatur, the Westside and beyond.", "Delivered Thursday so you can actually use it this weekend."].map((point) => (
                <div key={point} className="flex items-start gap-3">
                  <span className="text-green-500 mt-0.5 shrink-0">✓</span>
                  <p className="text-gray-600 text-sm">{point}</p>
                </div>
              ))}
            </div>

            <Link href="/newsletter">
              <button className="flex items-center gap-2 text-pulse-orange hover:text-pulse-orange-hover font-bold text-sm border border-orange-200 hover:border-pulse-orange/60 bg-white hover:bg-orange-50 px-5 py-3 rounded-full transition-all duration-200">
                {latestIssueNumber ? "Browse the newsletter →" : "See the newsletter →"}
              </button>
            </Link>
          </motion.div>

          {/* Right picks preview */}
          <div className="space-y-3">
            {PICKS.map((pick, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className="bg-white rounded-2xl border border-gray-100 hover:border-orange-200 p-5 flex items-start gap-4 transition-all duration-200 hover:shadow-md hover:shadow-orange-50">
                <span className="text-2xl shrink-0">{pick.icon}</span>
                <div className="min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className={`text-[10px] font-black tracking-wider px-2 py-0.5 rounded-full ${
                      pick.category === "HIDDEN GEM" ? "bg-blue-50 text-blue-600" :
                      pick.category === "DATE NIGHT" ? "bg-rose-50 text-rose-500" :
                      pick.category === "NIGHTLIFE" ? "bg-purple-50 text-purple-500" :
                      "bg-orange-50 text-pulse-orange"
                    }`}>{pick.category}</span>
                  </div>
                  <p className="text-gray-900 font-bold text-sm mb-0.5">{pick.title}</p>
                  <p className="text-gray-400 text-xs leading-relaxed">{pick.detail}</p>
                </div>
              </motion.div>
            ))}

            {/* Blur teaser */}
            <div className="relative">
              <div className="bg-white rounded-2xl border border-gray-100 p-5 flex items-start gap-4">
                <span className="text-2xl">🍹</span>
                <div>
                  <span className="text-[10px] font-black bg-teal-50 text-teal-600 px-2 py-0.5 rounded-full">HAPPY HOUR</span>
                  <p className="text-gray-900 font-bold text-sm mt-1">More picks like these, every Thursday</p>
                  <p className="text-gray-400 text-xs">Rooftops, patios, and neighborhood bars · Subscribers get the full list</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
