'use client'

import * as React from 'react'

import { SquarePen } from 'lucide-react'
import { ThreadListPrimitive } from '@assistant-ui/react'

export function NewChat() {
  return (
    <ThreadListPrimitive.New asChild>
      <button type="button" className="p-2">
        <SquarePen className="size-5" />
      </button>
    </ThreadListPrimitive.New>
  )
}
