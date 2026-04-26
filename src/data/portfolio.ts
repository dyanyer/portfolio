import {
  CalendarDays,
  FileDown,
  Github,
  Linkedin,
  Mail,
  type LucideIcon,
} from "lucide-react";

export interface Project {
  id: string;
  title: string;
  titleJa: string;
  description: string;
  longDescription: string;
  tags: string[];
  type: "featured" | "opensource" | "client";
  accentColor: string;
  chapter: string;
}

export interface Skill {
  category: string;
  categoryJa: string;
  kanjiWatermark: string;
  items: string[];
  proficiency: number;
}

export interface Principle {
  kanji: string;
  english: string;
  japanese: string;
  description: string;
}

export interface ProcessStep {
  numeral: string;
  title: string;
  description: string;
}

export interface NavItem {
  label: string;
  labelJa: string;
  href: string;
  id: string;
}

export interface ContactMethod {
  label: string;
  value: string;
  href: string;
  icon: LucideIcon;
}

export const developer = {
  name: "John Rey",
  title: "Full-Stack Developer & Systems Architect",
  tagline: "I build systems that work, scale, and last.",
  taglineJa: "動くシステムを作る。",
  location: "Remote — Available Worldwide",
  email: "hello@johnrey.dev",
  github: "github.com/johnrey",
  calendly: "calendly.com/johnrey/intro",
  resume: "/john-rey-cv.pdf",
  available: true,
};

export const navItems: NavItem[] = [
  { label: "Home", labelJa: "ホーム", href: "#home", id: "home" },
  { label: "Work", labelJa: "作品", href: "#work", id: "work" },
  { label: "Skills", labelJa: "技術", href: "#skills", id: "skills" },
  { label: "Process", labelJa: "道", href: "#process", id: "process" },
  { label: "Contact", labelJa: "連絡", href: "#contact", id: "contact" },
];

export const projects: Project[] = [
  {
    id: "ryokan-saas",
    title: "Ryokan SaaS",
    titleJa: "旅館サース",
    description: "Multi-tenant booking system for boutique hotels.",
    longDescription:
      "Tenant-aware booking, payments, staff workflows, and guest lifecycle tools designed for boutique hospitality teams that need reliability without bloated operations.",
    tags: ["React", "Node.js", "PostgreSQL", "Stripe", "Multi-tenant"],
    type: "featured",
    accentColor: "#ff4d8d",
    chapter: "第一章",
  },
  {
    id: "torii-auth",
    title: "Torii Auth",
    titleJa: "鳥居認証",
    description: "Open source role-based auth library for Node.js.",
    longDescription:
      "A TypeScript authentication package with RBAC primitives, JWT sessions, OAuth adapters, and policy helpers for teams that need clear authorization boundaries.",
    tags: ["TypeScript", "JWT", "RBAC", "OAuth", "Open Source"],
    type: "opensource",
    accentColor: "#ffb800",
    chapter: "第二章",
  },
  {
    id: "kaihatsu-dashboard",
    title: "Kaihatsu Dashboard",
    titleJa: "開発ダッシュボード",
    description: "Real-time internal dev metrics platform.",
    longDescription:
      "Live delivery metrics, incident signals, and team health dashboards with WebSocket updates, Redis-backed events, and focused views for engineering leads.",
    tags: ["Next.js", "WebSocket", "Redis", "Recharts", "Prisma"],
    type: "client",
    accentColor: "#00d4aa",
    chapter: "第三章",
  },
  {
    id: "noren-commerce",
    title: "Noren Commerce",
    titleJa: "暖簾コマース",
    description: "Headless e-commerce for artisan shops.",
    longDescription:
      "A storefront architecture for small makers: fast search, flexible product stories, Shopify inventory sync, and checkout paths that stay calm and credible.",
    tags: ["Next.js", "Shopify API", "Tailwind", "Algolia"],
    type: "client",
    accentColor: "#e8341a",
    chapter: "第四章",
  },
  {
    id: "samurai-crm",
    title: "Samurai CRM",
    titleJa: "侍CRM",
    description: "AI-powered sales pipeline with lead scoring.",
    longDescription:
      "Pipeline automation, lead scoring, and account summaries using AI-assisted research, structured activity logs, and deployment-ready container workflows.",
    tags: ["React", "OpenAI", "LangChain", "PostgreSQL", "Docker"],
    type: "featured",
    accentColor: "#8c5cff",
    chapter: "第五章",
  },
];

export const skills: Skill[] = [
  {
    category: "Frontend",
    categoryJa: "フロントエンド",
    kanjiWatermark: "端",
    items: ["React", "TypeScript", "Next.js", "Tailwind", "Framer Motion"],
    proficiency: 94,
  },
  {
    category: "Backend",
    categoryJa: "バックエンド",
    kanjiWatermark: "基",
    items: ["Node.js", "APIs", "Auth", "Queues", "PostgreSQL"],
    proficiency: 91,
  },
  {
    category: "Cloud",
    categoryJa: "クラウド",
    kanjiWatermark: "雲",
    items: ["AWS", "Docker", "Redis", "CI/CD", "Observability"],
    proficiency: 86,
  },
  {
    category: "AI/ML",
    categoryJa: "人工知能",
    kanjiWatermark: "智",
    items: ["OpenAI", "LangChain", "RAG", "Evaluation", "Automation"],
    proficiency: 84,
  },
  {
    category: "Design",
    categoryJa: "設計",
    kanjiWatermark: "美",
    items: ["Design Systems", "UX Flows", "Dashboards", "Accessibility", "Motion"],
    proficiency: 88,
  },
  {
    category: "Systems",
    categoryJa: "構築",
    kanjiWatermark: "系",
    items: ["Architecture", "Multi-tenant", "RBAC", "Data Models", "Scalability"],
    proficiency: 93,
  },
];

