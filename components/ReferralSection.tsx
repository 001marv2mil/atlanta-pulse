"use client";

import { useState } from "react";

interface ReferralSectionProps {
  subscriberId?: string;
  issueNumber?: number;
}

export default function ReferralSection({ subscriberId, issueNumber }: ReferralSectionProps) {
  const [copied, setCopied] = useState(false);

  const siteUrl = "https://myatlantapulse.com";
  // Use the subscriber's real referral link when available,
  // otherwise fall back to the homepage (anonymous visitors).
  const referralUrl = subscriberId
    ? `${siteUrl}?ref=${subscriberId}`
    : siteUrl;

  async function trackShare(method: string) {
    try {
      await fetch("/api/track-share", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          subscriberId: subscriberId ?? null,
          issueNumber: issueNumber ?? null,
          method,
          cta: "referral_section",
          referralUrl,
        }),
      });
    } catch {
      // Non-blocking: never let tracking errors break the share action
    }
  }

  const handleCopy = async () => {
    await navigator.clipboard.writeText(referralUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
    trackShare("copy_link");
  };

  const handleNativeShare = () => {
    const sharePayload = {
      title: "Atlanta Pulse",
      text: "A free weekly newsletter for what's happening in Atlanta",
      url: referralUrl,
    };

    if (navigator.share) {
      navigator.share(sharePayload).then(() => {
        trackShare("native");
      }).catch(() => {
        // User cancelled or not supported, fall back to copy
        navigator.clipboard.writeText(referralUrl);
        trackShare("copy_link");
      });
    } else {
      navigator.clipboard.writeText(referralUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
      trackShare("copy_link");
    }
  };

  const handleTwitter = () => {
    const text = encodeURIComponent("Found a free weekly newsletter for what's happening in Atlanta. Check it out:");
    const url = encodeURIComponent(referralUrl);
    window.open(`https://twitter.com/intent/tweet?text=${text}&url=${url}`, "_blank", "noopener");
    trackShare("twitter");
  };

  const handleSMS = () => {
    const body = encodeURIComponent(`Check out Atlanta Pulse, a free weekly newsletter for what's happening in Atlanta: ${referralUrl}`);
    window.location.href = `sms:?&body=${body}`;
    trackShare("sms");
  };

  const displayUrl = subscriberId
    ? `myatlantapulse.com?ref=${subscriberId.slice(0, 8)}...`
    : "myatlantapulse.com";

  return (
    <section className="max-w-4xl mx-auto px-6 mb-20">
      <div className="bg-gray-900 rounded-2xl p-8 md:p-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-pulse-orange/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[200px] h-[200px] bg-pulse-orange/5 rounded-full blur-[80px] pointer-events-none" />

        <div className="relative z-10">

          {/* Badge */}
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="flex items-center gap-2 bg-pulse-orange/15 border border-pulse-orange/30 rounded-full px-4 py-1.5">
              <span className="w-1.5 h-1.5 bg-pulse-orange rounded-full animate-pulse" />
              <span className="text-pulse-orange text-xs font-semibold tracking-wider uppercase">
                Share the Pulse
              </span>
            </div>
          </div>

          {/* Pitch */}
          <div className="text-center mb-10">
            <div className="text-6xl mb-4">🍑</div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-3">
              Know someone who&apos;d love this?
            </h2>
            <p className="text-gray-400 text-sm md:text-base max-w-md mx-auto mb-2">
              Send Atlanta Pulse to a friend who&apos;s always asking what&apos;s going on this weekend. It&apos;s free and lands every Thursday.
            </p>
            <p className="text-pulse-orange text-xs font-semibold tracking-wider uppercase">
              Free &nbsp;&middot;&nbsp; New every Thursday
            </p>
          </div>

          {/* How it works */}
          <div className="grid grid-cols-3 gap-4 mb-10">
            {[
              { step: "1", text: "Copy the link below" },
              { step: "2", text: "Send it to an Atlanta friend" },
              { step: "3", text: "They subscribe and get the Thursday email" },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-8 h-8 bg-pulse-orange/20 border border-pulse-orange/30 rounded-full flex items-center justify-center mx-auto mb-2">
                  <span className="text-pulse-orange text-xs font-bold">{item.step}</span>
                </div>
                <p className="text-gray-500 text-xs leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>

          {/* Share link + copy button */}
          <div className="flex flex-col sm:flex-row items-center gap-3 max-w-md mx-auto mb-4">
            <div className="flex-1 w-full bg-white/5 border border-white/10 rounded-full px-5 py-3.5 text-gray-500 text-sm truncate font-mono">
              {displayUrl}
            </div>
            <button
              onClick={handleCopy}
              className={`whitespace-nowrap font-semibold px-7 py-3.5 rounded-full transition-all duration-300 text-sm ${
                copied
                  ? "bg-green-500/20 text-green-400 border border-green-500/30"
                  : "bg-pulse-orange hover:bg-pulse-orange/90 text-white hover:scale-105"
              }`}
            >
              {copied ? "Copied! ✓" : "Copy Link"}
            </button>
          </div>

          {/* Quick share buttons */}
          <div className="flex items-center justify-center gap-2 mb-6 flex-wrap">
            <button
              onClick={handleTwitter}
              className="flex items-center gap-1.5 bg-black border border-white/10 text-white text-xs font-semibold px-4 py-2 rounded-full hover:bg-white/10 transition-colors"
            >
              𝕏 Post
            </button>
            <button
              onClick={handleSMS}
              className="flex items-center gap-1.5 bg-green-600 text-white text-xs font-semibold px-4 py-2 rounded-full hover:bg-green-500 transition-colors"
            >
              💬 Text a Friend
            </button>
            <button
              onClick={handleNativeShare}
              className="flex items-center gap-1.5 bg-white/10 border border-white/20 text-white text-xs font-semibold px-4 py-2 rounded-full hover:bg-white/20 transition-colors"
            >
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M4 12v8a2 2 0 002 2h12a2 2 0 002-2v-8"/><polyline points="16 6 12 2 8 6"/><line x1="12" y1="2" x2="12" y2="15"/></svg>
              More
            </button>
          </div>

          <p className="text-gray-600 text-xs text-center mb-8">
            Share it however you like. Every friend you send our way helps Atlanta Pulse grow.
          </p>

          {/* Instagram follow */}
          <div className="border-t border-white/10 pt-8">
            <div className="text-center mb-6">
              <p className="text-white text-sm font-semibold mb-1">Want more Atlanta picks?</p>
              <p className="text-gray-500 text-xs">Follow us on Instagram for local finds between issues.</p>
            </div>
            <div className="flex justify-center">
              <a
                href="https://instagram.com/myatlantapulse"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-[#833AB4] via-[#E1306C] to-[#CE1141] text-white font-semibold text-sm px-6 py-3 rounded-full hover:scale-105 transition-transform"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                Follow @myatlantapulse
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
