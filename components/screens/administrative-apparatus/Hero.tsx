'use client';
import React, { useEffect, useMemo, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';

/** Deterministic "random" in [0,1) from index + seed. Pure, stable across renders. */
function pseudoRandom(i: number, seed: number): number {
  const x = Math.sin((i + 1) * 12.9898 + seed) * 43758.5453;
  return x - Math.floor(x);
}

export function Hero({ locale }: { locale: string }) {
  const t = useTranslations('administrativeApparatus.hero');
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    const id = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(id);
  }, []);
  const particles = useMemo(() => {
    const colors = ['#C9A84C', '#D4B86A', '#A68A3D'];
    return [...Array(40)].map((_, i) => ({
      id: i,
      size: `${pseudoRandom(i, 0) * 6 + 2}px`,
      left: `${pseudoRandom(i, 1) * 100}%`,
      top: `${pseudoRandom(i, 2) * 100}%`,
      delay: pseudoRandom(i, 3) * 5,
      duration: `${pseudoRandom(i, 4) * 4 + 4}s`,
      color: colors[Math.floor(pseudoRandom(i, 5) * colors.length)],
    }));
  }, []);
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-navy">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
          'url("https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1920&q=80")'
        }} />


      {/* Gradient Overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-navy/90 via-navy/60 to-transparent" />

      {/* Decorative Geometric Lines */}
      <svg
        className="absolute inset-0 z-15 w-full h-full pointer-events-none opacity-20"
        xmlns="http://www.w3.org/2000/svg">

        <line
          x1="0"
          y1="100%"
          x2="100%"
          y2="0"
          stroke="url(#gold-line)"
          strokeWidth="1" />

        <line
          x1="20%"
          y1="100%"
          x2="100%"
          y2="20%"
          stroke="url(#gold-line)"
          strokeWidth="0.5" />

        <defs>
          <linearGradient id="gold-line" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#C9A84C" stopOpacity="0" />
            <stop offset="50%" stopColor="#D4B86A" stopOpacity="1" />
            <stop offset="100%" stopColor="#A68A3D" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>

      {/* Floating Particles */}
      <div className="absolute inset-0 z-20 pointer-events-none overflow-hidden">
        {particles.map((p) =>
        <div
          key={p.id}
          className="absolute rounded-full opacity-40 animate-float"
          style={{
            width: `${p.size}px`,
            height: `${p.size}px`,
            left: `${p.left}%`,
            top: `${p.top}%`,
            backgroundColor: p.color,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`
          }} />

        )}
      </div>

      {/* Content */}
      <div className="relative z-30 text-center px-4 max-w-5xl mx-auto flex flex-col items-center">
        <div
          className={`transition-all duration-1000 transform ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
          style={{
            transitionDelay: '200ms'
          }}>

          <span className="mb-8 inline-flex items-center rounded-full bg-gradient-to-r from-gold to-gold-dark text-white px-6 py-2 text-[clamp(0.75rem,2vw,2rem)] font-bold shadow-lg animate-pulse-gold relative overflow-hidden group">
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full animate-shimmer" />
            {t('badge')}
          </span>
        </div>

        <h1
          className={`text-[clamp(0.75rem,2vw,6rem)] font-bold text-white mb-6 leading-tight transition-all duration-1000 transform ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
          style={{
            transitionDelay: '400ms'
          }}>

          {t('title')} <span className="gradient-text">{t('titleHighlight')}</span>{' '}
          <br className="hidden md:block" /> {t('suffix')}
        </h1>

        <p
          className={`text-[clamp(0.75rem,2vw,1.5rem)] text-gray-300 mb-12 mx-auto font-medium transition-all duration-1000 transform ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
          style={{
            transitionDelay: '600ms'
          }}>

          {t('intro')}
        </p>

        <div
          className={`flex  gap-6 justify-center items-center transition-all duration-1000 transform ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
          style={{
            transitionDelay: '800ms'
          }}>

          <Link href="/execution" className="bg-gradient-to-r from-gold to-gold-dark hover:from-gold-light hover:to-gold text-white text-[clamp(0.75rem,1vw,2rem)] px-10 py-4 rounded-full transition-all hover:scale-105 font-bold shadow-gold animate-glow">
            {t('cta')}
          </Link>
          <Link href="/services" className="glass text-gold  bg-white hover:bg-white/20 text-[clamp(0.75rem,1vw,2rem)] px-10 py-4 rounded-full transition-all hover:scale-105 font-bold">
          {t('services')}
          </Link>
        </div>

        {/* Animated Gradient Line */}
        <div
          className={`w-full max-w-md h-px mt-16 bg-gradient-to-r from-transparent via-gold to-transparent opacity-50 transition-all duration-1000 ${mounted ? 'opacity-50' : 'opacity-0'}`}
          style={{
            transitionDelay: '1000ms'
          }} />

      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center cursor-pointer" onClick={() => {
        scrollTo({
          top: window.innerHeight,
          behavior: 'smooth'
        });
      }}>
        <ChevronDown
          className="text-gold w-8 h-8 opacity-80 animate-bounce"
          style={{
            animationDelay: '0s'
          }} />

        <ChevronDown
          className="text-gold w-8 h-8 opacity-40 animate-bounce -mt-4"
          style={{
            animationDelay: '0.2s'
          }} />

      </div>
    </section>);

}