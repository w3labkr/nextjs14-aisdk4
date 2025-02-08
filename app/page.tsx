import * as React from 'react'

import { AppSidebar } from '@/components/app-sidebar'
import { NavUser } from '@/components/nav-user'
import { SidebarInset, SidebarProvider, SidebarTrigger } from '@/components/custom-ui/sidebar'
import { ChatDemo } from '@/components/chat-demo'

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
            <ChatDemo />
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
