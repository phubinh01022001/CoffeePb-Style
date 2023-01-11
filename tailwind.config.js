/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        'xs': '480px'
      },
      fontFamily: {
        Lora: ['Lora', 'serif']
      },
      colors:{
        'pbinh-coffee': {
          100: '#b79b78',
          200: '#F4A460',
          500: '#cd7405'
        }
      },
      keyframes: {
        slideDown: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(0)' },
        }
      },
      animation: {
        slideDown: 'slideDown 0.5s ease-in-out',
      },
       backgroundImage: {
        'slide-bg': 'url("./img/coffee-bg.jpg")'
       }
    },
  },
  plugins: [],
}
