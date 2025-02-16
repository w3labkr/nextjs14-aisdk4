import { openai } from '@ai-sdk/openai'
import { streamText, convertToCoreMessages, type Message } from 'ai'

const SYSTEM_INSTRUCTIONS = `You are a helpful assistant.`

// Allow streaming responses up to 30 seconds
export const maxDuration = 30

export async function POST(req: Request) {
  const body = await req.json()
  const id: string = body?.id // id can be used for persisting the chat
  const messages: Message[] = body?.messages ?? []

  const result = streamText({
    model: openai('gpt-4o-mini'),
    temperature: 0,
    system: SYSTEM_INSTRUCTIONS,
    messages: convertToCoreMessages(messages),
  })

  return result.toDataStreamResponse()
}
