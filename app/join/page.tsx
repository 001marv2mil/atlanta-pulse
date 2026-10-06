"use client";

import { useState, useEffect } from "react";

export default function JoinPage() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [ref, setRef] = useState<string | null>(null);
  const [eventName, setEventName] = useState<string | null>(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const refParam = params.get("ref");
    const eventParam = params.get("event");
    if (refParam) setRef(refParam);
    if (eventParam) setEventName(eventParam);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, ref, source: eventName ?? "join" }),
      });
      if (!res.ok) {
        let msg = "Something went wrong. Try again.";
        try {
          const d = await res.json();
          if (typeof d?.error === "string" && d.error) msg = d.error;
        } catch {}
        throw new Error(msg);
      }
      window.location.href = "/thank-you";
    } catch (err) {
      setError(err instanceof Error && !(err instanceof TypeError) && err.message ? err.message : "Something went wrong. Try again.");
      setLoading(false);
    }
  };

  return (
    <>
      <style jsx global>{`
        nav, footer, header { display: none !important; }
        body { background: #0B1630 !important; }
      `}</style>

      {/* Full-screen background */}
      <div
        className="min-h-screen flex flex-col items-center justify-center px-5 py-14 relative"
        style={{
          backgroundImage:
            "radial-gradient(ellipse at 50% 0%, #13274F 0%, #0B1630 55%, #050A18 100%)",
        }}
      >
        {/* Dark overlay */}
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to bottom, rgba(0,0,0,0.10) 0%, rgba(0,0,0,0.30) 50%, rgba(0,0,0,0.55) 100%)" }}
        />

        {/* Content */}
        <div className="relative z-10 w-full max-w-md flex flex-col items-center text-center">

          {/* Logo */}
          <p className="font-heading text-lg font-black text-white tracking-tight mb-8">
            Atlanta <span className="text-orange-300">Pulse</span>
          </p>

          {/* Headline */}
          <h1 className="font-heading text-4xl sm:text-5xl font-black text-white leading-tight mb-4">
            Want in on<br />
            <span className="text-orange-400">the next issue?</span>
          </h1>

          {/* Sub-headline */}
          <p className="text-white/60 text-base leading-relaxed mb-8 max-w-sm">
            Drop your email. We&apos;ll send you the weekly cheat code to Atlanta, every Thursday.
          </p>

          {/* Form */}
          <form onSubmit={handleSubmit} className="w-full space-y-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              required
              autoComplete="email"
              className="w-full bg-white/10 border border-white/20 rounded-full px-5 py-4 text-white placeholder:text-white/30 focus:outline-none focus:border-[#CE1141]/60 transition-all text-sm backdrop-blur-sm"
            />
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#CE1141] hover:bg-[#A80E36] disabled:opacity-60 text-white font-black py-4 rounded-full transition-all text-sm tracking-wide"
            >
              {loading ? "One sec…" : "I'm In. It's Free"}
            </button>
          </form>

          {error && (
            <p className="text-red-400 text-xs mt-2">{error}</p>
          )}

          {/* Trust */}
          <p className="text-white/20 text-xs mt-5">
            No spam. Unsubscribe anytime.
          </p>

        </div>
      </div>
    </>
  );
}
