/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#41b0bf",
        secondary: "#009ca8",
        "light-dark": "#3a3a3a",
      },
      letterSpacing: {
        widest: "5px",
      },
    },
  },
  plugins: [],
};
