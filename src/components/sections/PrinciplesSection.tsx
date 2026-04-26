import { motion } from "framer-motion";

import { ValueStrip } from "@/components/sections/ValueStrip";
import { SectionHeading } from "@/components/ui/section-heading";
import { principles } from "@/data/portfolio";

export function PrinciplesSection() {
  return (
    <section className="section-shell" id="principles">
      <p className="vertical-label font-mono absolute left-3 top-28 hidden text-xs text-[var(--ink-faded)] md:block">
        職人・第一章
      </p>
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          chapter="第一章"
          titleEn="The Craftsman"
          titleJa="職人の道"
        />

        <div className="grid gap-10 lg:grid-cols-[0.42fr_0.58fr] lg:items-start">
          <motion.div
            className="relative min-h-[28rem] overflow-hidden rounded-[8px] border-2 border-[color:var(--border)] bg-[var(--bg-surface)] p-8 md:p-10"
            initial={{ opacity: 0, x: -28 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true, margin: "-120px" }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <svg
              aria-hidden="true"
              className="absolute inset-5 h-[calc(100%-2.5rem)] w-[calc(100%-2.5rem)]"
              preserveAspectRatio="none"
              viewBox="0 0 400 320"
            >
              <motion.path
                d="M21 36 C82 12 132 22 196 28 C264 35 323 16 378 42 C360 95 370 149 374 206 C379 265 360 296 304 300 C231 306 154 296 83 304 C38 309 19 277 27 226 C37 162 13 101 21 36Z"
                fill="none"
                initial={{ pathLength: 0 }}
                stroke="var(--sakura)"
                strokeLinecap="round"
                strokeWidth="3"
                transition={{ duration: 1.5, ease: "easeInOut" }}
                viewport={{ once: true }}
                whileInView={{ pathLength: 1 }}
              />
            </svg>
            <div className="relative z-10 flex min-h-[22rem] flex-col justify-center">
              <p className="font-display text-6xl font-black leading-tight text-[var(--parchment)] md:text-7xl">
                道具は
                <br />
                使い手次第
              </p>
              <p className="font-body mt-8 max-w-sm text-lg leading-8 text-[var(--ink-faded)]">
                A tool is only as good as its user.
              </p>
              <div className="washi-strip mt-10 h-3 w-40 rotate-[-2deg]" />
            </div>
          </motion.div>

          <div className="grid gap-5 sm:grid-cols-2">
            {principles.map((principle, index) => (
              <motion.article
                className="stamp-border-card cel-card relative min-h-56 overflow-hidden p-6 transition duration-300 hover:-translate-y-1 hover:border-[color:var(--sakura)] hover:shadow-[8px_8px_0_var(--sakura)]"
                initial={{ opacity: 0, y: 28 }}
                key={principle.kanji}
                transition={{
                  delay: index * 0.08,
                  duration: 0.58,
                  ease: [0.22, 1, 0.36, 1],
                }}
                viewport={{ once: true, margin: "-90px" }}
                whileInView={{ opacity: 1, y: 0 }}
              >
                <span className="font-display pointer-events-none absolute -right-2 top-1 text-8xl font-black text-[var(--parchment)] opacity-[0.06]">
                  {principle.kanji}
                </span>
                <p className="font-display text-4xl font-black text-[var(--sakura)]">
                  {principle.kanji}
                </p>
                <h3 className="font-display mt-5 text-2xl font-black text-[var(--parchment)]">
                  {principle.english}
                </h3>
                <p className="font-body mt-1 text-sm text-[var(--ink-faded)]">
                  {principle.japanese}
                </p>
                <p className="font-body mt-5 line-clamp-3 text-sm leading-7 text-[var(--ink-faded)]">
                  {principle.description}
                </p>
              </motion.article>
            ))}
          </div>
        </div>

        <ValueStrip />
      </div>
    </section>
  );
}
