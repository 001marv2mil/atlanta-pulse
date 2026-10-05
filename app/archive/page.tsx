import Link from "next/link";
import { getArchiveIssues } from "@/lib/newsletter-parser";

export const metadata = {
  title: "Archive | Atlanta Pulse",
  description: "Browse past issues of Atlanta Pulse. Every week's best events, nightlife, and hidden gems in Atlanta.",
};

export default function ArchivePage() {
  const archiveIssues = getArchiveIssues();
  return (
    <div className="min-h-screen bg-midnight pt-24 pb-20">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <span className="text-orange-300 text-xs font-semibold tracking-[0.3em] uppercase mb-4 block">
          Past Issues
        </span>
        <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
          Archive
        </h1>
        <p className="text-white/60 text-lg max-w-xl">
          Missed a week? We&apos;ve got you. Every issue of Atlanta Pulse will live right here.
        </p>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto px-6">
        {archiveIssues.length === 0 ? (
          <div className="glass rounded-2xl max-w-xl mx-auto px-8 py-14 text-center">
            <div className="text-5xl mb-5">🍑</div>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-white mb-3">
              First Atlanta issue coming soon
            </h2>
            <p className="text-white/50 text-base leading-relaxed mb-8">
              We&apos;re putting the finishing touches on issue one. Join the list and it lands in your inbox on a Thursday.
            </p>
            <Link
              href="/#subscribe"
              className="inline-block bg-pulse-orange hover:bg-pulse-orange-hover text-white font-bold px-8 py-3.5 rounded-full transition-all duration-200 hover:scale-105 text-sm"
            >
              Join the list →
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {archiveIssues.map((issue) => (
              <Link
                key={issue.id}
                href="/#subscribe"
                className="group relative rounded-2xl overflow-hidden h-[320px] cursor-pointer transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url(${issue.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/20" />
                <div className="absolute top-4 left-4 z-10">
                  <span className="glass text-white/80 text-[10px] font-semibold tracking-wider uppercase px-3 py-1.5 rounded-full">
                    Issue #{issue.number}
                  </span>
                </div>
                <div className="absolute top-4 right-4 z-10">
                  <span className="text-orange-300 text-xs font-medium">
                    {issue.eventCount} picks
                  </span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-5 z-10">
                  <span className="text-white/60 text-xs font-medium block mb-2">
                    {issue.date}
                  </span>
                  <h3 className="font-heading text-xl font-bold text-white leading-tight">
                    {issue.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
