'use client';
import React, { Fragment } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useCountUp } from '@/hooks/useCountUp';
import { Users, ThumbsUp, Clock, Briefcase } from 'lucide-react';
const stats = [
{
  end: 150,
  suffix: '+',
  label: 'عميل',
  icon: Users,
  color: '#C9A84C'
},
{
  end: 95,
  suffix: '%',
  label: 'نسبة الرضا',
  icon: ThumbsUp,
  color: '#1A6B5C'
},
{
  end: 12,
  suffix: '+',
  label: 'سنة خبرة',
  icon: Clock,
  color: '#B87333'
},
{
  end: 50,
  suffix: '+',
  label: 'مشروع',
  icon: Briefcase,
  color: '#7A2D4A'
}];

function StatItem({
  end,
  suffix,
  label,
  delay,
  icon: Icon,
  color
}: {end: number;suffix: string;label: string;delay: number;icon: React.ElementType;color: string;}) {
  const { ref, isVisible } = useScrollAnimation(0.5);
  const count = useCountUp(isVisible ? end : 0, 2500);
  return (
    <div
      ref={ref}
      className={`flex flex-col items-center justify-center relative transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      style={{
        transitionDelay: `${delay}ms`
      }}>

      {/* Animated Ring */}
      <div className="relative mb-4">
        <svg className="w-20 h-20" viewBox="0 0 80 80">
          <circle
            cx="40"
            cy="40"
            r="36"
            fill="none"
            stroke="rgba(255,255,255,0.1)"
            strokeWidth="2" />

          <circle
            cx="40"
            cy="40"
            r="36"
            fill="none"
            stroke={color}
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeDasharray={`${isVisible ? end / 150 * 226 : 0} 226`}
            className="transition-all duration-[2500ms] ease-out"
            style={{
              transform: 'rotate(-90deg)',
              transformOrigin: 'center'
            }} />

        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <Icon
            className="w-8 h-8"
            style={{
              color
            }} />

        </div>
      </div>

      <div
        className="text-5xl md:text-6xl font-black mb-2 flex items-center"
        style={{
          color
        }}>

        <span
          dir="ltr"
          className="animate-[text-glow_3s_ease-in-out_infinite]"
          style={{
            animationDelay: `${delay}ms`
          }}>

          {count}
          {suffix}
        </span>
      </div>
      <div className="text-white/80 text-lg md:text-xl font-medium tracking-wide">
        {label}
      </div>
    </div>);

}
export function StatsSection() {
  return (
    <section
      className="relative py-28 overflow-hidden px-[5%]"
      style={{
        background:
        'linear-gradient(135deg, #1B2A4A 0%, #162240 50%, #1B2A4A 100%)'
      }}>

      {/* Dot Pattern */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#C9A84C 1px, transparent 1px)',
          backgroundSize: '28px 28px'
        }} />


      {/* Wave Top */}
      <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-white/5 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white/5 to-transparent pointer-events-none" />

      <div className=" relative z-10 mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8">
          {stats.map((stat, idx) =>
          <Fragment key={idx}>
              <StatItem
              end={stat.end}
              suffix={stat.suffix}
              label={stat.label}
              delay={idx * 200}
              icon={stat.icon}
              color={stat.color} />

            </Fragment>
          )}
        </div>
      </div>
    </section>);

}