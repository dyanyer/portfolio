import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

import { Mascot } from "@/components/mascot/Mascot";
import { AnchorButton } from "@/components/ui/button";
import { contactLinks } from "@/data/portfolio";

export function ContactSection() {
  return (
    <section className="section-shell" id="contact">
      <motion.div
        className="ink-panel relative mx-auto max-w-7xl overflow-hidden rounded-lg p-5 md:p-10"
        initial={{ opacity: 0, y: 28 }}
        transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
        viewport={{ once: true, margin: "-120px" }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        <div className="kumiko-grid absolute inset-0 opacity-30" />
        <div className="relative grid gap-8 lg:grid-cols-[1fr_0.42fr] lg:items-end">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-8 bg-[var(--accent)]" aria-hidden="true" />
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--accent-strong)]">
                Contact
              </p>
            </div>
            <h2 className="max-w-4xl text-balance text-4xl font-semibold leading-tight md:text-6xl">
              Let&apos;s build something useful.
            </h2>
            <p className="mt-5 max-w-3xl text-base leading-8 text-[color-mix(in_srgb,var(--cream)_78%,transparent)] md:text-lg">
              Whether you need a business system, feature implementation,
              dashboard, or polished landing page, I can help plan and build a
              solution that fits the real need.
            </p>

            <div className="mt-7 grid gap-3 sm:grid-cols-3">
              {contactLinks.map((link, index) => {
                const Icon = link.icon;

                return (
                  <AnchorButton
                    className="justify-between"
                    href={link.href}
                    key={link.label}
                    rel="noreferrer"
                    size="lg"
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    variant={index === 0 ? "primary" : "secondary"}
                  >
                    <span className="flex items-center gap-2">
                      <Icon aria-hidden="true" className="size-4" />
                      {link.label}
                    </span>
                    <ArrowUpRight aria-hidden="true" className="size-4" />
                  </AnchorButton>
                );
              })}
            </div>
          </div>

          <div className="relative min-h-72 overflow-hidden rounded-lg bg-[rgb(255_244_223_/_0.06)]">
            <motion.div
              animate={{ y: [0, -8, 0] }}
              className="absolute inset-x-0 bottom-0 mx-auto h-80 w-64"
              transition={{ duration: 6, ease: "easeInOut", repeat: Infinity }}
            >
              <Mascot className="h-full w-full" pose="pointing" />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
