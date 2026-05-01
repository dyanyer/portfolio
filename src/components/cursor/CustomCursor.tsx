// Futuristic trail cursor — only active on fine-pointer (desktop mouse) devices.
// Customize appearance via the constants below.
// To disable entirely, remove <CustomCursor /> from App.tsx.
import { useEffect, useRef } from "react";

// ── Customization constants ───────────────────────────────────────────────────
const TRAIL_R = 210;   // ← particle color R (warm orange)
const TRAIL_G = 145;   // ← particle color G
const TRAIL_B = 58;    // ← particle color B
const TRAIL_MAX_LIFE  = 30;   // frames before a particle dies (~500ms at 60fps)
const TRAIL_MAX_COUNT = 22;   // max simultaneous particles on screen
const RING_BASE_SIZE  = 28;   // px — ring diameter at rest
const RING_HOVER_SIZE = 44;   // px — ring diameter when hovering interactive elements
const RING_LERP       = 0.13; // 0–1 — how fast the ring follows the dot (lower = more lag)
const DOT_SIZE        = 8;    // px — cursor dot diameter
// ─────────────────────────────────────────────────────────────────────────────

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
  size: number;
}

export function CustomCursor() {
  const dotRef    = useRef<HTMLDivElement>(null);
  const ringRef   = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    // Guard: desktop fine-pointer only, respect reduced-motion preference
    if (!window.matchMedia("(pointer: fine)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const dot    = dotRef.current!;
    const ring   = ringRef.current!;
    const canvas = canvasRef.current!;
    const ctx    = canvas.getContext("2d")!;

    // All mutable state kept in plain objects — zero React re-renders on mousemove
    const mouse   = { x: -300, y: -300 };
    const ringPos = { x: -300, y: -300 };
    const last    = { x: -300, y: -300 };
    let isHover   = false;
    let isVisible = false;
    let lastEmit  = 0;
    let raf       = 0;
    const particles: Particle[] = [];

    // ── Canvas sizing ─────────────────────────────────────────────────────────
    const resize = () => {
      canvas.width  = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize, { passive: true });

    // Hide native cursor everywhere except text inputs (which keep cursor: text)
    document.documentElement.classList.add("cursor-custom");

    // ── Particle emitter ──────────────────────────────────────────────────────
    function emit(x: number, y: number, intensity: number) {
      if (particles.length >= TRAIL_MAX_COUNT) return;
      const angle = Math.random() * Math.PI * 2;
      const speed = (0.35 + Math.random() * 0.65) * intensity;
      particles.push({
        x, y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed - 0.35, // slight upward drift
        life: TRAIL_MAX_LIFE,
        maxLife: TRAIL_MAX_LIFE,
        size: 1.5 + Math.random() * 2.8,
      });
    }

    // ── rAF animation loop ────────────────────────────────────────────────────
    function tick(time: number) {
      const dotHalf = DOT_SIZE / 2;

      // Dot: exact mouse position
      dot.style.transform  = `translate(${mouse.x - dotHalf}px, ${mouse.y - dotHalf}px)`;
      dot.style.opacity    = isVisible ? "1" : "0";

      // Ring: lerp toward mouse
      ringPos.x += (mouse.x - ringPos.x) * RING_LERP;
      ringPos.y += (mouse.y - ringPos.y) * RING_LERP;
      const size     = isHover ? RING_HOVER_SIZE : RING_BASE_SIZE;
      const half     = size / 2;
      ring.style.width       = `${size}px`;
      ring.style.height      = `${size}px`;
      ring.style.transform   = `translate(${ringPos.x - half}px, ${ringPos.y - half}px)`;
      ring.style.opacity     = isVisible ? "1" : "0";
      ring.style.borderColor = isHover
        ? "hsl(var(--tan) / 0.9)"
        : "hsl(var(--tan) / 0.55)";
      ring.style.boxShadow   = isHover
        ? `0 0 18px 5px hsl(var(--tan-glow) / 0.55)`
        : `0 0 10px 2px hsl(var(--tan-glow) / 0.28)`;

      // Emit particles proportional to movement speed
      const dx    = mouse.x - last.x;
      const dy    = mouse.y - last.y;
      const speed = Math.sqrt(dx * dx + dy * dy);
      if (speed > 2.5 && time - lastEmit > 22) {
        emit(mouse.x, mouse.y, speed * 0.048);
        if (speed > 9) emit(mouse.x, mouse.y, speed * 0.036);
        lastEmit = time;
      }
      last.x = mouse.x;
      last.y = mouse.y;

      // Draw trail particles on canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.x  += p.vx;
        p.y  += p.vy;
        p.vy += 0.045; // gentle gravity
        p.vx *= 0.95;  // horizontal friction
        p.life--;
        if (p.life <= 0) { particles.splice(i, 1); continue; }

        const t     = p.life / p.maxLife;
        const alpha = t * 0.7;
        const r     = Math.max(0.3, p.size * Math.sqrt(t));

        ctx.beginPath();
        ctx.arc(p.x, p.y, r, 0, Math.PI * 2);
        ctx.fillStyle    = `rgba(${TRAIL_R}, ${TRAIL_G}, ${TRAIL_B}, ${alpha})`;
        ctx.shadowBlur   = 7;
        ctx.shadowColor  = `rgba(${TRAIL_R + 30}, ${TRAIL_G + 30}, ${TRAIL_B}, ${alpha * 0.65})`;
        ctx.fill();
      }
      ctx.shadowBlur = 0;

      raf = requestAnimationFrame(tick);
    }

    // ── Event listeners ───────────────────────────────────────────────────────
    const onMove = (e: MouseEvent) => {
      if (!isVisible) {
        // Initialise ring at mouse position to avoid snap-in on first move
        ringPos.x = e.clientX;
        ringPos.y = e.clientY;
        isVisible = true;
      }
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const onOver = (e: MouseEvent) => {
      isHover = !!(e.target as Element).closest(
        'a, button, [role="button"], input, textarea, select, label, [tabindex="0"]'
      );
    };

    const onLeave  = () => { isVisible = false; };
    const onEnter  = () => { isVisible = true; };

    document.addEventListener("mousemove",  onMove,   { passive: true });
    document.addEventListener("mouseover",  onOver,   { passive: true });
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("mouseenter", onEnter);

    raf = requestAnimationFrame(tick);

    // ── Cleanup ───────────────────────────────────────────────────────────────
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize",      resize);
      document.removeEventListener("mousemove",  onMove);
      document.removeEventListener("mouseover",  onOver);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mouseenter", onEnter);
      document.documentElement.classList.remove("cursor-custom");
    };
  }, []);

  return (
    <>
      {/* Trail canvas — behind ring and dot */}
      <canvas
        ref={canvasRef}
        className="pointer-events-none fixed inset-0 z-[9997]"
        aria-hidden="true"
      />

      {/* Ring — lerped, scales on hover */}
      <div
        ref={ringRef}
        className="pointer-events-none fixed left-0 top-0 z-[9998] rounded-full border"
        style={{
          willChange: "transform, width, height",
          // CSS transitions smooth the width/height and color changes
          transition:
            "width 0.18s ease-out, height 0.18s ease-out, border-color 0.14s ease, box-shadow 0.14s ease",
        }}
        aria-hidden="true"
      />

      {/* Dot — exact position, always on top */}
      <div
        ref={dotRef}
        className="pointer-events-none fixed left-0 top-0 z-[9999] rounded-full bg-tan"
        style={{
          width:     DOT_SIZE,
          height:    DOT_SIZE,
          willChange: "transform",
          boxShadow: `0 0 8px 3px hsl(var(--tan-glow) / 0.7)`,
        }}
        aria-hidden="true"
      />
    </>
  );
}
