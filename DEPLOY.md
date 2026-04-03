# AINewbieVN Deployment Checklist

**Domain:** ainewbievn.shop  
**Platform:** Vercel  
**Stack:** React 18 + Vite 5 + TypeScript + Tailwind + shadcn/ui  
**Supabase:** diexsbzqwsbpilsymnfb.supabase.co  

---

## Pre-Deployment (Completed)

- [x] Build passes cleanly (`npm run build` — 2.1s, 0 errors)
- [x] Removed `@sentry/react` import (package was never installed — build blocker)
- [x] Removed `lovable-tagger` from vite.config.ts
- [x] Fixed lovable.dev OG images → ainewbievn.shop/og-image.png
- [x] Fixed twitter:site @Lovable → @ainewbievn
- [x] Added og:url, og:locale, canonical link, keywords meta
- [x] Added twitter:title, twitter:description
- [x] Supabase client created at `src/lib/supabase.ts`
- [x] Installed `@supabase/supabase-js`
- [x] Fixed .env — removed localhost URLs, set production Supabase URL
- [x] Created .env.production template
- [x] Removed exposed VITE_OPENAI_API_KEY from .env.local (security fix)
- [x] Updated vercel.json — SPA rewrites, security headers, asset caching
- [x] Updated manifest.json for AINewbieVN branding
- [x] Footer copyright now dynamic (auto-updates year)
- [x] Code-split vendor chunks (react, radix-ui)
- [x] Updated .env.example for new developers

## Deploy to Vercel

### Option A: Vercel CLI (One Command)

```bash
cd d:\0.PROJECTS\01-MAIN-PRODUCTS\ainewbie-web
npx vercel --prod
```

### Option B: Git-based Deploy

```bash
cd d:\0.PROJECTS\01-MAIN-PRODUCTS\ainewbie-web
git add -A
git commit -m "Prepare for production deployment to ainewbievn.shop"
git push
# Vercel auto-deploys from push if connected
```

### Option C: Vercel Dashboard

1. Go to https://vercel.com/dashboard
2. Import project from Git or upload
3. Set framework to **Vite**
4. Set build command: `npm run build`
5. Set output directory: `dist`

## Vercel Environment Variables (MUST SET)

Set these in **Vercel Dashboard → Project Settings → Environment Variables**:

| Variable | Value | Required |
|----------|-------|----------|
| `VITE_SUPABASE_URL` | `https://diexsbzqwsbpilsymnfb.supabase.co` | YES |
| `VITE_SUPABASE_ANON_KEY` | *(get from Supabase dashboard → Settings → API)* | YES |
| `VITE_APP_URL` | `https://ainewbievn.shop` | YES |
| `VITE_APP_NAME` | `AINewbieVN` | YES |
| `VITE_GA_TRACKING_ID` | *(your GA4 measurement ID)* | Optional |
| `VITE_SENTRY_DSN` | *(your Sentry DSN)* | Optional |

## Domain Setup

1. In Vercel Dashboard → Project → Settings → Domains
2. Add `ainewbievn.shop`
3. Add `www.ainewbievn.shop` (redirect to apex)
4. Update DNS at your registrar:
   - `A` record → `76.76.21.21`
   - `CNAME` for `www` → `cname.vercel-dns.com`

## Post-Deployment Verification

- [ ] Visit https://ainewbievn.shop — homepage loads
- [ ] Visit https://ainewbievn.shop/dashboard — dashboard loads
- [ ] Visit https://ainewbievn.shop/nonexistent — 404 page shows
- [ ] Check OG tags: https://www.opengraph.xyz/url/https://ainewbievn.shop
- [ ] SSL certificate active (green padlock)
- [ ] Mobile responsive check
- [ ] Test Supabase connection (browser console: no Supabase errors)

## Remaining TODO (Post-Deploy)

- [ ] Create OG image (1200x630px) and place at `public/og-image.png`
- [ ] Get Supabase anon key and set in Vercel env vars
- [ ] Set up Google Analytics (GA4)
- [ ] Create proper favicon/PWA icons (192x192, 512x512)
- [ ] Add real social media URLs to footer
- [ ] Connect auth (Supabase Auth)
- [ ] Add real content to replace placeholder products

## Build Output

```
dist/index.html                   2.52 kB (gzip: 0.97 kB)
dist/assets/index-*.css          84.13 kB (gzip: 13.44 kB)
dist/assets/ui-*.js              47.81 kB (gzip: 17.04 kB)
dist/assets/index-*.js          156.61 kB (gzip: 44.74 kB)
dist/assets/vendor-*.js         156.82 kB (gzip: 51.15 kB)
+ 11 image assets
Total JS (gzip): ~113 kB
Build time: 2.1s
```
