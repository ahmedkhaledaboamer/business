"use client"
 import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { ArrowLeftIcon, MailIcon, PhoneIcon } from 'lucide-react'
import { useRef } from 'react'
export function ContactSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, {
    once: true,
    margin: '-100px',
  })
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
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
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center"
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
            تواصل معنا
          </span>

          <h2 className="font-cairo font-bold text-3xl sm:text-4xl lg:text-5xl text-white mb-6">
            ابدأ الآن ببناء مسار قرار
            <br />
            <span className="text-gold">يعزّز قوة كيانك</span>
          </h2>

          <p className="font-tajawal text-lg sm:text-xl text-white/70 mb-10 max-w-2xl mx-auto">
            نحن هنا لنضعك أمام الفرص الصحيحة ونحميك من المخاطر غير المرئية.
          </p>

          {/* CTA Button */}
          <motion.a
            href="mailto:contact@example.com"
            whileHover={{
              scale: 1.05,
            }}
            whileTap={{
              scale: 0.95,
            }}
            className="group inline-flex items-center gap-3 bg-gold hover:bg-gold-light text-navy-dark font-cairo font-bold text-lg px-10 py-5 rounded-full transition-all duration-300 shadow-2xl shadow-gold/30 mb-12"
          >
            <span>تواصل معنا الآن</span>
            <ArrowLeftIcon className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          </motion.a>

          {/* Contact Info */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
            <motion.a
              href="mailto:contact@example.com"
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
              <span className="font-tajawal">contact@example.com</span>
            </motion.a>

            <motion.a
              href="tel:+966500000000"
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
                +966 50 000 0000
              </span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
