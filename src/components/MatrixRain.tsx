import { useEffect, useRef, useState } from "react";

type Phase = "in" | "visible" | "out";
interface TextLine {
  id: number;
  x: number;
  y: number;
  chars: string;
  opacity: number;
  phase: Phase;
}

const CHARS = Array.from(
  "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*{}ЯШЫИЪЩДФГЧЛЖБΔΨμλ"
);
const CHARS_LEN = CHARS.length;

const rand = (n: number) => Math.floor(Math.random() * n);
const randFloat = () => Math.random();

const getRandomChar = () => CHARS[rand(CHARS_LEN)];
const getRandomX = () => {
  const y = randFloat();
  if (y < 0.4) return 80 + rand(20);
  if (y < 0.8) return rand(16);
  return 20 + rand(60);
};
const makeChars = (len: number) => {
  const arr = new Array(len);
  for (let i = 0; i < len; i++) arr[i] = getRandomChar();
  return arr.join("");
};

const generateLine = (id: number, yRange: [number, number] = [-20, 30]): TextLine => ({
  id,
  x: getRandomX(),
  y: yRange[0] + randFloat() * (yRange[1] - yRange[0]),
  chars: makeChars(100 + rand(20)),
  opacity: randFloat() * -1,
  phase: "in",
});

export default function MatrixRain() {
  const [, setTick] = useState(0); // used only to trigger renders at low freq
  const linesRef = useRef<TextLine[]>([]);
  const idRef = useRef(0);
  const rafRef = useRef<number | null>(null);
  const lastRenderRef = useRef(0);

  // init
  useEffect(() => {
    const initial = new Array(10).fill(0).map(() => generateLine(idRef.current++));
    linesRef.current = initial;
    setTick((t) => t + 1);
  }, []);

  // animation using rAF; only mutate refs and occasionally trigger a render (~15 FPS)
  useEffect(() => {
    const step = (ts: number) => {
      const lines = linesRef.current;
      for (let i = 0; i < lines.length; i++) {
        const ln = lines[i];
        if (ln.phase === "in") {
          ln.opacity = Math.min(ln.opacity + 0.05, 0.35);
          if (ln.opacity >= 0.15) ln.phase = "visible";
        } else if (ln.phase === "visible") {
          if (Math.random() >= 0.99) ln.phase = "out";
        } else {
          ln.opacity = ln.opacity - 0.001;
          if (ln.opacity <= 0) {
            lines[i] = generateLine(ln.id);
            continue;
          }
        }

        if (Math.random() > 0.7) {
          // mutate ~30% of lines; mutate only a small slice (5%) of chars to avoid allocations
          const chars = ln.chars.split("");
          for (let k = 0; k < chars.length; k++) {
            if (Math.random() > 0.98) chars[k] = getRandomChar();
          }
          ln.chars = chars.join("");
        }
      }

      // render at ~15 FPS
      if (ts - lastRenderRef.current > 66) {
        lastRenderRef.current = ts;
        setTick((t) => t + 1);
      }
      rafRef.current = requestAnimationFrame(step);
    };

    rafRef.current = requestAnimationFrame(step);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  const lines = linesRef.current;

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {lines.map((line) => (
        <div
          key={line.id}
          className="absolute font-mono text-[10px] leading-[1.2] whitespace-pre select-none transition-opacity duration-300"
          style={{
            left: `${line.x}%`,
            top: `${line.y}%`,
            color: `hsl(0 70% 50% / ${line.opacity})`,
            textShadow: `0 0 8px hsl(0 80% 45% / ${line.opacity * 0.6})`,
            writingMode: "vertical-rl",
            transform: "rotate(180deg)",
          }}
        >
          {line.chars}
        </div>
      ))}
    </div>
  );
}

