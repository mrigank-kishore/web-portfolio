import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'

const inter = Inter({ subsets: ['latin'] })
const playfair = Playfair_Display({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Mrigank Kishore Varma - Principal Cloud Architect',
  description: 'Designing scalable, cost-efficient, AI-driven cloud systems',
  keywords: 'Cloud Architect, AWS, Azure, AI/ML, Cloud Transformation',
  authors: [{ name: 'Mrigank Kishore Varma' }],
  openGraph: {
    title: 'Mrigank Kishore Varma - Principal Cloud Architect',
    description: 'Designing scalable, cost-efficient, AI-driven cloud systems',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}