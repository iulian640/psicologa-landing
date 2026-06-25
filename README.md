# Psychologist Landing Page

A fast, accessible landing page for an online psychology practice, built to turn
visitors into booked first sessions. Warm wellness design, a real serverless contact
flow, GDPR-compliant legal pages and SEO with structured data.

🔗 **Live demo:** https://psicologialanding.netlify.app

> **Note:** This is a sanitized public showcase of a real client project. All names,
> contact details, photos and testimonials are placeholder/demo data.

---

## Features

- **Single source of content** — every text, price, credential and FAQ lives in
  [`lib/site.ts`](lib/site.ts), so the whole site is editable without touching markup.
- **Serverless contact form** — posts to a Next.js Route Handler that sends email
  via the [Resend](https://resend.com) API. The API key stays server-side only.
- **Spam protection & CSRF** — hidden honeypot field, server-side origin validation,
  and graceful error handling.
- **GDPR ready** — consent checkbox, plus `/aviso-legal` and `/privacidad` pages
  (Spanish LOPDGDD / RGPD).
- **SEO** — full metadata, Open Graph / Twitter cards, dual JSON-LD schemas
  (`Psychologist` + `FAQPage`), absolute canonical URL, static sitemap `lastModified`,
  and robots.txt.
- **Security headers** — CSP, X-Frame-Options, Referrer-Policy, Permissions-Policy
  set in `next.config.ts`.
- **WCAG 2.2 AA accessible** — `<main>` landmark with skip link, mobile nav uses
  `aria-expanded` + `inert` to remove hidden links from tab order, form success/error
  states announced via `aria-live` regions, all decorative icons marked
  `aria-hidden`, email and phone rendered as native links, `:focus-visible` ring on
  every interactive element, `--color-muted` and footer colours meet 4.5:1 contrast,
  and all hover/transform animations suppressed under `prefers-reduced-motion`.
- **Responsive** — mobile-first layout with a collapsible nav.

## Tech stack

| | |
|---|---|
| Framework | **Next.js 15** (App Router) |
| Language | **TypeScript** |
| Styling | **Tailwind CSS v4** |
| Animation | **Motion** (Framer Motion) |
| Icons | **Phosphor Icons** |
| Email | **Resend** API |
| Hosting | **Netlify** |

## Architecture highlights

- **Content/UI separation.** Components are dumb and data-driven; `lib/site.ts` is the
  one file a non-technical owner would ever edit.
- **Secrets never reach the client.** The contact API route (`app/api/contact/route.ts`)
  reads `RESEND_API_KEY` from the environment and runs only on the server.
- **Graceful image handling.** [`components/Photo.tsx`](components/Photo.tsx) falls back
  to a branded gradient if an image is missing, so the layout never breaks.

## Getting started

```bash
npm install
npm run dev
# http://localhost:3000
```

Copy `.env.example` to `.env.local` and fill in your values to enable email sending:

```bash
RESEND_API_KEY=your_key_here
CONTACT_FROM_EMAIL="Your Name <you@yourdomain.com>"
CONTACT_TO_EMAIL=destination@example.com
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

## Project structure

```
app/
  api/contact/route.ts   # serverless email endpoint (Resend)
  aviso-legal/           # legal notice (GDPR)
  privacidad/            # privacy policy (GDPR)
  layout.tsx             # metadata + fonts
  page.tsx               # the landing page
  sitemap.ts             # auto-generated sitemap.xml
  robots.ts              # auto-generated robots.txt
components/              # Nav, ContactForm, Photo, Reveal, ...
lib/site.ts              # ← all editable content lives here
public/og.jpg            # static Open Graph image (1200×630)
next.config.ts           # security headers + image domains
```

---

<sub>Built with Next.js, TypeScript and Tailwind. Design and development of a landing page
for a licensed psychologist — demo version with placeholder data.</sub>
