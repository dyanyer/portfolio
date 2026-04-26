import { ArrowUp } from "lucide-react";
import { motion } from "framer-motion";

import { Mascot } from "@/components/mascot/Mascot";
import { personalInfo, systemsBuilt } from "@/data/portfolio";

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-dashed border-[color:var(--border-strong)] bg-[var(--surface-muted)] px-4 py-10 pb-24 lg:pb-10">
      <div className="absolute inset-0 opacity-60 subtle-grid" />
      <div className="relative mx-auto max-w-7xl">
        <div className="overflow-hidden border-b border-dashed border-[color:var(--border-strong)] pb-8">
          <div className="marquee-track flex w-max gap-6 text-sm font-semibold uppercase tracking-[0.16em] text-[var(--muted)]">
            {[...systemsBuilt, ...systemsBuilt].map((item, index) => (
              <span className="mini-ticket whitespace-nowrap px-3 py-1.5" key={`${item}-${index}`}>
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-6 pt-8 md:flex-row md:items-end md:justify-between">
          <div className="flex items-center gap-4">
            <div className="grid size-16 shrink-0 place-items-center overflow-hidden rounded-full border-2 border-[color:var(--line)] bg-[var(--cream)] shadow-[3px_4px_0_color-mix(in_srgb,var(--line)_10%,transparent)]">
              <Mascot
                className="size-20 translate-y-1 scale-125"
                decorative
                pose="calm"
              />
            </div>
            <div>
              <p className="font-display text-xl font-extrabold text-[var(--text-strong)]">
                {personalInfo.name}
              </p>
              <p className="mt-2 text-sm text-[var(--muted)]">
                {personalInfo.role} / Chibi Developer Studio
              </p>
              <p className="mt-4 text-sm text-[var(--muted)]">
                &copy; 2026 {personalInfo.name}. All rights reserved.
              </p>
            </div>
          </div>

          <motion.button
            className="inline-flex h-11 w-fit cursor-pointer items-center gap-2 rounded-full border-2 border-[color:var(--line)] bg-[var(--surface)] px-4 text-sm font-bold text-[var(--text)] shadow-[3px_4px_0_color-mix(in_srgb,var(--line)_10%,transparent)] transition duration-200 hover:-translate-y-1 hover:bg-[var(--accent-soft)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)]"
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
