'use client'

import { motion } from 'framer-motion'
import { ChevronDown, Download, Mail } from 'lucide-react'
import { profile } from '@/data/profile'

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      <div className="absolute inset-0" style={{ background: 'var(--bg-gradient)' }} />
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold mb-4 bg-clip-text text-transparent"
          style={{ backgroundImage: 'var(--text-gradient)' }}
        >
          {profile.name}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl text-[var(--text-secondary)] mb-2"
        >
          {profile.title} | {profile.headline}
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg text-[var(--text-secondary)] mb-4"
        >
          {profile.tagline}
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-base md:text-lg text-[var(--text-secondary)] mb-8 max-w-3xl mx-auto"
        >
          {profile.summary}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
        >
          <a href="#projects" className="px-8 py-3 rounded-lg font-semibold transition-colors" style={{ backgroundColor: 'var(--accent)', color: 'white' }} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--accent-hover)'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--accent)'}>
            View Case Studies
          </a>
          <a href={profile.resumePath} download className="px-8 py-3 border rounded-lg font-semibold transition-colors flex items-center gap-2" style={{ borderColor: 'var(--accent)', color: 'var(--accent)' }} onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = 'var(--accent)'; e.currentTarget.style.color = 'white'; }} onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = 'var(--accent)'; }}>
            <Download size={20} />
            Download Resume
          </a>
          <a href="#contact" className="px-8 py-3 border rounded-lg font-semibold transition-colors flex items-center gap-2" style={{ borderColor: 'var(--border)', color: 'var(--text-secondary)' }} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--border)'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}>
            <Mail size={20} />
            Contact
          </a>
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <a href="#about" aria-label="Scroll to about section">
          <ChevronDown size={32} className="animate-bounce text-gray-400" />
        </a>
      </motion.div>
    </section>
  )
}
