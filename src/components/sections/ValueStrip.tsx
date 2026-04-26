import { motion } from "framer-motion";

import { valuePoints } from "@/data/portfolio";

export function ValueStrip() {
  return (
    <section className="px-4 pb-12 md:pb-16" aria-label="Trust points">
      <div className="mx-auto max-w-7xl">
        <div className="-mx-4 flex snap-x gap-4 overflow-x-auto px-4 pb-3 md:mx-0 md:grid md:grid-cols-4 md:overflow-visible md:px-0">
          {valuePoints.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                className="bento-card group min-w-[78vw] snap-start p-6 transition duration-200 hover:-translate-y-1 hover:border-[color:var(--accent-border)] md:min-w-0"
                initial={{ opacity: 0, y: 18 }}
                key={item.title}
                transition={{
                  delay: index * 0.05,
                  duration: 0.5,
                  ease: [0.16, 1, 0.3, 1],
                }}
                viewport={{ once: true, margin: "-80px" }}
                whileInView={{ opacity: 1, y: 0 }}
              >
                <span className="grid size-11 place-items-center rounded-lg border-2 border-[color:var(--line)] bg-[var(--surface-strong)] text-[var(--accent-strong)] shadow-[2px_3px_0_color-mix(in_srgb,var(--line)_10%,transparent)] transition duration-200 group-hover:-rotate-3">
                  <Icon aria-hidden="true" className="size-5" />
                </span>
                <p className="font-display mt-6 text-lg font-extrabold leading-tight text-[var(--text-strong)]">
                  {item.title}
                </p>
                <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
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
