# DEPENDENCIES

## Table of Contents

- [DEPENDENCIES](#dependencies)
  - [Table of Contents](#table-of-contents)
  - [Next.js](#nextjs)
  - [shadcn](#shadcn)
  - [assistant-ui](#assistant-ui)
  - [Tailwindcss](#tailwindcss)
  - [AI SDK](#ai-sdk)
  - [ESLint](#eslint)
  - [Prettier](#prettier)

## Next.js

Automatic Installation

```shell
$ npx create-next-app@14.2.20 .

✔ Would you like to use TypeScript? Yes
✔ Would you like to use ESLint? Yes
✔ Would you like to use Tailwind CSS? Yes
✔ Would you like to use `src/` directory? No
✔ Would you like to use App Router? (recommended) Yes
✔ Would you like to customize the default import alias (@/*)? No

$ node -v > .nvmrc
```

[How to set up a new Next.js project](https://nextjs.org/docs/app/getting-started/installation)

## shadcn

Run the init command to create a new Next.js project or to setup an existing one:

```shell
npx shadcn@latest init -d
```

Use the add command to add components and dependencies to your project.

```shell
npx shadcn@latest add -a
```

This will add/install all shadcn components (overwrite if present).

```shell
npx shadcn@latest add -a -y -o
```

Add `tanstack/react-table` dependency:

```shell
npm install @tanstack/react-table
```

Add the Toaster component. Edit `app/layout.tsx`:

```javascript
import { Toaster } from '@/components/ui/sonner'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <Toaster richColors closeButton />
      </body>
    </html>
  );
}
```

[Install and configure Next.js](https://ui.shadcn.com/docs/installation/next)

## assistant-ui

Install provider SDK:

```shell
npm install ai @assistant-ui/react-ai-sdk @ai-sdk/openai
```

Typescript/React library for AI Chat

```shell
npx shadcn@latest add -o "https://r.assistant-ui.com/thread" "https://r.assistant-ui.com/thread-list" "https://r.assistant-ui.com/attachment" "https://r.assistant-ui.com/assistant-modal" "https://r.assistant-ui.com/assistant-sidebar" "https://r.assistant-ui.com/markdown-text"
```

Integration with the Vercel AI SDK UI's useChat hook.

```shell
npm install @assistant-ui/react @assistant-ui/react-ai-sdk ai @ai-sdk/openai
```

Integration with the Vercel AI SDK UI's useAssistant hook.

```shell
npm install @assistant-ui/react @assistant-ui/react-ai-sdk ai openai
```

## Tailwindcss

Install Tailwind CSS

```shell
npm install -D tailwindcss@3 postcss autoprefixer
```

Add Tailwind to your PostCSS configuration. `postcss.config.js`:

```javascript
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  }
}
```

[Get started with Tailwind CSS](https://tailwindcss.com/docs/installation/using-postcss)

## AI SDK

Official JavaScript / TypeScript library for the OpenAI API

```shell
npm install openai
```

The AI SDK is the TypeScript toolkit designed to help developers build AI-powered applications and agents with React, Next.js, Vue, Svelte, Node.js, and more.

```shell
npm install ai @ai-sdk/openai zod
```

The Groq provider for the AI SDK contains language model support for the Groq chat and completion APIs and embedding model support for the Groq embeddings API.

```shell
npm install @ai-sdk/groq
```

## ESLint

ESLint is a tool for identifying and reporting on patterns found in ECMAScript/JavaScript code.

```shell
npm install --save-dev eslint eslint-plugin-react eslint-plugin-react-hooks
npm install --save-dev eslint-plugin-import eslint-import-resolver-typescript
npm install --save-dev @typescript-eslint/parser @typescript-eslint/eslint-plugin
npm install --save-dev @next/eslint-plugin-next
```

Find and fix problems in your JavaScript code.

```shell
npx eslint ./app
npx eslint --fix ./{app,components,config,context,hooks,lib,schemas,store,types,utils}
```

## Prettier

Prettier is an opinionated code formatter.

```shell
npm install --save-dev prettier eslint-plugin-prettier eslint-config-prettier
npm install --save-dev eslint-plugin-tailwindcss prettier-plugin-tailwindcss
npm install --save-dev prettier-plugin-prisma
```

To format a file in-place.

```shell
npx prettier --check "./app/**/*.{ts,tsx}"
npx prettier --write "./{app,components,config,context,hooks,lib,schemas,store,types,utils}/**/*.{ts,tsx}"
```
