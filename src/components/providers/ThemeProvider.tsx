import {
  useEffect,
  useLayoutEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

import {
  STORAGE_KEY,
  ThemeContext,
  type Theme,
  type ThemeContextValue,
} from "@/components/providers/theme-context";

function getSystemTheme(): Theme {
  if (typeof window === "undefined") return "night";
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "night"
    : "light";
}

function getInitialTheme(): Theme {
  if (typeof window === "undefined") return "night";

  const storedTheme = window.localStorage.getItem(STORAGE_KEY);
  if (storedTheme === "light" || storedTheme === "night") return storedTheme;

  return getSystemTheme();
}

function applyTheme(theme: Theme) {
  const root = document.documentElement;

  root.classList.remove("theme-light", "theme-night", "dark");
  root.classList.add(theme === "night" ? "theme-night" : "theme-light");
  if (theme === "night") root.classList.add("dark");

  root.dataset.theme = theme;
  root.style.colorScheme = theme === "night" ? "dark" : "light";
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<Theme>(getInitialTheme);

  useLayoutEffect(() => {
    applyTheme(theme);
  }, [theme]);

  useEffect(() => {
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = () => {
      const storedTheme = window.localStorage.getItem(STORAGE_KEY);
      if (storedTheme === "light" || storedTheme === "night") return;
      setThemeState(getSystemTheme());
    };

    media.addEventListener("change", handleChange);
    return () => media.removeEventListener("change", handleChange);
  }, []);

  const value = useMemo<ThemeContextValue>(() => {
    const setTheme = (nextTheme: Theme) => {
      window.localStorage.setItem(STORAGE_KEY, nextTheme);
      setThemeState(nextTheme);
    };

    return {
      theme,
      setTheme,
      toggleTheme: () => setTheme(theme === "night" ? "light" : "night"),
    };
  }, [theme]);

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}
