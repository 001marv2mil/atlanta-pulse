import fs from "fs";
import path from "path";
import { getMarvSignoff } from "./marv-signoffs";

export interface WeatherRow {
  day: string;
  emoji: string;
  hiLo: string;
  conditions: string;
}

export interface ParsedNewsletter {
  issueNumber: number;
  title: string;
  subtitle: string;
  dateRange: string;
  greeting: string;
  recap: string;
  proTip: string;
  weekAtAGlance: string[];
  weatherIntro: string;
  weatherTable: WeatherRow[];
  proTips: { text: string; bold: string }[];
  images: { src: string; alt: string }[];
  bannerImage?: { src: string; alt: string; href: string };
  // Curiosity-gap teaser shown at the very top ("In Today's Pulse"). Falls back
  // to the first few Week at a Glance items when an issue doesn't define one.
  inTodaysPulse: string[];
  // Hyper-local data strip (weather, air quality, UV, etc.). Field name kept
  // from the original parser so existing consumers keep working.
  onTheWater: string[];
  digest: string[];
  hiddenGems: string[];
  communityPickTitle: string;
  communityPickBody: string[];
  localBusiness: string[];
  civic: string[];
  upcomingFeatures: string[];
  eventRoundup: string[];
  signoff: string;
  footer: string;
}

// Try multiple candidate locations because Vercel's process.cwd() and
// Next.js outputFileTracing don't always agree on where bundled content
// lives. First match wins. This is intentionally defensive without it
// the cron silently returned 0 files and no email ever shipped.
const CANDIDATE_DIRS = [
  path.join(process.cwd(), "content", "newsletters"),
  path.join(process.cwd(), "site", "content", "newsletters"),
  path.join(process.cwd(), ".next", "server", "content", "newsletters"),
  path.join(process.cwd(), "..", "content", "newsletters"),
];

function resolveNewslettersDir(): string | null {
  for (const dir of CANDIDATE_DIRS) {
    try {
      if (fs.existsSync(dir)) return dir;
    } catch {
      // ignore
    }
  }
  return null;
}

const NEWSLETTERS_DIR = resolveNewslettersDir() ?? CANDIDATE_DIRS[0];

// Atlanta Pulse launches with zero issues, so there may be no content/newsletters
// folder at all. Every filesystem read below fails soft (empty list / null) so
// `next build` and the pages that call these helpers never throw.
export function getNewsletterFiles(): string[] {
  const dir = resolveNewslettersDir();
  if (!dir) return [];
  try {
    return fs.readdirSync(dir).filter((f) => f.endsWith(".md"));
  } catch {
    return [];
  }
}

export function findNewsletterFile(issueNumber: number): string | null {
  const dir = resolveNewslettersDir();
  if (!dir) return null;
  try {
    const files = fs.readdirSync(dir).filter((f) => f.endsWith(".md"));
    const match = files.find((f) =>
      f.startsWith(`issue-${issueNumber}-`)
    );
    return match ? path.join(dir, match) : null;
  } catch {
    return null;
  }
}

export function getLatestIssueNumber(): number {
  const files = getNewsletterFiles();
  let max = 0;
  for (const f of files) {
    const m = f.match(/^issue-(\d+)-/);
    if (m) {
      const n = parseInt(m[1], 10);
      if (n > max) max = n;
    }
  }
  return max;
}

function splitBySections(content: string): string[] {
  // Split on --- (horizontal rules) that are on their own line
  // Handle both Unix (LF) and Windows (CRLF) line endings
  return content.split(/\r?\n---\r?\n/).map((s) => s.trim());
}

function parseWeatherTable(text: string): WeatherRow[] {
  const rows: WeatherRow[] = [];
  const lines = text.split("\n");
  for (const line of lines) {
    // Skip header rows and separator rows
    if (line.startsWith("|--") || line.includes("Day |") || line.includes("High/Low")) continue;
    if (!line.startsWith("|")) continue;

    const cells = line
      .split("|")
      .map((c) => c.trim())
      .filter((c) => c.length > 0);

    if (cells.length >= 4) {
      rows.push({
        day: cells[0],
        emoji: cells[1],
        hiLo: cells[2],
        conditions: cells[3],
      });
    }
  }
  return rows;
}

