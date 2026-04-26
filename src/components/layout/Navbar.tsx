import { AnimatePresence, motion } from "framer-motion";
import { Code2, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

import { ThemeToggle } from "@/components/layout/ThemeToggle";
import { navItems, personalInfo } from "@/data/portfolio";
import { cx } from "@/lib/utils";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeId, setActiveId] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 8);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target.id) setActiveId(visible.target.id);
      },
      {
        rootMargin: "-36% 0px -56% 0px",
        threshold: [0.05, 0.2, 0.4],
      },
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
      className="fixed inset-x-0 top-3 z-50 px-3 sm:top-4 sm:px-4"
      initial={{ opacity: 0, y: -16 }}
      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
    >
      <nav
        aria-label="Primary navigation"
        className={cx(
          "mx-auto flex max-w-7xl items-center justify-between rounded-full border border-[color:var(--border)] px-3 py-2 transition duration-200 sm:px-4",
          isScrolled
            ? "bg-[color-mix(in_srgb,var(--surface)_88%,transparent)] shadow-[var(--shadow-soft)] backdrop-blur-xl"
            : "bg-[color-mix(in_srgb,var(--surface)_70%,transparent)] backdrop-blur-lg",
        )}
      >
        <a
          className="flex min-w-0 cursor-pointer items-center gap-3 rounded-full pr-2 text-[var(--text)] outline-none transition-colors duration-200 hover:text-[var(--accent-strong)] focus-visible:ring-2 focus-visible:ring-[color:var(--accent)]"
          href="#home"
          onClick={() => setIsOpen(false)}
        >
          <span className="grid size-10 shrink-0 place-items-center rounded-full border border-[color:var(--border)] bg-[var(--accent-soft)] text-[var(--accent-strong)]">
            <Code2 aria-hidden="true" className="size-4" />
          </span>
          <span className="min-w-0">
            <span className="block truncate text-sm font-semibold leading-5">
              {personalInfo.name}
            </span>
            <span className="block truncate text-xs text-[var(--muted)]">
              {personalInfo.role}
            </span>
          </span>
        </a>

        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <a
              className={cx(
                "cursor-pointer rounded-full px-3 py-2 text-sm font-medium text-[var(--muted)] transition-colors duration-200 hover:bg-[var(--accent-soft)] hover:text-[var(--text-strong)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)]",
                activeId === item.id &&
                  "bg-[var(--accent-soft)] text-[var(--accent-strong)]",
              )}
              href={item.href}
              key={item.id}
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <a
            className="hidden h-10 cursor-pointer items-center rounded-full border border-[color:var(--accent-border)] bg-[var(--accent-soft)] px-4 text-sm font-semibold text-[var(--accent-strong)] transition duration-200 hover:-translate-y-0.5 hover:bg-[var(--surface)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)] sm:inline-flex"
            href="#contact"
          >
            Start a Project
          </a>
          <button
            aria-expanded={isOpen}
            aria-label="Toggle navigation menu"
            className="grid size-10 cursor-pointer place-items-center rounded-full border border-[color:var(--border)] bg-[var(--surface)] text-[var(--text)] shadow-[var(--shadow-soft)] transition-colors duration-200 hover:border-[color:var(--accent-border)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)] lg:hidden"
            onClick={() => setIsOpen((value) => !value)}
            type="button"
          >
            {isOpen ? (
              <X aria-hidden="true" className="size-5" />
            ) : (
              <Menu aria-hidden="true" className="size-5" />
            )}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen ? (
          <motion.div
            animate={{ opacity: 1, y: 0, scale: 1 }}
            className="mx-auto mt-2 max-w-7xl overflow-hidden rounded-3xl border border-[color:var(--border)] bg-[color-mix(in_srgb,var(--surface)_94%,transparent)] p-2 shadow-[var(--shadow-strong)] backdrop-blur-xl lg:hidden"
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          >
            {navItems.map((item) => (
              <a
                className={cx(
                  "block cursor-pointer rounded-2xl px-4 py-3 text-base font-semibold text-[var(--muted-strong)] transition-colors duration-200 hover:bg-[var(--accent-soft)] hover:text-[var(--text-strong)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)]",
                  activeId === item.id &&
                    "bg-[var(--accent-soft)] text-[var(--accent-strong)]",
                )}
                href={item.href}
                key={item.id}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.header>
  );
}
