import Image from "next/image";
import Reveal from "@/components/Reveal";
import TiltCard from "@/components/TiltCard";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section id="work" className="border-t border-border py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <Reveal className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted">
              03 — Selected work
            </p>
            <h2 className="mt-4 max-w-xl font-display text-3xl font-medium tracking-tight md:text-5xl">
              Products I&apos;ve built, end to end.
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-muted">
            A cross-section of SaaS tools, e-commerce platforms, and
            automation systems — each designed, built, and shipped solo.
          </p>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2">
          {projects.map((project, i) => (
            <Reveal key={project.slug} delay={(i % 2) * 0.1}>
              <TiltCard className="group relative overflow-hidden rounded-2xl border border-border bg-surface">
                <div className="relative aspect-[16/10] w-full overflow-hidden border-b border-border">
                  <Image
                    src={project.image}
                    alt={`${project.name} preview`}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    unoptimized
                  />
                </div>

                <div className="p-7">
                  <div className="flex items-center justify-between">
                    <span
                      className="font-mono text-xs uppercase tracking-widest"
                      style={{ color: project.color }}
                    >
                      {project.category}
                    </span>
                    <span className="font-mono text-xs text-muted">{project.year}</span>
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
                        className="rounded-full border border-border px-3 py-1 text-xs text-muted"
                      >
                        {tech}
                      </span>
                    ))}
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