function parseBulletList(text: string): string[] {
  const items: string[] = [];
  const lines = text.split("\n");
  for (const line of lines) {
    const trimmed = line.trim();
    if (trimmed.startsWith("- ")) {
      items.push(trimmed.slice(2));
    }
  }
  return items;
}

function parseNumberedList(text: string): string[] {
  const items: string[] = [];
  const lines = text.split("\n");
  for (const line of lines) {
    const trimmed = line.trim();
    const m = trimmed.match(/^\d+\.\s+(.+)/);
    if (m) {
      items.push(m[1]);
    }
  }
  return items;
}

function parseBlockquote(text: string): string {
  const lines = text.split("\n");
  return lines
    .map((l) => l.replace(/^>\s?/, ""))
    .join("\n")
    .trim();
}

function parseImage(text: string): { src: string; alt: string } | null {
  const m = text.match(/!\[([^\]]*)\]\(([^)]+)\)/);
  if (m) return { alt: m[1], src: m[2] };
  return null;
}

export function parseNewsletter(issueNumber: number): ParsedNewsletter | null {
  const filePath = findNewsletterFile(issueNumber);
  if (!filePath) return null;

  let raw: string;
  try {
    raw = fs.readFileSync(filePath, "utf-8");
  } catch {
    return null;
  }
  const sections = splitBySections(raw);

  const result: ParsedNewsletter = {
    issueNumber,
    title: "",
    subtitle: "",
    dateRange: "",
    greeting: "",
    recap: "",
    proTip: "",
    weekAtAGlance: [],
    weatherIntro: "",
    weatherTable: [],
    proTips: [],
    images: [],
    inTodaysPulse: [],
    onTheWater: [],
    digest: [],
    hiddenGems: [],
    communityPickTitle: "",
    communityPickBody: [],
    localBusiness: [],
    civic: [],
    upcomingFeatures: [],
    eventRoundup: [],
    signoff: "",
    footer: "",
  };

  for (const section of sections) {
    const lines = section.split("\n");
    const firstLine = lines[0]?.trim() || "";

    // Header section: # Atlanta Pulse / ## subtitle / ### date
    if (firstLine === "# Atlanta Pulse") {
      for (const line of lines) {
        if (line.startsWith("## ")) result.subtitle = line.slice(3).trim();
        if (line.startsWith("### ") && !line.includes("Recap")) {
          result.dateRange = line.slice(4).trim();
        }
      }
      result.title = getIssueTitleFromData(issueNumber);
      continue;
    }

    // Linked banner image: [![alt](src)](href)
    if (firstLine.startsWith("[!")) {
      const m = firstLine.match(/^\[!\[([^\]]*)\]\(([^)]*)\)\]\(([^)]*)\)$/);
      if (m) {
        result.bannerImage = { alt: m[1], src: m[2], href: m[3] };
        continue;
      }
    }

    // Greeting paragraph (no heading, just text)
    if (
      !firstLine.startsWith("#") &&
      !firstLine.startsWith(">") &&
      !firstLine.startsWith("!") &&
      !firstLine.startsWith("[") &&
      !firstLine.startsWith("|") &&
      !firstLine.startsWith("-") &&
      !firstLine.startsWith("*Atlanta Pulse") &&
      !firstLine.startsWith("*Know someone") &&
      firstLine.length > 50 &&
      !result.greeting
    ) {
      result.greeting = section;
      continue;
    }

    // Recap + Teaser
    if (firstLine.includes("Recap") && firstLine.startsWith("###")) {
      result.recap = lines.slice(1).join("\n").trim();
      continue;
    }

    // Pro Tip (blockquote section). MUST check that this is the SINGULAR
    // "Pro Tip" heading and not the plural "Pro Tips" otherwise
    // the bulleted Pro Tips section gets eaten by the blockquote
    // handler and result.proTips ends up empty (rendering nothing).
    if (
      firstLine.includes("Pro Tip") &&
      !firstLine.includes("Pro Tips") &&
      firstLine.startsWith("###")
    ) {
      const rest = lines.slice(1).join("\n").trim();
      result.proTip = parseBlockquote(rest).replace(/^\*|\*$/g, "").trim();
      continue;
    }

    // This Week at a Glance
    if (firstLine.includes("at a Glance") || firstLine.includes("At a Glance")) {
      result.weekAtAGlance = parseNumberedList(section);
      continue;
    }

    // Weather
    if (firstLine.includes("Weather Whisper")) {
      // Extract intro text (between heading and table)
      const tableStart = section.indexOf("|");
      if (tableStart > 0) {
        const introText = section.slice(section.indexOf("\n") + 1, tableStart).trim();
        result.weatherIntro = introText;
      }
      result.weatherTable = parseWeatherTable(section);
      continue;
    }

    // Pro Tips
    if (firstLine.includes("Pro Tips") && firstLine.startsWith("###")) {
      const items = parseBulletList(section);
      result.proTips = items.map((item) => {
        const boldMatch = item.match(/\*\*([^*]+)\*\*/);
        return {
          text: item.replace(/\*\*([^*]+)\*\*/g, "$1"),
          bold: boldMatch ? boldMatch[1] : "",
        };
      });
      continue;
    }

    // Images
    if (firstLine.startsWith("![")) {
      const img = parseImage(section);
      if (img) result.images.push(img);
      continue;
    }

    // In Today's Pulse — teaser list rendered above the greeting
    if (firstLine.includes("In Today's Pulse") || firstLine.includes("In Todays Pulse")) {
      result.inTodaysPulse = parseBulletList(section);
      continue;
    }

    // On the Water — hyper-local data strip
    if (firstLine.includes("On the Water") && firstLine.startsWith("###")) {
      result.onTheWater = parseBulletList(section);
      continue;
    }

    // Digest
    if (firstLine.includes("Digest") && firstLine.startsWith("###") && !firstLine.includes("Civic") && !firstLine.includes("Community")) {
      result.digest = parseBulletList(section);
      continue;
    }

    // Hidden Gems
    if (firstLine.includes("Hidden Gem")) {
      result.hiddenGems = parseBulletList(section);
      continue;
    }

    // Community Pick
    if (firstLine.includes("Community Pick")) {
      const bodyLines: string[] = [];
      let title = "";

      for (const line of lines) {
        if (line.startsWith("### ")) {
          title = line.slice(4).trim();
        } else if (line.startsWith("**Community Pick:")) {
          title = line.replace(/\*\*/g, "").trim();
        } else if (line.trim().length > 0) {
          bodyLines.push(line);
        }
      }

      result.communityPickTitle = title
        .replace(/^[^\w]*Community Pick[:\s]*/, "")
        .replace(/^[^\w]*/, "")
        .trim();
      result.communityPickBody = [bodyLines.map((l) => l.replace(/^>\s?/, "")).join("\n").trim()];
      continue;
    }

    // Local Business / New in Town
    if (firstLine.includes("Local Business") || firstLine.includes("New in Town")) {
      result.localBusiness = parseBulletList(section);
      continue;
    }

    // Civic & Community
    if (firstLine.includes("Civic") && firstLine.startsWith("###")) {
      result.civic = parseBulletList(section);
      continue;
    }

    // Upcoming Themed Features
    if (firstLine.includes("Upcoming") && firstLine.includes("Feature")) {
      result.upcomingFeatures = parseBulletList(section);
      continue;
    }

    // Event Roundup
    if (firstLine.includes("Happenin") || firstLine.includes("Event Roundup")) {
      result.eventRoundup = parseBulletList(section);
      continue;
    }

    // Signoff (paragraph that starts with "Alright" or "That's the week" etc, near the end)
    if (
      !firstLine.startsWith("#") &&
      !firstLine.startsWith(">") &&
      !firstLine.startsWith("!") &&
      !firstLine.startsWith("*Atlanta Pulse") &&
      !firstLine.startsWith("*Know someone") &&
      firstLine.length > 20 &&
      (section.includes("Atlanta Pulse team") || section.includes("See you next")) &&
      result.greeting
    ) {
      result.signoff = section;
      continue;
    }

    // Footer
    if (firstLine.startsWith("*Atlanta Pulse")) {
      result.footer = section;
      continue;
    }
  }

  // Always override with the unique team sign-off for this issue number
  result.signoff = getMarvSignoff(issueNumber);

  return result;
}

