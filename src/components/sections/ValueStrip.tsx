import { motion } from "framer-motion";

import { valuePoints } from "@/data/portfolio";

export function ValueStrip() {
  return (
    <section className="px-4 pb-8" aria-label="Trust points">
      <div className="mx-auto max-w-7xl">
        <div className="-mx-4 flex snap-x gap-3 overflow-x-auto px-4 pb-2 md:mx-0 md:grid md:grid-cols-4 md:overflow-visible md:px-0">
          {valuePoints.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                className="studio-panel min-w-[78vw] snap-start rounded-lg p-5 md:min-w-0"
                initial={{ opacity: 0, y: 18 }}
                key={item.title}
                transition={{
                  delay: index * 0.05,
                  duration: 0.5,
                  ease: [0.16, 1, 0.3, 1],
                }}
                viewport={{ once: true, margin: "-80px" }}
                whileHover={{ y: -4 }}
                whileInView={{ opacity: 1, y: 0 }}
              >
                <span className="grid size-11 place-items-center rounded-lg border border-[color:var(--accent-border)] bg-[var(--accent-soft)] text-[var(--accent-strong)]">
                  <Icon aria-hidden="true" className="size-5" />
                </span>
                <p className="mt-5 text-base font-semibold text-[var(--text-strong)]">
                  {item.title}
                </p>
                <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
