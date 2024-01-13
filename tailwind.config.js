/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily:{sans:"Roboto Mono,monospace"},
    extend: {
      colors:{
        pizza: "#cea132",
      },
      height: {
        screen : '100dvh'
      },
      fontize: {
       fontSize: { huge: ["80rem", {lineHeight: '1'}],}
      }
    },
  },
  plugins: [],
}

