const CAMPAIGNS = [
  { name: "Q3 Renewals · Dhaka", mode: "Predictive", agents: 12, pct: 74, tone: "#c6ff3a" },
  { name: "Cold outreach · RMG", mode: "Power", agents: 6, pct: 41, tone: "#22d3ee" },
  { name: "Collections · 30d", mode: "Preview", agents: 4, pct: 88, tone: "#a855f7" },
];

const AGENTS = [
  { name: "Farhana R.", state: "On call", time: "02:14", tone: "#c6ff3a" },
  { name: "Tanvir A.", state: "On call", time: "00:47", tone: "#c6ff3a" },
  { name: "Nusrat J.", state: "Wrap-up", time: "00:12", tone: "#22d3ee" },
  { name: "Imran H.", state: "Ready", time: "00:03", tone: "#6b7280" },
];

const HOURLY = [38, 52, 61, 49, 73, 88, 79, 94, 86, 71, 58, 66];

export default function CampaignDashboard() {
  const peak = Math.max(...HOURLY);

  return (
    <div className="overflow-hidden rounded-2xl border border-white/12 bg-[#0b0b0f] shadow-[0_40px_90px_-30px_rgba(0,0,0,0.9)]">
      <div className="flex items-center justify-between border-b border-white/10 bg-white/[0.04] px-5 py-3.5">
        <div className="flex items-center gap-3">
          <div className="flex gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
          </div>
          <span className="ml-2 font-mono text-[11px] uppercase tracking-widest text-muted">
            WEPRO Dial · Supervisor Wallboard
          </span>
        </div>
        <span className="hidden font-mono text-[10px] uppercase tracking-widest text-muted sm:block">
          Today · 09:00–17:00
        </span>
      </div>

      {/* top metrics */}
      <div className="grid grid-cols-2 gap-px bg-white/[0.06] md:grid-cols-4">
        {[
          ["Calls placed", "4,182", "+18% vs yesterday"],
          ["Connected", "1,296", "31% answer rate"],
          ["Talk time", "38h 12m", "3.2× manual dialling"],
          ["Drop rate", "1.4%", "ceiling 3.0%"],
        ].map(([label, value, sub]) => (
          <div key={label} className="bg-[#0b0b0f] px-5 py-5">
            <p className="font-mono text-[9px] uppercase tracking-widest text-muted">
              {label}
            </p>
            <p className="mt-2 font-display text-2xl font-semibold text-foreground">
              {value}
            </p>
            <p className="mt-1 text-[11px] text-accent">{sub}</p>
          </div>
        ))}
      </div>

      <div className="grid gap-px border-t border-white/[0.06] bg-white/[0.06] md:grid-cols-[1.3fr_1fr]">
        {/* campaigns + chart */}
        <div className="bg-[#0b0b0f] p-6">
          <p className="font-mono text-[10px] uppercase tracking-widest text-muted">
            Active campaigns
          </p>
          <div className="mt-4 space-y-3">
            {CAMPAIGNS.map((c) => (
              <div
                key={c.name}
                className="rounded-xl border border-white/10 bg-white/[0.03] p-4"
              >
                <div className="flex items-center justify-between gap-3">
                  <span className="truncate text-[13px] font-medium text-foreground">
                    {c.name}
                  </span>
                  <div className="flex shrink-0 items-center gap-2">
                    <span
                      className="rounded-full px-2.5 py-1 font-mono text-[9px] uppercase tracking-widest"
                      style={{ color: c.tone, backgroundColor: `${c.tone}14` }}
                    >
                      {c.mode}
                    </span>
                    <span className="font-mono text-[11px] text-muted">
                      {c.agents} agents
                    </span>
                  </div>
                </div>
                <div className="mt-3 h-1 overflow-hidden rounded-full bg-white/10">
                  <div
                    className="h-full rounded-full"
                    style={{ width: `${c.pct}%`, backgroundColor: c.tone }}
                  />
                </div>
                <p className="mt-2 font-mono text-[10px] text-muted">
                  {c.pct}% of list dialled
                </p>
              </div>
            ))}
          </div>

          <p className="mt-6 font-mono text-[10px] uppercase tracking-widest text-muted">
            Connects per hour
          </p>
          <div className="mt-3 flex h-24 items-end gap-1.5">
            {HOURLY.map((v, i) => (
              <div key={i} className="flex-1">
                <div
                  className="w-full rounded-t"
                  style={{
                    height: `${(v / peak) * 88}px`,
                    backgroundColor:
                      v === peak ? "#c6ff3a" : "rgba(198,255,58,0.28)",
                  }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* agents */}
        <div className="bg-[#0b0b0f] p-6">
          <p className="font-mono text-[10px] uppercase tracking-widest text-muted">
            Agent states · live
          </p>
          <div className="mt-4 space-y-2.5">
            {AGENTS.map((a) => (
              <div
                key={a.name}
                className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3"
              >
                <span
                  className="h-1.5 w-1.5 shrink-0 rounded-full"
                  style={{ backgroundColor: a.tone }}
                />
                <span className="flex-1 truncate text-[13px] text-foreground">
                  {a.name}
                </span>
                <span
                  className="font-mono text-[10px] uppercase tracking-widest"
                  style={{ color: a.tone }}
                >
                  {a.state}
                </span>
                <span className="font-mono text-[11px] tabular-nums text-muted">
                  {a.time}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-5 rounded-xl border border-white/10 bg-white/[0.03] p-4">
            <p className="font-mono text-[9px] uppercase tracking-widest text-muted">
              Occupancy
            </p>
            <div className="mt-3 flex items-end justify-between">
              <span className="font-display text-3xl font-semibold text-foreground">
                87%
              </span>
              <span className="text-[11px] text-muted">
                idle time 4m 20s / agent
              </span>
            </div>
            <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-white/10">
              <div className="h-full w-[87%] rounded-full bg-gradient-to-r from-accent to-accent-2" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
