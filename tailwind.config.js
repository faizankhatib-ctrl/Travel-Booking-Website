/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        teal: { DEFAULT: "#0F3D3E", light: "#175C5D" },
        sand: "#F5EFE6",
        coral: { DEFAULT: "#E8734A", dark: "#D0602F" },
        ink: "#1B1B1B",
        sage: "#B8C9BE",
      },
      fontFamily: {
        display: ["Fraunces", "serif"],
        body: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
