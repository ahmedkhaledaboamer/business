"use client"
 import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { EyeIcon, HeartHandshakeIcon } from 'lucide-react'
import { useRef } from 'react'
export function VisionSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, {
    once: true,
    margin: '-100px',
  })
  return (
    <section className="py-32 bg-navy-dark relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-gold/5 rounded-full blur-[120px]" />
        <div className="absolute inset-0 pattern-lines opacity-20" />
      </div>

      <div
        ref={ref}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
      >
        <div className="grid lg:grid-cols-3 gap-12 items-center">
          {/* Vision - Right Side */}
          <motion.div
            initial={{
              opacity: 0,
              x: 50,
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
            className="text-center lg:text-right glass-dark p-10 rounded-3xl border-r-4 border-r-gold hover:-translate-y-2 transition-transform duration-500"
          >
            <span className="inline-block rounded-full px-5 py-2 bg-gold/20 border border-gold/30 text-gold font-tajawal text-sm mb-8 shadow-[0_0_10px_rgba(201,168,76,0.2)]">
              رؤيتنا المستقبلية
            </span>

            <div className="flex items-center justify-center lg:justify-start gap-4 mb-8">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-gold/20 to-gold/5 border border-gold/20 flex items-center justify-center shadow-inner">
                <EyeIcon className="w-10 h-10 text-gold" />
              </div>
            </div>

            <h3 className="font-cairo font-bold text-3xl text-white mb-6 leading-tight">
              أن نصبح{' '}
              <span className="text-gold drop-shadow-md">الشريك الأول</span>{' '}
              لرجال الأعمال في المنطقة
            </h3>

            <p className="font-tajawal text-lg text-white/70 leading-relaxed">
              والجهة التي يعتمد عليها كبار المستثمرين في بناء النفوذ وصناعة
              النمو المستدام.
            </p>
          </motion.div>

          {/* Center Image - New Addition */}
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.8,
            }}
            animate={
              isInView
                ? {
                    opacity: 1,
                    scale: 1,
                  }
                : {}
            }
            transition={{
              duration: 1,
              delay: 0.2,
            }}
            className="hidden lg:block relative h-[600px] rounded-[2.5rem] overflow-hidden shadow-[0_0_40px_rgba(201,168,76,0.15)] border border-white/10 group"
          >
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80"
              alt="رؤية استراتيجية"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-dark via-navy-dark/40 to-transparent mix-blend-multiply" />

            {/* Animated Gold Border Overlay */}
            <div className="absolute inset-4 border border-gold/30 rounded-[2rem] z-10" />
            <div className="absolute inset-0 bg-gold/10 mix-blend-overlay" />
          </motion.div>

          {/* Promise - Left Side */}
          <motion.div
            initial={{
              opacity: 0,
              x: -50,
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
              delay: 0.4,
            }}
            className="text-center lg:text-right glass-dark p-10 rounded-3xl border-l-4 border-l-teal hover:-translate-y-2 transition-transform duration-500"
          >
            <span className="inline-block rounded-full px-5 py-2 bg-teal/20 border border-teal/30 text-teal-light font-tajawal text-sm mb-8 shadow-[0_0_10px_rgba(14,124,107,0.2)]">
              وعدنا لك
            </span>

            <div className="flex items-center justify-center lg:justify-start gap-4 mb-8">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-teal/20 to-teal/5 border border-teal/20 flex items-center justify-center shadow-inner">
                <HeartHandshakeIcon className="w-10 h-10 text-teal-light" />
              </div>
            </div>

            <h3 className="font-cairo font-bold text-3xl text-white mb-6 leading-tight">
              نلتزم بأن نكون{' '}
              <span className="text-teal-light drop-shadow-md">الشريك</span>{' '}
              الذي يحمي مصالحك
            </h3>

            <p className="font-tajawal text-lg text-white/70 leading-relaxed">
              ويعزّز نفوذك، ويصنع لك مسارًا آمنًا للنمو والتوسع.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
