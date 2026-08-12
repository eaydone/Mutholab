const SOURCES = [
  { name: "Reuters · Markets", count: 34, live: true },
  { name: "Financial Times", count: 21, live: true },
  { name: "Nikkei Asia", count: 18, live: true },
  { name: "Bloomberg Terminal", count: 27, live: true },
  { name: "BB / BGMEA filings", count: 9, live: false },
];

const QUEUE = [
  {
    title: "Fed hold → import LC pricing",
    stage: "Editor review",
    pct: 88,
    tone: "accent",
  },
  {
    title: "Vietnam lead-time analysis",
    stage: "Drafting",
    pct: 54,
    tone: "cyan",
  },
  {
    title: "Q3 energy tariff model",
    stage: "Fact-check",
    pct: 71,
    tone: "violet",
  },
  {
    title: "bKash agent economics",
    stage: "Collecting",
    pct: 23,
    tone: "muted",
  },
];

const toneMap: Record<string, string> = {
  accent: "#c6ff3a",
  cyan: "#22d3ee",
  violet: "#a855f7",
  muted: "#6b7280",
};

export default function EditorialDashboard() {
  return (
    <div className="overflow-hidden rounded-2xl border border-white/12 bg-[#0b0b0f] shadow-[0_40px_90px_-30px_rgba(0,0,0,0.9)]">
      {/* app chrome */}
      <div className="flex items-center justify-between border-b border-white/10 bg-white/[0.04] px-5 py-3.5">
        <div className="flex items-center gap-3">
          <div className="flex gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
          </div>
          <span className="ml-2 font-mono text-[11px] uppercase tracking-widest text-muted">
            The CEO · Editorial Engine
          </span>
        </div>
        <span className="flex items-center gap-2 rounded-full border border-accent/30 bg-accent/[0.1] px-3 py-1">
          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          <span className="font-mono text-[9px] uppercase tracking-widest text-accent">
            Live
          </span>
        </span>
      </div>

      <div className="grid gap-px bg-white/[0.06] md:grid-cols-[1fr_1.25fr]">
        {/* sources */}
        <div className="bg-[#0b0b0f] p-6">
          <p className="font-mono text-[10px] uppercase tracking-widest text-muted">
            Signal collection · last 24h
          </p>
          <p className="mt-3 font-display text-4xl font-semibold text-foreground">
            1,284
            <span className="ml-2 text-sm font-normal text-muted">
              items ingested
            </span>
          </p>

          <div className="mt-6 space-y-3">
            {SOURCES.map((s) => (
              <div key={s.name} className="flex items-center gap-3">
                <span
                  className={`h-1.5 w-1.5 shrink-0 rounded-full ${
                    s.live ? "bg-accent" : "bg-white/25"
                  }`}
                />
                <span className="flex-1 truncate text-[13px] text-muted">
                  {s.name}
                </span>
                <span className="font-mono text-[11px] text-foreground">
                  {s.count}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-xl border border-white/10 bg-white/[0.03] p-4">
            <p className="font-mono text-[10px] uppercase tracking-widest text-muted">
              Relevance filter
            </p>
            <p className="mt-2 text-[13px] leading-relaxed text-muted">
              <span className="text-foreground">1,284</span> collected →{" "}
              <span className="text-foreground">37</span> Bangladesh-relevant →{" "}
              <span className="text-accent">5</span> in this week&apos;s brief
            </p>
          </div>
        </div>

        {/* story queue */}
        <div className="bg-[#0b0b0f] p-6">
          <p className="font-mono text-[10px] uppercase tracking-widest text-muted">
            Story pipeline
          </p>

          <div className="mt-4 space-y-3.5">
            {QUEUE.map((q) => (
              <div
                key={q.title}
                className="rounded-xl border border-white/10 bg-white/[0.03] p-4"
              >
                <div className="flex items-start justify-between gap-3">
                  <h4 className="text-[13px] font-medium leading-snug text-foreground">
                    {q.title}
                  </h4>
                  <span
                    className="shrink-0 rounded-full px-2.5 py-1 font-mono text-[9px] uppercase tracking-widest"
                    style={{
                      color: toneMap[q.tone],
                      backgroundColor: `${toneMap[q.tone]}14`,
                    }}
                  >
                    {q.stage}
                  </span>
                </div>
                <div className="mt-3 h-1 overflow-hidden rounded-full bg-white/10">
                  <div
                    className="h-full rounded-full"
                    style={{
                      width: `${q.pct}%`,
                      backgroundColor: toneMap[q.tone],
                    }}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-5 flex items-center justify-between rounded-xl border border-accent/25 bg-accent/[0.07] px-4 py-3">
            <span className="text-[12px] text-muted">
              Issue 14 · awaiting editor sign-off
            </span>
            <span className="rounded-full bg-gradient-to-r from-accent to-accent-2 px-4 py-1.5 text-[11px] font-semibold text-accent-foreground">
              Approve &amp; send
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
