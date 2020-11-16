module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    fontFamily: {
      display: ['Poppins', 'sans-serif'],
      body: ['Poppins', 'sans-serif']
  },
    extend: {
      backgroundImage: theme => ({
        'header-bg': "url('https://images.pexels.com/photos/2917442/pexels-photo-2917442.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260')",
      })
    },
  },
  variants: {
    backgroundImage: ['responsive', 'hover', 'focus'],
  },
  plugins: [],
}
