/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      black: "#000000",
      white: "#ffffff",
      pomodoro: "#BA4949",
      shortbreak: "#38858A",
      longbreak: "#397097",
      slate: {
        50: "#f8fafc",
        950: "#020617",
      },
    },
    extend: {},
  },
  plugins: [],
};
