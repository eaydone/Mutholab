"use client";

import { useEffect, useState } from "react";
import type { Session } from "@supabase/supabase-js";
import { supabase } from "@/lib/supabase";
import JobsPanel from "@/components/admin/JobsPanel";
import ApplicationsPanel from "@/components/admin/ApplicationsPanel";
import SubscribersPanel from "@/components/admin/SubscribersPanel";

const inputClass =
  "w-full rounded-2xl border border-border bg-white/[0.03] px-5 py-3.5 text-sm text-foreground placeholder:text-muted/60 backdrop-blur-xl outline-none transition-colors focus:border-accent/50";

export default function AdminPage() {
  const [session, setSession] = useState<Session | null>(null);
  const [checking, setChecking] = useState(true);
  const [tab, setTab] = useState<"jobs" | "applications" | "subscribers">(
    "jobs"
  );
  const [error, setError] = useState("");
  const [signingIn, setSigningIn] = useState(false);

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      setSession(data.session);
      setChecking(false);
    });
    const { data: sub } = supabase.auth.onAuthStateChange((_e, s) => {
      setSession(s);
    });
    return () => sub.subscription.unsubscribe();
  }, []);

  async function handleLogin(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSigningIn(true);
    setError("");
    const form = new FormData(e.currentTarget);
    const { error } = await supabase.auth.signInWithPassword({
      email: String(form.get("email") ?? ""),
      password: String(form.get("password") ?? ""),
    });
    if (error) setError(error.message);
    setSigningIn(false);
  }

  if (checking) {
    return (
      <main className="grid min-h-screen place-items-center">
        <p className="text-muted">Loading…</p>
      </main>
    );
  }

  if (!session) {
    return (
      <main className="grid min-h-screen place-items-center px-6">
        <form
          onSubmit={handleLogin}
          className="w-full max-w-sm rounded-3xl border border-border bg-white/[0.03] p-8 backdrop-blur-xl"
        >
          <h1 className="font-display text-2xl font-semibold">
            Mutholab<span className="text-accent">.</span> Admin
          </h1>
          <p className="mt-2 text-sm text-muted">Sign in to manage careers.</p>

          <div className="mt-6 flex flex-col gap-3">
            <input
              name="email"
              type="email"
              required
              placeholder="Email"
              className={inputClass}
            />
            <input
              name="password"
              type="password"
              required
              placeholder="Password"
              className={inputClass}
            />
          </div>

          {error && <p className="mt-3 text-sm text-red-400">{error}</p>}

          <button
            type="submit"
            disabled={signingIn}
            className="mt-6 w-full rounded-full bg-gradient-to-r from-accent to-accent-2 px-6 py-3 text-sm font-semibold text-accent-foreground disabled:opacity-60"
          >
            {signingIn ? "Signing in…" : "Sign in"}
          </button>
        </form>
      </main>
    );
  }

  return (
    <main className="min-h-screen px-6 py-10 md:px-10">
      <div className="mx-auto max-w-6xl">
        <header className="flex flex-wrap items-center justify-between gap-4">
          <h1 className="font-display text-2xl font-semibold">
            Mutholab<span className="text-accent">.</span> Admin
          </h1>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setTab("jobs")}
              className={`rounded-full px-5 py-2.5 text-sm transition-colors ${
                tab === "jobs"
                  ? "bg-gradient-to-r from-accent to-accent-2 font-semibold text-accent-foreground"
                  : "border border-border text-muted hover:text-foreground"
              }`}
            >
              Jobs
            </button>
            <button
              onClick={() => setTab("applications")}
              className={`rounded-full px-5 py-2.5 text-sm transition-colors ${
                tab === "applications"
                  ? "bg-gradient-to-r from-accent to-accent-2 font-semibold text-accent-foreground"
                  : "border border-border text-muted hover:text-foreground"
              }`}
            >
              Applications
            </button>
            <button
              onClick={() => setTab("subscribers")}
              className={`rounded-full px-5 py-2.5 text-sm transition-colors ${
                tab === "subscribers"
                  ? "bg-gradient-to-r from-accent to-accent-2 font-semibold text-accent-foreground"
                  : "border border-border text-muted hover:text-foreground"
              }`}
            >
              Subscribers
            </button>
            <button
              onClick={() => supabase.auth.signOut()}
              className="rounded-full border border-border px-5 py-2.5 text-sm text-muted transition-colors hover:text-foreground"
            >
              Sign out
            </button>
          </div>
        </header>

        <div className="mt-10">
          {tab === "jobs" && <JobsPanel />}
          {tab === "applications" && <ApplicationsPanel />}
          {tab === "subscribers" && <SubscribersPanel />}
        </div>
      </div>
    </main>
  );
}
