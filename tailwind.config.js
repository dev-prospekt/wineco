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
        'textcolor': 'rgba(67, 54, 51, 1)'
      },
      boxShadow: {
        'original-shadow': '0px 10px 40px rgba(171, 136, 68, 0.1)',
      },
      zIndex: {
        '-1': '-1',
      }
    },
  },
  plugins: [],
}
