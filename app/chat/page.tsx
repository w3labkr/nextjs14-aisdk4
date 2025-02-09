import * as React from 'react'

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { AppSidebar } from '@/components/app-sidebar'
import { ChatProvider } from '@/context/chat-provider'

export default function OpenAIPage() {
  return (
    <ChatProvider api="/api/chat">
      <AppSidebar>
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="gpt-4o-mini" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="gpt-4o-mini">gpt-4o-mini</SelectItem>
          </SelectContent>
        </Select>
      </AppSidebar>
    </ChatProvider>
  )
}
