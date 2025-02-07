import 'next'

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NEXT_PUBLIC_APP_NAME: string
      NEXT_PUBLIC_APP_URL: string

      [key: string]: string | undefined
    }
  }
}
