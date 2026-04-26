import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

import { Mascot } from "@/components/mascot/Mascot";
import { AnchorButton } from "@/components/ui/button";
import { contactLinks } from "@/data/portfolio";

export function ContactSection() {
  return (
    <section className="section-shell" id="contact">
      <motion.div
        className="ink-panel night-cafe-glow relative mx-auto max-w-7xl overflow-hidden p-6 md:p-10 lg:p-12"
        initial={{ opacity: 0, y: 28 }}
        transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
        viewport={{ once: true, margin: "-120px" }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        <div className="relative grid gap-10 lg:grid-cols-[1fr_0.38fr] lg:items-end">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <p className="stamp-label">
                Contact
              </p>
            </div>
            <h2 className="font-display max-w-4xl text-balance text-4xl font-extrabold leading-tight md:text-6xl lg:text-7xl">
              Let&apos;s build something useful, clear, and a little memorable.
            </h2>
            <p className="mt-6 max-w-3xl text-base leading-8 text-[color-mix(in_srgb,var(--cream)_78%,transparent)] md:text-lg md:leading-9">
              Whether you need a business system, feature implementation,
              dashboard, or polished landing page, I can help plan and build a
              solution that fits the real need.
            </p>

            <div className="mt-9 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
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
                    variant={index === 0 ? "primary" : index === 3 ? "outline" : "secondary"}
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

          <div className="bento-card relative min-h-72 overflow-hidden bg-[rgb(255_244_223_/_0.06)]">
            <div className="speech-bubble absolute left-4 top-5 z-20 max-w-44 p-3 text-sm font-bold leading-6 text-[var(--text-strong)]">
              Send the rough idea. I can help shape the workflow.
            </div>
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
