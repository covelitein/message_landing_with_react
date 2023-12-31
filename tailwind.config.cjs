/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        mf: '900px',
        sd: '400px',
        ds: '578px',
      },
    },
  },
  plugins: [],
}
