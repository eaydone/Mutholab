import Reveal from "@/components/Reveal";

const SOCIALS = [
  { label: "Email", href: "mailto:eaydislamone@gmail.com" },
  { label: "GitHub", href: "#" },
  { label: "LinkedIn", href: "#" },
];

export default function Contact() {
  return (
    <section id="contact" className="border-t border-border py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted">
            05 — Contact
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <a
            href="mailto:eaydislamone@gmail.com"
            className="group mt-8 block font-display text-[11vw] font-semibold leading-[0.95] tracking-tight md:text-[6vw]"
          >
            Let&apos;s build
            <br />
            something<span className="text-accent">.</span>
          </a>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mt-14 flex flex-col justify-between gap-8 border-t border-border pt-10 md:flex-row md:items-center">
            <p className="max-w-md text-base leading-relaxed text-muted">
              Have a SaaS idea, an internal tool that needs building, or a
              product that needs shipping? We take on a limited number of
              client engagements at a time — reach out and let&apos;s talk.
            </p>

            <ul className="flex flex-wrap gap-x-8 gap-y-3">
              {SOCIALS.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    className="text-sm text-foreground underline decoration-border underline-offset-4 transition-colors hover:decoration-accent"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
