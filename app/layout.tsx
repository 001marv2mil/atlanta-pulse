import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import SiteChrome from "@/components/SiteChrome";

const inter = Inter({ subsets: ["latin"], variable: "--font-body", display: "swap" });
const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-heading", weight: ["700", "800", "900"], display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://myatlantapulse.com"),
  title: "myatlantapulse — Atlanta's Weekly Insider Guide",
  description: "The best events, hidden gems, food spots, and weekend plans in Atlanta. Free newsletter every Thursday.",
  keywords: ["Atlanta", "Metro Atlanta", "events", "nightlife", "hidden gems", "things to do", "Atlanta newsletter", "myatlantapulse"],
  openGraph: {
    title: "myatlantapulse — Atlanta's Weekly Insider Guide",
    description: "The best events, hidden gems, food spots, and weekend plans in Atlanta. Free newsletter every Thursday.",
    type: "website",
    siteName: "myatlantapulse",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${montserrat.variable}`}>
      <body className="antialiased bg-[#FAF8F7]">
        <SiteChrome>{children}</SiteChrome>
      </body>
    </html>
  );
}
