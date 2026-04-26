import { motion, type HTMLMotionProps } from "framer-motion";
import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

export type ButtonVariant = "primary" | "ghost" | "seal" | "secondary" | "outline";
export type ButtonSize = "sm" | "md" | "lg" | "icon";

type SharedButtonProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  children: ReactNode;
};

const variants: Record<ButtonVariant, string> = {
  primary:
    "border-[color:var(--parchment)] bg-[var(--vermillion)] text-[var(--parchment)] shadow-[4px_4px_0_var(--parchment)] hover:shadow-[6px_6px_0_var(--parchment)]",
  ghost:
    "border-[color:var(--sakura)] bg-transparent text-[var(--sakura)] shadow-[4px_4px_0_color-mix(in_srgb,var(--sakura)_26%,transparent)] hover:bg-[var(--sakura)] hover:text-[var(--bg-void)]",
  seal:
    "stamp aspect-square rounded-full border-[color:var(--vermillion)] bg-[var(--vermillion)] text-[var(--parchment)] shadow-[4px_4px_0_color-mix(in_srgb,var(--line)_58%,transparent)]",
  secondary:
    "border-[color:var(--border)] bg-[var(--bg-card)] text-[var(--parchment)] shadow-[4px_4px_0_var(--border)] hover:border-[color:var(--gold)] hover:text-[var(--gold)]",
  outline:
    "border-[color:var(--gold)] bg-transparent text-[var(--gold)] shadow-[4px_4px_0_color-mix(in_srgb,var(--gold)_28%,transparent)] hover:bg-[var(--gold)] hover:text-[var(--bg-void)]",
};

const sizes: Record<ButtonSize, string> = {
  sm: "min-h-10 px-3 text-xs",
  md: "min-h-11 px-4 text-sm",
  lg: "min-h-[3.25rem] px-6 text-base",
  icon: "size-11 p-0",
};

function buttonClassName({
  variant = "primary",
  size = "md",
  className,
}: {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
} = {}) {
  return cn(
    "focus-ring inline-flex cursor-pointer items-center justify-center gap-2 rounded-[8px] border-2 font-body font-black leading-none transition-colors duration-200 disabled:pointer-events-none disabled:opacity-50",
    variants[variant],
    sizes[size],
    className,
  );
}

type ButtonProps = Omit<HTMLMotionProps<"button">, "children"> & SharedButtonProps;

export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <motion.button
      className={buttonClassName({ variant, size, className })}
      type={type}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.97, y: 1 }}
      {...props}
    >
      {children}
    </motion.button>
  );
}

type AnchorButtonProps = Omit<HTMLMotionProps<"a">, "children"> & SharedButtonProps;

export function AnchorButton({
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: AnchorButtonProps) {
  return (
    <motion.a
      className={buttonClassName({ variant, size, className })}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.97, y: 1 }}
      {...props}
    >
      {children}
    </motion.a>
  );
}
