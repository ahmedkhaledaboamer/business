'use client';
import { useEffect, useState } from 'react';
import { ShieldCheck, Globe, Award } from 'lucide-react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import Image from 'next/image';

type CTAProps = { locale: string };

export function CTA({ locale }: CTAProps) {
  const t = useTranslations('administrativeApparatus.cta');
  const [isModalOpen, setIsModalOpen] = useState(false);
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isModalOpen]);

  return (
    <section className="relative py-32 overflow-hidden">
      {/* Parallax Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/imges/administrative-apparatus/24.webp"
          alt=""
          fill
          className="object-cover object-center"
          sizes="100vw"
          priority
        />
      </div>


      {/* Rich Gradient Overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-navy/95 via-navy/70 to-navy/90" />
      <div className="absolute inset-0 z-10 bg-gradient-to-tr from-gold/10 to-transparent mix-blend-overlay" />

      {/* Decorative Radiating Lines */}
      <div className="absolute inset-0 z-15 flex items-center justify-center opacity-20 pointer-events-none">
        <div className="w-[800px] h-[800px] rounded-full border border-gold/30 animate-pulse" />
        <div
          className="absolute w-[600px] h-[600px] rounded-full border border-gold/20 animate-pulse"
          style={{
            animationDelay: '0.5s'
          }} />

        <div
          className="absolute w-[400px] h-[400px] rounded-full border border-gold/10 animate-pulse"
          style={{
            animationDelay: '1s'
          }} />

      </div>

      <div className="relative z-20 max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-[clamp(0.75rem,2vw,6rem)] font-bold text-white mb-6 leading-tight">
          {t('title')} <span className="gradient-text">{t('titleHighlight')}</span>
        </h2>
        <p className="text-[clamp(0.75rem,2vw,1.5rem)] text-gold-light italic mb-12 font-medium">
          {t('subtitle')}
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
          <Link href="/execution" className="bg-gradient-to-r from-gold to-gold-dark hover:from-gold-light hover:to-gold text-white text-[clamp(0.75rem,1vw,2rem)] px-12 py-5 rounded-full transition-all hover:scale-105 shadow-glow w-full sm:w-auto font-bold">
            {t('cta')}
          </Link>
        </div>

        {/* Trust Badges */}
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 pt-8 border-t border-white/10">
          <div className="flex flex-col items-center gap-3">
            <ShieldCheck className="w-8 h-8 text-gold" />
            <span className="text-gray-300 font-medium text-[clamp(0.75rem,2vw,1.5rem)]">{t('confidentiality')}</span>
          </div>
          <div className="flex flex-col items-center gap-3">
            <Globe className="w-8 h-8 text-gold" />
            <span className="text-gray-300 font-medium text-[clamp(0.75rem,2vw,1.5rem)]">{t('experience')}</span>
          </div>
          <div className="flex flex-col items-center gap-3">
            <Award className="w-8 h-8 text-gold" />
            <span className="text-gray-300 font-medium text-[clamp(0.75rem,2vw,1.5rem)]">{t('guaranteed')}</span>
          </div>
        </div>
      </div>

    </section>);

}