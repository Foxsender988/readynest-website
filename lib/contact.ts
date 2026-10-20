// ─── Contact form "Service Needed" options ───────────────────────────────────

export const SERVICE_OPTIONS = [
  "Free Home Safety Assessment",
  "Bathroom Safety",
  "Walk-In Shower Conversion",
  "Stairs, Entry & Lighting",
  "Something else / not sure yet",
] as const;

export type ServiceOption = (typeof SERVICE_OPTIONS)[number];

/**
 * Maps a `?service=` query value (including legacy values from older links, e.g.
 * "Bathroom Safety Package — $995" or "Trash Valet Service") to the nearest current option.
 */
export function normalizeServiceParam(raw: string | undefined): ServiceOption | "" {
  if (!raw) return "";
  const exact = SERVICE_OPTIONS.find((o) => o.toLowerCase() === raw.trim().toLowerCase());
  if (exact) return exact;

  const v = raw.toLowerCase();
  if (v.includes("shower")) return "Walk-In Shower Conversion";
  if (v.includes("bathroom")) return "Bathroom Safety";
  if (/entry|exit|stair|hallway|lighting|smart|doorbell|ramp|rail/.test(v)) {
    return "Stairs, Entry & Lighting";
  }
  if (/assessment|whole-home|whole home/.test(v)) return "Free Home Safety Assessment";
  return "Something else / not sure yet";
}
