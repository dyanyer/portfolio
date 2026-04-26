import { useMemo, useState, type ReactNode } from "react";

import {
  STORAGE_KEY,
  ThemeContext,
  type Theme,
  type ThemeContextValue,
} from "@/components/providers/theme-context";

function getInitialTheme(): Theme {
  if (typeof window === "undefined") return "dark";

  return window.localStorage.getItem(STORAGE_KEY) === "light"
    ? "light"
    : "dark";
}

function applyTheme(theme: Theme) {
  document.documentElement.classList.toggle("dark", theme === "dark");
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<Theme>(() => {
    const initialTheme = getInitialTheme();

    if (typeof window !== "undefined") {
      applyTheme(initialTheme);
    }

    return initialTheme;
  });

  const value = useMemo<ThemeContextValue>(() => {
    const setTheme = (nextTheme: Theme) => {
      setThemeState(nextTheme);
      window.localStorage.setItem(STORAGE_KEY, nextTheme);
      applyTheme(nextTheme);
    };

    return {
      theme,
      setTheme,
      toggle: () => setTheme(theme === "dark" ? "light" : "dark"),
    };
  }, [theme]);

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}
