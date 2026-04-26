import { cx } from "@/lib/utils";

export type ButtonVariant = "primary" | "secondary" | "ghost" | "outline";
export type ButtonSize = "sm" | "md" | "lg";

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "border-[color:var(--line)] bg-[var(--accent)] text-[var(--accent-foreground)] shadow-[4px_5px_0_color-mix(in_srgb,var(--line)_18%,transparent),0_18px_38px_var(--glow)] hover:bg-[var(--accent-strong)] hover:shadow-[3px_4px_0_color-mix(in_srgb,var(--line)_20%,transparent),0_20px_42px_var(--glow)]",
  secondary:
    "border-[color:var(--border-strong)] bg-[var(--surface-strong)] text-[var(--text-strong)] shadow-[3px_4px_0_color-mix(in_srgb,var(--line)_8%,transparent)] hover:border-[color:var(--line)] hover:bg-[var(--cream)]",
  ghost:
    "border-transparent bg-transparent text-[var(--muted-strong)] hover:bg-[var(--accent-soft)] hover:text-[var(--text-strong)]",
  outline:
    "border-[color:var(--border-strong)] bg-transparent text-[var(--text)] shadow-[2px_3px_0_color-mix(in_srgb,var(--line)_7%,transparent)] hover:border-[color:var(--line)] hover:bg-[var(--accent-soft)]",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "h-10 gap-2 px-3 text-xs",
  md: "h-11 gap-2.5 px-4 text-sm",
  lg: "h-[3.25rem] min-h-[3.25rem] gap-3 px-6 text-sm",
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
    "inline-flex cursor-pointer items-center justify-center rounded-full border font-bold tracking-[0.01em] transition duration-200 hover:-translate-y-0.5 active:translate-y-0.5 active:shadow-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--page)] disabled:pointer-events-none disabled:opacity-50",
    variantClasses[variant],
    sizeClasses[size],
    className,
  );
}
