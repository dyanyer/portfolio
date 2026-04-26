import type { HTMLAttributes } from "react";

import { cx } from "@/lib/utils";

type BadgeProps = HTMLAttributes<HTMLSpanElement> & {
  tone?: "default" | "accent" | "warm";
};

const tones: Record<NonNullable<BadgeProps["tone"]>, string> = {
  default: "border-[color:var(--border)] bg-[var(--surface)] text-[var(--muted-strong)]",
  accent: "border-[color:var(--accent-border)] bg-[var(--accent-soft)] text-[var(--accent-strong)]",
  warm: "border-[color:var(--border-strong)] bg-[var(--cream)] text-[var(--accent-strong)]",
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
