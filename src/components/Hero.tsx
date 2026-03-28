'use client'

import { motion } from 'framer-motion'
import { ChevronDown, Download, Mail, ExternalLink } from 'lucide-react'
import { useTheme } from 'next-themes'

export default function Hero() {
  const { theme, setTheme } = useTheme()

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0" style={{ background: 'var(--bg-gradient)' }} />
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold mb-4 bg-clip-text text-transparent"
          style={{ backgroundImage: 'var(--text-gradient)' }}
        >
          Mrigank Kishore Varma
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl text-[var(--text-secondary)] mb-2"
        >
          Principal Cloud Architect | AI/ML | Cloud Transformation
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg text-[var(--text-secondary)] mb-8"
        >
          &ldquo;Designing scalable, cost-efficient, AI-driven cloud systems&rdquo;
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
        >
          <button className="px-8 py-3 rounded-lg font-semibold transition-colors" style={{ backgroundColor: 'var(--accent)', color: 'white' }} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--accent-hover)'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--accent)'}>
            View Projects
          </button>
          <a href="/resume.pdf" download className="px-8 py-3 border rounded-lg font-semibold transition-colors flex items-center gap-2" style={{ borderColor: 'var(--accent)', color: 'var(--accent)' }} onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = 'var(--accent)'; e.currentTarget.style.color = 'white'; }} onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = 'var(--accent)'; }}>
            <Download size={20} />
            Download Resume
          </a>
          <button className="px-8 py-3 border rounded-lg font-semibold transition-colors flex items-center gap-2" style={{ borderColor: 'var(--border)', color: 'var(--text-secondary)' }} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--border)'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}>
            <Mail size={20} />
            Contact
          </button>
        </motion.div>
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          className="mb-8 px-4 py-2 rounded-lg transition-colors" style={{ backgroundColor: 'var(--border)', color: 'var(--text-primary)' }} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--text-secondary)'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--border)'}
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