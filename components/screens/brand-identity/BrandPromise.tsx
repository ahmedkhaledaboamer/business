'use client';

import { Shield, Target, Award } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useTranslations } from 'next-intl';
import { useMemo } from 'react';

const iconColors = ['#1A6B5C', '#7A2D4A', '#B87333'];
const promiseIcons = [Shield, Target, Award];
const promiseImages = [
  'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&q=60',
  'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&q=60',
  'https://images.unsplash.com/photo-1553729459-afe8f2e2ed65?w=400&q=60',
];

export function BrandPromise() {
  const t = useTranslations('brandIdentity.promise');
  const rawPromises = (t.raw('promises') as { title: string; desc: string }[] | undefined) ?? [];
  const promises = useMemo(
    () => (Array.isArray(rawPromises) ? rawPromises : []).map((p, i) => ({ ...p, icon: promiseIcons[i], img: promiseImages[i] })),
    [rawPromises]
  );
  const { ref, isVisible } = useScrollAnimation(0.2);
  return (
    <section className="py-28 bg-gradient-to-b from-[#FDF8F0] to-white relative overflow-hidden px-[5%]">
      <div className=" mx-auto px-6 relative z-10" ref={ref}>
        <div className="text-center mb-20">
          <h2 className="font-bold text-[#1A1A1A] mb-4 text-[clamp(0.75rem,2vw,6rem)]">
            {t('title')}
          </h2>
          <p className="text-gray-500 font-medium text-[clamp(0.75rem,2vw,1.5rem)]">
            {t('subtitle')}
          </p>
        </div>

        <div className="relative">
          {/* Connecting Line */}
          <div
            className="hidden md:block absolute top-1/2 left-10 right-10 h-0.5 -translate-y-1/2 z-0"
            style={{
              background:
              'linear-gradient(to right, transparent, #C9A84C30, #1A6B5C30, #B8733330, transparent)'
            }} />


          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 relative z-10">
            {promises.map((item, idx) => {
              const Icon = item.icon;
              const color = iconColors[idx];
              return (
                <div
                  key={idx}
                  className={`relative bg-white rounded-[24px] p-10 text-center shadow-[0_16px_48px_rgba(0,0,0,0.06)] border-2 border-transparent transition-all duration-500 hover:scale-[1.04] hover:rotate-[0.5deg] group overflow-hidden ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`}
                  style={{
                    transitionDelay: `${idx * 200}ms`
                  }}>

                  {/* Background Image */}
                  <div
                    className="absolute inset-0 bg-cover bg-center opacity-[0.04] mix-blend-luminosity transition-transform duration-700 group-hover:scale-110 pointer-events-none"
                    style={{
                      backgroundImage: `url(${item.img})`
                    }} />


                  {/* Hover Border */}
                  <div
                    className="absolute inset-0 rounded-[24px] border-2 border-transparent group-hover:border-current transition-colors duration-300 pointer-events-none"
                    style={{
                      color: color + '40'
                    }} />


                  {/* Gold Corners */}
                  <div
                    className="absolute top-4 right-4 w-4 h-4 border-t-2 border-r-2 opacity-30"
                    style={{
                      borderColor: color
                    }} />

                  <div
                    className="absolute bottom-4 left-4 w-4 h-4 border-b-2 border-l-2 opacity-30"
                    style={{
                      borderColor: color
                    }} />


                  <div
                    className="inline-flex items-center justify-center w-24 h-24 rounded-full mb-8 relative"
                    style={{
                      background: `linear-gradient(135deg, ${color}15, ${color}08)`
                    }}>

                    <div
                      className="absolute inset-0 rounded-full animate-[pulse-glow_3s_ease-in-out_infinite] opacity-40"
                      style={{
                        boxShadow: `0 0 20px ${color}40`
                      }} />

                    <Icon
                      className="w-12 h-12 relative z-10 transition-transform duration-300 group-hover:scale-110"
                      style={{
                        color
                      }} />

                  </div>

                  <h3
                    className="font-bold mb-4 relative z-10 transition-colors text-[clamp(0.75rem,1vw,2rem)]"
                    style={{
                      color
                    }}>

                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed relative z-10 font-medium text-[clamp(0.75rem,1vw,2rem)]">
                    {item.desc}
                  </p>
                </div>);

            })}
          </div>
        </div>

        <div
          className={`text-center transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>

          <p className="text-[#1A1A1A] italic font-bold px-4 text-[clamp(0.75rem,2vw,1.5rem)]">
            &quot;{t('quote')}&quot;
          </p>
        </div>
      </div>
    </section>);

}