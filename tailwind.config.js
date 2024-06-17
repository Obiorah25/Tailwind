/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        xs: "576px",
        sm: "578px",
        md: "768",
        lg: "992",
        xl: "1200",
        xxl: "1400"
      }
    },
  },
  plugins: [],
}

