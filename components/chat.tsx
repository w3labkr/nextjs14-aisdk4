'use client'

import * as React from 'react'
import { useChat } from '@ai-sdk/react'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

export function Chat({ api = '/api/chat' }: { api?: string }) {
  const { status, messages, input, handleInputChange, handleSubmit } = useChat({ api })

  return (
    <Card className="border-none shadow-none">
      <CardHeader>
        <CardTitle>AI Chatbot</CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[60vh] pr-4">
          {messages.map((m) => (
            <div key={m.id} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'} mb-4`}>
              <div className={`flex items-start ${m.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                <Avatar className="h-8 w-8">
                  <AvatarFallback>{m.role === 'user' ? 'U' : 'AI'}</AvatarFallback>
                </Avatar>
                <div
                  className={`mx-2 rounded-lg p-3 ${m.role === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'}`}
                >
                  {m.content}
                </div>
              </div>
            </div>
          ))}
          {(status === 'submitted' || status === 'streaming') && (
            <div className="mb-4 flex justify-start">
              <div className="flex items-start">
                <Avatar className="h-8 w-8">
                  <AvatarFallback>AI</AvatarFallback>
                </Avatar>
                <div className="mx-2 rounded-lg bg-gray-200 p-3 text-black">Thinking...</div>
              </div>
            </div>
          )}
        </ScrollArea>
      </CardContent>
      <CardFooter>
        <form onSubmit={handleSubmit} className="flex w-full space-x-2">
          <Input value={input} onChange={handleInputChange} placeholder="Type your message..." className="flex-grow" />
          <Button type="submit" disabled={status !== 'ready'}>
            Send
          </Button>
        </form>
      </CardFooter>
    </Card>
  )
}
