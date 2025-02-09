'use client'

import * as React from 'react'

import { Bot, MessageCircleMore } from 'lucide-react'
import { NavMain } from '@/components/nav-main'
import { NavPlan } from '@/components/nav-plan'
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from '@/components/custom-ui/sidebar'
import { NavUser } from '@/components/nav-user'
import { NavLogo } from '@/components/nav-logo'
import { Thread } from '@/components/assistant-ui/thread'
import { NavChatHistory } from '@/components/nav-chat-history'
import { NewChat } from '@/components/new-chat'

// This is sample data.
const data = {
  navMain: [
    { title: 'OpenAI', url: '/chat', icon: MessageCircleMore, isActive: false },
    { title: 'Groq', url: '/groq', icon: MessageCircleMore, isActive: false },
    { title: 'Assistant', url: '/assistant', icon: Bot, isActive: false },
  ],
}

export function AppSidebar({ children }: { children?: React.ReactNode }) {
  return (
    <SidebarProvider>
      <Sidebar>
        <SidebarHeader className="flex h-16 flex-row items-center justify-between px-2 py-0">
          <NavLogo />
          <NewChat />
        </SidebarHeader>
        <SidebarContent className="px-2">
          <NavMain items={data.navMain} />
          <NavChatHistory />
        </SidebarContent>
        <SidebarFooter className="px-2">
          <NavPlan />
        </SidebarFooter>
        <SidebarRail />
      </Sidebar>
      <SidebarInset>
        <header className="sticky top-0 z-10 flex h-16 shrink-0 items-center gap-2 border-b bg-background px-4">
          <div className="flex flex-1 items-center gap-2">
            <SidebarTrigger />
            {children}
          </div>
          <div className="ml-auto px-2">
            <NavUser />
          </div>
        </header>
        <div className="h-full w-full p-10">
          <Thread />
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
