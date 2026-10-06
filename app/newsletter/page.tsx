import { getArchiveIssues } from "@/lib/newsletter-parser";
import NewsletterGrid from "./NewsletterGrid";

export const metadata = {
  title: "Newsletter | Atlanta Pulse",
  description: "Every issue of Atlanta Pulse. Atlanta's best weekly picks, events, and hidden gems delivered every Thursday.",
};

export default function NewsletterDashboard() {
  const issues = getArchiveIssues();
  return <NewsletterGrid issues={issues} />;
}
