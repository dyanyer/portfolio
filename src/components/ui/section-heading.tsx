import { motion } from "framer-motion";
import type { ReactNode } from "react";

import { cx } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  action?: ReactNode;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  action,
}: SectionHeadingProps) {
  return (
    <motion.div
      className={cx(
        "mb-12 flex flex-col gap-6 md:mb-16 lg:mb-20",
        align === "center" && "items-center text-center",
      )}
      initial={{ opacity: 0, y: 22 }}
      transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
      viewport={{ once: true, margin: "-100px" }}
      whileInView={{ opacity: 1, y: 0 }}
    >
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div
          className={cx(
            "max-w-4xl",
            align === "center" && "mx-auto flex flex-col items-center",
          )}
        >
          <div className="mb-5 flex items-center gap-3">
            <p className="stamp-label">
              {eyebrow}
            </p>
          </div>
          <h2 className="font-display max-w-5xl text-balance text-4xl font-extrabold leading-[1.08] text-[var(--text-strong)] md:text-5xl lg:text-6xl">
            {title}
          </h2>
          {description ? (
            <p className="mt-5 max-w-3xl text-base leading-8 text-[var(--muted-strong)] md:text-lg md:leading-9">
              {description}
            </p>
          ) : null}
        </div>
        {action ? <div className="shrink-0">{action}</div> : null}
      </div>
    </motion.div>
  );
}
