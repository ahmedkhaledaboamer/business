'use client'
import { motion } from 'framer-motion'
import { Eye, Send, Target, CheckCircle } from 'lucide-react'
import Image from 'next/image'
export function VisionMissionSection() {
  const containerVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }
  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  }
  return (
    <section id="vision" className="py-24 bg-white relative px-[5%]">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        {/* Banner Image */}
        <motion.div
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
            duration: 0.8,
          }}
          className="w-full mb-16 relative rounded-2xl overflow-hidden shadow-md"
        >
          <Image
            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1200&q=80"
            alt="فريق عمل تنفيذي يخطط للمستقبل"
            loading="lazy"
            className="w-full max-h-[600px] object-cover"
            width={1000}
            height={1000}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-amber-900/40 to-transparent mix-blend-multiply"></div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            margin: '-100px',
          }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {/* Vision */}
          <motion.div
            variants={itemVariants}
            className="bg-[#FAFAF8] rounded-2xl p-8 shadow-sm border-t-4 border-amber-500 relative overflow-hidden group hover:shadow-md transition-shadow"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-100 rounded-bl-full -z-10 opacity-50 group-hover:scale-110 transition-transform"></div>
            <div className="w-14 h-14 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6 text-amber-600">
              <Eye className="w-7 h-7" />
            </div>
            <h3 className="text-[clamp(0.75rem,2vw,2rem)] font-bold text-slate-900 mb-4">رؤيتنا</h3>
            <p className="text-slate-600 text-[clamp(0.75rem,1vw,2rem)] leading-relaxed">
              أن نصبح الجهة التي يلجأ إليها رجل الأعمال عندما يريد: قرارًا لا
              يهتز، تنفيذًا لا يتعطل، ومسارًا لا يترك مجالًا للصدفة.
            </p>
            <p className="mt-4 font-bold text-slate-800 text-[clamp(0.75rem,1vw,2rem)]">
              نحن لا نطمح أن نكون خيارًا… نحن نطمح أن نكون المرجع التنفيذي
              الأول.
            </p>
          </motion.div>

          {/* Mission */}
          <motion.div
            variants={itemVariants}
            className="bg-[#FAFAF8] rounded-2xl p-8 shadow-sm border-t-4 border-teal-500 relative overflow-hidden group hover:shadow-md transition-shadow"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-teal-50 rounded-bl-full -z-10 opacity-50 group-hover:scale-110 transition-transform"></div>
            <div className="w-14 h-14 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6 text-teal-600">
              <Send className="w-7 h-7" />
            </div>
            <h3 className="text-[clamp(0.75rem,2vw,2rem)] font-bold text-slate-900 mb-4">رسالتنا</h3>
            <p className="text-slate-600 text-[clamp(0.75rem,1vw,2rem)] leading-relaxed">
              أن نقدّم لرجل الأعمال منظومة تشغيل متكاملة، تجمع بين السرية،
              والدقة، والوعي، وتمنحه تجربة تعامل تُشعره أن هناك كيانًا يعمل
              لصالحه كما لو كان جزءًا من فريقه الخاص…
            </p>
            <p className="mt-4 font-bold text-slate-800 text-[clamp(0.75rem,1vw,2rem)]">
              لكن بمعايير أعلى، ورؤية أوسع، ومسؤولية أكبر.
            </p>
          </motion.div>

          {/* Goals */}
          <motion.div
            variants={itemVariants}
            className="bg-[#FAFAF8] rounded-2xl p-8 shadow-sm border-t-4 border-amber-500 relative overflow-hidden group hover:shadow-md transition-shadow"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-100 rounded-bl-full -z-10 opacity-50 group-hover:scale-110 transition-transform"></div>
            <div className="w-14 h-14 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6 text-amber-600">
              <Target className="w-7 h-7" />
            </div>
            <h3 className="text-[clamp(0.75rem,2vw,2rem)] font-bold text-slate-900 mb-4">هدفنا</h3>
            <p className="text-slate-600 text-[clamp(0.75rem,1vw,2rem)] mb-4">تمكين رجل الأعمال من:</p>
            <ul className="space-y-3 mb-6">
              {[
                'اتخاذ قرارات محسوبة',
                'بناء نفوذ مستدام',
                'إدارة ملفات حساسة بثقة',
                'التحرك في السوق بثبات',
                'الوصول إلى نتائج لا تحتاج تفسير',
              ].map((item, i) => (
                <li key={i} className="flex items-start text-slate-700 text-[clamp(0.75rem,1vw,2rem)]">
                  <CheckCircle className="w-5 h-5 text-teal-500 ml-2 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="font-bold text-slate-800 text-[clamp(0.75rem,1vw,2rem)] pt-4 border-t border-slate-200">
              هدفنا ليس أن نخدمه… هدفنا أن نرفع مستوى حضوره وتأثيره.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
