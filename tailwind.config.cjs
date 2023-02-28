/** @type {import('tailwindcss').Config} */
module.exports = {
  mode:'jit',
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'League_Spartan':['League Spartan','sans-serif']
      },
      colors:{
        'theme1':{
          'background':{
            main_background:'hsl(222, 26%, 31%)',
            keypad_toggle_background:'hsl(223, 31%, 20%)',
            screen:'hsl(224, 36%, 15%)'
          },

          'keys':{
            number_key_background:'hsl(30, 25%, 89%)',
            number_key_shadow:'hsl(28, 16%, 65%)',
            equal_toggle_key_background:'hsl(6, 63%, 50%)',
            equal_key_shadow:'hsl(6, 70%, 34%)',
            del_clear_key_background:'hsl(225, 21%, 49%)',
            del_clear_key_shadow:'hsl(224, 28%, 35%)',
          },
          'text':{
            dark_grayish_blue:'hsl(221, 14%, 31%)',
            white:'hsl(0, 0%, 100%)'
          }

        },
        'theme2':{
          'background':{
            main_background:'hsl(0, 0%, 90%)',
            keypad_toggle_background:'hsl(0, 5%, 81%)',
            screen:'hsl(0, 0%, 93%)'
          },

          'keys':{
            number_key_background:'hsl(45, 7%, 89%)',
            number_key_shadow:'hsl(35, 11%, 61%)',
            equal_toggle_key_background:'hsl(25, 98%, 40%)',
            equal_key_shadow:'hsl(25, 99%, 27%)',
            del_clear_key_background:'hsl(185, 42%, 37%)',
            del_clear_key_shadow:'hsl(185, 58%, 25%)',
          },
          'text':{
            dark_grayish_yellow:'hsl(60, 10%, 19%)',
            white:'hsl(0, 0%, 100%)'
          }

        },
        'theme3':{
          'background':{
            main_background:'hsl(268, 75%, 9%)',
            keypad_toggle_background:'hsl(268, 71%, 12%)',
            screen:'hsl(268, 71%, 12%)'
          },

          'keys':{
            number_key_background:'hsl(268, 47%, 21%)',
            number_key_shadow:'hsl(290, 70%, 36%)',
            equal_toggle_key_background:'hsl(176, 100%, 44%)',
            equal_key_shadow:'hsl(177, 92%, 70%)',
            del_clear_key_background:'hsl(281, 89%, 26%)',
            del_clear_key_shadow:'hsl(285, 91%, 52%)',
          },
          'text':{
            light_yellow:'hsl(52, 100%, 62%)',
            dark_blue:'hsl(198, 20%, 13%)',
            white:'hsl(0, 0%, 100%)'
          }
        }
      }
    },
  },
  plugins: [],
}
