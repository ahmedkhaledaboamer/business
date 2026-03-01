'use client';

import React, { useMemo } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useTranslations } from 'next-intl';

const accentColors = ['#C9A84C', '#1A6B5C', '#B87333', '#7A2D4A', '#D4A574'];
const traitIcons = ['🎯', '👁', '⚡', '🧠', '🤝'];
const traitImages = [
  '/imges/brand-identity/27.webp',
  '/imges/brand-identity/28.webp',
  '/imges/brand-identity/29.webp',
  '/imges/brand-identity/30.webp',
  '/imges/brand-identity/31.webp',
];

export function BrandPersonality() {
  const t = useTranslations('brandIdentity.personality');
  const rawTraits = (t.raw('traits') as { name: string; desc: string }[] | undefined) ?? [];
  const traits = useMemo(
    () => Array.isArray(rawTraits) ? rawTraits.map((tr, i) => ({ ...tr, icon: traitIcons[i], img: traitImages[i] })) : [],
    [rawTraits]
  );
  const { ref, isVisible } = useScrollAnimation(0.15);
  return (
    <section className="py-28 bg-gradient-to-b from-white via-[#FDF8F0]/50 to-white px-[5%]">
      <div className=" mx-auto px-6">
        <div className="text-center mb-20" ref={ref}>
          <h2 className="font-bold text-[#1A1A1A] inline-block relative mb-4 text-[clamp(0.75rem,2vw,6rem)]">
            {t('title')}
            <div
              className={`absolute -bottom-4 right-0 h-1.5 bg-gradient-to-l from-[#C9A84C] via-[#B87333] to-transparent rounded-full transition-all duration-1000 ease-out ${isVisible ? 'w-full' : 'w-0'}`} />

          </h2>
          <p
            className={`text-gray-500 mt-8 transition-all duration-1000 delay-300 text-[clamp(0.75rem,2vw,1.5rem)] ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>

            {t('subtitle')}
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          {traits.map((trait, index) =>
          <div
            key={index}
            className={`group w-full sm:w-[calc(50%-12px)] lg:w-[calc(20%-19.2px)] h-72 [perspective:1200px] transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-16 scale-90'}`}
            style={{
              transitionDelay: `${index * 150}ms`,
              transitionTimingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1)'
            }}>

              <div className="relative w-full h-full transition-all duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)_scale(1.06)]">
                {/* Particle Pings */}
                <div className="absolute -inset-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0">
                  <div
                  className="absolute top-0 right-0 w-2 h-2 rounded-full animate-[ping_1.5s_infinite]"
                  style={{
                    backgroundColor: accentColors[index]
                  }} />

                  <div
                  className="absolute bottom-0 left-0 w-2 h-2 rounded-full animate-[ping_2s_infinite_0.5s]"
                  style={{
                    backgroundColor: accentColors[(index + 2) % 5]
                  }} />

                </div>

                {/* Front */}
                <div className="absolute inset-0 bg-white/90 backdrop-blur-sm rounded-[20px] shadow-[0_8px_24px_rgba(0,0,0,0.06)] flex flex-col items-center justify-center p-6 [backface-visibility:hidden] overflow-hidden border border-gray-100 z-10">
                  {/* Colored Top Accent Line */}
                  <div
                  className="absolute top-0 left-0 right-0 h-[3px] rounded-t-[20px]"
                  style={{
                    background: `linear-gradient(to left, ${accentColors[index]}, transparent)`
                  }} />


                  {/* Background Photo */}
                  <div
                  className="absolute inset-0 bg-cover bg-center opacity-[0.07] mix-blend-luminosity transition-transform duration-700 group-hover:scale-110"
                  style={{
                    backgroundImage: `url(${trait.img})`
                  }} />


                  {/* Gold Corners */}
                  <div
                  className="absolute top-4 right-4 w-5 h-5 border-t-2 border-r-2 rounded-tr-sm"
                  style={{
                    borderColor: accentColors[index] + '60'
                  }} />

                  <div
                  className="absolute bottom-4 left-4 w-5 h-5 border-b-2 border-l-2 rounded-bl-sm"
                  style={{
                    borderColor: accentColors[index] + '60'
                  }} />


                  <span
                  className="text-6xl mb-5 relative z-10 animate-[bounce-subtle_3s_ease-in-out_infinite]"
                  style={{
                    animationDelay: `${index * 0.3}s`
                  }}>

                    {trait.icon}
                  </span>
                  <h3
                  className="font-bold text-[#1A1A1A] relative z-10 hover-color-target transition-colors duration-300 text-[clamp(0.75rem,1vw,2rem)]"
                  style={
                  {
                    '--hover-color': accentColors[index]
                  } as React.CSSProperties
                  }>

                    {trait.name}
                  </h3>
                </div>

                {/* Back */}
                <div
                className="absolute inset-0 rounded-[20px] shadow-[0_16px_48px_rgba(201,168,76,0.2)] flex items-center justify-center p-8 [backface-visibility:hidden] [transform:rotateY(180deg)] z-10 overflow-hidden"
                style={{
                  background: `linear-gradient(135deg, white 0%, #FDF8F0 100%)`,
                  borderWidth: '2px',
                  borderStyle: 'solid',
                  borderColor: accentColors[index] + '40'
                }}>

                  {/* Subtle accent overlay */}
                  <div
                  className="absolute inset-0 opacity-5"
                  style={{
                    background: `radial-gradient(circle at center, ${accentColors[index]}, transparent 70%)`
                  }} />

                  <p className="text-center font-bold text-[#1A1A1A] leading-relaxed relative z-10 text-[clamp(0.75rem,2vw,1.5rem)]">
                    {trait.desc}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>);

}