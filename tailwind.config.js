/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./index.html",
    "./src/**/*.{html,js,jsx,ts,tsx}",],
  theme: {
    extend: {
      colors:{
        customGrey:"#4c5355",
      },
    },
  },
  plugins: [],
}

