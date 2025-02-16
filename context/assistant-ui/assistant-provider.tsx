'use client'

import * as React from 'react'

import { useAssistant } from '@ai-sdk/react'
import { AssistantRuntimeProvider } from '@assistant-ui/react'
import { useVercelUseAssistantRuntime } from '@assistant-ui/react-ai-sdk'

export function AssistantProvider({
  children,
  api = '/api/assistant',
}: Readonly<{
  children: React.ReactNode
  api?: string
}>) {
  const assistant = useAssistant({ api })
  const runtime = useVercelUseAssistantRuntime(assistant)

  return <AssistantRuntimeProvider runtime={runtime}>{children}</AssistantRuntimeProvider>
}
