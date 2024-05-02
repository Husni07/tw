/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.{html,js}'],
  theme: {
    extend: {
      fontFamily: {
        'Comic':'Comic Neue'
      },
      colors:{
        'ungu':'#fb16ba',
        'merah':'#e80505',
        'abu':'#161313'
      }
    },
  },
  darkMode: 'class',
  plugins: [],
};
