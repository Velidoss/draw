/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        blue: '#4059AD',
        ligthBlue: '#6B9AC4',
        blueGreen: '#97D8C4',
        cultured: '#EFF2F1',
        iris: '#4C4CCB',
        ivory: '#FAF9EB',
        orange: '#F4B942',
      }
    },
  },
  plugins: [],
}
