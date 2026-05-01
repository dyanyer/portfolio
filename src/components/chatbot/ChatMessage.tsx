import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { BotMessage } from "./BotMessage";

type Props = { role: "user" | "bot"; text: string };

function parseInline(raw: string) {
  return raw.split(/(\*\*[^*]+\*\*)/g).map((seg, i) =>
    seg.startsWith("**") && seg.endsWith("**") ? (
      <strong key={i} className="font-semibold">
        {seg.slice(2, -2)}
      </strong>
    ) : (
      <span key={i}>{seg}</span>
    )
  );
}

export function ChatMessage({ role, text }: Props) {
  const isUser = role === "user";
  return (
    <motion.div
      initial={{ opacity: 0, y: 10, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.22, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={cn("flex w-full", isUser ? "justify-end" : "justify-start")}
    >
      {isUser ? (
        // User bubble — warm tan, right-aligned
        <div
          className={cn(
            "max-w-[80%] rounded-2xl rounded-br-sm px-4 py-2.5",
            "bg-tan text-tan-foreground text-[13px] leading-relaxed",
            "shadow-[0_4px_20px_-4px_hsl(var(--tan)/0.5)]"
          )}
        >
          {text.split("\n").map((line, i, arr) => (
            <span key={i}>
              {parseInline(line)}
              {i < arr.length - 1 && <br />}
            </span>
          ))}
        </div>
      ) : (
        // Bot bubble — glass card, left-aligned
        <div
          className={cn(
            "max-w-[92%] rounded-2xl rounded-bl-sm px-4 py-3",
            "border border-border/50 bg-card/80 backdrop-blur-sm",
            "shadow-[0_2px_16px_-4px_rgba(0,0,0,0.3)]"
          )}
        >
          <BotMessage text={text} />
        </div>
      )}
    </motion.div>
  );
}
