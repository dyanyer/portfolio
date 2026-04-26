import { AnimatePresence, motion, useMotionValue, useSpring } from "framer-motion";
import { Mail, Menu, Moon, Sun, X } from "lucide-react";
import { useEffect, useState } from "react";

import { useTheme } from "@/components/providers/theme-context";
import { ContactSection } from "@/components/sections/ContactSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { PrinciplesSection } from "@/components/sections/PrinciplesSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { WorkSection } from "@/components/sections/WorkSection";
import { AnchorButton, Button } from "@/components/ui/button";
import { MagneticLink } from "@/components/ui/magnetic-link";
import { developer, navItems, socialLinks } from "@/data/portfolio";
import { cn } from "@/lib/utils";

function Logo() {
  return (
    <motion.a
      animate={{ scale: [0.96, 1.04, 1] }}
      className="focus-ring flex cursor-pointer items-center gap-3 rounded-full"
      href="#home"
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      <span className="stamp grid size-12 place-items-center bg-[var(--vermillion)] text-[var(--parchment)] shadow-[4px_4px_0_var(--line)]">
        <span className="font-display text-sm font-black">JR</span>
      </span>
      <span className="hidden sm:block">
        <span className="font-display block text-base font-black leading-tight text-[var(--parchment)]">
          {developer.name}
        </span>
        <span className="font-mono block text-xs text-[var(--ink-faded)]">
          Digital Edo
        </span>
      </span>
    </motion.a>
  );
}

