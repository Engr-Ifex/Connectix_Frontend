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
      },
      boxShadow: {
        'thumbShadow': '0px 4px 8px 0px rgba(0, 0, 0, 0.08)',
        'detailBoxShadow': '0px 5.473px 43.784px 0px rgba(0, 0, 0, 0.05)',
        'menuShadow': '0px -1px 0px 0px rgba(0, 0, 0, 0.05)'
      },
    },
    fontFamily: {
      general: ['Inter', 'sans-serif']
    },
  },
  plugins: [],
}

