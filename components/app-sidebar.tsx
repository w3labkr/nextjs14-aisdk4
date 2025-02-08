'use client'

import * as React from 'react'
import { Bot, MessageCircleMore, SquarePen } from 'lucide-react'

import { NavMain } from '@/components/nav-main'
import { NavChatHistory } from '@/components/nav-chat-history'
import { NavPlan } from '@/components/nav-plan'
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from '@/components/custom-ui/sidebar'
import Link from 'next/link'

// This is sample data.
const data = {
  navMain: [
    { title: 'OpenAI', url: '/openai', icon: MessageCircleMore, isActive: false },
    { title: 'Groq', url: '/groq', icon: MessageCircleMore, isActive: false },
    // { title: 'Assistant', url: '#', icon: Bot, isActive: false },
  ],
  chatHistory: [
    { name: 'Project Management & Task Tracking', url: '#', emoji: '📊' },
    { name: 'Family Recipe Collection & Meal Planning', url: '#', emoji: '🍳' },
    { name: 'Fitness Tracker & Workout Routines', url: '#', emoji: '💪' },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar className="border-r-0" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <div className="flex items-center justify-between pr-2">
            <SidebarMenuItem>
              <SidebarMenuButton size="lg" asChild>
                <Link href="#">
                  <div className="grid flex-1 text-left text-sm leading-tight">
                    <span className="truncate font-semibold">AI SDK</span>
                  </div>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <Link href="#">
                  <SquarePen className="size-5" />
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </div>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavChatHistory data={data.chatHistory} />
      </SidebarContent>
      <SidebarFooter>
        <NavPlan />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
