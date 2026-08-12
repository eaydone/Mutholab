"use client";

import { useEffect, useState } from "react";
import Reveal from "@/components/Reveal";
import { supabase, type Job } from "@/lib/supabase";

export default function Careers() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    supabase
      .from("jobs")
      .select("*")
      .eq("active", true)
      .order("created_at", { ascending: false })
      .then(({ data }) => {
        setJobs(data ?? []);
        setLoaded(true);
      });
  }, []);

  return (
    <section id="careers" className="relative py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <Reveal className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <span className="inline-block rounded-full border border-border bg-white/[0.04] px-4 py-1.5 font-mono text-[11px] uppercase tracking-[0.25em] text-muted backdrop-blur-xl">
              05 — Careers
            </span>
            <h2 className="text-gradient mt-6 max-w-xl font-display text-4xl font-semibold tracking-tight md:text-6xl">
              Join the studio.
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-muted">
            We&apos;re a small team that ships real products. If you build or
            design with care, we&apos;d like to hear from you.
          </p>
        </Reveal>

        <div className="mt-14 flex flex-col gap-4">
          {loaded && jobs.length === 0 && (
            <Reveal>
              <div className="rounded-3xl border border-border bg-white/[0.03] p-8 text-sm text-muted backdrop-blur-xl">
                No open positions right now — check back soon, or send an open
                application below.
              </div>
            </Reveal>
          )}

          {jobs.map((job, i) => (
            <Reveal key={job.slug} delay={i * 0.07}>
              <a
                href={`/careers/${job.slug}`}
                className="group flex flex-col justify-between gap-6 rounded-3xl border border-border bg-white/[0.03] p-7 backdrop-blur-xl transition-all duration-300 hover:border-accent/40 hover:shadow-[0_0_44px_-14px_rgba(198,255,58,0.3)] md:flex-row md:items-center md:p-8"
              >
                <div className="max-w-2xl">
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="font-display text-2xl font-semibold tracking-tight">
                      {job.title}
                    </h3>
                    <span className="rounded-full border border-accent/30 bg-accent/[0.08] px-3 py-1 font-mono text-[11px] uppercase tracking-[0.15em] text-accent">
                      {job.type}
                    </span>
                    <span className="rounded-full border border-border bg-white/[0.03] px-3 py-1 font-mono text-[11px] uppercase tracking-[0.15em] text-muted">
                      {job.location}
                    </span>
                  </div>

                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {job.summary}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {job.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-border bg-white/[0.03] px-3.5 py-1.5 text-xs text-muted"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <span className="shrink-0 rounded-full border border-border bg-white/[0.04] px-6 py-3 text-center text-sm font-medium backdrop-blur-xl transition-all group-hover:border-accent group-hover:bg-gradient-to-r group-hover:from-accent group-hover:to-accent-2 group-hover:text-accent-foreground">
                  View role →
                </span>
              </a>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <p className="mt-8 text-sm text-muted">
            Don&apos;t see your role?{" "}
            <a
              href="mailto:eaydislamone@gmail.com?subject=Open%20application%20%E2%80%94%20Mutholab"
              className="text-foreground underline decoration-white/20 underline-offset-4 transition-colors hover:decoration-accent"
            >
              Send an open application
            </a>
            .
          </p>
        </Reveal>
      </div>
    </section>
  );
}
