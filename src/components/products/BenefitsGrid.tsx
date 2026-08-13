type Benefit = {
  title: string;
  text: string;
  bg: string;
  ink: string;
  chip: string;
  icon: React.ReactNode;
};

const s = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.7,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const BENEFITS: Benefit[] = [
  {
    title: "Boost agent productivity",
    text: "Idle time between calls collapses. Agents move from one conversation straight into the next instead of listening to ringtones.",
    bg: "#16295a",
    ink: "#93b4ff",
    chip: "rgba(147,180,255,0.14)",
    icon: (
      <svg viewBox="0 0 24 24" {...s}>
        <path d="M13 2 4 14h7l-1 8 9-12h-7l1-8Z" />
      </svg>
    ),
  },
  {
    title: "Increase contact rates",
    text: "Adaptive pacing learns your answer rate hour by hour and dials ahead, so more of your list actually picks up.",
    bg: "#0f4034",
    ink: "#5fe0b4",
    chip: "rgba(95,224,180,0.14)",
    icon: (
      <svg viewBox="0 0 24 24" {...s}>
        <path d="M3 17l6-6 4 4 8-8" />
        <path d="M21 7v5h-5" />
      </svg>
    ),
  },
  {
    title: "Use local caller ID",
    text: "Present a number local to the district you're calling, and rotate lines automatically so no single number gets burned.",
    bg: "#48290e",
    ink: "#ffbe8a",
    chip: "rgba(255,190,138,0.14)",
    icon: (
      <svg viewBox="0 0 24 24" {...s}>
        <rect x="2.5" y="5" width="19" height="14" rx="2.5" />
        <circle cx="8.5" cy="11" r="2" />
        <path d="M5.5 16c.6-1.5 1.7-2.2 3-2.2s2.4.7 3 2.2M14.5 10h4M14.5 13.5h4" />
      </svg>
    ),
  },
  {
    title: "Import your contacts",
    text: "Bulk CSV upload, or pull records straight from WEPRO CRM. No manual list building, no copy-paste between systems.",
    bg: "#421a37",
    ink: "#ff9ed6",
    chip: "rgba(255,158,214,0.14)",
    icon: (
      <svg viewBox="0 0 24 24" {...s}>
        <path d="M12 3v10m0 0 3.5-3.5M12 13l-3.5-3.5" />
        <path d="M4 15v3.5A2.5 2.5 0 0 0 6.5 21h11a2.5 2.5 0 0 0 2.5-2.5V15" />
      </svg>
    ),
  },
  {
    title: "Reduce voicemail burden",
    text: "Answering machines, IVR trees and dead air are detected and dropped before they ever tie up an agent.",
    bg: "#33184f",
    ink: "#c79bff",
    chip: "rgba(199,155,255,0.14)",
    icon: (
      <svg viewBox="0 0 24 24" {...s}>
        <path d="M4 10v4M8 6v12M12 8v8M16 5v14M20 10v4" />
      </svg>
    ),
  },
  {
    title: "Validate your calling lists",
    text: "Invalid, disconnected and duplicate numbers are stripped before a campaign starts, so your connect rate reflects reality.",
    bg: "#0c0c10",
    ink: "#ffffff",
    chip: "rgba(255,255,255,0.1)",
    icon: (
      <svg viewBox="0 0 24 24" {...s}>
        <path d="M4 7h9M4 12h9M4 17h6" />
        <path d="m15.5 16.5 2 2 4-4.5" />
      </svg>
    ),
  },
];

export default function BenefitsGrid() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {BENEFITS.map((b) => (
        <div
          key={b.title}
          className="flex h-full flex-col rounded-3xl border border-white/[0.07] p-7 transition-transform duration-300 hover:-translate-y-1.5 md:p-8"
          style={{ backgroundColor: b.bg }}
        >
          <span
            className="grid h-11 w-11 place-items-center rounded-xl"
            style={{ backgroundColor: b.chip, color: b.ink }}
          >
            <span className="block h-5 w-5">{b.icon}</span>
          </span>

          <h3
            className="mt-10 font-display text-xl font-semibold"
            style={{ color: b.ink }}
          >
            {b.title}
          </h3>
          <p
            className="mt-3 text-sm leading-relaxed"
            style={{ color: b.ink, opacity: 0.72 }}
          >
            {b.text}
          </p>
        </div>
      ))}
    </div>
  );
}
