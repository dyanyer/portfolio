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
    title: "Business-first development",
    description: "Workflow clarity before UI decoration.",
    icon: BriefcaseBusiness,
  },
  {
    title: "Clean Laravel architecture",
    description: "Readable backend flows for rules and reports.",
    icon: Code2,
  },
  {
    title: "Practical UI implementation",
    description: "Interfaces built for repeated daily use.",
    icon: LayoutDashboard,
  },
  {
    title: "Deployment-aware workflows",
    description: "Hosting, release, and debugging considered early.",
    icon: Cloud,
  },
];

export const aboutHighlights: AboutHighlight[] = [
  {
    title: "Clarify the workflow",
    description: "Start with people, approvals, data, and the real business outcome.",
    icon: MessagesSquare,
  },
  {
    title: "Build for real users",
    description: "Design states and flows around the tasks teams actually repeat.",
    icon: UsersRound,
  },
  {
    title: "Keep code maintainable",
    description: "Favor clear rules, readable structure, and predictable feature paths.",
    icon: Wrench,
  },
  {
    title: "Improve through feedback",
    description: "Use real scenarios to refine the parts that cause friction.",
    icon: BadgeCheck,
  },
];

export const aboutStats = [
  { value: "Full-stack", label: "frontend to deployment" },
  { value: "Business ops", label: "HR, payroll, reports" },
  { value: "Practical UI", label: "clear screens and states" },
];

export const projects: Project[] = [
  {
    id: "hr-payroll",
    title: "HR and Payroll Management System",
    problemSolved: "Manual HR workflows and scattered employee records.",
    description:
      "A system for managing employees, attendance, leave, overtime, payroll processing, and reporting workflows.",
    techStack: ["Laravel", "PHP", "MySQL", "JavaScript", "Tailwind CSS"],
    businessValue:
      "Centralizes HR operations so teams can review payroll inputs with less confusion.",
    status: "System Feature",
    icon: UsersRound,
    visualType: "dashboard",
    visualLabel: "HR dashboard mockup",
    visualNote: "Replace with /images/project-hr-dashboard.jpg",
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
    techStack: ["Laravel", "MySQL", "Nginx", "Cloudflare", "VPS", "Queues"],
    businessValue:
      "Creates a repeatable platform foundation with tenant isolation and cleaner provisioning.",
    status: "Architecture",
    icon: Server,
    visualType: "architecture",
    visualLabel: "SaaS architecture mockup",
    visualNote: "Replace with /images/project-saas-architecture.jpg",
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
    techStack: ["Laravel", "MySQL", "QR Code", "Attendance Integration"],
    businessValue:
      "Improves transparency and control over employee meal benefit usage.",
    status: "System Feature",
    icon: ScanLine,
    visualType: "qr",
    visualLabel: "QR validation mockup",
    visualNote: "Replace with /images/project-qr-validation.jpg",
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
    techStack: ["Laravel", "PHP", "MySQL", "Payroll Tax Logic"],
    businessValue:
      "Gives payroll teams a clearer way to validate tax-related data before reports are used.",
    status: "Compliance",
    icon: FileCode2,
    visualType: "report",
    visualLabel: "Reporting dashboard mockup",
    visualNote: "Replace with /images/project-tax-report.jpg",
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
    techStack: ["React", "Tailwind CSS", "Framer Motion"],
    businessValue:
      "Helps visitors understand the offer quickly and move toward an inquiry.",
    status: "Landing Page",
    icon: Globe2,
    visualType: "landing",
    visualLabel: "Landing page mockup",
    visualNote: "Replace with /images/project-business-landing.jpg",
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
    title: "Build Interfaces",
    description: "Responsive product screens, dashboards, and UI states.",
    icon: LayoutDashboard,
    score: "92%",
    skills: ["React", "TypeScript", "Tailwind CSS", "shadcn/ui", "Framer Motion"],
  },
  {
    title: "Build Systems",
    description: "Business rules, authentication, APIs, queues, and reports.",
    icon: Database,
    score: "90%",
    skills: ["Laravel", "PHP", "MySQL", "REST APIs", "Authentication", "Queues"],
  },
  {
    title: "Ship and Maintain",
    description: "Source control, VPS deployment, debugging, and documentation.",
    icon: Rocket,
    score: "86%",
    skills: ["Git", "GitHub", "VPS", "Nginx", "Cloudflare", "Debugging", "Documentation"],
  },
  {
    title: "Work With Teams",
    description: "Requirements, breakdowns, communication, and coordination.",
    icon: UsersRound,
    score: "88%",
    skills: [
      "Requirements clarification",
      "Task breakdown",
      "Communication",
      "Coordination",
    ],
  },
];

export const processSteps: ProcessStep[] = [
  {
    step: "01",
    title: "Understand the workflow",
    description: "Map users, approvals, data sources, handoffs, and business outcomes.",
    icon: MessagesSquare,
  },
  {
    step: "02",
    title: "Clarify rules and edge cases",
    description: "Document permissions, exceptions, computations, and reporting needs.",
    icon: ClipboardCheck,
  },
  {
    step: "03",
    title: "Design the data and feature flow",
    description: "Shape models, relationships, screens, states, and API contracts.",
    icon: Network,
  },
  {
    step: "04",
    title: "Build the interface and backend logic",
    description: "Implement focused features with clean UI and maintainable code.",
    icon: Code2,
  },
  {
    step: "05",
    title: "Test real scenarios",
    description: "Run practical cases for payroll, reports, exceptions, and approvals.",
    icon: ShieldCheck,
  },
  {
    step: "06",
    title: "Deploy, document, and improve",
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
  "SaaS Platforms",
  "Dashboards",
  "QR Features",
  "Reporting Tools",
];

export const heroCards = [
  "Payroll Ready",
  "Attendance Synced",
  "Reports Clean",
  "Tenant Active",
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
];

export const footerLinks: ContactLink[] = [
  ...contactLinks,
  {
    label: "Resume",
    href: personalInfo.resume,
    icon: FileDown,
  },
];

export const visualLegend = [
  { label: "Workflows", icon: Network },
  { label: "Dashboards", icon: ChartNoAxesCombined },
  { label: "Product polish", icon: Sparkles },
];
