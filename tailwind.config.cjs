/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    screens: {
      'sml': {'max': '479px'},
      'sma': {'max': '639px'},
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

  }},
  plugins: [],
}
