/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
          'dark-primary': '#181818',
          'dark-secondary': '#282828',
          'dark-tertiary': '#383838',
          'dark-text': '#ffffff',
      },
    },
  },
  plugins: [],
}