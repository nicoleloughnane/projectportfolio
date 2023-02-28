/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./public/index.html", "./src/**/*.{vue,js,ts}"],
  theme: {
    extend: {
      fontFamily: {
       sans: ["Noto Sans", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        //brand color palette (tailwind makes classes for these)
        "brand-darkpurple": "#775DAB",
        "brand-darkpurple-2": "#270041",
        "brand-lightpurple": "#EDD2FF",
        "brand-lightpink": "#FFE6FF",
        
        "brand-cream": "#F3EFE0",
        "brand-gray": "#1E1E1E",
        "brand-black": "#222222",
        "brand-green": "#30BA91",
        "brand-red": "#BA3049",
      },
    },
  },
  plugins: [],
}
