'use client'

import * as React from 'react'
import { useRouter } from 'next/navigation'

export function NavLogo() {
  const router = useRouter()

  return (
    <button type="button" className="p-2" onClick={() => router.push('/chat')}>
      <span className="font-semibold">AI SDK</span>
    </button>
  )
}
