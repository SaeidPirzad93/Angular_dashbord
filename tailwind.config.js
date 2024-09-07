/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
     "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      container:{
        "center":true ,
      },

  
      fontFamily:{
        vazirFont : ["Myfont"]
      },

      colors: {
        "left-color" : "rgba(0, 0, 0 , 0.2)",
        'center-color': 'rgb(12, 74, 110 )',
        'right-color' :'rgb(3, 4, 94)' ,
        "my-color" : {
          100 :"#475569"
         }, 
        }, 

        screens : {
          'maxSide': '1585px',
        }
    },

    
  },
  plugins: [
    require('flowbite/plugin'),
  ],
}

