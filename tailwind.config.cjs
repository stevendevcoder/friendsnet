/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        palpitar: {
          '0%, 100%': { transform: 'scale(1.08)' },
          '50%': { transform: 'scale(1.04)' }
        }
      },
      animation: {
        palpitar: 'palpitar 1.5s ease-in-out infinite'
      }
    },
  },
  plugins: [],  
}
