"use client";

import { motion } from "framer-motion";
import Link from "next/link";

interface Issue {
  id: string;
  number: number;
  date: string;
  title: string;
  image: string;
  eventCount: number;
}

export default function NewsletterGrid({ issues }: { issues: Issue[] }) {
  const latest = issues[0];
  const past = issues.slice(1);

  return (
    <div className="min-h-screen bg-[#FAF8F7] pt-28 pb-24 px-6">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="mb-12">
          <div className="inline-flex items-center gap-2 bg-orange-50 border border-orange-200 rounded-full px-4 py-1.5 mb-4">
            <span className="w-1.5 h-1.5 bg-pulse-orange rounded-full animate-pulse" />
            <span className="text-pulse-orange text-xs font-semibold tracking-wider uppercase">Issue Archive</span>
          </div>
          <h1 className="font-heading text-4xl sm:text-5xl font-black text-gray-900 tracking-tight mb-3">
            Every Issue, One Place.
          </h1>
          <p className="text-gray-500 text-base max-w-lg">
            {issues.length === 0
              ? "Atlanta's best weekly picks, every Thursday. Our first issue is on the way."
              : `${issues.length} ${issues.length === 1 ? "issue" : "issues"} and counting. Atlanta's best weekly picks, every Thursday.`}
          </p>
        </motion.div>

        {/* Empty state — no issues published yet */}
        {issues.length === 0 && (
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="mb-10">
            <div className="rounded-3xl border border-orange-100 bg-white shadow-sm px-8 py-14 sm:py-16 text-center">
              <div className="text-5xl mb-5">🍑</div>
              <h2 className="font-heading text-2xl sm:text-3xl font-black text-gray-900 tracking-tight mb-3">
                First Atlanta issue coming soon
              </h2>
              <p className="text-gray-500 text-base max-w-md mx-auto">
                We&apos;re putting the finishing touches on issue one. Join the list and it lands in your inbox on a Thursday.
              </p>
            </div>
          </motion.div>
        )}

        {/* Latest Issue — Hero Card */}
        {latest && (
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="mb-10">
            <p className="text-gray-400 text-xs font-semibold tracking-widest uppercase mb-3">Latest Issue</p>
            <Link href="/#subscribe">
              <div className="group relative rounded-3xl overflow-hidden border border-orange-100 hover:border-pulse-orange/40 shadow-sm hover:shadow-xl hover:shadow-orange-100/60 transition-all duration-300 cursor-pointer">
                <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: `url(${latest.image})` }} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/10" />
                <div className="relative z-10 p-8 sm:p-10 flex flex-col justify-end min-h-[340px] sm:min-h-[400px]">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="bg-pulse-orange text-white text-xs font-bold px-3 py-1 rounded-full">Issue #{latest.number}</span>
                    <span className="text-white/70 text-xs">{latest.date}</span>
                    <span className="text-white/40 text-xs">·</span>
                    <span className="text-white/70 text-xs">{latest.eventCount} picks inside</span>
                  </div>
                  <h2 className="font-heading text-3xl sm:text-4xl font-black text-white leading-tight mb-4 group-hover:text-orange-200 transition-colors duration-200">
                    {latest.title}
                  </h2>
                  <div className="flex items-center gap-2 text-white/70 text-sm font-medium group-hover:text-white transition-colors duration-200">
                    Get the next one in your inbox
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        )}

        {/* Past Issues Grid */}
        {past.length > 0 && (
        <div>
          <p className="text-gray-400 text-xs font-semibold tracking-widest uppercase mb-5">Past Issues</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {past.map((issue, i) => (
              <motion.div key={issue.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.15 + i * 0.05 }}>
                <Link href="/#subscribe">
                  <div className="group relative rounded-2xl overflow-hidden border border-gray-100 hover:border-orange-300 transition-all duration-300 cursor-pointer bg-white hover:shadow-lg hover:shadow-orange-100/50">
                    <div className="relative h-44 overflow-hidden">
                      <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                        style={{ backgroundImage: `url(${issue.image})` }} />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <div className="absolute top-3 left-3">
                        <span className="bg-pulse-orange text-white text-xs font-bold px-2.5 py-1 rounded-full">#{issue.number}</span>
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="font-heading text-gray-900 font-bold text-base leading-snug mb-2 group-hover:text-pulse-orange transition-colors duration-200 line-clamp-2">
                        {issue.title}
                      </h3>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-400 text-xs">{issue.date}</span>
                        <span className="text-gray-300 text-xs">{issue.eventCount} picks</span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
        )}

        {/* Bottom CTA */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }} className="mt-16 text-center">
          <p className="text-gray-400 text-sm mb-4">Not subscribed yet?</p>
          <Link href="/#subscribe">
            <button className="bg-pulse-orange hover:bg-pulse-orange-hover text-white font-bold px-8 py-3.5 rounded-full transition-all duration-200 hover:scale-105 hover:shadow-xl hover:shadow-orange-200 text-sm">
              Get it free every Thursday →
            </button>
          </Link>
        </motion.div>

      </div>
    </div>
  );
}
