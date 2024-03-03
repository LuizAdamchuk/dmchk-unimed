/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        "roboto-slab": ['"Roboto Slab"', "serif"],
        "source-sans-pro": ['"Source Sans Pro"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
