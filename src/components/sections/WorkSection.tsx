import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useMemo, useState, type CSSProperties } from "react";

import { Badge } from "@/components/ui/badge";
import { MagneticLink } from "@/components/ui/magnetic-link";
import { SectionHeading } from "@/components/ui/section-heading";
import { projects, type Project } from "@/data/portfolio";
import { cn } from "@/lib/utils";

const filters = [
  { label: "All", value: "all" },
  { label: "SaaS", value: "saas" },
  { label: "Open Source", value: "opensource" },
  { label: "Client Work", value: "client" },
] as const;

type FilterValue = (typeof filters)[number]["value"];

function projectTypeLabel(type: Project["type"]) {
  if (type === "opensource") return "OSS";
  if (type === "client") return "Client";
  return "Featured";
}

function ProjectArtwork({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  return (
    <div
      className="relative min-h-64 overflow-hidden rounded-[8px] border border-[color:var(--border)] bg-[var(--bg-surface)]"
      style={{ "--project-accent": project.accentColor } as CSSProperties}
    >
      <div className="dot-grid absolute inset-0 opacity-45" />
      <div className="seigaiha absolute inset-0 opacity-[0.05]" />
      <motion.div
        animate={{ rotate: [0, 360] }}
        className="absolute left-8 top-8 size-36 border-2 border-[color:var(--project-accent)]"
        style={{ clipPath: "polygon(50% 0, 100% 50%, 50% 100%, 0 50%)" }}
        transition={{ duration: 28 + index * 2, ease: "linear", repeat: Infinity }}
      />
      <motion.div
        animate={{ x: [0, 18, 0], y: [0, -10, 0] }}
        className="absolute right-8 top-12 h-20 w-44 rounded-full border-2 border-[color:var(--gold)] bg-[color-mix(in_srgb,var(--gold)_10%,transparent)]"
        transition={{ duration: 7 + index, ease: "easeInOut", repeat: Infinity }}
      />
      <motion.div
        animate={{ y: [0, -14, 0] }}
        className="absolute bottom-8 left-10 h-28 w-52 border-2 border-[color:var(--teal)] bg-[color-mix(in_srgb,var(--teal)_12%,transparent)]"
        style={{ transform: "skewX(-12deg)" }}
        transition={{ duration: 8.5 + index * 0.5, ease: "easeInOut", repeat: Infinity }}
      />
      <div className="absolute bottom-8 right-8 grid gap-2">
        {[68, 46, 82, 58].map((width, rowIndex) => (
          <span
            className="h-2 rounded-full bg-[var(--project-accent)] opacity-80"
            key={width}
            style={{ width: `${width + rowIndex * 8}px` }}
          />
        ))}
      </div>
      <div className="absolute left-6 top-6 rounded-[6px] border border-[color:var(--border)] bg-[color-mix(in_srgb,var(--bg-card)_82%,transparent)] px-3 py-2 font-mono text-xs text-[var(--parchment)] backdrop-blur">
        {project.chapter}
      </div>
      <div className="stamp absolute right-5 top-5 grid size-20 rotate-[8deg] place-items-center bg-[var(--vermillion)] text-center font-mono text-xs font-black leading-tight text-[var(--parchment)]">
        {projectTypeLabel(project.type)}
      </div>
    </div>
  );
}

function ProjectCard({
  project,
  index,
  large = false,
}: {
  project: Project;
  index: number;
  large?: boolean;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.article
      className={cn(
        "cel-card group relative flex min-h-full cursor-pointer flex-col p-5 transition duration-300 hover:border-[color:var(--sakura)]",
        large && "md:col-span-2",
      )}
      initial={{ opacity: 0, y: 34 }}
      layout
      onHoverEnd={() => setHovered(false)}
      onHoverStart={() => setHovered(true)}
      style={{ "--project-accent": project.accentColor } as CSSProperties}
      transition={{ delay: index * 0.05, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true, margin: "-100px" }}
      whileHover={{ y: -8, boxShadow: "8px 8px 0px var(--sakura)" }}
      whileInView={{ opacity: 1, y: 0 }}
    >
      <ProjectArtwork index={index} project={project} />

      <div className="flex flex-1 flex-col pt-6">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <h3 className="font-display text-3xl font-black leading-tight text-[var(--parchment)]">
              {project.title}
            </h3>
            <p className="font-body mt-2 text-sm text-[var(--ink-faded)]">
              {project.titleJa}
            </p>
          </div>
          <Badge variant={project.type === "featured" ? "featured" : "type"}>
            {projectTypeLabel(project.type)}
          </Badge>
        </div>

        <p className="font-body mt-5 text-sm leading-7 text-[var(--ink-faded)] md:text-base">
          {project.description}
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <Badge key={tag} variant="tech">
              {tag}
            </Badge>
          ))}
        </div>

        <div className="mt-auto pt-7">
          <MagneticLink href="#contact">
            View Project <ArrowRight aria-hidden="true" className="size-4" />
          </MagneticLink>
        </div>
      </div>

      <AnimatePresence>
        {hovered ? (
          <motion.div
            animate={{ y: 0, opacity: 1 }}
            className="absolute inset-x-5 bottom-5 rounded-[8px] border border-[color:var(--sakura)] bg-[color-mix(in_srgb,var(--bg-void)_92%,transparent)] p-4 text-sm leading-7 text-[var(--parchment)] shadow-[0_18px_42px_var(--shadow-ink)] backdrop-blur-md"
            exit={{ y: 24, opacity: 0 }}
            initial={{ y: 24, opacity: 0 }}
            transition={{ duration: 0.22 }}
          >
            {project.longDescription}
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.article>
  );
}

