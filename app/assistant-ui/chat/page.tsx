import * as React from 'react'

import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
import { ChatProvider } from '@/context/assistant-ui/chat-provider'
import { AssistantSidebar } from '@/components/custom-ui/assistant-sidebar'

export default function ChatPage() {
  return (
    <ChatProvider api="/api/assistant-ui/chat">
      <AssistantSidebar>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="#">Assistant UI</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Chat</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </AssistantSidebar>
    </ChatProvider>
  )
}
