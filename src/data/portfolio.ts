import {
  BadgeCheck,
  BriefcaseBusiness,
  ChartNoAxesCombined,
  ClipboardCheck,
  Cloud,
  Code2,
  Database,
  FileCode2,
  FileDown,
  Github,
  Globe2,
  LayoutDashboard,
  Linkedin,
  Mail,
  MessagesSquare,
  Network,
  Rocket,
  ScanLine,
  Server,
  ShieldCheck,
  Sparkles,
  UsersRound,
  Wrench,
  type LucideIcon,
} from "lucide-react";

export type NavItem = {
  label: string;
  href: string;
  id: string;
};

export type ValuePoint = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export type AboutHighlight = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export type ProjectVisualType =
  | "dashboard"
  | "architecture"
  | "qr"
  | "report"
  | "landing";

export type Project = {
  id: string;
  title: string;
  problemSolved: string;
  description: string;
  role: string;
  techStack: string[];
  businessValue: string;
  status: "System Feature" | "Architecture" | "Compliance" | "Landing Page";
  icon: LucideIcon;
  visualType: ProjectVisualType;
  visualLabel: string;
  visualNote: string;
  placeholderImage: string;
  links: {
    details: string;
    live: string;
    github: string;
  };
};

export type SkillCategory = {
  title: string;
  description: string;
  icon: LucideIcon;
  score: string;
  skills: string[];
};

export type ProcessStep = {
  step: string;
  title: string;
  description: string;
  icon: LucideIcon;
};

export type ContactLink = {
  label: string;
  href: string;
  icon: LucideIcon;
};

export const personalInfo = {
  name: "John Rey Rebusquillo",
  role: "Full-Stack Web Developer",
  email: "your-email@example.com",
  github: "https://github.com/yourusername",
  linkedin: "https://linkedin.com/in/yourusername",
  resume: "/resume.pdf",
};

export const navItems: NavItem[] = [
  { label: "Home", href: "#home", id: "home" },
  { label: "About", href: "#about", id: "about" },
  { label: "Work", href: "#work", id: "work" },
  { label: "Skills", href: "#skills", id: "skills" },
  { label: "Process", href: "#process", id: "process" },
  { label: "Contact", href: "#contact", id: "contact" },
];

export const valuePoints: ValuePoint[] = [
  {
    title: "Workflow-first thinking",
    description: "Rules, roles, and real tasks before shiny screens.",
    icon: BriefcaseBusiness,
  },
  {
    title: "Clean implementation",
    description: "Readable code paths that stay easier to change.",
    icon: Code2,
  },
  {
    title: "Practical features",
    description: "Tools built around daily business operations.",
    icon: LayoutDashboard,
  },
  {
    title: "Calm collaboration",
    description: "Clear updates, scoped decisions, and useful handoffs.",
    icon: Cloud,
  },
];

export const aboutHighlights: AboutHighlight[] = [
  {
    title: "Workflow-first thinking",
    description: "I start with people, approvals, data, and the real business outcome.",
    icon: MessagesSquare,
  },
  {
    title: "Practical UI decisions",
    description: "Screens are designed around tasks teams actually repeat.",
    icon: UsersRound,
  },
  {
    title: "Maintainable backend logic",
    description: "I favor clear rules, readable structure, and predictable feature paths.",
    icon: Wrench,
  },
  {
    title: "Useful iteration",
    description: "Real scenarios shape the next improvement instead of guesswork.",
    icon: BadgeCheck,
  },
];

export const aboutStats = [
  { value: "Full-stack", label: "interfaces, APIs, data, deployment" },
  { value: "Ops-aware", label: "HR, payroll, reports, approvals" },
  { value: "Clear delivery", label: "scoped features and handoff notes" },
];

