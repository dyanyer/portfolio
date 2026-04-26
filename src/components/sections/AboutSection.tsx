import { motion } from "framer-motion";

import { SectionHeading } from "@/components/ui/section-heading";
import { aboutHighlights, aboutStats } from "@/data/portfolio";

function WorkspacePlaceholder() {
  return (
    <motion.div
      className="glass-panel relative overflow-hidden rounded-[1.75rem] p-4"
      initial={{ opacity: 0, y: 24 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      viewport={{ once: true, margin: "-100px" }}
      whileInView={{ opacity: 1, y: 0 }}
    >
      <div className="absolute inset-0 bg-[linear-gradient(135deg,var(--hero-a),transparent_45%,var(--hero-b))]" />
      <div className="subtle-grid absolute inset-0 opacity-70" />
      <div className="relative min-h-[330px] rounded-[1.25rem] border border-[color:var(--border)] bg-[var(--surface-strong)] p-4 shadow-[var(--shadow-soft)]">
        <div className="flex items-center justify-between border-b border-[color:var(--border)] pb-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--muted)]">
              Workspace placeholder
            </p>
            <p className="mt-1 text-sm font-semibold text-[var(--text-strong)]">
              Replace with /images/about-workspace.jpg
            </p>
          </div>
          <span className="rounded-full bg-[var(--accent-soft)] px-3 py-1 text-xs font-semibold text-[var(--accent-strong)]">
            Focus mode
          </span>
        </div>

        <div className="mt-5 grid gap-3 sm:grid-cols-[0.72fr_0.28fr]">
          <div className="rounded-2xl border border-[color:var(--border)] bg-[var(--surface-muted)] p-4">
            <div className="mb-4 flex items-center gap-2">
              <span className="size-3 rounded-full bg-red-400/80" />
              <span className="size-3 rounded-full bg-amber-400/80" />
              <span className="size-3 rounded-full bg-emerald-400/80" />
            </div>
            <div className="grid gap-2 font-mono text-xs text-[var(--muted)]">
              <p>
                <span className="text-[var(--accent-strong)]">01</span>{" "}
                clarify(workflow)
              </p>
              <p>
                <span className="text-[var(--accent-strong)]">02</span>{" "}
                model(rules, data)
              </p>
              <p>
                <span className="text-[var(--accent-strong)]">03</span>{" "}
                ship(interface + logic)
              </p>
            </div>
            <div className="mt-5 h-24 rounded-2xl bg-[linear-gradient(135deg,var(--accent-soft),transparent)]" />
          </div>

          <div className="grid gap-3">
            {["Requirements", "Build", "Review"].map((item, index) => (
              <div
                className="rounded-2xl border border-[color:var(--border)] bg-[var(--surface)] p-3"
                key={item}
              >
                <p className="text-xs font-semibold text-[var(--muted)]">
                  0{index + 1}
                </p>
                <p className="mt-3 text-sm font-semibold text-[var(--text-strong)]">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
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
          title="I care about building tools that people can actually use."
          description="I focus on real workflows, clear requirements, maintainable code, and practical interfaces. My goal is to build systems that reduce confusion and make business operations easier to manage."
        />

        <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
          <div className="grid gap-5">
            <motion.div
              className="glass-panel rounded-[1.75rem] p-6 md:p-8"
              initial={{ opacity: 0, y: 18 }}
              transition={{ duration: 0.58, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true, margin: "-100px" }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <p className="text-2xl font-semibold leading-snug text-[var(--text-strong)] md:text-3xl">
                I build with the assumption that software should make business
                work easier to explain, not harder to manage.
              </p>
              <p className="mt-5 text-base leading-8 text-[var(--muted)]">
                That means understanding the workflow before the interface,
                keeping rules visible, and choosing implementation patterns that
                can survive future changes.
              </p>
            </motion.div>

            <div className="grid gap-3 sm:grid-cols-3">
              {aboutStats.map((stat, index) => (
                <motion.div
                  className="rounded-3xl border border-[color:var(--border)] bg-[var(--surface)] p-5"
                  initial={{ opacity: 0, y: 16 }}
                  key={stat.label}
                  transition={{ delay: index * 0.06, duration: 0.45 }}
                  viewport={{ once: true, margin: "-80px" }}
                  whileInView={{ opacity: 1, y: 0 }}
                >
                  <p className="text-xl font-semibold text-[var(--text-strong)]">
                    {stat.value}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          <WorkspacePlaceholder />
        </div>

        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {aboutHighlights.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                className="group rounded-3xl border border-[color:var(--border)] bg-[var(--surface)] p-5 transition duration-200 hover:-translate-y-1 hover:border-[color:var(--accent-border)] hover:shadow-[var(--shadow-soft)]"
                initial={{ opacity: 0, y: 18 }}
                key={item.title}
                transition={{ delay: index * 0.05, duration: 0.5 }}
                viewport={{ once: true, margin: "-90px" }}
                whileInView={{ opacity: 1, y: 0 }}
              >
                <Icon
                  aria-hidden="true"
                  className="size-5 text-[var(--accent-strong)]"
                />
                <h3 className="mt-5 text-base font-semibold text-[var(--text-strong)]">
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
    </section>
  );
}
