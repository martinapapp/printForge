# PrintForge

![Next.js](https://img.shields.io/badge/Next.js-15-black?logo=next.js) ![React](https://img.shields.io/badge/React-19-61DAFB?logo=react) ![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript) ![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3-38BDF8?logo=tailwindcss) ![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)

A community-driven platform for discovering and sharing 3D printing STL files, built with the Next.js App Router.
*[link here](https://printforge-production-fb10.up.railway.app/)*

## Index

- [About](#about)
- [Usage](#usage)
- [Dependencies](#dependencies)
- [Development](#development)
- [Contribution](#contribution)
- [License](#license)

---

## About

PrintForge is a 3D model-sharing platform where makers can browse, search, and explore STL files organized by category. This was a study project — the TypeScript types and Tailwind CSS configuration were provided, so the main focus was on learning how Next.js works in practice. The main goal was to learn how to:

- Use the **Next.js 15 App Router** with server and client components
- Work with **file-based routing**, dynamic segments (`[id]`, `[categoryName]`), and nested layouts
- Fetch and filter data using **async server components** and `searchParams` / `params` as Promises (Next.js 15)
- Manage **shared layouts** across route groups (e.g. the sidebar layout for `/3d-models`)
- Load and optimize **Google Fonts** using `next/font/google`
- Handle **client-side interactivity** (active links, pathname detection) within a server-first app

---

## Usage

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/printforge.git
   cd printforge
   ```

2. Install Dependencies: 
#### Runtime dependencies
```bash
npm install next react react-dom react-icons
```
- **next**: App framework — routing, server components
- **react**: Core UI library
- **react-dom**: Renders React to the browser
- **react-icons**: Icon packs

#### Dev dependencies
```bash
npm install --save-dev typescript @types/node @types/react @types/react-dom tailwindcss tailwind-scrollbar-hide autoprefixer postcss url-loader eslint eslint-config-next @eslint/eslintrc
```
- **typescript**: Adds static typing to JavaScript
- **@types/node**: Type definitions for Node.js
- **@types/react**: Type definitions for React
- **@types/react-dom**: Type definitions for React DOM
- **tailwindcss**: Utility-first CSS framework
- **tailwind-scrollbar-hide**: Hides scrollbars via Tailwind utility class
- **autoprefixer**: Adds vendor prefixes to CSS automatically
- **postcss**: CSS transformer, required by Tailwind
- **url-loader**: Exposes .src property on SVG imports
- **eslint**: Linter for catching code issues
- **eslint-config-next**: ESLint rules tailored for Next.js
- **@eslint/eslintrc**: Helper for ESLint flat config format

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Commands

Here are the main scripts:

```bash
npm run dev      // Starts the dev server with hot reloading
npm run build    // Builds the app for production
npm run start    // Serves the production build locally
npm run lint     // Runs ESLint to catch code issues
```


---

## Development

### Pre-Requisites

- **Node.js** v18 or later
- **npm** v9 or later
- A code editor

### File Structure

| No | File / Folder | What it does |
|----|--------------|--------------|
| 1 | `app/layout.tsx` | Root layout — applies global fonts, CSS, and the `Navbar` to every page |
| 2 | `app/page.tsx` | Home page with hero section and call-to-action |
| 3 | `app/about/page.tsx` | About page with mission, features, and vision sections |
| 4 | `app/3d-models/layout.tsx` | Nested layout for the models section — adds the `CategoriesNav` sidebar |
| 5 | `app/3d-models/page.tsx` | Models listing page with search functionality |
| 6 | `app/3d-models/[id]/page.tsx` | Individual model detail page |
| 7 | `app/3d-models/categories/[categoryName]/page.tsx` | Models filtered by category |
| 8 | `app/components/Navbar.tsx` | Top navigation bar with logo and nav links |
| 9 | `app/components/CategoriesNav.tsx` | Sidebar/horizontal category navigation |
| 10 | `app/components/ModelCard.tsx` | Card component for displaying a single model |
| 11 | `app/components/ModelsGrid.tsx` | Grid of `ModelCard` components with a title |
| 12 | `app/components/NavLink.tsx` | Reusable nav link with active state styling |
| 13 | `app/components/Pill.tsx` | Small badge/pill for displaying category labels |
| 14 | `app/lib/models.ts` | Data-fetching functions for models (mock JSON) |
| 15 | `app/lib/categories.ts` | Data-fetching functions for categories (mock JSON) |
| 16 | `app/types/index.ts` | Shared TypeScript types for pages, components, and data |
| 17 | `app/data/models.json` | Mock database of 52 3D models |
| 18 | `app/data/categories.json` | List of 10 model categories with display names and slugs |

### Build

The app uses **Next.js server components** by default. Pages like the models listing and detail views are async server components that call the lib functions directly — no API routes needed. Client components (`"use client"`) are used only where browser APIs are required, such as `usePathname` in `Navbar` and `CategoriesNav`. Data is currently mocked from JSON files, structured so the lib functions can be swapped out for real database calls later with minimal changes.

---

## Contribution

1. **Found a bug?** Open an issue and I'll try to fix it.
2. **Advice?** If you have ideas for improving the UI, data layer, or adding new features (like user authentication or real model uploads), let me know!

### Guideline

Please keep PRs focused on a single change. Match the existing code style (TypeScript strict mode, Tailwind for styling, server components where possible). If you add a new page, make sure to add the corresponding types to `app/types/index.ts`.

---

## License

Feel free to use this for your own practice! **MIT** License.