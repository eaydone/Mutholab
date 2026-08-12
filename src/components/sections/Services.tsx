import Reveal from "@/components/Reveal";

const SERVICES = [
  {
    index: "01",
    title: "Product Engineering",
    items: ["MVP to scale", "System architecture", "Technical strategy", "Code audits"],
  },
  {
    index: "02",
    title: "Frontend & UX",
    items: ["React / Next.js", "Design systems", "Motion & 3D", "Responsive UI"],
  },
  {
    index: "03",
    title: "Backend & Data",
    items: ["REST APIs", "Auth & payments", "Database design", "Third-party integrations"],
  },
  {
    index: "04",
    title: "Automation & Tooling",
    items: ["Internal tools", "Scrapers & bots", "Workflow automation", "Reporting dashboards"],
  },
];

export default function Services() {
  return (
    <section className="relative py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <Reveal>
          <span className="inline-block rounded-full border border-border bg-white/[0.04] px-4 py-1.5 font-mono text-[11px] uppercase tracking-[0.25em] text-muted backdrop-blur-xl">
            02 — What we do
          </span>
          <h2 className="text-gradient mt-6 max-w-2xl font-display text-4xl font-semibold tracking-tight md:text-6xl">
            End-to-end SaaS delivery across four disciplines.
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.07}>
              <div className="group flex h-full flex-col justify-between rounded-3xl border border-border bg-white/[0.03] p-8 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1.5 hover:border-accent/40 hover:shadow-[0_0_44px_-12px_rgba(198,255,58,0.35)]">
                <div className="flex items-start justify-between">
                  <span className="font-mono text-xs text-muted">{s.index}</span>
                  <span className="h-2 w-2 rounded-full bg-white/15 transition-colors group-hover:bg-accent" />
                </div>
                <div className="mt-14">
                  <h3 className="font-display text-xl font-semibold">{s.title}</h3>
                  <ul className="mt-4 space-y-2.5">
                    {s.items.map((item) => (
                      <li key={item} className="flex items-center gap-2.5 text-sm text-muted">
                        <span className="h-1 w-1 rounded-full bg-white/25" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
