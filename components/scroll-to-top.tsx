"use client";

import { useEffect, useState, useCallback } from "react";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const updateState = useCallback(() => {
    const scrollY = window.scrollY;
    const docHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    const pct = docHeight > 0 ? Math.min((scrollY / docHeight) * 100, 100) : 0;
    setProgress(pct);
    setVisible(scrollY > 400);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", updateState, { passive: true });
    return () => window.removeEventListener("scroll", updateState);
  }, [updateState]);

  const scrollToTop = () => {
    setIsClicked(true);
    setTimeout(() => setIsClicked(false), 600);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // SVG circle math
  const size = 52;
  const strokeWidth = 2.5;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500&display=swap');

        .stt-btn {
          position: fixed;
          bottom: 28px;
          right: 28px;
          z-index: 9999;
          width: ${size}px;
          height: ${size}px;
          cursor: pointer;
          background: none;
          border: none;
          padding: 0;
          outline: none;
          -webkit-tap-highlight-color: transparent;

          /* Mount animation */
          animation: stt-mount 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }

        .stt-btn.hidden {
          animation: stt-unmount 0.25s cubic-bezier(0.4, 0, 1, 1) forwards;
          pointer-events: none;
        }

        @keyframes stt-mount {
          from { opacity: 0; transform: translateY(16px) scale(0.8); }
          to   { opacity: 1; transform: translateY(0)   scale(1);   }
        }

        @keyframes stt-unmount {
          from { opacity: 1; transform: translateY(0)   scale(1);   }
          to   { opacity: 0; transform: translateY(16px) scale(0.8); }
        }

        /* Inner disc */
        .stt-disc {
          position: absolute;
          inset: 5px;
          border-radius: 50%;
          background:rgb(206, 160, 10);
          display: flex;
          align-items: center;
          justify-content: center;
          transition:
            background 0.2s ease,
            box-shadow 0.3s ease,
            transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
          box-shadow:
            0 2px 8px rgba(0,0,0,0.35),
            0 0 0 0 rgba(255,255,255,0);
        }

        .stt-btn:hover .stt-disc {
          background: #1a1a1a;
          transform: scale(1.05);
          box-shadow:
            0 6px 20px rgba(0,0,0,0.5),
            0 0 0 1px rgba(255,255,255,0.08);
        }

        .stt-btn:active .stt-disc,
        .stt-btn.clicked .stt-disc {
          transform: scale(0.93);
          box-shadow: 0 1px 4px rgba(0,0,0,0.4);
        }

        /* Percent label */
        .stt-percent {
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: 'DM Sans', sans-serif;
          font-size: 12px;
          font-weight: 600;
          letter-spacing: -0.03em;
          color: #f5f5f5;
          line-height: 1;
          transition:
            transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1),
            color 0.2s ease;
          user-select: none;
        }

        .stt-btn:hover .stt-percent {
          transform: scale(1.08);
          color: #ffffff;
        }

        .stt-btn.clicked .stt-percent {
          transform: scale(0.92);
          color: rgba(255,255,255,0.7);
        }

        /* Progress ring */
        .stt-ring-track {
          stroke: rgba(255,255,255,0.08);
          fill: none;
          transition: stroke 0.2s ease;
        }

        .stt-btn:hover .stt-ring-track {
          stroke: rgba(255,255,255,0.12);
        }

        .stt-ring-progress {
          fill: none;
          stroke: #0f0f0f;
          stroke-linecap: round;
          transform-origin: center;
          transform: rotate(-90deg);
          transition:
            stroke-dashoffset 0.15s linear,
            stroke 0.2s ease,
            opacity 0.2s ease;
        }

        .stt-btn:hover .stt-ring-progress {
          stroke: #0f0f0f;
          filter: drop-shadow(0 0 4px rgba(250,204,21,0.7));
        }

        /* Tooltip */
        .stt-tooltip {
          position: absolute;
          right: calc(100% + 12px);
          top: 50%;
          transform: translateY(-50%) translateX(4px);
          background: #0f0f0f;
          color: #f5f5f5;
          font-family: 'DM Sans', sans-serif;
          font-size: 12px;
          font-weight: 500;
          letter-spacing: 0.02em;
          white-space: nowrap;
          padding: 5px 10px;
          border-radius: 6px;
          border: 1px solid rgba(255,255,255,0.1);
          pointer-events: none;
          opacity: 0;
          transition:
            opacity 0.15s ease,
            transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1);
          box-shadow: 0 4px 12px rgba(0,0,0,0.4);
        }

        .stt-tooltip::after {
          content: '';
          position: absolute;
          left: 100%;
          top: 50%;
          transform: translateY(-50%);
          border: 5px solid transparent;
          border-left-color: rgba(255,255,255,0.1);
          margin-left: -1px;
        }

        .stt-btn:hover .stt-tooltip {
          opacity: 1;
          transform: translateY(-50%) translateX(0);
        }

        /* Ripple */
        @keyframes stt-ripple {
          0%   { opacity: 0.35; transform: scale(1); }
          100% { opacity: 0;    transform: scale(1.6); }
        }

        .stt-ripple {
          position: absolute;
          inset: 5px;
          border-radius: 50%;
          border: 1.5px solid rgba(255,255,255,0.5);
          animation: stt-ripple 0.55s ease-out forwards;
          pointer-events: none;
        }
      `}</style>

      {visible && (
        <button
          type="button"
          onClick={scrollToTop}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          aria-label={`Scroll to top — ${Math.round(progress)}% read`}
          className={`stt-btn${isClicked ? " clicked" : ""}`}
        >
          {/* Progress ring SVG */}
          <svg
            width={size}
            height={size}
            viewBox={`0 0 ${size} ${size}`}
            style={{ position: "absolute", inset: 0 }}
            aria-hidden="true"
          >
            <circle
              className="stt-ring-track"
              cx={size / 2}
              cy={size / 2}
              r={radius}
              strokeWidth={strokeWidth}
            />
            <circle
              className="stt-ring-progress"
              cx={size / 2}
              cy={size / 2}
              r={radius}
              strokeWidth={strokeWidth}
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              style={{ opacity: progress > 2 ? 1 : 0 }}
            />
          </svg>

          {/* Disc + percent */}
          <div className="stt-disc">
            <span className="stt-percent" aria-hidden="true">
              {Math.round(progress)}%
            </span>
          </div>

          {/* Ripple on click */}
          {isClicked && <span className="stt-ripple" aria-hidden="true" />}

          {/* Tooltip */}
          <span className="stt-tooltip" aria-hidden="true">
            Back to top
          </span>
        </button>
      )}
    </>
  );
}