'use client';
import React, { useEffect, useState } from 'react';
import { ArrowLeft, Diamond, Sparkles } from 'lucide-react';
import { useTranslations } from 'next-intl';
const particleColors = [
'#C9A84C',
'#D4A574',
'#B87333',
'#C9A84C',
'#D4A574',
'#B87333',
'#C9A84C',
'#D4A574',
'#7A2D4A',
'#1A6B5C'];

export function HeroSection() {
  const t = useTranslations('brandIdentity.hero');
  const [mounted, setMounted] = useState(false);
  const [particles] = useState(() =>
    particleColors.map((color) => ({
      color,
      width: Math.random() * 8 + 2,
      height: Math.random() * 8 + 2,
      top: Math.random() * 100,
      left: Math.random() * 100,
      duration: Math.random() * 5 + 4,
      delay: Math.random() * 3
    }))
  );
  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 0);
    return () => clearTimeout(t);
  }, []);
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#1A1A1A]">
      {/* Background Image - Dubai Skyline */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat animate-[ken-burns_25s_ease-in-out_infinite_alternate]"
        style={{
          backgroundImage:
          'url("https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1600&q=80")'
        }} />


      {/* Strong Dark Overlay for Text Readability */}
      <div className="absolute inset-0 z-[2] bg-[#0F0A05]/75" />

      {/* Vignette Effect */}
      <div
        className="absolute inset-0 z-[3] pointer-events-none"
        style={{
          background:
          'radial-gradient(ellipse at center, transparent 30%, rgba(0,0,0,0.6) 100%)'
        }} />


      {/* Subtle Dot Pattern */}
      <div
        className="absolute inset-0 z-[4] opacity-10 pointer-events-none"
        style={{
          backgroundImage:
          'radial-gradient(circle, #C9A84C 1px, transparent 1px)',
          backgroundSize: '48px 48px'
        }} />


      {/* Floating Particles */}
      <div className="absolute inset-0 z-[5] overflow-hidden pointer-events-none">
        {particles.map((p, i) => (
          <div
            key={i}
            className="absolute rounded-full blur-[1px] opacity-50"
            style={{
              backgroundColor: p.color,
              width: p.width + 'px',
              height: p.height + 'px',
              top: p.top + '%',
              left: p.left + '%',
              animation: `float ${p.duration}s ease-in-out infinite`,
              animationDelay: `${p.delay}s`
            }}
          />
        ))}
      </div>

      {/* Content - Centered */}
      <div className="container relative z-20 mx-auto px-6 md:px-12">
        <div
          className={`max-w-4xl mx-auto text-center transition-all duration-[1500ms] ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
          style={{
            transitionTimingFunction: 'cubic-bezier(0.22, 1, 0.36, 1)'
          }}>

          {/* Decorative Badge */}
          <div
            className={`flex items-center justify-center gap-3 mb-8 transition-all duration-1000 delay-300 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>

            <Diamond
              className="w-4 h-4 text-[#C9A84C] animate-[bounce-subtle_2s_ease-in-out_infinite]"
              fill="#C9A84C" />

            <div className="px-5 py-2 border border-[#C9A84C]/40 bg-[#C9A84C]/10 backdrop-blur-md text-[#C9A84C] rounded-full text-sm sm:text-base font-bold tracking-wider">
              {t('title')}
            </div>
            <Sparkles className="w-4 h-4 text-[#D4A574] animate-pulse" />
          </div>

          {/* Heading - Red text for visibility */}
          <h1
            className={`font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-[#FDF8F0] to-[#C9A84C] leading-tight mb-8 transition-all duration-1000 delay-500 text-[clamp(0.75rem,2vw,6rem)] ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            style={{
              textShadow:
              '0 4px 20px rgba(0,0,0,0.7), 0 0 60px rgba(201,168,76,0.3)'
            }}>

            {t('intro')}
          </h1>

          {/* Subtext - Red for readability */}
          <p
            className={`text-gray-200 mb-12 font-medium leading-relaxed mx-auto transition-all duration-1000 delay-700 text-[clamp(0.75rem,2vw,1.5rem)] ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            style={{
              textShadow: '0 2px 12px rgba(0,0,0,0.5)'
            }}>
            {t('tagline')}
          </p>

          {/* CTA Button - Centered */}
          <div
            className={`flex justify-center transition-all duration-1000 delay-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>

            <button 
            onClick={() => {
              scrollTo({
                top: window.innerHeight,
                behavior: 'smooth'
              });
            }}
            className="cursor-pointer group relative overflow-hidden bg-gradient-to-r from-[#C9A84C] via-[#D4A574] to-[#B87333] bg-[length:200%_auto] text-white px-10 py-5 rounded-full font-bold flex items-center gap-3 transition-all duration-500 hover:-translate-y-2 hover:bg-[position:right_center] shadow-[0_8px_30px_rgba(201,168,76,0.35)] hover:shadow-[0_16px_40px_rgba(201,168,76,0.6)] text-[clamp(0.75rem,1vw,2rem)]">
              <span className="relative z-10 flex items-center gap-3">
                {t('cta')}
              </span>
              <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent group-hover:animate-[shimmer_1.5s_infinite]" />
            </button>
          </div>

          {/* Decorative Lines */}
          <div
            className={`flex items-center justify-center gap-4 mt-12 transition-all duration-1500 delay-[1200ms] ${mounted ? 'opacity-60' : 'opacity-0'}`}>

            <div
              className="h-[1px] bg-gradient-to-l from-[#C9A84C] to-transparent"
              style={{
                width: mounted ? '80px' : '0',
                transition: 'width 1.5s ease-out 1.5s'
              }} />

            <div className="w-1.5 h-1.5 rounded-full bg-[#C9A84C]" />
            <div
              className="h-[1px] bg-gradient-to-r from-[#C9A84C] to-transparent"
              style={{
                width: mounted ? '120px' : '0',
                transition: 'width 1.5s ease-out 1.7s'
              }} />

          </div>
        </div>
      </div>

      {/* Bottom Gold Line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#C9A84C] to-transparent opacity-50 z-20" />
    </section>);

}