/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        "spin-slow": "spin 3s linear infinite",
        "spin-slower": "spin 10s linear infinite",
      },
      fontFamily: {
        chopin: ["chopin", "sans-serif"],
      },
    },
  },
  plugins: [],
};
