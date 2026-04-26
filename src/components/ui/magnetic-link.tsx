import {
  motion,
  useMotionValue,
  useSpring,
  type HTMLMotionProps,
} from "framer-motion";
import type { MouseEvent, ReactNode } from "react";

import { cn } from "@/lib/utils";

type MagneticLinkProps = Omit<HTMLMotionProps<"a">, "children"> & {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost" | "outline";
  size?: "sm" | "md" | "lg";
};

const sizeClasses = {
  sm: "text-xs",
  md: "text-sm",
  lg: "text-base",
};

const variantClasses = {
  primary: "text-[var(--parchment)] hover:text-[var(--sakura)]",
  secondary: "text-[var(--ink-faded)] hover:text-[var(--sakura)]",
  ghost: "text-[var(--sakura)] hover:text-[var(--gold)]",
  outline: "text-[var(--gold)] hover:text-[var(--sakura)]",
};

export function MagneticLink({
  children,
  className,
  onMouseMove,
  onMouseLeave,
  size = "md",
  variant = "secondary",
  ...props
}: MagneticLinkProps) {
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const x = useSpring(rawX, { stiffness: 150, damping: 15 });
  const y = useSpring(rawY, { stiffness: 150, damping: 15 });

  const handleMouseMove = (event: MouseEvent<HTMLAnchorElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    rawX.set((event.clientX - rect.left - rect.width / 2) * 0.22);
    rawY.set((event.clientY - rect.top - rect.height / 2) * 0.22);
    onMouseMove?.(event);
  };

  const handleMouseLeave = (event: MouseEvent<HTMLAnchorElement>) => {
    rawX.set(0);
    rawY.set(0);
    onMouseLeave?.(event);
  };

  return (
    <motion.a
      className={cn(
        "focus-ring inline-flex cursor-pointer items-center gap-1 font-body font-bold text-[var(--ink-faded)] transition-colors duration-200 hover:text-[var(--sakura)]",
        sizeClasses[size],
        variantClasses[variant],
        className,
      )}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
      style={{ x, y }}
      {...props}
    >
      {children}
    </motion.a>
  );
}
