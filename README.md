# Quickened Creations

A premium creative agency website dedicated to high-end video editing, mobile video studio, music production, and modern digital experiences. Inspired by "Pneuma" (Greek for breath/spirit), this platform showcases our expertise in cinematic storytelling, sonic architecture, and digital precision.

## Project Overview

This is a client-facing website built with SvelteKit, featuring a modern, responsive design that highlights our portfolio, services, and creative process. The site emphasizes minimalist elegance, smooth animations, and a focus on user experience to reflect our brand's commitment to excellence.

### Key features include

- Responsive navigation with mobile menu
- Hero section with call-to-action buttons
- Services showcase with interactive hover effects
- Portfolio gallery with image overlays
- Testimonials section
- Contact/CTA section
- Footer with social links

## Tech Stack

- **Framework**: SvelteKit 2.55.0
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4.2.2 with custom theme
- **Icons**: Material Symbols Outlined, Lucide Svelte
- **Build Tool**: Vite 7.3.1
- **Deployment**: Vercel (via @sveltejs/adapter-vercel)
- **Analytics**: @vercel/analytics
- **Linting**: ESLint with Svelte plugin
- **Formatting**: Prettier with Svelte and Tailwind plugins
- **Package Manager**: pnpm

## Folder Structure

```.
├── .github/
│ └── workflows/
│ └── ci.yml
├── .svelte-kit/
├── src/
│ ├── app.d.ts
│ ├── app.html
│ ├── lib/
│ │ ├── assets/
│ │ ├── components/
│ │ │ ├── cta.svelte
│ │ │ ├── footer.svelte
│ │ │ ├── hero.svelte
│ │ │ ├── nav.svelte
│ │ │ ├── portfolio.svelte
│ │ │ ├── service.svelte
│ │ │ └── testimonial.svelte
│ │ └── index.ts
│ ├── routes/
│ │ ├── +layout.svelte
│ │ ├── +layout.ts
│ │ └── +page.svelte
│ └── layout.css
├── static/
├── .gitignore
├── .prettierrc
├── eslint.config.js
├── package.json
├── pnpm-lock.yaml
├── README.md
├── svelte.config.js
├── tailwind.config.ts
├── tsconfig.json
└── vite.config.ts
```

##  How to Run Locally

### Prerequisites

- Node.js (version 18.18.0 or higher)
- pnpm (used) or npm (recommended)

### Installation

```bash
Clone the repository

git clone <https://github.com/techie084/Quickend-Creation>

cd quick-end-creations

Install dependencies:
pnpm install

Start the development server:
pnpm run dev

Open your browser to <http://localhost:5173>

## Available Scripts
pnpm run dev - Start development server
pnpm run build - Build for production
pnpm run preview - Preview production build
pnpm run check - Run TypeScript and Svelte checks
pnpm run lint - Run ESLint and Prettier checks
pnpm run format - Format code with Prettier

## Deployment
This project is configured for deployment on Vercel using the SvelteKit Vercel adapter.

## Automatic Deployment
The project includes a GitHub Actions workflow (.github/workflows/ci.yml) that can build and deploy on pushes to main branches.

License
© 2026 Quickened Creations. All rights reserved.
```
