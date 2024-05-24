/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#9400D3',
          DEFAULT: '#A855F7',
          dark: '#460064'
        },
        secondary: {
          light: '#FFBD07',
          DEFAULT: '#EABF4B',
          dark: '#D29A01'
        }
      }
    },
  },
  plugins: [],
}

