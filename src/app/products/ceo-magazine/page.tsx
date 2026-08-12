import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Reveal from "@/components/Reveal";
import SubscribeForm from "@/components/products/SubscribeForm";

export const metadata: Metadata = {
  title: "The CEO — Bangladesh's AI-Powered Business Magazine | Mutholab",
  description:
    "The CEO reads the world's business press, writes original Bangladesh-context analysis, illustrates every edition with AI, and delivers it to the country's decision-makers — weekly and monthly.",
};

const PIPELINE = [
  {
    step: "01",
    title: "Signal collection",
    text: "Our engine monitors 500+ global business publications, market feeds, and public filings around the clock — surfacing the stories that actually matter to South Asian markets.",
  },
  {
    step: "02",
    title: "Context engine",
    text: "AI editors rewrite every insight from scratch for the Bangladesh context — what a Fed decision means for the taka, what a fashion trend in Milan means for Savar. Original words, always. Sources credited and linked, always.",
  },
  {
    step: "03",
    title: "AI design studio",
    text: "Every cover, portrait, and illustration is generated in-house with the Higgsfield AI image engine — a magazine that looks world-class without a photo studio.",
  },
  {
    step: "04",
    title: "Human sign-off",
    text: "Nothing ships without a human editor's approval. No fabricated quotes, no invented numbers — if we can't verify it, we don't print it.",
  },
];

const WEEKLY = [
  "The 5 global stories that affect Bangladesh this week — in 5 minutes",
  "Taka, remittance & export dashboards at a glance",
  "One deep, actionable idea for your Monday leadership meeting",
];

const MONTHLY = [
  "The flagship edition: cover story on a Bangladeshi business leader",
  "Sector deep-dives — RMG, fintech, agro, energy, logistics",
  "Global playbooks rewritten for the Dhaka boardroom",
];

