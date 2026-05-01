import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Search, ListChecks, PencilRuler, Hammer, FlaskConical, Rocket } from "lucide-react";
import walking from "@/assets/walking_chibi.png";

const steps = [
  { n: "01", icon: Search, title: "Understand the workflow", desc: "Sit with the actual process. Who does what, when, why." },
  { n: "02", icon: ListChecks, title: "Clarify rules & edge cases", desc: "The boring questions are the ones that prevent rebuilds." },
  { n: "03", icon: PencilRuler, title: "Design feature & data flow", desc: "Sketch screens and schema together — they shape each other." },
  { n: "04", icon: Hammer, title: "Build interface & backend logic", desc: "Ship in vertical slices so feedback comes early." },
  { n: "05", icon: FlaskConical, title: "Test real scenarios", desc: "Try the messy real-life cases, not just the happy path." },
  { n: "06", icon: Rocket, title: "Deploy, document, improve", desc: "Hand over something a team can actually maintain." },
];

export const ProcessSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 80%", "end 30%"] });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="process" className="relative py-24 md:py-32 bg-warm/40 noise overflow-hidden">
      <div aria-hidden className="absolute top-20 right-0 h-72 w-72 rounded-full bg-tan/10 blur-3xl" />

      <div className="container">
        <div className="max-w-2xl mb-16">
          <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.22em] text-tan">
            <span className="h-px w-8 bg-tan/50" />
            Process — 工程
          </div>
          <h2 className="font-display mt-3 text-4xl md:text-5xl lg:text-[56px] font-bold leading-[1.02] tracking-tight text-balance">
            How I turn unclear requests into <span className="italic text-tan-glow">working systems</span>.
          </h2>
          <p className="mt-4 text-foreground/70 text-lg leading-relaxed">
            Same six steps every project — different scale, same discipline.
          </p>
        </div>

        <div ref={ref} className="relative">
          {/* Static timeline line (faint) */}
          <div className="absolute left-5 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" aria-hidden />
          {/* Animated progress line */}
          <motion.div
            style={{ height: lineHeight }}
            className="absolute left-5 md:left-1/2 top-0 w-px bg-tan-gradient md:-translate-x-px"
            aria-hidden
          />

          <div className="space-y-12 md:space-y-20">
            {steps.map((s, i) => {
              const isLeft = i % 2 === 0;
              return (
                <motion.div
                  key={s.n}
                  initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.55 }}
                  className="relative grid md:grid-cols-2 gap-6 md:gap-12"
                >
                  {/* Node */}
                  <div className="absolute left-5 md:left-1/2 top-5 -translate-x-1/2 z-10">
                    <motion.div
                      whileInView={{ scale: [0.4, 1.2, 1] }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.1 }}
                      className="relative h-11 w-11 rounded-full bg-card border border-tan/50 ring-4 ring-background flex items-center justify-center shadow-glow"
                    >
                      <s.icon className="h-4 w-4 text-tan" />
                      <span className="absolute -bottom-1.5 -right-1.5 h-5 w-5 rounded-full bg-tan-gradient text-tan-foreground font-mono text-[10px] font-bold flex items-center justify-center shadow-soft">
                        {i + 1}
                      </span>
                    </motion.div>
                  </div>

                  {/* Card content */}
                  <div className={`pl-16 md:pl-0 ${isLeft ? "md:text-right md:pr-16" : "md:col-start-2 md:pl-16"}`}>
                    <div className="font-mono text-[11px] text-tan tracking-[0.22em] mb-2">STEP {s.n}</div>
                    <h3 className="font-display text-2xl md:text-3xl font-bold leading-tight tracking-tight">{s.title}</h3>
                    <p className="mt-2 text-foreground/75 leading-relaxed max-w-md md:max-w-none md:inline-block">{s.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Walking mascot */}
        <motion.div
          initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-20 flex justify-center relative"
        >
          <div className="absolute bottom-0 h-2 w-48 rounded-full bg-tan/20 blur-md" />
          <img src={walking} alt="" className="relative h-32 w-auto object-contain animate-float drop-shadow-[0_15px_20px_rgba(0,0,0,0.3)]" />
        </motion.div>
      </div>
    </section>
  );
};
