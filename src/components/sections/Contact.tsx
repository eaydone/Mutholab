import Reveal from "@/components/Reveal";

const SOCIALS = [
  { label: "Email", href: "mailto:eaydislamone@gmail.com" },
  { label: "GitHub", href: "#" },
  { label: "LinkedIn", href: "#" },
];

export default function Contact() {
  return (
    <section id="contact" className="relative py-32">
      <div
        className="orb h-[380px] w-[380px] opacity-20"
        style={{ background: "#8b5cf6", bottom: "-10%", right: "0%" }}
      />

      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <Reveal>
          <span className="inline-block rounded-full border border-border bg-white/[0.04] px-4 py-1.5 font-mono text-[11px] uppercase tracking-[0.25em] text-muted backdrop-blur-xl">
            06 — Contact
          </span>
        </Reveal>

        <Reveal delay={0.1}>
          <a
            href="mailto:eaydislamone@gmail.com"
            className="mt-8 block font-display text-[12vw] font-semibold leading-[0.95] tracking-tight md:text-[6.4vw]"
          >
            <span className="text-gradient">Let&apos;s build</span>
            <br />
            <span className="text-gradient">something</span>
            <span className="text-gradient-accent">.</span>
          </a>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mt-14 flex flex-col justify-between gap-8 rounded-3xl border border-border bg-white/[0.03] p-8 backdrop-blur-xl md:flex-row md:items-center md:p-10">
            <p className="max-w-md text-base leading-relaxed text-muted">
              Have a SaaS idea, an internal tool that needs building, or a
              product that needs shipping? We take on a limited number of
              client engagements at a time — reach out and let&apos;s talk.
            </p>

            <div className="flex shrink-0 flex-col items-start gap-5 md:items-end">
              <a
                href="mailto:eaydislamone@gmail.com"
                className="rounded-full bg-gradient-to-r from-accent to-accent-2 px-7 py-3.5 text-sm font-semibold text-accent-foreground shadow-[0_0_36px_-8px_rgba(198,255,58,0.5)] transition-transform hover:scale-105"
              >
                Start a project →
              </a>
              <ul className="flex flex-wrap gap-x-6 gap-y-2">
                {SOCIALS.map((s) => (
                  <li key={s.label}>
                    <a
                      href={s.href}
                      className="text-sm text-muted underline decoration-white/20 underline-offset-4 transition-colors hover:text-foreground hover:decoration-accent"
                    >
                      {s.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
