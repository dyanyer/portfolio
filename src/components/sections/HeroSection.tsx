import { ArrowRight, Code2, FileDown, Mail, Sparkles } from "lucide-react";
import { motion, useReducedMotion, type Variants } from "framer-motion";

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
  "left-3 top-12 rotate-[-3deg] bg-[var(--sky-soft)]",
  "right-4 top-28 rotate-[3deg] bg-[var(--gold-soft)]",
  "left-5 bottom-32 rotate-[2deg] bg-[var(--matcha-soft)]",
  "right-7 bottom-12 rotate-[-3deg] bg-[var(--accent-soft)]",
];

function FloatingChips() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div aria-hidden="true" className="absolute inset-0 z-20 hidden sm:block">
      {heroCards.slice(0, 4).map((label, index) => (
        <motion.div
          animate={
            shouldReduceMotion
              ? undefined
              : { y: [0, index % 2 === 0 ? -8 : 8, 0] }
          }
          className={cx(
            "mini-ticket absolute px-3 py-2 text-xs font-bold text-[var(--muted-strong)] backdrop-blur",
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
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      className="relative mx-auto w-full max-w-[28rem] sm:max-w-[33rem] lg:max-w-[36rem]"
      initial={{ opacity: 0, y: 34, scale: 0.98 }}
      transition={{ delay: 0.16, duration: 0.72, ease: [0.16, 1, 0.3, 1] }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
    >
      <div className="paper-sunburst absolute -inset-14 opacity-60" />
      <div className="speech-bubble absolute left-0 top-6 z-30 max-w-[14rem] p-3 text-sm font-bold leading-6 text-[var(--text-strong)] sm:left-3">
        Let&apos;s make the workflow easier to use.
      </div>

      <div className="relative min-h-[33rem] overflow-visible sm:min-h-[38rem]">
        <FloatingChips />

        <motion.div
          animate={shouldReduceMotion ? undefined : { y: [0, -9, 0], rotate: [0, -1, 0.7, 0] }}
          className="absolute inset-x-0 bottom-14 z-10 mx-auto h-[29rem] w-[22rem] sm:h-[35rem] sm:w-[26rem]"
          transition={{ duration: 6.2, ease: "easeInOut", repeat: Infinity }}
        >
          <Mascot className="h-full w-full" pose="waving" />
        </motion.div>

        <div className="manga-panel absolute bottom-0 left-1/2 z-0 h-40 w-[94%] -translate-x-1/2 overflow-hidden p-4">
          <div className="absolute right-6 top-6 grid size-14 place-items-center rounded-full border-2 border-[color:var(--line)] bg-[var(--gold-soft)] text-[var(--accent-strong)]">
            <Sparkles aria-hidden="true" className="size-6" />
          </div>
          <div className="absolute bottom-5 left-4 right-4 grid grid-cols-3 gap-2">
            {[
              ["Systems", "HR + Payroll"],
              ["Stack", "React + Laravel"],
              ["Style", "Clear + cute"],
            ].map(([label, value]) => (
              <div className="stationery-card p-3" key={label}>
                <p className="text-[0.62rem] font-bold uppercase tracking-[0.14em] text-[var(--muted)]">
                  {label}
                </p>
                <p className="mt-1 truncate text-xs font-extrabold text-[var(--text-strong)]">
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
      className="relative min-h-[100svh] overflow-hidden px-4 pb-20 pt-28 sm:pt-32"
      id="home"
    >
      <div aria-hidden="true" className="hero-grid absolute inset-0 opacity-75" />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-12 lg:min-h-[calc(100svh-9rem)] lg:grid-cols-[0.95fr_1.05fr] xl:gap-16">
        <motion.div
          animate="show"
          className="max-w-3xl"
          initial="hidden"
          variants={container}
        >
          <motion.div variants={item}>
            <Badge tone="accent">Practical systems, polished UI, friendly handoff</Badge>
          </motion.div>

          <motion.p
            className="mt-8 text-sm font-bold uppercase tracking-[0.18em] text-[var(--muted)]"
            variants={item}
          >
            {personalInfo.name} / {personalInfo.role}
          </motion.p>

          <motion.h1
            className="font-display mt-5 text-balance text-4xl font-extrabold leading-[1.03] text-[var(--text-strong)] sm:text-5xl md:text-6xl lg:text-[4.85rem]"
            variants={item}
          >
            I build practical web systems with personality.
          </motion.h1>

          <motion.p
            className="mt-6 max-w-2xl text-base leading-8 text-[var(--muted-strong)] sm:text-lg sm:leading-9 md:text-xl"
            variants={item}
          >
            I&apos;m John Rey, a full-stack developer who turns messy business
            requests into clear workflows, dependable backend logic, and
            interfaces people can actually use.
          </motion.p>

          <motion.div
            className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center"
            variants={item}
          >
            <AnchorButton href="#work" size="lg">
              View Projects
              <ArrowRight aria-hidden="true" className="size-4" />
            </AnchorButton>
            <AnchorButton href="#contact" size="lg" variant="secondary">
              Contact Me
              <Mail aria-hidden="true" className="size-4" />
            </AnchorButton>
            <AnchorButton download href={personalInfo.resume} size="lg" variant="outline">
              Download CV
              <FileDown aria-hidden="true" className="size-4" />
            </AnchorButton>
          </motion.div>

          <motion.div
            className="mt-10 grid gap-4 text-sm leading-6 text-[var(--muted)] sm:grid-cols-3"
            variants={item}
          >
            <p>
              <span className="mb-2 flex size-9 items-center justify-center rounded-full border border-[color:var(--border-strong)] bg-[var(--sky-soft)] text-[var(--text-strong)]">
                <Code2 aria-hidden="true" className="size-4" />
              </span>
              <span className="block font-bold text-[var(--text-strong)]">
                Business Systems
              </span>
              HR, payroll, SaaS, reports
            </p>
            <p>
              <span className="mb-2 block h-2 w-14 rounded-full washi-strip" />
              <span className="block font-bold text-[var(--text-strong)]">
                Product Interfaces
              </span>
              Dashboards, portals, landing pages
            </p>
            <p>
              <span className="mb-2 inline-flex rounded-full border border-[color:var(--accent-border)] bg-[var(--accent-soft)] px-2 py-1 text-[0.68rem] font-extrabold uppercase tracking-[0.12em] text-[var(--accent-strong)]">
                Ready
              </span>
              <span className="block font-bold text-[var(--text-strong)]">
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
