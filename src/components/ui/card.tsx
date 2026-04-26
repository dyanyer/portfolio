import { motion, type HTMLMotionProps } from "framer-motion";

import { cn } from "@/lib/utils";

type CardProps = HTMLMotionProps<"div">;

export function Card({ className, ...props }: CardProps) {
  return (
    <motion.div
      className={cn(
        "cel-card corner-notch overflow-hidden transition duration-300",
        className,
      )}
      {...props}
    />
  );
}

export function InteractiveCard({ className, ...props }: CardProps) {
  return (
    <Card
      className={cn(
        "group cursor-pointer hover:-translate-y-1.5 hover:border-[color:var(--sakura)] hover:shadow-[8px_8px_0_var(--sakura)]",
        className,
      )}
      whileHover={{ y: -6, boxShadow: "8px 8px 0px var(--sakura)" }}
      whileTap={{ scale: 0.98 }}
      {...props}
    />
  );
}
