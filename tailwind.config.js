/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {

      backgroundImage: {
        'iguazu': "url('./src/img/puerto_iguazu.jpeg')"
      },

      backgroundColor: theme => ({
        ...theme('colors'),
        'rojo-itc': '#CC2D4A',
        'verde-itc': '#8FA206',
        'azul-itc': '#61AEC9'
      }),
      textColor: {
        'rojo-itc': '#CC2D4A',
        'verde-itc': '#8FA206',
        'azul-itc': '#61AEC9'
      }
    },
    fontFamily: {
      Montserrat: [ 'Montserrat', 'sans-serif' ]
    }
  },
  plugins: [],
}

