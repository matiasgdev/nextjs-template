# SOCIO FRONTEND

A webapp service for FDV/Hunters

## Requirements

- node 18.x.x
  > if you are using [nvm](https://github.com/nvm-sh/nvm), `nvm use` in your terminal

## Quick start 🚀

Install packages

```
  yarn (or `npm install` if you prefer npm)
```

Run development

```
  yarn dev
```

> `yarn dev -p [PORT]` if you want to run in another specific port

Visit page

```
  http://localhost:3000
```

## Scripts

- `yarn dev` — Starts the application in development mode at `http://localhost:3000`.
- `yarn build` — Creates an optimized production build of your application.
- `yarn start` — Starts the application in production mode.
- `yarn type-check` — Validate code using TypeScript compiler.
- `yarn lint` — Runs ESLint for all files in the `src` directory.
- `yarn format` — Runs Prettier for all files in the `src` directory.

## Directory Structure

- [`.github`](.github) — GitHub configuration including the CI workflow.<br>
- [`.husky`](.husky) — Husky configuration and hooks.<br>
- [`public`](./public) — Static assets such as robots.txt, images, and favicon.<br>
- [`src`](./src) — Application source code, including pages, components, styles.

## Path Mapping

TypeScript are pre-configured with custom path mappings. To import components or files, use the `@` prefix.

```tsx
import { Button } from '@/components/Button';

// To import images or other files from the public folder
import avatar from '@/public/avatar.png';
```

and [`tsconfig.json`](tsconfig.json)

```json
"paths": {
  "@/components/*": ["./src/components/*"],
}
```

## Stack

- ⚡️ Next.js 13
- ⚛️ React 18
- ⛑ TypeScript
- 💖 TailwindCSS
- 🦑 Testing library + Jest - Testing frameworks to encourage good practices
- 📏 ESLint — To find and fix problems in your code
- 💖 Prettier — Code Formatter for consistent style
- 🐶 Husky — For running scripts before committing
- 🚓 Commitlint — To make sure your commit messages follow the convention
