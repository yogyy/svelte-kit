const config = {
  plugins: [
    //Some plugins, like tailwindcss/nesting, need to run before Tailwind,
    require('postcss-import'),
    require('tailwindcss/nesting'),
    require('tailwindcss'),
    require('autoprefixer')
    //But others, like autoprefixer, need to run after,
  ]
};

module.exports = config;
