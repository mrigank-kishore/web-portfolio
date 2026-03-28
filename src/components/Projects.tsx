'use client'

import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'

const projects = [
  {
    name: "Cloud Migration Platform",
    problem: "Manual cloud migration processes were time-consuming and error-prone",
    solution: "Built automated platform using AWS services and Terraform",
    impact: "Reduced migration time by 70% and improved reliability"
  },
  {
    name: "Internal Developer Platform",
    problem: "Teams struggled with inconsistent development environments",
    solution: "Created self-service platform with Kubernetes and CI/CD",
    impact: "Increased developer productivity by 50%"
  },
  {
    name: "AI-based Document Processing System",
    problem: "Manual document processing was slow and costly",
    solution: "Implemented OCR and NLP using AWS SageMaker",
    impact: "Automated 90% of document processing tasks"
  },
  {
    name: "Real-time Data Pipeline",
    problem: "Data processing took hours, delaying insights",
    solution: "Built real-time pipeline with Apache Kafka and Spark",
    impact: "Reduced processing time to minutes, enabling real-time analytics"
  }
]

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
        Projects & Case Studies
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
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
              <ExternalLink size={20} className="text-blue-600 dark:text-blue-400" />
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