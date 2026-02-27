'use client'
import { motion } from 'framer-motion'
import {
  BarChart3,
  Telescope,
  Settings2,
  Shield,
  RefreshCw,
} from 'lucide-react'
export function OperatingSystemSection() {
  const layers = [
    {
      name: 'طبقة التحليل العميق',
      desc: 'تحليل لا يعتمد على البيانات فقط… بل على قراءة ما وراءها.',
      icon: BarChart3,
    },
    {
      name: 'طبقة التوقع الاستراتيجي',
      desc: 'نقرأ لك المستقبل قبل أن يتحرك.',
      icon: Telescope,
    },
    {
      name: 'طبقة التنفيذ المحكم',
      desc: 'تنفيذ لا يترك مساحة للخطأ.',
      icon: Settings2,
    },
    {
      name: 'طبقة الحماية الصامتة',
      desc: 'نظام مراقبة يحمي مصالحك دون أن تشعر بوجوده.',
      icon: Shield,
    },
    {
      name: 'طبقة التعديل اللحظي',
      desc: 'نعدّل المسار فورًا… قبل أن تتأثر النتيجة.',
      icon: RefreshCw,
    },
  ]
  return (
    <section className="py-24 bg-gradient-to-b from-white to-[#F5F0E8] px-[5%]">
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
            className="text-3xl md:text-5xl font-bold text-slate-900 mb-6"
          >
            نظام التشغيل التنفيذي
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
            className="text-xl text-slate-600 mx-auto"
          >
            هذا هو النظام الذي يميّزنا عن أي جهة أخرى
          </motion.p>
        </div>

        <div className="flex flex-col space-y-4 relative z-10">
          {layers.map((layer, index) => {
            const Icon = layer.icon
            // Calculate width for a pyramid/stacked effect
            const widthClass = [
              'w-full',
              'w-[95%]',
              'w-[90%]',
              'w-[85%]',
              'w-[80%]',
            ][index]
            return (
              <motion.div
                key={index}
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
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                className={`${widthClass} mx-auto bg-white rounded-2xl p-6 shadow-sm border border-slate-100 flex items-center gap-6 hover:shadow-md hover:-translate-y-1 transition-all group`}
              >
                <div className="w-14 h-14 bg-teal-50 rounded-xl flex items-center justify-center text-teal-600 shrink-0 group-hover:bg-teal-500 group-hover:text-white transition-colors">
                  <Icon className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-1">
                    {layer.name}
                  </h3>
                  <p className="text-slate-600">{layer.desc}</p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
