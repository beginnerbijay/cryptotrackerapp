/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    screens: {
      's': {'min': '320px', 'max': '410px'},
      'sml': {'min': '411px','max': '479px'},
      'sma': {'max': '639px'},
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

  }},
  plugins: [],
}
