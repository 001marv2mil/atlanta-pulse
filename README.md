# Atlanta Pulse

Atlanta Pulse (myatlantapulse) is a local guide and weekly newsletter site for Atlanta: events, food, nightlife, hidden gems and weekend plans, with a new issue every Thursday.

It is derived from an earlier local-guide codebase and rebranded for Atlanta. It is at launch stage: signups and sponsor inquiries are not live yet.

## Stack

- Next.js 16 (App Router)
- React 19
- Tailwind CSS 4
- framer-motion

## Run locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000. Use `npm run build` and `npm run start` for a production build.

## Brand

- Red: `#CE1141` (Tailwind tokens `pulse-orange` / `pulse-purple`, hover `#A80E36`)
- Navy: `#13274F` (`midnight`)
- The original token names were kept so existing class names still work. Tailwind's `orange-*` scale is re-mapped to a red scale in `app/globals.css`.
- Wordmark: `myatlantapulse`

## API routes (stubs)

- `POST /api/subscribe` and `POST /api/sponsor-inquiry` return a 503 with a friendly "opening soon" message. They do not store anything yet.
- `POST /api/track-share` returns `{ ok: true }` and does nothing.

## TODO

- Wire `/api/subscribe` (storage + welcome email) and `/api/sponsor-inquiry`.
- Add Atlanta newsletter issues in `content/newsletters`.
- Confirm the real domain (myatlantapulse.com is a placeholder) and the real social handles (@myatlantapulse is a placeholder).
- Verify the starter place list and neighborhood copy before publishing.
- Add real subscriber, sponsorship and pricing details only once they exist.
