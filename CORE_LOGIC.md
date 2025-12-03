# CORE_LOGIC: AI Newbie Web

> **Nguồn dữ liệu:**
> - Page structure: `src/pages/Index.tsx`
> - Components: `src/components/*.tsx`
> - UI Library: `src/components/ui/`
>
> **Nguyên tắc:** Mọi thông tin trong file này phải có nguồn từ code thực tế.

---

## Overview

AI Newbie Web là landing page marketing cho dịch vụ AI Newbie - nền tảng học AI và kết nối cộng đồng AI Việt Nam.

**Project Path:** `D:\0.PROJECTS\01-MAIN-PRODUCTS\ainewbie-web`

**Tech Stack (từ package.json):**
- Frontend: React 18.3.1 + TypeScript 5.8.3 + Vite 5.4.19
- UI: shadcn/ui + TailwindCSS 3.4.17
- Data: TanStack Query 5.83.0
- Forms: react-hook-form 7.61.1 + zod 3.25.76
- Icons: Lucide React 0.462.0 + Tabler Icons 3.35.0
- Charts: Recharts 2.15.4
- Theme: next-themes 0.3.0

---

## Page Structure (từ src/pages/Index.tsx)

```typescript
const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <ServicesSection />
        <WorkflowSection />
        <JobSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};
```

### Routes
- `/` - Homepage (Index.tsx)
- `/dashboard` - Dashboard.tsx
- `/*` - NotFound.tsx (404)

---

## Components (từ src/components/)

### HeroSection
> Source: `src/components/HeroSection.tsx`

**Stats Display:**
```typescript
<div className="text-3xl font-bold text-primary glow-text">5000+</div>
<div className="text-sm text-muted-foreground">Thành viên</div>

<div className="text-3xl font-bold text-primary glow-text">1200+</div>
<div className="text-sm text-muted-foreground">Workflows</div>

<div className="text-3xl font-bold text-primary glow-text">300+</div>
<div className="text-sm text-muted-foreground">Dự án</div>
```

**Visual Effects:**
- `cyber-grid` - Background grid pattern
- `glow-text` - Text glow effect
- `glow-box` - Box glow effect
- Animated orbs: `animate-pulse`, `animate-spin-slow`

### ServicesSection
> Source: `src/components/ServicesSection.tsx`

**4 Services Định nghĩa:**
```typescript
const services = [
  {
    icon: Cpu,
    title: "Sản Phẩm Số AI",
    description: "Các giải pháp AI tùy chỉnh, automation tools...",
    features: ["Custom AI Models", "Automation Tools", "API Integration"]
  },
  {
    icon: Network,
    title: "Workflow Automation",
    features: ["Community Sharing", "Ready-to-use Templates", "Custom Workflows"]
  },
  {
    icon: Briefcase,
    title: "Dịch Vụ Tư Vấn",
    features: ["AI Strategy", "Digital Transformation", "Process Optimization"]
  },
  {
    icon: Users,
    title: "Tuyển Dụng & Job Board",
    features: ["Job Posting", "Talent Matching", "Career Development"]
  }
];
```

---

## UI Components (shadcn/ui)

### Installed Components
> Source: `package.json` dependencies

| Component | Package |
|-----------|---------|
| Accordion | @radix-ui/react-accordion |
| AlertDialog | @radix-ui/react-alert-dialog |
| Avatar | @radix-ui/react-avatar |
| Button | (built-in) |
| Card | (built-in) |
| Checkbox | @radix-ui/react-checkbox |
| Dialog | @radix-ui/react-dialog |
| DropdownMenu | @radix-ui/react-dropdown-menu |
| Form | react-hook-form + zod |
| NavigationMenu | @radix-ui/react-navigation-menu |
| Popover | @radix-ui/react-popover |
| Progress | @radix-ui/react-progress |
| ScrollArea | @radix-ui/react-scroll-area |
| Select | @radix-ui/react-select |
| Slider | @radix-ui/react-slider |
| Switch | @radix-ui/react-switch |
| Tabs | @radix-ui/react-tabs |
| Toast | @radix-ui/react-toast |
| Toggle | @radix-ui/react-toggle |
| Tooltip | @radix-ui/react-tooltip |

### Custom Components
- `GlowCard` - Card với glow effect
- `CTASection` - Call-to-action blocks
- `NavLink` - Navigation links

---

## CSS Classes (Custom)

### Visual Effects
```css
.cyber-grid      /* Grid background pattern */
.glow-text       /* Text glow animation */
.glow-box        /* Box shadow glow */
.glow-border     /* Border glow */
```

### Animations
```css
.animate-pulse        /* Pulsing effect */
.animate-spin-slow    /* Slow rotation */
.delay-700           /* Animation delay */
```

---

## NPM Scripts
> Source: `package.json`

- `npm run dev` - Vite development server
- `npm run build` - Production build
- `npm run build:dev` - Development build
- `npm run lint` - ESLint check
- `npm run preview` - Preview production build

---

## Value Proposition
> Source: `src/components/HeroSection.tsx`

**Tagline:** "AINewbieVN - Cộng Đồng AI Việt Nam"

**Description:** "Nền tảng hàng đầu về sản phẩm số AI, workflow tự động hóa, và kết nối nhân tài công nghệ tại Việt Nam"

**CTA Buttons:**
1. "Khám Phá Ngay" (Primary)
2. "Tìm Hiểu Thêm" (Outline)

---

## Changelog

### 2025-01-XX (First Principles Rewrite)
- CORE_LOGIC.md rewritten từ actual source code
- Thêm component structure từ Index.tsx
- Thêm services data từ ServicesSection.tsx
- Thêm UI components list từ package.json

### 2025-12-01
- SEO improvements
- Performance optimization

### 2025-11-25
- Initial landing page launch
