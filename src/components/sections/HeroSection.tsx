import { ArrowRight, Mail } from "lucide-react";
import { motion, type Variants } from "framer-motion";
import { lazy, Suspense, useEffect, useState } from "react";

import { Badge } from "@/components/ui/badge";
import { AnchorButton } from "@/components/ui/button";
import { heroCards, personalInfo, visualLegend } from "@/data/portfolio";
import { cx } from "@/lib/utils";

const SystemVisual = lazy(() =>
  import("@/components/three/SystemVisual").then((module) => ({
    default: module.SystemVisual,
  })),
);

const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.58, ease: "easeOut" } },
};

function useLargeScreen() {
  const [isLarge, setIsLarge] = useState(() =>
    typeof window === "undefined" ? false : window.innerWidth >= 1024,
  );

  useEffect(() => {
    const media = window.matchMedia("(min-width: 1024px)");
    const handleChange = () => setIsLarge(media.matches);

    handleChange();
    media.addEventListener("change", handleChange);
    return () => media.removeEventListener("change", handleChange);
  }, []);

  return isLarge;
}

function WorkflowMockup({ showSystemVisual }: { showSystemVisual: boolean }) {
  return (
    <motion.div
      className="relative mx-auto w-full max-w-xl lg:max-w-none"
      initial={{ opacity: 0, y: 30, scale: 0.98 }}
      transition={{ delay: 0.18, duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
    >
      <div className="absolute -inset-6 rounded-[2rem] bg-[var(--glow)] blur-3xl" />
      <div className="glass-panel mockup-tilt relative overflow-hidden rounded-[1.75rem] p-3 sm:p-4 lg:min-h-[560px]">
        <div className="subtle-grid absolute inset-0 opacity-80" />
        <div className="relative rounded-[1.25rem] border border-[color:var(--border)] bg-[var(--surface-strong)] p-3 shadow-[var(--shadow-soft)] sm:p-4">
          <div className="mb-4 flex items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <span className="size-3 rounded-full bg-red-400/80" />
              <span className="size-3 rounded-full bg-amber-400/80" />
              <span className="size-3 rounded-full bg-emerald-400/80" />
            </div>
            <span className="rounded-full border border-[color:var(--border)] bg-[var(--accent-soft)] px-3 py-1 text-xs font-semibold text-[var(--accent-strong)]">
              Operations OS
            </span>
          </div>

          <div className="grid gap-3 sm:grid-cols-[0.9fr_1.1fr]">
            <div className="rounded-2xl border border-[color:var(--border)] bg-[var(--surface-muted)] p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--muted)]">
                Workflow health
              </p>
              <p className="mt-3 text-3xl font-semibold text-[var(--text-strong)]">
                94%
              </p>
              <div className="mt-5 grid gap-2">
                {["Attendance", "Payroll", "Reports"].map((label, index) => (
                  <div className="h-2 overflow-hidden rounded-full bg-[var(--border)]" key={label}>
                    <motion.div
                      className="h-full rounded-full bg-[var(--accent)]"
                      initial={{ width: 0 }}
                      transition={{ delay: 0.35 + index * 0.08, duration: 0.75 }}
                      whileInView={{ width: `${76 - index * 12}%` }}
                      viewport={{ once: true }}
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-3">
              {heroCards.map((card, index) => (
                <motion.div
                  className={cx(
                    "rounded-2xl border border-[color:var(--border)] bg-[var(--surface)] p-3 shadow-sm",
                    index % 2 === 1 && "sm:ml-5",
                  )}
                  key={card}
                  initial={{ opacity: 0, x: 18 }}
                  transition={{ delay: 0.28 + index * 0.08, duration: 0.45 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -3 }}
                >
                  <div className="flex items-center justify-between gap-3">
                    <p className="text-sm font-semibold text-[var(--text-strong)]">
                      {card}
                    </p>
                    <span className="size-2 rounded-full bg-[var(--accent)]" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="mt-3 grid gap-3 sm:grid-cols-3">
            {visualLegend.map((entry) => {
              const Icon = entry.icon;
              return (
                <div
                  className="rounded-2xl border border-[color:var(--border)] bg-[var(--surface)] p-3"
                  key={entry.label}
                >
                  <Icon className="size-4 text-[var(--accent-strong)]" aria-hidden="true" />
                  <p className="mt-2 text-xs font-semibold text-[var(--muted-strong)]">
                    {entry.label}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {showSystemVisual ? (
          <div className="pointer-events-none absolute inset-x-0 bottom-0 top-28 hidden lg:block">
            <Suspense fallback={<div className="h-full w-full" aria-hidden="true" />}>
              <SystemVisual />
            </Suspense>
          </div>
        ) : null}
      </div>
    </motion.div>
  );
}

export function HeroSection() {
  const showSystemVisual = useLargeScreen();

  return (
    <section
      className="relative min-h-[100svh] overflow-hidden px-4 pb-16 pt-28 sm:pt-32"
      id="home"
    >
      <div aria-hidden="true" className="hero-grid absolute inset-0 opacity-80" />
      <div aria-hidden="true" className="hero-mesh absolute inset-0" />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-10 lg:min-h-[calc(100svh-9rem)] lg:grid-cols-[0.95fr_1.05fr]">
        <motion.div
          className="max-w-3xl"
          initial="hidden"
          animate="show"
          variants={container}
        >
          <motion.div variants={item}>
            <Badge tone="green">Available for freelance and system development work</Badge>
          </motion.div>

          <motion.p
            className="mt-6 text-sm font-semibold uppercase tracking-[0.18em] text-[var(--muted)]"
            variants={item}
          >
            {personalInfo.name} / {personalInfo.role}
          </motion.p>

          <motion.h1
            className="mt-4 text-balance text-4xl font-semibold leading-[1.04] text-[var(--text-strong)] sm:text-5xl md:text-6xl lg:text-[4.55rem]"
            variants={item}
          >
            I build web systems that make business operations clearer.
          </motion.h1>

          <motion.p
            className="mt-5 max-w-2xl text-base leading-8 text-[var(--muted)] sm:text-lg md:text-xl"
            variants={item}
          >
            I&apos;m John Rey, a full-stack developer focused on practical systems
            - HR workflows, payroll logic, SaaS portals, dashboards, QR
            features, and reporting tools that help teams work with less
            confusion.
          </motion.p>

          <motion.div
            className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center"
            variants={item}
          >
            <AnchorButton href="#work" size="lg">
              View Work
              <ArrowRight aria-hidden="true" className="size-4" />
            </AnchorButton>
            <AnchorButton href="#contact" size="lg" variant="secondary">
              Contact Me
              <Mail aria-hidden="true" className="size-4" />
            </AnchorButton>
          </motion.div>

          <motion.div
            className="mt-8 grid gap-3 border-y border-[color:var(--border)] py-5 text-sm text-[var(--muted)] sm:grid-cols-3"
            variants={item}
          >
            <p>
              <span className="block font-semibold text-[var(--text-strong)]">
                Systems
              </span>
              HR, payroll, SaaS, reports
            </p>
            <p>
              <span className="block font-semibold text-[var(--text-strong)]">
                Execution
              </span>
              UI, backend, data, deploy
            </p>
            <p>
              <span className="block font-semibold text-[var(--text-strong)]">
                Approach
              </span>
              Clear rules, maintainable flow
            </p>
          </motion.div>
        </motion.div>

        <WorkflowMockup showSystemVisual={showSystemVisual} />
      </div>
    </section>
  );
}
