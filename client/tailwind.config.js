/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'grayBord': 'rgba(0,0,0,0.3)',
        'greenBlue': '#00283A',
        'greenLogo': '#7CFFB8',
        'yellowLogo': '#DBEC4D',
      }
    },
    fontFamily: {
      general: ['Inter', 'sans-serif']
    },
  },
  plugins: [],
}

