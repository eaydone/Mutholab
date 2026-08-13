"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

const inputClass =
  "w-full rounded-2xl border border-border bg-black/30 px-5 py-3.5 text-sm text-foreground placeholder:text-muted/60 backdrop-blur-xl outline-none transition-colors focus:border-accent/50";

const TEAM_SIZES = ["1–5 agents", "6–20 agents", "21–50 agents", "50+ agents"];

export default function DemoRequestForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">(
    "idle"
  );
  const [message, setMessage] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "sending") return;

    const form = new FormData(e.currentTarget);
    const payload = {
      product: "wepro-dial",
      name: String(form.get("name") ?? "").trim(),
      email: String(form.get("email") ?? "").trim().toLowerCase(),
      company: String(form.get("company") ?? "").trim(),
      phone: String(form.get("phone") ?? "").trim(),
      team_size: String(form.get("team_size") ?? "").trim(),
      message: String(form.get("message") ?? "").trim(),
    };

    if (!payload.name || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(payload.email)) {
      setMessage("Please enter your name and a valid email address.");
      setStatus("error");
      return;
    }

    setStatus("sending");
    setMessage("");

    const { error } = await supabase.from("demo_requests").insert(payload);

    if (error) {
      setMessage("Something went wrong — please try again or email us.");
      setStatus("error");
      return;
    }

    setStatus("done");
  }

  if (status === "done") {
    return (
      <div className="mt-8 rounded-3xl border border-accent/30 bg-accent/[0.07] p-8 backdrop-blur-xl">
        <h3 className="font-display text-2xl font-semibold">
          Request received ✓
        </h3>
        <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted">
          We&apos;ll be in touch to schedule your walkthrough — usually within
          one business day.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="mt-8 flex max-w-3xl flex-col gap-4">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <input name="name" required placeholder="Full name *" maxLength={120} className={inputClass} />
        <input name="email" type="email" required placeholder="Work email *" maxLength={200} className={inputClass} />
        <input name="company" placeholder="Company" maxLength={160} className={inputClass} />
        <input name="phone" placeholder="Phone / WhatsApp" maxLength={40} className={inputClass} />
      </div>

      <select name="team_size" defaultValue="" className={inputClass}>
        <option value="" disabled>
          How many agents will use it?
        </option>
        {TEAM_SIZES.map((size) => (
          <option key={size} value={size}>
            {size}
          </option>
        ))}
      </select>

      <textarea
        name="message"
        rows={4}
        maxLength={2000}
        placeholder="What are you dialling for — sales, collections, support?"
        className={inputClass}
      />

      {status === "error" && <p className="text-sm text-red-400">{message}</p>}

      <button
        type="submit"
        disabled={status === "sending"}
        className="mt-1 self-start rounded-full bg-gradient-to-r from-accent to-accent-2 px-8 py-3.5 text-sm font-semibold text-accent-foreground shadow-[0_0_36px_-8px_rgba(198,255,58,0.5)] transition-transform hover:scale-105 disabled:opacity-60 disabled:hover:scale-100"
      >
        {status === "sending" ? "Sending…" : "Book a walkthrough"}
      </button>
    </form>
  );
}
