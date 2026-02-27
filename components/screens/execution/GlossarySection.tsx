'use client'
import { motion } from 'framer-motion'
import {
  Anchor,
  TrendingUp,
  ShieldCheck,
  Brain,
  Network,
  Navigation,
} from 'lucide-react'
export function GlossarySection() {
  const terms = [
    {
      title: 'نقطة الثبات التنفيذي',
      desc: 'المرحلة التي يصبح فيها قرارك محميًا من التردد، ومسنودًا بتحليل لا يترك ثغرة.',
      icon: Anchor,
    },
    {
      title: 'خط النفوذ المتدرّج',
      desc: 'منهجية نستخدمها لبناء حضورك في السوق خطوة بخطوة… بدون ضوضاء.',
      icon: TrendingUp,
    },
    {
      title: 'دائرة الحماية الصامتة',
      desc: 'نظام مراقبة وتحليل يحمي مصالحك دون أن تشعر بوجوده.',
      icon: ShieldCheck,
    },
    {
      title: 'مسار القرار العميق',
      desc: 'أسلوب تحليل لا يعتمد على البيانات فقط… بل على قراءة ما وراء البيانات.',
      icon: Brain,
    },
    {
      title: 'هندسة العلاقات المؤثرة',
      desc: 'طريقة نرتّب بها علاقاتك بحيث تخدم أهدافك قبل أن تحتاج إليها.',
      icon: Network,
    },
    {
      title: 'نقطة الانعطاف الآمن',
      desc: 'لحظة اتخاذ القرار عندما يكون كل شيء واضحًا… ولا توجد مخاطرة غير محسوبة.',
      icon: Navigation,
    },
  ]
  const containerVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }
  const itemVariants = {
    hidden: {
      opacity: 0,
      scale: 0.95,
      y: 20,
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }
  return (
    <section className="py-24 bg-[#F0FDFA] relative px-[5%]">
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
            قاموس الكيان
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
            className="text-lg text-teal-800 mx-auto"
          >
            مصطلحات خاصة لا تُستخدم إلا هنا. هذه مفاهيم تشغيلية ابتكرناها…
            ومستحيل تلاقيها في أي مكان.
          </motion.p>
        </div>

        {/* Decorative Images Strip */}
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.9,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
          }}
          className="flex justify-center gap-4 mb-16"
        >
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            margin: '-50px',
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {terms.map((term, index) => {
            const Icon = term.icon
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300 border border-teal-100 group"
              >
                <div className="w-12 h-12 bg-teal-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-teal-500 group-hover:text-white transition-colors text-teal-600">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {term.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">{term.desc}</p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
