/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      maxWidth: {
        body: '896px',
      },
      fontFamily: {
        suitHeavy: ['SUIT-Heavy'],
        suitSemiBold: ['SUIT-SemiBold'],
        suitLight: ['SUIT-Light'],
      },
      keyframes: {
        fadeIn: {
          '0%': {opacity: 0, transform: 'translateY(10px)'},
          '100%': {opacity: 1, transform: 'translateY(0)'},
        },
      },
      animation: {
        modal: 'fadeIn 1s ease running',
      },
    },
  },
  plugins: [],
};
