import * as React from 'react'
import { type UseChatOptions } from 'ai/react'

import { AppSidebar } from '@/components/app-sidebar'
import { NavUser } from '@/components/nav-user'
import { SidebarInset, SidebarProvider, SidebarTrigger } from '@/components/custom-ui/sidebar'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Chatbot } from '@/components/chatbot'

// This is sample data.
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

// This is sample data.
const suggestions: string[] = [
  'Generate a tasty vegan lasagna recipe for 3 people.',
  'Generate a list of 5 questions for a job interview for a software engineer.',
  'Who won the 2022 FIFA World Cup?',
]

export default function OpenAIPage() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="sticky top-0 flex h-16 shrink-0 items-center gap-2 border-b bg-background px-4">
          <div className="flex flex-1 items-center gap-2">
            <SidebarTrigger />
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="gpt-4o-mini" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="gpt-4o-mini">gpt-4o-mini</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="ml-auto px-2">
            <NavUser />
          </div>
        </header>
        <div className="flex min-h-[90vh] w-full">
          <div className="flex w-full p-10">
            <Chatbot api="/api/openai" initialMessages={initialMessages} suggestions={suggestions} />
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
