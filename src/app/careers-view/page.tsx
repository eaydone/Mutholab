"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ApplyForm from "@/components/careers/ApplyForm";
import { supabase, type Job } from "@/lib/supabase";

function DetailsBlock({ details }: { details: string }) {
  const lines = details.split("\n");
  const blocks: React.ReactNode[] = [];
  let list: string[] = [];

  const flushList = (key: string) => {
    if (list.length === 0) return;
    blocks.push(
      <ul key={key} className="mt-4 space-y-2.5">
        {list.map((item, i) => (
          <li key={i} className="flex items-start gap-3 text-muted">
            <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
            {item}
          </li>
        ))}
      </ul>
    );
    list = [];
  };

  lines.forEach((raw, i) => {
    const line = raw.trim();
    if (line.startsWith("- ")) {
      list.push(line.slice(2));
      return;
    }
    flushList(`list-${i}`);
    if (line.startsWith("## ")) {
      blocks.push(
        <h2
          key={i}
          className="mt-10 font-display text-2xl font-semibold tracking-tight text-foreground"
        >
          {line.slice(3)}
        </h2>
      );
    } else if (line.length > 0) {
      blocks.push(
        <p key={i} className="mt-4 leading-relaxed text-muted">
          {line}
        </p>
      );
    }
  });
  flushList("list-end");

  return <div>{blocks}</div>;
}

export default function JobPage() {
  const [job, setJob] = useState<Job | null>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Served at /careers/<slug> via rewrite — the slug lives in the URL path.
    // Falls back to ?slug= for direct access to /careers-view.
    const fromPath = window.location.pathname.match(/\/careers\/([^/]+)\/?$/);
    const fromQuery = new URLSearchParams(window.location.search).get("slug");
    const slug = decodeURIComponent(fromPath?.[1] ?? fromQuery ?? "");
    // An empty slug simply matches no rows and renders the not-found state.
    supabase
      .from("jobs")
      .select("*")
      .eq("slug", slug)
      .eq("active", true)
      .maybeSingle()
      .then(({ data }) => {
        setJob(data ?? null);
        setLoaded(true);
      });
  }, []);

  return (
    <div className="flex flex-1 flex-col">
      <Navbar />
      <main className="flex-1 pt-36 pb-24">
        <div className="mx-auto max-w-4xl px-6 md:px-10">
          <Link
            href="/#careers"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-white/[0.04] px-4 py-2 text-sm text-muted backdrop-blur-xl transition-colors hover:border-white/25 hover:text-foreground"
          >
            ← All openings
          </Link>

          {!loaded && (
            <p className="mt-16 text-muted">Loading role…</p>
          )}

          {loaded && !job && (
            <div className="mt-16">
              <h1 className="text-gradient font-display text-4xl font-semibold tracking-tight md:text-5xl">
                Role not found.
              </h1>
              <p className="mt-4 text-muted">
                This opening may have been filled or taken down.
              </p>
            </div>
          )}

          {job && (
            <>
              <div className="mt-10">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full border border-accent/30 bg-accent/[0.08] px-3 py-1 font-mono text-[11px] uppercase tracking-[0.15em] text-accent">
                    {job.type}
                  </span>
                  <span className="rounded-full border border-border bg-white/[0.03] px-3 py-1 font-mono text-[11px] uppercase tracking-[0.15em] text-muted">
                    {job.location}
                  </span>
                </div>

                <h1 className="text-gradient mt-6 font-display text-5xl font-semibold leading-[1.05] tracking-tight md:text-6xl">
                  {job.title}
                </h1>

                <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
                  {job.summary}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
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

              <div className="mt-6 border-t border-border pt-4">
                <DetailsBlock details={job.details} />
              </div>

              <div id="apply" className="mt-16">
                <h2 className="text-gradient font-display text-3xl font-semibold tracking-tight md:text-4xl">
                  Apply for this role
                </h2>
                <ApplyForm jobSlug={job.slug} jobTitle={job.title} />
              </div>
            </>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
