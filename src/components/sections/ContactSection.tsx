import { motion } from "framer-motion";
import {
  Mail,
  Github,
  Linkedin,
  ArrowUpRight,
  MessageCircle,
  type LucideIcon,
} from "lucide-react";
import pointing from "@/assets/mascot/pointing.png";
import { Sparkle } from "@/components/ui/Sparkle";

type ContactLink = {
  icon: LucideIcon;
  label: string;
  value: string;
  href: string;
  ariaLabel: string;
  isExternal?: boolean;
};

const contactEmail = "rebusquillojohnrey@gmail.com";

const contactLinks: ContactLink[] = [
  {
    icon: Mail,
    label: "Email Me",
    value: contactEmail,
    href: `mailto:${contactEmail}`,
    ariaLabel: `Email John Rey at ${contactEmail}`,
  },
  {
    icon: Github,
    label: "View GitHub",
    value: "github.com/dyanyer",
    href: "https://github.com/dyanyer",
    ariaLabel: "Open John Rey's GitHub profile in a new tab",
    isExternal: true,
  },
  {
    icon: Linkedin,
    label: "Connect on LinkedIn",
    value: "linkedin.com/in/dyanyer",
    href: "https://www.linkedin.com/in/dyanyer",
    ariaLabel: "Open John Rey's LinkedIn profile in a new tab",
    isExternal: true,
  },
];

export const ContactSection = () => {
  return (
    <section
      id="contact"
      className="relative overflow-hidden py-16 sm:py-20 md:py-32"
    >
      <div className="relative mx-auto box-border w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="relative box-border w-full max-w-full overflow-hidden rounded-2xl bg-ink text-cream shadow-card noise sm:rounded-[2rem] md:rounded-[2.5rem]"
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

          <div className="relative grid min-w-0 gap-8 p-4 sm:gap-10 sm:p-6 md:p-10 lg:grid-cols-12 lg:gap-10 lg:p-14">
            <div className="min-w-0 lg:col-span-7">
              <div className="inline-flex max-w-full items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-tan sm:text-xs sm:tracking-[0.22em]">
                <span className="h-px w-6 flex-shrink-0 bg-tan/50 sm:w-8" />
                Contact — 連絡
              </div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mt-3 max-w-3xl text-balance font-display text-[2.35rem] font-bold leading-[1.03] tracking-tight sm:text-5xl md:text-6xl lg:text-[68px] lg:leading-[1.02]"
              >
                Let's build something{" "}
                <span className="inline-flex items-center gap-1.5 italic text-tan-glow sm:gap-2">
                  useful
                  <Sparkle
                    size={20}
                    className="inline-block h-4 w-4 flex-shrink-0 animate-sparkle sm:h-5 sm:w-5"
                  />
                </span>
                .
              </motion.h2>
              <p className="mt-4 max-w-xl text-sm leading-relaxed text-cream/80 sm:mt-5 sm:text-base md:text-lg">
                Whether you need a business system, feature implementation,
                dashboard, or polished landing page — I can help plan and build
                a solution that fits the real need.
              </p>

              {/* Primary CTA */}
              <motion.a
                href={`mailto:${contactEmail}`}
                aria-label={`Start a conversation by emailing ${contactEmail}`}
                whileHover={{ y: -2 }}
                className="group mt-6 inline-flex min-h-12 w-full max-w-full items-center justify-center gap-2.5 rounded-full bg-tan-gradient px-5 py-3 text-sm font-medium text-tan-foreground shadow-glow transition-all hover:shadow-card focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tan focus-visible:ring-offset-2 focus-visible:ring-offset-ink sm:mt-8 sm:w-auto sm:px-6 sm:py-3.5 sm:text-base"
              >
                <MessageCircle className="h-4 w-4 flex-shrink-0" />
                <span className="truncate">Start a conversation</span>
                <ArrowUpRight className="h-4 w-4 flex-shrink-0 transition-transform group-hover:rotate-12 group-hover:translate-x-0.5" />
              </motion.a>

              <div className="mt-8 grid w-full max-w-xl gap-3 sm:mt-10 sm:gap-4">
                {contactLinks.map((link, index) => {
                  const Icon = link.icon;

                  return (
                    <motion.a
                      key={link.label}
                      href={link.href}
                      aria-label={link.ariaLabel}
                      target={link.isExternal ? "_blank" : undefined}
                      rel={link.isExternal ? "noopener noreferrer" : undefined}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.08 }}
                      whileHover={{ y: -2 }}
                      className="group flex min-h-[72px] w-full min-w-0 cursor-pointer items-center gap-3 overflow-hidden rounded-2xl border border-cream/15 bg-cream/5 p-3.5 backdrop-blur transition-all hover:border-tan/60 hover:bg-cream/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tan focus-visible:ring-offset-2 focus-visible:ring-offset-ink sm:min-h-[80px] sm:gap-4 sm:p-4 md:px-5 md:py-4"
                    >
                      <div className="inline-flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-tan-gradient text-tan-foreground shadow-glow sm:h-11 sm:w-11">
                        <Icon className="h-4.5 w-4.5 sm:h-5 sm:w-5" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="font-display text-base font-semibold leading-tight sm:text-lg md:text-xl">
                          {link.label}
                        </div>
                        <div className="mt-1 break-all font-mono text-xs leading-snug text-cream/60 sm:text-sm md:text-base">
                          {link.value}
                        </div>
                      </div>
                      <ArrowUpRight className="ml-auto h-4 w-4 flex-shrink-0 text-cream/60 transition group-hover:rotate-12 group-hover:translate-x-0.5 group-hover:text-tan sm:h-5 sm:w-5" />
                    </motion.a>
                  );
                })}
              </div>
            </div>

            {/* Mascot */}
            <div className="relative flex h-[320px] w-full max-w-full items-end justify-center overflow-hidden rounded-2xl sm:h-[420px] sm:rounded-3xl md:h-[520px] lg:col-span-5">
              <div
                aria-hidden
                className="absolute inset-0 flex items-center justify-center"
              >
                <div className="h-52 w-52 rounded-full bg-tan/25 blur-3xl sm:h-72 sm:w-72" />
              </div>
              <div
                aria-hidden
                className="absolute inset-3 rounded-2xl border border-cream/10 bg-cream/[0.03] sm:inset-6 sm:rounded-[2rem]"
              />
              <div
                aria-hidden
                className="absolute inset-8 rounded-full border border-dashed border-cream/15 animate-[spin_60s_linear_infinite] sm:inset-10"
              />
              <div
                aria-hidden
                className="absolute bottom-5 h-3 w-2/3 max-w-xs rounded-full bg-black/40 blur-md sm:bottom-6"
              />
              <Sparkle
                className="absolute left-5 top-8 z-20 animate-sparkle text-tan sm:left-6 sm:top-10"
                size={20}
              />
              <Sparkle
                className="absolute right-4 top-1/3 z-20 animate-sparkle text-tan [animation-delay:-1.2s] sm:right-2"
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
                className="relative z-10 h-full max-h-[300px] w-auto max-w-full object-contain drop-shadow-[0_30px_40px_rgba(0,0,0,0.6)] sm:max-h-[390px] md:max-h-[500px]"
                style={{ animation: "float 5s ease-in-out infinite" }}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