export const principles: Principle[] = [
  {
    kanji: "誠実",
    english: "Integrity",
    japanese: "せいじつ",
    description: "Clear decisions, honest constraints, and software that earns trust.",
  },
  {
    kanji: "精密",
    english: "Precision",
    japanese: "せいみつ",
    description: "Interfaces, APIs, and data flows shaped with careful attention.",
  },
  {
    kanji: "実用",
    english: "Utility",
    japanese: "じつよう",
    description: "Every feature has a job and every screen supports real work.",
  },
  {
    kanji: "革新",
    english: "Innovation",
    japanese: "かくしん",
    description: "Modern tools used with restraint, purpose, and measurable value.",
  },
  {
    kanji: "協力",
    english: "Collaboration",
    japanese: "きょうりょく",
    description: "Good systems come from shared context and tight feedback loops.",
  },
  {
    kanji: "集中",
    english: "Focus",
    japanese: "しゅうちゅう",
    description: "The strongest build path is narrow, disciplined, and visible.",
  },
];

export const processSteps: ProcessStep[] = [
  {
    numeral: "一",
    title: "Understand",
    description: "Map the business rules, users, risks, and handoffs before shaping screens.",
  },
  {
    numeral: "二",
    title: "Architect",
    description: "Design the data model, boundaries, interfaces, and delivery path.",
  },
  {
    numeral: "三",
    title: "Build",
    description: "Implement focused slices with clean state, readable code, and useful defaults.",
  },
  {
    numeral: "四",
    title: "Refine",
    description: "Stress test workflows, polish interaction states, and tighten performance.",
  },
  {
    numeral: "五",
    title: "Launch",
    description: "Ship with handoff notes, monitoring expectations, and a practical next step.",
  },
];

export const techStack: string[] = [
  "React",
  "TypeScript",
  "Node.js",
  "Next.js",
  "PostgreSQL",
  "Redis",
  "Docker",
  "AWS",
  "Prisma",
  "Tailwind",
  "Framer Motion",
  "OpenAI",
  "フロントエンド",
  "バックエンド",
  "クラウド",
  "データベース",
  "API設計",
  "システム構築",
];

export const contactMethods: ContactMethod[] = [
  {
    label: "Email",
    value: developer.email,
    href: `mailto:${developer.email}`,
    icon: Mail,
  },
  {
    label: "GitHub",
    value: developer.github,
    href: `https://${developer.github}`,
    icon: Github,
  },
  {
    label: "Schedule a call",
    value: developer.calendly,
    href: `https://${developer.calendly}`,
    icon: CalendarDays,
  },
];

export const socialLinks = [
  { label: "GitHub", href: `https://${developer.github}` },
  { label: "LinkedIn", href: "https://linkedin.com/in/johnrey" },
  { label: "Email", href: `mailto:${developer.email}` },
];

export const stats = [
  { value: "5+", label: "years", labelJa: "経験" },
  { value: "30+", label: "projects", labelJa: "作品" },
  { value: "100%", label: "remote", labelJa: "リモート" },
];

export const skillMarqueeJa = [
  "フロントエンド",
  "バックエンド",
  "クラウド",
  "AI",
  "設計",
  "管理",
];

/* Compatibility exports for older unused modules kept in this repository. */
export const personalInfo = {
  name: developer.name,
  role: developer.title,
  email: developer.email,
  github: `https://${developer.github}`,
  linkedin: "https://linkedin.com/in/johnrey",
  resume: developer.resume,
};

export const aboutStats = [
  { value: "5+", label: "years building systems" },
  { value: "30+", label: "projects shipped" },
  { value: "Remote", label: "available worldwide" },
];

export const aboutHighlights = principles.slice(0, 4).map((principle) => ({
  title: principle.english,
  description: principle.description,
  icon: Mail,
}));

export const contactLinks = [
  { label: "Email Me", href: `mailto:${developer.email}`, icon: Mail },
  { label: "View GitHub", href: `https://${developer.github}`, icon: Github },
  { label: "Connect on LinkedIn", href: "https://linkedin.com/in/johnrey", icon: Linkedin },
  { label: "Download CV", href: developer.resume, icon: FileDown },
];

export const footerLinks = contactLinks;
export const systemsBuilt = techStack;
export const operatingPrinciples = principles.map((principle) => principle.english);
export const heroCards = techStack.slice(0, 6);
export const valuePoints = principles.slice(0, 4).map((principle) => ({
  title: principle.english,
  description: principle.description,
  icon: Mail,
}));
export const skillCategories = skills.map((skill) => ({
  title: skill.category,
  description: skill.items.join("・"),
  icon: Mail,
  score: `${skill.proficiency}%`,
  skills: skill.items,
}));
