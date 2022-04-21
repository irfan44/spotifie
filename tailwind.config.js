/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable global-require */
const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Plus Jakarta Sans', ...fontFamily.sans],
      },
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
};
