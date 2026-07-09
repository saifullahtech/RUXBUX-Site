# RUXBUX Frontend

RUXBUX is a Next.js storefront frontend for the RUXBUX ecommerce brand — a Pakistani home-organization brand selling the StackSmart Wardrobe Organizer.

**Live site:** [ruxbux.com](https://ruxbux.com) · **Backend API:** [RUXBUX-DRF-Backend](https://github.com/saifullahtech/RUXBUX-DRF-Backend)

> Launched July 2026. Currently in production, supporting live paid ad campaigns (Meta/TikTok/Snapchat) with server-side Conversions API tracking handled by the backend.

## Architecture

This is the frontend half of a deliberately **decoupled architecture**:

```text
Browser
   │
   ▼
Next.js (SSR/SSG) ──── REST ────► Django REST Framework API
   │  PM2 + Nginx                    Gunicorn + Nginx
   │                                 PostgreSQL · Celery
   ▼
Meta / TikTok / Snapchat Pixels ──► server-side CAPI (backend)
```

Frontend and backend live in separate repos because they have separate ecosystems (pnpm vs pip), separate deploy pipelines, and separate scaling concerns.

## AI-Assisted Development Workflow

**~90% of this codebase was written via Claude Code and Cursor.** My role as the sole developer was everything around the generated code:

1. **Architect** — I designed the system structure, component hierarchy, routing, and data flow before any code existed.
2. **Spec** — Each feature started as a written spec/prompt targeting clean, testable, well-documented output.
3. **Generate** — Claude Code and Cursor implemented against the specs.
4. **Review** — I reviewed, debugged, and refactored every generated change for performance, security, and maintainability before it shipped.
5. **Deploy** — I handle production deployment and monitoring myself: this app runs under **PM2 behind Nginx** on a Linux VPS; the DRF backend runs under **Gunicorn behind Nginx**.

AI is the force-multiplier here — architecture, review, and responsibility are mine.

## Tech Stack

- Next.js 16 (App Router)
- React 19
- Tailwind CSS 4
- ESLint 9
- pnpm

## Getting Started

Install dependencies:

```bash
pnpm install
```

Run the local development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

> Note: product, order, and review data comes from the [DRF backend](https://github.com/saifullahtech/RUXBUX-DRF-Backend) — run it locally alongside this app for full functionality.

## Available Scripts

```bash
pnpm dev     # Starts the Next.js development server
pnpm build   # Creates a production build
pnpm start   # Runs the production server after a successful build
pnpm lint    # Runs ESLint for the project
```

## Project Structure

```text
src/
  app/
    layout.js
    page.js
    globals.css
    about/page.js
    contact/page.js
    privacy-policy/page.js
    products/stacksmart-organizer/page.js
    refund-policy/page.js
    reviews/page.js
    shipping-info/page.js
    terms-and-conditions/page.js
  components/
    layout/
      AnnouncementBar.jsx
      AnnouncementBar.css
      Navbar.jsx
```

## Routes

- `/` — Home page
- `/products/stacksmart-organizer` — StackSmart Organizer product page
- `/about` — About page
- `/reviews` — Reviews page
- `/contact` — Contact page
- `/shipping-info` — Shipping information
- `/refund-policy` — Refund policy
- `/privacy-policy` — Privacy policy
- `/terms-and-conditions` — Terms and conditions

## Layout

The root layout in `src/app/layout.js` renders:

- `AnnouncementBar` for rotating promotional messages
- `Navbar` for desktop and mobile navigation
- The current page content through the App Router `children`

## Development Notes

- Global styles live in `src/app/globals.css`.
- App metadata is defined in `src/app/layout.js`.
- The project currently allows a local dev origin in `next.config.mjs`.
- Keep new pages inside `src/app` so they are routed automatically by Next.js.

## Deployment

Production runs on a Linux VPS:

```text
pnpm build → PM2 process (next start) → Nginx reverse proxy → HTTPS
```

---

**Developed by [Saifullah](https://saifullahtech.com)** · [GitHub](https://github.com/saifullahtech) · [LinkedIn](https://www.linkedin.com/in/saifullahtech/)
