'use client'

import * as React from 'react'

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
import { NavMain } from '@/components/nav-main'
import { NavSecondary } from '@/components/nav-secondary'
import { NavPlan } from '@/components/nav-plan'
import { NewChat } from '@/components/custom-ui/new-chat'
import { NavChatHistory } from '@/components/custom-ui/nav-chat-history'
import { Thread } from '@/components/assistant-ui/thread'

import dashboard from '@/config/dashboard'

export function AssistantSidebar({ children }: { children?: React.ReactNode }) {
  return (
    <SidebarProvider>
      <Sidebar>
        <SidebarHeader className="flex h-16 flex-row items-center justify-between px-2 py-0">
          <NavLogo />
          <NewChat />
        </SidebarHeader>
        <SidebarContent className="space-y-4 px-2">
          <NavMain items={dashboard.navMain} />
          <NavSecondary items={dashboard.navSecondary} />
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
