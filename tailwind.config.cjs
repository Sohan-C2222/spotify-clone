/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        gray: "#535353",
        green: "#1db954",
        "black-base": "#121212",
        "black-primary": "#191414",
        "black-secondary": "#171818",
        "light-black": "#282828",
        primary: "#ffffff",
        secondary: "#b3b3b3",
      },
      gridTemplateColumns: {
        "auto-fill-cards": "repeat(auto-fill,minmax(150px,0.75fr))",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
