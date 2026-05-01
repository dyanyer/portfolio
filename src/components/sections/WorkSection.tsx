import { motion } from "framer-motion";
import { ArrowUpRight, Star } from "lucide-react";
import laptop from "@/assets/laptop_chibi.png";

type Project = {
  title: string;
  problem: string;
  desc: string;
  stack: string[];
  value: string;
  tag: string;
  role: string;
  status: "Live" | "Shipped" | "In Progress";
  href?: string;
  featured?: boolean;
};

const projects: Project[] = [
  {
    title: "Reisk",
    problem:
      "Contracts and legal documents are difficult to review manually, especially when users need to quickly understand risks, obligations, and important clauses.",
    desc: "An AI-assisted contract review tool that analyzes uploaded documents, identifies key clauses, highlights possible risks, and provides structured summaries for easier review.",
    stack: ["Next.js", "TypeScript", "PostgreSQL", "AI Pipeline"],
    value:
      "Helps users review contracts faster and understand important terms before making decisions.",
    tag: "Legal Tech",
    role: "Founder / Full-Stack Developer",
    status: "In Progress",
    href: "#",
    featured: true,
  },
  {
    title: "Reili",
    problem:
      "Users need a simple way to understand important document details without reading long files manually.",
    desc: "A document intelligence app designed to help users analyze, summarize, and extract important insights from uploaded files through a clean and guided experience.",
    stack: ["Next.js", "TypeScript", "AI", "Tailwind"],
    value:
      "Makes document review faster, easier, and more understandable for everyday users.",
    tag: "AI App",
    role: "Founder / Product Developer",
    status: "In Progress",
    href: "#",
  },
  {
    title: "HR & Payroll Management Platform",
    problem:
      "Businesses needed a centralized way to manage employee records, attendance, leave, payroll, and compliance workflows.",
    desc: "A full HR and payroll platform with employee management, attendance tracking, leave filing, payroll processing, payslip generation, role-based access, and reporting modules.",
    stack: ["Laravel", "MySQL", "Livewire", "Tailwind"],
    value:
      "Streamlined HR operations, reduced manual payroll work, and improved visibility across employee and payroll records.",
    tag: "HR Tech",
    role: "Lead Developer",
    status: "Live",
    href: "#",
  },
  {
    title: "Multi-Tenant SaaS Provisioning Platform",
    problem:
      "The business needed to launch separate client portals quickly while keeping each client’s data isolated.",
    desc: "Designed a SaaS provisioning workflow with subdomain-based access, per-client database setup, tenant configuration, queue-based provisioning, and deployment automation.",
    stack: ["Laravel", "MySQL", "Redis", "Cloudflare", "GitHub Actions"],
    value:
      "Created a scalable foundation for faster client onboarding and secure tenant isolation.",
    tag: "SaaS",
    role: "Full-Stack Developer",
    status: "In Progress",
    href: "#",
  },
  {
    title: "Exam Monitoring Platform",
    problem:
      "Manual exam monitoring made it difficult to track examinees, validate activity, and maintain exam integrity.",
    desc: "Built an exam monitoring platform for managing examinees, tracking exam sessions, monitoring activity, and supporting admin review workflows.",
    stack: ["Laravel", "MySQL", "JavaScript", "Tailwind"],
    value:
      "Improved exam supervision, centralized monitoring, and reduced manual checking for administrators.",
    tag: "EdTech",
    role: "Full-Stack Developer",
    status: "Shipped",
    href: "#",
  },
  {
    title: "Centralized Operations Management System",
    problem:
      "Operations teams needed one place to manage tickets, clients, subscriptions, billing, and internal business workflows.",
    desc: "A centralized internal system designed to support ticketing, client management, subscriptions, accounting, billing, CRM, and admin workflows.",
    stack: ["Laravel", "MySQL", "Tailwind", "JavaScript"],
    value:
      "Helped organize internal operations into a single, scalable admin platform.",
    tag: "Operations",
    role: "Lead Developer",
    status: "In Progress",
    href: "#",
  },
  {
    title: "Business Website & Landing Page Development",
    problem:
      "Businesses needed modern, responsive websites to present services, build credibility, and generate leads.",
    desc: "Designed and developed responsive websites and landing pages with clean layouts, animation-rich sections, reusable components, and mobile-first user experience.",
    stack: ["React", "Vite", "Tailwind", "Framer Motion"],
    value:
      "Delivered modern web experiences focused on usability, branding, and conversion.",
    tag: "Web Design",
    role: "Designer + Developer",
    status: "Live",
    href: "#",
  },
];

