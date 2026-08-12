import Reveal from "@/components/Reveal";
import { stats } from "@/data/projects";

const INDUSTRIES = ["Automotive", "Retail", "Community", "Sales & CRM", "Logistics", "Media"];

export default function About() {
  return (
    <section id="about" className="relative py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <Reveal>
          <span className="inline-block rounded-full border border-border bg-white/[0.04] px-4 py-1.5 font-mono text-[11px] uppercase tracking-[0.25em] text-muted backdrop-blur-xl">
            01 — About
          </span>
          <h2 className="text-gradient mt-6 max-w-2xl font-display text-4xl font-semibold tracking-tight md:text-6xl">
            A studio built to ship.
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-3">
          <Reveal className="md:col-span-2">
            <div className="flex h-full flex-col justify-between rounded-3xl border border-border bg-white/[0.03] p-8 backdrop-blur-xl md:p-10">
              <p className="font-display text-2xl font-medium leading-snug tracking-tight md:text-3xl">
                Mutholab is a bespoke product studio — committed to turning
                ideas into working SaaS products, fast. We handle everything:
                product thinking, interface, backend, data, and deployment.
              </p>
              <p className="mt-8 max-w-2xl text-base leading-relaxed text-muted">
                Every project ships as a real, working product — not a
                prototype.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="flex h-full flex-col justify-between rounded-3xl border border-border bg-gradient-to-b from-accent/[0.09] to-transparent p-8 backdrop-blur-xl">
              <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-muted">
                Shipped
              </span>
              <div>
                <div className="text-gradient-accent font-display text-6xl font-semibold md:text-7xl">
                  {stats[0].value}
                </div>
                <div className="mt-2 text-sm text-muted">{stats[0].label}</div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.05}>
            <div className="flex h-full flex-col justify-between gap-10 rounded-3xl border border-border bg-white/[0.03] p-8 backdrop-blur-xl">
              <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-muted">
                Industries
              </span>
              <div className="flex flex-wrap gap-2">
                {INDUSTRIES.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-border bg-white/[0.03] px-3.5 py-1.5 text-xs text-muted"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="flex h-full flex-col justify-between gap-10 rounded-3xl border border-border bg-white/[0.03] p-8 backdrop-blur-xl">
              <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-muted">
                Reach
              </span>
              <div>
                <div className="font-display text-5xl font-semibold text-foreground">
                  {stats[1].value}
                </div>
                <div className="mt-2 text-sm text-muted">{stats[1].label}</div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="flex h-full flex-col justify-between gap-10 rounded-3xl border border-border bg-gradient-to-b from-accent-3/[0.12] to-transparent p-8 backdrop-blur-xl">
              <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-muted">
                Ownership
              </span>
              <div>
                <div className="font-display text-5xl font-semibold text-foreground">
                  {stats[2].value}
                </div>
                <div className="mt-2 text-sm text-muted">{stats[2].label}</div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
