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
          DEFAULT: '#13A0CC',
          dark: '#0E7A9C',
          light: '#E0F4FA',
        },
        secondary: {
          DEFAULT: '#F7A334',
          hover: '#D98923',
        },
        text: {
          DEFAULT: '#333333',
          light: '#666666',
        },
        background: '#FFFFFF',
      },
      fontFamily: {
        sans: ['"Hiragino Kaku Gothic ProN"', '"Noto Sans JP"', 'YuGothic', '"Yu Gothic"', 'Meiryo', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
