"use client"
 import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { CrownIcon } from 'lucide-react'
import { useRef } from 'react'
const levels = [
  {
    name: 'الأساسي',
    description: 'إدارة ملفاتك اليومية باحترافية وثبات.',
    tier: 1,
  },
  {
    name: 'الاستراتيجي',
    description: 'تحليل، رؤية، وتخطيط لمسارات طويلة المدى.',
    tier: 2,
  },
  {
    name: 'عالي الحساسية',
    description: 'إدارة الملفات التي لا يجب أن يراها أحد.',
    tier: 3,
  },
  {
    name: 'الخاص',
    description: 'خدمات مصممة حسب شخصيتك، أهدافك، وطريقة عملك.',
    tier: 4,
  },
  {
    name: 'السيادي',
    description:
      'أعلى مستوى تشغيل… لرجال الأعمال الذين يحتاجون قوة تنفيذية كاملة.',
    tier: 5,
    featured: true,
  },
]
export function ServiceLevelsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, {
    once: true,
    margin: '-100px',
  })
  return (
    <section className="py-24 bg-warm-white relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pattern-dots opacity-30" />

      <div
        ref={ref}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative"
      >
        {/* Header */}
        <motion.div
          initial={{
            opacity: 0,
            y: 30,
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
          }}
          className="text-center mb-16"
        >
          <span className="inline-block rounded-full px-5 py-2 bg-burgundy/15 border border-burgundy/30 text-burgundy font-tajawal text-sm mb-6">
            مستويات الخدمة
          </span>
          <h2 className="font-cairo font-bold text-3xl sm:text-4xl lg:text-5xl text-navy-dark mb-4">
            مستويات تشغيل <span className="text-gold">متدرجة</span>
          </h2>
          <p className="font-tajawal text-lg text-navy/60 max-w-2xl mx-auto">
            نحن لا نقدّم خدمة واحدة… نحن نقدّم مستويات تشغيل
          </p>
        </motion.div>

        {/* Levels Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {levels.map((level, index) => (
            <motion.div
              key={index}
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
                duration: 0.6,
                delay: index * 0.1,
              }}
              className={`relative ${level.featured ? 'lg:-mt-4 lg:mb-4' : ''}`}
            >
              <div
                className={`h-full rounded-2xl p-6 transition-all duration-300 ${level.featured ? 'bg-gradient-to-br from-gold via-gold-light to-gold text-navy-dark shadow-2xl shadow-gold/30 ring-2 ring-gold' : 'bg-white border border-gray-100 shadow-lg shadow-black/5 hover:shadow-xl hover:border-gold/30'}`}
              >
                {/* Tier Badge */}
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center mb-4 ${level.featured ? 'bg-navy-dark/20' : 'bg-gradient-to-br from-navy/10 to-navy/5'}`}
                >
                  {level.featured ? (
                    <CrownIcon className="w-5 h-5 text-navy-dark" />
                  ) : (
                    <span className="font-cairo font-bold text-navy">
                      {level.tier}
                    </span>
                  )}
                </div>

                {/* Content */}
                <h3
                  className={`font-cairo font-bold text-lg mb-2 ${level.featured ? 'text-navy-dark' : 'text-navy-dark'}`}
                >
                  {level.name}
                </h3>
                <p
                  className={`font-tajawal text-sm ${level.featured ? 'text-navy-dark/80' : 'text-navy/60'}`}
                >
                  {level.description}
                </p>

                {/* Featured Label */}
                {level.featured && (
                  <div className="absolute -top-3 right-4 bg-navy-dark text-gold text-xs font-cairo font-bold px-3 py-1 rounded-full">
                    الأعلى
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
