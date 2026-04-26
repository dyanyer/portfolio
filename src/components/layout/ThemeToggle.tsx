import { Moon, Sun } from "lucide-react";
import { motion } from "framer-motion";

import { useTheme } from "@/components/providers/theme-context";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isNight = theme === "night";

  return (
    <motion.button
      aria-label={isNight ? "Switch to light mode" : "Switch to night mode"}
      className="relative grid size-10 cursor-pointer place-items-center overflow-hidden rounded-full border border-[color:var(--border)] bg-[var(--surface)] text-[var(--text)] shadow-[var(--shadow-soft)] transition-colors duration-200 hover:border-[color:var(--accent-border)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)]"
      onClick={toggleTheme}
      type="button"
      whileTap={{ scale: 0.94 }}
    >
      <motion.span
        animate={{ opacity: isNight ? 1 : 0, rotate: isNight ? 0 : -45, y: isNight ? 0 : 10 }}
        className="absolute"
        transition={{ duration: 0.22, ease: "easeOut" }}
      >
        <Moon aria-hidden="true" className="size-4" />
      </motion.span>
      <motion.span
        animate={{ opacity: isNight ? 0 : 1, rotate: isNight ? 45 : 0, y: isNight ? -10 : 0 }}
        className="absolute"
        transition={{ duration: 0.22, ease: "easeOut" }}
      >
        <Sun aria-hidden="true" className="size-4" />
      </motion.span>
    </motion.button>
  );
}
