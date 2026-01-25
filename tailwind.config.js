/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#333333', // Dark gray for text
        secondary: '#f5f5f5', // Light gray for backgrounds
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Sophisticated font
      }
    },
  },
  plugins: [],
}
