import { motion } from "framer-motion";

import { Mascot } from "@/components/mascot/Mascot";
import { SectionHeading } from "@/components/ui/section-heading";
import { aboutHighlights, aboutStats } from "@/data/portfolio";

function AboutMascotPanel() {
  return (
    <motion.div
      className="bento-card relative overflow-hidden p-6 lg:sticky lg:top-28"
      initial={{ opacity: 0, y: 24 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      viewport={{ once: true, margin: "-100px" }}
      whileInView={{ opacity: 1, y: 0 }}
    >
      <div className="relative flex items-start justify-between gap-4">
        <div>
          <p className="stamp-label">Developer story</p>
          <p className="font-display mt-5 text-2xl font-extrabold leading-tight text-[var(--text-strong)] md:text-3xl">
            Useful software starts before the first component.
          </p>
        </div>
        <div className="mascot-badge size-20 shrink-0 bg-[var(--matcha-soft)]">
          <Mascot className="size-24 translate-y-2 scale-125" decorative pose="thinking" />
        </div>
      </div>
      <div className="speech-bubble relative z-20 mt-7 p-5 text-sm font-semibold leading-7 text-[var(--muted-strong)] md:text-base md:leading-8">
        I like making the rules visible first, then turning them into screens,
        data, and actions that feel easy to follow.
      </div>
      <div className="mt-8 grid gap-3 sm:grid-cols-2">
        {["Business rules", "Readable handoff", "Calm delivery", "Usable screens"].map(
          (label) => (
            <span className="tag-chip" key={label}>
              {label}
            </span>
          ),
        )}
      </div>
    </motion.div>
  );
}

export function AboutSection() {
  return (
    <section className="section-shell" id="about">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="About"
          title="Friendly to work with, serious about the system underneath."
          description="I build with the person using the system in mind: what they need to check, approve, compute, explain, and hand off."
        />

        <div className="grid gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-start">
          <div className="grid gap-6">
            <motion.div
              className="ink-panel night-cafe-glow relative overflow-hidden p-7 md:p-10"
              initial={{ opacity: 0, y: 18 }}
              transition={{ duration: 0.58, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true, margin: "-100px" }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <p className="font-display text-2xl font-extrabold leading-snug md:text-4xl">
                I am drawn to the quiet parts of software: the approval rule,
                the payroll edge case, the report someone has to trust.
              </p>
              <p className="mt-6 max-w-3xl text-base leading-8 text-[color-mix(in_srgb,var(--cream)_78%,transparent)] md:text-lg md:leading-9">
                The chibi identity makes this portfolio memorable, but the work
                stays grounded in business logic: HR records, payroll rules,
                tenant portals, QR validation, reports, and dashboards.
              </p>
            </motion.div>

            <div className="grid gap-4 sm:grid-cols-3">
              {aboutStats.map((stat, index) => (
                <motion.div
                  className="bento-card p-6"
                  initial={{ opacity: 0, y: 16 }}
                  key={stat.label}
                  transition={{ delay: index * 0.06, duration: 0.45 }}
                  viewport={{ once: true, margin: "-80px" }}
                  whileInView={{ opacity: 1, y: 0 }}
                >
                  <p className="font-display text-2xl font-extrabold text-[var(--text-strong)]">
                    {stat.value}
                  </p>
                  <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {aboutHighlights.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    className="bento-card group p-6 transition duration-200 hover:-translate-y-1 hover:border-[color:var(--accent-border)]"
                    initial={{ opacity: 0, y: 18 }}
                    key={item.title}
                    transition={{ delay: index * 0.05, duration: 0.5 }}
                    viewport={{ once: true, margin: "-90px" }}
                    whileInView={{ opacity: 1, y: 0 }}
                  >
                    <div className="flex items-center justify-between gap-4">
                      <Icon
                        aria-hidden="true"
                        className="size-5 text-[var(--accent-strong)]"
                      />
                      <span className="rounded-full border border-[color:var(--border)] bg-[var(--matcha-soft)] px-2 py-1 text-[0.65rem] font-extrabold uppercase tracking-[0.12em] text-[var(--muted-strong)]">
                        Note
                      </span>
                    </div>
                    <h3 className="font-display mt-6 text-lg font-extrabold text-[var(--text-strong)]">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
                      {item.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>

          <AboutMascotPanel />
        </div>
      </div>
    </section>
  );
}
