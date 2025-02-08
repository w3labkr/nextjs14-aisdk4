'use client'

import { useChat, type UseChatOptions } from 'ai/react'
import { Chat } from '@/components/chatbot-kit/chat'

export function Chatbot({
  api = '/api/chat',
  initialMessages,
  suggestions = [],
}: {
  api?: string
  initialMessages?: UseChatOptions['initialMessages']
  suggestions?: string[]
}) {
  const { messages, input, handleInputChange, handleSubmit, append, stop, isLoading } = useChat({
    api,
    initialMessages,
  })

  return (
    <div className="flex h-full w-full">
      <Chat
        className="grow"
        messages={messages}
        handleSubmit={handleSubmit}
        input={input}
        handleInputChange={handleInputChange}
        isGenerating={isLoading}
        stop={stop}
        append={append}
        suggestions={suggestions}
      />
    </div>
  )
}
