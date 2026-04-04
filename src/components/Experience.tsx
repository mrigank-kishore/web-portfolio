'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'
import { profile } from '@/data/profile'

export default function Experience() {
  const [expanded, setExpanded] = useState<number | null>(null)

  return (
    <section id="experience" className="py-20 px-4 max-w-4xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-4xl font-bold text-center mb-12"
      >
        Experience
      </motion.h2>
      <div className="space-y-6">
        {profile.experience.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="glass rounded-lg p-6 cursor-pointer"
            onClick={() => setExpanded(expanded === index ? null : index)}
          >
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-xl font-semibold">{exp.role}</h3>
                <p className="text-blue-600 dark:text-blue-400">{exp.company}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">{exp.period} | {exp.location}</p>
              </div>
              {expanded === index ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
            </div>
            {expanded === index && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="mt-4"
              >
                <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i}>{achievement}</li>
                  ))}
                </ul>
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  )
}
