import Link from "next/link";

export const metadata = {
  title: "You're In — Atlanta Pulse",
  description: "Thanks for joining Atlanta Pulse. New every Thursday.",
};

export default function ThankYouPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6 py-20"
      style={{ background: "linear-gradient(170deg, #FCF0F2 0%, #FAF8F7 45%, #FAF6F6 100%)" }}>

      {/* Logo */}
      <div className="mb-10">
        <Link href="/">
          <span className="font-heading text-3xl font-black text-gray-900">
            atlanta<span style={{ color: "#CE1141" }}>pulse</span>
          </span>
        </Link>
      </div>

      {/* Card */}
      <div className="bg-white rounded-3xl border border-orange-100 shadow-2xl shadow-orange-100/40 max-w-lg w-full p-10 text-center">

        <div className="text-5xl mb-5">🎉</div>

        <h1 className="text-3xl font-black text-gray-900 mb-3 leading-tight">
          You&apos;re in.<br />
          <span style={{ color: "#CE1141" }}>Welcome to Atlanta Pulse.</span>
        </h1>

        <p className="text-gray-500 text-base leading-relaxed mb-8">
          Thanks for joining the list. While you wait for the next issue, start exploring Atlanta:
        </p>

        {/* Primary CTA */}
        <Link
          href="/atlanta"
          className="block w-full text-center text-white font-black text-lg py-4 px-8 rounded-2xl mb-4 transition-all hover:scale-[1.02]"
          style={{ background: "#CE1141" }}
        >
          Explore Atlanta →
        </Link>

        <p className="text-gray-400 text-xs mb-8">Free · New every Thursday</p>

        {/* Divider */}
        <div className="border-t border-gray-100 pt-7 mb-6">
          <p className="text-gray-500 text-sm font-semibold mb-1">New issues land every Thursday.</p>
          <p className="text-gray-400 text-sm">Locals&apos; picks, not tourist traps — direct to your inbox every week.</p>
        </div>

        {/* Share nudge */}
        <div className="bg-orange-50 rounded-xl p-5 text-left mb-6">
          <p className="text-sm font-bold text-gray-900 mb-1">🍑 Know someone who&apos;s always asking what to do this weekend?</p>
          <p className="text-xs text-gray-500 leading-relaxed">
            Send them our way. The more of us in on the weekly cheat code, the better.
          </p>
        </div>

        {/* Read latest issue */}
        <Link
          href="/newsletter"
          className="block w-full text-center bg-gray-900 text-white font-bold text-sm py-3 px-6 rounded-xl transition-all hover:scale-[1.02]"
        >
          Browse the Newsletter →
        </Link>
      </div>

      {/* Instagram */}
      <div className="mt-8 text-center">
        <a
          href="https://instagram.com/myatlantapulse"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-gray-600 text-sm transition-colors"
        >
          Follow @myatlantapulse for Atlanta updates →
        </a>
      </div>
    </main>
  );
}
