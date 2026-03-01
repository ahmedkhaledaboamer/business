import Image from "next/image";

const styleTag = `
  @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&display=swap');

  @keyframes spinCW  { to { transform: rotate(360deg);  } }
  @keyframes pulse-logo {
    0%, 100% { transform: scale(1);    opacity: 1;   }
    50%       { transform: scale(0.94); opacity: 0.85; }
  }
  @keyframes dash {
    0%   { stroke-dashoffset: 283; }
    50%  { stroke-dashoffset: 80;  }
    100% { stroke-dashoffset: 283; }
  }

  .spin-cw    { animation: spinCW  1.8s linear infinite; }
  .pulse-logo { animation: pulse-logo 2s ease-in-out infinite; }
  .svg-dash   { animation: dash 2.2s ease-in-out infinite; }
`;

export default function Loading() {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      style={{ background: "#181f29" }}
    >
      <style>{styleTag}</style>

      {/* Ambient glow */}
      <div
        className="absolute rounded-full pointer-events-none"
        style={{
          width: 340,
          height: 340,
          background:
            "radial-gradient(circle, rgba(253,153,8,0.22) 0%, transparent 70%)",
          filter: "blur(52px)",
        }}
      />

      {/* Rings + logo */}
      <div
        className="relative flex items-center justify-center"
        style={{ width: 170, height: 170 }}
      >
        {/* Outer animated arc (border 1) */}
        <svg
          className="absolute spin-cw"
          width="150"
          height="150"
          viewBox="0 0 100 100"
        >
          <defs>
            <linearGradient id="loader-outer" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#fd9908" />
              <stop offset="100%" stopColor="#facc15" stopOpacity="0" />
            </linearGradient>
          </defs>
          <circle
            cx="50"
            cy="50"
            r="46"
            fill="none"
            stroke="url(#loader-outer)"
            strokeWidth="3"
            strokeDasharray="283"
            strokeLinecap="round"
            className="svg-dash"
            style={{ transformOrigin: "50px 50px" }}
          />
        </svg>

        {/* Inner spinning ring (border 2) */}
        <div
          className="absolute spin-cw rounded-full"
          style={{
            width: 160,
            height: 160,
            borderRadius: "9999px",
            border: "2px solid transparent",
            borderTopColor: "#fd9908",
            borderRightColor: "rgba(253,153,8,0.45)",
          }}
        />

        {/* Center logo */}
        <div
          className="pulse-logo relative flex items-center justify-center rounded-3xl z-10"
          style={{
            width: 130,
            height: 130,
            background:
              "linear-gradient(135deg, rgba(15,23,42,0.96) 0%, rgba(30,41,59,0.96) 100%)",
            boxShadow:
              "0 0 28px rgba(253,153,8,0.55), inset 0 1px 0 rgba(255,255,255,0.12)",
          }}
        >
          <Image
            src="/logo.png"
            alt="KIB logo"
            width={64}
            height={64}
            priority
            className="rounded-3xl object-contain w-[80%] h-[80%]"
          />
        </div>
      </div>
    </div>
  );
}

