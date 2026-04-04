'use client'

import { motion } from 'framer-motion'
import { Mail, MapPin, Linkedin, Phone } from 'lucide-react'
import { profile } from '@/data/profile'

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
      <p className="text-center text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
        Open to architecture leadership, cloud modernization, platform engineering, and AI-enabled transformation conversations.
      </p>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
        className="glass rounded-lg p-8 text-center"
      >
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="flex flex-col items-center">
            <Mail size={32} className="mb-2 text-blue-600 dark:text-blue-400" />
            <h3 className="font-semibold mb-1">Email</h3>
            <a href={`mailto:${profile.email}`} className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
              {profile.email}
            </a>
          </div>
          <div className="flex flex-col items-center">
            <Linkedin size={32} className="mb-2 text-blue-600 dark:text-blue-400" />
            <h3 className="font-semibold mb-1">LinkedIn</h3>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
              {profile.linkedinLabel}
            </a>
          </div>
          <div className="flex flex-col items-center">
            <MapPin size={32} className="mb-2 text-blue-600 dark:text-blue-400" />
            <h3 className="font-semibold mb-1">Location</h3>
            <p className="text-gray-600 dark:text-gray-300">{profile.location}</p>
          </div>
          <div className="flex flex-col items-center">
            <Phone size={32} className="mb-2 text-blue-600 dark:text-blue-400" />
            <h3 className="font-semibold mb-1">Phone</h3>
            <a href="tel:+919833721131" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
              {profile.phone}
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
