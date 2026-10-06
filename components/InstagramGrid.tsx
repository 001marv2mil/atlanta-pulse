"use client";

import { motion } from "framer-motion";

const INSTAGRAM_URL = "https://instagram.com/myatlantapulse";

const tiles = [
  { id: "1", emoji: "🗓️", label: "Events", caption: "What's on around town", bg: "from-[#13274F] to-[#1F3A6E]" },
  { id: "2", emoji: "🍽️", label: "Food", caption: "Where to eat", bg: "from-pulse-orange to-[#A80E36]" },
  { id: "3", emoji: "🌙", label: "Nightlife", caption: "After dark", bg: "from-[#13274F] to-[#1F3A6E]" },
  { id: "4", emoji: "🎶", label: "Music", caption: "Live shows", bg: "from-pulse-orange to-[#A80E36]" },
  { id: "5", emoji: "🎨", label: "Arts", caption: "Culture & galleries", bg: "from-[#13274F] to-[#1F3A6E]" },
  { id: "6", emoji: "🍑", label: "Weekend Plans", caption: "Things to do", bg: "from-pulse-orange to-[#A80E36]" },
];

export default function InstagramGrid() {
  return (
    <section className="py-24 md:py-32 px-6 bg-[#FAF8F7]">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
          <div>
            <motion.span initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="text-pulse-orange text-xs font-semibold tracking-[0.3em] uppercase block mb-3">
              @myatlantapulse
            </motion.span>
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ delay: 0.1 }} className="font-heading text-4xl md:text-5xl font-black text-gray-900">
              Follow Along 📸
            </motion.h2>
          </div>
          <motion.a initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
            href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-2 text-pulse-orange hover:text-white bg-orange-50 hover:bg-pulse-orange border border-orange-200 hover:border-pulse-orange px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
            Follow
          </motion.a>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {tiles.map((tile, i) => (
            <motion.a key={tile.id} href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer"
              aria-label={`${tile.label} on Instagram`}
              initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }} whileHover={{ scale: 1.02 }}
              className={`group relative aspect-square rounded-2xl overflow-hidden bg-gradient-to-br ${tile.bg} border border-orange-100 hover:border-pulse-orange/40 transition-colors duration-300 flex flex-col items-center justify-center text-center p-4`}>
              <span className="text-5xl md:text-6xl mb-3 transition-transform duration-500 group-hover:scale-110">{tile.emoji}</span>
              <span className="font-heading font-black text-white text-base md:text-lg leading-tight">{tile.label}</span>
              <span className="text-white/90 text-[11px] md:text-xs font-medium mt-1">{tile.caption}</span>
              <span className="absolute bottom-3 left-0 right-0 text-white/80 text-[10px] font-bold uppercase tracking-wider opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                See more on Instagram →
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
