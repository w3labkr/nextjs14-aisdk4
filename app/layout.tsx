import * as React from 'react'
import type { Metadata } from 'next'
import './globals.css'

import { Toaster } from '@/components/ui/sonner'
import { TailwindIndicator } from '@/components/tailwind-indicator'
import { ChatbotModal } from '@/components/custom-ui/chatbot-modal'

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <ChatbotModal />
        <Toaster richColors closeButton />
        <TailwindIndicator />
      </body>
    </html>
  )
}
