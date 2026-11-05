// ─── ReadyNest Pricing Rev 4 (effective Nov 4, 2026) ──────────────────────────
//
// The ONLY place prices live. Every page, meta tag, and JSON-LD block reads from here.
// To change a price: edit the number in PRICE below, and the whole site follows.
// To change what a package includes: edit its `contents` list in `packages`.

import type { ServiceOption } from "@/lib/contact";
import { PA_HIC_NUMBER, SITE_URL } from "@/lib/site";

export const PRICING_REVISION = "Rev 4";
export const PRICING_EFFECTIVE = "2026-11-04";

const PRICE = {
  // Terms
  minimumVisit: 275,
  assessment: 149,

  // Packages
  bathroom: 795,
  bathroomPremium: 2450,
  entryExit: 995,
  stairHallway: 1095,
  wholeHome: 3450,
  wholeHomePremium: 6950,

  // Walk-in showers
  showerAccessible: 7500,
  showerCustom: 12500,

  // Grab bars
  firstGrabBar: 275,
  extraGrabBar: 185,
  longGrabBarUpcharge: 35,

  // Bathroom
  handheldMagnetic: 245,
  handheldSlideBar: 375,
  showerChair: 115,
  foldDownSeat: 425,
  teakFoldDownSeat: 525,
  toiletInstall: 325,
  toiletSuppliedInstalled: 795,
  gfciShortRun: 325,
  gfciFished: 595,

  // Stairs, entry and doors
  handrail: 695,
  secondSideRail: 450,
  stairTreads: 225,
  thresholdRamp: 345,
  interiorLever: 110,
  exteriorLever: 185,

  // Lighting
  motionCeilingLight: 95,
  motionSwitchSinglePole: 195,
  motionSwitchThreeWay: 295,
  exteriorMotionLight: 295,

  // Smart home
  doorbellInstall: 175,
  doorbellSuppliedInstalled: 325,
  smartLock: 395,
  premiumSmartLock: 495,
};

/** Formats a number as a whole-dollar price, e.g. 3450 becomes "$3,450". */
export const usd = (amount: number) => `$${amount.toLocaleString("en-US")}`;

export type PriceLine = {
  name: string;
  /** Number for structured data. Null when the item is quoted. */
  price: number | null;
  /** Exactly what customers see, e.g. "$185 each". */
  display: string;
  /** True for "from" pricing, where `price` is the lowest price. */
  isFrom?: boolean;
};

const line = (name: string, price: number, suffix = ""): PriceLine => ({
  name,
  price,
  display: `${usd(price)}${suffix}`,
});

const fromLine = (name: string, price: number): PriceLine => ({
  name,
  price,
  display: `from ${usd(price)}`,
  isFrom: true,
});

// ─── Terms ────────────────────────────────────────────────────────────────────

export const minimumVisit = { price: PRICE.minimumVisit, display: usd(PRICE.minimumVisit) };

export const assessment = {
  name: "Home Safety Assessment with written report",
  price: PRICE.assessment,
  display: usd(PRICE.assessment),
};

export const WORKMANSHIP_GUARANTEE = "1-year workmanship guarantee";

export const pricingTerms = [
  "All prices include labor, standard hardware, travel within our core service area, and cleanup.",
  `${WORKMANSHIP_GUARANTEE}.`,
  `${minimumVisit.display} minimum visit for any job.`,
  "Free in-home safety visit and written flat quote.",
  `Want a full written Home Safety Assessment report without a package? ${assessment.display}, credited toward any package.`,
  `PA-registered (HIC #${PA_HIC_NUMBER}), insured.`,
  "Premium brands and finishes (for example, designer grab bars) are quoted at the time of estimate.",
];

export const pricingNotIncluded = [
  "Permits",
  "Drywall repair beyond minor patching",
  "Plumbing rough-in",
  "Panel work",
  "Structural carpentry",
  "Removal of old fixtures",
  "Travel outside our core service area",
];

export const PACKAGES_TAGLINE = "Packages bundle the visit, the hardware and the written safety report into one flat price.";

// ─── Packages ─────────────────────────────────────────────────────────────────

export type PackageKey =
  | "bathroom"
  | "bathroomPremium"
  | "entryExit"
  | "stairHallway"
  | "wholeHome"
  | "wholeHomePremium";

