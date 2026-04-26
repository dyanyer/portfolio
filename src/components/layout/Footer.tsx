import { ArrowUp } from "lucide-react";
import { motion } from "framer-motion";

import { personalInfo, systemsBuilt } from "@/data/portfolio";

export function Footer() {
  return (
    <footer className="relative border-t border-[color:var(--border)] bg-[var(--surface-muted)] px-4 py-10">
      <div className="mx-auto max-w-7xl">
        <div className="overflow-hidden border-b border-[color:var(--border)] pb-8">
          <div className="marquee-track flex w-max gap-6 text-sm font-semibold uppercase tracking-[0.16em] text-[var(--muted)]">
            {[...systemsBuilt, ...systemsBuilt].map((item, index) => (
              <span className="whitespace-nowrap" key={`${item}-${index}`}>
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-6 pt-8 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xl font-semibold text-[var(--text-strong)]">
              {personalInfo.name}
            </p>
            <p className="mt-2 text-sm text-[var(--muted)]">{personalInfo.role}</p>
            <p className="mt-4 text-sm text-[var(--muted)]">
              &copy; 2026 {personalInfo.name}. All rights reserved.
            </p>
          </div>

          <motion.button
            className="inline-flex h-11 w-fit cursor-pointer items-center gap-2 rounded-full border border-[color:var(--border)] bg-[var(--surface)] px-4 text-sm font-semibold text-[var(--text)] shadow-[var(--shadow-soft)] transition-colors duration-200 hover:border-[color:var(--accent-border)] hover:bg-[var(--accent-soft)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)]"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            type="button"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.97 }}
          >
            <ArrowUp aria-hidden="true" className="size-4" />
            Back to top
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
