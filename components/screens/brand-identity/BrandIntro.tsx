'use client';

import React, { useEffect, useState } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useParallax } from '@/hooks/useParallax';
import { Quote } from 'lucide-react';
export function BrandIntro() {
  const { ref, isVisible } = useScrollAnimation(0.4);
  const offsetY = useParallax(0.15);
  const fullText = 'نحن كيان صُمّم ليكون القوة التي تقف خلف رجل الأعمال';
  const [displayedText, setDisplayedText] = useState('');
  const [isTypingDone, setIsTypingDone] = useState(false);
  useEffect(() => {
    if (isVisible) {
      let i = 0;
      const timer = setInterval(() => {
        setDisplayedText(fullText.slice(0, i + 1));
        i++;
        if (i === fullText.length) {
          clearInterval(timer);
          setTimeout(() => setIsTypingDone(true), 800);
        }
      }, 55);
      return () => clearInterval(timer);
    }
  }, [isVisible]);
  return (
    <section className="relative w-full py-40 bg-gradient-to-b from-[#FDF8F0] via-white to-[#FDF8F0] overflow-hidden flex items-center justify-center">
      {/* Parallax Background */}
      <div
        className="absolute inset-0 z-0 opacity-[0.08] bg-cover bg-center mix-blend-multiply"
        style={{
          backgroundImage:
          'url("https://images.unsplash.com/photo-1550684376-efcbd6e3f031?w=1600&q=80")',
          transform: `translateY(${offsetY}px) scale(1.1)`
        }} />


      {/* Animated Gradient Mesh */}
      <div
        className="absolute inset-0 z-0 opacity-10 pointer-events-none animate-[gradient-shift_12s_ease-in-out_infinite]"
        style={{
          background:
          'radial-gradient(ellipse at 30% 50%, rgba(201,168,76,0.3), transparent 60%), radial-gradient(ellipse at 70% 50%, rgba(212,165,116,0.2), transparent 60%)',
          backgroundSize: '200% 200%'
        }} />


      <div
        className="container relative z-10 mx-auto px-6 flex items-center justify-center"
        ref={ref}>

        <div className="inline-block relative animate-[float_7s_ease-in-out_infinite] text-center max-w-4xl mx-auto">
          {/* Large Decorative Quotation Marks */}
          <Quote className="absolute -top-14 -right-14 w-28 h-28 text-[#C9A84C]/15 rotate-180" />
          <Quote className="absolute -bottom-14 -left-14 w-28 h-28 text-[#C9A84C]/15" />

          {/* Animated Gold Gradient Borders */}
          <div
            className={`absolute right-[-28px] top-0 w-1.5 bg-gradient-to-b from-[#C9A84C] via-[#D4A574] to-[#B87333] rounded-full transition-all duration-[1500ms] ease-out ${isVisible ? 'h-full opacity-100' : 'h-0 opacity-0'}`} />

          <div
            className={`absolute left-[-28px] bottom-0 w-1.5 bg-gradient-to-t from-[#C9A84C] via-[#D4A574] to-[#B87333] rounded-full transition-all duration-[1500ms] ease-out delay-500 ${isVisible ? 'h-full opacity-100' : 'h-0 opacity-0'}`} />


          {/* Main Quote Text - Red for visibility */}
          <h2
            className="text-3xl md:text-5xl lg:text-6xl font-bold text-[#1A1A1A] italic leading-relaxed mx-auto px-10 relative z-10"
            style={{
              textShadow: '0 2px 12px rgba(201,168,76,0.08)'
            }}>

            {displayedText}
            {/* Fixed Cursor - centered vertically */}
            {!isTypingDone &&
            <span className="inline-block w-[3px] h-8 md:h-12 bg-[#C9A84C] mr-2 animate-[caret-blink_1.25s_ease-out_infinite] align-middle rounded-full" />
            }
          </h2>

          {/* Enhanced Ornament */}
          <div
            className={`mt-14 flex items-center justify-center gap-4 transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>

            <div className="w-20 h-[1px] bg-gradient-to-l from-transparent to-[#C9A84C]" />
            <div className="w-3 h-3 rotate-45 bg-gradient-to-br from-[#C9A84C] to-[#B87333] animate-[spin-slow_8s_linear_infinite]" />
            <div className="w-20 h-[1px] bg-gradient-to-r from-transparent to-[#C9A84C]" />
          </div>
        </div>
      </div>
    </section>);

}