module.exports = {
  purge: [
    'index.html',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'primary': '#EF4E22',
        'second': '#4C4C4E'
      }
    },
    fontFamily: {
      'sans': ['Oswald']
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
