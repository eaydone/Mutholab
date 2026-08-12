import Reveal from "@/components/Reveal";
import { skills } from "@/data/projects";

function Pill({ skill }: { skill: string }) {
  return (
    <span className="flex items-center gap-3 rounded-full border border-border bg-white/[0.03] px-6 py-3 font-display text-lg text-muted backdrop-blur-xl">
      {skill}
      <span className="h-1.5 w-1.5 rounded-full bg-accent" />
    </span>
  );
}

export default function Skills() {
  const half = Math.ceil(skills.length / 2);
  const rowA = [...skills, ...skills];
  const rotated = [...skills.slice(half), ...skills.slice(0, half)];
  const rowB = [...rotated, ...rotated];

  return (
    <section id="skills" className="relative py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <Reveal>
          <span className="inline-block rounded-full border border-border bg-white/[0.04] px-4 py-1.5 font-mono text-[11px] uppercase tracking-[0.25em] text-muted backdrop-blur-xl">
            04 — Toolbox
          </span>
          <h2 className="text-gradient mt-6 max-w-2xl font-display text-4xl font-semibold tracking-tight md:text-6xl">
            The stack behind every build.
          </h2>
        </Reveal>
      </div>

      <div className="relative mt-14 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="marquee-track flex w-max gap-3 py-1">
          {rowA.map((skill, i) => (
            <Pill key={`a-${skill}-${i}`} skill={skill} />
          ))}
        </div>
        <div className="marquee-track marquee-reverse mt-3 flex w-max gap-3 py-1">
          {rowB.map((skill, i) => (
            <Pill key={`b-${skill}-${i}`} skill={skill} />
          ))}
        </div>
      </div>
    </section>
  );
}
