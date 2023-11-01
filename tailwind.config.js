module.exports = {
  content: ["./templates/**/*.html", "./src/main.js"],
  theme: {
    extend: {
      lineClamp: {
        7: "7",
        8: "8",
      },
    },
    container: {
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
  }
};