import { ArrowDown, ArrowRight, Download, Send } from "lucide-react";
import { motion, type Variants } from "framer-motion";

import { SystemVisual } from "@/components/three/SystemVisual";
import { Badge } from "@/components/ui/badge";
import { AnchorButton } from "@/components/ui/button";
import { MagneticLink } from "@/components/ui/magnetic-link";
import { developer, stats } from "@/data/portfolio";
import { cn } from "@/lib/utils";

const headingWords = ["I", "build", "systems", "that", "work."];

const wordVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.22 + index * 0.09,
      duration: 0.68,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

const petalStyles = [
  "left-[7%] top-[19%] rotate-[-18deg]",
  "left-[42%] top-[11%] rotate-[20deg]",
  "right-[12%] top-[24%] rotate-[8deg]",
  "left-[18%] bottom-[17%] rotate-[36deg]",
  "right-[26%] bottom-[13%] rotate-[-28deg]",
];

function SakuraPetal({
  className,
  delay,
  duration,
}: {
  className: string;
  delay: number;
  duration: number;
}) {
  return (
    <motion.svg
      aria-hidden="true"
      animate={{ y: [0, -16, 0], rotate: [0, 8, -3, 0] }}
      className={cn("absolute size-6 opacity-55", className)}
      fill="none"
      transition={{ delay, duration, ease: "easeInOut", repeat: Infinity }}
      viewBox="0 0 32 32"
    >
      <path
        d="M15.7 3.2C23.9 8.5 25 16 16 28.8 6.9 16.1 7.5 8.6 15.7 3.2Z"
        fill="var(--sakura)"
        opacity="0.72"
      />
      <path
        d="M15.8 5.5c1.4 5.6 1.2 11.8.1 20.1"
        stroke="var(--parchment)"
        strokeLinecap="round"
        strokeOpacity="0.24"
      />
    </motion.svg>
  );
}

