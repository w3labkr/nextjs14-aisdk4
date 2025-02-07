import * as React from 'react'
import { type UseChatOptions } from 'ai/react'
import { ChatDemo } from '@/components/chat-demo'

const initialMessages: UseChatOptions['initialMessages'] = [
  // {
  //   id: '1',
  //   role: 'user',
  //   content: 'What is shadcn-chatbot-kit?',
  // },
  // {
  //   id: '2',
  //   role: 'assistant',
  //   content:
  //     'shadcn-chatbot-kit is a toolkit to easily build chatbot UIs. It is a set of beautifully designed components based on shadcn/ui. It is fully customizable and owned by you.',
  // },
]

export default function Home() {
  return (
    <div className="flex min-h-svh w-screen">
      <div className="flex w-full p-10">
        <ChatDemo initialMessages={initialMessages} />
      </div>
    </div>
  )
}
