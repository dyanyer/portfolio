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
                alt="John Rey"
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
          <motion.div
            className="fixed inset-0 z-[60] lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div
              className="absolute inset-0 bg-foreground/40 backdrop-blur-sm"
              onClick={() => setOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 260 }}
              className="absolute right-0 top-0 h-full w-[82%] max-w-sm bg-background border-l border-border p-6 flex flex-col"
            >
              <div className="flex items-center justify-between mb-10">
                <span className="font-display text-lg font-semibold">Menu</span>
                <button
                  onClick={() => setOpen(false)}
                  aria-label="Close"
                  className="h-10 w-10 inline-flex items-center justify-center rounded-full border border-border"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              <nav className="flex flex-col gap-1">
                {links.map((l, i) => (
                  <motion.a
                    key={l.href}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.05 + i * 0.05 }}
                    className="font-display text-3xl py-2 border-b border-border/60 hover:text-tan transition-colors"
                  >
                    {l.label}
                  </motion.a>
                ))}
              </nav>
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-auto inline-flex items-center justify-center rounded-full bg-primary px-5 py-3 text-primary-foreground font-medium"
              >
                Hire me
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
