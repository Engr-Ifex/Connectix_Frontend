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
        'secondary': '#F7D685',
      },
      boxShadow: {
        'thumbShadow': '0px 4px 8px 0px rgba(0, 0, 0, 0.08)',
        'detailBoxShadow': '0px 5.473px 43.784px 0px rgba(0, 0, 0, 0.05)',
        'menuShadow': '0px -1px 0px 0px rgba(0, 0, 0, 0.05)',
        'dropShadow' : '0px 4px 20px 0px rgba(0, 0, 0, 0.1)',
      },
      backgroundImage: {
        'logInBg': "url('https://gateway.pinata.cloud/ipfs/Qmf3nMSA4jbP5dDdo6GVLBmqcHGG3PJ9gYdaY7ekusYDBb')",
        'logo': "url('/Group 294.svg')",
        'logoLetter': "url('https://gateway.pinata.cloud/ipfs/QmP7oLxQ18PNstLN4kpHCqfEWucZy85H3RjazfPL8f9xaC')",
        'event1': "url('https://gateway.pinata.cloud/ipfs/Qmak2bMKv6ZhYY2yZ2QsqYYeJxogEDVZDsgXUj2P63ftS4')",
        'posting': "url('https://gateway.pinata.cloud/ipfs/Qmd9hGfmGhwB1vcue32mdLLjpfbJC5SXJajHue6CiocK6N')",
        'profile': "url('https://gateway.pinata.cloud/ipfs/QmZh41dyiWA5NniYctsGYGjanZPxMcB8oGjbgKiwNe4az6')",
        'facial': "url('https://gateway.pinata.cloud/ipfs/QmdDkiU5VCHtugD4Bx2LvBbTTrKY97J665djf98RpZSxdH')",
      },
      fontSize: {
        '6xl': ["60px", "1opx"],
      },

    },
    fontFamily: {
      general: ['Inter', 'sans-serif']
    },
  },
  plugins: [],
}

