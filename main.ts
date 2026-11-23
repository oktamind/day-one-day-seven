// Entry for make.fun's "Day one, day seven" bounty (Node 22, stdlib only).
//
// The entry itself is a TikTok video: the same tiny game, Ghost Dash:
// Coin Run, on the day it was made and after a week of daily updates.
// This program does the one job the house asks of it — it copies
// VIDEO.json, which names the posted TikTok video, from the repository
// root into /output, where the gate reads it. The house reads the
// video's views and interactions from TikTok itself; nothing this
// program writes about the video is scored.
//
// Run it locally the way the grader does:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const botDir = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

mkdirSync(outDir, { recursive: true });
try {
  copyFileSync(join(botDir, "VIDEO.json"), join(outDir, "VIDEO.json"));
} catch (err) {
  console.error(`VIDEO.json could not be copied from ${botDir}: ${(err as Error).message}`);
  process.exit(1);
}
console.log("VIDEO.json copied to", join(outDir, "VIDEO.json"));
