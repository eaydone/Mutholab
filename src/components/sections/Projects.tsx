import Image from "next/image";
import Reveal from "@/components/Reveal";
import TiltCard from "@/components/TiltCard";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section id="work" className="relative py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <Reveal className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <span className="inline-block rounded-full border border-border bg-white/[0.04] px-4 py-1.5 font-mono text-[11px] uppercase tracking-[0.25em] text-muted backdrop-blur-xl">
              03 — Selected work
            </span>
            <h2 className="text-gradient mt-6 max-w-xl font-display text-4xl font-semibold tracking-tight md:text-6xl">
              Products we&apos;ve built, end to end.
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-muted">
            A cross-section of SaaS tools, e-commerce platforms, and
            automation systems — each designed, built, and shipped in-house.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2">
          {projects.map((project, i) => (
            <Reveal key={project.slug} delay={(i % 2) * 0.1}>
              <TiltCard className="group relative h-full rounded-3xl bg-gradient-to-b from-white/[0.14] via-white/[0.05] to-white/[0.02] p-px transition-shadow duration-300 hover:shadow-[0_0_60px_-18px_rgba(198,255,58,0.3)]">
                <div className="relative h-full overflow-hidden rounded-[calc(1.5rem-1px)] bg-[#0a0a0e]">
                  <div className="relative aspect-[16/9] w-full overflow-hidden">
                    <Image
                      src={project.image}
                      alt={`${project.name} preview`}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      unoptimized
                    />
                    <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#0a0a0e] to-transparent" />
                    <span className="absolute right-5 top-5 grid h-11 w-11 place-items-center rounded-full border border-white/15 bg-black/50 text-lg opacity-0 backdrop-blur-xl transition-all duration-300 group-hover:opacity-100">
                      ↗
                    </span>
                  </div>

                  <div className="p-7">
                    <div className="flex items-center justify-between">
                      <span
                        className="font-mono text-[11px] uppercase tracking-[0.2em]"
                        style={{ color: project.color }}
                      >
                        {project.category}
                      </span>
                      <span className="font-mono text-xs text-muted">
                        {project.year}
                      </span>
                    </div>

                    <h3 className="mt-4 font-display text-2xl font-semibold tracking-tight">
                      {project.name}
                    </h3>

                    <p className="mt-3 text-sm leading-relaxed text-muted">
                      {project.description}
                    </p>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {project.stack.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full border border-border bg-white/[0.03] px-3.5 py-1.5 text-xs text-muted"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
