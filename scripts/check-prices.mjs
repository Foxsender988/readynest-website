// Price guard: fails the build if a dollar amount is written anywhere except lib/pricing.ts.
//
// Every price on the site must come from lib/pricing.ts, so the homepage, the Services page,
// the contact form and the town pages can never show different numbers. This script scans
// app/, components/ and lib/ and reports:
//   1. any "$" followed by a digit (for example "$795") outside lib/pricing.ts
//   2. any "?service=" link that carries a dollar amount ("$" or its URL form "%24")
//
// Run it with `npm run check:prices`. `npm run build` runs it first, and Vercel builds with
// `npm run build`, so a hard-coded price stops the deploy.

import { readdirSync, readFileSync, statSync } from "node:fs";
import { join, relative, sep } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(fileURLToPath(new URL(".", import.meta.url)), "..");
const SCAN_DIRS = ["app", "components", "lib"];
const EXTENSIONS = [".ts", ".tsx", ".js", ".jsx", ".mjs"];
const PRICING_FILE = "lib/pricing.ts";

// Dollar figures that are not ReadyNest prices. Each entry needs a reason.
const ALLOWED = [
  { file: "app/page.tsx", text: '"$50B+"', reason: "industry statistic on the home page, not a price" },
];

const PRICE = /\$\d/;
// "$" not followed by "{", so template code like `?service=${encodeURIComponent(name)}` is fine.
const PRICE_IN_SERVICE_LINK = /\?service=[^"'`\s]*(\$(?!\{)|%24)/i;

function walk(dir) {
  const out = [];
  for (const name of readdirSync(dir)) {
    const full = join(dir, name);
    if (statSync(full).isDirectory()) out.push(...walk(full));
    else if (EXTENSIONS.some((ext) => name.endsWith(ext))) out.push(full);
  }
  return out;
}

const problems = [];
for (const dir of SCAN_DIRS) {
  for (const full of walk(join(ROOT, dir))) {
    const file = relative(ROOT, full).split(sep).join("/");
    const lines = readFileSync(full, "utf8").split(/\r?\n/);
    lines.forEach((line, i) => {
      if (PRICE_IN_SERVICE_LINK.test(line)) {
        problems.push(`${file}:${i + 1}  price in a ?service= link: ${line.trim()}`);
        return;
      }
      if (file === PRICING_FILE || !PRICE.test(line)) return;
      if (ALLOWED.some((a) => a.file === file && line.includes(a.text))) return;
      problems.push(`${file}:${i + 1}  hard-coded price: ${line.trim()}`);
    });
  }
}

if (problems.length) {
  console.error(`Price guard failed. Move these prices into ${PRICING_FILE} and render them from there:\n`);
  for (const p of problems) console.error(`  ${p}`);
  process.exit(1);
}
console.log(`Price guard passed: no dollar amounts outside ${PRICING_FILE}.`);