export type Package = {
  key: PackageKey;
  /** In-page anchor on the Services page. */
  anchor?: string;
  name: string;
  /** Contact form option pre-selected by this package's button. */
  service: ServiceOption;
  price: number;
  display: string;
  isFrom: boolean;
  badge: string | null;
  badgeTone?: "gold" | "dark";
  includesLabel: string;
  note: string | null;
  contents: string[];
  addOns?: PriceLine[];
};

export const packages: Record<PackageKey, Package> = {
  bathroom: {
    key: "bathroom",
    anchor: "bathroom-safety",
    name: "Bathroom Safety Package",
    service: "Bathroom Safety",
    price: PRICE.bathroom,
    display: usd(PRICE.bathroom),
    isFrom: false,
    badge: null,
    includesLabel: "WHAT'S INCLUDED",
    note: null,
    contents: [
      "Up to 3 ADA-rated stainless grab bars placed where your assessment shows the risk (typically shower back wall, shower entry, and toilet)",
      "Non-slip mat or applied tread in tub or shower",
      "Plug-in motion-sensor nightlight",
      "Written home safety report",
    ],
    addOns: [
      line("Additional grab bar (4th+)", PRICE.extraGrabBar, " each"),
      line("Handheld shower (Moen, magnetic)", PRICE.handheldMagnetic),
      line("Handheld shower with slide bar", PRICE.handheldSlideBar),
      line("Freestanding shower chair", PRICE.showerChair),
      line("Fold-down wall shower seat, installed", PRICE.foldDownSeat),
      line("Premium teak fold-down seat (Moen), installed", PRICE.teakFoldDownSeat),
      line("Comfort-height toilet install (customer supplied)", PRICE.toiletInstall),
      {
        name: 'Grab bar over 28" (up to 36")',
        price: PRICE.longGrabBarUpcharge,
        display: `+${usd(PRICE.longGrabBarUpcharge)} per bar`,
      },
      { name: "Designer finish", price: null, display: "Quoted" },
    ],
  },
  bathroomPremium: {
    key: "bathroomPremium",
    name: "Bathroom Safety Premium",
    service: "Bathroom Safety",
    price: PRICE.bathroomPremium,
    display: usd(PRICE.bathroomPremium),
    isFrom: false,
    badge: "Premium",
    badgeTone: "dark",
    includesLabel: "EVERYTHING IN BATHROOM SAFETY, PLUS",
    note: "Anti-scald / pressure-balance valve available, quoted after assessment.",
    contents: [
      "Comfort-height toilet supplied and installed",
      "Fold-down wall shower seat",
      "Motion-sensor vanity light switch",
      "Handheld shower with slide bar",
    ],
  },
  entryExit: {
    key: "entryExit",
    anchor: "entry-exit",
    name: "Entry & Exit Safety Package",
    service: "Stairs, Entry & Lighting",
    price: PRICE.entryExit,
    display: usd(PRICE.entryExit),
    isFrom: false,
    badge: null,
    includesLabel: "WHAT'S INCLUDED",
    note: null,
    contents: [
      "Threshold ramp at primary entrance (rubber or aluminum, up to 4″ rise)",
      "Lever handles on 2 exterior doors (brushed nickel or matte black)",
      "Motion-sensor exterior light at entryway",
      "Improved interior entry lighting (replace existing fixture if needed)",
      "Optional: door peephole at seated height",
    ],
  },
  stairHallway: {
    key: "stairHallway",
    anchor: "stairs-hallways",
    name: "Stair & Hallway Safety Package",
    service: "Stairs, Entry & Lighting",
    price: PRICE.stairHallway,
    display: usd(PRICE.stairHallway),
    isFrom: false,
    badge: null,
    includesLabel: "WHAT'S INCLUDED",
    note: `Second-side rail: +${usd(PRICE.secondSideRail)}.`,
    contents: [
      "Handrail on one flight (one side)",
      "Non-slip stair treads",
      "Motion lights at top and bottom",
      "3 hallway nightlights",
      "Step edge markers",
    ],
  },
  wholeHome: {
    key: "wholeHome",
    name: "Whole-Home Aging-in-Place Package",
    service: "Free In-Home Safety Visit and Written Flat Quote",
    price: PRICE.wholeHome,
    display: `From ${usd(PRICE.wholeHome)}`,
    isFrom: true,
    badge: "Best Value",
    badgeTone: "gold",
    includesLabel: "WHAT'S INCLUDED",
    note: "Less than one month of assisted living.",
    contents: [
      "90-minute whole-home safety assessment with written report",
      "Bathroom Safety Package (Standard tier)",
      "Entry & Exit Safety Package",
      "Stair & Hallway Safety Package",
      "Smart doorbell supplied, with phone app setup",
      "Up to 4 lever door handles replaced",
      "One-month follow-up check-in visit",
    ],
  },
  wholeHomePremium: {
    key: "wholeHomePremium",
    name: "Whole-Home Premium",
    service: "Free In-Home Safety Visit and Written Flat Quote",
    price: PRICE.wholeHomePremium,
    display: `From ${usd(PRICE.wholeHomePremium)}`,
    isFrom: true,
    badge: "Premium",
    badgeTone: "dark",
    includesLabel: "QUOTED AFTER ASSESSMENT, TYPICALLY INCLUDES",
    note: "Anti-scald / pressure-balance valve available, quoted after assessment.",
    contents: [
      "Everything in standard Whole-Home package",
      "Premium Bathroom upgrade (toilet supplied, etc.)",
      "Smart home safety bundle: 2 cameras, smart lock, 2 leak sensors, smoke/CO smart alerts",
      "Quarterly safety check visits for first year: INCLUDED",
      "Custom modifications based on assessment findings",
    ],
  },
};

