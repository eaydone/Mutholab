"use client";

import { useCallback, useEffect, useState } from "react";
import { supabase, type Application } from "@/lib/supabase";

export default function ApplicationsPanel() {
  const [apps, setApps] = useState<Application[]>([]);
  const [loaded, setLoaded] = useState(false);

  const load = useCallback(async () => {
    const { data } = await supabase
      .from("applications")
      .select("*")
      .order("created_at", { ascending: false });
    setApps(data ?? []);
    setLoaded(true);
  }, []);

  useEffect(() => {
    supabase
      .from("applications")
      .select("*")
      .order("created_at", { ascending: false })
      .then(({ data }) => {
        setApps(data ?? []);
        setLoaded(true);
      });
  }, []);

  async function remove(app: Application) {
    if (!confirm(`Delete application from ${app.name}?`)) return;
    await supabase.from("applications").delete().eq("id", app.id);
    await load();
  }

  return (
    <div className="flex flex-col gap-3">
      {loaded && apps.length === 0 && (
        <p className="text-sm text-muted">No applications yet.</p>
      )}

      {apps.map((app) => (
        <div
          key={app.id}
          className="rounded-3xl border border-border bg-white/[0.03] p-6 backdrop-blur-xl"
        >
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex flex-wrap items-center gap-3">
              <h3 className="font-display text-lg font-semibold">{app.name}</h3>
              <span className="rounded-full border border-accent/30 bg-accent/[0.08] px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-accent">
                {app.job_title || "Unknown role"}
              </span>
            </div>
            <span className="font-mono text-xs text-muted">
              {new Date(app.created_at).toLocaleString()}
            </span>
          </div>

          <div className="mt-3 flex flex-wrap gap-x-6 gap-y-1 text-sm">
            <a
              href={`mailto:${app.email}`}
              className="text-foreground underline decoration-white/20 underline-offset-4 hover:decoration-accent"
            >
              {app.email}
            </a>
            {app.phone && <span className="text-muted">{app.phone}</span>}
            {app.portfolio && (
              <a
                href={app.portfolio}
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground underline decoration-white/20 underline-offset-4 hover:decoration-accent"
              >
                Portfolio ↗
              </a>
            )}
          </div>

          {app.message && (
            <p className="mt-3 whitespace-pre-wrap text-sm leading-relaxed text-muted">
              {app.message}
            </p>
          )}

          <button
            onClick={() => remove(app)}
            className="mt-4 rounded-full border border-red-400/30 px-4 py-2 text-xs text-red-400 hover:bg-red-400/10"
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}
