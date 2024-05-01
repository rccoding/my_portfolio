/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#050816",
        secondary: "#aaa6c3",
        tertiary: "#151030",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
        md:'750px'
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')",
      },
      keyframes: {
        typewriter: {
          'from': { width: '0' },
          'to': { width: '100%' }
        },
        blinkCursor: {
          'from, to': { borderColor: 'transparent' },
          '50%': { borderColor: 'black' }
        }
      },
      animation: {
        typewriter: 'typewriter 4s steps(40, end) 1s 1 normal both',
        blinkCursor: 'blinkCursor 500ms steps(40) infinite'
      },
    },
  },
  plugins: [],
};
