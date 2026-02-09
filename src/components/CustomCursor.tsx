import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";

type StarParticle = {
  id: number;
  x: number;
  y: number;
  size: number;
  driftX: number;
  driftY: number;
  createdAt: number;
};

export function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);
  const [particles, setParticles] = useState<StarParticle[]>([]);
  const lastSpawnRef = useRef(0);
  const nextIdRef = useRef(0);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });

      const target = e.target as HTMLElement;
      setIsPointer(
        window.getComputedStyle(target).cursor === "pointer" ||
          target.tagName === "BUTTON" ||
          target.tagName === "A"
      );

      const now = performance.now();
      if (now - lastSpawnRef.current > 40) {
        lastSpawnRef.current = now;
        const size = Math.random() * 3 + 2;
        const driftX = (Math.random() - 0.5) * 40;
        const driftY = Math.random() * -60 - 20;
        const particle: StarParticle = {
          id: nextIdRef.current++,
          x: e.clientX,
          y: e.clientY,
          size,
          driftX,
          driftY,
          createdAt: now,
        };

        setParticles((prev) => {
          const next = [...prev, particle];
          return next.length > 60 ? next.slice(next.length - 60) : next;
        });
      }
    };

    window.addEventListener("mousemove", updateMousePosition);
    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, []);

  useEffect(() => {
    const interval = window.setInterval(() => {
      const now = performance.now();
      setParticles((prev) =>
        prev.filter((particle) => now - particle.createdAt < 1200)
      );
    }, 120);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <>
      {particles.map((particle) => (
        <span
          key={particle.id}
          className="fixed pointer-events-none z-[9997] rounded-full bg-white star-trail"
          style={
            {
              left: particle.x,
              top: particle.y,
              width: particle.size,
              height: particle.size,
              boxShadow: "0 0 12px rgba(255,255,255,0.6)",
              "--tx": `${particle.driftX}px`,
              "--ty": `${particle.driftY}px`,
            } as React.CSSProperties
          }
        />
      ))}
      <motion.div
        className="fixed top-0 left-0 w-5 h-5 pointer-events-none z-[9999]"
        animate={{
          x: mousePosition.x - 10,
          y: mousePosition.y - 10,
          scale: isPointer ? 1.4 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28,
        }}
      >
        <div className="w-full h-full bg-gradient-to-br from-white via-purple-200 to-cyan-200 star-cursor" />
      </motion.div>

      <motion.div
        className="fixed top-0 left-0 w-10 h-10 pointer-events-none z-[9998]"
        animate={{
          x: mousePosition.x - 20,
          y: mousePosition.y - 20,
          scale: isPointer ? 1.2 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 150,
          damping: 15,
        }}
      >
        <div className="w-full h-full rounded-full border border-white/40 shadow-[0_0_20px_rgba(255,255,255,0.35)]" />
      </motion.div>

      <style>{`
        .star-cursor {
          clip-path: polygon(
            50% 0%,
            61% 35%,
            98% 35%,
            68% 57%,
            79% 91%,
            50% 70%,
            21% 91%,
            32% 57%,
            2% 35%,
            39% 35%
          );
          box-shadow: 0 0 14px rgba(255, 255, 255, 0.7);
        }
        @keyframes starTrail {
          0% {
            opacity: 0.9;
            transform: translate3d(0, 0, 0) scale(1);
          }
          70% {
            opacity: 0.5;
          }
          100% {
            opacity: 0;
            transform: translate3d(var(--tx), var(--ty), 0) scale(0.2);
          }
        }
        .star-trail {
          animation: starTrail 1.2s ease-out forwards;
        }
      `}</style>
    </>
  );
}
