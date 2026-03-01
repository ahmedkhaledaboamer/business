'use client';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import Image from 'next/image';

export function ClosingManifesto() {
  const t = useTranslations('brandIdentity.closing');
  const { ref, isVisible } = useScrollAnimation(0.4);
  const words = t('words').split(' ');
  return (
    <>
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/imges/brand-identity/53.webp"
            alt=""
            fill
            className="object-cover object-center"
            sizes="100vw"
            priority
          />
        </div>
        {/* Dark gradient overlay */}
        <div
          className="absolute inset-0 z-10"
          style={{
            background: 'linear-gradient(to bottom, rgba(58,58,58,0.85) 0%, rgba(42,42,42,0.9) 50%, rgba(26,26,26,0.95) 100%)'
          }}
        />
        <div
          className="container relative z-20 mx-auto px-6 text-center"
          ref={ref}>

          {/* Decorative Line Above */}
          <div
            className={`flex items-center justify-center gap-4 mb-12 transition-all duration-1000 ${isVisible ? 'opacity-60' : 'opacity-0'}`}>

            <div
              className="h-[1px] bg-gradient-to-l from-[#C9A84C] to-transparent"
              style={{
                width: isVisible ? '100px' : '0',
                transition: 'width 1.5s ease-out'
              }} />

            <div className="w-2 h-2 rotate-45 bg-[#C9A84C] animate-[spin-slow_6s_linear_infinite]" />
            <div
              className="h-[1px] bg-gradient-to-r from-[#C9A84C] to-transparent"
              style={{
                width: isVisible ? '100px' : '0',
                transition: 'width 1.5s ease-out 0.3s'
              }} />

          </div>

          <h2 className="font-black text-white mb-12 flex flex-wrap justify-center gap-4 text-[clamp(0.75rem,2vw,6rem)]">
            {words.map((word, idx) =>
            <span
              key={idx}
              className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-12 scale-75'}`}
              style={{
                transitionDelay: `${idx * 200}ms`,
                transitionTimingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
                textShadow: '0 4px 20px rgba(0,0,0,0.7)'
              }}>

                {word}
              </span>
            )}
          </h2>

          <div className="space-y-6 mb-20">
            <p
              className={`text-[#D4A574] italic font-medium transition-all duration-1000 delay-[1000ms] text-[clamp(0.75rem,2vw,1.5rem)] ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
              style={{
                textShadow: '0 2px 10px rgba(0,0,0,0.5)'
              }}>

              {t('line1')}
            </p>
            <p
              className={`text-[#B87333] italic font-medium transition-all duration-1000 delay-[1300ms] text-[clamp(0.75rem,2vw,1.5rem)] ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
              style={{
                textShadow: '0 2px 10px rgba(0,0,0,0.5)'
              }}>

              {t('line2')}
            </p>
            <p
              className={`font-black text-[#C9A84C] transition-all duration-1000 delay-[1600ms] text-[clamp(0.75rem,2vw,3rem)] ${isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-6 scale-95'}`}
              style={{
                textShadow: '0 4px 20px rgba(0,0,0,0.7)'
              }}>

              {t('line3')}
            </p>
          </div>

          <div
            className={`relative flex flex-col sm:flex-row justify-center gap-6 transition-all duration-1000 delay-[2000ms] ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>

            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-md rounded-full border animate-[ping_3s_ease-in-out_infinite] opacity-15 pointer-events-none"
              style={{
                borderColor: '#C9A84C'
              }} />

            <Link
              href="/execution"
              className="relative z-10 bg-gradient-to-r from-[#C9A84C] via-[#D4A574] to-[#B87333] text-white px-10 py-4 rounded-full font-bold hover:shadow-[0_0_30px_rgba(201,168,76,0.5)] hover:-translate-y-1 transition-all duration-300 text-[clamp(0.75rem,1vw,2rem)]">
              {t('cta')}
            </Link>
            <Link
              className="relative z-10 bg-transparent text-white px-10 py-4 rounded-full font-bold transition-all duration-300 hover:bg-white/10 overflow-hidden group text-[clamp(0.75rem,1vw,2rem)]"
              href="/">

              <div className="absolute inset-0 rounded-full border-2 border-white/30" />
              <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-[#C9A84C] border-r-[#D4A574] group-hover:animate-[spin-slow_3s_linear_infinite]" />
              {t('backHome')}
            </Link>
          </div>
        </div>
      </section>

    </>);

}