export const packageList: Package[] = [
  packages.bathroom,
  packages.bathroomPremium,
  packages.entryExit,
  packages.stairHallway,
  packages.wholeHome,
  packages.wholeHomePremium,
];

// ─── Walk-in shower conversions ───────────────────────────────────────────────

// Starting prices are approved launch prices. Revisit after the first few real bookings.
export const SHOW_SHOWER_CONVERSION = true;

export const showerConversions = {
  accessible: {
    name: "Accessible Conversion (acrylic)",
    price: PRICE.showerAccessible,
    display: `Starting at ${usd(PRICE.showerAccessible)}`,
    note: "Most straightforward layouts land in this range. Homes needing plumbing relocation, custom tile, or significant demo typically run higher, confirmed at your in-home visit.",
    contents: [
      "Tub removal & haul-away",
      "Low-threshold or curbless acrylic shower pan and wall surround",
      "ADA grab bars + fold-down shower bench",
      "New shower valve/fixture",
      "Anti-scald valve (where plumbing allows)",
    ],
    footnoteLabel: "Not included:",
    footnote:
      "Custom tile, permits (if required by township), plumbing line relocation beyond minor adjustment. Quoted separately if needed.",
  },
  custom: {
    name: "Custom Tile / Curbless Conversion",
    price: PRICE.showerCustom,
    display: `Starting at ${usd(PRICE.showerCustom)}`,
    note: "Covers most conversions involving tile, a curbless entry, or a full custom layout. Final price depends on shower size, tile selection, and plumbing scope, confirmed at your in-home visit.",
    contents: [
      "Everything in Accessible Conversion, plus:",
      "Custom tile walls and floor",
      "Linear drain",
      "Waterproofing membrane",
    ],
    footnoteLabel: "Optional:",
    footnote: "Frameless glass quoted as an option.",
  },
};

export const showerConversionList = [showerConversions.accessible, showerConversions.custom];

// ─── Individual services ──────────────────────────────────────────────────────

