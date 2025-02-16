import 'next'

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NEXT_PUBLIC_APP_URL: string

      OPENAI_API_KEY: string
      OPENAI_ASSISTANT_ID: string
      ANTHROPIC_API_KEY: string
      AZURE_RESOURCE_NAME: string
      AZURE_API_KEY: string
      AWS_ACCESS_KEY_ID: string
      AWS_SECRET_ACCESS_KEY: string
      AWS_REGION: string
      GOOGLE_GENERATIVE_AI_API_KEY: string
      GOOGLE_VERTEX_PROJECT: string
      GOOGLE_VERTEX_LOCATION: string
      GOOGLE_APPLICATION_CREDENTIALS: string
      GROQ_API_KEY: string
      FIREWORKS_API_KEY: string
      COHERE_API_KEY: string

      [key: string]: string | undefined
    }
  }
}
