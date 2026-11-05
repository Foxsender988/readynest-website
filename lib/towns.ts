// ─── Service-area town pages (/areas/[town]) ──────────────────────────────────

export type Town = {
  slug: string;
  name: string;
  metaDescription: string;
  intro: string[];
};

export const towns: Town[] = [
  {
    slug: "doylestown",
    name: "Doylestown",
    metaDescription:
      "Aging-in-place home safety in Doylestown, PA: grab bars, stair rails, ramps, lighting. Call 267-717-9119. Free in-home safety visit and written flat quote.",
    intro: [
      "Doylestown is home base for ReadyNest. From the historic borough streets near the Mercer Museum to the newer neighborhoods in Doylestown Township, we help older homeowners and their families make the house they love safer to live in, without a full remodel.",
      "Many Doylestown homes were built long before anyone thought about aging in place: narrow staircases with a rail on one side, tubs with high walls, stone steps at the front door, and dim hallways. These are exactly the spots where falls happen. Slav, CAPS (Certified Aging-in-Place Specialist), comes out for a free in-home safety visit, points out the risks that matter most, and gives you a written flat quote.",
      "Most Doylestown jobs, like grab bars, a second stair rail, a threshold ramp, or motion lighting, are completed in a single visit. Because we're local, we can often come out the same week, including for families preparing a home for a parent coming back from Doylestown Hospital or rehab.",
    ],
  },
  {
    slug: "newtown",
    name: "Newtown",
    metaDescription:
      "Senior home safety in Newtown, PA: grab bars, stair rails, lever handles, doorbells. Call 267-717-9119. Free in-home safety visit and written flat quote.",
    intro: [
      "Staying in the home you raised your kids in is a good goal, whether that's a colonial in Newtown Township or an older house near the historic district on State Street. ReadyNest makes those homes safer with practical, good-looking modifications, not hospital-style equipment.",
      "In a Newtown home, we usually look first at the bathroom (well-mounted grab bars, non-slip treatment, a comfort-height toilet), then the stair railings, then the lighting between the bedroom and bathroom at night. Two-story homes with the primary bedroom upstairs deserve extra attention, and a good railing and motion lighting go a long way.",
      "Every project starts with a free in-home safety visit and a written flat quote from Slav, CAPS (Certified Aging-in-Place Specialist). If you'd like a room-by-room review, our Home Safety Assessment comes with a written report, which is handy for adult children who live out of the area and want to see exactly what's being done for Mom or Dad. Most Newtown jobs are completed in a single visit.",
    ],
  },
  {
    slug: "warrington",
    name: "Warrington",
    metaDescription:
      "Aging-in-place safety in Warrington, PA: grab bars, handrails, ramps, motion lighting. Call 267-717-9119. Free in-home safety visit and written flat quote.",
    intro: [
      "Warrington has a lot of split-levels, bi-levels, and two-story colonials, layouts with short runs of stairs in places you use every day. For older homeowners, those few steps between the living room and the kitchen or bedrooms can be the biggest fall risk in the house.",
      "ReadyNest helps Warrington homeowners address those risks with sturdy handrails on both sides, non-slip stair treads, motion-sensor lights at the top and bottom of each flight, and grab bars in the bathroom placed where they'll actually get used. We also handle entry upgrades like threshold ramps, lever door handles, and exterior motion lights for the walk in from the driveway.",
      "It starts with a free in-home safety visit. Slav, CAPS (Certified Aging-in-Place Specialist), looks at what worries you, gives you a written flat quote, and signs off on every job when it's finished. Most Warrington projects are completed in a single visit, and we're close enough along the Route 611 corridor to schedule quickly.",
    ],
  },
  {
    slug: "chalfont",
    name: "Chalfont",
    metaDescription:
      "Senior home safety in Chalfont, PA: grab bars, stair rails, ramps, smart home safety. Call 267-717-9119. Free in-home safety visit and written flat quote.",
    intro: [
      "Chalfont's mix of older borough homes and newer developments in the surrounding townships means no two safety plans look alike. A century-old twin near the center of town has very different needs than a 1990s colonial on a cul-de-sac, and ReadyNest plans around the home you actually have.",
      "For Chalfont homeowners, the usual starting points are bathroom grab bars and non-slip surfaces, handrails on basement and second-floor stairs, threshold ramps at the main entrance, and motion-sensor lighting for safer nighttime trips to the bathroom. Everything is mounted solidly and finished cleanly so it looks like it belongs in the house.",
      "Our free in-home safety visit comes with a written flat quote. Slav, CAPS (Certified Aging-in-Place Specialist), can meet with you or with your parent if you can't be there. Want the whole house reviewed? Our Home Safety Assessment includes a written report with prioritized recommendations. You decide what to do first, with no pressure to do everything at once. Most Chalfont jobs are finished in a single visit.",
    ],
  },
  {
    slug: "yardley",
    name: "Yardley",
    metaDescription:
      "Aging-in-place upgrades in Yardley, PA: grab bars, railings, walk-in showers, lights. Call 267-717-9119. Free in-home safety visit and written flat quote.",
    intro: [
      "Yardley's older homes near the Delaware River and Lake Afton have plenty of character, and often steep stairs, small bathrooms, and front steps that get slick in winter. ReadyNest helps Yardley homeowners keep that character while making daily life safer.",
      "A Yardley plan might include grab bars in a tight bathroom (placed by assessment, not guesswork), replacing a high-walled tub with a walk-in shower, adding a second handrail to a narrow staircase, and installing exterior motion lighting and a sturdy rail at the front entry. For families checking in from a distance, a smart doorbell with app setup is a useful addition.",
      "Every project begins with a free in-home safety visit. Slav, CAPS (Certified Aging-in-Place Specialist), identifies the highest-risk spots, explains the options in plain language, and provides a written flat quote. He's on-site for the final walkthrough on every job, so you always know who is responsible for the result. Yardley is an easy drive for us, so scheduling is quick.",
    ],
  },
  {
    slug: "langhorne",
    name: "Langhorne",
    metaDescription:
      "Senior home safety in Langhorne, PA: grab bars, stair rails, ramps, discharge prep. Call 267-717-9119. Free in-home safety visit and written flat quote.",
    intro: [
      "With St. Mary Medical Center close by, a hospital or rehab stay is often what gets Langhorne families thinking about home safety. We can look at the home before discharge and work to have grab bars, railings, and lighting in place so your parent comes home to a safer house on day one.",
      "Langhorne and the surrounding Middletown Township neighborhoods include a lot of ranchers, twins, and two-story homes from the 1950s through the 1980s. Typical upgrades include bathroom grab bars and non-slip treatment, a comfort-height toilet, sturdy handrails, lever door handles that are easier on arthritic hands, and a low threshold ramp at the main door.",
      "Start with a free in-home safety visit and a written flat quote from Slav, CAPS (Certified Aging-in-Place Specialist). Our Home Safety Assessment adds a room-by-room written report, useful for coordinating with your parent's occupational or physical therapist. Most work is completed in a single visit. If your parent's discharge date is close, tell us when you call and we'll do our best to fit the visit in before they come home.",
    ],
  },
  {
    slug: "new-hope",
    name: "New Hope",
    metaDescription:
      "Aging-in-place safety for New Hope, PA homes: grab bars, handrails, walk-in showers. Call 267-717-9119. Free in-home safety visit and written flat quote.",
    intro: [
      "New Hope and the surrounding Solebury countryside are full of beautiful older homes: stone farmhouses, river-town twins, and converted properties with uneven floors, narrow stairs, and steps at nearly every doorway. They're wonderful places to live, and they can be hard on aging knees and balance.",
      "ReadyNest specializes in safety upgrades that respect an older home. We install grab bars that look like quality bath hardware, handrails that suit the staircase, non-slip treads on worn wooden steps, and motion lighting for dark hallways and entries. For bathrooms that need more, we offer walk-in shower conversions, project-managed by Slav from the first visit to the final walkthrough.",
      "Start with a free in-home safety visit. Slav, CAPS (Certified Aging-in-Place Specialist), will look at the house with you, point out the highest-risk spots, and send a written flat quote, with no pressure and no obligation. Installation is done by Slav or his trained, insured team, and Slav signs off on every finished job in New Hope.",
    ],
  },
  {
    slug: "buckingham",
    name: "Buckingham",
    metaDescription:
      "Home safety in Buckingham, PA: grab bars, stair railings, ramps, exterior lighting. Call 267-717-9119. Free in-home safety visit and written flat quote.",
    intro: [
      "Buckingham Township homes range from farmhouses along the back roads to larger colonials and ranch homes off Routes 202 and 413. Many sit on big lots with long walks from the driveway to the door, and getting in and out of the house safely matters as much as what's inside.",
      "For Buckingham homeowners, a good place to start is the entry: a threshold ramp, a sturdy railing at the front steps, exterior motion lighting, and lever handles or a smart lock that's easier to use. Inside, we focus on the bathroom and stairs: grab bars placed by assessment, non-slip surfaces, second-side handrails, and motion lighting for nighttime trips.",
      "Every job starts with a free in-home safety visit and a written flat quote. Slav, CAPS (Certified Aging-in-Place Specialist), signs off on every completed job, and most projects are finished in a single visit. We're right next door in Doylestown, so scheduling is quick, often the same week you call.",
    ],
  },
  {
    slug: "richboro",
    name: "Richboro",
    metaDescription:
      "Aging-in-place safety in Richboro, PA: grab bars, handrails, lever handles, lighting. Call 267-717-9119. Free in-home safety visit and written flat quote.",
    intro: [
      "Richboro and the rest of Northampton Township are full of well-kept family homes that many residents have lived in for decades. When it's time to make that home safer for the years ahead, ReadyNest helps you do it without moving and without a major renovation.",
      "A typical Richboro plan focuses on three areas. In the bathroom: grab bars at the shower and toilet, non-slip treatment, and a handheld shower. On the stairs: a sturdy rail on both sides and motion lighting at the top and bottom. At the entry: a low threshold ramp, lever handles, and an exterior motion light so coming home after dark is safer.",
      "It all starts with a free in-home safety visit. Slav, CAPS (Certified Aging-in-Place Specialist), explains what he recommends and why, and sends a written flat quote. Installation is done by Slav or his trained, insured team, and Slav does the final walkthrough with you.",
    ],
  },
  {
    slug: "southampton",
    name: "Southampton",
    metaDescription:
      "Senior home safety in Southampton, PA: grab bars, stair rails, ramps, doorbells. Call 267-717-9119. Free in-home safety visit and written flat quote.",
    intro: [
      "Upper Southampton has many ranch homes, twins, and split-levels built in the 1950s and '60s. Single-floor living makes ranchers a great fit for aging in place, but original bathrooms, step-down rooms, and basement stairs still create real fall risks.",
      "ReadyNest helps Southampton homeowners close those gaps. We install ADA-rated grab bars in the bathroom, add non-slip treatment and a handheld shower, put sturdy rails on basement and split-level stairs, and add motion-sensor lighting in hallways. At the front door, a low threshold ramp and lever handles make coming and going easier.",
      "Every project begins with a free in-home safety visit and a written flat quote from Slav, CAPS (Certified Aging-in-Place Specialist), who signs off on every finished job. Most Southampton projects are completed in a single visit. For families who live out of the area, our Home Safety Assessment includes a written report emailed to you, so you can see exactly what was recommended for your parent.",
    ],
  },
  {
    slug: "warminster",
    name: "Warminster",
    metaDescription:
      "Aging-in-place upgrades in Warminster, PA: grab bars, handrails, ramps, lighting. Call 267-717-9119. Free in-home safety visit and written flat quote.",
    intro: [
      "Warminster has a large stock of post-war homes, including ranchers, Cape Cods, and split-levels, along with many longtime residents who want to stay put. ReadyNest helps make that possible by fixing the hazards most likely to cause a fall.",
      "Homes of that era often have steep Cape Cod stairs with a single rail, small original bathrooms with a tub-shower combo, and a step or two at every entry. Our fixes are practical: a handrail on the open side of the stairs, grab bars placed where your assessment shows the risk, a non-slip mat or tread in the tub, motion lighting for nighttime, and a threshold ramp at the main door. When the tub itself is the problem, we offer walk-in shower conversions.",
      "Start with a free in-home safety visit. Slav, CAPS (Certified Aging-in-Place Specialist), looks at what worries you and sends a written flat quote, with no pressure and no obligation. Most Warminster jobs are finished in a single visit, and Slav does the final walkthrough with you.",
    ],
  },
  {
    slug: "plumsteadville",
    name: "Plumsteadville",
    metaDescription:
      "Home safety in Plumsteadville, PA: grab bars, railings, ramps, exterior lighting. Call 267-717-9119. Free in-home safety visit and written flat quote.",
    intro: [
      "Plumsteadville and the rest of Plumstead Township are more rural than most of Bucks County, with older farmhouses, long driveways, and homes set well back from the road. That makes the walk from the car to the front door, and the steps at the entry, a big part of staying safe at home.",
      "ReadyNest helps Plumsteadville homeowners with sturdy exterior railings, threshold ramps, and motion-sensor lighting at the entry, plus grab bars, non-slip treatment, and comfort-height toilets in the bathroom. Inside older farmhouses, a second stair rail and motion lighting can make a real difference on steep or winding staircases.",
      "Every project starts with a free in-home safety visit. Slav, CAPS (Certified Aging-in-Place Specialist), explains the options in plain language and sends a written flat quote. We're just up Route 611 from Doylestown, so getting on the schedule is easy. For rural homes, we also look at outdoor paths, porch steps, and lighting between the garage and the house.",
    ],
  },
];

export function getTown(slug: string): Town | undefined {
  return towns.find((t) => t.slug === slug);
}
