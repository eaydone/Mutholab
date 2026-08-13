const DISPOSITIONS = ["Interested", "Callback", "Not now", "Wrong number", "DNC"];

const TIMELINE = [
  { t: "00:00", label: "Predictive engine dialled 4 numbers" },
  { t: "00:06", label: "2 answered · 1 voicemail detected, dropped" },
  { t: "00:09", label: "Live human routed to Farhana — 0.4s wait" },
];

export default function DialerConsole() {
  return (
    <div className="overflow-hidden rounded-2xl border border-white/12 bg-[#0b0b0f] shadow-[0_40px_90px_-30px_rgba(0,0,0,0.9)]">
      {/* chrome */}
      <div className="flex items-center justify-between border-b border-white/10 bg-white/[0.04] px-5 py-3.5">
        <div className="flex items-center gap-3">
          <div className="flex gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
          </div>
          <span className="ml-2 font-mono text-[11px] uppercase tracking-widest text-muted">
            WEPRO Dial · Agent Console
          </span>
        </div>
        <span className="flex items-center gap-2 rounded-full border border-red-400/30 bg-red-400/[0.1] px-3 py-1">
          <span className="h-1.5 w-1.5 rounded-full bg-red-400" />
          <span className="font-mono text-[9px] uppercase tracking-widest text-red-400">
            On call
          </span>
        </span>
      </div>

      <div className="grid gap-px bg-white/[0.06] md:grid-cols-[1.1fr_1fr]">
        {/* live call */}
        <div className="bg-[#0b0b0f] p-6">
          <div className="flex items-start justify-between">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-widest text-muted">
                Connected · Campaign 04
              </p>
              <p className="mt-2 font-display text-2xl font-semibold text-foreground">
                Rezaul Karim
              </p>
              <p className="mt-1 font-mono text-sm text-muted">
                +880 1712 ••• 448
              </p>
            </div>
            <div className="text-right">
              <p className="font-display text-3xl font-semibold tabular-nums text-accent">
                02:14
              </p>
              <p className="mt-1 font-mono text-[10px] uppercase tracking-widest text-muted">
                Talk time
              </p>
            </div>
          </div>

          {/* waveform */}
          <div className="mt-6 flex h-12 items-center gap-[3px]">
            {[
              8, 22, 14, 30, 44, 26, 36, 18, 40, 28, 12, 34, 46, 24, 16, 38, 20,
              32, 10, 42, 26, 14, 30, 20, 36, 12, 28, 44, 18, 24,
            ].map((h, i) => (
              <span
                key={i}
                className="w-full rounded-[1px]"
                style={{
                  height: `${h}px`,
                  backgroundColor: i < 21 ? "#c6ff3a" : "rgba(255,255,255,0.14)",
                }}
              />
            ))}
          </div>

          <div className="mt-6 rounded-xl border border-white/10 bg-white/[0.03] p-4">
            <p className="font-mono text-[10px] uppercase tracking-widest text-muted">
              Pulled from WEPRO CRM
            </p>
            <dl className="mt-3 grid grid-cols-2 gap-x-4 gap-y-2 text-[13px]">
              {[
                ["Company", "Karim Textiles"],
                ["Lead source", "Trade fair '26"],
                ["Last contact", "11 days ago"],
                ["Stage", "Proposal sent"],
              ].map(([k, v]) => (
                <div key={k} className="flex justify-between gap-3">
                  <dt className="text-muted">{k}</dt>
                  <dd className="truncate text-foreground">{v}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="mt-5">
            <p className="font-mono text-[10px] uppercase tracking-widest text-muted">
              Disposition
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {DISPOSITIONS.map((d, i) => (
                <span
                  key={d}
                  className={`rounded-full px-3.5 py-1.5 text-xs ${
                    i === 0
                      ? "bg-gradient-to-r from-accent to-accent-2 font-semibold text-accent-foreground"
                      : "border border-white/12 text-muted"
                  }`}
                >
                  {d}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* engine side */}
        <div className="bg-[#0b0b0f] p-6">
          <p className="font-mono text-[10px] uppercase tracking-widest text-muted">
            What the engine just did
          </p>

          <div className="mt-4 space-y-3">
            {TIMELINE.map((row) => (
              <div key={row.t} className="flex gap-3">
                <span className="font-mono text-[11px] tabular-nums text-accent">
                  {row.t}
                </span>
                <span className="flex-1 text-[13px] leading-snug text-muted">
                  {row.label}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-6 grid grid-cols-2 gap-3">
            {[
              ["Dial ratio", "2.8×"],
              ["Drop rate", "1.4%"],
              ["Agents idle", "0 of 12"],
              ["Answer rate", "31%"],
            ].map(([k, v]) => (
              <div
                key={k}
                className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3"
              >
                <p className="font-mono text-[9px] uppercase tracking-widest text-muted">
                  {k}
                </p>
                <p className="mt-1 font-display text-xl font-semibold text-foreground">
                  {v}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-5 rounded-xl border border-accent/25 bg-accent/[0.07] p-4">
            <p className="text-[12px] leading-relaxed text-muted">
              Drop rate is held under your configured ceiling. When it climbs,
              the engine slows the dial ratio automatically — compliance is a
              setting, not a hope.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