function Navigation() {
  const [open, setOpen] = useState(false);
  const [activeId, setActiveId] = useState("home");
  const { theme, toggleTheme } = useTheme();
  const isNight = theme === "night";

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target.id) setActiveId(visible.target.id);
      },
      { rootMargin: "-35% 0px -55% 0px", threshold: [0.08, 0.18, 0.32] },
    );

    navItems.forEach((item) => {
      const section = document.getElementById(item.id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <motion.header
      animate={{ opacity: 1, y: 0 }}
      className="fixed inset-x-0 top-4 z-50 px-4"
      initial={{ opacity: 0, y: -18 }}
      transition={{ duration: 0.45 }}
    >
      <nav
        aria-label="Primary navigation"
        className="mx-auto flex max-w-7xl items-center justify-between rounded-[8px] border border-[color:var(--border)] bg-[color-mix(in_srgb,var(--bg-void)_78%,transparent)] px-3 py-2 shadow-[0_18px_60px_var(--shadow-ink)] backdrop-blur-xl"
      >
        <Logo />

        <div className="hidden items-center gap-5 lg:flex">
          {navItems.map((item) => (
            <MagneticLink
              className={cn(
                "relative flex flex-col items-center px-1 py-1 text-center",
                activeId === item.id && "text-[var(--gold)]",
              )}
              href={item.href}
              key={item.id}
            >
              <span className="text-sm font-black text-[var(--parchment)]">
                {item.label}
              </span>
              <span className="font-mono text-xs text-[var(--ink-faded)]">
                {item.labelJa}
              </span>
              {activeId === item.id ? (
                <motion.span
                  className="absolute -bottom-1 h-0.5 w-full rounded-full bg-[var(--gold)]"
                  layoutId="nav-underline"
                />
              ) : null}
            </MagneticLink>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <AnchorButton className="hidden sm:inline-flex" href="#contact" size="sm">
            Let's Talk
            <Mail aria-hidden="true" className="size-4" />
          </AnchorButton>
          <Button
            aria-label={isNight ? "Switch to light mode" : "Switch to dark mode"}
            size="icon"
            variant="secondary"
            onClick={toggleTheme}
          >
            {isNight ? (
              <Sun aria-hidden="true" className="size-4" />
            ) : (
              <Moon aria-hidden="true" className="size-4" />
            )}
          </Button>
          <Button
            aria-expanded={open}
            aria-label="Open navigation"
            className="lg:hidden"
            onClick={() => setOpen((value) => !value)}
            size="icon"
            variant="ghost"
          >
            {open ? (
              <X aria-hidden="true" className="size-5" />
            ) : (
              <Menu aria-hidden="true" className="size-5" />
            )}
          </Button>
        </div>
      </nav>

      <AnimatePresence>
        {open ? (
          <motion.aside
            animate={{ x: 0, opacity: 1 }}
            className="fixed bottom-0 right-0 top-0 z-50 w-[min(25rem,86vw)] border-l-2 border-[color:var(--sakura)] bg-[var(--bg-void)] p-6 shadow-[0_0_80px_var(--shadow-ink)] lg:hidden"
            exit={{ x: "100%", opacity: 0 }}
            initial={{ x: "100%", opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center justify-between">
              <Logo />
              <Button
                aria-label="Close navigation"
                onClick={() => setOpen(false)}
                size="icon"
                variant="ghost"
              >
                <X aria-hidden="true" className="size-5" />
              </Button>
            </div>
            <div className="mt-10 grid gap-3">
              {navItems.map((item) => (
                <a
                  className="focus-ring flex cursor-pointer items-center justify-between rounded-[8px] border border-[color:var(--border)] px-4 py-4 font-body font-black text-[var(--parchment)] transition duration-200 hover:border-[color:var(--sakura)] hover:text-[var(--sakura)]"
                  href={item.href}
                  key={item.id}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                  <span className="font-mono text-sm text-[var(--ink-faded)]">
                    {item.labelJa}
                  </span>
                </a>
              ))}
            </div>
            <div className="absolute bottom-6 left-6 right-6 border-t border-[color:var(--border)] pt-5">
              <p className="font-mono text-sm text-[var(--ink-faded)]">Social</p>
              <div className="mt-4 flex flex-wrap gap-4">
                {socialLinks.map((link) => (
                  <MagneticLink href={link.href} key={link.label}>
                    {link.label}
                  </MagneticLink>
                ))}
              </div>
            </div>
          </motion.aside>
        ) : null}
      </AnimatePresence>
    </motion.header>
  );
}

function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[var(--bg-void)] px-4 py-12">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,var(--sakura),var(--gold),transparent,var(--sakura),var(--gold),transparent)] bg-[length:200%_100%]"
        style={{ animation: "gradient-border 7s linear infinite" }}
      />
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-3">
        <div>
          <Logo />
          <p className="font-body mt-5 max-w-sm text-sm leading-7 text-[var(--ink-faded)]">
            {developer.tagline} {developer.location}.
          </p>
        </div>
        <div>
          <p className="font-mono text-sm text-[var(--gold)]">Navigation</p>
          <div className="mt-4 grid gap-2">
            {navItems.map((item) => (
              <MagneticLink href={item.href} key={item.id}>
                {item.label}・{item.labelJa}
              </MagneticLink>
            ))}
          </div>
        </div>
        <div>
          <p className="font-mono text-sm text-[var(--gold)]">Social</p>
          <div className="mt-4 grid gap-2">
            {socialLinks.map((link) => (
              <MagneticLink href={link.href} key={link.label}>
                {link.label}
              </MagneticLink>
            ))}
          </div>
        </div>
      </div>
      <div className="mx-auto mt-10 flex max-w-7xl flex-col gap-3 border-t border-[color:var(--border)] pt-6 font-mono text-sm text-[var(--ink-faded)] md:flex-row md:items-center md:justify-between">
        <p>© 2025 John Rey · Built with 心</p>
        <a className="focus-ring w-fit cursor-pointer text-[var(--sakura)]" href="#home">
          Back to top
        </a>
      </div>
    </footer>
  );
}

function CustomCursor() {
  const rawX = useMotionValue(-100);
  const rawY = useMotionValue(-100);
  const x = useSpring(rawX, { stiffness: 420, damping: 34 });
  const y = useSpring(rawY, { stiffness: 420, damping: 34 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      rawX.set(event.clientX - 5);
      rawY.set(event.clientY - 5);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [rawX, rawY]);

  return (
    <motion.div
      aria-hidden="true"
      className="custom-cursor pointer-events-none fixed left-0 top-0 z-[60] size-2.5 rounded-full bg-[var(--sakura)] mix-blend-difference"
      style={{ x, y }}
    />
  );
}

export default function App() {
  return (
    <div className="portfolio-shell">
      <CustomCursor />
      <Navigation />
      <AnimatePresence mode="wait">
        <motion.main
          key="digital-edo-page"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35 }}
        >
          <HeroSection />
          <PrinciplesSection />
          <WorkSection />
          <SkillsSection />
          <ProcessSection />
          <ContactSection />
        </motion.main>
      </AnimatePresence>
      <Footer />
    </div>
  );
}
