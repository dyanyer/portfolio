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
          description="Tools only matter when they ship outcomes. These bento boxes connect the stack to the kind of work I can take from request to working feature."
        />

        <div className="grid gap-8 lg:grid-cols-[0.28fr_0.72fr] lg:items-start">
          <motion.div
            className="bento-card relative overflow-hidden p-6 lg:sticky lg:top-28"
            initial={{ opacity: 0, y: 22 }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true, margin: "-100px" }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <div className="flex items-center justify-between gap-4">
              <p className="stamp-label">Stack energy</p>
              <div className="mascot-badge size-16 bg-[var(--gold-soft)]">
                <Mascot className="size-20 translate-y-2 scale-125" decorative pose="happy" />
              </div>
            </div>
            <p className="font-display mt-6 text-2xl font-extrabold leading-tight text-[var(--text-strong)]">
              Friendly brand, serious delivery.
            </p>
            <p className="mt-4 text-sm leading-7 text-[var(--muted)]">
              I group skills by the kind of system they help deliver, not by a
              long tool list.
            </p>
            <div className="mt-6 grid gap-3">
              {["Plan", "Build", "Explain"].map((label) => (
                <span className="tag-chip w-full justify-between" key={label}>
                  {label}
                  <span className="size-2 rounded-full bg-[var(--matcha)]" />
                </span>
              ))}
            </div>
          </motion.div>

          <div className="grid auto-rows-fr gap-5 md:grid-cols-2 xl:grid-cols-3">
            {skillCategories.map((category, index) => {
              const Icon = category.icon;

              return (
                <motion.div
                  className={[
                    "bento-card group p-6 transition duration-200 hover:-translate-y-1 hover:border-[color:var(--accent-border)]",
                    index === 0 ? "md:col-span-2 xl:col-span-2" : "",
                    index === 3 ? "xl:col-span-2" : "",
                  ].join(" ")}
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
                    <span className="grid size-12 place-items-center rounded-lg border-2 border-[color:var(--line)] bg-[var(--surface-strong)] text-[var(--accent-strong)] shadow-[2px_3px_0_color-mix(in_srgb,var(--line)_10%,transparent)] transition duration-200 group-hover:-rotate-3">
                      <Icon aria-hidden="true" className="size-5" />
                    </span>
                    <span className="stamp-label rotate-[1deg]">
                      {category.score}
                    </span>
                  </div>

                  <h3 className="font-display mt-7 text-xl font-extrabold text-[var(--text-strong)]">
                    {category.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-[var(--muted)] md:min-h-16">
                    {category.description}
                  </p>

                  <div className="mt-7 flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        className="tag-chip transition duration-200 group-hover:-translate-y-0.5 group-hover:border-[color:var(--accent-border)]"
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
