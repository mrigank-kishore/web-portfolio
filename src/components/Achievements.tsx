'use client'

import { motion } from 'framer-motion'
import { Trophy, TrendingDown, Users, Zap } from 'lucide-react'
import { profile } from '@/data/profile'

const icons = [TrendingDown, Users, Zap, Trophy]

export default function Achievements() {
  return (
    <section id="achievements" className="py-20 px-4 max-w-6xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-4xl font-bold text-center mb-12"
      >
        Impact Highlights
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {profile.achievements.map((achievement, index) => {
          const Icon = icons[index]
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass rounded-lg p-6 text-center hover:scale-105 transition-transform"
            >
              <Icon size={48} className="mx-auto mb-4 text-yellow-500" />
              <h3 className="text-xl font-semibold mb-2">{achievement.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{achievement.description}</p>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}
