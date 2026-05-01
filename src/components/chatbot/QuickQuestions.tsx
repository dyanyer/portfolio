type Props = {
  questions: string[];
  onSelect: (question: string) => void;
};

export function QuickQuestions({ questions, onSelect }: Props) {
  return (
    <div className="px-4 pb-3 pt-2.5">
      <p className="mb-2 text-[10px] font-semibold uppercase tracking-widest text-muted-foreground/60">
        Suggestions
      </p>
      <div className="flex flex-wrap gap-1.5">
        {questions.map((q) => (
          <button
            key={q}
            onClick={() => onSelect(q)}
            aria-label={`Ask: ${q}`}
            className="rounded-full border border-tan/30 bg-tan/10 px-3 py-1.5 text-[11px] font-medium text-tan/90 transition-all duration-150 hover:border-tan/55 hover:bg-tan/18 hover:text-tan hover:shadow-[0_0_12px_-2px_hsl(var(--tan-glow)/0.35)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tan/50"
          >
            {q}
          </button>
        ))}
      </div>
    </div>
  );
}
