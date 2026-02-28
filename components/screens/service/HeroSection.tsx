"use client"
import { motion } from 'framer-motion'
export function HeroSection() {
  const containerVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }
  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut' as const,
      },
    },
  }
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0A1628] ">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage:
            'url("/imges/services/01.webp")',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A1628]/90 via-[#0A1628]/80 to-[#0A1628]"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20 pt-[5%]">
        <motion.div
          className=" mx-auto text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#D4A853] mb-8 leading-tight"
            variants={itemVariants}
          >
            في كي إي بي لخدمات رجال الأعمال، نحن لا نعمل داخل حدود السوق… نحن
            نرسم حدوده.
          </motion.h1>

          <motion.div
            className="space-y-6 text-lg md:text-xl text-gray-200 leading-relaxed font-light"
            variants={itemVariants}
          >
            <p>
              لا نتحرك مع حركة الأعمال… بل نضع الإيقاع الذي تتحرك عليه الشركات.
            </p>
            <p>
              نحن الكيان الذي لا يقدّم خدمة، بل يصنع منظومة، ويبني نفوذًا، ويخلق
              حضورًا يسبق اسم العميل قبل أن يصل.
            </p>
            <p className="text-2xl text-white font-medium mt-8">
              نحن لا نُدار بعقلية مكتب…
            </p>
            <p>
              بل بعقلية مؤسسة تُبنى حولها القرارات، وتُقاس عليها المعايير،
              ويُحتكم إليها في التفاصيل التي تصنع الفرق بين شركة تعمل… وشركة
              تُحترم.
            </p>
            <p>
              نحن نؤمن أن رجل الأعمال لا يحتاج إلى من يُنهي له معاملة… بل يحتاج
              إلى قوة تشغيلية تفهم طموحه، وتقرأ خطواته، وتفتح له الأبواب التي لا
              تُفتح بالصدفة، ولا تُفتح بالكلام، بل تُفتح بالخبرة، والعلاقات،
              والقدرة على التنفيذ.
            </p>

            <div className="py-8 my-8 border-y border-[#D4A853]/30">
              <p className="text-2xl text-[#D4A853] font-bold mb-4">
                نحن كيان صُمّم ليكون:
              </p>
              <p className="text-3xl font-bold text-white">
                شريك قرار… شريك توسّع… وشريك نفوذ.
              </p>
            </div>

            <p>
              كيان يعرف كيف تُدار الشركات، وكيف تُحمى الأصول، وكيف تُبنى
              الهياكل، وكيف تُصنع الفرص، وكيف يتحول الطموح إلى حضور، والحضور إلى
              قوة، والقوة إلى تأثير.
            </p>
            <p>في سوق تتشابه فيه الخدمات… نحن نختار أن نكون العلامة الفارقة.</p>
            <p>
              وفي بيئة تمتلئ بالوعود… نحن نختار أن نُظهر النتيجة قبل أن نتحدث
              عنها.
            </p>

            <div className="bg-[#D4A853]/10 p-8 rounded-2xl border border-[#D4A853]/20 mt-12 backdrop-blur-sm">
              <p className="text-2xl text-white font-bold mb-2">
                هذه ليست شركة خدمات…
              </p>
              <p className="text-3xl text-[#D4A853] font-bold mb-6">
                هذه منظومة تشغيل لرجال الأعمال.
              </p>
              <p className="text-lg">
                منظومة تُدار بثقة، وتُقدَّم باحتراف، وتُبنى على فهم عميق لما
                يحتاجه رجل الأعمال ليكون في المكان الذي يستحقه…
              </p>
              <p className="text-xl font-bold mt-4">لا أقل. ولا غير.</p>
            </div>

            <p className="text-2xl text-white font-medium mt-12">
              هنا… تبدأ مرحلة جديدة من التعامل.
            </p>
            <p className="text-xl text-[#D4A853]">
              مرحلة لا تعتمد على ما نفعله لك… بل على ما نصنعه معك.
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-[#D4A853]"
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 2,
        }}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </motion.div>
    </section>
  )
}
