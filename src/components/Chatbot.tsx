'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import { MessageCircle, X, Send } from 'lucide-react'

interface Message {
  id: number
  text: string
  isUser: boolean
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, text: "Hi! I'm here to answer questions about Mrigank's experience and skills. What would you like to know?", isUser: false }
  ])
  const [input, setInput] = useState('')
  const [profile, setProfile] = useState<any>(null)

  useEffect(() => {
    fetch('/profile.json')
      .then(res => res.json())
      .then(data => setProfile(data))
  }, [])

  const handleSend = () => {
    if (!input.trim() || !profile) return

    const userMessage: Message = {
      id: Date.now(),
      text: input,
      isUser: true
    }

    setMessages(prev => [...prev, userMessage])
    setInput('')

    // Simple keyword matching
    const lowerInput = input.toLowerCase()
    let response = "I'm sorry, I don't have information about that. Try asking about his skills, experience, or projects."

    if (lowerInput.includes('what does he do') || lowerInput.includes('who is he')) {
      response = profile.chatbot_responses['what does he do']
    } else if (lowerInput.includes('skills') || lowerInput.includes('expertise')) {
      response = profile.chatbot_responses['what are his skills']
    } else if (lowerInput.includes('aws') || lowerInput.includes('amazon')) {
      response = profile.chatbot_responses['explain his aws experience']
    } else if (lowerInput.includes('ai') || lowerInput.includes('ml') || lowerInput.includes('machine learning')) {
      response = profile.chatbot_responses['what ai work has he done']
    } else if (lowerInput.includes('experience') || lowerInput.includes('years')) {
      response = `He has over ${profile.experience_years} years of experience in IT architecture and cloud technologies.`
    } else if (lowerInput.includes('location') || lowerInput.includes('where')) {
      response = `He is based in ${profile.location}.`
    }

    setTimeout(() => {
      const botMessage: Message = {
        id: Date.now() + 1,
        text: response,
        isUser: false
      }
      setMessages(prev => [...prev, botMessage])
    }, 1000)
  }

  return (
    <>
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg z-50"
      >
        <MessageCircle size={24} />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="fixed bottom-20 right-6 w-80 h-96 bg-white dark:bg-gray-800 rounded-lg shadow-xl z-50 flex flex-col"
          >
            <div className="flex justify-between items-center p-4 border-b dark:border-gray-700">
              <h3 className="font-semibold">Chat with AI Assistant</h3>
              <button onClick={() => setIsOpen(false)} className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300">
                <X size={20} />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <div key={message.id} className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-xs px-4 py-2 rounded-lg ${
                    message.isUser
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white'
                  }`}>
                    {message.text}
                  </div>
                </div>
              ))}
            </div>
            <div className="p-4 border-t dark:border-gray-700">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Ask about Mrigank..."
                  className="flex-1 px-3 py-2 border dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                />
                <button
                  onClick={handleSend}
                  className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-lg"
                >
                  <Send size={20} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}