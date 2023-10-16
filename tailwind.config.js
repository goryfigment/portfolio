/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  darkMode: 'class',
  theme: {
    screens: {
      xs: "376px",
      sm: "500px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    letterSpacing: {
      tightest: "-0.5em"
    },
    extend: {
      colors: {
        primary: '#f8f8f8',
        dim: {
          50: "#fafafa",
          100: "#f5f5f5",
          200: "#e5e5e5",
          300: "#d4d4d4",
          400: "#a3a3a3",
          500: "#737373",
          600: "#525252",
          700: "#404040",
          800: "#262626",
          900: "#171717",
          950: "#0c0a09",
        },
      },
      fontFamily: {
        sans: ['Karla', 'Arial', 'Helvetica', 'sans-serif', 'Georgia', 'serif'],
        raj: ['Rajdhani', 'Arial', 'Helvetica', 'sans-serif', 'Georgia', 'serif'],
        roboto: ['Roboto', 'Arial', 'Helvetica', 'sans-serif', 'Georgia', 'serif'],
      },
      animation: {
        glow: 'glow 1s ease-in-out infinite alternate',
        disco: 'disco 2s ease-in-out infinite',
        blink: 'blink 4.2s infinite'
      },
      keyframes: {
        glow: {
          '0%': { 'text-shadow': '0 0 2px #fff, 0 0 4px #fff, 0 0 6px #415ce3, 0 0 8px #415ce3, 0 0 10px #415ce3, 0 0 12px #415ce3, 0 0 14px #415ce3' },
          '100%': { 'text-shadow': '0 0 6px #fff, 0 0 8px #4de6ff, 0 0 10px #4de6ff, 0 0 12px #4de6ff, 0 0 14px #4de6ff, 0 0 16px #4de6ff, 0 0 18px #4de6ff' },
        },
        disco: {
          '20%, 24%, 55%': {
            color: '#111',
            'text-shadow': 'none'
          },
          '0%, 19%, 21%, 23%, 25%, 54%, 56%, 100%': {
            color: '#fff6a9',
            'text-shadow': '0 0 5px #ffa500, 0 0 9px #ffa500, 0 0 17px #ffa500, 0 0 1px #ffa500, 0 0 6px #ff0000, 0 0 10px #ff8d00, 0 0 11px #ff0000'
          }
        },
        blink: {
          '0%': {color: '#f8f8f8'},
          '49%': {color: '#f8f8f8'},
          '60%': {color: 'transparent'},
          '85%': {color: '#f8f8f8'},
          '100%': {color: '#f8f8f8'}
        }
      }
    },
  },
  plugins: [],
}

