"use client";

import { motion } from "framer-motion";

// Launch-stage section: principles we stand behind (no quotes, names or stats).
const testimonials = [
  {
    icon: "📍",
    title: "Locals-picked",
    body: "Every pick is chosen with Atlanta locals in mind. The stuff actually worth leaving the house for.",
    color: "bg-orange-100 text-orange-600",
  },
  {
    icon: "🚫",
    title: "Clear about partnerships",
    body: "We pick what's worth your time. If a spot is a paid partnership, we'll tell you.",
    color: "bg-blue-100 text-blue-600",
  },
  {
    icon: "📅",
    title: "Every Thursday",
    body: "One email a week, timed so you can plan your weekend. Short, skimmable, no filler.",
    color: "bg-rose-100 text-rose-600",
  },
  {
    icon: "🍑",
    title: "Free to join",
    body: "Free to read and free to join. No spam, and you can unsubscribe anytime.",
    color: "bg-teal-100 text-teal-600",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-24 md:py-32 px-6 bg-orange-50 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.span initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-pulse-orange text-xs font-semibold tracking-[0.3em] uppercase block mb-4">
            The Atlanta Pulse Way
          </motion.span>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ delay: 0.1 }} className="font-heading text-4xl md:text-5xl font-black text-gray-900">
            What you can count on 🤝
          </motion.h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {testimonials.map((t, i) => (
            <motion.div key={t.title}
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="bg-white border border-orange-100 hover:border-orange-300 rounded-2xl p-6 transition-all duration-300 hover:shadow-lg hover:shadow-orange-100/50">

              {/* Icon */}
              <div className={`w-10 h-10 rounded-full flex items-center justify-center text-lg shrink-0 mb-4 ${t.color}`}>
                {t.icon}
              </div>

              <p className="text-gray-800 text-base font-bold mb-2">{t.title}</p>
              <p className="text-gray-600 text-sm leading-relaxed">{t.body}</p>
            </motion.div>
          ))}
        </div>

        {/* Bottom note */}
        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center text-gray-400 text-xs mt-10">
          <a href="/#subscribe" className="hover:text-pulse-orange transition-colors">Join the list. New every Thursday →</a>
        </motion.p>
      </div>
    </section>
  );
}
