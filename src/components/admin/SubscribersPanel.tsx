"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

type Subscriber = {
  id: string;
  email: string;
  source: string;
  created_at: string;
};

export default function SubscribersPanel() {
  const [subs, setSubs] = useState<Subscriber[]>([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    supabase
      .from("subscribers")
      .select("*")
      .order("created_at", { ascending: false })
      .then(({ data }) => {
        setSubs((data as Subscriber[]) ?? []);
        setLoaded(true);
      });
  }, []);

  async function remove(sub: Subscriber) {
    if (!confirm(`Remove ${sub.email} from the list?`)) return;
    await supabase.from("subscribers").delete().eq("id", sub.id);
    const { data } = await supabase
      .from("subscribers")
      .select("*")
      .order("created_at", { ascending: false });
    setSubs((data as Subscriber[]) ?? []);
  }

  function copyAll() {
    navigator.clipboard.writeText(subs.map((s) => s.email).join(", "));
  }

  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center justify-between">
        <p className="text-sm text-muted">
          {loaded ? `${subs.length} subscriber${subs.length === 1 ? "" : "s"}` : "Loading…"}
        </p>
        {subs.length > 0 && (
          <button
            onClick={copyAll}
            className="rounded-full border border-border px-5 py-2.5 text-sm text-muted transition-colors hover:text-foreground"
          >
            Copy all emails
          </button>
        )}
      </div>

      {loaded && subs.length === 0 && (
        <p className="text-sm text-muted">No subscribers yet.</p>
      )}

      {subs.map((sub) => (
        <div
          key={sub.id}
          className="flex flex-wrap items-center justify-between gap-3 rounded-3xl border border-border bg-white/[0.03] px-6 py-4 backdrop-blur-xl"
        >
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-sm font-medium">{sub.email}</span>
            <span className="rounded-full border border-border px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-muted">
              {sub.source}
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span className="font-mono text-xs text-muted">
              {new Date(sub.created_at).toLocaleDateString()}
            </span>
            <button
              onClick={() => remove(sub)}
              className="rounded-full border border-red-400/30 px-4 py-1.5 text-xs text-red-400 hover:bg-red-400/10"
            >
              Remove
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
