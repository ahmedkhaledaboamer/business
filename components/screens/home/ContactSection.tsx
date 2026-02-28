"use client"
 import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { ArrowLeftIcon, ArrowRightIcon, MailIcon, PhoneIcon } from 'lucide-react'
import { useRef } from 'react'
import { useTranslations } from 'next-intl'

export function ContactSection({ locale }: { locale: string }) {
  const isRTL = locale === "ar";
  const t = useTranslations('contact')
  const ref = useRef(null)
  const isInView = useInView(ref, {
    once: true,
    margin: '-100px',
  })
  return (
    <section id="contact" className="py-24 relative overflow-hidden px-[5%]" dir={isRTL ? "rtl" : "ltr"}>
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy-dark via-burgundy-dark to-navy-dark" />

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
          }}
          className="absolute top-1/4 right-1/4 w-96 h-96 bg-gold/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
          }}
          className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-teal/20 rounded-full blur-3xl"
        />
      </div>

      <div
        ref={ref}
        className=" mx-auto px-4 sm:px-6 lg:px-8 relative text-center"
      >
        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          animate={
            isInView
              ? {
                  opacity: 1,
                  y: 0,
                }
              : {}
          }
          transition={{
            duration: 0.8,
          }}
        >
          <span className="inline-block rounded-full px-5 py-2 bg-gold/20 border border-gold/30 text-gold font-tajawal text-sm mb-8">
            {t('badge')}
          </span>

          <h2 className="font-cairo font-bold text-3xl sm:text-4xl lg:text-5xl text-white mb-6">
            {t('title')}
            <br />
            <span className="text-gold">{t('titleHighlight')}</span>
          </h2>

          <p className="font-tajawal text-lg sm:text-xl text-white/70 mb-10 mx-auto">
            {t('subtitle')}
          </p>

          {/* CTA Button */}
          <motion.a
            href="/execution"
            whileHover={{
              scale: 1.05,
            }}
            whileTap={{
              scale: 0.95,
            }}
            className="group inline-flex items-center gap-3 bg-gold hover:bg-gold-light text-navy-dark font-cairo font-bold text-lg px-10 py-5 rounded-full transition-all duration-300 shadow-2xl shadow-gold/30 mb-12"
          >
            <span>{t('cta')}</span>
            {isRTL ? <ArrowLeftIcon className="w-5 h-5 group-hover:-translate-x-1 transition-transform" /> : <ArrowRightIcon className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />}
          </motion.a>

          {/* Contact Info */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
            <motion.a
              href={`mailto:${t('email')}`}
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={
                isInView
                  ? {
                      opacity: 1,
                      y: 0,
                    }
                  : {}
              }
              transition={{
                duration: 0.6,
                delay: 0.3,
              }}
              className="flex items-center gap-3 text-white/70 hover:text-gold transition-colors"
            >
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                <MailIcon className="w-5 h-5" />
              </div>
              <span className="font-tajawal">{t('email')}</span>
            </motion.a>

            <motion.a
              href={`tel:${t('phone').replace(/\s/g, '')}`}
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={
                isInView
                  ? {
                      opacity: 1,
                      y: 0,
                    }
                  : {}
              }
              transition={{
                duration: 0.6,
                delay: 0.4,
              }}
              className="flex items-center gap-3 text-white/70 hover:text-gold transition-colors"
            >
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                <PhoneIcon className="w-5 h-5" />
              </div>
              <span className="font-tajawal" dir="ltr">
                {t('phone')}
              </span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