export const projects: Project[] = [
  {
    id: "hr-payroll",
    title: "HR and Payroll Management System",
    problemSolved: "Manual HR workflows and scattered employee records.",
    description:
      "A system for managing employees, attendance, leave, overtime, payroll processing, and reporting workflows.",
    role: "Full-stack feature design and implementation",
    techStack: ["Laravel", "PHP", "MySQL", "JavaScript", "Tailwind CSS"],
    businessValue:
      "Centralizes HR operations so teams can review payroll inputs with less confusion.",
    status: "System Feature",
    icon: UsersRound,
    visualType: "dashboard",
    visualLabel: "HR dashboard mockup",
    visualNote: "Employee records, attendance, leave, and payroll review in one flow.",
    placeholderImage: "/images/project-hr-dashboard.jpg",
    links: {
      details: "#project-hr-payroll",
      live: "#replace-with-live-demo",
      github: "#replace-with-github-repo",
    },
  },
  {
    id: "multi-tenant-saas",
    title: "Multi-Tenant SaaS Platform",
    problemSolved:
      "Multiple clients need separate portals without maintaining separate codebases.",
    description:
      "A Laravel-based SaaS setup using one codebase with separate tenant databases and subdomain-based client portals.",
    role: "Architecture planning and backend foundation",
    techStack: ["Laravel", "MySQL", "Nginx", "Cloudflare", "VPS", "Queues"],
    businessValue:
      "Creates a repeatable platform foundation with tenant isolation and cleaner provisioning.",
    status: "Architecture",
    icon: Server,
    visualType: "architecture",
    visualLabel: "SaaS architecture mockup",
    visualNote: "Tenant portals, isolated data, provisioning, and deployment concerns.",
    placeholderImage: "/images/project-saas-architecture.jpg",
    links: {
      details: "#project-multi-tenant-saas",
      live: "#replace-with-live-demo",
      github: "#replace-with-github-repo",
    },
  },
  {
    id: "meal-stub-qr",
    title: "Free Meal Stub QR System",
    problemSolved: "Manual tracking of employee meal benefits.",
    description:
      "A QR-based employee meal benefit feature with automatic stub issuance, validation, usage tracking, and admin review.",
    role: "Workflow logic, admin screens, and validation flow",
    techStack: ["Laravel", "MySQL", "QR Code", "Attendance Integration"],
    businessValue:
      "Improves transparency and control over employee meal benefit usage.",
    status: "System Feature",
    icon: ScanLine,
    visualType: "qr",
    visualLabel: "QR validation mockup",
    visualNote: "Stub issuance, QR scanning, usage history, and admin review.",
    placeholderImage: "/images/project-qr-validation.jpg",
    links: {
      details: "#project-meal-stub-qr",
      live: "#replace-with-live-demo",
      github: "#replace-with-github-repo",
    },
  },
  {
    id: "bir-tax-module",
    title: "BIR 1601-C Payroll Tax Module",
    problemSolved: "Payroll tax reports must match computed payroll tax data.",
    description:
      "A payroll tax reporting module focused on computed tax consistency, taxable components, and report accuracy.",
    role: "Payroll computation logic and reporting review flow",
    techStack: ["Laravel", "PHP", "MySQL", "Payroll Tax Logic"],
    businessValue:
      "Gives payroll teams a clearer way to validate tax-related data before reports are used.",
    status: "Compliance",
    icon: FileCode2,
    visualType: "report",
    visualLabel: "Reporting dashboard mockup",
    visualNote: "Computed payroll tax data shaped into reviewable reports.",
    placeholderImage: "/images/project-tax-report.jpg",
    links: {
      details: "#project-bir-tax-module",
      live: "#replace-with-live-demo",
      github: "#replace-with-github-repo",
    },
  },
  {
    id: "business-landing-pages",
    title: "Modern Business Landing Pages",
    problemSolved: "Small businesses need a credible online presence.",
    description:
      "Conversion-focused landing pages for small businesses that need a professional online presence.",
    role: "UI implementation, content structure, and interaction polish",
    techStack: ["React", "Tailwind CSS", "Framer Motion"],
    businessValue:
      "Helps visitors understand the offer quickly and move toward an inquiry.",
    status: "Landing Page",
    icon: Globe2,
    visualType: "landing",
    visualLabel: "Landing page mockup",
    visualNote: "Clear offers, strong structure, and inquiry-focused pages.",
    placeholderImage: "/images/project-business-landing.jpg",
    links: {
      details: "#project-business-landing-pages",
      live: "#replace-with-live-demo",
      github: "#replace-with-github-repo",
    },
  },
];

