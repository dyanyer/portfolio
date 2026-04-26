import type { HTMLAttributes } from "react";

import { cx } from "@/lib/utils";

type BadgeProps = HTMLAttributes<HTMLSpanElement> & {
  tone?: "default" | "green" | "cyan" | "amber";
};

const tones: Record<NonNullable<BadgeProps["tone"]>, string> = {
  default: "border-[color:var(--border)] bg-[var(--surface)] text-[var(--muted-strong)]",
  green: "border-[color:var(--accent-border)] bg-[var(--accent-soft)] text-[var(--accent-strong)]",
  cyan: "border-cyan-400/25 bg-cyan-400/10 text-cyan-700 dark:text-cyan-100",
  amber: "border-amber-400/25 bg-amber-400/10 text-amber-700 dark:text-amber-100",
};

export function Badge({
  className,
  tone = "default",
  ...props
}: BadgeProps) {
  return (
    <span
      className={cx(
        "inline-flex items-center rounded-full border px-3 py-1.5 text-xs font-semibold leading-none shadow-sm",
        tones[tone],
        className,
      )}
      {...props}
    />
  );
}