export const individualServices = {
  grabBars: {
    title: 'Grab bars (12" to 36", ADA stainless)',
    items: {
      first: line("First grab bar", PRICE.firstGrabBar),
      additional: line("Each additional bar, same visit", PRICE.extraGrabBar),
      two: line("Two bars", PRICE.firstGrabBar + PRICE.extraGrabBar),
      three: line("Three bars", PRICE.firstGrabBar + 2 * PRICE.extraGrabBar),
      over28: {
        name: 'Bars over 28"',
        price: PRICE.longGrabBarUpcharge,
        display: `+${usd(PRICE.longGrabBarUpcharge)} per bar`,
      } as PriceLine,
    },
  },
  bathroom: {
    title: "Bathroom",
    items: {
      handheld: line("Handheld shower (magnetic)", PRICE.handheldMagnetic),
      slideBar: line("Handheld shower with slide bar", PRICE.handheldSlideBar),
      chair: line("Freestanding shower chair", PRICE.showerChair),
      foldDown: line("Fold-down wall shower seat, installed", PRICE.foldDownSeat),
      teak: line("Premium teak fold-down seat, installed", PRICE.teakFoldDownSeat),
      toiletInstall: line("Comfort-height toilet install (customer supplied)", PRICE.toiletInstall),
      toiletSupplied: line("Comfort-height toilet supplied and installed", PRICE.toiletSuppliedInstalled),
      gfciShort: line("New bathroom GFCI outlet, short run", PRICE.gfciShortRun),
      gfciFished: fromLine("New bathroom GFCI outlet, wire fished from attic", PRICE.gfciFished),
    },
  },
  stairsEntryDoors: {
    title: "Stairs, entry and doors",
    items: {
      handrail: line("Handrail, one flight, one side", PRICE.handrail),
      secondRail: line("Second-side rail, same visit", PRICE.secondSideRail),
      treads: line("Non-slip stair treads, one flight", PRICE.stairTreads),
      ramp: line('Threshold ramp (up to 4")', PRICE.thresholdRamp),
      interiorLever: line("Interior lever door handle", PRICE.interiorLever, " each"),
      exteriorLever: line("Exterior keyed lever or lockset", PRICE.exteriorLever, " each"),
    },
  },
  lighting: {
    title: "Lighting",
    items: {
      ceiling: line("Motion-sensor ceiling light (battery)", PRICE.motionCeilingLight, " each"),
      singlePole: line("Motion wall switch, single-pole", PRICE.motionSwitchSinglePole),
      threeWay: line("Motion wall switch, 3-way", PRICE.motionSwitchThreeWay),
      exterior: line("Exterior motion light swap", PRICE.exteriorMotionLight),
    },
  },
  smartHome: {
    title: "Smart home",
    items: {
      doorbellInstall: line("Smart doorbell install and app setup (customer supplied)", PRICE.doorbellInstall),
      doorbellSupplied: line("Smart doorbell supplied and installed", PRICE.doorbellSuppliedInstalled),
      smartLock: line("Smart lock supplied and installed (Yale Assure Lock 2)", PRICE.smartLock),
      premiumLock: line("Premium smart lock (Schlage Encode Plus)", PRICE.premiumSmartLock),
    },
  },
};

export const individualServiceGroups: { title: string; items: PriceLine[] }[] = Object.values(
  individualServices,
).map((group) => ({ title: group.title, items: Object.values(group.items) }));

// ─── JSON-LD ──────────────────────────────────────────────────────────────────

type Priced = { price: number; display: string; isFrom?: boolean };

/** schema.org Offer. "From" prices use the lowest price with a "Starting at" description. */
function offerFor(item: Priced) {
  return {
    "@type": "Offer",
    price: item.price,
    priceCurrency: "USD",
    ...(item.isFrom ? { description: `Starting at ${usd(item.price)}` } : {}),
  };
}

const provider = { "@type": "HomeAndConstructionBusiness", name: "ReadyNest", url: SITE_URL };

function serviceFor(name: string, description: string, item: Priced) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    provider,
    areaServed: "Bucks County, PA",
    offers: offerFor(item),
  };
}

/** Every package, shower conversion, and individual service, for the Services page. */
export function servicesJsonLd() {
  return [
    ...packageList.map((pkg) => serviceFor(pkg.name, pkg.contents.join("; "), pkg)),
    ...showerConversionList.map((tier) =>
      serviceFor(`Walk-In Shower: ${tier.name}`, tier.contents.join("; "), { ...tier, isFrom: true }),
    ),
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Individual Home Safety Services",
      provider,
      areaServed: "Bucks County, PA",
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Individual Home Safety Services",
        itemListElement: [
          ...individualServiceGroups.flatMap((group) =>
            group.items
              .filter((item): item is PriceLine & { price: number } => item.price !== null)
              .map((item) => ({
                ...offerFor(item),
                itemOffered: { "@type": "Service", name: item.name },
              })),
          ),
          // The Assessment is not a table row on the Services page, but it is still sold.
          {
            ...offerFor(assessment),
            itemOffered: { "@type": "Service", name: `${assessment.name}, credited toward any package` },
          },
        ],
      },
    },
  ];
}
