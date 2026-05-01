// Intent-based response engine for the portfolio chatbot.
// To connect this to an AI API later, replace getBotResponse() with an async
// function that calls your chosen API endpoint (e.g. OpenAI, Claude, Gemini).
import {
  personalInfo,
  projects,
  skillCategories,
  processSteps,
} from "@/data/portfolio";

const intents = {
  greeting: ["hi", "hello", "hey", "good morning", "good afternoon", "good evening", "howdy"],
  skills: ["skill", "skills", "tech", "technology", "technologies", "stack", "use", "expert", "tools", "know how"],
  projects: ["project", "projects", "built", "created", "made", "portfolio", "build", "case study", "what have you"],
  experience: ["experience", "background", "career", "history", "worked", "years", "position", "role"],
  contact: ["contact", "email", "reach", "hire", "linkedin", "github", "cv", "resume", "get in touch"],
  about: ["about", "who", "introduce", "tell me", "yourself", "bio", "description"],
  process: ["process", "workflow", "approach", "methodology", "how do you work", "how you work"],
  frontend: ["frontend", "front-end", "react", "tailwind", "css", "ui", "interface", "framer"],
  backend: ["backend", "back-end", "laravel", "php", "mysql", "database", "api", "server"],
  hrpayroll: ["hr", "payroll", "attendance", "leave", "overtime", "tax", "bir", "salary", "payroll system"],
  saas: ["saas", "multi-tenant", "tenant", "subdomain", "cloud", "multi tenant"],
};

function matches(input: string, keywords: string[]): boolean {
  const lower = input.toLowerCase();
  return keywords.some((kw) => lower.includes(kw));
}

function skillsResponse(): string {
  const lines = skillCategories
    .map((c) => `• **${c.title}**: ${c.skills.join(", ")}`)
    .join("\n");
  return `Here are John Rey's skill areas:\n\n${lines}\n\nHis core stack is **Laravel + PHP** on the backend with **React + TypeScript + Tailwind CSS** on the frontend.`;
}

function projectsResponse(): string {
  const lines = projects
    .map((p) => `• **${p.title}** — ${p.problemSolved}`)
    .join("\n");
  return `John Rey has built ${projects.length} key projects:\n\n${lines}\n\nAsk me about any specific project for more details!`;
}

function experienceResponse(): string {
  return `John Rey is a **Full-Stack Web Developer** specializing in HR/payroll systems, SaaS portals, and business dashboards.\n\nHe works across the full stack — from complex Laravel backends to polished React interfaces.\n\nKey focus areas:\n• HR & payroll systems (attendance, leave, overtime, tax reports)\n• Multi-tenant SaaS architecture\n• QR-based operational workflows\n• Business landing pages and dashboards`;
}

function contactResponse(): string {
  return `You can reach John Rey through:\n\n• **Email:** ${personalInfo.email}\n• **GitHub:** ${personalInfo.github}\n• **LinkedIn:** ${personalInfo.linkedin}\n• **CV:** Available for download on the portfolio\n\nFeel free to reach out for collaborations, freelance work, or full-time opportunities!`;
}

function aboutResponse(): string {
  return `John Rey Rebusquillo is a **Full-Stack Web Developer** based in the Philippines.\n\nHe specializes in building practical systems — dashboards, HR/payroll platforms, SaaS portals, and operational tools that teams use day-to-day.\n\nHis approach is **workflow-first**: understanding the business process before writing a single line of code.`;
}

function processResponse(): string {
  const lines = processSteps
    .map((s) => `${s.step}. **${s.title}** — ${s.description}`)
    .join("\n");
  return `John Rey follows a structured development process:\n\n${lines}\n\nThis keeps every feature grounded in real problems and easy to maintain.`;
}

function hrPayrollResponse(): string {
  return `John Rey has deep experience in **HR and payroll systems**.\n\nHe built a full **HR and Payroll Management System** covering employee records, attendance, leave, overtime, payroll processing, and tax reporting.\n\nTech: Laravel, PHP, MySQL, JavaScript, Tailwind CSS.\n\nHe also built a **BIR 1601-C Payroll Tax Module** for accurate tax computation and compliance reporting.`;
}

function saasResponse(): string {
  return `John Rey designed and built a **Multi-Tenant SaaS Platform** using Laravel.\n\nKey architecture:\n• One codebase serving multiple client portals\n• Separate tenant databases for isolation\n• Subdomain-based client routing\n• Nginx + Cloudflare + VPS deployment\n• Queue-based background jobs\n\nThis provides a repeatable foundation for launching new clients quickly.`;
}

function frontendResponse(): string {
  return `On the frontend, John Rey works with:\n\n• **React + TypeScript** — component-based interfaces\n• **Tailwind CSS** — utility-first styling\n• **Framer Motion** — smooth animations\n• **Responsive UI** — mobile-first design\n\nHe builds dashboards, admin portals, landing pages, and data-heavy interfaces.`;
}

function backendResponse(): string {
  return `On the backend, John Rey works with:\n\n• **Laravel + PHP** — business logic and APIs\n• **MySQL** — relational data modeling\n• **REST APIs** — with proper authentication\n• **Queue systems** — background processing\n• **VPS deployment** — Nginx and Cloudflare\n\nHe focuses on maintainable, rule-based code for complex business workflows.`;
}

function fallbackResponse(): string {
  return `I don't have specific information about that, but you can contact John Rey directly at **${personalInfo.email}**.\n\nYou can also ask me about:\n• Skills and technologies\n• Projects he's built\n• His experience and background\n• How to contact him`;
}

export function getBotResponse(input: string): string {
  const text = input.trim();
  if (!text) return fallbackResponse();

  if (matches(text, intents.greeting)) {
    return `Hi there! 👋 I'm here to tell you all about John Rey.\n\nAsk me about his skills, projects, experience, work process, or how to get in touch. What would you like to know?`;
  }

  // More-specific intents first to avoid false positives
  if (matches(text, intents.hrpayroll)) return hrPayrollResponse();
  if (matches(text, intents.saas)) return saasResponse();
  if (matches(text, intents.frontend)) return frontendResponse();
  if (matches(text, intents.backend)) return backendResponse();

  if (matches(text, intents.skills)) return skillsResponse();
  if (matches(text, intents.projects)) return projectsResponse();
  if (matches(text, intents.experience)) return experienceResponse();
  if (matches(text, intents.contact)) return contactResponse();
  if (matches(text, intents.about)) return aboutResponse();
  if (matches(text, intents.process)) return processResponse();

  return fallbackResponse();
}

export const quickQuestions = [
  "What are your skills?",
  "What projects have you built?",
  "Tell me about your experience.",
  "How can I contact you?",
  "What's your dev process?",
];
