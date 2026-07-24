/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0B1F3A",
        accent: "#D4A24C",
        neutral: "#F8F7F4",
      },
    },
  },
  plugins: [],
}
