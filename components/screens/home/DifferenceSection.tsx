"use client"
 import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import {
  VolumeXIcon,
  UsersIcon,
  ShieldCheckIcon,
  KeyIcon,
  LockIcon,
} from 'lucide-react'
import { useRef } from 'react'
const differences = [
  {
    icon: VolumeXIcon,
    text: 'نعمل بصمت… ونُظهر النتائج فقط',
  },
  {
    icon: UsersIcon,
    text: 'نوفّر لك جهازًا إداريًا كاملًا يعمل لصالحك',
  },
  {
    icon: ShieldCheckIcon,
    text: 'نضمن لك حماية مصالحك قبل ظهور التهديد',
  },
  {
    icon: KeyIcon,
    text: 'نفتح لك أبوابًا لا تُفتح إلا للقلة',
  },
  {
    icon: LockIcon,
    text: 'نعمل بمنهجية مغلقة لا يعرف تفاصيلها إلا أنت',
  },
]
export function DifferenceSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, {
    once: true,
    margin: '-100px',
  })
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=1920&q=80')`,
        }}
      >
        <div className="absolute inset-0 bg-cream/95" />
      </div>

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
          <span className="inline-block rounded-full px-5 py-2 bg-gold/20 border border-gold/40 text-gold-dark font-tajawal text-sm mb-6">
            ما يجعلنا مختلفين
          </span>
          <h2 className="font-cairo font-bold text-3xl sm:text-4xl lg:text-5xl text-navy-dark mb-4">
            لماذا نحن <span className="text-gold">الخيار الأول</span>؟
          </h2>
        </motion.div>

        {/* Differences Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {differences.map((item, index) => {
            const Icon = item.icon
            return (
              <motion.div
                key={index}
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
                  delay: index * 0.1,
                }}
                className={`${index === 4 ? 'sm:col-span-2 lg:col-span-1 lg:col-start-2' : ''}`}
              >
                <div className="bg-white rounded-2xl p-6 shadow-xl shadow-black/5 border border-gray-100 h-full hover:shadow-2xl hover:border-gold/30 transition-all duration-300">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-gold/20 to-gold/5 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-7 h-7 text-gold" />
                    </div>
                    <p className="font-cairo font-bold text-lg text-navy-dark">
                      {item.text}
                    </p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
