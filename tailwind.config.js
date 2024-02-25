/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryblue: "#5e3bee",
        secondarylight: "#F5FCFF",
      },
    },
  },
  plugins: [],
};
