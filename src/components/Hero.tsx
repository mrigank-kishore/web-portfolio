'use client'

import { motion } from 'framer-motion'
import { ChevronDown, Download, Mail, ExternalLink } from 'lucide-react'
import { useTheme } from 'next-themes'

export default function Hero() {
  const { theme, setTheme } = useTheme()

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800" />
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
        >
          Mrigank Kishore Varma
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-2"
        >
          Principal Cloud Architect | AI/ML | Cloud Transformation
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg text-gray-500 dark:text-gray-400 mb-8"
        >
          "Designing scalable, cost-efficient, AI-driven cloud systems"
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
        >
          <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors">
            View Projects
          </button>
          <button className="px-8 py-3 border border-blue-600 text-blue-600 dark:text-blue-400 hover:bg-blue-600 hover:text-white rounded-lg font-semibold transition-colors flex items-center gap-2">
            <Download size={20} />
            Download Resume
          </button>
          <button className="px-8 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg font-semibold transition-colors flex items-center gap-2">
            <Mail size={20} />
            Contact
          </button>
        </motion.div>
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          className="mb-8 px-4 py-2 glass rounded-lg"
        >
          Toggle {theme === 'dark' ? 'Light' : 'Dark'} Mode
        </motion.button>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <ChevronDown size={32} className="animate-bounce text-gray-400" />
      </motion.div>
    </section>
  )
}