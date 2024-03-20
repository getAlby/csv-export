/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#F8C455",
      },
    },
    backgroundImage: (theme) => ({
      "primary-gradient": `linear-gradient(180deg, #FFDE6E 63%, #F8C455 95%)`,
      "primary-gradient-hover": `linear-gradient(180deg, #F2D369 63%, #ECBA51 95%)`,
    })
  },
  plugins: [],
}

