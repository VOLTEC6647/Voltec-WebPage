/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-blue": "#25274F"
      },
      fontFamily: {
        "space-grotesk": ["Space Grotesk", "sans-serif"]
      },
      fontSize: {
        "10xl": "11rem"
      },
    },
  },
  plugins: [],
};
