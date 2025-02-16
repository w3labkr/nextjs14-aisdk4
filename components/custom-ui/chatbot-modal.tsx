import * as React from 'react'

import { ChatProvider } from '@/context/assistant-ui/chat-provider'
import { AssistantModal } from '@/components/assistant-ui/assistant-modal'

export function ChatbotModal() {
  return (
    <ChatProvider api="/api/assistant-ui/chat">
      <AssistantModal />
    </ChatProvider>
  )
}
