'use client'
import { motion } from 'framer-motion'
import {
  Clock,
  Award,
  Eye,
  Infinity as InfinityIcon,
  Heart,
} from 'lucide-react'
export function ValuesSection() {
  const values = [
    {
      name: 'الانضباط',
      desc: 'كل خطوة محسوبة',
      icon: Clock,
    },
    {
      name: 'الاحتراف',
      desc: 'كل ملف يُدار بمعايير ثابتة',
      icon: Award,
    },
    {
      name: 'الوضوح',
      desc: 'لا نترك مساحة للغموض',
      icon: Eye,
    },
    {
      name: 'الاستمرارية',
      desc: 'علاقة طويلة المدى',
      icon: InfinityIcon,
    },
    {
      name: 'الاحترام',
      desc: 'احترام وقتك وثقتك وقرارك',
      icon: Heart,
    },
  ]
  return (
    <section className="py-24 bg-white px-[5%]">
      <div className=" mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            className="text-[clamp(0.75rem,2vw,6rem)] font-bold text-slate-900 mb-4"
          >
            قيمنا
          </motion.h2>
          <motion.p
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              delay: 0.1,
            }}
            className="text-[clamp(0.75rem,2vw,1.5rem)] text-amber-600 font-medium"
          >
            قيمنا ليست شعارات… هي قواعد تشغيل
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {values.map((value, index) => {
            const Icon = value.icon
            return (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                className="bg-[#FAFAF8] rounded-2xl p-6 text-center border border-slate-100 hover:border-amber-200 hover:shadow-lg hover:shadow-amber-900/5 transition-all group"
              >
                <div className="w-16 h-16 mx-auto bg-white rounded-full flex items-center justify-center mb-4 shadow-sm group-hover:scale-110 transition-transform">
                  <Icon className="w-8 h-8 text-amber-500" />
                </div>
                <h3 className="text-[clamp(0.75rem,1vw,3rem)] font-bold text-slate-900 mb-2">
                  {value.name}
                </h3>
                <p className="text-slate-600 text-[clamp(0.75rem,1vw,2rem)]">{value.desc}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
