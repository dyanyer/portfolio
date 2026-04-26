import { motion, useInView } from "framer-motion";
import { useRef } from "react";

import { SectionHeading } from "@/components/ui/section-heading";
import { skills, type Skill } from "@/data/portfolio";

function SkillCard({ skill, index }: { skill: Skill; index: number }) {
  const ref = useRef<HTMLElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-120px" });

  return (
    <motion.article
      className="cel-card relative min-h-[25rem] overflow-hidden p-6 transition duration-300 hover:-translate-y-1.5 hover:border-[color:var(--sakura)] hover:shadow-[8px_8px_0_var(--sakura)]"
      initial={{ opacity: 0, y: 30 }}
      ref={ref}
      transition={{
        delay: index * 0.07,
        duration: 0.58,
        ease: [0.22, 1, 0.36, 1],
      }}
      viewport={{ once: true, margin: "-100px" }}
      whileInView={{ opacity: 1, y: 0 }}
    >
      <span className="font-display pointer-events-none absolute -right-3 -top-5 text-[10rem] font-black text-[var(--parchment)] opacity-[0.05]">
        {skill.kanjiWatermark}
      </span>
      <div className="relative z-10">
        <p className="font-mono text-sm text-[var(--gold)]">六つの道</p>
        <h3 className="font-display mt-4 text-3xl font-black text-[var(--parchment)]">
          {skill.category}
        </h3>
        <p className="font-body mt-2 text-sm text-[var(--gold)]">
          {skill.categoryJa}
        </p>

        <div className="mt-8 grid gap-5">
          {skill.items.map((item, itemIndex) => {
            const value = Math.max(58, skill.proficiency - itemIndex * 4);

            return (
              <div key={item}>
                <div className="flex items-center justify-between gap-4">
                  <span className="font-mono text-sm text-[var(--parchment)]">
                    {item}
                  </span>
                  <span className="font-mono text-xs text-[var(--ink-faded)]">
                    {value}%
                  </span>
                </div>
                <div className="mt-2 h-0.5 bg-[var(--border)]">
                  <motion.div
                    animate={inView ? { width: `${value}%` } : undefined}
                    className="h-full bg-[var(--sakura)]"
                    initial={{ width: 0 }}
                    transition={{
                      delay: itemIndex * 0.1,
                      duration: 1,
                      ease: "easeOut",
                    }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <svg
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-20 w-full opacity-[0.08]"
        preserveAspectRatio="none"
        viewBox="0 0 320 80"
      >
        <defs>
          <pattern height="28" id={`waves-${skill.category}`} patternUnits="userSpaceOnUse" width="56">
            <path
              d="M0 28a28 28 0 0 1 56 0M14 28a14 14 0 0 1 28 0"
              fill="none"
              stroke="var(--parchment)"
              strokeWidth="2"
            />
          </pattern>
        </defs>
        <rect fill={`url(#waves-${skill.category})`} height="80" width="320" />
      </svg>
    </motion.article>
  );
}

export function SkillsSection() {
  return (
    <section className="section-shell" id="skills">
      <p className="vertical-label font-mono absolute left-3 top-28 hidden text-xs text-[var(--ink-faded)] md:block">
        道場・第三章
      </p>
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          chapter="第三章"
          titleEn="What I Train In"
          titleJa="道場"
        />

        <div className="mb-8 flex items-center gap-4">
          <span className="h-px flex-1 bg-[var(--border)]" />
          <p className="font-display text-2xl font-black text-[var(--gold)]">
            六つの道
          </p>
          <span className="h-px flex-1 bg-[var(--border)]" />
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {skills.map((skill, index) => (
            <SkillCard index={index} key={skill.category} skill={skill} />
          ))}
        </div>
      </div>
    </section>
  );
}
