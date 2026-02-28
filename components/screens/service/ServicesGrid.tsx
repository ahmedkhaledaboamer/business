"use client"
import { motion } from 'framer-motion'
import { Boxes } from 'lucide-react'
import { ServiceCard } from './ServiceCard'
import { categories, defaultPlaceholder } from '@/services'

const CARDS_PER_ROW = 3

interface ServicesGridProps {
  id: string
  title: string
  color: string
}
export function ServicesGrid({ id, title, color }: ServicesGridProps) {
  const category = categories.find((c) => c.id === id)
  const rawServices = category?.services ?? []
  const padCount =
    (CARDS_PER_ROW - (rawServices.length % CARDS_PER_ROW)) % CARDS_PER_ROW
  const content =
    (category as { placeholder?: typeof defaultPlaceholder } | undefined)
      ?.placeholder ?? defaultPlaceholder
  const firstService = rawServices[0]
  const IconComponent = firstService?.icon ?? Boxes
  const placeholderImage =
    firstService?.image ??
    'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop'

  const placeholders = Array.from({ length: padCount }, (_, i) => ({
    id: `placeholder-${id}-${i}`,
    title: content.title,
    tagline: content.tagline,
    icon: IconComponent,
    color,
    image: placeholderImage,
    items: content.items,
  }))

  const services = [...rawServices, ...placeholders]
  return (
    <section id={id} className="pb-12 scroll-mt-8 first:pt-0 pt-16">
      {/* Category Header - Fit Content */}
      <div className="mb-10">
        <motion.div
          initial={{
            opacity: 0,
            x: -30,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: true,
          }}
          className="inline-block relative overflow-hidden rounded-2xl"
          style={{
            backgroundColor: color,
          }}
        >
          <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay"></div>
          <div className="absolute inset-0 bg-gradient-to-l from-white/10 to-transparent"></div>
          <div className="relative z-10 px-10 py-6 flex items-center gap-4">
            <span className="w-10 h-1 bg-white/60 rounded-full block"></span>
            <h2 className="text-2xl md:text-3xl font-bold text-white">
              {title}
            </h2>
          </div>
        </motion.div>
      </div>

      {/* Services Grid - 3 cards per row, padded so no empty slots */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <motion.div
            key={service.id}
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
              margin: '-50px',
            }}
            transition={{
              delay: index * 0.1,
              duration: 0.5,
            }}
          >
            <ServiceCard
              title={service.title}
              tagline={service.tagline}
              icon={service.icon}
              color={service.color}
              items={service.items}
              image={service.image}
            />
          </motion.div>
        ))}
      </div>
    </section>
  )
}
