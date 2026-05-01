import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import chibiLogo from "@/assets/mascot/logo.png";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#work", label: "Work" },
  { href: "#skills", label: "Skills" },
  { href: "#process", label: "Process" },
  { href: "#contact", label: "Contact" },
];

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let rafId: number;
    const onScroll = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        setScrolled((prev) => {
          const next = window.scrollY > 12;
          return prev === next ? prev : next;
        });
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-[padding] duration-300 ${scrolled ? "py-2" : "py-4"}`}
      >
        <div className="container">
          <div
            className={`flex items-center justify-between rounded-full border border-border/70 bg-background/75 backdrop-blur-xl px-3 pl-4 transition-shadow duration-300 ${scrolled ? "shadow-card" : "shadow-soft"}`}
          >
            <a href="#home" className="flex items-center gap-2.5 py-2">
              <img
                src={chibiLogo}
                alt="John Rey portfolio logo"
                className="h-9 w-9 shrink-0 object-contain"
              />
              <span className="font-display text-[17px] font-semibold leading-none">
                John Rey
              </span>
            </a>

            <nav className="hidden lg:flex items-center gap-1">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="relative px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors group"
                >
                  {l.label}
                  <span className="absolute inset-x-3 -bottom-0.5 h-px scale-x-0 bg-tan transition-transform duration-300 group-hover:scale-x-100" />
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-2 py-1.5 pr-1.5">
              <ThemeToggle />
              <a
                href="#contact"
                className="hidden md:inline-flex items-center gap-1.5 rounded-full bg-tan-gradient px-4 py-2 text-sm font-medium text-tan-foreground shadow-glow transition hover:-translate-y-0.5"
              >
                Hire me <span className="text-tan-foreground/70">→</span>
              </a>
              <button
                className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card/70"
                onClick={() => setOpen(true)}
                aria-label="Open menu"
              >
                <Menu className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              key="overlay"
              className="fixed inset-0 z-[60] lg:hidden bg-black/60 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setOpen(false)}
            />

            <motion.aside
              key="drawer"
              className="fixed right-0 top-0 z-[70] lg:hidden flex h-dvh w-[86vw] max-w-[420px] flex-col overflow-hidden rounded-l-3xl border-l border-tan/20 bg-background/95 shadow-[0_0_60px_rgba(245,158,66,0.15)] backdrop-blur-xl"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 280 }}
            >
              <div
                className="flex items-center justify-between px-6 pb-4"
                style={{ paddingTop: "max(1.5rem, env(safe-area-inset-top))" }}
              >
                <div className="flex items-center gap-3">
                  <img
                    src={chibiLogo}
                    alt="John Rey portfolio logo"
                    className="h-11 w-11 shrink-0 object-contain"
                  />
                  <span className="font-display text-xl font-bold text-foreground">Menu</span>
                </div>
                <button
                  onClick={() => setOpen(false)}
                  aria-label="Close menu"
                  className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-tan/40 bg-tan/10 text-foreground shadow-[0_0_24px_rgba(245,158,66,0.2)] transition hover:bg-tan/20"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <nav className="mt-2 flex-1 overflow-y-auto px-6">
                {links.map((l, i) => (
                  <motion.a
                    key={l.href}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    initial={{ x: 24, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.06 + i * 0.04, duration: 0.3, ease: "easeOut" }}
                    className="block border-b border-border/70 py-3.5 font-display text-2xl font-bold leading-tight text-foreground transition-colors hover:text-tan active:scale-[0.98] sm:text-3xl"
                  >
                    {l.label}
                  </motion.a>
                ))}
              </nav>

              <div
                className="px-6 pt-6"
                style={{ paddingBottom: "max(1.5rem, env(safe-area-inset-bottom))" }}
              >
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="flex w-full items-center justify-center rounded-full bg-tan-gradient px-6 py-4 text-base font-semibold text-[#1a120d] shadow-[0_0_30px_rgba(245,158,66,0.2)] transition hover:-translate-y-0.5"
                >
                  Hire me
                </a>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
