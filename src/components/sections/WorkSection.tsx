import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import type { CSSProperties } from "react";

import { Mascot } from "@/components/mascot/Mascot";
import { Badge } from "@/components/ui/badge";
import { AnchorButton } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";
import { projects, type Project } from "@/data/portfolio";
import { cx } from "@/lib/utils";

const cardAccents = [
  "var(--accent)",
  "var(--sky)",
  "var(--matcha)",
  "var(--gold)",
  "var(--brown)",
];

function VisualBars() {
  return (
    <div className="grid gap-3">
      {[78, 58, 86, 44].map((width, index) => (
        <div
          className="rounded-lg border border-[color:var(--border)] bg-[var(--surface)] p-3 shadow-[2px_3px_0_color-mix(in_srgb,var(--line)_7%,transparent)]"
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
              className="h-full rounded-full bg-[var(--card-accent)]"
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
    <div className="mx-auto grid size-36 rotate-[-2deg] grid-cols-5 gap-1 rounded-lg border-2 border-[color:var(--line)] bg-[var(--surface)] p-4 shadow-[4px_5px_0_color-mix(in_srgb,var(--line)_10%,transparent)]">
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
      <div className="absolute left-1/2 top-1/2 size-24 -translate-x-1/2 -translate-y-1/2 rounded-lg border-2 border-[color:var(--line)] bg-[color-mix(in_srgb,var(--card-accent)_20%,transparent)]" />
      {["Tenant A", "Tenant B", "Portal", "DB"].map((item, index) => (
        <motion.div
          className={cx(
            "absolute rounded-lg border border-[color:var(--border)] bg-[var(--surface)] px-4 py-3 text-sm font-bold text-[var(--text-strong)] shadow-[var(--shadow-soft)]",
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
    <div className="rotate-[1deg] rounded-lg border-2 border-[color:var(--line)] bg-[var(--surface)] p-4 shadow-[4px_5px_0_color-mix(in_srgb,var(--line)_10%,transparent)]">
      <div className="h-24 rounded-lg bg-[linear-gradient(135deg,var(--ink-panel),var(--card-accent))]" />
      <div className="mt-4 grid gap-2">
        <div className="h-3 w-3/4 rounded-full bg-[color-mix(in_srgb,var(--text-strong)_80%,transparent)]" />
        <div className="h-3 w-1/2 rounded-full bg-[color-mix(in_srgb,var(--muted)_45%,transparent)]" />
        <div className="mt-3 h-10 w-32 rounded-full bg-[var(--card-accent)]" />
      </div>
    </div>
  );
}

function ProjectArtwork({ project }: { project: Project }) {
  const Icon = project.icon;

  return (
    <motion.div
      className="project-scene relative min-h-[19rem] overflow-hidden p-4"
      transition={{ duration: 0.22 }}
      whileHover={{ y: -4 }}
    >
      <div className="absolute right-4 top-4 h-7 w-20 rotate-[7deg] washi-strip" />
      <div className="relative flex items-start gap-3 border-b border-dashed border-[color:var(--border-strong)] pb-4">
        <span className="grid size-10 place-items-center rounded-lg border-2 border-[color:var(--line)] bg-[var(--surface-strong)] text-[var(--accent-strong)] shadow-[2px_3px_0_color-mix(in_srgb,var(--line)_10%,transparent)]">
          <Icon aria-hidden="true" className="size-5" />
        </span>
        <div className="min-w-0">
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-[var(--muted)]">
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
            className="mini-ticket px-3 py-1.5 text-xs font-bold text-[var(--muted-strong)]"
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
      className="sticker-card relative mb-6 hidden overflow-hidden p-5 lg:block"
      initial={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
      viewport={{ once: true, margin: "-100px" }}
      whileInView={{ opacity: 1, y: 0 }}
    >
      <div className="absolute left-6 top-4 h-7 w-24 rotate-[-4deg] washi-strip" />
      <div className="relative grid grid-cols-[0.72fr_0.28fr] items-end gap-4">
        <div>
          <p className="stamp-label">
            Selected Work
          </p>
          <p className="font-display mt-5 max-w-2xl text-2xl font-extrabold leading-tight text-[var(--text-strong)]">
            System work presented like collectible case cards: problem, role,
            stack, and the value behind the interface.
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
          title="Project cards with the problem, role, stack, and result up front."
          description="The visuals are playful, but the structure stays practical: what was hard, what I handled, and how the system helped."
        />

        <WorkMascotCallout />

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <motion.article
              className={cx(
                "collectible-card group p-4 md:p-5",
                index === 0 && "md:col-span-2 xl:grid xl:grid-cols-[0.95fr_1.05fr] xl:gap-5",
                index === 1 && "xl:row-span-2",
              )}
              id={`project-${project.id}`}
              initial={{ opacity: 0, y: 28 }}
              key={project.id}
              style={
                {
                  "--card-accent": cardAccents[index % cardAccents.length],
                } as CSSProperties
              }
              transition={{
                delay: index * 0.04,
                duration: 0.6,
                ease: [0.16, 1, 0.3, 1],
              }}
              viewport={{ once: true, margin: "-100px" }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <div className="relative z-10 flex min-h-full flex-col">
                <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
                  <Badge tone={index === 1 ? "accent" : "warm"}>
                    {project.status}
                  </Badge>
                  <span className="rounded-full border border-[color:var(--border)] bg-[var(--surface)] px-3 py-1 text-sm font-extrabold text-[var(--muted)]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <h3 className="font-display text-balance text-2xl font-extrabold leading-tight text-[var(--text-strong)] md:text-3xl">
                  {project.title}
                </h3>
                <p className="mt-4 text-xs font-extrabold uppercase tracking-[0.14em] text-[var(--accent-strong)]">
                  Problem solved
                </p>
                <p className="mt-2 text-base leading-7 text-[var(--muted-strong)]">
                  {project.problemSolved}
                </p>

                <div className="my-5 grid gap-3">
                  <div className="rounded-lg border border-dashed border-[color:var(--border-strong)] bg-[color-mix(in_srgb,var(--surface)_72%,transparent)] p-3">
                    <p className="text-xs font-extrabold uppercase tracking-[0.14em] text-[var(--muted)]">
                      Role
                    </p>
                    <p className="mt-1 text-sm font-semibold leading-6 text-[var(--text-strong)]">
                      {project.role}
                    </p>
                  </div>
                  <div className="rounded-lg border border-dashed border-[color:var(--border-strong)] bg-[color-mix(in_srgb,var(--surface)_72%,transparent)] p-3">
                    <p className="text-xs font-extrabold uppercase tracking-[0.14em] text-[var(--muted)]">
                      Result
                    </p>
                    <p className="mt-1 text-sm leading-6 text-[var(--muted-strong)]">
                      {project.businessValue}
                    </p>
                  </div>
                </div>

                <p className="text-sm leading-7 text-[var(--muted)]">
                  {project.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      className="mini-ticket px-3 py-1.5 text-xs font-bold text-[var(--muted-strong)] transition duration-200 group-hover:-translate-y-0.5"
                      key={tech}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-auto pt-6">
                  <AnchorButton href={project.links.details} variant="outline">
                    View Details
                    <ArrowUpRight aria-hidden="true" className="size-4" />
                  </AnchorButton>
                </div>
              </div>

              <div className={cx("relative z-10 mt-5", index === 0 && "xl:mt-0")}>
                <ProjectArtwork project={project} />
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
