/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#ff4a22",
          hover: "#e03e1c",
        },
      },
    },
  },
  plugins: [],
};
