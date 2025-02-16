'use client'

import * as React from 'react'
import Link from 'next/link'

import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/custom-ui/sidebar'
// import { ThreadList } from '@/components/assistant-ui/thread-list'

const items: { title: string; url: string }[] = []

export function NavChatHistory() {
  return (
    <SidebarGroup className="p-0">
      <SidebarGroupLabel>Today</SidebarGroupLabel>
      <SidebarGroupContent>
        {/* Error: External store adapter does not support archiving ... */}
        {/* <ThreadList /> */}
        {items.map((item) => (
          <SidebarMenuItem key={item.title}>
            <SidebarMenuButton asChild>
              <Link href={item.url}>
                <span>{item.title}</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        ))}
      </SidebarGroupContent>
    </SidebarGroup>
  )
}
