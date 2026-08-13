import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Reveal from "@/components/Reveal";
import DialerConsole from "@/components/products/DialerConsole";
import CampaignDashboard from "@/components/products/CampaignDashboard";
import DemoRequestForm from "@/components/products/DemoRequestForm";

export const metadata: Metadata = {
  title: "WEPRO Dial — AI Predictive Dialer for Bangladesh | Mutholab",
  description:
    "An AI predictive dialer that keeps your agents talking instead of waiting — adaptive dial pacing, voicemail detection, local caller ID, DNC compliance, and native WEPRO CRM sync.",
};

const MODES = [
  {
    name: "Predictive",
    tag: "High volume",
    text: "The engine dials several numbers per free agent, learns your answer rate through the day, and adjusts pace so a human is always waiting for a human — not the other way round.",
  },
  {
    name: "Power",
    tag: "Steady lists",
    text: "A fixed number of lines per agent. Simple, predictable pacing for smaller teams and warmer lists where drop risk must stay near zero.",
  },
  {
    name: "Preview",
    tag: "High value",
    text: "The agent sees the full CRM record first and chooses when to dial. Built for collections, renewals and enterprise deals where the first sentence matters.",
  },
  {
    name: "Progressive",
    tag: "Balanced",
    text: "One call per available agent, dialled automatically the moment they go ready. No idle gap, no abandoned calls.",
  },
];

const FEATURES = [
  {
    title: "Voicemail & machine detection",
    text: "Answering machines, ringback tones, IVR trees and dead air are identified and dropped before an agent is tied up. Only live humans get routed.",
  },
  {
    title: "Local caller ID",
    text: "Present a local number for the district you're calling, and rotate numbers automatically to avoid burning a single line's reputation.",
  },
  {
    title: "DNC & calling hours",
    text: "Do-not-call lists are enforced at dial time, not after. Calling windows are set per campaign so nobody rings a customer at 9pm.",
  },
  {
    title: "Number validation",
    text: "Bulk lists are cleaned before a campaign starts — invalid, disconnected and duplicate numbers are stripped so your connect rate reflects reality.",
  },
  {
    title: "Recording & QA scoring",
    text: "Every call recorded, transcribed and searchable. Score calls against your own rubric and coach from the actual moment, not a summary.",
  },
  {
    title: "Native WEPRO CRM sync",
    text: "Leads, dispositions, notes and recordings write straight back to the contact record. Also connects to any CRM through REST and webhooks.",
  },
];

const STATS = [
  ["3.2×", "More talk time per agent hour than manual dialling"],
  ["<1s", "Median wait between answer and agent connect"],
  ["60+", "Live and historical metrics on the wallboard"],
  ["24h", "From signed off to first live campaign"],
];

