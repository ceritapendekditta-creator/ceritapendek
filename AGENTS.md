# AGENTS.md

This document provides a comprehensive overview of the Cerpen Lyona website architecture, files, coding standards, and deployment configurations.

## Project Overview

A beautiful, minimalist, and responsive website built for Ditta Lyona to showcase and update her short stories (cerpen). It features a calm turquoise palette, a highly customized interactive overlay navigation system, robust content protection features, and a fully-integrated Git CMS (Decap CMS) backend.

### Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | TanStack Start (React 19 + TanStack Router) |
| Styling | Tailwind CSS v4 + Custom `@theme` color system |
| Language | TypeScript |
| CMS | Decap CMS (loaded via static public route, using Netlify Identity & Git Gateway) |
| Content Compiler | Content Collections (processes markdown files in `content/posts/` safely) |
| Build Tool | Vite 7 |
| Deployment | Netlify |

## Directory Structure

```
├── content
│   └── posts
│       └── blog-entry-1.md # An initial default markdown post
├── public
│   ├── admin
│   │   ├── index.html       # Decap CMS loader page
│   │   └── config.yml       # Decap CMS collections and Git Gateway config
│   ├── favicon.ico
│   ├── og-image.png         # Open Graph share image logo
│   └── placeholder.png      # Cover image fallback
├── src
│   ├── components
│   │   └── blog-posts.tsx   # Elegant, turquoise card listing of short stories (Koleksi Cerpen)
│   ├── routes
│   │   ├── __root.tsx       # Core root layout, containing the global Turquoise Header, Hamburger overlay, and Footer
│   │   ├── about.tsx        # "Tentang Web" page featuring Ditta Lyona's biography
│   │   ├── contact.tsx      # "Contact Us" page featuring social links
│   │   ├── index.tsx        # Homepage, routing to Koleksi Cerpen
│   │   ├── category.$category.tsx # Category filtration layout
│   │   └── posts.$slug.tsx  # Post reader layout, containing the custom dual CSS+JS Anti-Copy features
│   ├── lib
│   │   └── utils.ts         # CN utility class
│   ├── router.tsx           # TanStack router loader
│   └── styles.css           # Global CSS variables, custom font integration, and premium hover effects
├── content-collections.ts    # Defines short story Zod schema and transforms for markdown data
├── netlify.toml             # Configuration for building and publishing on Netlify
├── package.json             # Manifest containing scripts, Lucide, and framework dependencies
└── tsconfig.json            # TypeScript configuration
```

## Core Features & Mechanisms

### 1. File-Based Routing (TanStack Router)
- Routes are statically analyzed and generated from the `/src/routes/` directory.
- `__root.tsx` defines the shell surrounding all pages, incorporating a custom `isMenuOpen` React state that displays a full-screen blurred navigation drawer with sophisticated growing-underline hover effects.

### 2. Decap CMS Setup (`/public/admin/`)
- Integrates Git Gateway with Netlify Identity.
- The `config.yml` targets the `master` branch and writes back entries directly into `content/posts/` with fields: `title`, `summary`, `date` (auto-populated today), `categories` (as array list), `image` (sampul cerpen), and `body` (contents).
- Netlify Identity has been programmatically activated on the platform using the netlify-identity skill hooks.

### 3. Dual-Layer Anti-Copy Protection
- Located inside `/src/routes/posts.$slug.tsx`.
- **CSS-Layer:** Applies `user-select: none` via the custom `.anti-copy` class inside `styles.css`.
- **JS-Layer:** Hooks onto parent container events:
  - Blocks `copy` and `cut` events.
  - Blocks right-click context menus (`contextmenu`).
  - Blocks content dragging (`dragstart`).
  - Blocks keyboard shortcut triggers like `Ctrl+C`, `Ctrl+A`, `Ctrl+U`, `Ctrl+S`, `F12`, `Ctrl+Shift+I`, `Ctrl+Shift+J` via a global keydown event listener.
- **Visual Toast Feedback:** Triggers a 2.5-second modern bottom-floating toast notifying readers of content protection when copying or printing shortcuts are attempted.

### 4. Custom Open Graph & Fonts
- Defined in the `head` configuration within `__root.tsx`.
- References `/og-image.png` for all social share events.
- Imports and applies the elegant `Plus Jakarta Sans` Google Font.

## Coding Conventions

- **Coloring:** Always prefer using custom Tailwind v4 theme variables like `text-toska-600`, `bg-toska-50`, `border-toska-100`, etc., for color styling to keep design elements consistent.
- **Lucide Icons:** Use `lucide-react` for any icon requirements (already configured with standard sizes, typically `size={18}` or `size={24}`).
- **Strict Mode:** Maintain clean typing. Ensure any newly uploaded fields are supported inside `content-collections.ts`.
