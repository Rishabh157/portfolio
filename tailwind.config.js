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
      backgroundColor: {
        "bg-slate-950": "rgb(2 6 23 / 1)",
      },

      screens: {
        mobile: "420px",
        tablet: "640px",
        laptop: "1024px",
        desktop: "1280px",
      },

      letterSpacing: {
        widest: "5px",
      },
    },
  },
  plugins: [],
};
