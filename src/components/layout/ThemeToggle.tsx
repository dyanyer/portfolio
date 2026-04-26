import { Moon, Sparkles, Sun } from "lucide-react";
import { motion } from "framer-motion";

import { useTheme } from "@/components/providers/theme-context";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isNight = theme === "night";

  return (
    <motion.button
      aria-label={isNight ? "Switch to light mode" : "Switch to night mode"}
      className="relative h-10 w-[4.7rem] cursor-pointer overflow-hidden rounded-full border-2 border-[color:var(--line)] bg-[var(--surface-strong)] text-[var(--text)] shadow-[3px_4px_0_color-mix(in_srgb,var(--line)_10%,transparent)] transition-colors duration-200 hover:bg-[var(--cream)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--page)]"
      onClick={toggleTheme}
      type="button"
      whileTap={{ y: 2 }}
    >
      <span className="absolute inset-0 bg-[linear-gradient(90deg,var(--gold-soft),transparent_52%,var(--sky-soft))]" />
      <Sparkles
        aria-hidden="true"
        className="absolute left-3 top-1/2 size-3 -translate-y-1/2 text-[var(--gold)]"
      />
      <motion.span
        animate={{ x: isNight ? 36 : 4 }}
        className="absolute top-1 grid size-8 place-items-center rounded-full border border-[color:var(--line)] bg-[var(--sticker)] shadow-[2px_3px_0_color-mix(in_srgb,var(--line)_10%,transparent)]"
        transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
      >
        {isNight ? (
          <Moon aria-hidden="true" className="size-4 text-[var(--accent-strong)]" />
        ) : (
          <Sun aria-hidden="true" className="size-4 text-[var(--accent-strong)]" />
        )}
      </motion.span>
    </motion.button>
  );
}
