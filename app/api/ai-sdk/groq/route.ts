import { convertToCoreMessages, streamText, type Message } from 'ai'
import { createOpenAI as createGroq } from '@ai-sdk/openai'

const SYSTEM_INSTRUCTIONS = `You are a helpful assistant.`

const groq = createGroq({
  baseURL: 'https://api.groq.com/openai/v1',
  apiKey: process.env.GROQ_API_KEY,
})

// Allow streaming responses up to 30 seconds
export const maxDuration = 30

export async function POST(req: Request) {
  const body = await req.json()
  const id: string = body?.id // id can be used for persisting the chat
  const messages: Message[] = body?.messages ?? []

  const result = streamText({
    model: groq('deepseek-r1-distill-llama-70b'),
    temperature: 0,
    system: SYSTEM_INSTRUCTIONS,
    messages: convertToCoreMessages(messages),
  })

  return result.toDataStreamResponse()
}
