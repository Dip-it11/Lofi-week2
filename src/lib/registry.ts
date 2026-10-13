export type ComponentEntry = {
  slug: string;
  name: string;
  summary: string;
  /** Challenge week the component was shipped in. */
  week: number;
  /** Position within that week (1-based). */
  number: number;
  category: "Hero" | "Navigation" | "Content" | "Form" | "Feedback" | "Pricing";
  tags: string[];
  addedOn: string;
};

/** Every component in the library. Add new entries here — each gets its own /components/<slug>/ page. */
export const COMPONENTS: ComponentEntry[] = [
  {
    slug: "cat-reveal-hero",
    name: "Cat Reveal Hero",
    summary:
      "A hero banner where a hand-drawn black cat walks in from the left, reveals the company name letter by letter behind it, then sits down at the end of the name.",
    week: 1,
    number: 1,
    category: "Hero",
    tags: ["Animation", "SVG rig", "Responsive", "Reduced motion"],
    addedOn: "2026-10-02",
  },
  {
    slug: "vinyl-player-card",
    name: "Vinyl Player Card",
    summary:
      "A lofi music card: the record peeks out of its sleeve on hover, then slides out, spins and gets the tonearm when you press play — with a beat generated live in the browser.",
    week: 1,
    number: 2,
    category: "Content",
    tags: ["Card", "Audio", "Web Audio", "Animation"],
    addedOn: "2026-10-05",
  },
  {
    slug: "radio-tuner-pricing",
    name: "Radio Tuner Pricing",
    summary:
      "A pricing section built as a retro radio: turn the knob, drag the dial or press a preset, and each plan comes in clearly through the static when you hit its station.",
    week: 2,
    number: 1,
    category: "Pricing",
    tags: ["Pricing", "Slider", "Web Audio", "Keyboard"],
    addedOn: "2026-10-14",
  },
  {
    slug: "typewriter-contact-form",
    name: "Typewriter Contact Form",
    summary:
      "A contact form typed onto paper in a typewriter — struck-ink letters, key clacks and a bell, red rubber-stamp errors, and a letter that folds into an envelope and flies off when sent.",
    week: 2,
    number: 2,
    category: "Form",
    tags: ["Form", "Validation", "Web Audio", "Animation"],
    addedOn: "2026-10-14",
  },
];

export const getComponent = (slug: string) => COMPONENTS.find((c) => c.slug === slug);

export const componentLabel = (c: Pick<ComponentEntry, "week" | "number">) =>
  `Week ${c.week} · Component ${String(c.number).padStart(2, "0")}`;

/** Components grouped by week, in order. */
export function byWeek() {
  const weeks = new Map<number, ComponentEntry[]>();
  for (const c of [...COMPONENTS].sort((a, b) => a.week - b.week || a.number - b.number)) {
    weeks.set(c.week, [...(weeks.get(c.week) ?? []), c]);
  }
  return [...weeks.entries()].map(([week, items]) => ({ week, items }));
}
