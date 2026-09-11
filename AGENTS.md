<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# OpenDayCare (`open-daycareapp`)

Web application for daycare and nursery management, facilitating communication between educators and families with daily activity feeds, child profiles, incident reports, and institutional announcements.

---

## 🛠 Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript 5
- **UI & Styling**: React 19, Tailwind CSS v4 (`@tailwindcss/postcss`)
- **Linting**: ESLint 9 (`eslint-config-next`)
- **Package Manager**: npm

---

## 📁 Project Structure

```text
06-Daycareapp/
├── app/                  # Next.js App Router (pages, layouts, globals)
│   ├── layout.tsx        # Root layout (fonts, metadata, shell)
│   ├── page.tsx          # Initial entry page
│   └── globals.css       # Tailwind CSS imports and theme tokens
├── public/               # Static public assets
├── references/           # Design mockups & visual specifications
│   ├── pantallas/        # Prototype screens in HTML (*.dc.html)
│   └── screenshots/      # Reference UI screenshots
├── .agents/              # Agent tools, MCP configuration and skills
│   ├── mcp_config.json   # MCP servers configuration (Playwright)
│   └── skills/           # Custom agent skills (/spec, /spec-impl)
├── AGENTS.md             # Project documentation & agent instructions
└── package.json          # Dependencies and npm scripts
```

---

## ⚡ Development Commands

```bash
# Start development server (http://localhost:3000)
npm run dev

# Build production bundle
npm run build

# Start production server
npm run start

# Run ESLint checks
npm run lint
```

---

## 📐 Coding Standards & Guidelines

- **Clean Code & SOLID**:
  - Keep components and functions small, cohesive, and focused on a single responsibility.
  - Follow DRY (Don't Repeat Yourself) — extract shared logic into reusable utilities or hooks.
  - Prioritize simplicity and readable code over complex or clever patterns.
- **Language Policy**:
  - **Code in English**: Variable names, function names, types, interfaces, and component identifiers.
  - **Comments in Spanish**: Only when they add clear context or explain non-trivial decisions.
- **Next.js Conventions**:
  - Use React Server Components (RSC) by default.
  - Add `'use client'` only at leaf nodes when state, event handlers, or browser APIs are required.
  - Consult Next.js 16 docs in `node_modules/next/dist/docs/` before using APIs with breaking changes.
- **Styling**:
  - Tailwind CSS v4 utility classes.
  - Adhere to design tokens and color scheme defined in `references/pantallas/`.

---

## 🎨 Reference Screens (`references/pantallas/`)

Consult these HTML prototypes before implementing components to match layout, colors, and UX flows:
- **Auth**: `login.dc.html`, `activar-cuenta.dc.html`, `vincular-padre.dc.html`
- **Educator / Staff**: `feed.dc.html`, `resumen-dia.dc.html`, `crear-publicacion.dc.html`, `foto.dc.html`, `ninos.dc.html`, `perfil-nino.dc.html`, `agregar-nino.dc.html`, `avisos.dc.html`, `mi-cuenta.dc.html`
- **Family / Parents**: `familia-feed.dc.html`, `detalle-publicacion.dc.html`, `familia-cuenta.dc.html`

---

## 🤖 MCP's & Agent Tools

- **Playwright**:
  - Screenshots y cualquier elemento relacionado a Playwright tienen que estar en la carpeta `.playwright-mcp`.
- **Context7**:
  - Use Context7 MCP to fetch documentation whenever checking libraries, frameworks, or APIs.
- **Agent Skills**:
  - `/spec`: Interactive spec-driven design before building new features.
  - `/spec-impl`: Implementation workflow guided by an approved spec.