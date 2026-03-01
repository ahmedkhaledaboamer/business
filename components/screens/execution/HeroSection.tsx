'use client'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { useLocale, useTranslations } from 'next-intl'

export function HeroSection() {
  const containerRef = useRef(null)
  const locale = useLocale()
  const t = useTranslations('execution.hero')
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start start', 'end start'] })
  const yBg = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0])

  const words = t.raw('words') as string[]
  const stats = t.raw('stats') as { num: string; label: string }[]

  return (
    <section
      ref={containerRef}
      id="hero"
      dir={locale === 'ar' ? 'rtl' : 'ltr'}
      className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-[#0A0905]  px-[5%] items-center pt-[5%]"
    >
      <style>{`
        .grain-overlay::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.08'/%3E%3C/svg%3E");
          opacity: 0.35;
          pointer-events: none;
          z-index: 2;
        }

        .gold-line {
          background: linear-gradient(90deg, transparent, #C9A84C, #F0D080, #C9A84C, transparent);
        }

        .text-gold {
          color: #C9A84C;
        }

        .text-gold-light {
          color: #F0D080;
        }

        .border-gold {
          border-color: #C9A84C;
        }

        .vertical-text {
          writing-mode: vertical-rl;
          text-orientation: mixed;
        }

        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }

        .shimmer-text {
          background: linear-gradient(90deg, #C9A84C 0%, #F0D080 40%, #C9A84C 60%, #8B6914 100%);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: shimmer 4s linear infinite;
        }

        .split-line {
          overflow: hidden;
        }
      `}</style>

      {/* Grain texture */}
      <div className="grain-overlay absolute inset-0 pointer-events-none z-10" />

      {/* Parallax background image */}
      <motion.div 
        style={{ y: yBg }}
        className="absolute inset-0 z-0"
      >
        <img
          src="/imges/execution/01.webp"
          alt=""
          className="w-full h-full object-cover"
          style={{ filter: 'brightness(0.18) contrast(1.1) saturate(0.5)' }}
        />
        {/* Vignette */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0905]/60 via-transparent to-[#0A0905]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0905]/80 via-transparent to-[#0A0905]/60" />
      </motion.div>

      {/* Decorative vertical lines */}
      <div className="absolute top-0 bottom-0 right-[8%] w-px bg-gradient-to-b from-transparent via-[#C9A84C]/30 to-transparent z-10" />
      <div className="absolute top-0 bottom-0 left-[8%] w-px bg-gradient-to-b from-transparent via-[#C9A84C]/15 to-transparent z-10" />

      {/* Decorative corner ornaments */}
      <div className="absolute top-8 right-8 z-20 hidden lg:block">
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
          <path d="M60 0 L60 60" stroke="#C9A84C" strokeWidth="0.5" strokeOpacity="0.5"/>
          <path d="M0 0 L60 0" stroke="#C9A84C" strokeWidth="0.5" strokeOpacity="0.5"/>
          <circle cx="60" cy="0" r="3" fill="#C9A84C" fillOpacity="0.6"/>
        </svg>
      </div>
      <div className="absolute bottom-8 left-8 z-20 hidden lg:block">
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
          <path d="M0 60 L0 0" stroke="#C9A84C" strokeWidth="0.5" strokeOpacity="0.5"/>
          <path d="M60 60 L0 60" stroke="#C9A84C" strokeWidth="0.5" strokeOpacity="0.5"/>
          <circle cx="0" cy="60" r="3" fill="#C9A84C" fillOpacity="0.6"/>
        </svg>
      </div>

      {/* Ambient glows (center) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full z-0"
        style={{ background: 'radial-gradient(ellipse, rgba(201,168,76,0.04) 0%, transparent 70%)' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full z-0"
        style={{ background: 'radial-gradient(circle, rgba(240,208,128,0.08) 0%, rgba(201,168,76,0.03) 40%, transparent 70%)' }} />

      {/* Main Content */}
      <motion.div style={{ opacity }} className="relative z-20 px-8 md:px-16 lg:px-24 mx-auto w-full">

         

        {/* Hero headline */}
        <div className="mb-12 flex flex-row items-center justify-center md:gap-20">
          {words.map((word, i) => (
            <div key={i} className="split-line">
              <motion.div
                initial={{ y: '100%', opacity: 0 }}
                animate={{ y: '0%', opacity: 1 }}
                transition={{ duration: 0.9, delay: 0.4 + i * 0.15, ease: [0.16, 1, 0.3, 1] }}
              >
                <span
                  className={`block leading-none font-black ${i === 1 ? 'shimmer-text' : 'text-white'}`}
                  style={{
                    fontSize: 'clamp(1rem, 5vw, 13rem)',
                    fontFamily: 'Noto Naskh Arabic, serif',
                    lineHeight: 1.05,
                    letterSpacing: '-0.01em',
                    margin: '0 10px',
                  }}
                >
                  {word}
                </span>
              </motion.div>
            </div>
          ))}
        </div>

        {/* Gold divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.2, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="h-px w-full max-w-2xl gold-line mb-12 mx-auto"
        />

        {/* Body text columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 1.0 }}
          >
            <p className="text-[#D4C5A0]/75 text-[clamp(0.75rem,2vw,3rem)] leading-[1.9] font-light">
              {t('intro')}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 1.15 }}
            className="space-y-6"
          >
            <p className="text-[#D4C5A0]/75 text-[clamp(0.75rem,2vw,3rem)] leading-[1.9] font-light">
              {t('tagline')}
            </p>
            
          </motion.div>
        </div>

        {/* Bottom row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.4 }}
          className="mt-16 flex flex-col sm:flex-row items-start sm:items-center justify-center gap-8"
        >
          {/* Stats */}
          <div className="flex gap-10">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5 + i * 0.1, duration: 0.6 }}
                className="text-center"
              >
                <div className="text-[clamp(0.75rem,2vw,2rem)] font-bold text-gold" style={{ fontFamily: 'Playfair Display, serif' }}>
                  {stat.num}
                </div>
                <div className="text-[clamp(0.75rem,2vw,1.5rem)] text-[#8A7A5A] mt-1 tracking-wide">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 cursor-pointer"
        onClick={() => {
          window.scrollTo({
            top: window.innerHeight,
            behavior: 'smooth'
          })
        }}
      >
        <div className="w-px h-12 overflow-hidden">
          <motion.div
            animate={{ y: ['-100%', '200%'] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
            className="w-full h-1/2 bg-gradient-to-b from-transparent to-[#C9A84C]"
          />
        </div>
      </motion.div>
    </section>
  )
}