export default function CeoMagazinePage() {
  return (
    <div className="flex flex-1 flex-col">
      <Navbar />
      <main className="flex-1 pt-36 pb-24">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <Link
            href="/#work"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-white/[0.04] px-4 py-2 text-sm text-muted backdrop-blur-xl transition-colors hover:border-white/25 hover:text-foreground"
          >
            ← All work
          </Link>

          {/* Hero */}
          <div className="relative mt-12 grid items-center gap-12 lg:grid-cols-2">
            <div
              className="orb h-[360px] w-[360px] opacity-20"
              style={{ background: "#8b5cf6", top: "-12%", left: "-8%" }}
            />
            <Reveal>
              <span className="inline-block rounded-full border border-accent/30 bg-accent/[0.08] px-4 py-1.5 font-mono text-[11px] uppercase tracking-[0.25em] text-accent">
                Mutholab Product — Media · AI
              </span>
              <h1 className="text-gradient mt-6 font-display text-5xl font-semibold leading-[1.02] tracking-tight md:text-7xl">
                The CEO.
              </h1>
              <p className="mt-4 font-display text-xl font-medium text-foreground md:text-2xl">
                Bangladesh&apos;s first AI-powered business magazine.
              </p>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
                The world&apos;s business intelligence, rewritten for the Dhaka
                boardroom. An AI editorial engine reads the global press,
                writes original Bangladesh-context analysis, illustrates it
                with AI — and delivers it to the country&apos;s decision-makers
                every week and every month.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#subscribe"
                  className="rounded-full bg-gradient-to-r from-accent to-accent-2 px-7 py-3.5 text-sm font-semibold text-accent-foreground shadow-[0_0_36px_-8px_rgba(198,255,58,0.55)] transition-transform hover:scale-105"
                >
                  Get the newsletter
                </a>
                <a
                  href="#how"
                  className="rounded-full border border-border bg-white/[0.04] px-7 py-3.5 text-sm font-medium backdrop-blur-xl transition-colors hover:border-white/25"
                >
                  How it works
                </a>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="relative mx-auto w-full max-w-md">
                <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-accent/20 via-accent-2/10 to-transparent blur-2xl" />
                <div className="relative overflow-hidden rounded-2xl border border-white/15 shadow-[0_40px_80px_-24px_rgba(0,0,0,0.8)]">
                  <Image
                    src="/products/ceo-magazine-cover.png"
                    alt="The CEO magazine — Bangladesh Edition cover, generated with AI"
                    width={896}
                    height={1216}
                    className="h-auto w-full"
                    priority
                    unoptimized
                  />
                </div>
                <p className="mt-4 text-center font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
                  Cover generated by the AI design studio
                </p>
              </div>
            </Reveal>
          </div>

          {/* Stats */}
          <Reveal>
            <div className="mt-24 grid grid-cols-2 gap-4 md:grid-cols-4">
              {[
                ["500+", "Global sources monitored daily"],
                ["2", "Newsletters — weekly & monthly"],
                ["100%", "AI-illustrated, human-approved"],
                ["1", "Mission: Bangladesh's boardrooms"],
              ].map(([value, label]) => (
                <div
                  key={label}
                  className="rounded-3xl border border-border bg-white/[0.03] p-6 backdrop-blur-xl"
                >
                  <div className="text-gradient-accent font-display text-4xl font-semibold">
                    {value}
                  </div>
                  <div className="mt-2 text-sm text-muted">{label}</div>
                </div>
              ))}
            </div>
          </Reveal>

          {/* How it works */}
          <div id="how" className="mt-28 scroll-mt-28">
            <Reveal>
              <span className="inline-block rounded-full border border-border bg-white/[0.04] px-4 py-1.5 font-mono text-[11px] uppercase tracking-[0.25em] text-muted backdrop-blur-xl">
                The editorial engine
              </span>
              <h2 className="text-gradient mt-6 max-w-2xl font-display text-4xl font-semibold tracking-tight md:text-5xl">
                From the world&apos;s press to your desk — in four steps.
              </h2>
            </Reveal>

            <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
              {PIPELINE.map((item, i) => (
                <Reveal key={item.step} delay={i * 0.07}>
                  <div className="group flex h-full flex-col rounded-3xl border border-border bg-white/[0.03] p-7 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1.5 hover:border-accent/40">
                    <span className="font-mono text-xs text-accent">
                      {item.step}
                    </span>
                    <h3 className="mt-4 font-display text-xl font-semibold">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted">
                      {item.text}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Newsletters */}
          <div className="mt-28">
            <Reveal>
              <span className="inline-block rounded-full border border-border bg-white/[0.04] px-4 py-1.5 font-mono text-[11px] uppercase tracking-[0.25em] text-muted backdrop-blur-xl">
                For the CEOs
              </span>
              <h2 className="text-gradient mt-6 max-w-2xl font-display text-4xl font-semibold tracking-tight md:text-5xl">
                Two rhythms. One habit.
              </h2>
            </Reveal>

            <div className="mt-12 grid gap-4 md:grid-cols-2">
              <Reveal>
                <div className="flex h-full flex-col rounded-3xl border border-border bg-gradient-to-b from-accent/[0.08] to-transparent p-8 backdrop-blur-xl md:p-10">
                  <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-accent">
                    Every Sunday
                  </span>
                  <h3 className="mt-3 font-display text-3xl font-semibold">
                    The Weekly Brief
                  </h3>
                  <ul className="mt-6 space-y-3">
                    {WEEKLY.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-muted">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>

              <Reveal delay={0.1}>
                <div className="flex h-full flex-col rounded-3xl border border-border bg-gradient-to-b from-accent-3/[0.12] to-transparent p-8 backdrop-blur-xl md:p-10">
                  <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-accent-2">
                    First of the month
                  </span>
                  <h3 className="mt-3 font-display text-3xl font-semibold">
                    The Monthly Edition
                  </h3>
                  <ul className="mt-6 space-y-3">
                    {MONTHLY.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-muted">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-2" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </div>
          </div>

          {/* Trust */}
          <Reveal>
            <div className="mt-28 rounded-3xl border border-border bg-white/[0.03] p-8 backdrop-blur-xl md:p-12">
              <h2 className="text-gradient font-display text-3xl font-semibold tracking-tight md:text-4xl">
                Built to be trusted.
              </h2>
              <div className="mt-8 grid gap-8 md:grid-cols-3">
                {[
                  [
                    "Original words only",
                    "Every article is written from scratch by our engine and editors. We never republish anyone's work — we credit it, link it, and add the Bangladesh context it was missing.",
                  ],
                  [
                    "Human editor sign-off",
                    "AI drafts, humans decide. A named editor approves every issue before it reaches a single inbox.",
                  ],
                  [
                    "Verifiable by design",
                    "Claims carry their sources. Numbers trace to public filings and market data. If we can't verify it, we don't publish it.",
                  ],
                ].map(([title, text]) => (
                  <div key={title}>
                    <h3 className="font-display text-lg font-semibold">
                      {title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted">
                      {text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Subscribe */}
          <div id="subscribe" className="mt-28 scroll-mt-28">
            <Reveal>
              <div className="relative overflow-hidden rounded-3xl border border-accent/25 bg-gradient-to-br from-accent/[0.1] via-transparent to-accent-2/[0.06] p-8 backdrop-blur-xl md:p-14">
                <h2 className="text-gradient max-w-2xl font-display text-4xl font-semibold tracking-tight md:text-5xl">
                  Be in the first boardroom to read it.
                </h2>
                <p className="mt-4 max-w-xl text-base leading-relaxed text-muted">
                  The CEO launches with a founding cohort of Bangladeshi
                  executives. Join the list — the Weekly Brief starts landing
                  in your inbox the moment we go live.
                </p>
                <SubscribeForm />
                <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
                  No spam. Unsubscribe anytime.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
