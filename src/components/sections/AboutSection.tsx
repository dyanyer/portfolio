import { motion } from "framer-motion";
import { Workflow, Code2, Wrench, TrendingUp } from "lucide-react";
import thinking from "@/assets/thinking_chibi.png";
import { Sparkle } from "@/components/ui/Sparkle";

const cards = [
  { icon: Workflow, title: "Workflow-first thinking", desc: "Map the real process before touching code." },
  { icon: Code2, title: "Clean implementation", desc: "Readable, maintainable, well-structured systems." },
  { icon: Wrench, title: "Practical features", desc: "Build what solves the actual business problem." },
  { icon: TrendingUp, title: "Continuous improvement", desc: "Iterate based on real usage, not assumptions." },
];

export const AboutSection = () => {
  return (
    <section id="about" className="relative py-24 md:py-32 noise">
      <div className="container">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Mascot card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.7 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative aspect-[4/5] max-w-sm mx-auto lg:mx-0">
              {/* Soft ambient glow */}
              <div className="absolute -inset-2 rounded-[2.4rem] bg-tan/15 blur-3xl" />
              {/* Card */}
              <div className="absolute inset-2 rounded-[2rem] bg-warm border border-border/80 shadow-card overflow-hidden noise">
                <div className="absolute inset-0 grid-paper opacity-40" />
                <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 h-32 w-2/3 rounded-full bg-tan/30 blur-3xl" />
              </div>
              <motion.img
                src={thinking} alt="John Rey full-stack developer portfolio mascot thinking" className="relative z-10 h-full w-full object-contain p-6 drop-shadow-[0_20px_30px_rgba(0,0,0,0.3)]"
                animate={{ y: [0, -8, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              />

              {/* Floating polaroid sticker */}
              <motion.div
                initial={{ opacity: 0, rotate: 0, y: 10 }}
                whileInView={{ opacity: 1, rotate: 6, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, type: "spring", stiffness: 180 }}
                className="absolute -top-3 -right-3 z-20 rounded-2xl bg-card border border-border px-3 py-2 shadow-card"
              >
                <div className="flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" /> Now
                </div>
                <div className="font-display text-sm font-semibold mt-0.5">deep work mode</div>
              </motion.div>

              {/* Bottom corner sticker */}
              <motion.div
                initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ delay: 0.5, type: "spring", stiffness: 180 }}
                className="absolute -bottom-4 -left-2 z-20 rounded-2xl bg-ink text-cream border border-border/40 p-3 shadow-card -rotate-[6deg]"
              >
                <div className="font-mincho text-2xl leading-none">集中</div>
                <div className="font-mono text-[10px] uppercase tracking-wider text-cream/60 mt-1">focus</div>
              </motion.div>

              <Sparkle className="absolute top-8 -left-3 z-20 animate-sparkle" size={16} />
            </div>
          </motion.div>

          {/* Copy + grid */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
              className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.22em] text-tan"
            >
              <span className="h-px w-8 bg-tan/50" />
              About — 紹介
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.55 }}
              className="font-display mt-3 text-4xl md:text-5xl lg:text-[56px] font-bold leading-[1.02] tracking-tight text-balance"
            >
              A developer brand with personality and{" "}
              <span className="italic text-tan-glow">practical thinking</span>.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.15 }}
              className="mt-6 text-foreground/75 text-lg max-w-xl leading-relaxed text-pretty"
            >
              I'm John Rey Rebusquillo, a full-stack software developer focused
              on building useful digital systems for real business operations.
              My work includes HR and payroll systems, CRM platforms, LMS
              portals, chatbot tools, dashboards, SaaS features, mobile
              applications, and web applications.
            </motion.p>

            <div className="mt-10 grid sm:grid-cols-2 gap-4">
              {cards.map((c, i) => (
                <motion.div
                  key={c.title}
                  initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.45 }}
                  whileHover={{ y: -4 }}
                  className="group relative overflow-hidden rounded-2xl border border-border bg-card p-5 shadow-soft hover:shadow-card hover:border-tan/60 transition-[border-color,box-shadow]"
                >
                  <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-tan/10 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative inline-flex h-11 w-11 items-center justify-center rounded-xl bg-secondary text-tan mb-3 group-hover:bg-tan-gradient group-hover:text-tan-foreground transition-[background-color,color]">
                    <c.icon className="h-5 w-5" />
                  </div>
                  <div className="relative font-display text-lg font-semibold leading-tight">{c.title}</div>
                  <div className="relative text-sm text-muted-foreground mt-1.5 leading-relaxed">{c.desc}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
