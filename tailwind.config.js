/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.html"],
  theme: {
    extend: {
      backgroundImage:{
        'gradient-radial' : 'radial-gradient(var(--tw-gradient-stops))',
        'black-overlay' : 'linear-gradient(var(--tw-gradient-stops))'
      }
    },
  },
  plugins: [],
}

