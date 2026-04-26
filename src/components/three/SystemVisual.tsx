import { motion, useReducedMotion } from "framer-motion";

const nodes = [
  { x: 110, y: 82, color: "var(--sakura)", label: "API" },
  { x: 260, y: 54, color: "var(--teal)", label: "DB" },
  { x: 372, y: 146, color: "var(--gold)", label: "UI" },
  { x: 304, y: 292, color: "var(--sakura)", label: "AI" },
  { x: 132, y: 260, color: "var(--teal)", label: "OPS" },
  { x: 220, y: 170, color: "var(--gold)", label: "CORE" },
] as const;

const links = [
  [0, 1],
  [1, 2],
  [2, 3],
  [3, 4],
  [4, 0],
  [0, 5],
  [1, 5],
  [2, 5],
  [3, 5],
  [4, 5],
] as const;

export function SystemVisual() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="relative aspect-square w-full max-w-[34rem]">
      <div className="absolute inset-8 rounded-full border border-[color:var(--border)] opacity-70" />
      <svg
        aria-label="Animated system architecture node graph"
        className="relative z-10 h-full w-full overflow-visible"
        role="img"
        viewBox="0 0 480 360"
      >
        <defs>
          <filter id="nodeGlow">
            <feGaussianBlur result="blur" stdDeviation="5" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <motion.g
          animate={reduceMotion ? undefined : { rotate: 360 }}
          style={{ transformOrigin: "240px 180px" }}
          transition={{ duration: 60, ease: "linear", repeat: Infinity }}
        >
          {links.map(([from, to], index) => {
            const start = nodes[from];
            const end = nodes[to];

            return (
              <motion.line
                key={`${from}-${to}`}
                animate={reduceMotion ? undefined : { strokeDashoffset: [0, -32] }}
                stroke={index % 3 === 0 ? "var(--sakura)" : "var(--border)"}
                strokeDasharray="8 12"
                strokeLinecap="round"
                strokeWidth="2"
                transition={{ duration: 1.8 + index * 0.08, ease: "linear", repeat: Infinity }}
                x1={start.x}
                x2={end.x}
                y1={start.y}
                y2={end.y}
              />
            );
          })}

          {nodes.map((node, index) => (
            <motion.g
              animate={reduceMotion ? undefined : { scale: [1, 1.09, 1] }}
              filter="url(#nodeGlow)"
              key={node.label}
              style={{ transformOrigin: `${node.x}px ${node.y}px` }}
              transition={{
                delay: index * 0.18,
                duration: 2.4,
                ease: "easeInOut",
                repeat: Infinity,
              }}
            >
              <circle
                cx={node.x}
                cy={node.y}
                fill="var(--bg-card)"
                r={index === 5 ? 38 : 28}
                stroke={node.color}
                strokeWidth="4"
              />
              <circle cx={node.x} cy={node.y} fill={node.color} opacity="0.18" r={index === 5 ? 52 : 40} />
              <text
                fill="var(--parchment)"
                fontFamily="Zen Kurenaido, M PLUS 1, monospace"
                fontSize={index === 5 ? 18 : 14}
                fontWeight="700"
                textAnchor="middle"
                x={node.x}
                y={node.y + 5}
              >
                {node.label}
              </text>
            </motion.g>
          ))}
        </motion.g>
      </svg>
    </div>
  );
}
