module.exports = {
  purge: ["./src/**/*.html", "./src/**/*.js"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        // Light Theme
        customLightGray: "hsl(0, 0%, 98%)",
        customVeryLightGrayishBlue: "hsl(236, 33%, 92%)",
        customLightGrayishBlue: "hsl(233, 11%, 84%)",
        customDarkGrayishBlue: "hsl(236, 9%, 61%)",
        customVeryDarkGrayishBlue: "hsl(235, 19%, 35%)",

        // Dark Theme
        darkVeryDarkBlue: "hsl(235, 21%, 11%)",
        darkVeryDarkDesaturatedBlue: "hsl(235, 24%, 19%)",
        darkLightGrayishBlue: "hsl(234, 39%, 85%)",
        darkLightGrayishBlueHover: "hsl(236, 33%, 92%)",
        darkDarkGrayishBlue: "hsl(234, 11%, 52%)",
        darkVeryDarkGrayishBlue: "hsl(233, 14%, 35%)",
        darkVeryDarkGrayishBlueHover: "hsl(237, 14%, 26%)",
      },
      fontFamily: {
        josefin: ['"Josefin Sans"', "sans-serif"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
