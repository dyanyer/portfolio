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
  const rows = [
    ["Records", 78],
    ["Attendance", 58],
    ["Payroll", 86],
    ["Reports", 44],
  ] as const;

  return (
    <div className="grid gap-3">
      {rows.map(([label, width], index) => (
        <div
          className="rounded-lg border border-[color:var(--border)] bg-[var(--surface)] p-3 shadow-[2px_3px_0_color-mix(in_srgb,var(--line)_6%,transparent)]"
          key={label}
        >
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-[var(--muted)]">
              {label}
            </span>
            <span className="size-2 rounded-full bg-[var(--card-accent)]" />
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
    <div className="mx-auto grid size-36 rotate-[-1deg] grid-cols-5 gap-1 rounded-lg border-2 border-[color:var(--line)] bg-[var(--surface)] p-4 shadow-[4px_5px_0_color-mix(in_srgb,var(--line)_10%,transparent)]">
      {Array.from({ length: 25 }).map((_, index) => (
        <span
          className={cx(
            "rounded-sm",
            [0, 1, 2, 5, 10, 12, 14, 18, 20, 21, 24].includes(index)
              ? "bg-[var(--text-strong)]"
              : "bg-[var(--matcha-soft)]",
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

function ProjectArtwork({
  project,
  featured = false,
}: {
  project: Project;
  featured?: boolean;
}) {
  const Icon = project.icon;

  return (
    <motion.div
      className={cx(
        "project-scene relative overflow-hidden p-5",
        featured ? "min-h-[23rem] md:min-h-[27rem]" : "min-h-[17rem]",
      )}
      transition={{ duration: 0.22 }}
      whileHover={{ y: -4 }}
    >
      <div className="relative flex items-start gap-3 border-b border-dashed border-[color:var(--border-strong)] pb-5">
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

      <div className={cx("relative", featured ? "mt-8" : "mt-6")}>
        {project.visualType === "architecture" ? <ArchitectureMockup /> : null}
        {project.visualType === "qr" ? <QrMockup /> : null}
        {project.visualType === "landing" ? <LandingMockup /> : null}
        {project.visualType === "dashboard" || project.visualType === "report" ? (
          <VisualBars />
        ) : null}
      </div>

      <div className="absolute bottom-5 left-5 right-5 flex flex-wrap gap-2">
        {project.techStack.slice(0, 3).map((tech) => (
          <span className="tag-chip bg-[var(--surface-strong)]" key={tech}>
            {tech}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

function FeaturedProjectCard({ project }: { project: Project }) {
  return (
    <motion.article
      className="case-study-card mb-8 grid gap-8 p-6 md:p-8 lg:grid-cols-[0.9fr_1.1fr] lg:p-10"
      id={`project-${project.id}`}
      initial={{ opacity: 0, y: 20 }}
      style={{ "--card-accent": cardAccents[0] } as CSSProperties}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      viewport={{ once: true, margin: "-100px" }}
      whileInView={{ opacity: 1, y: 0 }}
    >
      <div className="relative z-10 flex flex-col">
        <div className="mb-8 flex flex-wrap items-center gap-3">
          <Badge tone="accent">Featured case study</Badge>
          <Badge tone="warm">{project.status}</Badge>
        </div>

        <h3 className="font-display text-balance text-3xl font-extrabold leading-tight text-[var(--text-strong)] md:text-5xl">
          {project.title}
        </h3>
        <p className="mt-5 max-w-2xl text-lg font-semibold leading-8 text-[var(--muted-strong)]">
          {project.problemSolved}
        </p>
        <p className="mt-5 max-w-2xl text-base leading-8 text-[var(--muted)] md:text-lg md:leading-9">
          {project.description}
        </p>

        <div className="my-8 grid gap-4 sm:grid-cols-2">
          <div className="bento-card p-5">
            <p className="text-xs font-extrabold uppercase tracking-[0.14em] text-[var(--muted)]">
              Role
            </p>
            <p className="mt-2 text-sm font-bold leading-7 text-[var(--text-strong)]">
              {project.role}
            </p>
          </div>
          <div className="bento-card p-5">
            <p className="text-xs font-extrabold uppercase tracking-[0.14em] text-[var(--muted)]">
              Result
            </p>
            <p className="mt-2 text-sm leading-7 text-[var(--muted-strong)]">
              {project.businessValue}
            </p>
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <span className="tag-chip" key={tech}>
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <AnchorButton href={project.links.details} size="lg">
            View Details
            <ArrowUpRight aria-hidden="true" className="size-4" />
          </AnchorButton>
          <AnchorButton href="#contact" size="lg" variant="secondary">
            Discuss Similar Work
          </AnchorButton>
        </div>
      </div>

      <div className="relative z-10">
        <div className="mb-4 flex items-center justify-between gap-4">
          <p className="stamp-label">Workflow preview</p>
          <div className="mascot-badge size-16 bg-[var(--gold-soft)]">
            <Mascot className="size-20 translate-y-2 scale-125" decorative pose="laptop" />
          </div>
        </div>
        <ProjectArtwork featured project={project} />
      </div>
    </motion.article>
  );
}

function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  return (
    <motion.article
      className="bento-card group flex flex-col p-6 transition duration-200 hover:-translate-y-1 hover:border-[color:var(--accent-border)]"
      id={`project-${project.id}`}
      initial={{ opacity: 0, y: 24 }}
      style={
        {
          "--card-accent": cardAccents[(index + 1) % cardAccents.length],
        } as CSSProperties
      }
      transition={{
        delay: index * 0.05,
        duration: 0.55,
        ease: [0.16, 1, 0.3, 1],
      }}
      viewport={{ once: true, margin: "-100px" }}
      whileInView={{ opacity: 1, y: 0 }}
    >
      <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
        <Badge tone={index % 2 === 0 ? "warm" : "default"}>
          {project.status}
        </Badge>
        <span className="text-sm font-extrabold text-[var(--muted)]">
          {String(index + 2).padStart(2, "0")}
        </span>
      </div>

      <ProjectArtwork project={project} />

      <div className="mt-6 flex flex-1 flex-col">
        <h3 className="font-display text-2xl font-extrabold leading-tight text-[var(--text-strong)]">
          {project.title}
        </h3>
        <p className="mt-4 text-sm font-semibold leading-7 text-[var(--muted-strong)]">
          {project.problemSolved}
        </p>
        <p className="mt-4 text-sm leading-7 text-[var(--muted)]">
          {project.businessValue}
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.techStack.slice(0, 4).map((tech) => (
            <span className="tag-chip" key={tech}>
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-auto pt-7">
          <AnchorButton href={project.links.details} variant="outline">
            View Details
            <ArrowUpRight aria-hidden="true" className="size-4" />
          </AnchorButton>
        </div>
      </div>
    </motion.article>
  );
}

export function WorkSection() {
  const featuredProject = projects[0];
  const projectGrid = projects.slice(1);

  if (!featuredProject) return null;

  return (
    <section className="section-shell" id="work">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Selected Work"
          title="A cleaner case-study gallery for practical systems."
          description="One featured build gets the full story. The rest stay easy to scan with problem, value, tech, and a direct path to details."
        />

        <FeaturedProjectCard project={featuredProject} />

        <div className="grid gap-6 md:grid-cols-2">
          {projectGrid.map((project, index) => (
            <ProjectCard index={index} key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
