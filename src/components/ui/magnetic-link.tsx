import {
  motion,
  useMotionValue,
  useSpring,
  type HTMLMotionProps,
} from "framer-motion";
import type { MouseEvent, ReactNode } from "react";

import { buttonClasses } from "@/lib/button-styles";

type MagneticLinkProps = Omit<HTMLMotionProps<"a">, "children"> & {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost" | "outline";
  size?: "sm" | "md" | "lg";
};

export function MagneticLink({
  children,
  variant = "secondary",
  size = "md",
  className,
  onMouseMove,
  onMouseLeave,
  ...props
}: MagneticLinkProps) {
  const x = useSpring(useMotionValue(0), { stiffness: 260, damping: 18 });
  const y = useSpring(useMotionValue(0), { stiffness: 260, damping: 18 });

  const handleMouseMove = (event: MouseEvent<HTMLAnchorElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    x.set((event.clientX - rect.left - rect.width / 2) * 0.18);
    y.set((event.clientY - rect.top - rect.height / 2) * 0.18);
    onMouseMove?.(event);
  };

  const handleMouseLeave = (event: MouseEvent<HTMLAnchorElement>) => {
    x.set(0);
    y.set(0);
    onMouseLeave?.(event);
  };

  return (
    <motion.a
      className={buttonClasses({ variant, size, className })}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
      style={{ x, y }}
      {...props}
    >
      {children}
    </motion.a>
  );
}
