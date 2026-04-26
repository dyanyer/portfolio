import { ArrowUp, HeartHandshake } from "lucide-react";
import { motion } from "framer-motion";

import { Mascot } from "@/components/mascot/Mascot";
import { personalInfo, systemsBuilt } from "@/data/portfolio";

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-dashed border-[color:var(--border-strong)] bg-[var(--surface-muted)] px-4 py-12 pb-24 lg:pb-12">
      <div className="absolute inset-0 opacity-40 subtle-grid" />
      <div className="relative mx-auto max-w-7xl">
        <div className="mb-10 grid gap-6 md:grid-cols-[1fr_0.38fr] md:items-end">
          <div className="bento-card p-6 md:p-8">
            <div className="flex items-start gap-4">
              <div className="mascot-badge size-16 shrink-0">
                <Mascot
                  className="size-20 translate-y-1 scale-125"
                  decorative
                  pose="calm"
                />
              </div>
              <div>
                <p className="stamp-label">Thank you</p>
                <h2 className="font-display mt-4 text-2xl font-extrabold leading-tight text-[var(--text-strong)] md:text-3xl">
                  Thanks for visiting my little developer workspace.
                </h2>
                <p className="mt-3 max-w-2xl text-sm leading-7 text-[var(--muted)] md:text-base md:leading-8">
                  I care about software that feels clear to use, simple to
                  explain, and reliable enough for real business routines.
                </p>
              </div>
            </div>
          </div>

          <div className="bento-card p-6">
            <HeartHandshake
              aria-hidden="true"
              className="size-6 text-[var(--accent-strong)]"
            />
            <p className="font-display mt-4 text-xl font-extrabold text-[var(--text-strong)]">
              Open to useful web systems and UI work.
            </p>
          </div>
        </div>

        <div className="overflow-hidden border-y border-dashed border-[color:var(--border-strong)] py-6">
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
            <div className="grid size-14 shrink-0 place-items-center rounded-full border-2 border-[color:var(--line)] bg-[var(--cream)] shadow-[3px_4px_0_color-mix(in_srgb,var(--line)_10%,transparent)]">
              <span className="font-display text-lg font-extrabold text-[var(--accent-strong)]">
                JR
              </span>
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
