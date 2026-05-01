import { motion } from "framer-motion";
import { Palette, Server, Rocket, Users } from "lucide-react";
import happy from "@/assets/happy_chibi.png";
import { Sparkle } from "@/components/ui/Sparkle";

const groups = [
  {
    icon: Palette, title: "Build Interfaces", kanji: "界",
    skills: ["React", "TypeScript", "Tailwind", "Mobile UI", "Framer Motion", "shadcn/ui", "Figma to Code"],
  },
  {
    icon: Server, title: "Build Systems", kanji: "系",
    skills: ["Laravel", "PHP", "Node.js", "MySQL", "PostgreSQL", "REST APIs", "CRM / LMS flows", "Auth & RBAC"],
  },
  {
    icon: Rocket, title: "Ship & Maintain", kanji: "発",
    skills: ["Vercel", "VPS / Nginx", "Git workflows", "CI basics", "Logs & Monitoring"],
  },
  {
    icon: Users, title: "Work With Teams", kanji: "協",
    skills: ["Requirements", "Spec writing", "Code review", "Async comms", "Demoing"],
  },
];

export const SkillsSection = () => {
  return (
    <section id="skills" className="relative py-24 md:py-32 overflow-hidden noise">
      <div className="absolute inset-0 dot-paper opacity-30 mask-fade-edges pointer-events-none" />
      <div aria-hidden className="absolute top-1/3 left-1/2 -translate-x-1/2 h-[28rem] w-[28rem] rounded-full bg-tan/10 blur-3xl" />

      <div className="container relative">
        <div className="grid lg:grid-cols-12 gap-10 items-end mb-14">
          <div className="lg:col-span-8">
            <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.22em] text-tan">
              <span className="h-px w-8 bg-tan/50" />
              Toolkit — 技術
            </div>
            <h2 className="font-display mt-3 text-4xl md:text-5xl lg:text-[56px] font-bold leading-[1.02] tracking-tight text-balance">
              A toolkit built for <span className="italic text-tan-glow">shipping</span>, not just listing.
            </h2>
            <p className="mt-4 text-foreground/70 text-base md:text-lg max-w-xl leading-relaxed">
              Tools I reach for daily — chosen because they get systems out the door cleanly.
            </p>
          </div>
          <div className="lg:col-span-4 relative flex items-end justify-center">
            <Sparkle className="absolute top-2 right-1/3 animate-sparkle" size={16} />
            <Sparkle className="absolute bottom-10 left-1/4 animate-sparkle [animation-delay:-1s]" size={12} />
            <motion.img
              src={happy} alt="John Rey portfolio mascot celebrating full-stack development skills" className="h-44 w-auto object-contain drop-shadow-[0_20px_30px_rgba(0,0,0,0.3)]"
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              animate={{ rotate: [0, -3, 3, 0], y: [0, -6, 0] }}
              transition={{ rotate: { duration: 3, repeat: Infinity }, y: { duration: 4, repeat: Infinity, ease: "easeInOut" } }}
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {groups.map((g, i) => (
            <motion.div
              key={g.title}
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -4 }}
              className="group relative overflow-hidden rounded-3xl border border-border bg-card p-7 shadow-soft hover:shadow-card hover:border-tan/60 transition-[border-color,box-shadow]"
            >
              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-tan/15 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute right-5 top-5 font-mincho text-5xl text-tan/10 group-hover:text-tan/25 transition-colors leading-none select-none">
                {g.kanji}
              </div>

              <div className="relative flex items-center gap-3 mb-5">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-ink text-cream group-hover:bg-tan-gradient group-hover:text-tan-foreground transition-[background-color,color]">
                  <g.icon className="h-5 w-5" />
                </div>
                <h3 className="font-display text-2xl font-bold tracking-tight">{g.title}</h3>
              </div>
              <div className="relative flex flex-wrap gap-2">
                {g.skills.map((s) => (
                  <span
                    key={s}
                    className="rounded-full border border-border bg-background/60 backdrop-blur px-3 py-1.5 text-sm font-medium hover:border-tan hover:text-tan hover:-translate-y-0.5 transition-[border-color,color,transform] cursor-default"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
