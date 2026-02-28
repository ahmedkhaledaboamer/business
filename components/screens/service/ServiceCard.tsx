"use client"
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
interface ServiceCardProps {
  title: string
  tagline: string
  icon: React.ElementType
  color: string
  items: string[]
  image?: string
}
export function ServiceCard({
  title,
  tagline,
  icon: Icon,
  color,
  items,
  image,
}: ServiceCardProps) {
  const [isExpanded, setIsExpanded] = useState(false)
  return (
    <motion.div
      layout
      className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow duration-300"
      style={{
        borderRightWidth: '6px',
        borderRightColor: color,
      }}
    >
      {/* Card Image */}
      {image && (
        <div className="relative h-140 overflow-hidden">
          <img src={image} alt={title} className="w-full h-full object-cover" />
          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(to top, ${color}cc 0%, ${color}33 40%, transparent 100%)`,
            }}
          />
          <div className="absolute bottom-3 right-4 flex items-center gap-2">
            <div
              className="p-2 rounded-lg backdrop-blur-sm"
              style={{
                backgroundColor: 'rgba(255,255,255,0.2)',
                color: '#fff',
              }}
            >
              <Icon size={22} strokeWidth={1.5} />
            </div>
          </div>
        </div>
      )}

      <div
        className="p-6 cursor-pointer"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex items-start justify-between">
          <div className="flex items-start gap-4">
            {!image && (
              <div
                className="p-3 rounded-lg shrink-0"
                style={{
                  backgroundColor: `${color}15`,
                  color: color,
                }}
              >
                <Icon size={28} strokeWidth={1.5} />
              </div>
            )}
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{tagline}</p>
            </div>
          </div>
          <motion.div
            animate={{
              rotate: isExpanded ? 180 : 0,
            }}
            transition={{
              duration: 0.3,
            }}
            className="shrink-0 text-gray-400 mt-2"
          >
            <ChevronDown size={20} />
          </motion.div>
        </div>
      </div>

      <AnimatePresence initial={false}>
        {isExpanded && (
          <motion.div
            initial={{
              height: 0,
              opacity: 0,
            }}
            animate={{
              height: 'auto',
              opacity: 1,
            }}
            exit={{
              height: 0,
              opacity: 0,
            }}
            transition={{
              duration: 0.3,
              ease: 'easeInOut',
            }}
          >
            <div className="px-6 pb-6 pt-2 border-t border-gray-50 mx-6">
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6">
                {items.map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{
                      opacity: 0,
                      x: -10,
                    }}
                    animate={{
                      opacity: 1,
                      x: 0,
                    }}
                    transition={{
                      delay: index * 0.05,
                    }}
                    className="flex items-center text-sm text-gray-700"
                  >
                    <span
                      className="w-1.5 h-1.5 rounded-full ml-2 shrink-0"
                      style={{
                        backgroundColor: color,
                      }}
                    />
                    {item}
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}
