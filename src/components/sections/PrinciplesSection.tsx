import { motion } from "framer-motion";

import { operatingPrinciples } from "@/data/portfolio";

export function PrinciplesSection() {
  return (
    <section className="section-shell" id="principles">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[0.38fr_0.62fr] lg:items-start">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true, margin: "-100px" }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-8 bg-[var(--accent)]" aria-hidden="true" />
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--accent-strong)]">
                Principles
              </p>
            </div>
            <h2 className="text-balance text-3xl font-semibold leading-tight text-[var(--text-strong)] md:text-5xl">
              My operating principles
            </h2>
            <p className="mt-5 max-w-md text-base leading-8 text-[var(--muted)]">
              These are the filters I use when decisions get messy: keep the
              system useful, explainable, and easier to maintain over time.
            </p>
          </motion.div>

          <div className="grid gap-3">
            {operatingPrinciples.map((principle, index) => (
              <motion.div
                className="group grid gap-4 rounded-[1.5rem] border border-[color:var(--border)] bg-[var(--surface)] p-5 shadow-[var(--shadow-soft)] transition duration-200 hover:-translate-y-1 hover:border-[color:var(--accent-border)] sm:grid-cols-[4.5rem_1fr]"
                initial={{ opacity: 0, y: 18 }}
                key={principle}
                transition={{
                  delay: index * 0.05,
                  duration: 0.55,
                  ease: [0.16, 1, 0.3, 1],
                }}
                viewport={{ once: true, margin: "-100px" }}
                whileInView={{ opacity: 1, y: 0 }}
              >
                <p className="font-mono text-3xl font-semibold text-[color-mix(in_srgb,var(--accent-strong)_80%,transparent)]">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <p className="text-2xl font-semibold leading-tight text-[var(--text-strong)] md:text-3xl">
                  {principle}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