export function WorkSection() {
  const [activeFilter, setActiveFilter] = useState<FilterValue>("all");

  const filteredProjects = useMemo(() => {
    if (activeFilter === "all") return projects;
    if (activeFilter === "saas") {
      return projects.filter((project) =>
        [project.title, ...project.tags].some((value) =>
          value.toLowerCase().includes("saas"),
        ),
      );
    }
    return projects.filter((project) => project.type === activeFilter);
  }, [activeFilter]);

  return (
    <section className="section-shell" id="work">
      <p className="vertical-label font-mono absolute left-3 top-28 hidden text-xs text-[var(--ink-faded)] md:block">
        作品・第二章
      </p>
      <div className="mx-auto max-w-7xl">
        <div className="relative">
          <p
            aria-hidden="true"
            className="font-display pointer-events-none absolute -top-8 right-0 hidden text-[8rem] font-black leading-none text-transparent [-webkit-text-stroke:1px_var(--border)] opacity-45 lg:block"
          >
            作品集
          </p>
          <SectionHeading
            chapter="第二章"
            titleEn="Selected Works"
            titleJa="作品集"
          />
        </div>

        <div className="mb-10 flex flex-wrap gap-3">
          {filters.map((filter) => (
            <button
              className={cn(
                "focus-ring relative cursor-pointer rounded-[3px] border border-[color:var(--border)] bg-[color-mix(in_srgb,var(--paper)_8%,transparent)] px-4 py-3 font-body text-sm font-black text-[var(--ink-faded)] transition-colors duration-200 hover:text-[var(--parchment)]",
                activeFilter === filter.value && "text-[var(--parchment)]",
              )}
              key={filter.value}
              onClick={() => setActiveFilter(filter.value)}
              type="button"
            >
              {filter.label}
              {activeFilter === filter.value ? (
                <motion.span
                  className="absolute inset-x-3 -bottom-px h-1 rounded-full bg-[var(--vermillion)]"
                  layoutId="work-filter-underline"
                />
              ) : null}
            </button>
          ))}
        </div>

        <motion.div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3" layout>
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <ProjectCard
                index={index}
                key={project.id}
                large={index === 0}
                project={project}
              />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
