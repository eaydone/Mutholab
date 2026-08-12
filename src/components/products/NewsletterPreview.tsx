const MARKETS = [
  { label: "USD / BDT", value: "121.40", delta: "+0.3%", up: true },
  { label: "DSEX", value: "5,412", delta: "−1.2%", up: false },
  { label: "Remittance MTD", value: "$1.94bn", delta: "+8.1%", up: true },
  { label: "RMG exports", value: "$3.61bn", delta: "+2.4%", up: true },
];

const BRIEFS = [
  {
    tag: "Global → Dhaka",
    title: "The Fed held. Your import LC just got cheaper.",
    text: "Rate policy stayed flat overnight. For Bangladeshi importers, that removes the Q3 dollar squeeze most CFOs budgeted for — here is the hedge to unwind first.",
    source: "Synthesised from 6 sources · Reuters, FT, Bloomberg",
  },
  {
    tag: "Sector",
    title: "Vietnam took 4 buyers from Chattogram last quarter.",
    text: "Three of them cited lead time, not price. The factories winning contracts back have one thing in common, and it is not a discount.",
    source: "Synthesised from 4 sources · Nikkei, Just-Style, BGMEA data",
  },
];

export default function NewsletterPreview() {
  return (
    <div className="overflow-hidden rounded-2xl border border-white/12 bg-[#0b0b0f] shadow-[0_40px_90px_-30px_rgba(0,0,0,0.9)]">
      {/* mail client chrome */}
      <div className="flex items-center gap-3 border-b border-white/10 bg-white/[0.04] px-5 py-3.5">
        <div className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
        </div>
        <div className="ml-2 min-w-0 flex-1">
          <p className="truncate text-[13px] text-foreground">
            The Weekly Brief — Issue 14
          </p>
          <p className="truncate text-[11px] text-muted">
            The CEO &lt;brief@theceo.com.bd&gt; · to you · Sunday, 7:00 AM
          </p>
        </div>
        <span className="hidden rounded-full border border-accent/30 bg-accent/[0.1] px-2.5 py-1 font-mono text-[9px] uppercase tracking-widest text-accent sm:block">
          Inbox
        </span>
      </div>

      {/* email body */}
      <div className="max-h-[560px] overflow-hidden px-6 py-7 md:px-8">
        <div className="flex items-baseline justify-between border-b border-white/10 pb-4">
          <span className="font-display text-2xl font-semibold tracking-tight text-[#e8c47c]">
            THE CEO
          </span>
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
            Weekly Brief
          </span>
        </div>

        <p className="mt-6 text-[13px] leading-relaxed text-muted">
          Good morning. Five minutes, five things that move your P&amp;L this
          week.
        </p>

        {/* market strip */}
        <div className="mt-6 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-white/10 bg-white/[0.06] md:grid-cols-4">
          {MARKETS.map((m) => (
            <div key={m.label} className="bg-[#0b0b0f] px-4 py-3.5">
              <p className="font-mono text-[9px] uppercase tracking-widest text-muted">
                {m.label}
              </p>
              <p className="mt-1.5 font-display text-lg font-semibold text-foreground">
                {m.value}
              </p>
              <p
                className={`mt-0.5 text-[11px] ${
                  m.up ? "text-accent" : "text-red-400"
                }`}
              >
                {m.delta}
              </p>
            </div>
          ))}
        </div>

        {/* stories */}
        <div className="mt-7 space-y-6">
          {BRIEFS.map((b) => (
            <div key={b.title} className="border-l-2 border-accent/40 pl-4">
              <span className="font-mono text-[9px] uppercase tracking-widest text-accent">
                {b.tag}
              </span>
              <h4 className="mt-2 font-display text-base font-semibold leading-snug text-foreground">
                {b.title}
              </h4>
              <p className="mt-2 text-[13px] leading-relaxed text-muted">
                {b.text}
              </p>
              <p className="mt-2 font-mono text-[10px] text-muted/70">
                {b.source}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* fade to imply continuation */}
      <div className="h-16 bg-gradient-to-t from-[#0b0b0f] to-transparent" />
    </div>
  );
}
