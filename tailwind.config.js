/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'mountain-pattern': "url('./images/main-image.png')",
        'la-text': "url('//LA.png')",
      }
    },
  },
  plugins: [],
}