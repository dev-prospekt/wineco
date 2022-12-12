/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      butlerregular: ["butler-regular", "sans-serif"],
      avenirmedium: ["avenir-medium", "sans-serif"],
    },
    extend: {
      colors: {
        'original': '#ab8844',
      },
    },
  },
  plugins: [],
}