function getIssueTitleFromData(issueNumber: number): string {
  // Hard-coded issue headlines. Atlanta Pulse launches with none, so this is
  // empty and titles fall back to "Issue #N" (or the first "at a Glance" pick).
  // Add `N: "Headline"` entries here as real issues are published.
  const titles: Record<number, string> = {};
  return titles[issueNumber] || `Issue #${issueNumber}`;
}

export function getAllIssueNumbers(): number[] {
  const files = getNewsletterFiles();
  const numbers: number[] = [];
  for (const f of files) {
    const m = f.match(/^issue-(\d+)-/);
    if (m) numbers.push(parseInt(m[1], 10));
  }
  return numbers.sort((a, b) => a - b);
}

// ── Dynamic archive builder ──────────────────────────────────────────
// Reads all newsletter markdown files and builds the archive list
// so new issues show up automatically without editing data.ts.

// Issue card backgrounds. We don't have licensed Atlanta photos yet, so each
// card gets a self-contained brand-color gradient (Atlanta red + navy) rendered
// as an inline SVG data URI: no external hosts, nothing in /public to go stale.
// Swap in real Atlanta photo URLs here once we have them.
function brandGradient(from: string, to: string, angle: number): string {
  const svg =
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice">` +
    `<defs><linearGradient id="g" gradientTransform="rotate(${angle} .5 .5)">` +
    `<stop offset="0" stop-color="${from}"/><stop offset="1" stop-color="${to}"/>` +
    `</linearGradient></defs>` +
    `<rect width="800" height="600" fill="url(#g)"/>` +
    `<circle cx="650" cy="110" r="190" fill="#ffffff" fill-opacity="0.06"/>` +
    `<circle cx="110" cy="520" r="150" fill="#ffffff" fill-opacity="0.05"/>` +
    `</svg>`;
  // Escape parentheses too so the value is safe inside an unquoted CSS url().
  const encoded = encodeURIComponent(svg).replace(/\(/g, "%28").replace(/\)/g, "%29");
  return `data:image/svg+xml,${encoded}`;
}

