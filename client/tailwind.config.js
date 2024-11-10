/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Poppins: ['Poppins', 'sans-serif']
      },
      colors: {
        primary: {
          '500': '#006D77'
        },
        secondary: {
          '500': '#83C5BE'
        },
        custom: {
          'facebookColor': '#3C5A9A',
        }
      },
      backgroundImage: {
        'gradient-1': 'linear-gradient(to right, #006D77 0%, #9CD1CB 80%, #F3F9F9 100%)',
      }
    },
  },
  plugins: [],
}

