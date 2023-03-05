/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./public/index.html",
   "./src/**/*.{vue,js,ts,html}",
   "./node_modules/tw-elements/dist/js/**/*.js"],
  theme: {
    extend: {
      fontFamily: {
       sans: ["Noto Sans", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        //brand color palette (tailwind makes classes for these)
       "brand-darkblue-0": "#0A2647",
       "brand-darkblue-1": "#144272",
       "brand-darkblue-3": "#04182B",
        "brand-teal": "#2C74B3",
        "brand-lightblue": "#28A9C9",
        "brand-cream": "#F3EFE0",
        "brand-gray": "#1E1E1E",
        "brand-black": "#222222",
        "brand-green": "#30BA91",
        "brand-red": "#BA3049",
      },
      boxShadow: {
        blue: "0 10px 30px -10px #144272"
      }
    },
  },
  plugins: [require("tw-elements/dist/plugin")],
}
