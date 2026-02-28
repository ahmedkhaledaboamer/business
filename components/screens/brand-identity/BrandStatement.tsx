'use client';
import { Check } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useCountUp } from '@/hooks/useCountUp';
import Image from 'next/image';
export function BrandStatement() {
  const { ref, isVisible } = useScrollAnimation(0.3);
  // Stats for the counter
  const clients = useCountUp(isVisible ? 150 : 0, 2000);
  const satisfaction = useCountUp(isVisible ? 95 : 0, 2000);
  const years = useCountUp(isVisible ? 12 : 0, 2000);
  return (
    <section className="py-24 bg-[#F8F7F4] overflow-hidden relative px-[5%]">
      {/* Subtle Background Pattern */}
      <div
        className="absolute right-0 top-0 w-1/2 h-full opacity-30 pointer-events-none"
        style={{
          backgroundImage:
          'radial-gradient(circle at 70% 30%, #C9A84C 1px, transparent 1px)',
          backgroundSize: '24px 24px'
        }} />


      <div className="mx-auto px-6 relative z-10">
        <div
          className="flex flex-col lg:flex-row items-center gap-20"
          ref={ref}>

          {/* Right Side (Text) - First in RTL */}
          <div className="flex-1 relative">
            {/* Gradient Accent Bar */}
            <div
              className={`absolute -right-6 top-0 w-1.5 bg-gradient-to-b from-[#C9A84C] to-[#D4A574] rounded-full transition-all duration-1000 ${isVisible ? 'h-full opacity-100' : 'h-0 opacity-0'}`} />


            <div
              className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>

              <h2 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-8">
                بيان الكيان
              </h2>
              <p className="text-xl text-gray-600 mb-10 leading-relaxed font-medium">
                نحن نؤمن بأن النجاح ليس صدفة، بل هو نتيجة لتخطيط دقيق، تنفيذ
                احترافي، ورؤية واضحة. هذا الكيان وُجد ليكون الشريك الاستراتيجي
                الذي يحمي مصالحك ويدفع بأعمالك نحو القمة.
              </p>

              <ul className="space-y-6 mb-12">
                {[
                'نلتزم بأعلى معايير الجودة والاحترافية',
                'نقدم حلولاً مبتكرة تتناسب مع تحديات السوق',
                'نبني علاقات طويلة الأمد مبنية على الثقة المتبادلة'].
                map((point, idx) =>
                <li key={idx} className="flex items-start gap-4 group">
                    <div
                    className={`mt-1 bg-white border border-[#C9A84C]/30 p-1.5 rounded-full shadow-sm transition-all duration-500 group-hover:bg-[#C9A84C] group-hover:border-[#C9A84C] ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}
                    style={{
                      transitionDelay: `${idx * 200 + 500}ms`
                    }}>

                      <Check className="w-5 h-5 text-[#C9A84C] group-hover:text-white transition-colors" />
                    </div>
                    <span
                    className={`text-lg text-[#1A1A1A] font-bold transition-all duration-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'}`}
                    style={{
                      transitionDelay: `${idx * 200 + 600}ms`
                    }}>

                      {point}
                    </span>
                  </li>
                )}
              </ul>

              {/* Animated Counter Stats */}
              <div
                className={`grid grid-cols-3 gap-6 pt-8 border-t border-gray-200 transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>

                <div>
                  <div
                    className="text-3xl font-extrabold text-[#C9A84C] mb-1"
                    dir="ltr">

                    +{clients}
                  </div>
                  <div className="text-sm font-bold text-gray-500">
                    عميل استراتيجي
                  </div>
                </div>
                <div>
                  <div
                    className="text-3xl font-extrabold text-[#C9A84C] mb-1"
                    dir="ltr">

                    %{satisfaction}
                  </div>
                  <div className="text-sm font-bold text-gray-500">
                    نسبة الرضا
                  </div>
                </div>
                <div>
                  <div
                    className="text-3xl font-extrabold text-[#C9A84C] mb-1"
                    dir="ltr">

                    +{years}
                  </div>
                  <div className="text-sm font-bold text-gray-500">
                    سنة خبرة
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Left Side (Image) */}
          <div
            className={`flex-1 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>

            <div className="relative group">
              {/* Gold Frame Offset */}
              <div className="absolute inset-0 border-2 border-[#C9A84C] rounded-[24px] translate-x-4 translate-y-4 transition-transform duration-500 group-hover:translate-x-6 group-hover:translate-y-6" />

              <Image
                src="https://images.unsplash.com/photo-1518684079-3c830dcef090?w=800&q=80"
                alt="دبي"
                className="relative w-full h-80 md:h-200 rounded-[24px] object-cover shadow-[0_24px_72px_rgba(201,168,76,0.2)] z-10"
                width={800}
                height={600}
                />

            </div>
          </div>
        </div>
      </div>
    </section>);

}