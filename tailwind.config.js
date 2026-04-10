/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        nude: {
          50: '#fdf8f5',
          100: '#f9ede6',
          200: '#f3dbcd',
          300: '#ecc4b0',
          400: '#e2a48a',
          500: '#d48a6c',
          600: '#c2704e',
          700: '#a35a3d',
          800: '#854b33',
          900: '#6b3d2a',
        },
        pastel: {
          pink: '#fde2e4',
          peach: '#fad2e1',
          mint: '#c5e4d9',
          lavender: '#e2e2f0',
          cream: '#fff4e6',
        }
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
