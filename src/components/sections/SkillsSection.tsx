import { motion } from "framer-motion";

import { Mascot } from "@/components/mascot/Mascot";
import { SectionHeading } from "@/components/ui/section-heading";
import { skillCategories } from "@/data/portfolio";

export function SkillsSection() {
  return (
    <section className="section-shell" id="skills">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Skills"
          title="Capabilities grouped by what I can deliver."
          description="Tools only matter when they ship outcomes. These groups connect the stack to interfaces, systems, maintenance, and collaboration."
        />

        <div className="grid gap-5 lg:grid-cols-[0.32fr_0.68fr] lg:items-start">
          <motion.div
            className="ink-panel relative overflow-hidden rounded-lg p-5 lg:sticky lg:top-28"
            initial={{ opacity: 0, y: 22 }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true, margin: "-100px" }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--accent-strong)]">
              Stack energy
            </p>
            <p className="mt-3 text-2xl font-semibold leading-tight">
              Friendly brand, serious delivery.
            </p>
            <div className="relative mt-5 h-64 overflow-hidden rounded-lg bg-[rgb(255_244_223_/_0.06)]">
              <motion.div
                animate={{ y: [0, -8, 0] }}
                className="absolute inset-x-0 bottom-0 mx-auto h-64 w-52"
                transition={{ duration: 5.8, ease: "easeInOut", repeat: Infinity }}
              >
                <Mascot className="h-full w-full" pose="celebrate" />
              </motion.div>
            </div>
          </motion.div>

          <div className="grid gap-4 md:grid-cols-2">
            {skillCategories.map((category, index) => {
              const Icon = category.icon;

              return (
                <motion.div
                  className="studio-panel group rounded-lg p-5 transition duration-200 hover:-translate-y-1 hover:border-[color:var(--accent-border)] hover:shadow-[var(--shadow-strong)]"
                  initial={{ opacity: 0, y: 22 }}
                  key={category.title}
                  transition={{
                    delay: index * 0.06,
                    duration: 0.55,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  viewport={{ once: true, margin: "-100px" }}
                  whileInView={{ opacity: 1, y: 0 }}
                >
                  <div className="flex items-center justify-between gap-4">
                    <span className="grid size-12 place-items-center rounded-lg border border-[color:var(--accent-border)] bg-[var(--accent-soft)] text-[var(--accent-strong)]">
                      <Icon aria-hidden="true" className="size-5" />
                    </span>
                    <span className="text-sm font-semibold text-[var(--muted)]">
                      {category.score}
                    </span>
                  </div>

                  <h3 className="mt-6 text-xl font-semibold text-[var(--text-strong)]">
                    {category.title}
                  </h3>
                  <p className="mt-3 min-h-16 text-sm leading-7 text-[var(--muted)]">
                    {category.description}
                  </p>

                  <div className="mt-5 h-2 rounded-full bg-[var(--border)]">
                    <motion.div
                      className="h-full rounded-full bg-[var(--accent)]"
                      initial={{ width: 0 }}
                      transition={{ delay: 0.25 + index * 0.08, duration: 0.75 }}
                      viewport={{ once: true }}
                      whileInView={{ width: category.score }}
                    />
                  </div>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        className="rounded-full border border-[color:var(--border)] bg-[var(--surface-muted)] px-3 py-1.5 text-xs font-semibold text-[var(--muted-strong)] transition-colors duration-200 group-hover:border-[color:var(--accent-border)]"
                        key={skill}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
