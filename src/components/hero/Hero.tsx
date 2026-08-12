"use client";

import { useRef } from "react";
import dynamic from "next/dynamic";
import { motion, useScroll, useTransform } from "framer-motion";
import { stats } from "@/data/projects";

const Scene = dynamic(() => import("./Scene"), {
  ssr: false,
  loading: () => null,
});

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const item = {
  hidden: { opacity: 0, y: 34 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 140]);
  const opacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

  return (
    <section
      ref={ref}
      id="top"
      className="relative flex min-h-screen w-full flex-col justify-center overflow-hidden pt-28 pb-24"
    >
      <div
        className="orb h-[420px] w-[420px] opacity-25"
        style={{ background: "#8b5cf6", top: "-8%", left: "-6%" }}
      />
      <div
        className="orb h-[380px] w-[380px] opacity-15"
        style={{ background: "#22d3ee", bottom: "0%", right: "-4%" }}
      />

      <div className="absolute inset-0 z-0">
        <Scene />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-background to-transparent" />
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        style={{ y, opacity }}
        className="relative z-10 mx-auto w-full max-w-7xl px-6 md:px-10"
      >
        <motion.div variants={item}>
          <span className="inline-flex items-center gap-2.5 rounded-full border border-border bg-white/[0.04] px-4 py-2 font-mono text-[11px] uppercase tracking-[0.25em] text-muted backdrop-blur-xl">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            Now onboarding new clients — 2026
          </span>
        </motion.div>

        <motion.h1
          variants={item}
          className="mt-8 font-display text-[16.5vw] font-semibold leading-[0.9] tracking-tight sm:text-[13vw] md:text-[7.6rem]"
        >
          <span className="text-gradient block">Build.</span>
          <span className="text-gradient block">Ship.</span>
          <span className="text-gradient-accent block">Scale.</span>
        </motion.h1>

        <motion.div
          variants={item}
          className="mt-10 flex flex-col justify-between gap-10 md:flex-row md:items-end"
        >
          <p className="max-w-xl text-lg leading-relaxed text-muted md:text-xl">
            <span className="text-foreground">Mutholab</span> is a product
            studio that designs, builds, and ships SaaS products end to end
            — CRMs, e-commerce platforms, diagnostic tools, automation
            systems — from idea to production.
          </p>

          <div className="flex shrink-0 items-center gap-3">
            <a
              href="#work"
              className="rounded-full bg-gradient-to-r from-accent to-accent-2 px-7 py-3.5 text-sm font-semibold text-accent-foreground shadow-[0_0_36px_-8px_rgba(198,255,58,0.55)] transition-transform hover:scale-105"
            >
              View work
            </a>
            <a
              href="#contact"
              className="rounded-full border border-border bg-white/[0.04] px-7 py-3.5 text-sm font-medium text-foreground backdrop-blur-xl transition-colors hover:border-white/25"
            >
              Get in touch
            </a>
          </div>
        </motion.div>

        <motion.div
          variants={item}
          className="mt-16 flex flex-wrap gap-x-14 gap-y-6 border-t border-border pt-8"
        >
          {stats.map((s) => (
            <div key={s.label}>
              <div className="font-display text-3xl font-semibold text-foreground md:text-4xl">
                {s.value}
              </div>
              <div className="mt-1 text-sm text-muted">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 1 }}
        className="absolute bottom-7 left-1/2 z-10 -translate-x-1/2"
      >
        <div className="flex h-10 w-6 items-start justify-center rounded-full border border-white/20 p-1.5">
          <motion.span
            animate={{ y: [0, 12, 0], opacity: [1, 0.2, 1] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="h-2 w-1 rounded-full bg-white/60"
          />
        </div>
      </motion.div>
    </section>
  );
}
