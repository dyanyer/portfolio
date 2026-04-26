import { forwardRef } from "react";
import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type SectionProps = HTMLAttributes<HTMLElement> & {
  id?: string;
  children: ReactNode;
  size?: "sm" | "md" | "lg";
  bleed?: boolean;
};

/** Consistent vertical rhythm + max-width container for every section. */
export const Section = forwardRef<HTMLElement, SectionProps>(
  ({ id, children, className, size = "md", bleed = false, ...rest }, ref) => {
    const pad =
      size === "sm" ? "py-16 md:py-20" : size === "lg" ? "py-28 md:py-40" : "py-20 md:py-32";
    return (
      <section
        ref={ref}
        id={id}
        className={cn("relative noise", pad, className)}
        {...rest}
      >
        {bleed ? children : <div className="container relative">{children}</div>}
      </section>
    );
  },
);
Section.displayName = "Section";

type EyebrowProps = { children: ReactNode; className?: string };
export const Eyebrow = ({ children, className }: EyebrowProps) => (
  <div
    className={cn(
      "inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.24em] text-tan",
      className,
    )}
  >
    <span className="h-px w-8 bg-tan/50" />
    {children}
  </div>
);
