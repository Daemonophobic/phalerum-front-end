const withMT = require("@material-tailwind/react/utils/withMT");

export default withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        defaultBackground: "#F9F9F9",
        currentPage: "#EAEAEA",
      },
      height: {
        '26': '104px',
      },
      fontFamily: {
        "inter": ['Inter', 'sans-serif']
      }
    },
  },
  plugins: [],
});