function StatCard({
  value,
  label,
  labelJa,
  index,
}: {
  value: string;
  label: string;
  labelJa: string;
  index: number;
}) {
  const positions = [
    "left-0 top-12 rotate-[-4deg]",
    "right-2 top-36 rotate-[3deg]",
    "bottom-10 left-16 rotate-[-2deg]",
  ];

  return (
    <motion.div
      className={cn(
        "cel-card absolute z-20 w-36 p-4 text-center",
        positions[index],
      )}
      initial={{ opacity: 0, y: 24, rotate: 0 }}
      transition={{ delay: 0.75 + index * 0.12, duration: 0.55 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <p className="font-display text-4xl font-black text-[var(--parchment)]">
        {value}
      </p>
      <p className="font-body mt-1 text-xs font-bold text-[var(--ink-faded)]">
        {label}
      </p>
      <p className="font-mono mt-2 text-sm text-[var(--gold)]">{labelJa}</p>
    </motion.div>
  );
}

export function HeroSection() {
  return (
    <section
      className="relative min-h-[100svh] overflow-hidden px-4 pb-16 pt-28 md:pt-32"
      id="home"
    >
      <div aria-hidden="true" className="dot-grid absolute inset-0 opacity-70" />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-24 h-px bg-[linear-gradient(90deg,transparent,var(--sakura),var(--gold),transparent)] opacity-70"
      />
      <p className="vertical-label font-mono absolute left-3 top-32 hidden text-xs text-[var(--ink-faded)] md:block">
        零章・導入
      </p>

      {petalStyles.map((className, index) => (
        <SakuraPetal
          className={className}
          delay={index * 0.45}
          duration={8 + index * 1.4}
          key={className}
        />
      ))}

      <div className="relative z-10 mx-auto grid min-h-[calc(100svh-8rem)] w-full max-w-7xl items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]">
        <div>
          <motion.div
            className="mb-7 inline-flex items-center gap-3 rounded-full border border-[color:var(--border)] bg-[color-mix(in_srgb,var(--bg-surface)_82%,transparent)] px-4 py-2 backdrop-blur-xl"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="relative flex size-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--vermillion)] opacity-75" />
              <span className="relative inline-flex size-2.5 rounded-full bg-[var(--vermillion)]" />
            </span>
            <span className="font-mono text-sm text-[var(--parchment)]">
              Available for Projects
            </span>
          </motion.div>

          <motion.p
            className="font-mono text-sm text-[var(--vermillion)]"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08, duration: 0.5 }}
          >
            第零章 — Introduction
          </motion.p>

          <h1 className="font-display mt-5 max-w-5xl text-balance text-5xl font-black leading-[0.96] text-[var(--parchment)] sm:text-6xl lg:text-8xl">
            <span className="block">
              {headingWords.slice(0, 3).map((word, index) => (
                <motion.span
                  className="mr-[0.18em] inline-block"
                  custom={index}
                  initial="hidden"
                  key={word}
                  variants={wordVariants}
                  animate="visible"
                >
                  {word}
                </motion.span>
              ))}
            </span>
            <span className="block">
              {headingWords.slice(3).map((word, index) => {
                const absoluteIndex = index + 3;
                const isAccent = word === "work.";

                return (
                  <motion.span
                    className={cn(
                      "relative mr-[0.18em] inline-block",
                      isAccent && "text-[var(--sakura)]",
                    )}
                    custom={absoluteIndex}
                    initial="hidden"
                    key={word}
                    variants={wordVariants}
                    animate="visible"
                  >
                    {word}
                    {isAccent ? (
                      <motion.span
                        className="absolute -bottom-2 left-0 h-2 w-full rounded-full bg-[var(--sakura)]"
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ delay: 0.9, duration: 0.55, ease: "easeOut" }}
                        style={{ transformOrigin: "left" }}
                      />
                    ) : null}
                  </motion.span>
                );
              })}
            </span>
          </h1>

          <motion.p
            className="font-body mt-8 max-w-2xl text-lg leading-8 text-[var(--ink-faded)] md:text-xl md:leading-9"
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.76, duration: 0.6 }}
          >
            {developer.tagline} Full-stack architecture, expressive interfaces,
            and deployable systems with clean operational logic.
          </motion.p>
          <motion.p
            className="font-body mt-4 text-base text-[color-mix(in_srgb,var(--vermillion)_76%,var(--parchment))]"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.85, duration: 0.55 }}
          >
            {developer.taglineJa}
          </motion.p>

          <motion.div
            className="mt-9 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.95, duration: 0.55 }}
          >
            <AnchorButton href="#work" size="lg">
              View My Work
              <ArrowRight aria-hidden="true" className="size-5" />
            </AnchorButton>
            <AnchorButton download href={developer.resume} size="lg" variant="ghost">
              Download CV
              <Download aria-hidden="true" className="size-5" />
            </AnchorButton>
            <MagneticLink href="#contact" size="lg">
              or send a message <Send aria-hidden="true" className="size-4" />
            </MagneticLink>
          </motion.div>
        </div>

        <div className="relative hidden min-h-[36rem] items-center justify-center md:flex">
          <Badge className="absolute right-6 top-4 z-20" variant="chapter">
            SYSTEM MAP
          </Badge>
          <SystemVisual />
          {stats.map((stat, index) => (
            <StatCard
              index={index}
              key={stat.label}
              label={stat.label}
              labelJa={stat.labelJa}
              value={stat.value}
            />
          ))}
        </div>
      </div>

      <motion.a
        aria-label="Scroll to principles"
        animate={{ y: [0, 9, 0] }}
        className="font-display absolute bottom-6 left-1/2 z-20 grid size-12 -translate-x-1/2 place-items-center rounded-full border border-[color:var(--border)] bg-[var(--bg-card)] text-2xl text-[var(--gold)]"
        href="#principles"
        transition={{ duration: 1.6, ease: "easeInOut", repeat: Infinity }}
      >
        下
        <ArrowDown aria-hidden="true" className="absolute -bottom-5 size-4 text-[var(--ink-faded)]" />
      </motion.a>
    </section>
  );
}
