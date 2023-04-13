/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{jsx,js}'],
  theme: {
    extend: {
      backgroundImage: {
        banner: `url('../public/images/banner-min.jpg')`,
      },
    },
  },
  plugins: [],
};
