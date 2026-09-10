/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          neutral: '#E6E2DD',  // Key Neutral
          light: '#F5F3F0',    // Light Cream
          gold: '#B38051',     // Warm Caramel Accent
          olive: '#4D4831',    // Deep Sage / Olive (Image 2 style)
          dark: '#211D1C',     // Espresso Charcoal
        }
      }
    },
  },
  plugins: [],
}