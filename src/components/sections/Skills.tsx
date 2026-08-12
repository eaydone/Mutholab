import Reveal from "@/components/Reveal";
import { skills } from "@/data/projects";

export default function Skills() {
  const loop = [...skills, ...skills];

  return (
    <section id="skills" className="border-t border-border py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted">
            04 — Toolbox
          </p>
          <h2 className="mt-4 max-w-2xl font-display text-3xl font-medium tracking-tight md:text-5xl">
            The stack behind every build.
          </h2>
        </Reveal>
      </div>

      <div className="relative mt-16 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="marquee-track flex w-max gap-4 py-2">
          {loop.map((skill, i) => (
            <span
              key={`${skill}-${i}`}
              className="flex items-center gap-3 rounded-full border border-border px-6 py-3 font-display text-lg text-muted"
            >
              {skill}
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            </span>
          ))}
        </div>
      </div>

      <style>{`
        .marquee-track {
          animation: marquee 32s linear infinite;
        }
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
