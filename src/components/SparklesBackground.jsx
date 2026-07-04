import { useState } from "react";

export default function SparklesBackground({ isDark }) {
  const [particles] = useState(() => {
    const colors = [
      "bg-[#0ea5e9]", // Cyan
      "bg-[#6366f1]", // Indigo
      "bg-[#d946ef]", // Magenta
      "bg-[#eab308]", // Amber/Spark
      "bg-white"      // White
    ];
    
    return Array.from({ length: 45 }).map((_, i) => {
      const size = Math.random() * 3 + 1.5; // 1.5px to 4.5px
      const color = colors[Math.floor(Math.random() * colors.length)];
      
      return {
        id: i,
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        size: `${size}px`,
        color: color,
        delay: `${Math.random() * 8}s`,
        duration: `${Math.random() * 12 + 8}s`, // 8s to 20s
        driftX: `${(Math.random() - 0.5) * 50}px` // -25px to 25px sideways drift
      };
    });
  });

  return (
    <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Luces y degradados difusos de fondo */}
      <div className="absolute w-[350px] h-[350px] rounded-full blur-[130px] mix-blend-screen opacity-20 bg-[#d946ef] top-[-5%] left-[-5%] animate-pulse" style={{ animationDuration: '10s' }}></div>
      <div className="absolute w-[400px] h-[400px] rounded-full blur-[130px] mix-blend-screen opacity-20 bg-[#6366f1] bottom-[5%] right-[-5%] animate-pulse" style={{ animationDuration: '14s' }}></div>

      <style>{`
        @keyframes floatSparkle {
          0% {
            transform: translateY(0px) translateX(0px) scale(0.8);
            opacity: 0;
          }
          10% {
            opacity: 0.8;
          }
          50% {
            opacity: 0.4;
          }
          90% {
            opacity: 0.8;
          }
          100% {
            transform: translateY(-150px) translateX(var(--drift-x, 20px)) scale(0.2);
            opacity: 0;
          }
        }
      `}</style>

      {particles.map((p) => {
        const style = {
          top: p.top,
          left: p.left,
          width: p.size,
          height: p.size,
          animationDelay: p.delay,
          animationDuration: p.duration,
          "--drift-x": p.driftX,
          animationName: "floatSparkle",
          animationIterationCount: "infinite",
          animationTimingFunction: "ease-in-out"
        };

        return (
          <div
            key={p.id}
            style={style}
            className={`absolute rounded-full pointer-events-none ${p.color} ${
              isDark 
                ? "shadow-[0_0_8px_rgba(255,255,255,0.4)] opacity-75" 
                : "opacity-40 shadow-[0_0_4px_rgba(0,0,0,0.15)]"
            }`}
          />
        );
      })}
    </div>
  );
}
