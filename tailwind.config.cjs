/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        'cursive': ['Dancing Script', 'Pacifico', 'Playfair Display', 'cursive'],
        'cursive-name': ['Dancing Script', 'cursive'],
        'serif-italic': ['Playfair Display', 'serif'],
      },
      colors: {
        brown: {
          50: '#faf6f0',
          100: '#f5e6d3',
          200: '#e8cdab',
          300: '#dcb483',
          400: '#d09b5b',
          500: '#b87d3e',
          600: '#936432',
          700: '#6e4b25',
          800: '#493219',
          900: '#24190c',
        },
        amber: {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
        },
        blue: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
        babyblue: {
          50: '#f0f8ff',
          100: '#e0f4ff',
          200: '#b8e4ff',
          300: '#90d4ff',
          400: '#68c4ff',
          500: '#40b4ff',
          600: '#2098e0',
          700: '#1078b8',
          800: '#085890',
          900: '#043868',
        },
        lightbrown: {
          50: '#fdf8f5',
          100: '#faf0e8',
          200: '#f5e0d0',
          300: '#f0d0b8',
          400: '#ebc0a0',
          500: '#e0a86c',
          600: '#d49048',
          700: '#c07830',
          800: '#a06020',
          900: '#804818',
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