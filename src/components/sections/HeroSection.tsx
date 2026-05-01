import { motion } from "framer-motion";
import { ArrowRight, Mail, Sparkles } from "lucide-react";
import { HeroMascotAnimation } from "@/components/mascot/HeroMascotAnimation";
import { Sparkle } from "@/components/ui/Sparkle";

const floatChips = [
  { label: "Laravel", x: "-10%", y: "12%", delay: 0.2, duration: 3.2 },
  { label: "React", x: "94%", y: "6%", delay: 0.32, duration: 4.1 },
  { label: "TypeScript", x: "-18%", y: "58%", delay: 0.44, duration: 3.7 },
  { label: "SaaS", x: "98%", y: "44%", delay: 0.56, duration: 4.5 },
  { label: "Dashboards", x: "82%", y: "84%", delay: 0.68, duration: 3.9 },
];

export const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative pt-28 md:pt-36 pb-20 md:pb-28 overflow-hidden noise"
    >
      {/* Backdrop layers */}
      <div className="absolute inset-0 grid-paper opacity-[0.22] mask-fade-edges pointer-events-none" />
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border to-transparent"
      />
      <motion.div
        aria-hidden
        className="absolute -top-40 -left-32 h-[28rem] w-[28rem] rounded-full bg-tan/20 blur-[110px] pointer-events-none"
        animate={{ y: [0, 30, 0], x: [0, 10, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="absolute -bottom-40 -right-20 h-[32rem] w-[32rem] rounded-full bg-accent/15 blur-[120px] pointer-events-none"
        animate={{ y: [0, -25, 0], x: [0, -15, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Vertical kanji ornament */}
      <div
        aria-hidden
        className="hidden md:flex absolute right-4 top-32 flex-col items-center gap-3 font-mincho text-[28px] text-tan/15 select-none leading-none"
      >
        <span>東</span>
        <span>京</span>
        <span>夜</span>
      </div>

      <div className="container relative">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          {/* Text */}
          <div className="lg:col-span-7 order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-card/70 backdrop-blur-md px-3.5 py-1.5 text-xs font-medium shadow-soft"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
              </span>
              <span className="text-foreground/90">
                Available · freelance & system work
              </span>
              <span className="font-mono text-[10px] text-tan ml-1">2026</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.1 }}
              className="font-display mt-6 text-balance text-[44px] sm:text-6xl lg:text-[78px] font-bold leading-[0.98] tracking-tight"
            >
              John Rey builds web systems with{" "}
              <span className="relative inline-block">
                <span className="italic text-tan-glow">clarity</span>
                <svg
                  className="absolute -bottom-2 left-0 w-full"
                  viewBox="0 0 200 12"
                  fill="none"
                  aria-hidden
                >
                  <path
                    d="M2 9 C 60 2, 140 2, 198 9"
                    stroke="hsl(var(--tan))"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
              , <span className="italic text-tan-glow">structure</span> &{" "}
              <span className="italic text-tan-glow">personality</span>.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.28 }}
              className="mt-6 text-base sm:text-lg text-foreground/80 max-w-xl text-pretty leading-relaxed"
            >
              Full-Stack Developer building Laravel, React, SaaS, HR, payroll,
              and business web applications. I turn messy business workflows
              into clean, maintainable products that teams use every day.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.42 }}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <a
                href="#work"
                className="group relative inline-flex items-center gap-2 rounded-full bg-tan-gradient px-6 py-3.5 font-medium text-tan-foreground shadow-glow transition-[transform,box-shadow] hover:-translate-y-0.5 hover:shadow-card focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background"
              >
                <span className="relative z-10">View Selected Work</span>
                <ArrowRight className="relative z-10 h-4 w-4 transition-transform group-hover:translate-x-1" />
                <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 bg-white/15 transition-opacity" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card/70 backdrop-blur px-6 py-3.5 font-medium transition-[transform,border-color,color] hover:-translate-y-0.5 hover:border-tan hover:text-tan"
              >
                <Mail className="h-4 w-4" /> Say hi
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-xs text-muted-foreground font-mono uppercase tracking-[0.18em]"
            >
              <span className="flex items-center gap-2">
                <Sparkles className="h-3.5 w-3.5 text-tan" /> 4+ yrs shipping
              </span>
              <span className="hidden sm:block h-px w-10 bg-border" />
              <span>Based in PH · Remote</span>
              <span className="hidden sm:block h-px w-10 bg-border" />
              <span className="text-tan/80">// open to ideas</span>
            </motion.div>
          </div>

          {/* Mascot */}
          <div className="lg:col-span-5 order-1 lg:order-2 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="relative aspect-square max-w-[420px] sm:max-w-[460px] mx-auto"
            >
              {/* Layered glow */}
              <div className="absolute inset-10 rounded-full bg-tan/40 blur-3xl opacity-60 dark:opacity-80 animate-pulse-glow" />
              {/* Disc bg */}
              <div className="absolute inset-6 rounded-full bg-warm border border-border/80 shadow-card noise overflow-hidden">
                <div className="absolute inset-0 dot-paper opacity-50" />
              </div>
              {/* Rotating dashed ring */}
              <div className="absolute inset-0 rounded-full border border-dashed border-tan/40 animate-[spin_42s_linear_infinite]" />
              {/* Inner subtle ring */}
              <div className="absolute inset-3 rounded-full border border-tan/10" />

              {/* Decorative kanji stamp */}
              <div className="absolute -left-1 top-6 z-20 hidden sm:flex h-14 w-14 items-center justify-center rounded-full bg-tan-gradient text-tan-foreground font-mincho text-2xl shadow-card rotate-[-12deg]">
                夢
              </div>

              {/* Sparkles */}
              <Sparkle
                className="absolute top-2 right-12 z-20 animate-sparkle"
                size={18}
              />
              <Sparkle
                className="absolute bottom-10 left-3 z-20 animate-sparkle [animation-delay:-1.5s]"
                size={12}
              />
              <Sparkle
                className="absolute top-1/2 -right-2 z-20 animate-sparkle [animation-delay:-0.8s]"
                size={14}
              />

              {/* Mascot */}
              <motion.div
                className="relative z-10 flex h-full w-full items-center justify-center"
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut" }}
              >
                <HeroMascotAnimation className="h-full w-full drop-shadow-[0_30px_40px_rgba(0,0,0,0.35)]" />
              </motion.div>

              {/* Speech bubble */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{
                  delay: 0.9,
                  type: "spring",
                  stiffness: 220,
                  damping: 16,
                }}
                className="absolute -top-2 right-0 sm:right-2 z-30 rounded-2xl rounded-br-sm bg-card border border-border px-3.5 py-2 shadow-card"
              >
                <span className="font-display text-sm">
                  こんにちは <span className="text-tan">✦</span>
                </span>
              </motion.div>

              {/* Floating chips */}
              {floatChips.map((c) => (
                <motion.div
                  key={c.label}
                  initial={{ opacity: 0, scale: 0.6, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ delay: c.delay, duration: 0.5 }}
                  style={{ left: c.x, top: c.y }}
                  className="absolute z-20"
                >
                  <motion.div
                    animate={{ y: [0, -8, 0] }}
                    transition={{
                      duration: c.duration,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    whileHover={{ scale: 1.08, y: -4 }}
                    className="rounded-full border border-border/80 bg-card/95 backdrop-blur px-3 py-1.5 text-[11px] font-mono shadow-soft whitespace-nowrap cursor-default"
                  >
                    <span className="text-tan mr-1">●</span>
                    {c.label}
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
