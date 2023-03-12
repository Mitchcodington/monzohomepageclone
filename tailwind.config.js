/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#00040f",
        secondary: "#00f6ff",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        dimBlue: "rgba(9, 151, 124, 0.1)",
        iceCold:"rgba(187,246,226,255)",
        lightpink:"#ffd7f0",
        darkRed:"#e84240",
        lightyellow:"#fcf7e4",
        lightpop:"#f8eefb",
        greenpop:"#e3feed",
        popin:"#bbf6e2",
        prime:"#f2f8f3",
        zIndex:"'100': '100'",
        join:"#f2f8f3"
        
        
      },
      spacing: {
        '0px': '0px'},
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      zIndex: {
        '100': '100',
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};