import { motion } from "framer-motion";
import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  chapter?: string;
  titleEn?: string;
  titleJa?: string;
  align?: "left" | "center";
  className?: string;
  eyebrow?: string;
  title?: string;
  description?: string;
  action?: ReactNode;
};

export function SectionHeading({
  chapter,
  titleEn,
  titleJa,
  align = "left",
  className,
  eyebrow,
  title,
  description,
  action,
}: SectionHeadingProps) {
  const displayChapter = chapter ?? eyebrow ?? "序章";
  const displayTitle = titleEn ?? title ?? "";
  const displaySubtitle = titleJa ?? description ?? "";

  return (
    <motion.div
      className={cn(
        "mb-12 flex flex-col gap-4 md:mb-16",
        align === "center" && "items-center text-center",
        className,
      )}
      initial={{ opacity: 0, y: 32 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true, margin: "-100px" }}
      whileInView={{ opacity: 1, y: 0 }}
    >
      <div className={cn("flex flex-col", align === "center" && "items-center")}>
        <p className="font-mono text-sm font-bold text-[var(--vermillion)]">
          {displayChapter}
        </p>
        <h2 className="font-display mt-3 max-w-5xl text-balance text-4xl font-black leading-[1.04] text-[var(--parchment)] md:text-6xl">
          {displayTitle}
        </h2>
        {displaySubtitle ? (
          <p className="font-body mt-4 max-w-3xl text-base italic leading-8 text-[var(--ink-faded)] md:text-lg">
            {displaySubtitle}
          </p>
        ) : null}
        <svg
          aria-hidden="true"
          className={cn("mt-5 h-4 w-52", align === "center" && "mx-auto")}
          viewBox="0 0 220 18"
        >
          <motion.path
            d="M3 11 C38 2 55 16 88 8 C125 0 143 17 182 8 C196 5 207 6 217 3"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            stroke="var(--sakura)"
            strokeLinecap="round"
            strokeWidth="5"
            transition={{ duration: 1.15, ease: "easeInOut", delay: 0.15 }}
            viewport={{ once: true }}
            whileInView={{ pathLength: 1, opacity: 1 }}
          />
        </svg>
      </div>
      {action ? <div>{action}</div> : null}
    </motion.div>
  );
}
