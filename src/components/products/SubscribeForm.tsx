"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

export default function SubscribeForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">(
    "idle"
  );
  const [message, setMessage] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "sending") return;

    const form = new FormData(e.currentTarget);
    const email = String(form.get("email") ?? "").trim().toLowerCase();

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setMessage("Please enter a valid email address.");
      setStatus("error");
      return;
    }

    setStatus("sending");
    setMessage("");

    const { error } = await supabase
      .from("subscribers")
      .insert({ email, source: "ceo-magazine" });

    if (error) {
      // 23505 = unique violation: already subscribed
      if (error.code === "23505") {
        setMessage("You're already on the list — see you Sunday.");
        setStatus("done");
        return;
      }
      setMessage("Something went wrong — please try again.");
      setStatus("error");
      return;
    }

    setMessage("You're in. The Weekly Brief lands at launch.");
    setStatus("done");
  }

  if (status === "done") {
    return (
      <div className="mt-8 inline-flex items-center gap-3 rounded-full border border-accent/40 bg-accent/[0.1] px-6 py-3.5">
        <span className="h-2 w-2 rounded-full bg-accent" />
        <span className="text-sm font-medium">{message}</span>
      </div>
    );
  }

  return (
    <div className="mt-8 max-w-lg">
      <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:flex-row">
        <input
          name="email"
          type="email"
          required
          placeholder="you@company.com"
          maxLength={200}
          className="w-full flex-1 rounded-full border border-border bg-black/30 px-6 py-3.5 text-sm text-foreground placeholder:text-muted/60 backdrop-blur-xl outline-none transition-colors focus:border-accent/50"
        />
        <button
          type="submit"
          disabled={status === "sending"}
          className="shrink-0 rounded-full bg-gradient-to-r from-accent to-accent-2 px-8 py-3.5 text-sm font-semibold text-accent-foreground shadow-[0_0_36px_-8px_rgba(198,255,58,0.5)] transition-transform hover:scale-105 disabled:opacity-60 disabled:hover:scale-100"
        >
          {status === "sending" ? "Joining…" : "Join the list"}
        </button>
      </form>
      {status === "error" && (
        <p className="mt-3 text-sm text-red-400">{message}</p>
      )}
    </div>
  );
}
