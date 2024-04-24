export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        defaultBackground: "#F9F9F9",
        darkBackground: "#1F1E24",
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
}