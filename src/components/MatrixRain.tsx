import { useEffect, useState } from "react";

interface Stream {
  id: number;
  x: number;
  y: number;
  chars: string;
  speed: number;
  opacity: number;
}

const CHARS =
  "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()ЯШЫИПЮЪЩДФГЧЛЖБΔΨμλΩ";

const getRandomChar = () => CHARS[Math.floor(Math.random() * CHARS.length)];

const generateStream = (id: number): Stream => ({
  id,
  x: Math.random() * 100,
  y: -24 + Math.random() * 16,
  chars: Array.from(
    { length: 16 + Math.floor(Math.random() * 8) },
    getRandomChar
  ).join(""),
  speed: 0.3 + Math.random() * 0.4,
  opacity: 0.2 + Math.random() * 0.12,
});

const MatrixRain = () => {
  const [streams, setStreams] = useState<Stream[]>([]);
  const streamIdRef = { current: 0 };

  useEffect(() => {
    // Initialize with a few streams
    const initial = Array.from({ length: 4 }, (_, i) => generateStream(i));
    setStreams(initial);
    streamIdRef.current = initial.length;

    // Add new streams periodically from random positions
    const spawnInterval = setInterval(() => {
      setStreams((prev) => {
        // Remove streams that have fallen off screen
        const filtered = prev.filter((s) => s.y < 120);

        // Add a new stream if we have less than 16
        if (filtered.length < 16) {
          return [...filtered, generateStream(streamIdRef.current++)];
        }
        return filtered;
      });
    }, 1500 + Math.random() * 2000);

    // Animate streams downward
    const animateInterval = setInterval(() => {
      setStreams((prev) =>
        prev.map((stream) => ({
          ...stream,
          y: stream.y + stream.speed,
          // Randomly change some characters
          chars: stream.chars
            .split("")
            .map((c) => (Math.random() > 0.5 ? getRandomChar() : c))
            .join(""),
        }))
      );
    }, 100);

    return () => {
      clearInterval(spawnInterval);
      clearInterval(animateInterval);
    };
  }, []);

  // Handle click to spawn new stream at mouse position
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;

      setStreams((prev) => [
        ...prev,
        {
          id: streamIdRef.current++,
          x,
          y,
          chars: Array.from(
            { length: 16 + Math.floor(Math.random() * 8) },
            getRandomChar
          ).join(""),
          speed: 0.3 + Math.random() * 0.4,
          opacity: 0.3 + Math.random() * 0.15,
        },
      ]);
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {streams.map((stream) => (
        <div
          key={stream.id}
          className="absolute font-mono text-[10px] leading-[1.2] whitespace-pre select-none"
          style={{
            left: `${stream.x}%`,
            top: `${stream.y}%`,
            color: `hsl(0 70% 50% / ${stream.opacity})`,
            textShadow: `0 0 8px hsl(0 80% 45% / ${stream.opacity * 0.6})`,
            writingMode: "vertical-rl",
            transform: "rotate(180deg)",
          }}
        >
          {stream.chars}
        </div>
      ))}
    </div>
  );
};

export default MatrixRain;
