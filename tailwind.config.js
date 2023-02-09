/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors:{
        gris:'#808080',
        noir:'#191919',
        primary:'#a5334a',
      },
    },

    fontFamily: {
      voyage: ['voyage','sans-serif'],
      staff: ['staff','sans-serif'],
    },
  },
  plugins: [],
}
