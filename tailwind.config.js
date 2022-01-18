module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        corporate: ["Corporate A", "serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