export const skillCategories: SkillCategory[] = [
  {
    title: "Web Systems",
    description: "End-to-end features for dashboards, portals, reports, and operations.",
    icon: Network,
    score: "Core",
    skills: ["System flows", "Dashboards", "Reports", "Portals", "Feature planning"],
  },
  {
    title: "UI Implementation",
    description: "Responsive React screens with polished states, motion, and accessibility.",
    icon: LayoutDashboard,
    score: "Frontend",
    skills: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "Responsive UI"],
  },
  {
    title: "Backend Logic",
    description: "Rules, APIs, permissions, queues, authentication, and report data.",
    icon: Database,
    score: "Backend",
    skills: ["Laravel", "PHP", "MySQL", "REST APIs", "Authentication", "Queues"],
  },
  {
    title: "HR / Payroll Systems",
    description: "Operational workflows for employees, attendance, payroll, and compliance.",
    icon: UsersRound,
    score: "Ops",
    skills: [
      "Attendance",
      "Leave",
      "Overtime",
      "Payroll review",
      "Tax reports",
    ],
  },
  {
    title: "SaaS / Multi-Tenant Systems",
    description: "Tenant-aware portals, provisioning, isolation, deployment, and operations.",
    icon: Server,
    score: "SaaS",
    skills: ["Tenant databases", "Subdomains", "Nginx", "Cloudflare", "VPS"],
  },
  {
    title: "Automation / AI-assisted Development",
    description: "Use automation to move faster while keeping requirements and code clear.",
    icon: Sparkles,
    score: "Assist",
    skills: ["Task breakdown", "Code review", "Debugging", "Documentation", "AI workflows"],
  },
];

export const processSteps: ProcessStep[] = [
  {
    step: "01",
    title: "Understand the request",
    description: "Map users, approvals, data sources, handoffs, and business outcomes.",
    icon: MessagesSquare,
  },
  {
    step: "02",
    title: "Clarify scope",
    description: "Document permissions, exceptions, computations, and reporting needs.",
    icon: ClipboardCheck,
  },
  {
    step: "03",
    title: "Design the system",
    description: "Shape models, relationships, screens, states, and API contracts.",
    icon: Network,
  },
  {
    step: "04",
    title: "Build the backend logic",
    description: "Implement focused features with clean UI and maintainable code.",
    icon: Code2,
  },
  {
    step: "05",
    title: "Test the workflow",
    description: "Run practical cases for payroll, reports, exceptions, and approvals.",
    icon: ShieldCheck,
  },
  {
    step: "06",
    title: "Deliver useful output",
    description: "Prepare release steps, write notes, and refine after feedback.",
    icon: Rocket,
  },
];

export const operatingPrinciples = [
  "Clarity before complexity",
  "Business value before decoration",
  "Maintainable code over clever code",
  "Small improvements compound",
  "Communicate early, document clearly",
];

export const systemsBuilt = [
  "Laravel Systems",
  "React Interfaces",
  "Payroll Logic",
  "SaaS Portals",
  "Bento Dashboards",
  "QR Features",
  "Reporting Tools",
  "Cute but Useful UI",
];

export const heroCards = [
  "Laravel",
  "React",
  "Payroll Logic",
  "SaaS Portals",
  "QR Workflows",
  "Reports",
];

export const contactLinks: ContactLink[] = [
  {
    label: "Email Me",
    href: `mailto:${personalInfo.email}`,
    icon: Mail,
  },
  {
    label: "View GitHub",
    href: personalInfo.github,
    icon: Github,
  },
  {
    label: "Connect on LinkedIn",
    href: personalInfo.linkedin,
    icon: Linkedin,
  },
  {
    label: "Download CV",
    href: personalInfo.resume,
    icon: FileDown,
  },
];

export const footerLinks: ContactLink[] = [
  ...contactLinks,
];

export const visualLegend = [
  { label: "Workflows", icon: Network },
  { label: "Dashboards", icon: ChartNoAxesCombined },
  { label: "Product polish", icon: Sparkles },
];
