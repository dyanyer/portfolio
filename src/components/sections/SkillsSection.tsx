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

        <div className="grid gap-5 lg:grid-cols-[0.3fr_0.7fr] lg:items-start">
          <motion.div
            className="ink-panel night-cafe-glow relative overflow-hidden p-5 lg:sticky lg:top-28"
            initial={{ opacity: 0, y: 22 }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true, margin: "-100px" }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <p className="stamp-label">
              Stack energy
            </p>
            <p className="font-display mt-5 text-2xl font-extrabold leading-tight">
              Friendly brand, serious delivery.
            </p>
            <p className="mt-4 text-sm leading-7 text-[color-mix(in_srgb,var(--cream)_76%,transparent)]">
              I group skills by the kind of system they help deliver, not by a
              long tool list.
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

          <div className="grid auto-rows-fr gap-4 md:grid-cols-2 xl:grid-cols-3">
            {skillCategories.map((category, index) => {
              const Icon = category.icon;

              return (
                <motion.div
                  className={[
                    "stationery-card group p-5 transition duration-200 hover:-translate-y-1",
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

                  <h3 className="font-display mt-6 text-xl font-extrabold text-[var(--text-strong)]">
                    {category.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
                    {category.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        className="mini-ticket px-3 py-1.5 text-xs font-bold text-[var(--muted-strong)] transition duration-200 group-hover:-translate-y-0.5 group-hover:border-[color:var(--accent-border)]"
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
