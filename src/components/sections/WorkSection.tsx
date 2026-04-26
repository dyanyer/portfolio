import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

import { Mascot } from "@/components/mascot/Mascot";
import { Badge } from "@/components/ui/badge";
import { AnchorButton } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";
import { projects, type Project } from "@/data/portfolio";
import { cx } from "@/lib/utils";

const layoutClasses = [
  "lg:grid-cols-[0.95fr_1.05fr]",
  "lg:grid-cols-[1.05fr_0.95fr]",
  "lg:grid-cols-[0.92fr_1.08fr]",
  "lg:grid-cols-[1.08fr_0.92fr]",
  "lg:grid-cols-[0.98fr_1.02fr]",
];

function VisualBars() {
  return (
    <div className="grid gap-3">
      {[78, 58, 86, 44].map((width, index) => (
        <div
          className="rounded-lg border border-[color:var(--border)] bg-[var(--surface)] p-3"
          key={width}
        >
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-[var(--muted)]">
              Flow {index + 1}
            </span>
            <span className="size-2 rounded-full bg-[var(--accent)]" />
          </div>
          <div className="mt-3 h-2 rounded-full bg-[var(--border)]">
            <motion.div
              className="h-full rounded-full bg-[var(--accent)]"
              initial={{ width: 0 }}
              transition={{ duration: 0.75, delay: index * 0.08 }}
              viewport={{ once: true }}
              whileInView={{ width: `${width}%` }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

function QrMockup() {
  return (
    <div className="mx-auto grid size-36 grid-cols-5 gap-1 rounded-lg border border-[color:var(--border)] bg-[var(--surface)] p-4 shadow-[var(--shadow-soft)]">
      {Array.from({ length: 25 }).map((_, index) => (
        <span
          className={cx(
            "rounded-sm",
            [0, 1, 2, 5, 10, 12, 14, 18, 20, 21, 24].includes(index)
              ? "bg-[var(--text-strong)]"
              : "bg-[var(--accent-soft)]",
          )}
          key={index}
        />
      ))}
    </div>
  );
}

function ArchitectureMockup() {
  return (
    <div className="relative min-h-56">
      <div className="absolute left-1/2 top-1/2 size-24 -translate-x-1/2 -translate-y-1/2 rounded-lg border border-[color:var(--accent-border)] bg-[var(--accent-soft)]" />
      {["Tenant A", "Tenant B", "Portal", "DB"].map((item, index) => (
        <motion.div
          className={cx(
            "absolute rounded-lg border border-[color:var(--border)] bg-[var(--surface)] px-4 py-3 text-sm font-semibold text-[var(--text-strong)] shadow-[var(--shadow-soft)]",
            index === 0 && "left-0 top-3",
            index === 1 && "right-0 top-8",
            index === 2 && "bottom-3 left-4",
            index === 3 && "bottom-7 right-6",
          )}
          key={item}
          transition={{ duration: 0.2 }}
          whileHover={{ y: -3 }}
        >
          {item}
        </motion.div>
      ))}
    </div>
  );
}

function LandingMockup() {
  return (
    <div className="rounded-lg border border-[color:var(--border)] bg-[var(--surface)] p-4 shadow-[var(--shadow-soft)]">
      <div className="h-24 rounded-lg bg-[linear-gradient(135deg,var(--ink-panel),var(--accent))]" />
      <div className="mt-4 grid gap-2">
        <div className="h-3 w-3/4 rounded-full bg-[color-mix(in_srgb,var(--text-strong)_80%,transparent)]" />
        <div className="h-3 w-1/2 rounded-full bg-[color-mix(in_srgb,var(--muted)_45%,transparent)]" />
        <div className="mt-3 h-10 w-32 rounded-full bg-[var(--accent)]" />
      </div>
    </div>
  );
}

function ProjectArtwork({ project }: { project: Project }) {
  const Icon = project.icon;

  return (
    <motion.div
      className="relative min-h-[21rem] overflow-hidden rounded-lg border border-[color:var(--border)] bg-[var(--surface-muted)] p-4"
      transition={{ duration: 0.22 }}
      whileHover={{ y: -4 }}
    >
      <div className="kumiko-grid absolute inset-0 opacity-60" />
      <div className="relative flex items-start gap-3 border-b border-[color:var(--border)] pb-4">
        <span className="grid size-10 place-items-center rounded-lg border border-[color:var(--accent-border)] bg-[var(--accent-soft)] text-[var(--accent-strong)]">
          <Icon aria-hidden="true" className="size-5" />
        </span>
        <div className="min-w-0">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--muted)]">
            {project.visualLabel}
          </p>
          <p className="mt-1 text-sm leading-6 text-[var(--muted-strong)]">
            {project.visualNote}
          </p>
        </div>
      </div>

      <div className="relative mt-6">
        {project.visualType === "architecture" ? <ArchitectureMockup /> : null}
        {project.visualType === "qr" ? <QrMockup /> : null}
        {project.visualType === "landing" ? <LandingMockup /> : null}
        {project.visualType === "dashboard" || project.visualType === "report" ? (
          <VisualBars />
        ) : null}
      </div>

      <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-2">
        {project.techStack.slice(0, 3).map((tech) => (
          <span
            className="rounded-full border border-[color:var(--border)] bg-[var(--surface)] px-3 py-1.5 text-xs font-semibold text-[var(--muted-strong)]"
            key={tech}
          >
            {tech}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

function WorkMascotCallout() {
  return (
    <motion.div
      className="studio-panel relative mb-6 hidden overflow-hidden rounded-lg p-5 lg:block"
      initial={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
      viewport={{ once: true, margin: "-100px" }}
      whileInView={{ opacity: 1, y: 0 }}
    >
      <div className="kumiko-grid absolute inset-0 opacity-50" />
      <div className="relative grid grid-cols-[0.72fr_0.28fr] items-end gap-4">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--accent-strong)]">
            Selected Work
          </p>
          <p className="mt-3 max-w-2xl text-2xl font-semibold leading-tight text-[var(--text-strong)]">
            System work presented like product work: problem, flow, stack, and
            business value.
          </p>
        </div>
        <Mascot className="h-40 w-36 justify-self-end" pose="laptop" />
      </div>
    </motion.div>
  );
}

export function WorkSection() {
  return (
    <section className="section-shell" id="work">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Selected Work"
          title="Case-study cards for systems, not just screens."
          description="Each project is framed around the business problem, the workflow it improves, and the implementation value behind the interface."
        />

        <WorkMascotCallout />

        <div className="grid gap-5 md:gap-7">
          {projects.map((project, index) => (
            <motion.article
              className={cx(
                "studio-panel grid gap-5 rounded-lg p-4 md:p-6",
                layoutClasses[index],
              )}
              id={`project-${project.id}`}
              initial={{ opacity: 0, y: 28 }}
              key={project.id}
              transition={{
                delay: index * 0.04,
                duration: 0.6,
                ease: [0.16, 1, 0.3, 1],
              }}
              viewport={{ once: true, margin: "-100px" }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <div className={cx("min-w-0", index % 2 === 1 && "lg:order-2")}>
                <div className="mb-5 flex flex-wrap items-center gap-3">
                  <Badge tone={index === 1 ? "accent" : "default"}>
                    {project.status}
                  </Badge>
                  <span className="text-sm font-semibold text-[var(--muted)]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <h3 className="text-balance text-2xl font-semibold leading-tight text-[var(--text-strong)] md:text-4xl">
                  {project.title}
                </h3>
                <p className="mt-4 text-sm font-semibold uppercase tracking-[0.14em] text-[var(--accent-strong)]">
                  Problem solved
                </p>
                <p className="mt-2 text-base leading-7 text-[var(--muted-strong)]">
                  {project.problemSolved}
                </p>
                <p className="mt-4 text-base leading-8 text-[var(--muted)]">
                  {project.description}
                </p>

                <div className="mt-5 border-l-2 border-[color:var(--accent-border)] pl-4">
                  <p className="text-sm font-semibold text-[var(--text-strong)]">
                    Business value
                  </p>
                  <p className="mt-2 text-sm leading-7 text-[var(--muted)]">
                    {project.businessValue}
                  </p>
                </div>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      className="rounded-full border border-[color:var(--border)] bg-[var(--surface)] px-3 py-1.5 text-xs font-semibold text-[var(--muted-strong)]"
                      key={tech}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-6">
                  <AnchorButton href={project.links.details} variant="outline">
                    View Details
                    <ArrowUpRight aria-hidden="true" className="size-4" />
                  </AnchorButton>
                </div>
              </div>

              <ProjectArtwork project={project} />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
