/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}"
  ],
  theme: {
    extend: {
      fontFamily:{
        montreal: ['Neue Montreal', 'sans-serif'],
      },
      letterSpacing: {
        'custom': '0.15em',  // Add a custom letter spacing value
      },
    },
  },
  plugins: [],
}

