'use client'

import { motion } from 'framer-motion'
import { Cloud, Database, Settings, Code } from 'lucide-react'

const skills = {
  "Cloud": ["AWS", "Azure", "Kubernetes", "Docker"],
  "Data & AI": ["AWS Glue", "Apache Spark", "SageMaker", "TensorFlow"],
  "DevOps": ["CI/CD", "GitHub Actions", "Terraform", "Jenkins"],
  "Programming": ["Python", "Java", "TypeScript", "Node.js"]
}

const icons = {
  "Cloud": Cloud,
  "Data & AI": Database,
  "DevOps": Settings,
  "Programming": Code
}

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4 max-w-6xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-4xl font-bold text-center mb-12"
      >
        Skills
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {Object.entries(skills).map(([category, skillList], index) => {
          const Icon = icons[category as keyof typeof icons]
          return (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass rounded-lg p-6 text-center"
            >
              <Icon size={48} className="mx-auto mb-4 text-blue-600 dark:text-blue-400" />
              <h3 className="text-xl font-semibold mb-4">{category}</h3>
              <div className="space-y-3">
                {skillList.map((skill, i) => (
                  <div key={i}>
                    <div className="flex justify-between text-sm mb-1">
                      <span>{skill}</span>
                      <span>90%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: '90%' }}
                        transition={{ duration: 1, delay: 0.5 + i * 0.1 }}
                        viewport={{ once: true }}
                        className="bg-blue-600 h-2 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}