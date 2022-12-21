/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        grayText: "#111827",
        lightGrayText: "#6D7280",
      },
    },
  },
  plugins: [],
};
