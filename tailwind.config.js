/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
theme: {
    extend: {
      colors: {
        mint: {
          DEFAULT: "#94D6C1", // pastel mint
          dark: "#73a897ff",
        },
        charcoal: "#2E2E2E", // new charcoal grey
      },
    },
  },
  plugins: [],
}
