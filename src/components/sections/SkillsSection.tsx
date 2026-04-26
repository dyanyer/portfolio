import { motion } from "framer-motion";

import { SectionHeading } from "@/components/ui/section-heading";
import { skillCategories } from "@/data/portfolio";

export function SkillsSection() {
  return (
    <section className="section-shell" id="skills">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Skills"
          title="Capabilities grouped by what I can deliver."
          description="The portfolio keeps tools connected to outcomes: interfaces, systems, shipping, and team collaboration."
        />

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;

            return (
              <motion.div
                className="group rounded-[1.75rem] border border-[color:var(--border)] bg-[var(--surface)] p-5 shadow-[var(--shadow-soft)] transition duration-200 hover:-translate-y-1 hover:border-[color:var(--accent-border)] hover:shadow-[var(--shadow-strong)]"
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
                  <span className="grid size-12 place-items-center rounded-2xl border border-[color:var(--accent-border)] bg-[var(--accent-soft)] text-[var(--accent-strong)]">
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
    </section>
  );
}
