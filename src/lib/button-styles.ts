import { cx } from "@/lib/utils";

export type ButtonVariant = "primary" | "secondary" | "ghost" | "outline";
export type ButtonSize = "sm" | "md" | "lg";

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "border-[color:var(--accent)] bg-[var(--accent)] text-white shadow-[0_18px_42px_var(--glow)] hover:bg-[var(--accent-strong)] hover:border-[color:var(--accent-strong)]",
  secondary:
    "border-[color:var(--border)] bg-[var(--surface)] text-[var(--text)] shadow-[var(--shadow-soft)] hover:border-[color:var(--accent-border)] hover:bg-[var(--surface-strong)]",
  ghost:
    "border-transparent bg-transparent text-[var(--muted-strong)] hover:bg-[var(--accent-soft)] hover:text-[var(--text-strong)]",
  outline:
    "border-[color:var(--border-strong)] bg-transparent text-[var(--text)] hover:border-[color:var(--accent-border)] hover:bg-[var(--accent-soft)]",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "h-10 gap-2 px-3 text-xs",
  md: "h-11 gap-2.5 px-4 text-sm",
  lg: "h-12 gap-3 px-5 text-sm",
};

export function buttonClasses({
  variant = "primary",
  size = "md",
  className,
}: {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
} = {}) {
  return cx(
    "inline-flex cursor-pointer items-center justify-center rounded-full border font-semibold tracking-[0.01em] transition duration-200 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--page)] disabled:pointer-events-none disabled:opacity-50",
    variantClasses[variant],
    sizeClasses[size],
    className,
  );
}
