'use client'
import { motion } from 'framer-motion'
import { Shield, Target, TrendingUp, ChevronDown } from 'lucide-react'
export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center bg-[#FAFAF8] overflow-hidden px-[5%] py-24"
    >
      {/* Decorative Background */}
      <div className="absolute inset-0 bg-pattern opacity-[0.03] pointer-events-none"></div>

      {/* Decorative Gradients */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-100/40 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-teal-50/60 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3"></div>

      {/* Floating Icons */}
      <motion.div
        animate={{
          y: [0, -15, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-1/4 right-[15%] hidden lg:block text-amber-200"
      >
        <Shield className="w-16 h-16" />
      </motion.div>
      <motion.div
        animate={{
          y: [0, 20, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1,
        }}
        className="absolute bottom-1/3 left-[10%] hidden lg:block text-teal-200"
      >
        <Target className="w-20 h-20" />
      </motion.div>
      <motion.div
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          duration: 3.5,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 2,
        }}
        className="absolute top-1/3 left-[20%] hidden lg:block text-amber-100"
      >
        <TrendingUp className="w-12 h-12" />
      </motion.div>

      <div className="relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Text Content (Right side in RTL) */}
          <div className="flex-1 text-center lg:text-right">
            <motion.div
              initial={{
                opacity: 0,
                y: 30,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.8,
              }}
            >
              <span className="inline-block py-1 px-3 rounded-full bg-amber-100 text-amber-700 text-sm font-semibold tracking-wider mb-6 border border-amber-200">
                مقدمة
              </span>
              <h1 className="text-5xl md:text-7xl font-black text-slate-900 mb-8 leading-tight">
                مسارك <span className="text-amber-600">التنفيذي</span>
              </h1>
            </motion.div>

            <motion.div
              initial={{
                opacity: 0,
                y: 30,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.8,
                delay: 0.2,
              }}
              className="space-y-6 text-lg md:text-2xl text-slate-600 font-medium leading-relaxed"
            >
              <p>
                في عالم تتغير فيه قواعد اللعبة كل يوم، ويزداد فيه الضجيج بينما
                يقلّ فيه الفعل، اخترنا أن نكون الجهة التي لا ترفع صوتها… بل ترفع
                مستوى عملها.
              </p>
              <p>
                الكيان الذي لا يركض خلف الفرص… بل يصنعها. والشريك الذي لا يقدّم
                خدمة… بل يبني مسارًا تنفيذيًا يليق برجل أعمال يعرف قيمته.
              </p>
              <p className="text-slate-800 font-bold text-xl md:text-3xl pt-4">
                نحن لا نكتب تعريفًا لنبدو مختلفين… نحن مختلفون بالفعل.
              </p>
              <p className="text-base md:text-xl text-slate-500 pt-4">
                نكتب هويتنا كما نعمل: بثقة، وهدوء، وعمق، ومنهجية لا تعتمد على
                الحظ، ولا تتأثر بالضوضاء. هذه ليست مقدمة شركة… هذه هوية كيان
                يعمل ليكون القوة التي تقف خلفك، وتحمي مصالحك، وتُمهّد لك الطريق،
                وتُظهر قيمتك في كل خطوة.
              </p>
            </motion.div>
          </div>

          {/* Image Content (Left side in RTL) */}
          <motion.div
            initial={{
              opacity: 0,
              x: -50,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 1,
              delay: 0.4,
            }}
            className="flex-1 relative w-full max-w-lg mx-auto lg:max-w-none mt-12 lg:mt-0"
          >
            {/* Decorative back image */}
            <div className="absolute -top-10 -left-10 w-64 h-64 rounded-2xl overflow-hidden opacity-60 blur-[2px] shadow-lg hidden md:block">
              <img
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&q=80"
                alt="مكتب تنفيذي حديث"
                loading="lazy"
                className="w-full h-52 object-cover"
              />
            </div>

            {/* Main image */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white  z-10 h-80">
              <img
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80"
                alt="مبنى زجاجي حديث يعكس القوة التنفيذية"
                loading="lazy"
                className="w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent"></div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 1,
            delay: 1.5,
          }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center text-slate-400"
        >
          <span className="text-sm mb-2">اكتشف المزيد</span>
          <motion.div
            animate={{
              y: [0, 10, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
          >
            <ChevronDown className="w-6 h-6" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
