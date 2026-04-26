import { motion } from "framer-motion";

import { Mascot } from "@/components/mascot/Mascot";
import { SectionHeading } from "@/components/ui/section-heading";
import { processSteps } from "@/data/portfolio";

export function ProcessSection() {
  return (
    <section className="section-shell" id="process">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Process"
          title="How I turn unclear requests into working systems."
          description="A practical workflow for translating business needs into data structures, interface states, backend logic, release steps, and improvement notes."
        />

        <div className="grid gap-8 lg:grid-cols-[0.38fr_0.62fr] lg:items-start">
          <motion.div
            className="studio-panel relative overflow-hidden rounded-lg p-6 lg:sticky lg:top-28"
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true, margin: "-100px" }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <div className="kumiko-grid absolute inset-0 opacity-45" />
            <div className="relative">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--accent-strong)]">
                Project flow
              </p>
              <p className="mt-4 text-2xl font-semibold leading-tight text-[var(--text-strong)]">
                Reduce ambiguity before it becomes technical debt.
              </p>
              <p className="mt-4 text-sm leading-7 text-[var(--muted)]">
                The work starts by making rules visible. From there, the
                interface, database, and backend behavior can support the actual
                workflow.
              </p>
              <div className="mt-5 h-56 overflow-hidden rounded-lg bg-[linear-gradient(180deg,var(--accent-soft),transparent)]">
                <motion.div
                  animate={{ x: [0, 8, 0], y: [0, -6, 0] }}
                  className="mx-auto h-56 w-48"
                  transition={{ duration: 6, ease: "easeInOut", repeat: Infinity }}
                >
                  <Mascot className="h-full w-full" pose="walking" />
                </motion.div>
              </div>
            </div>
          </motion.div>

          <div className="relative pl-5 md:pl-8">
            <div className="absolute bottom-0 left-0 top-0 w-px bg-[var(--border)] md:left-1" />
            <motion.div
              className="absolute left-0 top-0 w-px origin-top bg-[var(--accent)] md:left-1"
              initial={{ scaleY: 0 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true, margin: "-120px" }}
              whileInView={{ scaleY: 1 }}
              style={{ height: "100%" }}
            />

            <div className="grid gap-4">
              {processSteps.map((step, index) => {
                const Icon = step.icon;

                return (
                  <motion.div
                    className="relative rounded-lg border border-[color:var(--border)] bg-[var(--surface)] p-5 shadow-[var(--shadow-soft)] md:grid md:grid-cols-[5rem_1fr] md:gap-5"
                    initial={{ opacity: 0, x: 24 }}
                    key={step.step}
                    transition={{
                      delay: index * 0.06,
                      duration: 0.55,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    viewport={{ once: true, margin: "-100px" }}
                    whileHover={{ x: 4 }}
                    whileInView={{ opacity: 1, x: 0 }}
                  >
                    <span className="absolute -left-[2.05rem] top-6 grid size-9 place-items-center rounded-full border border-[color:var(--accent-border)] bg-[var(--surface-strong)] text-[var(--accent-strong)] shadow-[var(--shadow-soft)] md:-left-[2.45rem]">
                      <Icon aria-hidden="true" className="size-4" />
                    </span>
                    <p className="font-mono text-sm font-semibold text-[var(--accent-strong)]">
                      {step.step}
                    </p>
                    <div>
                      <h3 className="mt-3 text-lg font-semibold text-[var(--text-strong)] md:mt-0">
                        {step.title}
                      </h3>
                      <p className="mt-2 text-sm leading-7 text-[var(--muted)]">
                        {step.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
