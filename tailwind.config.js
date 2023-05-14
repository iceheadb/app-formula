/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js, jsx, ts, tsx}",
    "my-app/**/*.{js, jsx, ts, tsx}"
  ],
  theme: {
    extend: {
      colors: {
        background: "#16357a",
      }
    },
  },
  plugins: [],
}

