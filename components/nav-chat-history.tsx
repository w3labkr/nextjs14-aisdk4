'use client'

import * as React from 'react'

import { SidebarMenu, SidebarGroup, SidebarGroupLabel } from '@/components/custom-ui/sidebar'
import { ThreadList } from '@/components/assistant-ui/thread-list'

export function NavChatHistory() {
  return (
    <SidebarGroup className="group-data-[collapsible=icon]:hidden">
      <SidebarGroupLabel>Today</SidebarGroupLabel>
      <SidebarMenu>
        {/* Error: External store adapter does not support archiving ... */}
        {/* <ThreadList /> */}
      </SidebarMenu>
    </SidebarGroup>
  )
}
