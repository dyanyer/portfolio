import { cn } from "@/lib/utils";

export const Sparkle = ({ className, size = 14 }: { className?: string; size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    className={cn("text-tan", className)}
    fill="currentColor"
    aria-hidden
  >
    <path d="M12 0 L13.5 9 L22 12 L13.5 15 L12 24 L10.5 15 L2 12 L10.5 9 Z" />
  </svg>
);
