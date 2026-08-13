"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

type DemoRequest = {
  id: string;
  product: string;
  name: string;
  email: string;
  company: string;
  phone: string;
  team_size: string;
  message: string;
  created_at: string;
};

export default function DemoRequestsPanel() {
  const [rows, setRows] = useState<DemoRequest[]>([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    supabase
      .from("demo_requests")
      .select("*")
      .order("created_at", { ascending: false })
      .then(({ data }) => {
        setRows((data as DemoRequest[]) ?? []);
        setLoaded(true);
      });
  }, []);

  async function remove(row: DemoRequest) {
    if (!confirm(`Delete demo request from ${row.name}?`)) return;
    await supabase.from("demo_requests").delete().eq("id", row.id);
    const { data } = await supabase
      .from("demo_requests")
      .select("*")
      .order("created_at", { ascending: false });
    setRows((data as DemoRequest[]) ?? []);
  }

  return (
    <div className="flex flex-col gap-3">
      {loaded && rows.length === 0 && (
        <p className="text-sm text-muted">No demo requests yet.</p>
      )}

      {rows.map((row) => (
        <div
          key={row.id}
          className="rounded-3xl border border-border bg-white/[0.03] p-6 backdrop-blur-xl"
        >
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex flex-wrap items-center gap-3">
              <h3 className="font-display text-lg font-semibold">{row.name}</h3>
              <span className="rounded-full border border-accent/30 bg-accent/[0.08] px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-accent">
                {row.product}
              </span>
              {row.team_size && (
                <span className="rounded-full border border-border px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-muted">
                  {row.team_size}
                </span>
              )}
            </div>
            <span className="font-mono text-xs text-muted">
              {new Date(row.created_at).toLocaleString()}
            </span>
          </div>

          <div className="mt-3 flex flex-wrap gap-x-6 gap-y-1 text-sm">
            <a
              href={`mailto:${row.email}`}
              className="text-foreground underline decoration-white/20 underline-offset-4 hover:decoration-accent"
            >
              {row.email}
            </a>
            {row.company && <span className="text-muted">{row.company}</span>}
            {row.phone && <span className="text-muted">{row.phone}</span>}
          </div>

          {row.message && (
            <p className="mt-3 whitespace-pre-wrap text-sm leading-relaxed text-muted">
              {row.message}
            </p>
          )}

          <button
            onClick={() => remove(row)}
            className="mt-4 rounded-full border border-red-400/30 px-4 py-2 text-xs text-red-400 hover:bg-red-400/10"
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}
