'use client'

import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import { profile } from '@/data/profile'

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4 max-w-6xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-4xl font-bold text-center mb-12"
      >
        Selected Case Studies
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {profile.projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="glass rounded-lg p-6 hover:shadow-lg transition-shadow"
          >
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-semibold">{project.name}</h3>
              <ExternalLink size={20} className="text-blue-600 dark:text-blue-400" aria-hidden="true" />
            </div>
            <div className="space-y-3">
              <div>
                <h4 className="font-medium text-red-600 dark:text-red-400">Problem</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">{project.problem}</p>
              </div>
              <div>
                <h4 className="font-medium text-blue-600 dark:text-blue-400">Solution</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">{project.solution}</p>
              </div>
              <div>
                <h4 className="font-medium text-green-600 dark:text-green-400">Impact</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">{project.impact}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
