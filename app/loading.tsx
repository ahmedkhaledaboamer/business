import Image from "next/image";

const styleTag = `
  @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Outfit:wght@300;400&display=swap');

  @keyframes rotate-slow {
    to { transform: rotate(360deg); }
  }
  @keyframes rotate-reverse {
    to { transform: rotate(-360deg); }
  }
  @keyframes breathe {
    0%, 100% { transform: scale(1); opacity: 1; }
    50%       { transform: scale(0.96); opacity: 0.9; }
  }
  @keyframes glow-pulse {
    0%, 100% { opacity: 0.5; transform: scale(1); }
    50%       { opacity: 0.9; transform: scale(1.08); }
  }
  @keyframes shimmer {
    0%   { stroke-dashoffset: 320; opacity: 0.2; }
    40%  { opacity: 1; }
    100% { stroke-dashoffset: 0; opacity: 0.2; }
  }
  @keyframes ticker {
    0%   { opacity: 0; letter-spacing: 0.35em; }
    30%  { opacity: 1; }
    70%  { opacity: 1; }
    100% { opacity: 0; letter-spacing: 0.5em; }
  }
  @keyframes bar-fill {
    0%   { width: 0%; }
    80%  { width: 85%; }
    100% { width: 100%; }
  }
  @keyframes scanline {
    0%   { transform: translateY(-100%); }
    100% { transform: translateY(400%); }
  }
  @keyframes dots {
    0%, 20%  { content: '.'; }
    40%      { content: '..'; }
    60%      { content: '...'; }
    80%, 100% { content: ''; }
  }
  @keyframes fade-up {
    from { opacity: 0; transform: translateY(8px); }
    to   { opacity: 1; transform: translateY(0); }
  }

  .ring-outer   { animation: rotate-slow    6s linear infinite; }
  .ring-inner   { animation: rotate-reverse 3.5s linear infinite; }
  .logo-breathe { animation: breathe        2.4s ease-in-out infinite; }
  .glow         { animation: glow-pulse     2.4s ease-in-out infinite; }
  .arc-shimmer  { animation: shimmer        2s ease-in-out infinite; }
  .label        { animation: ticker         2.8s ease-in-out infinite; }
  .bar          { animation: bar-fill       3.2s cubic-bezier(0.4,0,0.2,1) infinite; }
  .fade-up      { animation: fade-up        0.6s ease-out forwards; }

  .scanline {
    animation: scanline 2.4s linear infinite;
    background: linear-gradient(to bottom,
      transparent 0%,
      rgba(253,153,8,0.08) 50%,
      transparent 100%
    );
    height: 30%;
    pointer-events: none;
  }

  .dot-1 { animation: fade-up 0.5s 0.1s ease-out forwards; opacity: 0; }
  .dot-2 { animation: fade-up 0.5s 0.25s ease-out forwards; opacity: 0; }
  .dot-3 { animation: fade-up 0.5s 0.4s ease-out forwards; opacity: 0; }
`;

