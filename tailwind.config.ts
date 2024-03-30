/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/*.{js,vue,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      colors: {
        'dark-blue': '#212435',
        'green-shamrock': ' #0BD88F',
        'peacot': '#2B2F44',
        'pink-watermelon': '#FF497580',
        'purple-eletric': '#4F08E680',
        'grey-rhythm': '#737B98',
        'blue-eletric': '#01F0FD',
        'blue-aqua': '#00F0FF',
        'lime': '#0CD890',
      },
      fontFamily: {
        'rubik': ['Rubik', 'sans-serif'],
        'rubic-italic': ['Rubik-Italic', 'sans-serif'],
      },
      lineHeight: {
        '11': '1.185',
      }
    },
  },
  plugins: [],
}