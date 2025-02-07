import 'next'

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NEXT_PUBLIC_APP_NAME: string
      NEXT_PUBLIC_APP_URL: string

      OPENAI_API_KEY: string

      [key: string]: string | undefined
    }
  }
}
