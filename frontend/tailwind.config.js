module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "gray-900": "#2D2D2D",
      },
      display: ["group-hover"],
    },
    fontFamily: {
      sans: ["Avenir Next", "sans-serif"],
      gothic: ["Centry gothic", "sans-serif"],
    },
    container: {
      padding: {
        DEFAULT: "2rem",
        sm: "2rem",
        lg: "4rem",
        xl: "6rem",
        "2xl": "9rem",
      },
    },
  },
  plugins: [],
};
