/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      primaryColor: "#FFAA4D",
      secondaryColor: "#6762F0",
      lightColor: "#FFFFFF",
      accentColor: "#AEAEAE",
      darkColor: "#000000",
      lightShade: "#FFF6E2",
    },
    extend: {
      fontFamily: {
        heading: ["Poppins"],
        subHeading: ["Poppins"],
        text: ["Montserrat"],
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
  plugins: [require("@tailwindcss/forms")],
};
