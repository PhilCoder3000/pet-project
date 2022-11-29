module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      colors: {
        dark: {
          primary: '#EFFF04',
          black: '#111111',
          'dark-grey': '#242424',
          grey: '#979797',
          beige: '#FDFFE6',
          white: '#FFFFFF'
        },
        light: {
          primary: '#085FC6',
          white: '#FFFFFF'
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
