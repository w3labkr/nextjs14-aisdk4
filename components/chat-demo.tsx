'use client'

import { useChat, type UseChatOptions } from 'ai/react'
import { Chat } from '@/components/chatbot-kit/chat'

const initialMessages: UseChatOptions['initialMessages'] = [
  {
    id: '1',
    role: 'user',
    content: 'What is shadcn-chatbot-kit?',
  },
  {
    id: '2',
    role: 'assistant',
    content:
      'shadcn-chatbot-kit is a toolkit to easily build chatbot UIs. It is a set of beautifully designed components based on shadcn/ui. It is fully customizable and owned by you.',
  },
]

const suggestions: string[] = [
  'Generate a tasty vegan lasagna recipe for 3 people.',
  'Generate a list of 5 questions for a job interview for a software engineer.',
  'Who won the 2022 FIFA World Cup?',
]

export function ChatDemo() {
  const { messages, input, handleInputChange, handleSubmit, append, stop, isLoading } = useChat({
    api: '/api/chat',
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
