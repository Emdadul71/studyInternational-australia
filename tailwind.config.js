/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./modules/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "480px",
        "2lg": "1025px",
      },
      colors: {
        primary: "#002f5b",
        secondary: "#ffe835",
        secondarylight: "#fefbf0",
        bluelight: "#f4fbff",
        body: "#3d3d3d",
        paragraph: "#2b2a29",
        black: "#111111",
        white: "#ffffff",
        grey: "#3a3a3a;",
        greylight: "#eeeeee",
        danger: "#ff5a5a;",
        hoverone: "#ffe835",
        hovertwo: "#002f5b",
      },
    },
  },
  plugins: [],
};
