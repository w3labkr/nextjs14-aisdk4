# DEPENDENCIES

## Next.js

Automatic Installation

```shell
$ npx create-next-app@14.2.20 .

✔ Would you like to use TypeScript? … Yes
✔ Would you like to use ESLint? … Yes
✔ Would you like to use Tailwind CSS? … Yes
✔ Would you like to use `src/` directory? … No
✔ Would you like to use App Router? (recommended) … Yes
✔ Would you like to customize the default import alias (@/*)? … No
```

```shell
node -v > .nvmrc
```

## Tailwindcss

Install Tailwind CSS with Next.js

```shell
npm install -D tailwindcss@3 postcss autoprefixer
```

Beautiful typographic defaults for HTML you don't control.

```shell
npm install -D @tailwindcss/typography
```

## Shadcn

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
npx eslint --fix ./{app,components,config,context,hooks,lib,queries,store,types}
```

## Prettier

Prettier is an opinionated code formatter.

```shell
npm install --save-dev prettier eslint-plugin-prettier eslint-config-prettier
npm install --save-dev eslint-plugin-tailwindcss prettier-plugin-tailwindcss
```

To format a file in-place.

```shell
npx prettier --check "./app/**/*.{ts,tsx}"
npx prettier --write "./{app,components,config,context,hooks,lib,queries,store,types}/**/*.{ts,tsx}"
```
