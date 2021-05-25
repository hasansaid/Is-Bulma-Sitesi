module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false,
  theme: {
    extend: {}
  },
  variants: {
    extend: {
      backgroundColor: ['checked'],
      borderColor: ['checked']
    }
  },
  plugins: []
};
