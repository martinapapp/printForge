/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  // tailwind-scrollbar-hide plugin (used in CategoriesNav.tsx)
  plugins: [
    require("tailwind-scrollbar-hide")
  ],
  theme: {
    extend: {
      colors: {
        "orange-accent": "#F77D36"
      }
    }
  }
}