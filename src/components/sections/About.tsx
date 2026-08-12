import Reveal from "@/components/Reveal";
import { stats } from "@/data/projects";

export default function About() {
  return (
    <section id="about" className="border-t border-border py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="grid gap-16 md:grid-cols-12">
          <Reveal className="md:col-span-4">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted">
              01 — About
            </p>
          </Reveal>

          <div className="md:col-span-8">
            <Reveal>
              <p className="font-display text-3xl font-medium leading-tight tracking-tight md:text-4xl">
                I&apos;m a bespoke, one-person engineering shop — committed to
                turning ideas into working SaaS products, fast. I handle
                everything: product thinking, interface, backend, data, and
                deployment.
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="mt-8 max-w-2xl text-base leading-relaxed text-muted md:text-lg">
                Over the past few years I&apos;ve shipped CRMs, e-commerce
                platforms, diagnostic tools, automation bots, and internal
                systems across industries — automotive, retail, community
                platforms, and more. Every project ships as a real, working
                product, not a prototype.
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="mt-16 grid grid-cols-1 gap-8 border-t border-border pt-10 sm:grid-cols-3">
                {stats.map((s) => (
                  <div key={s.label}>
                    <div className="font-display text-4xl font-semibold text-accent md:text-5xl">
                      {s.value}
                    </div>
                    <div className="mt-2 text-sm text-muted">{s.label}</div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
