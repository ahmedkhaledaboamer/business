"use client";

import React, { useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Users, Target, Layers, AlertCircle } from "lucide-react";
import { useRef } from "react";

function CountUp({
  end,
  duration = 2000,
  suffix = "",
}: {
  end: number | string;
  duration?: number;
  suffix?: string;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const isStringEnd = typeof end === "string";

  useEffect(() => {
    if (!isInView || isStringEnd) return;
    let startTime: number;
    const animateCount = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);
      setCount(Math.floor((end as number) * percentage));
      if (progress < duration) requestAnimationFrame(animateCount);
    };
    requestAnimationFrame(animateCount);
  }, [end, duration, isInView, isStringEnd]);

  return (
    <span
      ref={ref}
      className="text-5xl md:text-6xl font-bold block mb-2"
      style={{
        background: "linear-gradient(135deg, #C9A84C, #E8C96A)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
      }}
    >
      {isStringEnd ? end : count}
      {suffix}
    </span>
  );
}

const stats = [
  { value: 20, label: "منصب تنفيذي", icon: Users },
  { value: 100, label: "دقة تشغيلية", suffix: "٪", icon: Target },
  { value: 5, label: "مستويات خدمة", icon: Layers },
  { value: 0, label: "هامش للخطأ", icon: AlertCircle },
];

export function Stats() {
  return (
    <section className="py-20 relative z-40 px-[5%] overflow-hidden" style={{ backgroundColor: "#0F1923" }}>
      {/* Ambient glows */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[400px] h-[300px] bg-[#C9A84C]/6 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[400px] h-[300px] bg-[#0E7C6B]/5 rounded-full blur-[100px] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="mx-auto relative rounded-3xl overflow-hidden border border-white/8"
        style={{
          background: "linear-gradient(135deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.02) 100%)",
          boxShadow: "0 32px 80px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.06)",
          backdropFilter: "blur(20px)",
        }}
      >
        {/* Dot grid */}
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(#C9A84C 1.5px, transparent 1.5px)",
            backgroundSize: "28px 28px",
          }}
        />

        {/* Top gold line */}
        <div className="absolute top-0 left-[10%] right-[10%] h-[1px] bg-gradient-to-r from-transparent via-[#C9A84C]/50 to-transparent" />

        {/* Content */}
        <div className="relative z-10 p-2 md:p-14">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="text-center px-6 relative group"
                >
                  {/* Vertical divider */}
                  {index < stats.length - 1 && (
                    <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-20 bg-gradient-to-b from-transparent via-white/8 to-transparent" />
                  )}

                  {/* Icon */}
                  <div className="flex justify-center mb-5">
                    <div className="w-14 h-14 rounded-2xl bg-[#C9A84C]/8 border border-[#C9A84C]/15 flex items-center justify-center group-hover:bg-[#C9A84C]/15 group-hover:border-[#C9A84C]/30 transition-all duration-300">
                      <Icon className="w-6 h-6 text-[#C9A84C] group-hover:scale-110 transition-transform duration-300" />
                    </div>
                  </div>

                  <CountUp end={stat.value} suffix={stat.suffix} />

                  <p className="font-['Tajawal',sans-serif] text-white/50 text-[clamp(1rem,1vw,3rem)] mt-1 group-hover:text-white/70 transition-colors duration-300">
                    {stat.label}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom teal line */}
        <div className="absolute bottom-0 left-[10%] right-[10%] h-[1px] bg-gradient-to-r from-transparent via-[#0E7C6B]/30 to-transparent" />
      </motion.div>
    </section>
  );
}