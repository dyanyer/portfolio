import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

import { AnchorButton } from "@/components/ui/button";
import { contactLinks } from "@/data/portfolio";

export function ContactSection() {
  return (
    <section className="section-shell" id="contact">
      <motion.div
        className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-[color:var(--accent-border)] bg-[var(--surface)] p-5 shadow-[var(--shadow-strong)] md:p-10"
        initial={{ opacity: 0, y: 28 }}
        transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
        viewport={{ once: true, margin: "-120px" }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        <div className="absolute inset-0 bg-[linear-gradient(135deg,var(--hero-a),transparent_42%,var(--hero-b))]" />
        <div className="subtle-grid absolute inset-0 opacity-70" />
        <div className="relative grid gap-9 lg:grid-cols-[1fr_0.58fr] lg:items-end">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-8 bg-[var(--accent)]" aria-hidden="true" />
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--accent-strong)]">
                Contact
              </p>
            </div>
            <h2 className="max-w-4xl text-balance text-4xl font-semibold leading-tight text-[var(--text-strong)] md:text-6xl">
              Have a system, feature, or website in mind?
            </h2>
            <p className="mt-5 max-w-3xl text-base leading-8 text-[var(--muted)] md:text-lg">
              I can help you clarify the scope, plan the workflow, and build a
              clean web solution that fits the business need.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
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
      </motion.div>
    </section>
  );
}
