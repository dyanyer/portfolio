import {
  Code2,
  Database,
  FileDown,
  Github,
  Globe2,
  LayoutDashboard,
  Linkedin,
  Mail,
  Network,
  ScanLine,
  Server,
  Sparkles,
  UsersRound,
  type LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";

// ─── Icon resolution ─────────────────────────────────────────────────────────

const ICON_MAP: [string, LucideIcon][] = [
  ["email", Mail],
  ["github", Github],
  ["linkedin", Linkedin],
  ["cv", FileDown],
  ["resume", FileDown],
  ["download", FileDown],
  ["web", Network],
  ["network", Network],
  ["ui", LayoutDashboard],
  ["interface", LayoutDashboard],
  ["dashboard", LayoutDashboard],
  ["layout", LayoutDashboard],
  ["backend", Database],
  ["database", Database],
  ["logic", Database],
  ["api", Database],
  ["hr", UsersRound],
  ["payroll", UsersRound],
  ["user", UsersRound],
  ["employee", UsersRound],
  ["saas", Server],
  ["server", Server],
  ["tenant", Server],
  ["cloud", Server],
  ["ai", Sparkles],
  ["auto", Sparkles],
  ["spark", Sparkles],
  ["qr", ScanLine],
  ["scan", ScanLine],
  ["application", Globe2],
  ["business", Globe2],
];

function iconFor(label: string): LucideIcon {
  const key = label.toLowerCase();
  for (const [kw, Icon] of ICON_MAP) {
    if (key.includes(kw)) return Icon;
  }
  return Code2;
}

// ─── Inline text parser ───────────────────────────────────────────────────────

type Seg = { bold: boolean; text: string };

function parseSegs(raw: string): Seg[] {
  return raw.split(/(\*\*[^*]+\*\*)/g).map((s) =>
    s.startsWith("**") && s.endsWith("**")
      ? { bold: true, text: s.slice(2, -2) }
      : { bold: false, text: s }
  );
}

function Inline({ raw, dimmed = false }: { raw: string; dimmed?: boolean }) {
  return (
    <>
      {parseSegs(raw).map((s, i) =>
        s.bold ? (
          <strong key={i} className="font-semibold text-tan">
            {s.text}
          </strong>
        ) : (
          <span key={i} className={dimmed ? "text-muted-foreground" : undefined}>
            {s.text}
          </span>
        )
      )}
    </>
  );
}

// ─── Block types ──────────────────────────────────────────────────────────────

type BulletItem =
  | { kind: "card"; label: string; value: string }
  | { kind: "dot"; text: string };

type Block =
  | { type: "para"; lines: string[] }
  | { type: "bullets"; items: BulletItem[] }
  | { type: "steps"; items: { num: string; title: string; desc: string }[] };

// ─── Parser ───────────────────────────────────────────────────────────────────

function parseBullet(line: string): BulletItem {
  const raw = line.replace(/^[•\s]+/, "").trim();
  // **Label:** value
  const m1 = raw.match(/^\*\*([^*]+)\*\*:\s*(.+)$/);
  if (m1) return { kind: "card", label: m1[1], value: m1[2] };
  // **Title** — description  (em dash or en dash)
  const m2 = raw.match(/^\*\*([^*]+)\*\*\s*[—–]\s*(.+)$/);
  if (m2) return { kind: "card", label: m2[1], value: m2[2] };
  return { kind: "dot", text: raw };
}

function parseBlocks(text: string): Block[] {
  return text
    .split(/\n\n+/)
    .filter(Boolean)
    .map((section): Block => {
      const lines = section.split("\n").filter(Boolean);

      // All lines are bullets
      if (lines.length > 0 && lines.every((l) => l.trimStart().startsWith("•"))) {
        return { type: "bullets", items: lines.map(parseBullet) };
      }

      // All lines are numbered steps (01. / 02. …)
      if (lines.length > 0 && lines.every((l) => /^\d{2}\./.test(l.trim()))) {
        return {
          type: "steps",
          items: lines.map((l) => {
            const m = l.match(/^(\d{2})\.\s+\*\*([^*]+)\*\*\s*[—–]\s*(.+)$/);
            return m
              ? { num: m[1], title: m[2], desc: m[3] }
              : { num: "00", title: l, desc: "" };
          }),
        };
      }

      return { type: "para", lines };
    });
}

// ─── Block renderers ──────────────────────────────────────────────────────────

function ParaBlock({ lines }: { lines: string[] }) {
  return (
    <p className="text-[13px] leading-[1.7] text-foreground">
      {lines.map((line, i) => (
        <span key={i}>
          <Inline raw={line} />
          {i < lines.length - 1 && <br />}
        </span>
      ))}
    </p>
  );
}

function CardList({ items }: { items: BulletItem[] }) {
  return (
    <div className="overflow-hidden rounded-xl border border-border/50 bg-background/40 backdrop-blur-sm">
      {items.map((item, i) => {
        if (item.kind !== "card") return null;
        const Icon = iconFor(item.label);
        return (
          <div
            key={i}
            className={cn(
              "flex items-start gap-3 px-3.5 py-2.5",
              i < items.length - 1 && "border-b border-border/40"
            )}
          >
            <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-tan/15 ring-1 ring-tan/20">
              <Icon size={12} className="text-tan" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">
                {item.label}
              </p>
              <p className="mt-0.5 break-words text-[12px] leading-relaxed text-foreground">
                {item.value}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

function DotList({ items }: { items: BulletItem[] }) {
  return (
    <ul className="flex flex-col gap-2">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-2.5">
          <span className="mt-[0.42rem] h-1.5 w-1.5 shrink-0 rounded-full bg-tan/80" />
          <span className="min-w-0 text-[13px] leading-[1.65] text-foreground">
            {item.kind === "dot" ? (
              <Inline raw={item.text} />
            ) : (
              <>
                <strong className="font-semibold text-tan">{item.label}</strong>
                <span className="text-muted-foreground"> — {item.value}</span>
              </>
            )}
          </span>
        </li>
      ))}
    </ul>
  );
}

function StepList({
  items,
}: {
  items: { num: string; title: string; desc: string }[];
}) {
  return (
    <div className="flex flex-col gap-2.5">
      {items.map((item, i) => (
        <div key={i} className="flex items-start gap-3">
          <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-tan/15 font-mono text-[10px] font-bold text-tan ring-1 ring-tan/20">
            {item.num}
          </span>
          <div className="min-w-0">
            <p className="text-[13px] font-medium leading-tight text-foreground">
              {item.title}
            </p>
            {item.desc && (
              <p className="mt-0.5 text-[11px] leading-relaxed text-muted-foreground">
                {item.desc}
              </p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

// ─── Main export ──────────────────────────────────────────────────────────────

export function BotMessage({ text }: { text: string }) {
  const blocks = parseBlocks(text);
  return (
    <div className="flex flex-col gap-2.5">
      {blocks.map((block, i) => {
        if (block.type === "para") return <ParaBlock key={i} lines={block.lines} />;

        if (block.type === "bullets") {
          const allCards = block.items.every((it) => it.kind === "card");
          return allCards ? (
            <CardList key={i} items={block.items} />
          ) : (
            <DotList key={i} items={block.items} />
          );
        }

        if (block.type === "steps") return <StepList key={i} items={block.items} />;

        return null;
      })}
    </div>
  );
}
