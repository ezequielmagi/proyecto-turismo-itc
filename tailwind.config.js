/** @type {import('tailwindcss').Config} **/
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {

      colors: {
        'red-travel':'#CC2D4A',
        'green-travel':'#8FA206',
        'blue-travel':'#61AEC9',
        'gray-travel':'#faf9f9',
        'dark-gray-travel':'#d3d3d3'
      },

      textColor:{
        'red-travel':'#CC2D4A',
        'green-trabe':'#8FA206',
        'blue':'#61AEC9'
      },

      backgroundImage: {
        'iguazu':'url(https://i.postimg.cc/wMf9bKLW/Any-Conv-com-puerto-iguazu.webp)',
        'isla':'url(https://i.postimg.cc/9MBmZwMH/Any-Conv-com-isla92.webp)',
        'cafayate':'url(https://i.postimg.cc/W1Q1vPKC/Any-Conv-com-cafayate.webp)',
        'calafate':'url(https://i.postimg.cc/C10MRsw-4/Any-Conv-com-calafate.webp)',
        'bariloche':'url(https://i.postimg.cc/BZgb1kLP/Any-Conv-com-800x500px-Bariloche2-A.webp)',
        'mendoza':'url(https://i.postimg.cc/WpXp4ZCM/Any-Conv-com-mendoza.webp)',
        'cordoba':'url(https://i.postimg.cc/N0mfGzvM/Any-Conv-com-cordob.webp)',
        'madryn':'url(https://i.postimg.cc/JzyzvhTj/Any-Conv-com-madry.webp)',
        'chocon':'url(https://i.postimg.cc/wM0B8R8Q/Any-Conv-com-chocon-WEB-770x513.webp)'
      },

      spacing: {
        'width-card-rec':'154px',
        'height-card-rec':'215px',
        'height-card-full':'402px',
        'width-card-full':'334px',
        'height-header':'73px',
        'wheader-title-tablet':'550px',
        'height-cafayate-tb':'830px',
        'height-caf2-tb':'403px'
      },

      fontFamily: {
        Montserrat: [ 'Montserrat', 'sans-serif' ]
      },

      screens:{
        'min-laptop':'880px'
      },

      gridAutoRows:{
        'row-3':'minmax(0,0.5fr)'
      }

    },
  },
  plugins: [],
}

