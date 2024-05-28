/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      aspectRatio: {
        '3/1': '3 / 1',
      },
      screens: {
        sm: '480px',
        md: '768px',
        lg: '976px',
        xl: '1440px',
      },
      colors: {
        red: '#D41217',
        green: '#8DB524',
        purple: '#8961A6',
        orange: '#F39332',
        blue: '#41BFED',
        gray: '#7B858A',
        darkgray: '#C8C8CA',
        lightgray: '#E7E8E8',
        white: '#fff',
      },
      fontFamily: {
        sans: ['Trebuchet MS', 'Helvetica', 'Liberation Sans', 'sans-serif'],
      },
      opacity: {
        '20': '0.2',
      },
    },
  },
  plugins: [],
}
