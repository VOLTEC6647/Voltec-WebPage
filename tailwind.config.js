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
        "background-blue": "#141F25",
        "darker-blue": "#10162F",
        "background-blue-darker": "#0b1114",
        "dark": "#141414"
      },
      fontFamily: {
        "space-grotesk": ["Space Grotesk", "sans-serif"],
        manrope: "Manrope, sans-serif",
      },
      fontSize: {
        "10xl": "11rem",
      },
    },
  },
  plugins: [],
};
