/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        freezing: "#2780B1",
        cold: "#27B16F",
        hot: "#DD8F1D",
        "very-hot": "#CE4B4B",
      },
    },
  },
  plugins: [],
};
