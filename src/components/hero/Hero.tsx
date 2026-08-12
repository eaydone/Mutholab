"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";

const Scene = dynamic(() => import("./Scene"), {
  ssr: false,
  loading: () => null,
});

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.09, delayChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const } },
};

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen w-full flex-col justify-end overflow-hidden pb-20 pt-32 md:pb-28"
    >
      <div className="absolute inset-0 z-0">
        <Scene />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 mx-auto w-full max-w-7xl px-6 md:px-10"
      >
        <motion.p
          variants={item}
          className="mb-6 flex items-center gap-2 font-mono text-xs uppercase tracking-[0.3em] text-muted"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          Available for select projects — 2026
        </motion.p>

        <motion.h1
          variants={item}
          className="font-display text-[13vw] font-semibold leading-[0.92] tracking-tight md:text-[6.4vw]"
        >
          Build
          <span className="text-outline"> — </span>
          Ship
          <span className="text-outline"> — </span>
          <span className="text-accent">Scale</span>
        </motion.h1>

        <motion.div
          variants={item}
          className="mt-10 flex flex-col justify-between gap-8 md:flex-row md:items-end"
        >
          <p className="max-w-xl text-lg leading-relaxed text-muted md:text-xl">
            I&apos;m <span className="text-foreground">Eyad Islam</span>, a
            full-stack developer who designs, builds, and ships SaaS products
            end to end — CRMs, e-commerce platforms, diagnostic tools,
            automation systems — solo, from idea to production.
          </p>

          <div className="flex shrink-0 gap-3">
            <a
              href="#work"
              className="rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-foreground transition-transform hover:scale-105"
            >
              View work
            </a>
            <a
              href="#contact"
              className="rounded-full border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:border-muted"
            >
              Get in touch
            </a>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
