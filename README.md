# Psychologist Landing Page

A fast, accessible landing page for an online psychology practice, built to turn
visitors into booked first sessions. Warm wellness design, a real serverless contact
flow, GDPR-compliant legal pages and SEO with structured data.

🔗 **Live demo:** https://psicologa-demo.netlify.app

> **Note:** This is a sanitized public showcase of a real client project. All names,
> contact details, photos and testimonials here are placeholder/demo data, and the
> contact form runs in demo mode (no real emails are sent).

---

## Features

- **Single source of content** — every text, price, credential and FAQ lives in
  [`lib/site.ts`](lib/site.ts), so the whole site is editable without touching markup.
- **Serverless contact form** — posts to a Next.js Route Handler that sends the email
  via the [Resend](https://resend.com) API. The API key stays server-side only.
- **Spam protection & validation** — hidden honeypot field, server-side validation and
  graceful error handling.
- **GDPR ready** — consent checkbox, plus `/aviso-legal` and `/privacidad` pages
  (Spanish LOPDGDD / RGPD).
- **SEO** — full metadata, Open Graph/Twitter cards and JSON-LD (`Psychologist` schema).
- **Accessible & polished** — semantic HTML, keyboard-friendly nav, scroll-reveal
  animations that respect `prefers-reduced-motion`, and an image component with a
  branded gradient fallback.
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

To enable real email sending, copy `.env.example` to `.env.local` and set your keys:

```bash
RESEND_API_KEY=your_key_here
CONTACT_TO_EMAIL=destination@example.com
```

## Project structure

```
app/
  api/contact/route.ts   # serverless email endpoint (Resend)
  aviso-legal/           # legal notice (GDPR)
  privacidad/            # privacy policy (GDPR)
  layout.tsx             # metadata + fonts
  page.tsx               # the landing page
components/               # Nav, ContactForm, Photo, Reveal, ...
lib/site.ts              # ← all editable content lives here
```

---

<sub>Construido con Next.js, TypeScript y Tailwind. Diseño y desarrollo de la web de una
psicóloga sanitaria para captación de pacientes (versión demo con datos ficticios).</sub>
