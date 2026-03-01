'use client';
import { Shield, Zap, Target, Award } from 'lucide-react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { useTranslations } from 'next-intl';
import { useMemo } from 'react';

const stepConfigs = [
  { icon: Target, color: 'from-blue-400 to-blue-600', iconColor: 'text-blue-500', iconBg: 'bg-blue-50', badgeColor: 'from-blue-400 to-blue-600', hoverText: 'group-hover:text-blue-500', borderHover: 'from-blue-400 via-blue-500 to-blue-600' },
  { icon: Shield, color: 'from-emerald-400 to-emerald-600', iconColor: 'text-emerald-500', iconBg: 'bg-emerald-50', badgeColor: 'from-emerald-400 to-emerald-600', hoverText: 'group-hover:text-emerald-500', borderHover: 'from-emerald-400 via-emerald-500 to-emerald-600' },
  { icon: Zap, color: 'from-amber-400 to-amber-600', iconColor: 'text-amber-500', iconBg: 'bg-amber-50', badgeColor: 'from-amber-400 to-amber-600', hoverText: 'group-hover:text-amber-500', borderHover: 'from-amber-400 via-amber-500 to-amber-600' },
  { icon: Award, color: 'from-purple-400 to-purple-600', iconColor: 'text-purple-500', iconBg: 'bg-purple-50', badgeColor: 'from-purple-400 to-purple-600', hoverText: 'group-hover:text-purple-500', borderHover: 'from-purple-400 via-purple-500 to-purple-600' },
];

export function Process({ locale }: { locale: string }) {
  const t = useTranslations('administrativeApparatus.process');
  const rawSteps = t.raw('steps') as Array<{ title: string; desc: string }> | undefined;
  const steps = useMemo(() => {
    if (!Array.isArray(rawSteps)) return stepConfigs.map((c, i) => ({ ...c, title: '', desc: '' }));
    return rawSteps.map((s, i) => ({ ...stepConfigs[i], ...s }));
  }, [rawSteps]);

  const [ref, isIntersecting] = useIntersectionObserver();
  return (
    <section className="py-32 bg-gradient-to-b from-warm-gray to-white relative overflow-hidden px-[5%]">
      <div className="mx-auto px-4 relative z-10">
        <div
          ref={ref}
          className={`text-center mb-24 transition-all duration-1000 ${isIntersecting ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>

          <h2 className="text-[clamp(0.75rem,2vw,6rem)] font-bold text-charcoal mb-6">
            {t('title')}
          </h2>
          <p className="text-[clamp(0.75rem,2vw,1.5rem)] text-gray-500 mx-auto">
            {t('subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 relative">
          {/* Connecting Dashed Line (Desktop only) */}
          <div className="hidden lg:block absolute top-16 left-[10%] right-[10%] h-0.5 border-t-2 border-dashed border-gold/40 -z-10 animate-pulse" />

          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className={`bg-white rounded-3xl p-8 shadow-card hover:shadow-card-hover relative group transition-all duration-700 transform border border-gray-100 ${isIntersecting ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}
                style={{
                  transitionDelay: `${index * 150}ms`
                }}>

                {/* Gradient Top Border on Hover */}
                <div
                  className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${step.borderHover} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-3xl`} />


                <div
                  className={`w-20 h-20 rounded-2xl ${step.iconBg} shadow-inner flex items-center justify-center mb-8 mx-auto group-hover:-translate-y-2 transition-transform duration-300 border border-gray-100 relative overflow-hidden`}>

                  <Icon
                    className={`w-10 h-10 ${step.iconColor} group-hover:scale-110 transition-transform duration-300`} />

                </div>

                <h3
                  className={`text-[clamp(0.75rem,1.5vw,3rem)] font-bold text-charcoal text-center mb-4 ${step.hoverText} transition-colors`}>

                  {step.title}
                </h3>
                <p className="text-gray-600 text-center leading-relaxed text-[clamp(0.75rem,2vw,1.5rem)]">
                  {step.desc}
                </p>

                {/* Number Badge */}
                <div
                  className={`absolute -top-5 -end-5 w-12 h-12 rounded-full bg-gradient-to-br ${step.badgeColor} text-white flex items-center justify-center font-bold text-[clamp(0.75rem,1vw,2rem)] shadow-lg border-4 border-white group-hover:scale-110 transition-transform`}>

                  {index + 1}
                </div>
              </div>);

          })}
        </div>
      </div>
    </section>);

}