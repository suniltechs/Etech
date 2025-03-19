/** @type {import('tailwindcss').Config} */
import tailwindScrollbar from "tailwind-scrollbar";
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1440px",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "1.3rem",
        md: "1.5rem",
        lg: "2rem",
        xl: "3rem",
        "2xl": "4rem",
      },
    },
    extend: {
      colors: {
        primaryColor: "#26A4FF",
        secondaryColor: "#26A4FF",
        textGrayColor: "#515B6F",
        textLightDarkColor: "#202430",
        textDarkColor: "#042940",
        cardTextGrayColor: "#7C8493",
      },
      fontFamily: {
        redHatDisplay: ["Red Hat Display", "sans-serif"],
        clashDisplay: ["Clash Display", "sans-serif"],
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(112deg, rgba(191,240,152,1) 0%, rgba(111,214,255,1) 100%)',
        'custom-gradient2': 'linear-gradient(60deg, rgba(191,240,152,1) 0%, rgba(111,214,255,1) 100%)', 
        'text-gradient': 'linear-gradient(120deg, rgba(191,240,152,1) 0%, rgba(111,214,255,1) 100%)',
      },
      borderRadius: {
        'custom': '100px',
         x1: "10px",
      },
    },
  },
  plugins: [tailwindScrollbar],
};
