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
          description="A practical workflow for turning a rough request into data structures, backend behavior, interface states, and something useful enough to hand off."
        />

        <div className="grid gap-10 lg:grid-cols-[0.34fr_0.66fr] lg:items-start">
          <motion.div
            className="bento-card relative overflow-hidden p-6 lg:sticky lg:top-28"
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true, margin: "-100px" }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <div className="relative">
              <div className="flex items-center justify-between gap-4">
                <p className="stamp-label">Project flow</p>
                <div className="mascot-badge size-16 bg-[var(--sky-soft)]">
                  <Mascot className="size-20 translate-y-2 scale-125" decorative pose="walking" />
                </div>
              </div>
              <p className="font-display mt-6 text-2xl font-extrabold leading-tight text-[var(--text-strong)]">
                Reduce ambiguity before it becomes technical debt.
              </p>
              <p className="mt-4 text-sm leading-7 text-[var(--muted)]">
                The work starts by making rules visible. From there, the
                interface, database, and backend behavior can support the actual
                workflow.
              </p>
              <div className="mt-6 grid gap-3">
                {["Scope", "Build", "Verify"].map((label, index) => (
                  <div
                    className="flex items-center gap-3 rounded-lg border border-[color:var(--border)] bg-[var(--surface)] p-3"
                    key={label}
                  >
                    <span className="grid size-7 place-items-center rounded-full bg-[var(--matcha-soft)] text-xs font-extrabold text-[var(--muted-strong)]">
                      {index + 1}
                    </span>
                    <span className="text-sm font-bold text-[var(--text-strong)]">
                      {label}
                    </span>
                  </div>
                ))}
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

            <div className="grid gap-5">
              {processSteps.map((step, index) => {
                const Icon = step.icon;

                return (
                  <motion.div
                    className="bento-card relative p-6 transition duration-200 hover:-translate-y-0.5 hover:border-[color:var(--accent-border)] md:grid md:grid-cols-[5rem_1fr] md:gap-6"
                    initial={{ opacity: 0, x: 24 }}
                    key={step.step}
                    transition={{
                      delay: index * 0.06,
                      duration: 0.55,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    viewport={{ once: true, margin: "-100px" }}
                    whileInView={{ opacity: 1, x: 0 }}
                  >
                    <span className="absolute -left-[2.05rem] top-6 grid size-9 place-items-center rounded-full border-2 border-[color:var(--line)] bg-[var(--surface-strong)] text-[var(--accent-strong)] shadow-[2px_3px_0_color-mix(in_srgb,var(--line)_10%,transparent)] md:-left-[2.45rem]">
                      <Icon aria-hidden="true" className="size-4" />
                    </span>
                    <p className="font-mono text-sm font-extrabold text-[var(--accent-strong)]">
                      {step.step}
                    </p>
                    <div>
                      <h3 className="font-display mt-3 text-xl font-extrabold text-[var(--text-strong)] md:mt-0">
                        {step.title}
                      </h3>
                      <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
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
