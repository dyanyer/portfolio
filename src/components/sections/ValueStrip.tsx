import { skillMarqueeJa, techStack } from "@/data/portfolio";
import { cn } from "@/lib/utils";

function MarqueeRow({
  items,
  reverse = false,
}: {
  items: string[];
  reverse?: boolean;
}) {
  const repeated = [...items, ...items, ...items, ...items];

  return (
    <div className="marquee-mask overflow-hidden border-y border-[color:var(--border)] bg-[color-mix(in_srgb,var(--bg-surface)_62%,transparent)] py-4">
      <div
        className={cn(
          "marquee-track flex w-max items-center gap-4 whitespace-nowrap font-mono text-sm text-[var(--ink-faded)]",
          reverse && "marquee-reverse",
        )}
      >
        {repeated.map((item, index) => (
          <span
            className={cn(
              "inline-flex items-center gap-4",
              index % 7 === 0 && "text-[var(--gold)]",
              index % 9 === 0 && "text-[var(--sakura)]",
            )}
            key={`${item}-${index}`}
          >
            {item}
            <span className="text-[var(--border)]">・</span>
          </span>
        ))}
      </div>
    </div>
  );
}

export function ValueStrip() {
  return (
    <div className="relative mx-[calc(50%-50vw)] mt-16">
      <MarqueeRow items={techStack} />
      <MarqueeRow items={skillMarqueeJa} reverse />
    </div>
  );
}
