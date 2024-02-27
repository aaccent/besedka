const autoScales = require('./postcss/auto-scales.cjs')

module.exports = {
  plugins: [
    autoScales({
      dodgeSelectors: [
        { type: 'startsWith', value: '.swiper' },
        { type: 'startsWith', value: '.carousel' },
        { type: 'includes', value: 'fancybox' },
        { type: 'includes', value: 'aos' },
      ],
      limitMediaWidth: false,
      initWidth: [
        { width: 1728 },
        { width: 390, mediaQuery: 'only screen and (max-width: 1000px)' },
      ],
    }),
  ],
}