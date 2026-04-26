import { ArrowRight, Mail, Sparkles } from "lucide-react";
import { motion, type Variants } from "framer-motion";

import { Mascot } from "@/components/mascot/Mascot";
import { Badge } from "@/components/ui/badge";
import { AnchorButton } from "@/components/ui/button";
import { heroCards, personalInfo } from "@/data/portfolio";
import { cx } from "@/lib/utils";

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

const floatingPositions = [
  "left-2 top-5",
  "right-2 top-16",
  "left-0 bottom-24",
  "right-3 bottom-8",
  "left-1/2 top-0 -translate-x-1/2",
];

function FloatingChips() {
  return (
    <div aria-hidden="true" className="absolute inset-0 z-20">
      {heroCards.map((label, index) => (
        <motion.div
          animate={{ y: [0, index % 2 === 0 ? -8 : 8, 0] }}
          className={cx(
            "absolute hidden rounded-full border border-[color:var(--accent-border)] bg-[color-mix(in_srgb,var(--surface)_88%,transparent)] px-3 py-2 text-xs font-semibold text-[var(--muted-strong)] shadow-[var(--shadow-soft)] backdrop-blur sm:block",
            floatingPositions[index],
          )}
          initial={{ opacity: 0, scale: 0.9 }}
          key={label}
          transition={{
            opacity: { delay: 0.45 + index * 0.06, duration: 0.35 },
            scale: { delay: 0.45 + index * 0.06, duration: 0.35 },
            y: {
              delay: index * 0.18,
              duration: 4.8 + index * 0.25,
              ease: "easeInOut",
              repeat: Infinity,
            },
          }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          {label}
        </motion.div>
      ))}
    </div>
  );
}

function HeroMascotStudio() {
  return (
    <motion.div
      className="relative mx-auto w-full max-w-[26rem] sm:max-w-[31rem] lg:max-w-[34rem]"
      initial={{ opacity: 0, y: 34, scale: 0.98 }}
      transition={{ delay: 0.16, duration: 0.72, ease: [0.16, 1, 0.3, 1] }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
    >
      <div className="absolute -inset-5 rounded-[50%] bg-[var(--glow)] blur-3xl" />
      <div className="studio-panel paper-edge relative overflow-hidden rounded-lg p-4 sm:p-5">
        <div className="kumiko-grid absolute inset-0 opacity-60" />
        <div className="relative flex items-center justify-between border-b border-[color:var(--border)] pb-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--accent-strong)]">
              Chibi Developer Studio
            </p>
            <p className="mt-1 text-sm font-semibold text-[var(--text-strong)]">
              Practical systems, polished interfaces
            </p>
          </div>
          <span className="grid size-10 place-items-center rounded-full border border-[color:var(--accent-border)] bg-[var(--accent-soft)] text-[var(--accent-strong)]">
            <Sparkles aria-hidden="true" className="size-4" />
          </span>
        </div>

        <div className="relative min-h-[25rem] overflow-hidden sm:min-h-[31rem]">
          <FloatingChips />
          <motion.div
            animate={{ y: [0, -10, 0] }}
            className="absolute inset-x-0 bottom-0 z-10 mx-auto h-[23rem] w-[18rem] sm:h-[29rem] sm:w-[22rem]"
            transition={{ duration: 6.5, ease: "easeInOut", repeat: Infinity }}
          >
            <Mascot className="h-full w-full" pose="waving" />
          </motion.div>

          <div className="absolute bottom-3 left-3 right-3 z-30 grid grid-cols-3 gap-2">
            {[
              ["Systems", "HR + Payroll"],
              ["Stack", "React + Laravel"],
              ["Focus", "Usable flows"],
            ].map(([label, value]) => (
              <div
                className="rounded-lg border border-[color:var(--border)] bg-[color-mix(in_srgb,var(--surface-strong)_86%,transparent)] p-3 backdrop-blur"
                key={label}
              >
                <p className="text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-[var(--muted)]">
                  {label}
                </p>
                <p className="mt-1 truncate text-xs font-semibold text-[var(--text-strong)]">
                  {value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function HeroSection() {
  return (
    <section
      className="relative min-h-[100svh] overflow-hidden px-4 pb-14 pt-28 sm:pt-32"
      id="home"
    >
      <div aria-hidden="true" className="hero-grid absolute inset-0 opacity-75" />
      <div aria-hidden="true" className="hero-mesh absolute inset-0" />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-10 lg:min-h-[calc(100svh-9rem)] lg:grid-cols-[0.95fr_1.05fr]">
        <motion.div
          animate="show"
          className="max-w-3xl"
          initial="hidden"
          variants={container}
        >
          <motion.div variants={item}>
            <Badge tone="accent">Available for freelance and system development work</Badge>
          </motion.div>

          <motion.p
            className="mt-6 text-sm font-semibold uppercase tracking-[0.18em] text-[var(--muted)]"
            variants={item}
          >
            {personalInfo.name} / {personalInfo.role}
          </motion.p>

          <motion.h1
            className="mt-4 text-balance text-4xl font-semibold leading-[1.05] text-[var(--text-strong)] sm:text-5xl md:text-6xl lg:text-[4.35rem]"
            variants={item}
          >
            I build web systems with clarity, structure, and personality.
          </motion.h1>

          <motion.p
            className="mt-5 max-w-2xl text-base leading-8 text-[var(--muted)] sm:text-lg md:text-xl"
            variants={item}
          >
            I&apos;m John Rey, a full-stack developer focused on practical
            business systems - from HR and payroll workflows to dashboards, SaaS
            portals, QR features, and modern web interfaces.
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
                Business Systems
              </span>
              HR, payroll, SaaS, reports
            </p>
            <p>
              <span className="block font-semibold text-[var(--text-strong)]">
                Product Interfaces
              </span>
              Dashboards, portals, landing pages
            </p>
            <p>
              <span className="block font-semibold text-[var(--text-strong)]">
                Practical Delivery
              </span>
              Clear rules, maintainable code
            </p>
          </motion.div>
        </motion.div>

        <HeroMascotStudio />
      </div>
    </section>
  );
}