export default function Loading() {
  return (
    <div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center overflow-hidden"
      style={{ background: "#0d1117" }}
    >
      <style>{styleTag}</style>

      {/* Noise texture overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.4'/%3E%3C/svg%3E")`,
          backgroundSize: "160px",
          mixBlendMode: "overlay",
        }}
      />

      {/* Corner marks */}
      {[
        { top: 28, left: 28, rotate: 0 },
        { top: 28, right: 28, rotate: 90 },
        { bottom: 28, right: 28, rotate: 180 },
        { bottom: 28, left: 28, rotate: 270 },
      ].map((pos, i) => (
        <div
          key={i}
          className="absolute pointer-events-none"
          style={{
            ...("top" in pos && { top: pos.top }),
            ...("left" in pos && { left: pos.left }),
            ...("right" in pos && { right: pos.right }),
            ...("bottom" in pos && { bottom: pos.bottom }),
            width: 20,
            height: 20,
            borderTop: "1.5px solid rgba(253,153,8,0.35)",
            borderLeft: "1.5px solid rgba(253,153,8,0.35)",
            transform: `rotate(${pos.rotate}deg)`,
          }}
        />
      ))}

      {/* Ambient glow */}
      <div
        className="absolute glow pointer-events-none"
        style={{
          width: 480,
          height: 480,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(253,153,8,0.14) 0%, transparent 65%)",
          filter: "blur(40px)",
        }}
      />

      {/* Main loader */}
      <div className="relative flex items-center justify-center" style={{ width: 200, height: 200 }}>

        {/* Outer dashed ring */}
        <svg className="absolute ring-outer" width="200" height="200" viewBox="0 0 200 200">
          <defs>
            <linearGradient id="grad-outer" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#fd9908" stopOpacity="0.9" />
              <stop offset="55%" stopColor="#facc15" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#fd9908" stopOpacity="0" />
            </linearGradient>
          </defs>
          {/* Tick marks */}
          {Array.from({ length: 36 }).map((_, i) => {
            const angle = (i * 10 * Math.PI) / 180;
            const r = 94;
            const len = i % 3 === 0 ? 6 : 3;
            const x1 = 100 + (r - len) * Math.cos(angle);
            const y1 = 100 + (r - len) * Math.sin(angle);
            const x2 = 100 + r * Math.cos(angle);
            const y2 = 100 + r * Math.sin(angle);
            return (
              <line
                key={i}
                x1={x1} y1={y1} x2={x2} y2={y2}
                stroke={i % 3 === 0 ? "rgba(253,153,8,0.5)" : "rgba(253,153,8,0.2)"}
                strokeWidth={i % 3 === 0 ? "1.5" : "1"}
              />
            );
          })}
          {/* Sweeping arc */}
          <circle
            cx="100" cy="100" r="86"
            fill="none"
            stroke="url(#grad-outer)"
            strokeWidth="2"
            strokeDasharray="200 340"
            strokeLinecap="round"
            className="arc-shimmer"
          />
        </svg>

        {/* Inner counter-rotating ring */}
        <svg className="absolute ring-inner" width="152" height="152" viewBox="0 0 152 152">
          <defs>
            <linearGradient id="grad-inner" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#fd9908" stopOpacity="0.7" />
              <stop offset="100%" stopColor="#fd9908" stopOpacity="0" />
            </linearGradient>
          </defs>
          <circle
            cx="76" cy="76" r="70"
            fill="none"
            stroke="url(#grad-inner)"
            strokeWidth="1.5"
            strokeDasharray="120 320"
            strokeLinecap="round"
          />
          <circle
            cx="76" cy="76" r="70"
            fill="none"
            stroke="rgba(253,153,8,0.1)"
            strokeWidth="1"
            strokeDasharray="3 14"
          />
        </svg>

        {/* Logo container */}
        <div
          className="logo-breathe relative flex items-center justify-center z-10"
          style={{
            width: 110,
            height: 110,
            borderRadius: "24px",
            background: "linear-gradient(145deg, #141b24 0%, #1a2332 100%)",
            boxShadow: "0 0 0 1px rgba(253,153,8,0.2), 0 0 40px rgba(253,153,8,0.3), inset 0 1px 0 rgba(255,255,255,0.06)",
            overflow: "hidden",
          }}
        >
          {/* Scanline shimmer */}
          <div className="absolute inset-0 scanline" />

          <Image
            src="/logo.png"
            alt="KIB logo"
            width={70}
            height={70}
            priority
            className="relative z-10 object-contain"
            style={{ width: "65%", height: "65%" }}
          />
        </div>
      </div>

      {/* Progress bar + label */}
      <div className="mt-10 flex flex-col items-center gap-3" style={{ width: 220 }}>
        {/* Label */}
        <div
          className="label flex items-center gap-2"
          style={{
            fontFamily: "'Outfit', sans-serif",
            fontSize: 10,
            fontWeight: 300,
            letterSpacing: "0.45em",
            color: "rgba(253,153,8,0.65)",
            textTransform: "uppercase",
          }}
        >
          <span
            style={{
              display: "inline-block",
              width: 5,
              height: 5,
              borderRadius: "50%",
              background: "#fd9908",
              boxShadow: "0 0 6px #fd9908",
            }}
          />
          Initializing
        </div>

        {/* Track */}
        <div
          style={{
            width: "100%",
            height: 2,
            background: "rgba(255,255,255,0.06)",
            borderRadius: 2,
            overflow: "hidden",
            position: "relative",
          }}
        >
          <div
            className="bar"
            style={{
              position: "absolute",
              left: 0,
              top: 0,
              height: "100%",
              borderRadius: 2,
              background: "linear-gradient(90deg, #c97a06 0%, #fd9908 60%, #facc15 100%)",
              boxShadow: "0 0 8px rgba(253,153,8,0.8)",
            }}
          />
        </div>

        {/* Sub dots */}
        <div className="flex gap-1.5 mt-1">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className={`dot-${i + 1}`}
              style={{
                width: 3,
                height: 3,
                borderRadius: "50%",
                background: i === 1 ? "#fd9908" : "rgba(253,153,8,0.35)",
              }}
            />
          ))}
        </div>
      </div>

      {/* Bottom build tag */}
      <div
        className="absolute bottom-7"
        style={{
          fontFamily: "'Bebas Neue', sans-serif",
          fontSize: 11,
          letterSpacing: "0.3em",
          color: "rgba(255,255,255,0.1)",
        }}
      >
        KIB PLATFORM
      </div>
    </div>
  );
}