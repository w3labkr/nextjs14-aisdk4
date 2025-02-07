import * as React from 'react'

import { AppSidebar } from '@/components/app-sidebar'
import { NavUser } from '@/components/nav-user'
import { SidebarInset, SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'

import { type UseChatOptions } from 'ai/react'
import { ChatDemo } from '@/components/chat-demo'

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

export default function Home() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="sticky top-0 flex h-16 shrink-0 items-center gap-2 border-b bg-background px-4">
          <div className="flex flex-1 items-center gap-2">
            <SidebarTrigger />
          </div>
          <div className="ml-auto px-2">
            <NavUser />
          </div>
        </header>
        <div className="flex min-h-[90vh] w-full">
          <div className="flex w-full p-10">
            <ChatDemo initialMessages={initialMessages} />
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
