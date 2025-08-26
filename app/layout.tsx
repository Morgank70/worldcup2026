import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { AiChat } from '@/components/ai-chat'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'WorldCup Hub - Your Complete World Cup 2026 Guide',
  description: 'Complete digital platform for World Cup 2026 fans with city guides, hotels, restaurants, activities, and AI assistance across all 16 host cities.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <AiChat />
      </body>
    </html>
  )
}