const statusColor: Record<Project["status"], string> = {
  Live: "bg-emerald-500/15 text-emerald-500 border-emerald-500/30",
  Shipped: "bg-tan/15 text-tan border-tan/40",
  "In Progress": "bg-amber-500/15 text-amber-500 border-amber-500/30",
};

export const WorkSection = () => {
  return (
    <section
      id="work"
      className="relative py-24 md:py-32 bg-warm/40 noise overflow-hidden"
    >
      {/* Decorative bg */}
      <div
        aria-hidden
        className="absolute top-20 -left-20 h-72 w-72 rounded-full bg-tan/10 blur-3xl"
      />
      <div
        aria-hidden
        className="absolute bottom-20 -right-20 h-80 w-80 rounded-full bg-accent/10 blur-3xl"
      />

      <div className="container relative">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-14">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.22em] text-tan">
              <span className="h-px w-8 bg-tan/50" />
              Work — 作品
            </div>
            <h2 className="font-display mt-3 text-4xl md:text-5xl lg:text-[56px] font-bold leading-[1.02] tracking-tight text-balance">
              Selected systems, shipped to{" "}
              <span className="italic text-tan-glow">real users</span>.
            </h2>
            <p className="mt-4 text-foreground/70 text-base md:text-lg max-w-xl leading-relaxed">
              From payroll engines to SaaS platforms — built to be used daily,
              not just demoed once.
            </p>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="hidden md:flex items-center gap-3 rounded-2xl border border-border bg-card/70 backdrop-blur p-3 pr-5 shadow-soft"
          >
            <img
              src={laptop}
              alt="SaaS web application project preview"
              className="h-16 w-16 object-contain animate-float"
            />
            <div className="text-xs font-mono uppercase tracking-wider text-muted-foreground max-w-[12rem] leading-relaxed">
              <span className="text-tan">// 5 case studies</span>
              <br />
              shipped & maintained
            </div>
          </motion.div>
        </div>

        {/* Featured */}
        <FeaturedCard project={projects[0]} />

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-5 mt-5">
          {projects.slice(1).map((p, i) => (
            <ProjectCard key={p.title} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

const StatusPill = ({ status }: { status: Project["status"] }) => (
  <span
    className={`inline-flex items-center gap-1.5 rounded-full border font-mono text-[10px] px-2.5 py-1 uppercase tracking-wider ${statusColor[status]}`}
  >
    <span className="h-1.5 w-1.5 rounded-full bg-current animate-pulse" />
    {status}
  </span>
);

const FeaturedCard = ({ project }: { project: Project }) => (
  <motion.a
    href={project.href}
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-80px" }}
    transition={{ duration: 0.65 }}
    className="group block rounded-3xl border border-border bg-card overflow-hidden shadow-card hover:border-tan/60 hover:shadow-glow transition-[border-color,box-shadow]"
  >
    <div className="grid md:grid-cols-5">
      <div className="md:col-span-3 p-7 md:p-10 relative">
        <div className="flex flex-wrap items-center gap-2 mb-4">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-tan-gradient text-tan-foreground font-mono text-[10px] px-2.5 py-1 uppercase tracking-wider">
            <Star className="h-3 w-3 fill-current" /> Featured
          </span>
          <span className="rounded-full bg-secondary font-mono text-[10px] px-2.5 py-1 uppercase tracking-wider">
            {project.tag}
          </span>
          <StatusPill status={project.status} />
        </div>
        <h3 className="font-display text-3xl md:text-4xl lg:text-[42px] font-bold leading-[1.05] tracking-tight">
          {project.title}
        </h3>
        <p className="mt-3 text-foreground/75 leading-relaxed">
          {project.desc}
        </p>
        <div className="mt-6 grid sm:grid-cols-2 gap-5 text-sm">
          <div>
            <div className="font-mono text-[10px] uppercase text-muted-foreground tracking-wider mb-1.5">
              Problem
            </div>
            <div className="text-foreground/80 leading-relaxed">
              {project.problem}
            </div>
          </div>
          <div>
            <div className="font-mono text-[10px] uppercase text-tan tracking-wider mb-1.5">
              Outcome
            </div>
            <div className="text-foreground/80 leading-relaxed">
              {project.value}
            </div>
          </div>
        </div>
        <div className="mt-6 flex flex-wrap gap-1.5">
          {project.stack.map((s) => (
            <span
              key={s}
              className="rounded-md border border-border bg-background/60 px-2 py-1 font-mono text-[11px]"
            >
              {s}
            </span>
          ))}
        </div>
        <div className="mt-7 inline-flex items-center gap-2 font-medium text-tan group-hover:gap-3 transition-[gap]">
          View case study
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:rotate-12 group-hover:translate-x-0.5" />
        </div>
      </div>

      {/* Browser mockup */}
      <div className="md:col-span-2 relative bg-ink min-h-[280px] overflow-hidden">
        <div className="absolute inset-0 grid-paper opacity-15" />
        <div className="absolute -top-16 -right-10 h-48 w-48 rounded-full bg-tan/30 blur-3xl" />
        <div className="absolute inset-6 rounded-2xl bg-card/95 border border-border/50 shadow-card overflow-hidden">
          <div className="flex items-center gap-1.5 px-3 py-2 border-b border-border/60 bg-secondary/40">
            <span className="h-2.5 w-2.5 rounded-full bg-destructive/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-tan" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/80" />
            <span className="ml-2 font-mono text-[10px] text-muted-foreground">
              reisk.app/dashboard
            </span>
          </div>
          <div className="p-4 space-y-3">
            <div className="flex items-center justify-between">
              <div className="h-3 w-1/3 bg-tan/40 rounded" />
              <div className="h-3 w-12 bg-secondary rounded-full" />
            </div>
            <div className="h-2 w-1/2 bg-muted rounded" />
            <div className="grid grid-cols-3 gap-2 mt-3">
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className="rounded-lg bg-secondary/60 border border-border p-2 space-y-1.5"
                >
                  <div className="h-1.5 w-2/3 bg-tan/50 rounded" />
                  <div className="h-3 w-1/2 bg-foreground/30 rounded" />
                </div>
              ))}
            </div>
            <div className="space-y-1.5 mt-2">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-tan/40" />
                  <div className="h-1.5 flex-1 bg-muted rounded" />
                  <div className="h-1.5 w-12 bg-secondary rounded" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  </motion.a>
);

const ProjectCard = ({
  project,
  index,
}: {
  project: Project;
  index: number;
}) => (
  <motion.a
    href={project.href}
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-60px" }}
    transition={{ duration: 0.5, delay: index * 0.08 }}
    whileHover={{ y: -4 }}
    className="group relative block rounded-3xl border border-border bg-card p-6 md:p-7 shadow-soft hover:shadow-card hover:border-tan/60 transition-[border-color,box-shadow] overflow-hidden"
  >
    <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-tan/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />

    <div className="relative flex items-center justify-between mb-4 flex-wrap gap-2">
      <div className="flex items-center gap-2 flex-wrap">
        <span className="rounded-full bg-secondary font-mono text-[10px] px-2.5 py-1 uppercase tracking-wider">
          {project.tag}
        </span>
        <StatusPill status={project.status} />
      </div>
      <ArrowUpRight className="h-5 w-5 text-muted-foreground transition group-hover:text-tan group-hover:rotate-12" />
    </div>
    <h3 className="relative font-display text-2xl font-bold leading-tight tracking-tight">
      {project.title}
    </h3>
    <p className="relative mt-2 text-sm text-foreground/70 leading-relaxed">
      {project.desc}
    </p>
    <div className="relative mt-5 pt-5 border-t border-dashed border-border space-y-2 text-sm">
      <div className="text-foreground/75 leading-relaxed">
        <span className="font-mono text-[10px] uppercase text-muted-foreground tracking-wider mr-2">
          Problem
        </span>
        {project.problem}
      </div>
      <div className="text-foreground/85 leading-relaxed">
        <span className="font-mono text-[10px] uppercase text-tan tracking-wider mr-2">
          Value
        </span>
        {project.value}
      </div>
    </div>
    <div className="relative mt-5 flex items-center justify-between gap-3">
      <div className="flex flex-wrap gap-1.5">
        {project.stack.map((s) => (
          <span
            key={s}
            className="rounded-md border border-border px-2 py-0.5 font-mono text-[11px]"
          >
            {s}
          </span>
        ))}
      </div>
      <span className="font-mono text-[10px] uppercase text-muted-foreground tracking-wider whitespace-nowrap">
        {project.role}
      </span>
    </div>
  </motion.a>
);
