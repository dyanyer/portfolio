import { motion } from "framer-motion";

import { Mascot } from "@/components/mascot/Mascot";
import { SectionHeading } from "@/components/ui/section-heading";
import { aboutHighlights, aboutStats } from "@/data/portfolio";

function AboutMascotPanel() {
  return (
    <motion.div
      className="studio-panel relative overflow-hidden rounded-lg p-5 lg:sticky lg:top-28"
      initial={{ opacity: 0, y: 24 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      viewport={{ once: true, margin: "-100px" }}
      whileInView={{ opacity: 1, y: 0 }}
    >
      <div className="kumiko-grid absolute inset-0 opacity-55" />
      <div className="relative flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--accent-strong)]">
            Thinking through the workflow
          </p>
          <p className="mt-2 text-2xl font-semibold leading-tight text-[var(--text-strong)]">
            Useful software starts before the first component.
          </p>
        </div>
      </div>
      <div className="relative mt-5 min-h-[21rem] overflow-hidden rounded-lg bg-[linear-gradient(180deg,var(--accent-soft),transparent)]">
        <motion.div
          animate={{ y: [0, -8, 0] }}
          className="absolute inset-x-0 bottom-0 mx-auto h-[22rem] w-[18rem]"
          transition={{ duration: 6, ease: "easeInOut", repeat: Infinity }}
        >
          <Mascot className="h-full w-full" pose="thinking" />
        </motion.div>
      </div>
    </motion.div>
  );
}

export function AboutSection() {
  return (
    <section className="section-shell" id="about">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="About"
          title="A developer brand with personality and practical thinking."
          description="I focus on real workflows, clear requirements, maintainable code, and useful interfaces. The goal is to build systems that solve actual business problems while keeping the experience clean and understandable."
        />

        <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
          <div className="grid gap-5">
            <motion.div
              className="ink-panel rounded-lg p-6 md:p-8"
              initial={{ opacity: 0, y: 18 }}
              transition={{ duration: 0.58, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true, margin: "-100px" }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <p className="text-2xl font-semibold leading-snug md:text-3xl">
                I build practical systems for teams that need clean workflows,
                dependable rules, and interfaces that are easy to explain.
              </p>
              <p className="mt-5 text-base leading-8 text-[color-mix(in_srgb,var(--cream)_78%,transparent)]">
                The chibi identity makes the portfolio memorable, but the work
                stays grounded in business logic: HR records, payroll rules,
                tenant portals, QR validation, reports, and dashboards.
              </p>
            </motion.div>

            <div className="grid gap-3 sm:grid-cols-3">
              {aboutStats.map((stat, index) => (
                <motion.div
                  className="studio-panel rounded-lg p-5"
                  initial={{ opacity: 0, y: 16 }}
                  key={stat.label}
                  transition={{ delay: index * 0.06, duration: 0.45 }}
                  viewport={{ once: true, margin: "-80px" }}
                  whileInView={{ opacity: 1, y: 0 }}
                >
                  <p className="text-xl font-semibold text-[var(--text-strong)]">
                    {stat.value}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {aboutHighlights.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    className="studio-panel group rounded-lg p-5 transition duration-200 hover:-translate-y-1 hover:border-[color:var(--accent-border)] hover:shadow-[var(--shadow-soft)]"
                    initial={{ opacity: 0, y: 18 }}
                    key={item.title}
                    transition={{ delay: index * 0.05, duration: 0.5 }}
                    viewport={{ once: true, margin: "-90px" }}
                    whileInView={{ opacity: 1, y: 0 }}
                  >
                    <Icon
                      aria-hidden="true"
                      className="size-5 text-[var(--accent-strong)]"
                    />
                    <h3 className="mt-5 text-base font-semibold text-[var(--text-strong)]">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
                      {item.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>

          <AboutMascotPanel />
        </div>
      </div>
    </section>
  );
}
