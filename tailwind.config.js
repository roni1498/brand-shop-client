/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width: {
        'max-content': 'max-content'
      },
      fontFamily: {
        poppins: "'Poppins', sans-serif"
      }
    },
  },
  plugins: [require("daisyui")],

  daisyui: {
    themes: ["cupcake"],
  }
}

