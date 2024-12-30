/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        primary: {
          50: "#E6F0F1",
          100: "#B0D2D5",
          200: "#8ABCC0",
          300: "#549DA4",
          400: "#338A92",
          500: "#006D77",
          600: "#00636C",
          700: "#004D54",
          800: "#003C41",
          900: "#002E32",
        },
        secondary: {
          50: "#F3F9F9",
          100: "#D9EDEB",
          200: "#C6E4E1",
          300: "#ACD8D3",
          400: "#9CD1CB",
          500: "#83C5BE",
          600: "#77B3AD",
          700: "#5D8C87",
          800: "#486C69",
          900: "#375350",
        },
        custom: {
          facebookColor: "#3C5A9A",
          appleBg: "#212121",
        },
      },
      backgroundImage: {
        "gradient-1":
          "linear-gradient(to right, #006D77 0%, #9CD1CB 80%, #F3F9F9 100%)",
      },
    },
  },
  plugins: [],
};
