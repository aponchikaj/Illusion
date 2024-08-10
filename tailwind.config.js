const { transform } = require('typescript');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      fontFamily:{
        ALK:'ALK',
        K2D:'k2d',
        geo:'geo',
        glaho:'glaho'
      },
      animation:{
        'loopScroll': 'scrolling 10s linear infinite'
      },
      keyframes:{
        'scrolling':{
          from: {transform: "translateX(0)"},
          to: {transform: "translateX(-100%)"}
        }
      }
    },
  },
  plugins: [],
}