# 🚀 AI Newbie Web - Developer Quick Start Guide

> **Time to setup:** ~3 minutes  
> **Prerequisites:** Node.js 18+, npm

---

## ⚡ Quick Setup

### 1. Clone & Install

```bash
cd D:\0.PROJECTS\01-MAIN-PRODUCTS\ainewbie-web
npm install
```

### 2. Environment Setup

```bash
# Copy example env
copy .env.example .env.local

# Edit if needed (optional for dev)
```

### 3. Run Development Server

```bash
npm run dev
```

App will be available at: `http://localhost:5173`

---

## 🖥️ Desktop App (Optional)

```bash
# Requires electron setup
cd electron/
# Follow electron setup instructions
```

---

## 📁 Key Files

| File | Purpose |
|------|---------|
| `src/App.tsx` | Main app component |
| `src/components/ui/` | Shadcn UI components |
| `src/pages/` | Route pages |
| `src/lib/utils.ts` | Utility functions |
| `tailwind.config.ts` | Tailwind config |
| `tsconfig.json` | TypeScript config |

---

## 🎨 UI Components

This project uses **Shadcn UI** with Radix primitives:

```bash
# Components are in src/components/ui/
# To add new shadcn components:
# npx shadcn-ui@latest add [component]
```

Available components:
- Button, Card, Dialog
- Tabs, Accordion, Toast
- Form, Input, Select
- And 20+ more...

---

## 🧪 Build & Preview

```bash
# Production build
npm run build

# Preview production build
npm run preview
```

---

## 📝 Code Style

```bash
# Run ESLint
npm run lint
```

---

## 🔧 Useful Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server |
| `npm run build` | Production build |
| `npm run preview` | Preview build |
| `npm run lint` | Run ESLint |

---

## 📚 Next Steps

1. Read `01-ARCHITECTURE/SYSTEM_ARCHITECTURE.md`
2. Check `02-FEATURES/CORE_FEATURES.md`
3. Explore `src/components/` for UI patterns

---

*Last Updated: 2025-11-29*
