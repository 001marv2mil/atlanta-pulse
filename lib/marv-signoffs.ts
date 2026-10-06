// Unique Atlanta Pulse sign-offs — one per issue, rotating after exhausted.
// Each should sound like a different mood: fired up, reflective, dry, hype, chill, etc.
// Never formal. Always sounds like a group chat message. Written in the neutral
// "we" voice of the Atlanta Pulse team (no personal names).
// (The export names keep their original "marv" spelling so existing imports don't break.)

export const marvSignoffs: string[] = [
  // 1
  `Welcome in. We're paying close attention to Atlanta, and we'll keep doing it every Thursday.\n\nGo do something this week that you'd actually tell someone about.\n\n— The Atlanta Pulse team`,

  // 2
  `Plans change. Atlanta doesn't care about your plans. Pick one thing from this issue and go anyway.\n\nSee you Thursday.\n\n— The Atlanta Pulse team`,

  // 3
  `Try a neighborhood you don't usually hang in. Walk around. Something good is probably two blocks over.\n\nDon't waste a free evening. Go find something.\n\n— The Atlanta Pulse team`,

  // 4
  `Skip your usual spot just this once. The city is bigger than your regular loop.\n\nSee you on the other side.\n\n— The Atlanta Pulse team`,

  // 5
  `A new dinner spot, a park you haven't walked yet, a show you can't quite explain to your friends. Pick one.\n\nOnly in Atlanta. We love this city.\n\n— The Atlanta Pulse team`,

  // 6
  `Eat something this week that you can't pronounce. That's the whole assignment.\n\nSee you next Thursday.\n\n— The Atlanta Pulse team`,

  // 7
  `Take someone out this week. Or go alone. Both are valid.\n\nJust leave the house.\n\n— The Atlanta Pulse team`,

  // 8
  `Coffee, a long walk, live music. This city has range.\n\nPick one. Do it. Tell us how it went.\n\n— The Atlanta Pulse team`,

  // 9
  `If a weekend plan feels too big, shrink it. A park, a patio, a good sandwich. That counts.\n\nHope you made it out.\n\n— The Atlanta Pulse team`,

  // 10
  `Atlanta is a city of neighborhoods. Pick one and give it your whole Saturday.\n\nGo outside. It's better than being inside.\n\n— The Atlanta Pulse team`,

  // 11
  `Drink water. Wear comfortable shoes. Say yes to the plan you'd normally skip.\n\nSee you next Thursday.\n\n— The Atlanta Pulse team`,

  // 12
  `Weeknights are underrated. Go out on one.\n\nDon't sleep on this week.\n\n— The Atlanta Pulse team`,

  // 13
  `Hot take: the best plan is usually the one you actually leave the house for.\n\nGo. We'll be here Thursday.\n\n— The Atlanta Pulse team`,

  // 14+ (rotating extras for future issues)
  `We write this every week hoping you actually go do something. If you do, tell us about it. Keep it up.\n\n— The Atlanta Pulse team`,

  `Atlanta has something going on most weekends and a lot of us are still on the couch. Consider this a friendly nudge.\n\n— The Atlanta Pulse team`,

  `If you found one new spot this week because of the Pulse, that's the whole point. We're good.\n\nSee you Thursday.\n\n— The Atlanta Pulse team`,

  `Every week this city gives us more to write about. We're not complaining.\n\n— The Atlanta Pulse team`,

  `Hot take: Atlanta is bigger, weirder and more fun than the traffic makes it seem. Let's keep exploring it together.\n\n— The Atlanta Pulse team`,

  `Somewhere in Atlanta right now there's a hidden gem nobody's written about yet. We're going to find it.\n\nBack Thursday.\n\n— The Atlanta Pulse team`,

  `The best part of doing this is hearing what you found. Hit reply and tell us what we missed.\n\n— The Atlanta Pulse team`,
];

export function getMarvSignoff(issueNumber: number): string {
  // Issues 1-13 get their specific sign-off. After that, rotate through the extras.
  if (issueNumber >= 1 && issueNumber <= 13) {
    return marvSignoffs[issueNumber - 1];
  }
  const extras = marvSignoffs.slice(13);
  const idx = (((issueNumber - 14) % extras.length) + extras.length) % extras.length;
  return extras[idx];
}