const ATLANTA_IMAGES = [
  brandGradient("#13274F", "#CE1141", 135),
  brandGradient("#CE1141", "#13274F", 45),
  brandGradient("#13274F", "#A80E36", 160),
  brandGradient("#A80E36", "#13274F", 20),
  brandGradient("#0B1630", "#CE1141", 120),
  brandGradient("#CE1141", "#0B1630", 60),
];

export interface ArchiveIssue {
  id: string;
  number: number;
  date: string;
  title: string;
  image: string;
  eventCount: number;
}

function formatDateFromFilename(filename: string): string {
  const m = filename.match(/issue-\d+-(\d{4})-(\d{2})-(\d{2})/);
  if (!m) return "";
  const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
  const month = months[parseInt(m[2], 10) - 1];
  const day = parseInt(m[3], 10);
  return `${month} ${day}, ${m[1]}`;
}

function countEvents(issueNumber: number): number {
  const parsed = parseNewsletter(issueNumber);
  if (!parsed) return 0;
  return parsed.eventRoundup.length || parsed.weekAtAGlance.length || 0;
}

function generateTitle(issueNumber: number): string {
  // Use hardcoded title if available, otherwise extract from content
  const title = getIssueTitleFromData(issueNumber);
  if (title !== `Issue #${issueNumber}`) return title;

  // Fallback: use first event from "at a glance" as a hook
  const parsed = parseNewsletter(issueNumber);
  if (parsed && parsed.weekAtAGlance.length > 0) {
    const first = parsed.weekAtAGlance[0];
    // Extract just the event name (before "at" venue)
    const eventName = first.split(" at ")[0].replace(/\*\*/g, "").trim();
    if (eventName.length > 10) {
      return `${eventName}. Here's what else Atlanta's got this week`;
    }
  }
  return `Atlanta Pulse Issue #${issueNumber}`;
}

export function getArchiveIssues(): ArchiveIssue[] {
  const files = getNewsletterFiles();
  const issues: ArchiveIssue[] = [];
  const seen = new Set<number>(); // deduplicate by issue number

  for (const f of files) {
    const m = f.match(/^issue-(\d+)-/);
    if (!m) continue;
    const num = parseInt(m[1], 10);
    if (seen.has(num)) continue; // skip duplicate issue numbers
    seen.add(num);

    issues.push({
      id: `i-${num}`,
      number: num,
      date: formatDateFromFilename(f),
      title: generateTitle(num),
      image: ATLANTA_IMAGES[(((num - 1) % ATLANTA_IMAGES.length) + ATLANTA_IMAGES.length) % ATLANTA_IMAGES.length],
      eventCount: countEvents(num),
    });
  }

  // Sort newest first
  issues.sort((a, b) => b.number - a.number);
  return issues;
}
