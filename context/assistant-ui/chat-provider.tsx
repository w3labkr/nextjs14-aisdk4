'use client'

import * as React from 'react'

import { useChat } from '@ai-sdk/react'
import { AssistantRuntimeProvider } from '@assistant-ui/react'
import { useVercelUseChatRuntime } from '@assistant-ui/react-ai-sdk'

export function ChatProvider({
  children,
  api = '/api/chat',
}: Readonly<{
  children: React.ReactNode
  api?: string
}>) {
  const chat = useChat({ api })
  const runtime = useVercelUseChatRuntime(chat)

  return <AssistantRuntimeProvider runtime={runtime}>{children}</AssistantRuntimeProvider>
}
