import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Send, X } from "lucide-react";
import logo from "@/assets/mascot/logo.png";
import { cn } from "@/lib/utils";
import { ChatMessage } from "./ChatMessage";
import { QuickQuestions } from "./QuickQuestions";
import { getBotResponse, quickQuestions } from "./chatbot-responses";

type Message = { id: string; role: "user" | "bot"; text: string };

const WELCOME: Message = {
  id: "welcome",
  role: "bot",
  text: "Hi! I'm John Rey's portfolio assistant. Ask me about his skills, projects, experience, or how to contact him. 👋",
};

export function ChatbotWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([WELCOME]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const [showQuick, setShowQuick] = useState(true);

  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, typing]);

  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 320);
  }, [open]);

  function send(text: string) {
    const trimmed = text.trim();
    if (!trimmed || typing) return;
    setMessages((p) => [...p, { id: `u-${Date.now()}`, role: "user", text: trimmed }]);
    setInput("");
    setShowQuick(false);
    setTyping(true);
    // ── AI upgrade point ─────────────────────────────────────────────────────
    // Replace this block with an async API call (OpenAI / Claude / etc.)
    // when you're ready to add AI. getBotResponse() handles it locally for now.
    setTimeout(() => {
      setMessages((p) => [...p, { id: `b-${Date.now()}`, role: "bot", text: getBotResponse(trimmed) }]);
      setTyping(false);
    }, 500 + Math.random() * 420);
  }

  return (
    <>
      {/* ── Floating action button ────────────────────────────────────────── */}
      <div className="fixed bottom-6 right-6 z-50">
        {/* Attention ping — visible only when closed */}
        {!open && (
          <span className="pointer-events-none absolute inset-0 rounded-full animate-ping bg-tan/25" />
        )}

        <motion.button
          onClick={() => setOpen((v) => !v)}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.92 }}
          aria-label={open ? "Close chat" : "Open portfolio assistant"}
          className={cn(
            "relative flex h-14 w-14 items-center justify-center rounded-full",
            "bg-tan text-tan-foreground shadow-glow",
            "transition-shadow duration-300 hover:shadow-[0_0_44px_-4px_hsl(var(--tan-glow)/0.7)]",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tan focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          )}
        >
          <AnimatePresence mode="wait" initial={false}>
            {open ? (
              <motion.span
                key="x"
                initial={{ opacity: 0, rotate: -90, scale: 0.7 }}
                animate={{ opacity: 1, rotate: 0, scale: 1 }}
                exit={{ opacity: 0, rotate: 90, scale: 0.7 }}
                transition={{ duration: 0.18, ease: "easeOut" }}
              >
                <X size={20} />
              </motion.span>
            ) : (
              <motion.span
                key="logo"
                initial={{ opacity: 0, scale: 0.75 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.75 }}
                transition={{ duration: 0.18, ease: "easeOut" }}
              >
                <img
                  src={logo}
                  alt="Portfolio assistant"
                  className="h-10 w-10 rounded-full object-contain"
                />
              </motion.span>
            )}
          </AnimatePresence>
        </motion.button>
      </div>

      {/* ── Chat panel ───────────────────────────────────────────────────── */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.93, y: 12 }}
            transition={{ type: "spring", stiffness: 360, damping: 32 }}
            style={{
              transformOrigin: "bottom right",
              maxHeight: "min(580px, calc(100svh - 108px))",
            }}
            className={cn(
              // Position
              "fixed bottom-24 right-4 z-50 sm:right-6",
              // Width: near-full on mobile, fixed on desktop
              "w-[calc(100vw-2rem)] sm:w-[390px]",
              // Layout
              "flex flex-col overflow-hidden rounded-3xl",
              // Glass panel — ↓ customize glow border opacity here
              "border border-tan/20 bg-card/95 backdrop-blur-2xl",
              // Shadow — ↓ customize depth and glow spread here
              "shadow-[0_28px_70px_-10px_rgba(0,0,0,0.6),0_0_0_1px_hsl(var(--tan)/0.08),inset_0_1px_0_hsl(var(--tan-foreground)/0.04)]"
            )}
          >
            {/* ── Header ─────────────────────────────────────────────────── */}
            <div
              className={cn(
                "flex shrink-0 items-center gap-3 px-4 py-3.5",
                "border-b border-tan/15",
                // Subtle warm gradient on header — ↓ customize here
                "bg-gradient-to-r from-tan/10 via-tan/[0.03] to-transparent"
              )}
            >
              {/* Logo with glow ring */}
              <div className="relative flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded-full ring-1 ring-tan/50 shadow-[0_0_14px_2px_hsl(var(--tan-glow)/0.35)]">
                <img src={logo} alt="Assistant" className="h-8 w-8 object-contain" />
              </div>

              <div className="min-w-0 flex-1">
                <p className="text-[13px] font-semibold leading-tight tracking-tight text-foreground">
                  Portfolio Assistant
                </p>
                <p className="text-[11px] text-muted-foreground">Ask about John Rey</p>
              </div>

              {/* Online badge */}
              <div className="flex shrink-0 items-center gap-1.5 rounded-full border border-green-500/25 bg-green-500/10 px-2.5 py-1">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-green-500" />
                </span>
                <span className="text-[10px] font-semibold text-green-500">Online</span>
              </div>
            </div>

            {/* ── Messages ───────────────────────────────────────────────── */}
            <div className="chatbot-scroll flex flex-1 flex-col gap-3 overflow-y-auto overscroll-contain p-4">
              {messages.map((msg) => (
                <ChatMessage key={msg.id} role={msg.role} text={msg.text} />
              ))}

              {/* Typing wave indicator */}
              <AnimatePresence>
                {typing && (
                  <motion.div
                    initial={{ opacity: 0, y: 6, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="flex justify-start"
                  >
                    <div className="flex items-center gap-1.5 rounded-2xl rounded-bl-sm border border-border/50 bg-card/80 px-4 py-3 backdrop-blur-sm">
                      {[0, 1, 2].map((i) => (
                        <motion.span
                          key={i}
                          className="h-1.5 w-1.5 rounded-full bg-tan/70"
                          animate={{ y: [0, -5, 0], opacity: [0.45, 1, 0.45] }}
                          transition={{
                            duration: 0.75,
                            repeat: Infinity,
                            delay: i * 0.14,
                            ease: "easeInOut",
                          }}
                        />
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <div ref={bottomRef} />
            </div>

            {/* ── Quick questions ────────────────────────────────────────── */}
            <AnimatePresence>
              {showQuick && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.22, ease: "easeInOut" }}
                  className="shrink-0 overflow-hidden border-t border-border/40"
                >
                  <QuickQuestions questions={quickQuestions} onSelect={send} />
                </motion.div>
              )}
            </AnimatePresence>

            {/* ── Input bar ──────────────────────────────────────────────── */}
            <div className="shrink-0 border-t border-border/40 bg-card/40 px-4 py-3">
              <div
                className={cn(
                  "flex items-center gap-2 rounded-2xl",
                  "border border-border/55 bg-background/55 px-3.5 py-2",
                  "backdrop-blur-sm",
                  // Focus ring on the container, not the input
                  "transition-[border-color,box-shadow] duration-200",
                  "focus-within:border-tan/50 focus-within:shadow-[0_0_0_3px_hsl(var(--tan)/0.12)]"
                )}
              >
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && send(input)}
                  placeholder="Ask something…"
                  aria-label="Type your message"
                  className="min-w-0 flex-1 bg-transparent py-0.5 text-[13px] text-foreground outline-none placeholder:text-muted-foreground/55"
                />
                <motion.button
                  onClick={() => send(input)}
                  disabled={!input.trim() || typing}
                  aria-label="Send message"
                  whileHover={{ scale: 1.06 }}
                  whileTap={{ scale: 0.93 }}
                  className={cn(
                    "flex h-8 w-8 shrink-0 items-center justify-center rounded-xl",
                    "bg-tan text-tan-foreground",
                    "transition-[opacity,box-shadow] duration-150",
                    "hover:shadow-[0_0_14px_2px_hsl(var(--tan-glow)/0.45)]",
                    "disabled:opacity-35 disabled:shadow-none",
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tan/50"
                  )}
                >
                  <Send size={13} />
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
