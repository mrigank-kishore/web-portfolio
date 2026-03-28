'use client'

import { motion } from 'framer-motion'
import { Mail, MapPin, Linkedin } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4 max-w-4xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-4xl font-bold text-center mb-12"
      >
        Contact
      </motion.h2>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
        className="glass rounded-lg p-8 text-center"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center">
            <Mail size={32} className="mb-2 text-blue-600 dark:text-blue-400" />
            <h3 className="font-semibold mb-1">Email</h3>
            <a href="mailto:mrigank@example.com" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
              mrigank@example.com
            </a>
          </div>
          <div className="flex flex-col items-center">
            <Linkedin size={32} className="mb-2 text-blue-600 dark:text-blue-400" />
            <h3 className="font-semibold mb-1">LinkedIn</h3>
            <a href="https://linkedin.com/in/mrigank-varma" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
              linkedin.com/in/mrigank-varma
            </a>
          </div>
          <div className="flex flex-col items-center">
            <MapPin size={32} className="mb-2 text-blue-600 dark:text-blue-400" />
            <h3 className="font-semibold mb-1">Location</h3>
            <p className="text-gray-600 dark:text-gray-300">Pune, India</p>
          </div>
        </div>
      </motion.div>
    </section>
  )
}