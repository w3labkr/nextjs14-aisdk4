import * as React from 'react'

import { AssistantProvider } from '@/context/assistant-provider'
import { AppSidebar } from '@/components/app-sidebar'

export default function AssistantPage() {
  return (
    <AssistantProvider api="/api/assistant">
      <AppSidebar />
    </AssistantProvider>
  )
}
