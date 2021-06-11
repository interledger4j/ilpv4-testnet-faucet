module.exports = {
  purge: ['./src/**/*.html', './src/**/*.tsx', './src/**/*.jsx'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        interledger: [
          'Titillium Web',
          'Verdana',
          'Apple Color Emoji'
          // 'Segoe UI Emoji',
          // 'Segoe UI Symbol',
          // 'Noto Color Emoji'
        ]
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
