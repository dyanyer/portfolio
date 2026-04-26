import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

import { SectionHeading } from "@/components/ui/section-heading";
import { processSteps } from "@/data/portfolio";
import { cn } from "@/lib/utils";

function StepIcon({ index }: { index: number }) {
  const shapes = [
    <path d="M8 8h32v32H8z" key="square" />,
    <path d="M24 5 43 42H5L24 5Z" key="triangle" />,
    <circle cx="24" cy="24" key="circle" r="18" />,
    <path d="M9 18h30v12H9zM18 9h12v30H18z" key="cross" />,
    <path d="M24 5 43 18v18L24 43 5 36V18L24 5Z" key="hex" />,
  ];

  return (
    <svg
      aria-hidden="true"
      className="size-12 text-[var(--gold)]"
      fill="none"
      viewBox="0 0 48 48"
    >
      <g fill="color-mix(in srgb, var(--gold) 18%, transparent)" stroke="currentColor" strokeWidth="3">
        {shapes[index % shapes.length]}
      </g>
    </svg>
  );
}

export function ProcessSection() {
  const ref = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 72%", "end 42%"],
  });
  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section className="section-shell" id="process" ref={ref}>
      <p className="vertical-label font-mono absolute left-3 top-28 hidden text-xs text-[var(--ink-faded)] md:block">
        道・第四章
      </p>
      <div className="pointer-events-none absolute inset-0 grid place-items-center">
        <span className="font-display text-[18rem] font-black leading-none text-[var(--parchment)] opacity-[0.03] md:text-[24rem]">
          道
        </span>
      </div>

      <div className="mx-auto max-w-7xl">
        <SectionHeading chapter="第四章" titleEn="My Process" titleJa="道" />

        <div className="relative">
          <svg
            aria-hidden="true"
            className="absolute left-1/2 top-0 hidden h-full w-56 -translate-x-1/2 md:block"
            preserveAspectRatio="none"
            viewBox="0 0 220 980"
          >
            <path
              d="M110 0 C50 120 170 190 110 300 C48 414 176 500 110 615 C50 720 170 805 110 980"
              fill="none"
              stroke="var(--border)"
              strokeDasharray="2 14"
              strokeLinecap="round"
              strokeWidth="3"
            />
            <motion.path
              d="M110 0 C50 120 170 190 110 300 C48 414 176 500 110 615 C50 720 170 805 110 980"
              fill="none"
              pathLength={pathLength}
              stroke="var(--sakura)"
              strokeDasharray="2 14"
              strokeLinecap="round"
              strokeWidth="4"
            />
          </svg>

          <div className="grid gap-8">
            {processSteps.map((step, index) => {
              const alignRight = index % 2 === 1;

              return (
                <motion.article
                  className={cn(
                    "relative grid gap-4 md:grid-cols-2 md:gap-12",
                    alignRight && "md:[&>*:first-child]:col-start-2",
                  )}
                  initial={{ opacity: 0, x: alignRight ? 42 : -42 }}
                  key={step.numeral}
                  transition={{
                    delay: index * 0.07,
                    duration: 0.65,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  viewport={{ once: true, margin: "-120px" }}
                  whileInView={{ opacity: 1, x: 0 }}
                >
                  <div
                    className={cn(
                      "cel-card p-6 md:p-8",
                      alignRight && "md:text-right",
                    )}
                  >
                    <div
                      className={cn(
                        "flex items-start gap-5",
                        alignRight && "md:flex-row-reverse",
                      )}
                    >
                      <p className="font-display text-7xl font-black leading-none text-[var(--sakura)] opacity-70">
                        {step.numeral}
                      </p>
                      <div>
                        <p className="font-mono text-sm text-[var(--vermillion)]">
                          Step {String(index + 1).padStart(2, "0")}
                        </p>
                        <h3 className="font-display mt-3 text-3xl font-black text-[var(--parchment)]">
                          {step.title}
                        </h3>
                      </div>
                    </div>
                  </div>

                  <div
                    className={cn(
                      "flex items-center gap-5 rounded-[8px] border border-[color:var(--border)] bg-[color-mix(in_srgb,var(--bg-surface)_68%,transparent)] p-6 backdrop-blur",
                      alignRight && "md:col-start-1 md:row-start-1 md:flex-row-reverse md:text-right",
                    )}
                  >
                    <StepIcon index={index} />
                    <p className="font-body text-sm leading-7 text-[var(--ink-faded)] md:text-base md:leading-8">
                      {step.description}
                    </p>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
