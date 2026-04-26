import type { HTMLAttributes } from "react";

import { cx } from "@/lib/utils";

type CardProps = HTMLAttributes<HTMLDivElement>;

export function Card({ className, ...props }: CardProps) {
  return (
    <div
      className={cx(
        "rounded-lg border border-[color:var(--border)] bg-[var(--surface)] shadow-[var(--shadow-soft)]",
        className,
      )}
      {...props}
    />
  );
}

export function InteractiveCard({ className, ...props }: CardProps) {
  return (
    <Card
      className={cx(
        "group cursor-pointer transition duration-200 hover:-translate-y-1 hover:border-[color:var(--accent-border)] hover:shadow-[var(--shadow-strong)]",
        className,
      )}
      {...props}
    />
  );
}
