'use client'

import { motion } from 'framer-motion'

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
        <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
          With over 16 years of experience in IT architecture and cloud technologies,
          I am a Principal Cloud Architect specializing in cloud transformation, AI/ML,
          and designing scalable, cost-efficient systems. I have led major cloud migrations,
          implemented cutting-edge AI solutions, and transformed organizations&apos; cloud strategies
          across AWS, Azure, and Kubernetes environments.
        </p>
      </motion.div>
    </section>
  )
}