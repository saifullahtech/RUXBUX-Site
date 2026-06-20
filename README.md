# RUXBUX Frontend

RUXBUX is a Next.js storefront frontend for the RUXBUX ecommerce brand. The app uses the Next.js App Router, React, and Tailwind CSS, with shared layout components for the announcement bar and navigation.

## Tech Stack

- Next.js 16
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

## Available Scripts

```bash
pnpm dev
```

Starts the Next.js development server.

```bash
pnpm build
```

Creates a production build.

```bash
pnpm start
```

Runs the production server after a successful build.

```bash
pnpm lint
```

Runs ESLint for the project.

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

- `/` - Home page
- `/products/stacksmart-organizer` - StackSmart Organizer product page
- `/about` - About page
- `/reviews` - Reviews page
- `/contact` - Contact page
- `/shipping-info` - Shipping information
- `/refund-policy` - Refund policy
- `/privacy-policy` - Privacy policy
- `/terms-and-conditions` - Terms and conditions

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
