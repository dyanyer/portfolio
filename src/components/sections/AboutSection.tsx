import { motion } from "framer-motion";

import { Mascot } from "@/components/mascot/Mascot";
import { SectionHeading } from "@/components/ui/section-heading";
import { aboutHighlights, aboutStats } from "@/data/portfolio";

function AboutMascotPanel() {
  return (
    <motion.div
      className="manga-panel relative overflow-hidden p-5 lg:sticky lg:top-28"
      initial={{ opacity: 0, y: 24 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      viewport={{ once: true, margin: "-100px" }}
      whileInView={{ opacity: 1, y: 0 }}
    >
      <div className="absolute right-5 top-4 h-8 w-28 rotate-[5deg] washi-strip" />
      <div className="relative flex items-start justify-between gap-4">
        <div>
          <p className="stamp-label">Developer story</p>
          <p className="font-display mt-4 text-2xl font-extrabold leading-tight text-[var(--text-strong)]">
            Useful software starts before the first component.
          </p>
        </div>
      </div>
      <div className="speech-bubble relative z-20 mt-5 p-4 text-sm font-semibold leading-7 text-[var(--muted-strong)]">
        I like making the rules visible first, then turning them into screens,
        data, and actions that feel easy to follow.
      </div>
      <div className="relative mt-6 min-h-[20rem] overflow-hidden rounded-lg bg-[var(--matcha-soft)]">
        <motion.div
          animate={{ y: [0, -8, 0] }}
          className="absolute inset-x-0 bottom-0 mx-auto h-[22rem] w-[18rem]"
          transition={{ duration: 6, ease: "easeInOut", repeat: Infinity }}
        >
          <Mascot className="h-full w-full" pose="thinking" />
        </motion.div>
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

        <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
          <div className="grid gap-5">
            <motion.div
              className="ink-panel night-cafe-glow relative overflow-hidden p-6 md:p-8"
              initial={{ opacity: 0, y: 18 }}
              transition={{ duration: 0.58, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true, margin: "-100px" }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <div className="absolute right-6 top-5 h-7 w-24 rotate-[4deg] washi-strip" />
              <p className="font-display text-2xl font-extrabold leading-snug md:text-3xl">
                I am drawn to the quiet parts of software: the approval rule,
                the payroll edge case, the report someone has to trust.
              </p>
              <p className="mt-5 text-base leading-8 text-[color-mix(in_srgb,var(--cream)_78%,transparent)]">
                The chibi identity makes this portfolio memorable, but the work
                stays grounded in business logic: HR records, payroll rules,
                tenant portals, QR validation, reports, and dashboards.
              </p>
            </motion.div>

            <div className="grid gap-3 sm:grid-cols-3">
              {aboutStats.map((stat, index) => (
                <motion.div
                  className="stationery-card p-5"
                  initial={{ opacity: 0, y: 16 }}
                  key={stat.label}
                  transition={{ delay: index * 0.06, duration: 0.45 }}
                  viewport={{ once: true, margin: "-80px" }}
                  whileInView={{ opacity: 1, y: 0 }}
                >
                  <p className="font-display text-xl font-extrabold text-[var(--text-strong)]">
                    {stat.value}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {aboutHighlights.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    className="sticker-card group p-5 transition duration-200 hover:-translate-y-1"
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
                      <span className="h-2 w-12 rounded-full washi-strip" />
                    </div>
                    <h3 className="font-display mt-5 text-base font-extrabold text-[var(--text-strong)]">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
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
