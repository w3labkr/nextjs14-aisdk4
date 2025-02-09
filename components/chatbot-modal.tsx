import * as React from 'react'

import { ChatProvider } from '@/context/chat-provider'
import { AssistantModal } from '@/components/assistant-ui/assistant-modal'

export function ChatbotModal() {
  return (
    <ChatProvider api="/api/chat">
      <AssistantModal />
    </ChatProvider>
  )
}
