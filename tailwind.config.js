/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-blue": "#25274F",
        "secondary-blue": "#06283D",
        "background-blue": "#0F1520",
        "darker-blue": "#10162F",
        "background-blue-darker": "#0b1114",
        dark: "#141414",
        "hero-blue": "#0F1520",
        "accent-blue": "#4DAAE8",
      },
      fontFamily: {
        "space-grotesk": ["Space Grotesk", "sans-serif"],
        manrope: "Manrope, sans-serif",
      },
      fontSize: {
        "10xl": "14rem",
      },
      lineHeight: {
        squish: "0.8",
      },
      typography: {
        DEFAULT: {
          css: {
            img: {
              width: "100% !important",
            },
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
