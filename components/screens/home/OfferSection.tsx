"use client"
 import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { CheckCircleIcon, StarIcon } from 'lucide-react'
import { useRef } from 'react'
import { useTranslations } from 'next-intl'

export function OfferSection({ locale }: { locale: string }) {
  const isRTL = locale === "ar";
  const t = useTranslations('offer')
  const ref = useRef(null)
  const isInView = useInView(ref, {
    once: true,
    margin: '-100px',
  })
  return (
    <section className="py-24 relative overflow-hidden px-[5%]" dir={isRTL ? "rtl" : "ltr"}>
      {/* Background Image - Richer luxury office */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1920&q=80')`,
        }}
      >
        <div className="absolute inset-0 bg-navy-dark/90 backdrop-blur-sm" />
        <div className="absolute inset-0 bg-gradient-to-br from-burgundy/30 via-navy-dark/80 to-teal/20 mix-blend-overlay" />
      </div>

      {/* Animated Gold Lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            x: isRTL ? ['100%', '-100%'] : ['-100%', '100%'],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent"
        />
        <motion.div
          animate={{
            x: isRTL ? ['-100%', '100%'] : ['100%', '-100%'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute bottom-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-teal/50 to-transparent"
        />
      </div>

      <div
        ref={ref}
        className="mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
      >
        <div className="grid lg:grid-cols-2 gap-10">
          {/* ماذا نقدم */}
          <motion.div
            initial={{
              opacity: 0,
              x: isRTL ? -50 : 50,
            }}
            animate={
              isInView
                ? {
                    opacity: 1,
                    x: 0,
                  }
                : {}
            }
            transition={{
              duration: 0.8,
            }}
            className="group relative"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-gold/50 to-gold-light/20 rounded-[2rem] blur opacity-20 group-hover:opacity-40 transition duration-500" />
            <div className="relative glass-dark rounded-3xl p-8 sm:p-12 border-t-4 border-t-gold h-full">
              <span className="inline-block rounded-full px-5 py-2 bg-gold/10 border border-gold/30 text-gold font-tajawal text-sm mb-8 shadow-[0_0_10px_rgba(201,168,76,0.2)]">
                {t('whatWeOfferLabel')}
              </span>

              <h3 className="font-cairo font-bold text-[clamp(0.75rem,2vw,6rem)] text-white mb-10">
                {t('whatWeOfferTitle')}{' '}
                <span className="text-gold drop-shadow-md">{t('whatWeOfferHighlight')}</span>
              </h3>

              <ul className="space-y-6">
                {[0, 1, 2, 3, 4, 5].map((index) => (
                  <motion.li
                    key={index}
                    initial={{
                      opacity: 0,
                      x: isRTL ? -20 : 20,
                    }}
                    animate={
                      isInView
                        ? {
                            opacity: 1,
                            x: 0,
                          }
                        : {}
                    }
                    transition={{
                      duration: 0.5,
                      delay: index * 0.1,
                    }}
                    className="flex items-center gap-5 group/item"
                  >
                    <div className="w-10 h-10 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center flex-shrink-0 group-hover/item:bg-gold/30 group-hover/item:scale-110 transition-all duration-300 shadow-inner">
                      <CheckCircleIcon className="w-5 h-5 text-gold" />
                    </div>
                    <span className="font-tajawal text-[clamp(1rem,1vw,3rem)] text-white/90 group-hover/item:text-white transition-colors">
                      {t(`offers.${index}`)}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* What you get */}
          <motion.div
            initial={{
              opacity: 0,
              x: isRTL ? 50 : -50,
            }}
            animate={
              isInView
                ? {
                    opacity: 1,
                    x: 0,
                  }
                : {}
            }
            transition={{
              duration: 0.8,
              delay: 0.2,
            }}
            className="group relative"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-teal/50 to-teal-light/20 rounded-[2rem] blur opacity-20 group-hover:opacity-40 transition duration-500" />
            <div className="relative glass-dark rounded-3xl p-8 sm:p-12 border-t-4 border-t-teal h-full">
              <span className="inline-block rounded-full px-5 py-2 bg-teal/10 border border-teal/30 text-teal-light font-tajawal text-sm mb-8 shadow-[0_0_10px_rgba(14,124,107,0.2)]">
                {t('whatYouGetLabel')}
              </span>

              <h3 className="font-cairo font-bold text-[clamp(0.75rem,2vw,6rem)] text-white mb-10">
                {t('whatYouGetTitle')}{' '}
                <span className="text-teal-light drop-shadow-md">{t('whatYouGetHighlight')}</span>
              </h3>

              <ul className="space-y-6">
                {[0, 1, 2, 3, 4,5].map((index) => (
                  <motion.li
                    key={index}
                    initial={{
                      opacity: 0,
                      x: isRTL ? 20 : -20,
                    }}
                    animate={
                      isInView
                        ? {
                            opacity: 1,
                            x: 0,
                          }
                        : {}
                    }
                    transition={{
                      duration: 0.5,
                      delay: 0.2 + index * 0.1,
                    }}
                    className="flex items-center gap-5 group/item"
                  >
                    <div className="w-10 h-10 rounded-full bg-teal/10 border border-teal/20 flex items-center justify-center flex-shrink-0 group-hover/item:bg-teal/30 group-hover/item:scale-110 transition-all duration-300 shadow-inner">
                      <StarIcon className="w-5 h-5 text-teal-light" />
                    </div>
                    <span className="font-tajawal text-[clamp(1rem,1vw,3rem)] text-white/90 group-hover/item:text-white transition-colors">
                      {t(`benefits.${index}`)}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
