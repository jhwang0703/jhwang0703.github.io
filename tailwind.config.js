/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      screens:{
        "sm": "480px"
      }
    },
    colors:{

    },
    fontFamily:{
      nunito:['Nunito', 'sans-serif'],
      avenir:['Avenir', 'sans-serif'],
    },
    // fontSize: {
    //   'xs': '.75rem',
    //   'xl': '1.5 rem',
    // }
  },
  plugins: [],
}

