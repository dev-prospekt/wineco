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
      maxWidth: {
        '17rem': '17rem',
      },
      colors: {
        'original': '#ab8844',
        'siva': '#767676',
        'textcolor': 'rgba(67, 54, 51, 1)'
      },
      boxShadow: {
        'original-shadow': '0px 10px 40px rgba(171, 136, 68, 0.1)',
      },
      zIndex: {
        '-1': '-1',
      },
      spacing: {
        '475': '600px',
        '0.1': '0.1rem',
        '0.2': '0.2rem',
      }
    },
  },
  plugins: [],
}
