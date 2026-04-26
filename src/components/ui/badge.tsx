import { motion, type HTMLMotionProps } from "framer-motion";
import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type BadgeVariant = "tech" | "featured" | "type" | "chapter";

type BadgeProps = Omit<HTMLMotionProps<"span">, "children"> & {
  variant?: BadgeVariant;
  tone?: "default" | "accent" | "warm";
  children: ReactNode;
};

const variantClasses: Record<BadgeVariant, string> = {
  tech: "border-[color:var(--border)] bg-[var(--bg-card)] px-2 py-1 text-xs text-[var(--parchment)]",
  featured:
    "rotate-[-2deg] border-[color:var(--vermillion)] bg-[var(--vermillion)] px-3 py-1.5 text-xs font-black text-[var(--parchment)]",
  type: "border-[color:var(--sakura)] bg-transparent px-3 py-1.5 text-xs text-[var(--sakura)]",
  chapter:
    "border-[color:var(--gold)] bg-[color-mix(in_srgb,var(--gold)_12%,transparent)] px-3 py-1.5 text-xs text-[var(--gold)]",
};

const toneMap: Record<NonNullable<BadgeProps["tone"]>, BadgeVariant> = {
  default: "tech",
  accent: "type",
  warm: "chapter",
};

export function Badge({
  className,
  variant,
  tone,
  children,
  ...props
}: BadgeProps) {
  const resolvedVariant = variant ?? (tone ? toneMap[tone] : "tech");

  return (
    <motion.span
      className={cn(
        "inline-flex w-fit cursor-default items-center rounded-[6px] border font-mono leading-none transition duration-200",
        variantClasses[resolvedVariant],
        className,
      )}
      whileHover={{ scale: 1.05 }}
      {...props}
    >
      {children}
    </motion.span>
  );
}
