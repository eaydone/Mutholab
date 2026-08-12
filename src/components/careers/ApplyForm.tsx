"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

const inputClass =
  "w-full rounded-2xl border border-border bg-white/[0.03] px-5 py-3.5 text-sm text-foreground placeholder:text-muted/60 backdrop-blur-xl outline-none transition-colors focus:border-accent/50";

export default function ApplyForm({
  jobSlug,
  jobTitle,
}: {
  jobSlug: string;
  jobTitle: string;
}) {
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">(
    "idle"
  );
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "sending") return;

    const form = new FormData(e.currentTarget);
    const payload = {
      job_slug: jobSlug,
      name: String(form.get("name") ?? "").trim(),
      email: String(form.get("email") ?? "").trim(),
      phone: String(form.get("phone") ?? "").trim(),
      portfolio: String(form.get("portfolio") ?? "").trim(),
      message: String(form.get("message") ?? "").trim(),
    };

    if (!payload.name || !payload.email) {
      setErrorMsg("Please fill in your name and email.");
      setStatus("error");
      return;
    }

    setStatus("sending");
    setErrorMsg("");

    const { data, error } = await supabase.functions.invoke(
      "submit-application",
      { body: payload }
    );

    if (error || !data?.ok) {
      setErrorMsg("Something went wrong — please try again or email us.");
      setStatus("error");
      return;
    }

    setStatus("done");
  }

  if (status === "done") {
    return (
      <div className="mt-8 rounded-3xl border border-accent/30 bg-accent/[0.07] p-8 backdrop-blur-xl">
        <h3 className="font-display text-2xl font-semibold">
          Application received ✓
        </h3>
        <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted">
          Thanks for applying for <span className="text-foreground">{jobTitle}</span>.
          We review every application and will reach out if there&apos;s a fit.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-4">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <input
          name="name"
          required
          placeholder="Full name *"
          className={inputClass}
          maxLength={120}
        />
        <input
          name="email"
          type="email"
          required
          placeholder="Email address *"
          className={inputClass}
          maxLength={200}
        />
        <input
          name="phone"
          placeholder="Phone / WhatsApp"
          className={inputClass}
          maxLength={40}
        />
        <input
          name="portfolio"
          placeholder="Portfolio / GitHub / LinkedIn URL"
          className={inputClass}
          maxLength={300}
        />
      </div>

      <textarea
        name="message"
        rows={5}
        placeholder="Tell us briefly why you're a fit — and link your best work."
        className={inputClass}
        maxLength={2000}
      />

      {status === "error" && (
        <p className="text-sm text-red-400">{errorMsg}</p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="mt-2 self-start rounded-full bg-gradient-to-r from-accent to-accent-2 px-8 py-3.5 text-sm font-semibold text-accent-foreground shadow-[0_0_36px_-8px_rgba(198,255,58,0.5)] transition-transform hover:scale-105 disabled:opacity-60 disabled:hover:scale-100"
      >
        {status === "sending" ? "Sending…" : "Submit application"}
      </button>
    </form>
  );
}
