'use client'

import { motion } from 'framer-motion'
import { profile } from '@/data/profile'

export default function About() {
  return (
    <section id="about" className="py-20 px-4 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <h2 className="text-4xl font-bold mb-8">About Me</h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
          {profile.summary}
        </p>
        <div className="glass rounded-2xl p-8 text-left">
          <h3 className="text-xl font-semibold mb-4">What stands out</h3>
          <ul className="space-y-3 text-gray-600 dark:text-gray-300">
            {profile.highlights.map((highlight) => (
              <li key={highlight} className="flex gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-[var(--accent)] shrink-0" />
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <div>
              <h3 className="text-xl font-semibold mb-3">Certifications</h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                {profile.certifications.map((certification) => (
                  <li key={certification}>{certification}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3">Education & Strengths</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-3">{profile.education}</p>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                {profile.strengths.map((strength) => (
                  <li key={strength}>{strength}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
