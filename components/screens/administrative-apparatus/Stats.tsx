'use client';
import React, { useEffect, useState } from 'react';
import { Users, Target, Layers, AlertCircle, Lock } from 'lucide-react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
function CountUp({
  end,
  duration = 2000,
  suffix = ''




}: {end: number | string;duration?: number;suffix?: string;}) {
  const [count, setCount] = useState(0);
  const [ref, isIntersecting] = useIntersectionObserver();
  const isStringEnd = typeof end === 'string';
  useEffect(() => {
    if (!isIntersecting || isStringEnd) return;
    let startTime: number;
    const animateCount = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);
      setCount(Math.floor((end as number) * percentage));
      if (progress < duration) {
        requestAnimationFrame(animateCount);
      }
    };
    requestAnimationFrame(animateCount);
  }, [end, duration, isIntersecting, isStringEnd]);
  return (
    <span
      ref={ref}
      className="text-4xl md:text-5xl font-bold gradient-text mb-3 block">
      {isStringEnd ? end : count}
      {suffix}
    </span>);

}
export function Stats() {
  const [ref, isIntersecting] = useIntersectionObserver();
  const stats = [
  {
    value: 20,
    label: 'منصب تنفيذي',
    icon: Users
  },
  {
    value: 100,
    label: 'دقة تشغيلية',
    suffix: '٪',
    icon: Target
  },
  {
    value: 5,
    label: 'مستويات خدمة',
    icon: Layers
  },
  {
    value: 0,
    label: 'هامش للخطأ',
    icon: AlertCircle
  },
  {
    value: '∞',
    label: 'سرية مضمونة',
    icon: Lock
  }];

  return (
    <section className="py-16 relative z-40 -mt-20 px-[5%]">
      <div
        ref={ref}
        className={` mx-auto glass bg-white/90 rounded-3xl shadow-heavy p-10 transition-all duration-1000 transform border border-gold/20 relative overflow-hidden ${isIntersecting ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>

        {/* Background Pattern */}
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(#C9A84C 2px, transparent 2px)',
            backgroundSize: '30px 30px'
          }} />


        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 relative z-10">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className={`text-center px-4 relative transition-all duration-700 transform ${isIntersecting ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                style={{
                  transitionDelay: `${index * 100}ms`
                }}>

                {/* Divider (except last) */}
                {index < stats.length - 1 &&
                <div className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 w-px h-16 bg-gradient-to-b from-transparent via-gold/40 to-transparent" />
                }

                <div className="flex justify-center mb-4">
                  <div className="w-14 h-14 rounded-full bg-gold/10 flex items-center justify-center group hover:bg-gold/20 transition-colors">
                    <Icon className="w-7 h-7 text-gold group-hover:scale-110 transition-transform" />
                  </div>
                </div>
                <CountUp end={stat.value} suffix={stat.suffix} />
                <p className="text-charcoal font-bold text-lg">{stat.label}</p>
              </div>);

          })}
        </div>
      </div>
    </section>);

}