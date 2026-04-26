import { motion } from "framer-motion";
import { Check, Send } from "lucide-react";
import {
  useEffect,
  useRef,
  useState,
  type ChangeEvent,
  type FormEvent,
  type ReactNode,
} from "react";

import { Button } from "@/components/ui/button";
import { MagneticLink } from "@/components/ui/magnetic-link";
import { SectionHeading } from "@/components/ui/section-heading";
import { contactMethods, developer } from "@/data/portfolio";
import { cn } from "@/lib/utils";

type FormState = "idle" | "loading" | "success";
type FieldName = "name" | "email" | "message";

const fireflies = [
  ["8%", "20%", 0.2, 6.2],
  ["18%", "72%", 0.9, 8.4],
  ["29%", "35%", 1.3, 7.1],
  ["39%", "82%", 0.4, 9.2],
  ["48%", "18%", 1.1, 6.8],
  ["57%", "65%", 0.7, 8.9],
  ["68%", "26%", 1.5, 7.8],
  ["76%", "76%", 0.3, 9.6],
  ["84%", "42%", 1.2, 6.9],
  ["91%", "16%", 0.5, 8.2],
  ["12%", "48%", 1.7, 7.4],
  ["63%", "91%", 0.8, 9.1],
] as const;

function FloatingField({
  id,
  label,
  value,
  onChange,
  children,
}: {
  id: FieldName;
  label: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  children?: ReactNode;
}) {
  const filled = value.length > 0;

  return (
    <div className="relative pt-6">
      <label
        className={cn(
          "pointer-events-none absolute left-0 top-8 font-body text-base text-[var(--ink-faded)] transition duration-200",
          filled && "top-0 text-xs text-[var(--gold)]",
        )}
        htmlFor={id}
      >
        {label}
      </label>
      {children ?? (
        <input
          className="focus-ring h-12 w-full border-0 border-b-2 border-[color:var(--border)] bg-transparent px-0 text-[var(--parchment)] outline-none transition-colors duration-200 focus:border-[color:var(--gold)]"
          id={id}
          name={id}
          onChange={onChange}
          value={value}
        />
      )}
    </div>
  );
}

function SubmitContent({ state }: { state: FormState }) {
  if (state === "loading") {
    return (
      <>
        <span className="relative grid size-5 animate-spin place-items-center rounded-full border-2 border-[color:var(--parchment)] border-t-transparent">
          <span className="absolute h-1 w-5 bg-[var(--parchment)]" />
        </span>
        Sending
      </>
    );
  }

  if (state === "success") {
    return (
      <motion.span
        animate={{ scale: 1, opacity: 1 }}
        className="inline-flex items-center gap-2"
        initial={{ scale: 3, opacity: 0 }}
        transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
      >
        <span className="stamp grid size-7 place-items-center bg-[var(--parchment)] text-[var(--vermillion)]">
          <Check aria-hidden="true" className="size-4" />
        </span>
        Sent
      </motion.span>
    );
  }

  return (
    <>
      Send Message
      <Send aria-hidden="true" className="size-4" />
    </>
  );
}

export function ContactSection() {
  const [formState, setFormState] = useState<FormState>("idle");
  const [fields, setFields] = useState({ name: "", email: "", message: "" });
  const timeoutRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
    };
  }, []);

  const updateField =
    (field: FieldName) =>
    (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setFields((current) => ({ ...current, [field]: event.target.value }));
      if (formState === "success") setFormState("idle");
    };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFormState("loading");
    timeoutRef.current = window.setTimeout(() => {
      setFormState("success");
      setFields({ name: "", email: "", message: "" });
    }, 900);
  };

  return (
    <section
      className="section-shell bg-[var(--bg-surface)]"
      id="contact"
    >
      <p className="vertical-label font-mono absolute left-3 top-28 hidden text-xs text-[var(--ink-faded)] md:block">
        連絡・第五章
      </p>
      {fireflies.map(([left, top, delay, duration]) => (
        <motion.span
          aria-hidden="true"
          animate={{ x: [0, 18, -12, 0], y: [0, -22, 10, 0], opacity: [0.18, 0.8, 0.32] }}
          className="absolute z-0 size-1.5 rounded-full bg-[var(--gold)] shadow-[0_0_18px_var(--gold)]"
          key={`${left}-${top}`}
          style={{ left, top }}
          transition={{ delay, duration, ease: "easeInOut", repeat: Infinity }}
        />
      ))}

      <div className="relative z-10 mx-auto max-w-7xl">
        <SectionHeading
          chapter="第五章"
          titleEn="Let's Build Together"
          titleJa="共に作りましょう"
        />

        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <h3 className="font-display max-w-2xl text-5xl font-black leading-[1.02] text-[var(--parchment)] md:text-7xl">
              Send the signal.
              <br />
              I will shape the system.
            </h3>
            <p className="font-body mt-6 max-w-xl text-lg leading-9 text-[var(--ink-faded)]">
              {developer.taglineJa} Bring the rough workflow, the unclear edge
              case, or the product idea. I will help turn it into an executable
              build path.
            </p>

            <div className="mt-10 grid gap-5">
              {contactMethods.map((method) => {
                const Icon = method.icon;

                return (
                  <MagneticLink
                    className="group w-fit gap-4 text-left text-base"
                    href={method.href}
                    key={method.label}
                    rel="noreferrer"
                    target={method.href.startsWith("http") ? "_blank" : undefined}
                  >
                    <span className="grid size-11 place-items-center rounded-[8px] border border-[color:var(--border)] bg-[var(--bg-card)] text-[var(--gold)] transition duration-200 group-hover:border-[color:var(--sakura)]">
                      <Icon aria-hidden="true" className="size-5" />
                    </span>
                    <span>
                      <span className="block font-mono text-xs text-[var(--ink-faded)]">
                        {method.label}
                      </span>
                      <span className="font-body text-[var(--parchment)]">
                        {method.value}
                      </span>
                    </span>
                  </MagneticLink>
                );
              })}
            </div>
          </div>

          <form
            className="cel-card p-6 md:p-8"
            onSubmit={handleSubmit}
          >
            <div className="grid gap-6 md:grid-cols-2">
              <FloatingField
                id="name"
                label="Name"
                onChange={updateField("name")}
                value={fields.name}
              />
              <FloatingField
                id="email"
                label="Email"
                onChange={updateField("email")}
                value={fields.email}
              />
            </div>

            <FloatingField
              id="message"
              label="Message"
              onChange={updateField("message")}
              value={fields.message}
            >
              <textarea
                className="focus-ring min-h-40 w-full resize-y border-0 border-b-2 border-[color:var(--border)] bg-transparent px-0 pt-3 text-[var(--parchment)] outline-none transition-colors duration-200 focus:border-[color:var(--gold)]"
                id="message"
                name="message"
                onChange={updateField("message")}
                value={fields.message}
              />
            </FloatingField>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <p className="font-mono text-sm text-[var(--ink-faded)]">
                Response window: async, remote, worldwide.
              </p>
              <Button
                disabled={formState === "loading"}
                type="submit"
                variant={formState === "success" ? "seal" : "primary"}
              >
                <SubmitContent state={formState} />
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
