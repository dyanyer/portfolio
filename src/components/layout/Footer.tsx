import { ArrowUp } from "lucide-react";
import logo from "@/assets/mascot/logo.png";

export const Footer = () => {
  return (
    <footer className="border-t border-border py-10">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="flex items-center gap-3">
            <span className="relative inline-flex h-10 w-10 items-center justify-center rounded-full bg-secondary overflow-hidden ring-1 ring-border">
              <img src={logo} alt="" className="h-12 w-12 object-cover -mt-1" />
            </span>
            <div>
              <div className="font-display text-base font-semibold leading-tight">John Rey Rebusquillo</div>
              <div className="text-xs text-muted-foreground">Full-Stack Developer · Building practical web systems.</div>
            </div>
          </div>

          <div className="flex items-center gap-4 text-xs text-muted-foreground">
            <span className="font-mono">© {new Date().getFullYear()} — Crafted in PH</span>
            <a href="#home" className="inline-flex items-center gap-2 rounded-full border border-border px-3.5 py-2 hover:border-tan hover:text-tan transition">
              Back to top <ArrowUp className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
