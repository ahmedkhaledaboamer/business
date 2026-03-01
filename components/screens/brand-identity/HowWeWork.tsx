'use client';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Search, Map, Eye, FileText, CheckCircle2 } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { useMemo } from 'react';

const stepColors = ['#1A6B5C', '#C9A84C', '#B87333', '#7A2D4A'];
const stepIcons = [Search, Map, Eye, FileText];

export function HowWeWork() {
  const t = useTranslations('brandIdentity.howWeWork');
  const rawSteps = (t.raw('steps') as { title: string; desc: string; progress: string }[] | undefined) ?? [];
  const steps = useMemo(
    () => (Array.isArray(rawSteps) ? rawSteps : []).map((s, i) => ({ ...s, icon: stepIcons[i] })),
    [rawSteps]
  );
  const { ref, isVisible } = useScrollAnimation(0.2);
  return (
    <section className="py-28 bg-white overflow-hidden px-[5%]">
      <div className=" mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="font-bold text-[#1A1A1A] mb-4 text-[clamp(0.75rem,2vw,6rem)]">
            {t('title')}
          </h2>
          <p className="text-gray-500 font-medium text-[clamp(0.75rem,2vw,1.5rem)]">
            {t('subtitle')}
          </p>
        </div>
        <div
          className="flex flex-col lg:flex-row gap-16 items-center"
          ref={ref}>

          <div className="flex-1 relative w-full">
            {/* Track */}
            <div className="absolute right-8 top-0 bottom-0 w-1 bg-gray-100 rounded-full" />
            <div
              className="absolute right-8 top-0 w-1 rounded-full transition-all duration-[2500ms] ease-out"
              style={{
                height: isVisible ? '100%' : '0%',
                background: `linear-gradient(to bottom, ${stepColors[0]}, ${stepColors[1]}, ${stepColors[2]}, ${stepColors[3]})`
              }} />


            <div className="space-y-8">
              {steps.map((step, idx) => {
                const Icon = step.icon;
                const color = stepColors[idx];
                return (
                  <div
                    key={idx}
                    className={`relative flex items-center gap-8 group transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}
                    style={{
                      transitionDelay: `${idx * 400}ms`
                    }}>

                    <div
                      className="relative z-10 flex-shrink-0 w-16 h-16 bg-white border-4 rounded-full flex items-center justify-center shadow-[0_4px_12px_rgba(0,0,0,0.08)] transition-all duration-300"
                      style={{
                        borderColor: isVisible ? color : '#F8F7F4'
                      }}>

                      <span
                        className="font-bold text-xl"
                        style={{
                          color
                        }}>

                        {idx + 1}
                      </span>
                      <CheckCircle2
                        className={`absolute -bottom-2 -left-2 w-6 h-6 bg-white rounded-full transition-all duration-500 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}`}
                        style={{
                          color: '#1A6B5C',
                          transitionDelay: `${idx * 400 + 1000}ms`
                        }} />

                    </div>

                    <div className="flex-1 bg-white p-6 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.04)] border border-gray-100 group-hover:shadow-[0_12px_30px_rgba(0,0,0,0.08)] group-hover:-translate-y-1 transition-all duration-300 relative overflow-hidden">
                      <Icon className="absolute -left-4 -bottom-4 w-32 h-32 text-gray-50 opacity-40 pointer-events-none" />
                      {/* Colored Left Border */}
                      <div
                        className="absolute left-0 top-0 bottom-0 w-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        style={{
                          backgroundColor: color
                        }} />


                      <div className="flex justify-between items-center mb-3 relative z-10">
                        <div className="flex items-center gap-3">
                          <div
                            className="p-2 rounded-lg"
                            style={{
                              backgroundColor: color + '15',
                              color
                            }}>

                            <Icon className="w-6 h-6" />
                          </div>
                          <h3 className="font-bold text-[#1A1A1A] text-[clamp(0.75rem,1vw,2rem)]">
                            {step.title}
                          </h3>
                        </div>
                        <span
                          className="text-sm font-bold px-3 py-1 rounded-full"
                          dir="ltr"
                          style={{
                            color,
                            backgroundColor: color + '15'
                          }}>

                          {step.progress}
                        </span>
                      </div>
                      <p className="text-gray-600 leading-relaxed relative z-10 pr-14 text-[clamp(0.75rem,1vw,2rem)]">
                        {step.desc}
                      </p>
                    </div>
                  </div>);

              })}
            </div>
          </div>

          <div className="flex-1 w-full lg:w-auto">
            <div className="sticky top-32 group">
              <div
                className="absolute -inset-4 rounded-[32px] transform rotate-3 transition-transform duration-500 group-hover:rotate-6"
                style={{
                  background:
                  'linear-gradient(135deg, rgba(201,168,76,0.2), rgba(26,107,92,0.1), transparent)'
                }} />

              <img
                src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&q=80"
                alt="فريق يخطط"
                className="relative w-full h-[600px] object-cover rounded-[24px] shadow-[0_24px_72px_rgba(0,0,0,0.15)] z-10" />

            </div>
          </div>
        </div>
      </div>
    </section>);

}