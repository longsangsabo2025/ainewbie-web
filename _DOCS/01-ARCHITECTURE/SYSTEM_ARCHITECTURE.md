# 🏗️ AI Newbie Web - System Architecture

> **Version:** 0.0.0 (Development)  
> **Last Updated:** 2025-11-29  
> **Source:** `package.json` analysis

---

## 📊 Technology Stack (Verified)

### Frontend
| Technology | Version | Purpose |
|------------|---------|---------|
| React | 18.3.1 | UI Framework |
| TypeScript | 5.8.3 | Type Safety |
| Vite | 5.4.19 | Build Tool |
| TailwindCSS | 3.4.17 | Styling |
| React Router | 6.30.1 | Navigation |

### UI Components (Radix UI)
| Component | Version |
|-----------|---------|
| Accordion | 1.2.11 |
| Dialog | 1.1.14 |
| Dropdown Menu | 2.1.15 |
| Tabs | 1.1.12 |
| Toast | 1.2.14 |
| Tooltip | 1.2.7 |
| + 18 more... | - |

### Data & Forms
| Technology | Version | Purpose |
|------------|---------|---------|
| TanStack Query | 5.83.0 | Server State |
| React Hook Form | 7.61.1 | Form Management |
| Zod | 3.25.76 | Validation |
| Recharts | 2.15.4 | Charts |

### Desktop (Optional)
| Technology | Version | Purpose |
|------------|---------|---------|
| Electron | 39.2.4 | Desktop App |

---

## 🏗️ Architecture Diagram

```
┌─────────────────────────────────────────────────────────────────┐
│                    AI Newbie Web                                │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  ┌──────────────────────────────────────────────────────────┐  │
│  │                    PRESENTATION LAYER                     │  │
│  │  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐       │  │
│  │  │  React 18   │  │  Radix UI   │  │  TailwindCSS│       │  │
│  │  │  TypeScript │  │  (24 comps) │  │  + Animate  │       │  │
│  │  └─────────────┘  └─────────────┘  └─────────────┘       │  │
│  └──────────────────────────────────────────────────────────┘  │
│                              │                                  │
│  ┌──────────────────────────────────────────────────────────┐  │
│  │                    ROUTING & NAVIGATION                   │  │
│  │  ┌─────────────────────────────────────────────────────┐ │  │
│  │  │              React Router DOM 6.30.1                │ │  │
│  │  │         (Pages, Layouts, Protected Routes)          │ │  │
│  │  └─────────────────────────────────────────────────────┘ │  │
│  └──────────────────────────────────────────────────────────┘  │
│                              │                                  │
│  ┌──────────────────────────────────────────────────────────┐  │
│  │                    STATE & DATA                           │  │
│  │  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐       │  │
│  │  │  TanStack   │  │  React Hook │  │  Zod        │       │  │
│  │  │  Query      │  │  Form       │  │  Validation │       │  │
│  │  └─────────────┘  └─────────────┘  └─────────────┘       │  │
│  └──────────────────────────────────────────────────────────┘  │
│                              │                                  │
│  ┌──────────────────────────────────────────────────────────┐  │
│  │                    UI UTILITIES                           │  │
│  │  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐       │  │
│  │  │  Lucide     │  │  Tabler     │  │  Sonner     │       │  │
│  │  │  Icons      │  │  Icons      │  │  Toasts     │       │  │
│  │  └─────────────┘  └─────────────┘  └─────────────┘       │  │
│  └──────────────────────────────────────────────────────────┘  │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

## 📁 Project Structure

```
ainewbie-web/
├── src/
│   ├── components/         # UI components
│   │   ├── ui/             # Shadcn/Radix components
│   │   └── ...             # Feature components
│   ├── pages/              # Route pages
│   ├── hooks/              # Custom hooks
│   ├── lib/                # Utilities
│   └── styles/             # Global styles
├── public/                 # Static assets
├── electron/               # Desktop app
├── scripts/                # Build scripts
├── _DOCS/                  # Documentation
├── package.json            # Dependencies
├── tsconfig.json           # TypeScript config
├── tailwind.config.ts      # Tailwind config
└── vite.config.ts          # Vite config
```

---

## 🎯 Core Features (Planned)

### Learning Management
- 📚 Course catalog
- 📖 Lesson viewer
- ✅ Progress tracking
- 🎯 Quizzes & assessments

### User Features
- 👤 User profiles
- 📊 Learning dashboard
- 🏆 Achievements
- 📜 Certificates

---

## 📊 Dependencies Count

| Category | Count |
|----------|-------|
| Production Dependencies | 49 |
| Dev Dependencies | 17 |
| **Total** | **66** |

### Radix UI Components: 24 packages

---

## 🔄 Build Process

```bash
# Development
npm run dev          # Vite dev server

# Production
npm run build        # Vite build
npm run preview      # Preview build

# Linting
npm run lint         # ESLint
```

---

*Generated from package.json analysis - 2025-11-29*
