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
    <section className="border-t border-border py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted">
            02 — What I do
          </p>
          <h2 className="mt-4 max-w-2xl font-display text-3xl font-medium tracking-tight md:text-5xl">
            End-to-end SaaS delivery, one engineer, four disciplines.
          </h2>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.08} className="bg-background">
              <div className="group flex h-full flex-col justify-between p-8 transition-colors hover:bg-surface">
                <div className="flex items-start justify-between">
                  <span className="font-mono text-xs text-muted">{s.index}</span>
                  <span className="h-2 w-2 rounded-full bg-border transition-colors group-hover:bg-accent" />
                </div>
                <div className="mt-10">
                  <h3 className="font-display text-xl font-semibold">{s.title}</h3>
                  <ul className="mt-4 space-y-2">
                    {s.items.map((item) => (
                      <li key={item} className="text-sm text-muted">
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
