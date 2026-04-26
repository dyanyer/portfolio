import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type ChipProps = {
  children: ReactNode;
  className?: string;
  variant?: "default" | "outline" | "solid" | "tan";
  size?: "sm" | "md";
};

export const Chip = ({
  children,
  className,
  variant = "default",
  size = "sm",
}: ChipProps) => {
  const base =
    "inline-flex items-center gap-1.5 rounded-full font-mono uppercase tracking-wider whitespace-nowrap transition-colors";
  const sizes = size === "sm" ? "text-[10px] px-2.5 py-1" : "text-xs px-3 py-1.5";
  const variants = {
    default: "bg-secondary text-secondary-foreground border border-transparent",
    outline:
      "border border-border bg-card/60 text-foreground/80 hover:border-tan hover:text-tan",
    solid: "bg-foreground text-background",
    tan: "bg-tan-gradient text-tan-foreground border border-transparent shadow-soft",
  } as const;
  return <span className={cn(base, sizes, variants[variant], className)}>{children}</span>;
};
