/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors:{
        gris:'#808080',
        noir:'#191919',
        primary:'#FA2B43',
      },
      
      backgroundImage : {
        'fond' : "url('/public/images/lines.svg')",
      },

      cursor: {
        'custom': 'url(/public/images/Cursor.svg), auto',
        'plus': 'url(/public/images/Plus.svg), pointer',
      }
    },

    fontFamily: {
      macaroni: ['macaroni','sans-serif'],
      inter: ['inter','sans-serif'],
    },
  },
  plugins: [],
}
