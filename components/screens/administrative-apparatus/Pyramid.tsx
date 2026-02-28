'use client';
import React, { useState } from 'react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import Image from 'next/image';
export function Pyramid() {
  const [ref, isIntersecting] = useIntersectionObserver();
  const [hoveredLevel, setHoveredLevel] = useState<number | null>(null);
  return (
    <section className="py-24 bg-warm-gray overflow-hidden relative px-[5%]">
      {/* Decorative Dots */}
      <div
        className="absolute top-0 right-0 w-64 h-64 opacity-10 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#C9A84C 2px, transparent 2px)',
          backgroundSize: '20px 20px'
        }} />

      <div
        className="absolute bottom-0 left-0 w-64 h-64 opacity-10 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#C9A84C 2px, transparent 2px)',
          backgroundSize: '20px 20px'
        }} />


      <div className=" mx-auto px-4 relative z-10">
        <h2
          ref={ref}
          className={`text-4xl md:text-5xl font-bold text-charcoal mb-20 text-center md:text-right transition-all duration-1000 ${isIntersecting ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'}`}>

          مكانك في المنظومة
        </h2>

        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Right: Pyramid (60%) */}
          <div
            className={`w-full lg:w-[60%] relative h-[450px] 2xl:h-[580px] flex items-center justify-center transition-all duration-1000 delay-200 ${isIntersecting ? 'translate-x-0 opacity-100' : 'translate-x-[60px] opacity-0'}`}>

            <svg
              viewBox="0 0 400 400"
              className="w-full h-full min-w-[280px] drop-shadow-2xl overflow-visible"
              preserveAspectRatio="xMidYMid meet">

              <defs>
                <linearGradient
                  id="gold-grad"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%">

                  <stop offset="0%" stopColor="#D4B86A" />
                  <stop offset="50%" stopColor="#C9A84C" />
                  <stop offset="100%" stopColor="#A68A3D" />
                </linearGradient>
                <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="8" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
              </defs>

              {/* Animated Dashed Lines Connecting Levels */}
              <path
                d="M200,110 L200,130"
                stroke="#C9A84C"
                strokeWidth="2"
                strokeDasharray="4 4"
                className="animate-pulse" />

              <path
                d="M200,230 L200,250"
                stroke="#9CA3AF"
                strokeWidth="2"
                strokeDasharray="4 4"
                className="animate-pulse" />


              {/* Top Level */}
              <g
                className="cursor-pointer transition-transform duration-300 hover:-translate-y-3"
                onMouseEnter={() => setHoveredLevel(1)}
                onMouseLeave={() => setHoveredLevel(null)}>

                <polygon
                  points="200,20 140,110 260,110"
                  fill="url(#gold-grad)"
                  stroke="#FFFFFF"
                  strokeWidth="2"
                  filter="url(#glow)" />

                <text
                  x="200"
                  y="85"
                  textAnchor="middle"
                  fill="white"
                  className="font-bold text-2xl"
                  style={{
                    fontFamily: 'Cairo'
                  }}>

                  أنت
                </text>

                {/* Tooltip */}
                <g
                  className={`transition-opacity duration-300 ${hoveredLevel === 1 ? 'opacity-100' : 'opacity-0'}`}>

                  <rect
                    x="230"
                    y="10"
                    width="160"
                    height="45"
                    rx="8"
                    fill="#0A1628" />

                  <text
                    x="310"
                    y="38"
                    textAnchor="middle"
                    fill="#C9A84C"
                    className="text-sm font-bold"
                    style={{
                      fontFamily: 'Cairo'
                    }}>

                    موقع القرار والرؤية
                  </text>
                </g>
              </g>

              {/* Middle Level */}
              <g
                className="cursor-pointer transition-transform duration-300 hover:-translate-y-2"
                onMouseEnter={() => setHoveredLevel(2)}
                onMouseLeave={() => setHoveredLevel(null)}>

                <polygon
                  points="130,130 70,230 330,230 270,130"
                  fill="#FFFFFF"
                  stroke="#C9A84C"
                  strokeWidth="3" />

                <text
                  x="200"
                  y="190"
                  textAnchor="middle"
                  fill="#1A1A1A"
                  className="font-bold text-2xl"
                  style={{
                    fontFamily: 'Cairo'
                  }}>

                  الجهاز الإداري
                </text>

                {/* Tooltip */}
                <g
                  className={`transition-opacity duration-300 ${hoveredLevel === 2 ? 'opacity-100' : 'opacity-0'}`}>

                  <rect
                    x="290"
                    y="140"
                    width="160"
                    height="45"
                    rx="8"
                    fill="#0A1628" />

                  <text
                    x="370"
                    y="168"
                    textAnchor="middle"
                    fill="white"
                    className="text-sm font-bold"
                    style={{
                      fontFamily: 'Cairo'
                    }}>

                    التنفيذ والحماية
                  </text>
                </g>
              </g>

              {/* Bottom Level */}
              <g
                className="cursor-pointer transition-transform duration-300 hover:-translate-y-1"
                onMouseEnter={() => setHoveredLevel(3)}
                onMouseLeave={() => setHoveredLevel(null)}>

                <polygon
                  points="60,250 0,360 400,360 340,250"
                  fill="#F3F4F6"
                  stroke="#D1D5DB"
                  strokeWidth="2" />

                <text
                  x="200"
                  y="320"
                  textAnchor="middle"
                  fill="#4B5563"
                  className="font-bold text-2xl"
                  style={{
                    fontFamily: 'Cairo'
                  }}>

                  الملفات والعمليات
                </text>

                {/* Tooltip */}
                <g
                  className={`transition-opacity duration-300 ${hoveredLevel === 3 ? 'opacity-100' : 'opacity-0'}`}>

                  <rect
                    x="300"
                    y="270"
                    width="160"
                    height="45"
                    rx="8"
                    fill="#0A1628" />

                  <text
                    x="380"
                    y="298"
                    textAnchor="middle"
                    fill="white"
                    className="text-sm font-bold"
                    style={{
                      fontFamily: 'Cairo'
                    }}>

                    النتائج اليومية
                  </text>
                </g>
              </g>
            </svg>
          </div>

          {/* Left: Photo (40%) */}
          <div
            className={`w-full lg:w-[40%] transition-all duration-1000 delay-400 ${isIntersecting ? 'translate-x-0 opacity-100' : 'translate-x-[-60px] opacity-0'}`}>

            <div className="relative rounded-3xl overflow-hidden shadow-heavy border-2 border-gold/30 group">
              <Image
                src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=800&q=80"
                alt="Powerful businessman"
                className="w-full h-[450px] md:h-[800px] object-cover transition-transform duration-700 group-hover:scale-105"
                width={800}
                height={600}
                />

              <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/40 to-transparent flex items-end p-10">
                <div className="relative">
                  {/* Decorative Quote Mark */}
                  <svg
                    className="absolute -top-8 -right-6 w-12 h-12 text-gold opacity-30"
                    fill="currentColor"
                    viewBox="0 0 24 24">

                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                  <p className="text-white text-2xl font-bold italic leading-relaxed relative z-10">
                    &quot;أنت ترى النتيجة فقط… <br />
                    <span className="text-gold">ونحن نتولى الطريق إليها.</span>&quot;
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>);

}