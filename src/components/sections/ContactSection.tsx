import { motion } from "framer-motion";
import {
  Mail,
  Github,
  Linkedin,
  ArrowUpRight,
  MessageCircle,
} from "lucide-react";
import pointing from "@/assets/mascot/pointing.png";
import { Sparkle } from "@/components/ui/Sparkle";

const links = [
  {
    icon: Mail,
    label: "Email Me",
    value: "rebusquilojohnrey@gmail.com",
    href: "mailto:rebusquillojohnrey@gmail.com",
  },
  {
    icon: Github,
    label: "View GitHub",
    value: "github.com/dyanyer",
    href: "https://github.com/dyanyer",
  },
  {
    icon: Linkedin,
    label: "Connect on LinkedIn",
    value: "linkedin.com/in/dyanyer",
    href: "https://www.linkedin.com/in/dyanyer",
  },
];

export const ContactSection = () => {
  return (
    <section id="contact" className="relative py-24 md:py-32 overflow-hidden">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="relative rounded-[2rem] md:rounded-[2.5rem] bg-ink text-cream overflow-hidden shadow-card noise"
        >
          {/* Pattern + glows */}
          <div className="absolute inset-0 grid-paper opacity-[0.07]" />
          <div className="absolute -top-10 left-0 right-0 h-32 seigaiha opacity-30" />
          <motion.div
            aria-hidden
            className="absolute -top-24 -right-24 h-80 w-80 rounded-full bg-tan/40 blur-3xl"
            animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.7, 0.5] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />
          <div className="absolute -bottom-24 -left-10 h-72 w-72 rounded-full bg-tan/15 blur-3xl" />

          {/* Vertical kanji decoration */}
          <div
            aria-hidden
            className="hidden md:flex absolute right-6 top-6 flex-col items-center gap-2 font-mincho text-2xl text-cream/15 leading-none select-none"
          >
            <span>始</span>
            <span>め</span>
            <span>る</span>
          </div>

          <div className="relative grid lg:grid-cols-12 gap-10 p-8 md:p-14">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.22em] text-tan">
                <span className="h-px w-8 bg-tan/50" />
                Contact — 連絡
              </div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="font-display mt-3 text-4xl md:text-6xl lg:text-[68px] font-bold leading-[1.02] tracking-tight text-balance"
              >
                Let's build something{" "}
                <span className="italic text-tan-glow inline-flex items-center gap-2">
                  useful
                  <Sparkle size={20} className="inline-block animate-sparkle" />
                </span>
                .
              </motion.h2>
              <p className="mt-5 text-cream/80 text-lg max-w-xl leading-relaxed">
                Whether you need a business system, feature implementation,
                dashboard, or polished landing page — I can help plan and build
                a solution that fits the real need.
              </p>

              {/* Primary CTA */}
              <motion.a
                href="mailto:hello@johnrey.dev"
                whileHover={{ y: -2 }}
                className="group mt-8 inline-flex items-center gap-2.5 rounded-full bg-tan-gradient text-tan-foreground px-6 py-3.5 font-medium shadow-glow transition-all hover:shadow-card"
              >
                <MessageCircle className="h-4 w-4" />
                Start a conversation
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:rotate-12 group-hover:translate-x-0.5" />
              </motion.a>

              <div className="mt-10 grid sm:grid-cols-1 gap-3 max-w-xl">
                {links.map((l, i) => (
                  <motion.a
                    key={l.label}
                    href={l.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    whileHover={{ x: 4 }}
                    className="group flex items-center gap-4 rounded-2xl border border-cream/15 bg-cream/5 backdrop-blur px-5 py-4 hover:bg-cream/10 hover:border-tan/60 transition-all"
                  >
                    <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-tan-gradient text-tan-foreground shadow-glow">
                      <l.icon className="h-5 w-5" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-display text-lg font-semibold leading-tight">
                        {l.label}
                      </div>
                      <div className="text-sm text-cream/60 font-mono truncate">
                        {l.value}
                      </div>
                    </div>
                    <ArrowUpRight className="h-5 w-5 text-cream/60 transition group-hover:text-tan group-hover:rotate-12 group-hover:translate-x-0.5 shrink-0" />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Mascot */}
            <div className="lg:col-span-5 relative flex items-end justify-center min-h-[320px]">
              <div
                aria-hidden
                className="absolute inset-0 flex items-center justify-center"
              >
                <div className="h-72 w-72 rounded-full bg-tan/25 blur-3xl" />
              </div>
              <div
                aria-hidden
                className="absolute inset-6 rounded-[2rem] border border-cream/10 bg-cream/[0.03]"
              />
              <div
                aria-hidden
                className="absolute inset-10 rounded-full border border-dashed border-cream/15 animate-[spin_60s_linear_infinite]"
              />
              <div
                aria-hidden
                className="absolute bottom-6 h-3 w-2/3 rounded-full bg-black/40 blur-md"
              />
              <Sparkle
                className="absolute top-10 left-6 z-20 animate-sparkle text-tan"
                size={20}
              />
              <Sparkle
                className="absolute top-1/3 right-2 z-20 animate-sparkle [animation-delay:-1.2s] text-tan"
                size={14}
              />
              <motion.img
                src={pointing}
                alt="Chibi pointing"
                initial={{ opacity: 0, scale: 0.85, y: 30 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                animate={{ y: [0, -8, 0] }}
                className="relative z-10 max-h-[420px] w-auto object-contain drop-shadow-[0_30px_40px_rgba(0,0,0,0.6)]"
                style={{ animation: "float 5s ease-in-out infinite" }}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
