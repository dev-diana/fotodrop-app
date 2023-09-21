/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
     fontFamily: {
      'raleway': 'Raleway, sans-serif',
      'libre': 'Libre Baskerville, serif',
    },
    extend: {
      backgroundColor: {
      "primary": "rgba(249, 242, 246, 1)",
      "secondary": "rgba(215, 143, 233, 1)"
    },
    textColor: {
      "primary": "rgba(74, 24, 86, 1)",
      "secondary": "rgba(215, 143, 233, 1)"
    }
    },
  },
  plugins: [],
}