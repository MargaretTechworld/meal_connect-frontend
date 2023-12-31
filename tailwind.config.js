/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        green: '#72b600',
        orange: '#fe6814',
      },
      fontSize: {
        xxs: '.5rem',
      },
      width: {
        seventyP: '70%',
      },
      screens: {
        vss: '480px',
        ss: '600px',
      },
    },
  },
  plugins: [],
};
