"use client";

import { useCallback, useEffect, useState } from "react";
import { supabase, type Job } from "@/lib/supabase";

const inputClass =
  "w-full rounded-2xl border border-border bg-white/[0.03] px-5 py-3.5 text-sm text-foreground placeholder:text-muted/60 backdrop-blur-xl outline-none transition-colors focus:border-accent/50";

const emptyForm = {
  id: "",
  title: "",
  slug: "",
  type: "Full-time",
  location: "Remote",
  tags: "",
  summary: "",
  details: "",
  active: true,
};

function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export default function JobsPanel() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [form, setForm] = useState(emptyForm);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  const load = useCallback(async () => {
    const { data } = await supabase
      .from("jobs")
      .select("*")
      .order("created_at", { ascending: false });
    setJobs(data ?? []);
  }, []);

  useEffect(() => {
    supabase
      .from("jobs")
      .select("*")
      .order("created_at", { ascending: false })
      .then(({ data }) => setJobs(data ?? []));
  }, []);

  function set<K extends keyof typeof emptyForm>(
    key: K,
    value: (typeof emptyForm)[K]
  ) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  async function save(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSaving(true);
    setError("");

    const payload = {
      title: form.title.trim(),
      slug: form.slug.trim() || slugify(form.title),
      type: form.type,
      location: form.location.trim() || "Remote",
      tags: form.tags
        .split(",")
        .map((t) => t.trim())
        .filter(Boolean),
      summary: form.summary.trim(),
      details: form.details,
      active: form.active,
    };

    const result = form.id
      ? await supabase.from("jobs").update(payload).eq("id", form.id)
      : await supabase.from("jobs").insert(payload);

    if (result.error) {
      setError(result.error.message);
    } else {
      setForm(emptyForm);
      await load();
    }
    setSaving(false);
  }

  async function toggleActive(job: Job) {
    await supabase.from("jobs").update({ active: !job.active }).eq("id", job.id);
    await load();
  }

  async function remove(job: Job) {
    if (!confirm(`Delete "${job.title}"? This cannot be undone.`)) return;
    await supabase.from("jobs").delete().eq("id", job.id);
    await load();
  }

  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
      <form
        onSubmit={save}
        className="h-fit rounded-3xl border border-border bg-white/[0.03] p-7 backdrop-blur-xl"
      >
        <h2 className="font-display text-xl font-semibold">
          {form.id ? "Edit job" : "Post a new job"}
        </h2>

        <div className="mt-5 flex flex-col gap-3">
          <input
            required
            placeholder="Job title *"
            value={form.title}
            onChange={(e) => set("title", e.target.value)}
            className={inputClass}
          />
          <input
            placeholder="URL slug (auto from title if empty)"
            value={form.slug}
            onChange={(e) => set("slug", slugify(e.target.value))}
            className={inputClass}
          />
          <div className="grid grid-cols-2 gap-3">
            <select
              value={form.type}
              onChange={(e) => set("type", e.target.value)}
              className={inputClass}
            >
              <option>Full-time</option>
              <option>Part-time</option>
              <option>Contract</option>
              <option>Internship</option>
            </select>
            <input
              placeholder="Location"
              value={form.location}
              onChange={(e) => set("location", e.target.value)}
              className={inputClass}
            />
          </div>
          <input
            placeholder="Tags, comma separated (React, Node.js)"
            value={form.tags}
            onChange={(e) => set("tags", e.target.value)}
            className={inputClass}
          />
          <textarea
            required
            rows={2}
            placeholder="Short summary shown on the careers list *"
            value={form.summary}
            onChange={(e) => set("summary", e.target.value)}
            className={inputClass}
          />
          <textarea
            rows={10}
            placeholder={
              "Full details. Formatting:\n## Section heading\nParagraph text\n- Bullet point"
            }
            value={form.details}
            onChange={(e) => set("details", e.target.value)}
            className={`${inputClass} font-mono text-xs leading-relaxed`}
          />
          <label className="flex items-center gap-3 text-sm text-muted">
            <input
              type="checkbox"
              checked={form.active}
              onChange={(e) => set("active", e.target.checked)}
              className="h-4 w-4 accent-[#c6ff3a]"
            />
            Visible on the website
          </label>
        </div>

        {error && <p className="mt-3 text-sm text-red-400">{error}</p>}

        <div className="mt-5 flex gap-3">
          <button
            type="submit"
            disabled={saving}
            className="rounded-full bg-gradient-to-r from-accent to-accent-2 px-7 py-3 text-sm font-semibold text-accent-foreground disabled:opacity-60"
          >
            {saving ? "Saving…" : form.id ? "Save changes" : "Publish job"}
          </button>
          {form.id && (
            <button
              type="button"
              onClick={() => setForm(emptyForm)}
              className="rounded-full border border-border px-7 py-3 text-sm text-muted hover:text-foreground"
            >
              Cancel
            </button>
          )}
        </div>
      </form>

      <div className="flex flex-col gap-3">
        {jobs.length === 0 && (
          <p className="text-sm text-muted">No jobs yet — post your first one.</p>
        )}
        {jobs.map((job) => (
          <div
            key={job.id}
            className="rounded-3xl border border-border bg-white/[0.03] p-6 backdrop-blur-xl"
          >
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <h3 className="font-display text-lg font-semibold">
                  {job.title}
                </h3>
                <span
                  className={`rounded-full px-3 py-1 font-mono text-[10px] uppercase tracking-widest ${
                    job.active
                      ? "border border-accent/30 bg-accent/[0.08] text-accent"
                      : "border border-border text-muted"
                  }`}
                >
                  {job.active ? "Live" : "Hidden"}
                </span>
              </div>
              <span className="font-mono text-xs text-muted">
                /careers/{job.slug}
              </span>
            </div>
            <p className="mt-2 line-clamp-2 text-sm text-muted">{job.summary}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              <button
                onClick={() =>
                  setForm({
                    id: job.id,
                    title: job.title,
                    slug: job.slug,
                    type: job.type,
                    location: job.location,
                    tags: job.tags.join(", "),
                    summary: job.summary,
                    details: job.details,
                    active: job.active,
                  })
                }
                className="rounded-full border border-border px-4 py-2 text-xs text-muted hover:text-foreground"
              >
                Edit
              </button>
              <button
                onClick={() => toggleActive(job)}
                className="rounded-full border border-border px-4 py-2 text-xs text-muted hover:text-foreground"
              >
                {job.active ? "Hide" : "Publish"}
              </button>
              <button
                onClick={() => remove(job)}
                className="rounded-full border border-red-400/30 px-4 py-2 text-xs text-red-400 hover:bg-red-400/10"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