export default function WeproDialPage() {
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
          <div className="relative mt-12">
            <div
              className="orb h-[380px] w-[380px] opacity-20"
              style={{ background: "#22d3ee", top: "-14%", right: "-6%" }}
            />
            <Reveal>
              <span className="inline-block rounded-full border border-accent/30 bg-accent/[0.08] px-4 py-1.5 font-mono text-[11px] uppercase tracking-[0.25em] text-accent">
                Mutholab Product — SaaS · Telephony
              </span>
              <h1 className="text-gradient mt-6 max-w-3xl font-display text-5xl font-semibold leading-[1.02] tracking-tight md:text-7xl">
                WEPRO Dial.
              </h1>
              <p className="mt-4 max-w-2xl font-display text-xl font-medium text-foreground md:text-2xl">
                Your agents should be talking, not waiting.
              </p>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
                An AI predictive dialer built for Bangladeshi sales floors. It
                dials ahead of your team, throws away the voicemails and dead
                numbers, and hands each agent a live human the moment they go
                ready — while holding your drop rate under a ceiling you set.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#demo"
                  className="rounded-full bg-gradient-to-r from-accent to-accent-2 px-7 py-3.5 text-sm font-semibold text-accent-foreground shadow-[0_0_36px_-8px_rgba(198,255,58,0.55)] transition-transform hover:scale-105"
                >
                  Book a walkthrough
                </a>
                <a
                  href="#console"
                  className="rounded-full border border-border bg-white/[0.04] px-7 py-3.5 text-sm font-medium backdrop-blur-xl transition-colors hover:border-white/25"
                >
                  See it working
                </a>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="relative mt-14 overflow-hidden rounded-3xl border border-white/12">
                <Image
                  src="/products/dial-floor.jpg"
                  alt="A sales floor of agents on headsets running outbound campaigns"
                  width={1600}
                  height={900}
                  className="h-auto w-full"
                  priority
                  unoptimized
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background via-background/25 to-transparent" />
              </div>
            </Reveal>
          </div>

          {/* Stats */}
          <Reveal>
            <div className="mt-16 grid grid-cols-2 gap-4 md:grid-cols-4">
              {STATS.map(([value, label]) => (
                <div
                  key={label}
                  className="rounded-3xl border border-border bg-white/[0.03] p-6 backdrop-blur-xl"
                >
                  <div className="text-gradient-accent font-display text-4xl font-semibold">
                    {value}
                  </div>
                  <div className="mt-2 text-sm leading-snug text-muted">
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          {/* Console */}
          <div id="console" className="mt-28 scroll-mt-28">
            <Reveal>
              <span className="inline-block rounded-full border border-border bg-white/[0.04] px-4 py-1.5 font-mono text-[11px] uppercase tracking-[0.25em] text-muted backdrop-blur-xl">
                The agent console
              </span>
              <h2 className="text-gradient mt-6 max-w-2xl font-display text-4xl font-semibold tracking-tight md:text-5xl">
                One screen. Everything the call needs.
              </h2>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-muted">
                The customer&apos;s CRM record is already open when the call
                connects. Disposition in one click, and the next live human is
                on the line before the agent finishes typing.
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="mt-12">
                <DialerConsole />
              </div>
            </Reveal>
          </div>

          {/* Dialing modes */}
          <div className="mt-28">
            <Reveal>
              <span className="inline-block rounded-full border border-border bg-white/[0.04] px-4 py-1.5 font-mono text-[11px] uppercase tracking-[0.25em] text-muted backdrop-blur-xl">
                Dialling modes
              </span>
              <h2 className="text-gradient mt-6 max-w-2xl font-display text-4xl font-semibold tracking-tight md:text-5xl">
                Four modes. Pick per campaign.
              </h2>
            </Reveal>

            <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
              {MODES.map((mode, i) => (
                <Reveal key={mode.name} delay={i * 0.07}>
                  <div className="group flex h-full flex-col rounded-3xl border border-border bg-white/[0.03] p-7 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1.5 hover:border-accent/40">
                    <span className="font-mono text-[10px] uppercase tracking-widest text-accent">
                      {mode.tag}
                    </span>
                    <h3 className="mt-3 font-display text-2xl font-semibold">
                      {mode.name}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted">
                      {mode.text}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Wallboard */}
          <div className="mt-28">
            <Reveal>
              <span className="inline-block rounded-full border border-border bg-white/[0.04] px-4 py-1.5 font-mono text-[11px] uppercase tracking-[0.25em] text-muted backdrop-blur-xl">
                For the floor manager
              </span>
              <h2 className="text-gradient mt-6 max-w-2xl font-display text-4xl font-semibold tracking-tight md:text-5xl">
                The whole floor, on one wall.
              </h2>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-muted">
                Campaign progress, agent states, occupancy and drop rate — live.
                Barge in on a call, coach an agent privately, or pause a campaign
                without leaving the screen.
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="mt-12">
                <CampaignDashboard />
              </div>
            </Reveal>
          </div>

          {/* Features */}
          <div className="mt-28">
            <Reveal>
              <span className="inline-block rounded-full border border-border bg-white/[0.04] px-4 py-1.5 font-mono text-[11px] uppercase tracking-[0.25em] text-muted backdrop-blur-xl">
                What&apos;s included
              </span>
              <h2 className="text-gradient mt-6 max-w-2xl font-display text-4xl font-semibold tracking-tight md:text-5xl">
                The parts that decide whether it works.
              </h2>
            </Reveal>

            <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
              {FEATURES.map((f, i) => (
                <Reveal key={f.title} delay={(i % 3) * 0.07}>
                  <div className="flex h-full flex-col rounded-3xl border border-border bg-white/[0.03] p-7 backdrop-blur-xl transition-colors hover:border-accent/30">
                    <h3 className="font-display text-lg font-semibold">
                      {f.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted">
                      {f.text}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Compliance */}
          <Reveal>
            <div className="mt-28 rounded-3xl border border-border bg-white/[0.03] p-8 backdrop-blur-xl md:p-12">
              <h2 className="text-gradient font-display text-3xl font-semibold tracking-tight md:text-4xl">
                Built so you can defend it.
              </h2>
              <div className="mt-8 grid gap-8 md:grid-cols-3">
                {[
                  [
                    "Drop rate ceiling",
                    "You set the maximum abandoned-call rate. The engine slows itself to stay under it rather than chasing throughput past your limit.",
                  ],
                  [
                    "Consent and DNC records",
                    "Every number carries its consent source and DNC status, checked at dial time and logged with the call.",
                  ],
                  [
                    "Full audit trail",
                    "Who dialled, when, from which caller ID, what was said, and what changed in the CRM — exportable for any review.",
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

          {/* Demo CTA */}
          <div id="demo" className="mt-28 scroll-mt-28">
            <Reveal>
              <div className="relative overflow-hidden rounded-3xl border border-accent/25 bg-gradient-to-br from-accent/[0.1] via-transparent to-accent-2/[0.06] p-8 backdrop-blur-xl md:p-14">
                <h2 className="text-gradient max-w-2xl font-display text-4xl font-semibold tracking-tight md:text-5xl">
                  See it dial your list.
                </h2>
                <p className="mt-4 max-w-xl text-base leading-relaxed text-muted">
                  Book a walkthrough and we&apos;ll run a live campaign against
                  a sample of your own data, on your numbers, so you can see the
                  connect rate before you commit to anything.
                </p>
                <DemoRequestForm />
              </div>
            </Reveal>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
